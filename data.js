// simple example data
var points = [
  {YelpRating: 4.5, NumReviews: 3, lat: 32.0518, lng: -81.12407, POPDensity: 1238.969738, LANDSQMI: 30.03, MedianIncome: 43051},
  {YelpRating: 3, NumReviews: 830, lat: 32.08091, lng: -81.09206, POPDensity: 4534.694199, LANDSQMI: 4.78, MedianIncome: 23090},
  {YelpRating: 4.5, NumReviews: 29, lat: 32.08435, lng: -81.09829, POPDensity: 4534.694199, LANDSQMI: 4.78, MedianIncome: 23090},
  {YelpRating: 4.5, NumReviews: 30, lat: 32.08702, lng: -81.1119, POPDensity: 1214.882456, LANDSQMI: 19.47, MedianIncome: 68834},
  {YelpRating: 2.5, NumReviews: 66, lat: 32.15457, lng: -80.76464, POPDensity: 780.829473, LANDSQMI: 20.63, MedianIncome: 70079},
  {YelpRating: 5, NumReviews: 6, lat: 32.2221107, lng: -80.7044373, POPDensity: 779.1252411, LANDSQMI: 30.47, MedianIncome: 71124},
  {YelpRating: 4, NumReviews: 40, lat: 32.2715652, lng: -80.9189465, POPDensity: 329.500134, LANDSQMI: 103.05, MedianIncome: 57665},
  {YelpRating: 4.5, NumReviews: 19, lat: 32.3192116, lng: -80.9380078, POPDensity: 56.29735758, LANDSQMI: 237.2, MedianIncome: 35642},
  {YelpRating: 4, NumReviews: 4, lat: 32.448101, lng: -81.7799377, POPDensity: 281.886877, LANDSQMI: 145.94, MedianIncome: 27908},
  {YelpRating: 4.5, NumReviews: 22, lat: 32.74128, lng: -80.04152, POPDensity: 191.2177827, LANDSQMI: 107.09, MedianIncome: 60954},
  {YelpRating: 4.5, NumReviews: 32, lat: 32.75986, lng: -79.97371, POPDensity: 913.6582062, LANDSQMI: 39.24, MedianIncome: 59216},
  {YelpRating: 3.5, NumReviews: 12, lat: 32.77848, lng: -79.92726, POPDensity: 7023.812095, LANDSQMI: 1.55, MedianIncome: 54405},
  {YelpRating: 5, NumReviews: 42, lat: 32.78995, lng: -79.93674, POPDensity: 7023.812095, LANDSQMI: 1.55, MedianIncome: 54405},
  {YelpRating: 4.5, NumReviews: 61, lat: 32.8013133, lng: -79.9459924, POPDensity: 3896.629681, LANDSQMI: 5.34, MedianIncome: 27108},
  {YelpRating: 4, NumReviews: 54, lat: 32.8070717, lng: -79.9450073, POPDensity: 3896.629681, LANDSQMI: 5.34, MedianIncome: 27108},
  {YelpRating: 4.5, NumReviews: 11, lat: 32.81577, lng: -79.95533, POPDensity: 1771.012457, LANDSQMI: 14.87, MedianIncome: 24650},
  {YelpRating: 4.5, NumReviews: 10, lat: 32.83557, lng: -79.87372, POPDensity: 1467.45446, LANDSQMI: 29.74, MedianIncome: 68721},
  {YelpRating: 4.5, NumReviews: 9, lat: 32.83980708, lng: -79.86850948, POPDensity: 1467.45446, LANDSQMI: 29.74, MedianIncome: 68721},
  {YelpRating: 4, NumReviews: 19, lat: 32.8423228, lng: -80.0022025, POPDensity: 1771.012457, LANDSQMI: 14.87, MedianIncome: 24650},
  {YelpRating: 3.5, NumReviews: 58, lat: 32.84673, lng: -79.877111, POPDensity: 1467.45446, LANDSQMI: 29.74, MedianIncome: 68721},
  {YelpRating: 4.5, NumReviews: 145, lat: 32.8536453, lng: -80.0029678, POPDensity: 1771.012457, LANDSQMI: 14.87, MedianIncome: 24650},
  {YelpRating: 4.5, NumReviews: 26, lat: 32.8734948, lng: -79.9711949, POPDensity: 1771.012457, LANDSQMI: 14.87, MedianIncome: 24650},
  {YelpRating: 4.5, NumReviews: 3, lat: 32.873542, lng: -79.9722, POPDensity: 1771.012457, LANDSQMI: 14.87, MedianIncome: 24650},
  {YelpRating: 4.5, NumReviews: 52, lat: 32.92384338, lng: -80.07624054, POPDensity: 1745.569497, LANDSQMI: 13.49, MedianIncome: 42190},
  {YelpRating: 4.5, NumReviews: 30, lat: 33.0186123, lng: -80.1758397, POPDensity: 493.2017633, LANDSQMI: 135.3, MedianIncome: 51814},
  {YelpRating: 4.5, NumReviews: 17, lat: 33.0235, lng: -80.1716, POPDensity: 493.2017633, LANDSQMI: 135.3, MedianIncome: 51814},
  {YelpRating: 4.5, NumReviews: 6, lat: 33.46050134, lng: -81.9622098, POPDensity: 800.7284828, LANDSQMI: 20.54, MedianIncome: 16631},
  {YelpRating: 4, NumReviews: 170, lat: 33.66879, lng: -78.93902, POPDensity: 1139.099262, LANDSQMI: 23.7, MedianIncome: 35352},
  {YelpRating: 4.5, NumReviews: 60, lat: 33.6983564, lng: -78.8885787, POPDensity: 1139.099262, LANDSQMI: 23.7, MedianIncome: 35352},
  {YelpRating: 4.5, NumReviews: 32, lat: 33.95212, lng: -78.04419, POPDensity: 212.9366667, LANDSQMI: 75.73, MedianIncome: 50079},
  {YelpRating: 4.5, NumReviews: 29, lat: 33.96994844, lng: -81.02519858, POPDensity: 1803.262807, LANDSQMI: 11.42, MedianIncome: 29557},
  {YelpRating: 4.5, NumReviews: 14, lat: 33.97119522, lng: -81.02857971, POPDensity: 1803.262807, LANDSQMI: 11.42, MedianIncome: 29557},
  {YelpRating: 4.5, NumReviews: 38, lat: 33.9726715, lng: -81.0111008, POPDensity: 1803.262807, LANDSQMI: 11.42, MedianIncome: 29557},
  {YelpRating: 4.5, NumReviews: 6, lat: 33.98370785, lng: -83.3485879, POPDensity: 882.7712455, LANDSQMI: 23.6, MedianIncome: 20884},
  {YelpRating: 4, NumReviews: 195, lat: 33.99739, lng: -81.03151, POPDensity: 1803.262807, LANDSQMI: 11.42, MedianIncome: 29557},
  {YelpRating: 3.5, NumReviews: 32, lat: 33.99930338, lng: -81.04121201, POPDensity: 1803.262807, LANDSQMI: 11.42, MedianIncome: 29557},
  {YelpRating: 4, NumReviews: 41, lat: 34.04195571, lng: -77.90474061, POPDensity: 1173.119556, LANDSQMI: 5.14, MedianIncome: 61545},
  {YelpRating: 4, NumReviews: 37, lat: 34.1748612, lng: -79.8322981, POPDensity: 804.8148553, LANDSQMI: 53.7, MedianIncome: 47202},
  {YelpRating: 5, NumReviews: 23, lat: 34.22111092, lng: -77.88660346, POPDensity: 2562.762442, LANDSQMI: 14.07, MedianIncome: 34356},
  {YelpRating: 4.5, NumReviews: 21, lat: 34.2259664, lng: -77.9487557, POPDensity: 914.4553215, LANDSQMI: 24.16, MedianIncome: 27702},
  {YelpRating: 5, NumReviews: 10, lat: 34.23423385, lng: -77.94777618, POPDensity: 914.4553215, LANDSQMI: 24.16, MedianIncome: 27702},
  {YelpRating: 4, NumReviews: 434, lat: 34.23577391, lng: -77.94908106, POPDensity: 914.4553215, LANDSQMI: 24.16, MedianIncome: 27702},
  {YelpRating: 3, NumReviews: 47, lat: 34.23700981, lng: -77.94791504, POPDensity: 914.4553215, LANDSQMI: 24.16, MedianIncome: 27702},
  {YelpRating: 5, NumReviews: 11, lat: 34.238739, lng: -77.9485321, POPDensity: 914.4553215, LANDSQMI: 24.16, MedianIncome: 27702},
  {YelpRating: 4.5, NumReviews: 52, lat: 34.2403488, lng: -77.9454575, POPDensity: 914.4553215, LANDSQMI: 24.16, MedianIncome: 27702},
  {YelpRating: 4.5, NumReviews: 30, lat: 34.24181208, lng: -77.89198036, POPDensity: 2562.762442, LANDSQMI: 14.07, MedianIncome: 34356},
  {YelpRating: 5, NumReviews: 14, lat: 34.25972, lng: -77.84678, POPDensity: 1211.377011, LANDSQMI: 24.07, MedianIncome: 51580},
  {YelpRating: 5, NumReviews: 2, lat: 34.27288278, lng: -77.81871188, POPDensity: 764.1328186, LANDSQMI: 41.83, MedianIncome: 66553},
  {YelpRating: 5, NumReviews: 4, lat: 34.50562, lng: -82.65196, POPDensity: 573.9735249, LANDSQMI: 47.98, MedianIncome: 39205},
  {YelpRating: 4.5, NumReviews: 86, lat: 34.7209549, lng: -76.712068, POPDensity: 1016.009037, LANDSQMI: 14.2, MedianIncome: 43093},
  {YelpRating: 4.5, NumReviews: 24, lat: 34.7967616, lng: -82.4245252, POPDensity: 1345.40215, LANDSQMI: 25.58, MedianIncome: 41333},
  {YelpRating: 4.5, NumReviews: 16, lat: 34.8043512, lng: -82.3496308, POPDensity: 1197.355504, LANDSQMI: 28.8, MedianIncome: 48809},
  {YelpRating: 5, NumReviews: 7, lat: 34.8058891, lng: -82.3781586, POPDensity: 1345.40215, LANDSQMI: 25.58, MedianIncome: 41333},
  {YelpRating: 4.5, NumReviews: 11, lat: 34.83839931, lng: -82.40651339, POPDensity: 2466.242027, LANDSQMI: 4.28, MedianIncome: 32068},
  {YelpRating: 4, NumReviews: 23, lat: 34.846625, lng: -82.34507, POPDensity: 1197.355504, LANDSQMI: 28.8, MedianIncome: 48809},
  {YelpRating: 5, NumReviews: 4, lat: 34.8505552, lng: -82.394, POPDensity: 2466.242027, LANDSQMI: 4.28, MedianIncome: 32068},
  {YelpRating: 5, NumReviews: 21, lat: 34.8581696, lng: -84.3298874, POPDensity: 75.15730413, LANDSQMI: 148.65, MedianIncome: 29751},
  {YelpRating: 5, NumReviews: 3, lat: 34.865768, lng: -82.415835, POPDensity: 2466.242027, LANDSQMI: 4.28, MedianIncome: 32068},
  {YelpRating: 3.5, NumReviews: 127, lat: 34.86581, lng: -84.325671, POPDensity: 75.15730413, LANDSQMI: 148.65, MedianIncome: 29751},
  {YelpRating: 4.5, NumReviews: 10, lat: 34.87066595, lng: -84.31761956, POPDensity: 75.15730413, LANDSQMI: 148.65, MedianIncome: 29751},
  {YelpRating: 4, NumReviews: 12, lat: 34.92548, lng: -80.74301, POPDensity: 419.4247229, LANDSQMI: 107.52, MedianIncome: 93297},
  {YelpRating: 4.5, NumReviews: 123, lat: 34.93043, lng: -81.02497, POPDensity: 436.2334887, LANDSQMI: 120.04, MedianIncome: 37152},
  {YelpRating: 4.5, NumReviews: 14, lat: 34.9486839, lng: -81.9358536, POPDensity: 833.6632523, LANDSQMI: 19.03, MedianIncome: 26656},
  {YelpRating: 4.5, NumReviews: 24, lat: 34.95243599, lng: -81.92953013, POPDensity: 833.6632523, LANDSQMI: 19.03, MedianIncome: 26656},
  {YelpRating: 3.5, NumReviews: 40, lat: 34.9670526, lng: -82.4426219, POPDensity: 197.5750042, LANDSQMI: 105.85, MedianIncome: 46409},
  {YelpRating: 4.5, NumReviews: 7, lat: 34.98049201, lng: -80.55069264, POPDensity: 199.2248085, LANDSQMI: 132.07, MedianIncome: 47781},
  {YelpRating: 1, NumReviews: 1, lat: 34.98917423, lng: -84.36991889, POPDensity: 31.88528548, LANDSQMI: 75.36, MedianIncome: 42612},
  {YelpRating: 4.5, NumReviews: 14, lat: 35.03705, lng: -80.9614299, POPDensity: 1316.968194, LANDSQMI: 19.01, MedianIncome: 94463},
  {YelpRating: 3, NumReviews: 157, lat: 35.053389, lng: -78.882968, POPDensity: 1397.574371, LANDSQMI: 12.28, MedianIncome: 25465},
  {YelpRating: 5, NumReviews: 10, lat: 35.05412, lng: -83.19538, POPDensity: 36.77552515, LANDSQMI: 86.93, MedianIncome: 50459},
  {YelpRating: 4, NumReviews: 302, lat: 35.070571, lng: -78.955151, POPDensity: 1847.13748, LANDSQMI: 16.73, MedianIncome: 46919},
  {YelpRating: 4, NumReviews: 39, lat: 35.0884672, lng: -84.034915, POPDensity: 55.35957413, LANDSQMI: 333.73, MedianIncome: 34451},
  {YelpRating: 3.5, NumReviews: 74, lat: 35.10655, lng: -77.03896, POPDensity: 246.4845247, LANDSQMI: 117.33, MedianIncome: 46376},
  {YelpRating: 5, NumReviews: 8, lat: 35.108064, lng: -77.040954, POPDensity: 246.4845247, LANDSQMI: 117.33, MedianIncome: 46376},
  {YelpRating: 3, NumReviews: 48, lat: 35.113326, lng: -83.025183, POPDensity: 22.3581694, LANDSQMI: 45.31, MedianIncome: 56250},
  {YelpRating: 3.5, NumReviews: 37, lat: 35.14405558, lng: -79.42497253, POPDensity: 182.6804559, LANDSQMI: 63.94, MedianIncome: 37672},
  {YelpRating: 4, NumReviews: 8, lat: 35.15247, lng: -80.68, POPDensity: 1282.704599, LANDSQMI: 38.7, MedianIncome: 51527},
  {YelpRating: 4, NumReviews: 38, lat: 35.1716594, lng: -80.8793263, POPDensity: 1633.788207, LANDSQMI: 14.81, MedianIncome: 38832},
  {YelpRating: 4.5, NumReviews: 35, lat: 35.1806717, lng: -83.3842392, POPDensity: 89.75793445, LANDSQMI: 301.25, MedianIncome: 37066},
  {YelpRating: 4.5, NumReviews: 102, lat: 35.18549, lng: -80.88092, POPDensity: 1633.788207, LANDSQMI: 14.81, MedianIncome: 38832},
  {YelpRating: 4.5, NumReviews: 21, lat: 35.1873602, lng: -79.37159632, POPDensity: 477.9842321, LANDSQMI: 29.12, MedianIncome: 47982},
  {YelpRating: 4, NumReviews: 266, lat: 35.187442, lng: -80.881973, POPDensity: 1633.788207, LANDSQMI: 14.81, MedianIncome: 38832},
  {YelpRating: 4, NumReviews: 3, lat: 35.18772422, lng: -83.37247947, POPDensity: 89.75793445, LANDSQMI: 301.25, MedianIncome: 37066},
  {YelpRating: 4, NumReviews: 17, lat: 35.18843071, lng: -80.89100227, POPDensity: 1633.788207, LANDSQMI: 14.81, MedianIncome: 38832},
  {YelpRating: 4.5, NumReviews: 62, lat: 35.194561, lng: -80.8748169, POPDensity: 1633.788207, LANDSQMI: 14.81, MedianIncome: 38832},
  {YelpRating: 5, NumReviews: 4, lat: 35.1988182, lng: -83.8126373, POPDensity: 84.67964007, LANDSQMI: 63.23, MedianIncome: 30595},
  {YelpRating: 4.5, NumReviews: 10, lat: 35.1992493, lng: -83.8127975, POPDensity: 84.67964007, LANDSQMI: 63.23, MedianIncome: 30595},
  {YelpRating: 4.5, NumReviews: 15, lat: 35.20055395, lng: -83.82658775, POPDensity: 84.67964007, LANDSQMI: 63.23, MedianIncome: 30595},
  {YelpRating: 4.5, NumReviews: 117, lat: 35.2011795, lng: -80.8696365, POPDensity: 3410.674309, LANDSQMI: 3.32, MedianIncome: 64604},
  {YelpRating: 4, NumReviews: 56, lat: 35.201444, lng: -80.873595, POPDensity: 1633.788207, LANDSQMI: 14.81, MedianIncome: 38832},
  {YelpRating: 4, NumReviews: 134, lat: 35.20896627, lng: -80.86269923, POPDensity: 3410.674309, LANDSQMI: 3.32, MedianIncome: 64604},
  {YelpRating: 4.5, NumReviews: 104, lat: 35.21699882, lng: -80.85719646, POPDensity: 3410.674309, LANDSQMI: 3.32, MedianIncome: 64604},
  {YelpRating: 4.5, NumReviews: 47, lat: 35.21842, lng: -80.81303, POPDensity: 3715.902231, LANDSQMI: 11.82, MedianIncome: 35310},
  {YelpRating: 4, NumReviews: 77, lat: 35.22059, lng: -80.85781, POPDensity: 3410.674309, LANDSQMI: 3.32, MedianIncome: 64604},
  {YelpRating: 4.5, NumReviews: 51, lat: 35.23067829, lng: -80.82650381, POPDensity: 1685.84842, LANDSQMI: 7.06, MedianIncome: 21087},
  {YelpRating: 3, NumReviews: 1, lat: 35.23318, lng: -82.73379, POPDensity: 153.9665441, LANDSQMI: 125.66, MedianIncome: 40732},
  {YelpRating: 3.5, NumReviews: 18, lat: 35.2334061, lng: -82.7332153, POPDensity: 153.9665441, LANDSQMI: 125.66, MedianIncome: 40732},
  {YelpRating: 5, NumReviews: 2, lat: 35.23642773, lng: -81.01667743, POPDensity: 732.6959157, LANDSQMI: 27.36, MedianIncome: 52292},
  {YelpRating: 4, NumReviews: 2, lat: 35.23652, lng: -82.3481, POPDensity: 60.63528199, LANDSQMI: 55.71, MedianIncome: 48359},
  {YelpRating: 4.5, NumReviews: 157, lat: 35.2403717, lng: -80.8147964, POPDensity: 3715.902231, LANDSQMI: 11.82, MedianIncome: 35310},
  {YelpRating: 4, NumReviews: 55, lat: 35.2405352, lng: -80.8132754, POPDensity: 3715.902231, LANDSQMI: 11.82, MedianIncome: 35310},
  {YelpRating: 4, NumReviews: 26, lat: 35.24091503, lng: -80.86752877, POPDensity: 1552.514033, LANDSQMI: 22.01, MedianIncome: 28435},
  {YelpRating: 3.5, NumReviews: 407, lat: 35.24531, lng: -80.80956, POPDensity: 3715.902231, LANDSQMI: 11.82, MedianIncome: 35310},
  {YelpRating: 4, NumReviews: 91, lat: 35.2472801, lng: -80.804863, POPDensity: 3715.902231, LANDSQMI: 11.82, MedianIncome: 35310},
  {YelpRating: 4.5, NumReviews: 39, lat: 35.25168, lng: -80.81264, POPDensity: 1685.84842, LANDSQMI: 7.06, MedianIncome: 21087},
  {YelpRating: 4.5, NumReviews: 63, lat: 35.253612, lng: -82.706401, POPDensity: 153.9665441, LANDSQMI: 125.66, MedianIncome: 40732},
  {YelpRating: 5, NumReviews: 1, lat: 35.25421, lng: -82.19534, POPDensity: 139.7917005, LANDSQMI: 45.57, MedianIncome: 43841},
  {YelpRating: 4, NumReviews: 35, lat: 35.262656, lng: -77.5825349, POPDensity: 192.1021796, LANDSQMI: 106.14, MedianIncome: 28529},
  {YelpRating: 5, NumReviews: 1, lat: 35.2736422, lng: -82.7051388, POPDensity: 82.13605881, LANDSQMI: 82.95, MedianIncome: 41315},
  {YelpRating: 4.5, NumReviews: 20, lat: 35.29022, lng: -81.53997, POPDensity: 262.5138055, LANDSQMI: 107.03, MedianIncome: 34831},
  {YelpRating: 4.5, NumReviews: 38, lat: 35.3147499, lng: -82.45884, POPDensity: 324.9383161, LANDSQMI: 100.6, MedianIncome: 36683},
  {YelpRating: 4.5, NumReviews: 4, lat: 35.31584, lng: -82.46088, POPDensity: 324.9383161, LANDSQMI: 100.6, MedianIncome: 36683},
  {YelpRating: 5, NumReviews: 10, lat: 35.3159659, lng: -82.46041104, POPDensity: 324.9383161, LANDSQMI: 100.6, MedianIncome: 36683},
  {YelpRating: 4, NumReviews: 31, lat: 35.3224106, lng: -82.4590988, POPDensity: 324.9383161, LANDSQMI: 100.6, MedianIncome: 36683},
  {YelpRating: 5, NumReviews: 2, lat: 35.32788, lng: -82.47973, POPDensity: 861.5259307, LANDSQMI: 16.45, MedianIncome: 54146},
  {YelpRating: 3.5, NumReviews: 13, lat: 35.3728399, lng: -83.23602, POPDensity: 150.1423761, LANDSQMI: 107.3, MedianIncome: 41446},
  {YelpRating: 4.5, NumReviews: 36, lat: 35.3739737, lng: -83.2220192, POPDensity: 150.1423761, LANDSQMI: 107.3, MedianIncome: 41446},
  {YelpRating: 4.5, NumReviews: 44, lat: 35.37399048, lng: -83.22020191, POPDensity: 150.1423761, LANDSQMI: 107.3, MedianIncome: 41446},
  {YelpRating: 4.5, NumReviews: 5, lat: 35.3771514, lng: -82.5617806, POPDensity: 298.1477785, LANDSQMI: 23.22, MedianIncome: 60061},
  {YelpRating: 4.5, NumReviews: 16, lat: 35.4150032, lng: -80.6027893, POPDensity: 808.0502287, LANDSQMI: 68.6, MedianIncome: 59257},
  {YelpRating: 4, NumReviews: 27, lat: 35.4156528, lng: -80.6062991, POPDensity: 808.0502287, LANDSQMI: 68.6, MedianIncome: 59257},
  {YelpRating: 4.5, NumReviews: 69, lat: 35.4311926, lng: -83.4461324, POPDensity: 63.65154109, LANDSQMI: 136.46, MedianIncome: 43855},
  {YelpRating: 4.5, NumReviews: 198, lat: 35.43139723, lng: -82.55180026, POPDensity: 386.2464856, LANDSQMI: 42.7, MedianIncome: 45273},
  {YelpRating: 4, NumReviews: 29, lat: 35.43699, lng: -80.84365, POPDensity: 817.112289, LANDSQMI: 63.8, MedianIncome: 83519},
  {YelpRating: 4.5, NumReviews: 11, lat: 35.43733142, lng: -82.53073783, POPDensity: 386.2464856, LANDSQMI: 42.7, MedianIncome: 45273},
  {YelpRating: 5, NumReviews: 6, lat: 35.44027, lng: -82.2499799, POPDensity: 35.94104064, LANDSQMI: 3.17, MedianIncome: 39625},
  {YelpRating: 5, NumReviews: 19, lat: 35.44451042, lng: -82.53619387, POPDensity: 571.2818916, LANDSQMI: 32.95, MedianIncome: 60077},
  {YelpRating: 4.5, NumReviews: 62, lat: 35.4575619, lng: -80.8547775, POPDensity: 1684.152831, LANDSQMI: 14.48, MedianIncome: 81737},
  {YelpRating: 4.5, NumReviews: 39, lat: 35.46082, lng: -80.84707, POPDensity: 1684.152831, LANDSQMI: 14.48, MedianIncome: 81737},
  {YelpRating: 4, NumReviews: 14, lat: 35.47978, lng: -80.89107, POPDensity: 1684.152831, LANDSQMI: 14.48, MedianIncome: 81737},
  {YelpRating: 4, NumReviews: 39, lat: 35.4859559, lng: -82.5549761, POPDensity: 748.5762599, LANDSQMI: 38.33, MedianIncome: 45833},
  {YelpRating: 4.5, NumReviews: 4, lat: 35.4878311, lng: -82.5248032, POPDensity: 748.5762599, LANDSQMI: 38.33, MedianIncome: 45833},
  {YelpRating: 4, NumReviews: 61, lat: 35.4903297, lng: -82.987587, POPDensity: 278.0104768, LANDSQMI: 74.51, MedianIncome: 42419},
  {YelpRating: 4, NumReviews: 52, lat: 35.4921913, lng: -82.9866714, POPDensity: 278.0104768, LANDSQMI: 74.51, MedianIncome: 42419},
  {YelpRating: 4, NumReviews: 35, lat: 35.49345779, lng: -82.99100494, POPDensity: 278.0104768, LANDSQMI: 74.51, MedianIncome: 42419},
  {YelpRating: 4.5, NumReviews: 6, lat: 35.5033607, lng: -82.5224609, POPDensity: 748.5762599, LANDSQMI: 38.33, MedianIncome: 45833},
  {YelpRating: 4.5, NumReviews: 19, lat: 35.50411224, lng: -82.99353027, POPDensity: 278.0104768, LANDSQMI: 74.51, MedianIncome: 42419},
  {YelpRating: 4.5, NumReviews: 19, lat: 35.507732, lng: -78.74861, POPDensity: 287.3181442, LANDSQMI: 61.16, MedianIncome: 43289},
  {YelpRating: 5, NumReviews: 62, lat: 35.54248541, lng: -82.52180257, POPDensity: 748.5762599, LANDSQMI: 38.33, MedianIncome: 45833},
  {YelpRating: 4.5, NumReviews: 33, lat: 35.5660215, lng: -82.5398124, POPDensity: 748.5762599, LANDSQMI: 38.33, MedianIncome: 45833},
  {YelpRating: 4, NumReviews: 42, lat: 35.56641, lng: -82.53792, POPDensity: 748.5762599, LANDSQMI: 38.33, MedianIncome: 45833},
  {YelpRating: 4.5, NumReviews: 94, lat: 35.56809462, lng: -82.54384735, POPDensity: 748.5762599, LANDSQMI: 38.33, MedianIncome: 45833},
  {YelpRating: 4.5, NumReviews: 43, lat: 35.56847763, lng: -78.33999162, POPDensity: 220.0577663, LANDSQMI: 104.11, MedianIncome: 41386},
  {YelpRating: 4.5, NumReviews: 11, lat: 35.57047, lng: -82.54568, POPDensity: 748.5762599, LANDSQMI: 38.33, MedianIncome: 45833},
  {YelpRating: 4.5, NumReviews: 121, lat: 35.57174, lng: -82.5014, POPDensity: 748.5762599, LANDSQMI: 38.33, MedianIncome: 45833},
  {YelpRating: 4, NumReviews: 77, lat: 35.57943, lng: -82.588867, POPDensity: 1015.454487, LANDSQMI: 37.96, MedianIncome: 41548},
  {YelpRating: 4, NumReviews: 17, lat: 35.58009, lng: -80.80454, POPDensity: 465.5857941, LANDSQMI: 73.75, MedianIncome: 53157},
  {YelpRating: 4.5, NumReviews: 11, lat: 35.58136879, lng: -78.79995318, POPDensity: 401.2691541, LANDSQMI: 96.93, MedianIncome: 66512},
  {YelpRating: 4, NumReviews: 30, lat: 35.5815315, lng: -82.6043091, POPDensity: 1015.454487, LANDSQMI: 37.96, MedianIncome: 41548},
  {YelpRating: 4.5, NumReviews: 232, lat: 35.5861437, lng: -82.5663199, POPDensity: 2955.248354, LANDSQMI: 5.08, MedianIncome: 29441},
  {YelpRating: 4.5, NumReviews: 69, lat: 35.5867, lng: -82.57064, POPDensity: 1015.454487, LANDSQMI: 37.96, MedianIncome: 41548},
  {YelpRating: 4.5, NumReviews: 171, lat: 35.588049, lng: -82.553796, POPDensity: 2955.248354, LANDSQMI: 5.08, MedianIncome: 29441},
  {YelpRating: 4.5, NumReviews: 6, lat: 35.58857898, lng: -82.55239505, POPDensity: 2955.248354, LANDSQMI: 5.08, MedianIncome: 29441},
  {YelpRating: 4, NumReviews: 175, lat: 35.5887489, lng: -82.5530014, POPDensity: 2955.248354, LANDSQMI: 5.08, MedianIncome: 29441},
  {YelpRating: 4, NumReviews: 73, lat: 35.5891, lng: -82.5534799, POPDensity: 2955.248354, LANDSQMI: 5.08, MedianIncome: 29441},
  {YelpRating: 4.5, NumReviews: 169, lat: 35.5891991, lng: -82.5552216, POPDensity: 2955.248354, LANDSQMI: 5.08, MedianIncome: 29441},
  {YelpRating: 4, NumReviews: 87, lat: 35.589452, lng: -82.554524, POPDensity: 2955.248354, LANDSQMI: 5.08, MedianIncome: 29441},
  {YelpRating: 3.5, NumReviews: 137, lat: 35.5911832, lng: -82.555782, POPDensity: 2955.248354, LANDSQMI: 5.08, MedianIncome: 29441},
  {YelpRating: 4.5, NumReviews: 103, lat: 35.5911984, lng: -82.5559403, POPDensity: 2955.248354, LANDSQMI: 5.08, MedianIncome: 29441},
  {YelpRating: 4.5, NumReviews: 88, lat: 35.59142, lng: -82.55211, POPDensity: 2955.248354, LANDSQMI: 5.08, MedianIncome: 29441},
  {YelpRating: 4, NumReviews: 1084, lat: 35.59169, lng: -82.55109, POPDensity: 2955.248354, LANDSQMI: 5.08, MedianIncome: 29441},
  {YelpRating: 3.5, NumReviews: 213, lat: 35.59172, lng: -82.55529, POPDensity: 2955.248354, LANDSQMI: 5.08, MedianIncome: 29441},
  {YelpRating: 3.5, NumReviews: 82, lat: 35.5927702, lng: -78.79373422, POPDensity: 401.2691541, LANDSQMI: 96.93, MedianIncome: 66512},
  {YelpRating: 4, NumReviews: 218, lat: 35.5941199, lng: -82.55534, POPDensity: 2955.248354, LANDSQMI: 5.08, MedianIncome: 29441},
  {YelpRating: 4, NumReviews: 84, lat: 35.594796, lng: -82.552285, POPDensity: 2955.248354, LANDSQMI: 5.08, MedianIncome: 29441},
  {YelpRating: 4, NumReviews: 30, lat: 35.5958962, lng: -78.797432, POPDensity: 401.2691541, LANDSQMI: 96.93, MedianIncome: 66512},
  {YelpRating: 4, NumReviews: 453, lat: 35.59618, lng: -82.5532074, POPDensity: 2955.248354, LANDSQMI: 5.08, MedianIncome: 29441},
  {YelpRating: 4.5, NumReviews: 19, lat: 35.59736, lng: -82.55349, POPDensity: 2955.248354, LANDSQMI: 5.08, MedianIncome: 29441},
  {YelpRating: 3.5, NumReviews: 7, lat: 35.6002998, lng: -77.596817, POPDensity: 117.9808779, LANDSQMI: 76.89, MedianIncome: 36736},
  {YelpRating: 4.5, NumReviews: 73, lat: 35.608071, lng: -82.358705, POPDensity: 132.2033958, LANDSQMI: 99.91, MedianIncome: 42271},
  {YelpRating: 4.5, NumReviews: 13, lat: 35.608307, lng: -82.358991, POPDensity: 132.2033958, LANDSQMI: 99.91, MedianIncome: 42271},
  {YelpRating: 4, NumReviews: 4, lat: 35.6092282, lng: -77.3762441, POPDensity: 299.1067671, LANDSQMI: 176.91, MedianIncome: 31265},
  {YelpRating: 3.5, NumReviews: 9, lat: 35.61639157, lng: -78.73392357, POPDensity: 401.2691541, LANDSQMI: 96.93, MedianIncome: 66512},
  {YelpRating: 4.5, NumReviews: 38, lat: 35.6193008, lng: -82.3180084, POPDensity: 132.2033958, LANDSQMI: 99.91, MedianIncome: 42271},
  {YelpRating: 3.5, NumReviews: 55, lat: 35.61976685, lng: -78.80824958, POPDensity: 401.2691541, LANDSQMI: 96.93, MedianIncome: 66512},
  {YelpRating: 4, NumReviews: 245, lat: 35.622192, lng: -82.553698, POPDensity: 771.6248757, LANDSQMI: 26.58, MedianIncome: 50058},
  {YelpRating: 4, NumReviews: 6, lat: 35.6243399, lng: -80.80347, POPDensity: 465.5857941, LANDSQMI: 73.75, MedianIncome: 53157},
  {YelpRating: 4.5, NumReviews: 27, lat: 35.65649, lng: -78.85474, POPDensity: 633.2013206, LANDSQMI: 46.37, MedianIncome: 86066},
  {YelpRating: 3.5, NumReviews: 28, lat: 35.65822, lng: -78.83684, POPDensity: 633.2013206, LANDSQMI: 46.37, MedianIncome: 86066},
  {YelpRating: 4.5, NumReviews: 41, lat: 35.659335, lng: -78.46686, POPDensity: 497.9518766, LANDSQMI: 73.01, MedianIncome: 57581},
  {YelpRating: 5, NumReviews: 5, lat: 35.66639428, lng: -80.46807024, POPDensity: 827.3593285, LANDSQMI: 29.9, MedianIncome: 33656},
  {YelpRating: 3.5, NumReviews: 3, lat: 35.67448545, lng: -80.45862158, POPDensity: 827.3593285, LANDSQMI: 29.9, MedianIncome: 33656},
  {YelpRating: 4.5, NumReviews: 3, lat: 35.69745853, lng: -82.56112397, POPDensity: 247.9124249, LANDSQMI: 79.54, MedianIncome: 50230},
  {YelpRating: 4.5, NumReviews: 26, lat: 35.7040482, lng: -79.8147278, POPDensity: 964.1395612, LANDSQMI: 21.89, MedianIncome: 29582},
  {YelpRating: 3.5, NumReviews: 414, lat: 35.70773647, lng: -83.52068424, POPDensity: 25.1803353, LANDSQMI: 210.01, MedianIncome: 40117},
  {YelpRating: 4, NumReviews: 26, lat: 35.71226282, lng: -78.85184648, POPDensity: 1088.130778, LANDSQMI: 28.33, MedianIncome: 95816},
  {YelpRating: 4, NumReviews: 24, lat: 35.71405396, lng: -83.51083484, POPDensity: 25.1803353, LANDSQMI: 210.01, MedianIncome: 40117},
  {YelpRating: 5, NumReviews: 1, lat: 35.71578, lng: -83.503, POPDensity: 25.1803353, LANDSQMI: 210.01, MedianIncome: 40117},
  {YelpRating: 4, NumReviews: 2, lat: 35.7267, lng: -83.47252, POPDensity: 25.1803353, LANDSQMI: 210.01, MedianIncome: 40117},
  {YelpRating: 3.5, NumReviews: 35, lat: 35.73538, lng: -81.3256, POPDensity: 415.8809, LANDSQMI: 69.69, MedianIncome: 37803},
  {YelpRating: 3, NumReviews: 74, lat: 35.74365, lng: -79.1646899, POPDensity: 107.7410761, LANDSQMI: 169.91, MedianIncome: 62474},
  {YelpRating: 3.5, NumReviews: 13, lat: 35.7446785, lng: -81.6856995, POPDensity: 172.9155602, LANDSQMI: 318.05, MedianIncome: 37295},
  {YelpRating: 3.5, NumReviews: 12, lat: 35.7463, lng: -78.84426, POPDensity: 1088.130778, LANDSQMI: 28.33, MedianIncome: 95816},
  {YelpRating: 4.5, NumReviews: 25, lat: 35.7478209, lng: -81.6914461, POPDensity: 172.9155602, LANDSQMI: 318.05, MedianIncome: 37295},
  {YelpRating: 3.5, NumReviews: 49, lat: 35.75062, lng: -83.99363, POPDensity: 360.7337392, LANDSQMI: 69.65, MedianIncome: 43269},
  {YelpRating: 3, NumReviews: 51, lat: 35.7556705, lng: -78.7435144, POPDensity: 2039.989399, LANDSQMI: 9.62, MedianIncome: 102038},
  {YelpRating: 4.5, NumReviews: 25, lat: 35.76164032, lng: -78.65710102, POPDensity: 911.3405877, LANDSQMI: 51.61, MedianIncome: 54904},
  {YelpRating: 4, NumReviews: 101, lat: 35.7755269, lng: -78.6440439, POPDensity: 5266.52762, LANDSQMI: 1.79, MedianIncome: 23554},
  {YelpRating: 4, NumReviews: 45, lat: 35.776575, lng: -78.802209, POPDensity: 2733.230114, LANDSQMI: 11.72, MedianIncome: 67310},
  {YelpRating: 2.5, NumReviews: 230, lat: 35.77858, lng: -78.64904, POPDensity: 911.3405877, LANDSQMI: 51.61, MedianIncome: 54904},
  {YelpRating: 4, NumReviews: 314, lat: 35.779747, lng: -78.6535339, POPDensity: 911.3405877, LANDSQMI: 51.61, MedianIncome: 54904},
  {YelpRating: 4, NumReviews: 197, lat: 35.78239, lng: -78.64537, POPDensity: 911.3405877, LANDSQMI: 51.61, MedianIncome: 54904},
  {YelpRating: 4, NumReviews: 4, lat: 35.78496, lng: -78.64478, POPDensity: 911.3405877, LANDSQMI: 51.61, MedianIncome: 54904},
  {YelpRating: 4.5, NumReviews: 40, lat: 35.78818851, lng: -78.77811447, POPDensity: 2733.230114, LANDSQMI: 11.72, MedianIncome: 67310},
  {YelpRating: 4.5, NumReviews: 4, lat: 35.78882, lng: -78.63405, POPDensity: 1956.438482, LANDSQMI: 21.57, MedianIncome: 50373},
  {YelpRating: 4, NumReviews: 26, lat: 35.78919878, lng: -78.63914901, POPDensity: 1956.438482, LANDSQMI: 21.57, MedianIncome: 50373},
  {YelpRating: 4, NumReviews: 118, lat: 35.7929612, lng: -78.6861083, POPDensity: 1564.480409, LANDSQMI: 16.1, MedianIncome: 53976},
  {YelpRating: 3.5, NumReviews: 52, lat: 35.79476972, lng: -81.43006209, POPDensity: 334.0061564, LANDSQMI: 60, MedianIncome: 41200},
  {YelpRating: 5, NumReviews: 3, lat: 35.7973, lng: -82.68486, POPDensity: 44.21915008, LANDSQMI: 263.91, MedianIncome: 40578},
  {YelpRating: 4, NumReviews: 21, lat: 35.8041774, lng: -78.6328332, POPDensity: 3242.948477, LANDSQMI: 3.22, MedianIncome: 81351},
  {YelpRating: 4, NumReviews: 24, lat: 35.8044014, lng: -78.6336517, POPDensity: 3242.948477, LANDSQMI: 3.22, MedianIncome: 81351},
  {YelpRating: 4, NumReviews: 14, lat: 35.80782661, lng: -78.62213285, POPDensity: 1956.438482, LANDSQMI: 21.57, MedianIncome: 50373},
  {YelpRating: 3.5, NumReviews: 11, lat: 35.8087147, lng: -78.6234312, POPDensity: 3242.948477, LANDSQMI: 3.22, MedianIncome: 81351},
  {YelpRating: 4, NumReviews: 80, lat: 35.8098229, lng: -78.617162, POPDensity: 1956.438482, LANDSQMI: 21.57, MedianIncome: 50373},
  {YelpRating: 3.5, NumReviews: 6, lat: 35.82345273, lng: -80.25410645, POPDensity: 273.664493, LANDSQMI: 145.39, MedianIncome: 37244},
  {YelpRating: 4, NumReviews: 54, lat: 35.8838806, lng: -78.5827026, POPDensity: 2180.978716, LANDSQMI: 19.33, MedianIncome: 78335},
  {YelpRating: 4, NumReviews: 41, lat: 35.89645708, lng: -78.7444806, POPDensity: 1808.227962, LANDSQMI: 8.41, MedianIncome: 78902},
  {YelpRating: 4.5, NumReviews: 76, lat: 35.90367, lng: -78.76249, POPDensity: 1808.227962, LANDSQMI: 8.41, MedianIncome: 78902},
  {YelpRating: 5, NumReviews: 20, lat: 35.9081306, lng: -75.6748734, POPDensity: 691.5439111, LANDSQMI: 8.84, MedianIncome: 53588},
  {YelpRating: 4, NumReviews: 73, lat: 35.9098184, lng: -79.0726016, POPDensity: 3910.773906, LANDSQMI: 3.74, MedianIncome: 40658},
  {YelpRating: 3.5, NumReviews: 24, lat: 35.91010738, lng: -79.06871992, POPDensity: 3910.773906, LANDSQMI: 3.74, MedianIncome: 40658},
  {YelpRating: 3.5, NumReviews: 155, lat: 35.9106712, lng: -79.062767, POPDensity: 389.0460947, LANDSQMI: 92.89, MedianIncome: 69349},
  {YelpRating: 3.5, NumReviews: 454, lat: 35.91305, lng: -79.05542, POPDensity: 1652.80099, LANDSQMI: 19.43, MedianIncome: 56333},
  {YelpRating: 4, NumReviews: 7, lat: 35.91386, lng: -81.54126, POPDensity: 144.6733301, LANDSQMI: 329.73, MedianIncome: 30968},
  {YelpRating: 4.5, NumReviews: 31, lat: 35.91583, lng: -82.06356, POPDensity: 156.1018714, LANDSQMI: 68.15, MedianIncome: 40000},
  {YelpRating: 5, NumReviews: 2, lat: 35.9171223, lng: -82.3503, POPDensity: 57.56902318, LANDSQMI: 291.01, MedianIncome: 39232},
  {YelpRating: 4.5, NumReviews: 20, lat: 35.9474106, lng: -79.3213272, POPDensity: 2123.651769, LANDSQMI: 0.06, MedianIncome: 5},
  {YelpRating: 5, NumReviews: 4, lat: 35.9576925, lng: -77.80152217, POPDensity: 687.8294144, LANDSQMI: 42.25, MedianIncome: 44282},
  {YelpRating: 4.5, NumReviews: 14, lat: 35.9588899, lng: -77.80089, POPDensity: 687.8294144, LANDSQMI: 42.25, MedianIncome: 44282},
  {YelpRating: 4, NumReviews: 10, lat: 35.9715599, lng: -80.01611, POPDensity: 1816.921948, LANDSQMI: 13.17, MedianIncome: 39867},
  {YelpRating: 4.5, NumReviews: 60, lat: 35.9775009, lng: -78.5101624, POPDensity: 506.5260028, LANDSQMI: 104.79, MedianIncome: 81287},
  {YelpRating: 3.5, NumReviews: 76, lat: 35.98795, lng: -80.004211, POPDensity: 1816.921948, LANDSQMI: 13.17, MedianIncome: 39867},
  {YelpRating: 4.5, NumReviews: 69, lat: 35.98940837, lng: -78.8955327, POPDensity: 4034.058246, LANDSQMI: 5.28, MedianIncome: 26690},
  {YelpRating: 4.5, NumReviews: 10, lat: 35.98972, lng: -80.02802, POPDensity: 1816.921948, LANDSQMI: 13.17, MedianIncome: 39867},
  {YelpRating: 4, NumReviews: 1, lat: 35.9902954, lng: -78.8888245, POPDensity: 4034.058246, LANDSQMI: 5.28, MedianIncome: 26690},
  {YelpRating: 4, NumReviews: 2, lat: 35.99151631, lng: -78.90536388, POPDensity: 4034.058246, LANDSQMI: 5.28, MedianIncome: 26690},
  {YelpRating: 4, NumReviews: 694, lat: 35.9954377, lng: -78.8999432, POPDensity: 4034.058246, LANDSQMI: 5.28, MedianIncome: 26690},
  {YelpRating: 4.5, NumReviews: 17, lat: 35.9998819, lng: -78.910101, POPDensity: 4034.058246, LANDSQMI: 5.28, MedianIncome: 26690},
  {YelpRating: 4, NumReviews: 15, lat: 36.00046812, lng: -78.90343287, POPDensity: 4034.058246, LANDSQMI: 5.28, MedianIncome: 26690},
  {YelpRating: 3.5, NumReviews: 10, lat: 36.00122, lng: -78.89818, POPDensity: 4034.058246, LANDSQMI: 5.28, MedianIncome: 26690},
  {YelpRating: 4, NumReviews: 5, lat: 36.00202, lng: -80.263486, POPDensity: 1146.15401, LANDSQMI: 29.78, MedianIncome: 46103},
  {YelpRating: 4.5, NumReviews: 354, lat: 36.00313555, lng: -78.89982142, POPDensity: 4034.058246, LANDSQMI: 5.28, MedianIncome: 26690},
  {YelpRating: 3.5, NumReviews: 506, lat: 36.0094795, lng: -75.6594467, POPDensity: 1174.831907, LANDSQMI: 9.25, MedianIncome: 53864},
  {YelpRating: 4, NumReviews: 9, lat: 36.02703538, lng: -82.00940298, POPDensity: 59.38713268, LANDSQMI: 159.77, MedianIncome: 36016},
  {YelpRating: 4.5, NumReviews: 26, lat: 36.04536, lng: -80.3232, POPDensity: 1789.299152, LANDSQMI: 18.56, MedianIncome: 42289},
  {YelpRating: 4.5, NumReviews: 12, lat: 36.049242, lng: -75.681674, POPDensity: 1174.831907, LANDSQMI: 9.25, MedianIncome: 53864},
  {YelpRating: 4, NumReviews: 5, lat: 36.06103, lng: -79.82482, POPDensity: 3643.300809, LANDSQMI: 6.03, MedianIncome: 36664},
  {YelpRating: 4, NumReviews: 19, lat: 36.06127, lng: -79.56955, POPDensity: 277.5099898, LANDSQMI: 25.6, MedianIncome: 60718},
  {YelpRating: 4.5, NumReviews: 41, lat: 36.0658493, lng: -79.7917709, POPDensity: 813.4138265, LANDSQMI: 69.41, MedianIncome: 37548},
  {YelpRating: 3.5, NumReviews: 212, lat: 36.0686, lng: -79.79027, POPDensity: 3529.683514, LANDSQMI: 6.21, MedianIncome: 26460},
  {YelpRating: 4.5, NumReviews: 18, lat: 36.0706711, lng: -79.1137009, POPDensity: 239.5243053, LANDSQMI: 101.39, MedianIncome: 57627},
  {YelpRating: 4.5, NumReviews: 28, lat: 36.07231447, lng: -79.11106523, POPDensity: 239.5243053, LANDSQMI: 101.39, MedianIncome: 57627},
  {YelpRating: 3, NumReviews: 52, lat: 36.0723737, lng: -80.3003323, POPDensity: 1789.299152, LANDSQMI: 18.56, MedianIncome: 42289},
  {YelpRating: 4, NumReviews: 15, lat: 36.0786573, lng: -79.7934607, POPDensity: 3529.683514, LANDSQMI: 6.21, MedianIncome: 26460},
  {YelpRating: 4, NumReviews: 36, lat: 36.07932325, lng: -79.79383544, POPDensity: 3529.683514, LANDSQMI: 6.21, MedianIncome: 26460},
  {YelpRating: 4, NumReviews: 27, lat: 36.08423, lng: -79.80436, POPDensity: 2268.229496, LANDSQMI: 7.63, MedianIncome: 60938},
  {YelpRating: 3.5, NumReviews: 302, lat: 36.09756423, lng: -80.25090078, POPDensity: 1481.344891, LANDSQMI: 12.76, MedianIncome: 24350},
  {YelpRating: 4, NumReviews: 58, lat: 36.0997128, lng: -80.2471175, POPDensity: 1481.344891, LANDSQMI: 12.76, MedianIncome: 24350},
  {YelpRating: 4.5, NumReviews: 149, lat: 36.13290275, lng: -81.6771078, POPDensity: 117.894966, LANDSQMI: 28.94, MedianIncome: 43536},
  {YelpRating: 4, NumReviews: 9, lat: 36.1662788, lng: -81.8641129, POPDensity: 95.09763778, LANDSQMI: 65.71, MedianIncome: 47992},
  {YelpRating: 4, NumReviews: 5, lat: 36.20125477, lng: -81.6706356, POPDensity: 333.9372087, LANDSQMI: 99, MedianIncome: 27819},
  {YelpRating: 4, NumReviews: 78, lat: 36.2033386, lng: -81.6685507, POPDensity: 333.9372087, LANDSQMI: 99, MedianIncome: 27819},
  {YelpRating: 4, NumReviews: 129, lat: 36.219076, lng: -81.6835445, POPDensity: 333.9372087, LANDSQMI: 99, MedianIncome: 27819},
  {YelpRating: 4, NumReviews: 113, lat: 36.21913, lng: -75.87098, POPDensity: 357.1633557, LANDSQMI: 6.61, MedianIncome: 54191},
  {YelpRating: 4.5, NumReviews: 4, lat: 36.2833153, lng: -80.8523802, POPDensity: 149.3602645, LANDSQMI: 70.11, MedianIncome: 36560},
  {YelpRating: 4, NumReviews: 12, lat: 36.2860298, lng: -82.4816589, POPDensity: 214.1900164, LANDSQMI: 128.79, MedianIncome: 47647},
  {YelpRating: 5, NumReviews: 1, lat: 36.3116433, lng: -82.35541798, POPDensity: 1013.834347, LANDSQMI: 33.78, MedianIncome: 39298},
  {YelpRating: 3.5, NumReviews: 10, lat: 36.31528022, lng: -82.35275924, POPDensity: 1013.834347, LANDSQMI: 33.78, MedianIncome: 39298},
  {YelpRating: 4, NumReviews: 7, lat: 36.31723, lng: -82.3503, POPDensity: 783.6681969, LANDSQMI: 46.17, MedianIncome: 33273},
  {YelpRating: 1, NumReviews: 1, lat: 36.3287392, lng: -75.8156586, POPDensity: 20.3569774, LANDSQMI: 26.62, MedianIncome: 72169},
  {YelpRating: 5, NumReviews: 1, lat: 36.5152817, lng: -79.715889, POPDensity: 355.2827438, LANDSQMI: 67.75, MedianIncome: 33800},
  {YelpRating: 5, NumReviews: 10, lat: 36.5858251, lng: -79.4213237, POPDensity: 386.581572, LANDSQMI: 73, MedianIncome: 32931},
  {YelpRating: 4.5, NumReviews: 30, lat: 36.5881878, lng: -79.3901461, POPDensity: 386.581572, LANDSQMI: 73, MedianIncome: 32931},
  {YelpRating: 3, NumReviews: 1, lat: 36.5958348, lng: -82.1845006, POPDensity: 1652.130305, LANDSQMI: 10.36, MedianIncome: 31977},
  {YelpRating: 4.5, NumReviews: 22, lat: 36.59827874, lng: -82.18213675, POPDensity: 1652.130305, LANDSQMI: 10.36, MedianIncome: 31977},
  {YelpRating: 3.5, NumReviews: 5, lat: 36.6402283, lng: -81.8020325, POPDensity: 54.60364645, LANDSQMI: 56.5, MedianIncome: 32083},
  {YelpRating: 4.5, NumReviews: 25, lat: 36.666476, lng: -80.920657, POPDensity: 124.8212322, LANDSQMI: 144.17, MedianIncome: 31489},
  {YelpRating: 4.5, NumReviews: 55, lat: 36.6788203, lng: -76.22842211, POPDensity: 400.9937157, LANDSQMI: 150.81, MedianIncome: 96091},
  {YelpRating: 3, NumReviews: 1, lat: 36.6792299, lng: -76.02998, POPDensity: 62.81705935, LANDSQMI: 68.28, MedianIncome: 85037},
  {YelpRating: 2.5, NumReviews: 4, lat: 36.69149367, lng: -79.87438504, POPDensity: 215.2137991, LANDSQMI: 151.69, MedianIncome: 32566},
  {YelpRating: 5, NumReviews: 4, lat: 36.77657837, lng: -76.00607172, POPDensity: 1969.54435, LANDSQMI: 30.61, MedianIncome: 64721},
  {YelpRating: 4, NumReviews: 64, lat: 36.78635, lng: -76.05546, POPDensity: 3906.483957, LANDSQMI: 9.21, MedianIncome: 66944},
  {YelpRating: 4, NumReviews: 57, lat: 36.78810494, lng: -76.06012721, POPDensity: 3906.483957, LANDSQMI: 9.21, MedianIncome: 66944},
  {YelpRating: 4, NumReviews: 1, lat: 36.79086929, lng: -81.77056666, POPDensity: 95.99177745, LANDSQMI: 58.93, MedianIncome: 38735},
  {YelpRating: 4, NumReviews: 63, lat: 36.83761743, lng: -75.98107358, POPDensity: 2258.017377, LANDSQMI: 18.4, MedianIncome: 59017},
  {YelpRating: 3.5, NumReviews: 192, lat: 36.84322, lng: -76.13459, POPDensity: 5292.483788, LANDSQMI: 11.71, MedianIncome: 56617},
  {YelpRating: 4, NumReviews: 78, lat: 36.8491648, lng: -76.0276479, POPDensity: 1969.54435, LANDSQMI: 30.61, MedianIncome: 64721},
  {YelpRating: 4.5, NumReviews: 75, lat: 36.86642, lng: -76.30935, POPDensity: 7932.01402, LANDSQMI: 0.89, MedianIncome: 62755},
  {YelpRating: 4, NumReviews: 80, lat: 36.8701064, lng: -76.2862252, POPDensity: 5617.312056, LANDSQMI: 0.8, MedianIncome: 40513},
  {YelpRating: 4.5, NumReviews: 9, lat: 36.8703778, lng: -76.2836594, POPDensity: 5617.312056, LANDSQMI: 0.8, MedianIncome: 40513},
  {YelpRating: 4, NumReviews: 22, lat: 36.87154565, lng: -76.29519832, POPDensity: 5617.312056, LANDSQMI: 0.8, MedianIncome: 40513},
  {YelpRating: 4, NumReviews: 9, lat: 36.87617, lng: -76.30539, POPDensity: 5758.642403, LANDSQMI: 3.52, MedianIncome: 50789},
  {YelpRating: 4.5, NumReviews: 69, lat: 36.98254, lng: -76.63025, POPDensity: 171.8779573, LANDSQMI: 100.54, MedianIncome: 68348},
  {YelpRating: 3.5, NumReviews: 3, lat: 37.02958219, lng: -76.45725527, POPDensity: 3362.477059, LANDSQMI: 7.47, MedianIncome: 50068},
  {YelpRating: 2, NumReviews: 5, lat: 37.07988522, lng: -77.99782813, POPDensity: 40.73038901, LANDSQMI: 177.12, MedianIncome: 36509},
  {YelpRating: 4.5, NumReviews: 20, lat: 37.08391, lng: -76.47665, POPDensity: 3124.229288, LANDSQMI: 9.37, MedianIncome: 57230},
  {YelpRating: 4.5, NumReviews: 9, lat: 37.09552, lng: -80.0515099, POPDensity: 39.69994273, LANDSQMI: 56.17, MedianIncome: 47273},
  {YelpRating: 4.5, NumReviews: 22, lat: 37.0999184, lng: -76.3946533, POPDensity: 2517.492306, LANDSQMI: 19.79, MedianIncome: 55415},
  {YelpRating: 3.5, NumReviews: 72, lat: 37.14628, lng: -80.5447499, POPDensity: 323.8019768, LANDSQMI: 63.83, MedianIncome: 39808}
];