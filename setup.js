/*global d3, crossfilter, barChart, points */

// partially adapted from crossfilter's example

var map;
var markers = [];

var filter;
var val1Dimension;
var val1Grouping;
var val2Dimension;
var val2Grouping;
var yelpDimension;
var yelpGrouping;
var reviewsDimension;
var reviewsGrouping;
var charts;
var domCharts;

var latDimension;
var lngDimension;
var idDimension;
var idGrouping;

function init() {
  initMap();
  initCrossfilter();

  // bind map bounds to lat/lng filter dimensions
  latDimension = filter.dimension(function(p) { return p.lat; });
  lngDimension = filter.dimension(function(p) { return p.lng; });
  google.maps.event.addListener(map, 'bounds_changed', function() {
    var bounds = this.getBounds();
    var northEast = bounds.getNorthEast();
    var southWest = bounds.getSouthWest();

    // NOTE: need to be careful with the dateline here
    lngDimension.filterRange([southWest.lng(), northEast.lng()]);
    latDimension.filterRange([southWest.lat(), northEast.lat()]);

    // NOTE: may want to debounce here, perhaps on requestAnimationFrame
    updateCharts();
  });

  // dimension and group for looking up currently selected markers
  idDimension = filter.dimension(function(p, i) { return i; });
  idGrouping = idDimension.group(function(id) { return id; });

  renderAll();
}

function initMap() {
  google.maps.visualRefresh = true;

  var myLatlng = new google.maps.LatLng(34.9085866,-80.3685852);
  var mapOptions = {
    zoom: 6,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false,
    streetViewControl: false,
    panControl: false
  };
  map = new google.maps.Map(document.getElementById('map-div'), mapOptions);

  // create array of markers from points and add them to the map
  for (var i = 0; i < points.length; i++) {
    var point = points[i];
    markers[i] = new google.maps.Marker({
      position: new google.maps.LatLng(point.lat, point.lng),
      map: map,
      title: 'marker ' + i
    });
  }
}

function initCrossfilter() {
  filter = crossfilter(points);

  // simple dimensions and groupings for major variables
  val1Dimension = filter.dimension(
      function(p) {
        return p.POPDensity;
      });
  val1Grouping = val1Dimension.group(
      function(v) {
        return Math.floor(v / 10) * 10;
      });

  val2Dimension = filter.dimension(
      function(p) {
        return p.MedianIncome;
      });
  val2Grouping = val2Dimension.group(
      function(v) {
        return Math.floor(v / 1000) * 1000;
      });

  yelpDimension = filter.dimension(
      function(p) {
        return p.YelpRating;
      });
  yelpGrouping = yelpDimension.group(
      function(v) {
        return v;
      });

  reviewsDimension = filter.dimension(
      function(p) {
        return p.NumReviews;
      });
  reviewsGrouping = reviewsDimension.group(
      function(v) {
        return Math.floor(v / 50) * 50;
      });

  // initialize charts (helper function in chart.js)
  // taken directly from crossfilter's example
  charts = [
    barChart()
      .dimension(val1Dimension)
      .group(val1Grouping)
      .x(d3.scale.linear()
          .domain([0, 5000])
          .rangeRound([0, 20 * 20])),

    barChart()
      .dimension(val2Dimension)
      .group(val2Grouping)
      .x(d3.scale.linear()
          .domain([0, 200000])
          .rangeRound([0, 20 * 20]))

    barChart()
      .dimension(yelpDimension)
      .group(yelpGrouping)
      .x(d3.scale.linear()
          .domain([0, 5])
          .rangeRound([0, 10 * 5]))

    barChart()
      .dimension(reviewsDimension)
      .group(reviewsGrouping)
      .x(d3.scale.linear()
          .domain([0, 1500])
          .rangeRound([0, 20 * 15]))
  ];

  // bind charts to dom
  domCharts = d3.selectAll(".chart")
      .data(charts)
      .each(function(chart) { chart.on("brush", renderAll).on("brushend", renderAll); });
}

// Renders the specified chart
function render(method) {
  d3.select(this).call(method);
}

// Renders all of the charts
function updateCharts() {
  domCharts.each(render);
}

// set visibility of markers based on crossfilter
function updateMarkers() {
  var pointIds = idGrouping.all();
  for (var i = 0; i < pointIds.length; i++) {
    var pointId = pointIds[i];
    markers[pointId.key].setVisible(pointId.value > 0);
  }
}

// Whenever the brush moves, re-render charts and map markers
function renderAll() {
  updateMarkers();
  updateCharts();
}

// Reset a particular histogram
window.reset = function(i) {
  charts[i].filter(null);
  renderAll();
};