// con VAR se crean las capas basese a visualizar => L.tileLayer.wms es la propiedad que tare los TileLayer y/o wms //
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>',
	maxZoom: 18
});

var google = L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
	opacity: 1.0,
	attribution: '&copy;<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Google</a>',
	maxZoom: 18
});
var argenmap = L.tileLayer('https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/mapabase_gris@EPSG%3A3857@png/{z}/{x}/{-y}.png', {
	opacity: 1.0,
	attribution: '<a href="https://www.ign.gob.ar/AreaServicios/Argenmap/IntroduccionV2"  target="_blank"> ArgenMap </a>',
	maxZoom: 18,
});
var PROVFAO = L.geoJSON(provinciasFAO, {
	style: function (feature) {
		return {
			fillColor: "gray",
			weight: 1,
			opacity: 1,
			color: '#000',
			dashArray: '0.2',
			fillOpacity: 0.1
		};
	},
	
});

var Parajes = L.geoJSON(parajes, {
	// pointToLayer: function (feature, latlng) {
	// 	return L.circleMarker(latlng, IconLocSec);
	// },
	// onEachFeature: function (feature, layer) {
	// 	var content = popupContentLocSec(feature);
	// 	layer.bindPopup(content);
	// }
});



var EstacionesSMN = L.geoJSON(SMN,
	{
		pointToLayer: function (feature, latlng) {
			return L.circleMarker(latlng, MarkerOptionsSMN,
			);

		},
 	style: MarkerOptionsSMN,
	 onEachFeature: function (feature, layer) {
		var content = popupContentSMN(feature);
		layer.bindPopup(content);
	}
		
	}
);
var EstacionesINTA = L.geoJSON(ESMINTA,
	{
		pointToLayer: function (feature, latlng) {
			return L.circleMarker(latlng, MarkerOptionsINTA,
			);

		},
 	style: MarkerOptionsINTA,
	 onEachFeature: function (feature, layer) {
		var content = popupContentINTA(feature);
		layer.bindPopup(content);
	}
		
	}
);
