/*global d3, crossfilter, barChart, points */

// partially adapted from crossfilter's example

var map;
var markers = [];

var filter;
var POPDensityDimension;
var POPDensityGrouping;
var LANDSQMIDimension;
var LANDSQMIGrouping;
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

  var myLatlng = new google.maps.LatLng(34.8444413,-81.7846179);
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
  POPDensityDimension = filter.dimension(
      function(p) {
        return p.POPDensity;
      });
  POPDensityGrouping = POPDensityDimension.group(
      function(v) {
        return Math.floor(v);
      });

  LANDSQMIDimension = filter.dimension(
      function(p) {
        return p.LANDSQMI;
      });
  LANDSQMIGrouping = LANDSQMIDimension.group(
      function(v) {
        return Math.floor(v / 25) * 25;
      });

  // initialize charts (helper function in chart.js)
  // taken directly from crossfilter's example
  charts = [
    barChart()
      .dimension(POPDensityDimension)
      .group(POPDensityGrouping)
      .x(d3.scale.linear()
          .domain([0, 2000])
          .rangeRound([0, 200 * 200])),

    barChart()
      .dimension(LANDSQMIDimension)
      .group(LANDSQMIGrouping)
      .x(d3.scale.linear()
          .domain([0, 100])
          .rangeRound([0, 4 * 1]))
      .filter([10, 20])
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
