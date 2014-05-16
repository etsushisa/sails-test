module.exports = {

	google_map_js: function (lat, lon, zoom) {
		var js = 'var map;';
		js = js + 'function initialize() {'
					+ 'var mapOptions = {'
						+ 'zoom: ' + zoom + ','
						+ 'center: new google.maps.LatLng(' + lat + ', ' + lon + ')'
					+ '};'
					+ 'map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);'
				+ '}';
		js = js + 'google.maps.event.addDomListener(window, "load", initialize);';
	},
};