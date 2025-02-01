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

var Provincia = L.geoJSON(prov, {
	style: SytleProv
});

var Localidad = L.geoJSON(locCabecera, {
	pointToLayer: function (feature, latlng) {
		return L.circleMarker(latlng, IconLocCab);
	},
	onEachFeature: function (feature, layer) {
		var content = popupContentLocCab(feature);
		layer.bindPopup(content);
	}
});
var Parajes = L.geoJSON(locSec, {
	pointToLayer: function (feature, latlng) {
		return L.circleMarker(latlng, IconLocSec);
	},
	onEachFeature: function (feature, layer) {
		var content = popupContentLocSec(feature);
		layer.bindPopup(content);
	}
});

var POBIndigena = L.geoJSON(pobInd, {
	pointToLayer: function (feature, latlng) {
		return L.circleMarker(latlng, IconPobInd);
	},
	onEachFeature: function (feature, layer) {
		var content = popupContentPobInd(feature);
		layer.bindPopup(content);
	}
});

//data de Nueclos de Agricultura faminial (extraido del Atlas de AF  - Horacio)
var NucleosAF = L.geoJSON(naf, {
	style: styleNAG,
	onEachFeature: function (feature, layer) {
		var content = popupContentNAF(feature);
		layer.bindPopup(content);
	}
});

//data de Nueclos de Agricultura faminial (extraido del Atlas de AF  - Horacio)
var NBI = L.geoJSON(nbi, {
	style: styleNBI,
	onEachFeature: function (feature, layer) {
		var content = popupContentNBI(feature);
		layer.bindPopup(content);
	}
});

var AguaRED = L.geoJSON(aguaRed, {
	style: styleAguaRed,
	onEachFeature: function (feature, layer) {
		var content = popupContentAguaRed(feature);
		layer.bindPopup(content);
	}
});



//Datos de Localidades con Proyectos de Agua, Estandarizado y No Estandarizado - Generado a partir del Excel con todos los proyectos.
var ProyecAgua = L.geoJSON(proyectos,
	{
		pointToLayer: function (feature, latlng) {
			return L.circleMarker(latlng, MarkerOptions);

		},
		style: styleProyectos,
		onEachFeature: function (feature, layer) {
			var content = popupContentProyectos(feature);
			layer.bindPopup(content);
		}
	});

// Data poblacional, del año 2022 por departamento. Tomado de: https://portalgeoestadistico.indec.gob.ar/?indicator_id=37&members=108
var DataCenso = L.geoJSON(censo,
	{
		style: styleCenso,
		onEachFeature: function (feature, layer) {
			var content = popupContentCenso(feature);
			layer.bindPopup(content);
		}
	});

///Dapto con Arsenicos segun el Ministerio de Salud en 2006 https://www.argentina.gob.ar/sites/default/files/2006_epidemiologia_del_hacre_en_argentina.pdf
var DeptoArsenico = L.geoJSON(dptoArsenico,
	{
		style: styleDptoArsenico,
		onEachFeature: function (feature, layer) {
			var content = popupContentDptoArsenico(feature);
			layer.bindPopup(content);
		}
	});

///Daptos del IGN
var RegionesHirdo = L.geoJSON(RegionHidrogeografica,
	{
		 style: styleRegionHidro,
		 onEachFeature: function (feature, layer) {
			var content = popupContentRegionHidro(feature);
			layer.bindPopup(content);
		}  
	}  
);

///Dapto IGN
var CuencasHidro = L.geoJSON(cuencasSist,
	// {
	// 	 style: styleRegionHidro,
		
	// }
);

var SitiosSeleccionados = L.geoJSON(sitios,
	{
		pointToLayer: function (feature, latlng) {
			return L.circleMarker(latlng, MarkerOptionsSitios ,
			);

		},
 	style: MarkerOptionsSitios ,
	 onEachFeature: function (feature, layer) {
		var content = popupContentSitios(feature);
		layer.bindPopup(content);
	}
		
	}
);

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

var SuelosTipo = L.geoJSON(suelos,
	{
		style: styleSuelos,
		onEachFeature: function (feature, layer) {
			var content = popupContentSuelos(feature);
			layer.bindPopup(content);
		}  
	}
);

var Ecoregion = L.geoJSON(ecorregion,
	{
		style: styleEco,
		onEachFeature: function (feature, layer) {
			var content = popupContentEcoregion(feature);
			layer.bindPopup(content);
		}  
	}
);

var PuntosAgri = L.geoJSON(agri,
	{
		pointToLayer: function (feature, latlng) {
			return L.circleMarker(latlng, MarkerOptionsAgri ,
			);

		},
 	style: MarkerOptionsAgri ,
	 onEachFeature: function (feature, layer) {
		var content = popupContentAgri(feature);
		layer.bindPopup(content);
	}
		
	}
);
var AreasProtegidas = L.geoJSON(areasprotegidas,
	{
		style: styleAreas,
		onEachFeature: function (feature, layer) {
			var content = popupContentAreas(feature);
			layer.bindPopup(content);
		}  
	}
);


var DataIso = L.geoJSON(isohietas,
	{
		style: styleIso,
		onEachFeature: function (feature, layer) {
			var content = popupContentIso(feature);
			layer.bindPopup(content);
		}  
	}
);


/// Puntos de Modelos de Consecha de Agua - A partir de la Tabla de MAtias Lopez
// Uso domestico
var UsoDom = L.geoJSON(datamodelo,
	{
		// style: styleUD,
		onEachFeature: function (feature, layer) {
			var content = popupContentUD(feature);
			layer.bindPopup(content);
		},
		pointToLayer: function(feature, layer) {
			return L.marker(layer, {
				icon: IconUD
			})},
	}
);
// Seguridad Alimentaria con Sistema Impermeble
var SASI = L.geoJSON(datamodelo,
	{
	
		onEachFeature: function (feature, layer) {
			var content = popupContentSASI(feature);
			layer.bindPopup(content);
		},
		pointToLayer: function(feature, layer) {
			return L.marker(layer, {
				icon: IconSASI
			})},
	}
);
// Seguridad Alimentaria con Sistema Suelo Natural
var SASN = L.geoJSON(datamodelo,
	{
	
		onEachFeature: function (feature, layer) {
			var content = popupContentSASN(feature);
			layer.bindPopup(content);
		},
		pointToLayer: function(feature, layer) {
			return L.marker(layer, {
				icon: IconSASN
			})},
	}
);
// Sistema Ganaderia con Suelo Impermeable
var GanaderiaSI = L.geoJSON(datamodelo,
	{
	
		onEachFeature: function (feature, layer) {
			var content = popupContentGSI(feature);
			layer.bindPopup(content);
		},
		pointToLayer: function(feature, layer) {
			return L.marker(layer, {
				icon: IconGSI
			})},
	}
);
// Sistema Ganaderia con Suelo Natural
var GanaderiaSN= L.geoJSON(datamodelo,
	{
	
		onEachFeature: function (feature, layer) {
			var content = popupContentGSN(feature);
			layer.bindPopup(content);
		},
		pointToLayer: function(feature, layer) {
			return L.marker(layer, {
				icon: IconGSN
			})},
	}
);

// Sistema Excedentes con Suelo Impermeble
var ExComSI= L.geoJSON(datamodelo,
	{
	
		onEachFeature: function (feature, layer) {
			var content = popupContentESI(feature);
			layer.bindPopup(content);
		},
		pointToLayer: function(feature, layer) {
			return L.marker(layer, {
				icon: IconESI
			})},
	}
);

// Sistema Excedentes con Suelo Natural
var ExComSN= L.geoJSON(datamodelo,
	{
	
		onEachFeature: function (feature, layer) {
			var content = popupContentESN(feature);
			layer.bindPopup(content);
		},
		pointToLayer: function(feature, layer) {
			return L.marker(layer, {
				icon: IconESN
			})},
	}
);