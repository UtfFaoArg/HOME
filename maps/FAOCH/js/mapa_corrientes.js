// con VAR se crean las capas basese a visualizar => L.tileLayer.wms es la propiedad que tare los TileLayer y/o wms //
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>',
	maxZoom: 18
});

var osmGris = L.tileLayer('https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
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

var Provincia = L.geoJSON({
	...prov,
	features: prov.features.filter(f => f.properties.nam === "Corrientes")
}, {
	style: SytleProv
});


var Localidad = L.geoJSON({
	...locCabecera,
	features: locCabecera.features.filter(f => f.properties.nom_pcia === "Corrientes")
}, {
	pointToLayer: (f, latlng) => L.circleMarker(latlng, IconLocCab),
	onEachFeature: (f, layer) => layer.bindPopup(popupContentLocCab(f))
});


var Parajes = L.geoJSON({
	...locSec,
	features: locSec.features.filter(f => f.properties.nom_pcia === "Corrientes")
}, {
	pointToLayer: (f, latlng) => L.circleMarker(latlng, IconLocSec),
	onEachFeature: (f, layer) => layer.bindPopup(popupContentLocSec(f))
});

// Data poblacional, del año 2022 por departamento. Tomado de: https://portalgeoestadistico.indec.gob.ar/?indicator_id=37&members=108
var DataCenso = L.geoJSON({
	...censo,
	features: censo.features.filter(f => f.properties.provincia === "Corrientes")
}, {
	style: styleCenso,
	onEachFeature: function (feature, layer) {
		var content = popupContentCenso(feature);
		layer.bindPopup(content);
	}
});

var POBIndigena = L.geoJSON({
	...pobInd,
	features: pobInd.features.filter(f => f.properties.prov_com === "Corrientes")
}, {
	pointToLayer: (f, latlng) => L.circleMarker(latlng, IconPobInd),
	onEachFeature: (f, layer) => layer.bindPopup(popupContentPobInd(f))
});

//data de Nueclos de Agricultura faminial (extraido del Atlas de AF  - Horacio)
var NBI = L.geoJSON({
	...nbi,
	features: nbi.features.filter(f => f.properties.PROV === "Corrientes")
}, {
	style: styleNBI,
	onEachFeature: (f, layer) => layer.bindPopup(popupContentNBI(f))
});

var AguaRED = L.geoJSON({
	...aguaRed,
	features: aguaRed.features.filter(f => f.properties.PROV === "Corrientes")
}, {
	style: styleAguaRed,
	onEachFeature: (f, layer) => layer.bindPopup(popupContentAguaRed(f))
});

//data de Nueclos de Agricultura faminial (extraido del Atlas de AF  - Horacio)
var NucleosAF = L.geoJSON({
	...naf,
	features: naf.features.filter(f => f.properties.provincia === "Corrientes")
}, {
	style: styleNAG,
	onEachFeature: (f, layer) => layer.bindPopup(popupContentNAF(f))
});

//data de  % Poblacion Rural, Agrupada y Dispersa - Del CENSO 2022
var RURAL = L.geoJSON({
	...rural,
	features: rural.features.filter(f => f.properties.provincia === "Corrientes")
	}, {
	style: styleRural,
	onEachFeature: (f, layer) => layer.bindPopup(popupContentRural(f))
});


//Datos de Localidades con Proyectos de Agua, Estandarizado y No Estandarizado - Generado a partir del Excel con todos los proyectos.
var ProyecAgua = L.geoJSON({
	...proyectos,
	features: proyectos.features.filter(f => f.properties.PROVINCIA === "CORRIENTES")
}, {
	pointToLayer: (f, latlng) => L.circleMarker(latlng, MarkerOptions),
	style: styleProyectos,
	onEachFeature: (f, layer) => layer.bindPopup(popupContentProyectos(f))

});

var SitiosSeleccionados = L.geoJSON({
	...sitios,
	features: sitios.features.filter(f => f.properties.nom_pcia === "Corrientes")
}, {
	pointToLayer: (f, latlng) => L.circleMarker(latlng, MarkerOptionsSitios),
	style: MarkerOptionsSitios,
	onEachFeature: (f, layer) => layer.bindPopup(popupContentSitios(f))
});

var PuntosAgri = L.geoJSON({
	...agri,
	features: agri.features.filter(f => f.properties.Admin_2 === "Corrientes")
}, {
	pointToLayer: (f, latlng) => L.circleMarker(latlng, MarkerOptionsAgri),
	style: MarkerOptionsAgri,
	onEachFeature: (f, layer) => layer.bindPopup(popupContentAgri(f))
});


var EstacionesSMN = L.geoJSON({
	...SMN,
	features: SMN.features.filter(f => f.properties.PROVINCIA === "CORRIENTES")
}, {
	pointToLayer: (f, latlng) => L.circleMarker(latlng, MarkerOptionsSMN),
	style: MarkerOptionsSMN,
	onEachFeature: (f, layer) => layer.bindPopup(popupContentSMN(f))
});


var Ecoregion = L.geoJSON({
	...ecorregion,
		features: ecorregion.features.filter(f => f.properties.name === "Corrientes")
}, {
	
		style: styleEco,
		onEachFeature:  (f, layer) => layer.bindPopup(popupContentEcoregion(f))
	}
);

var SuelosTipo = L.geoJSON({
	...suelos,
	features: suelos.features.filter(f => f.properties.provincia === "CORRIENTES")
}, {
		style: styleSuelos,
		onEachFeature:  (f, layer) => layer.bindPopup(popupContentSuelos(f))
	});

///Dapto con Arsenicos segun el Ministerio de Salud en 2006 https://www.argentina.gob.ar/sites/default/files/2006_epidemiologia_del_hacre_en_argentina.pdf
var DeptoArsenico = L.geoJSON({
	...dptoArsenico,
		features: dptoArsenico.features.filter(f => f.properties.provincia === "Corrientes")
}, {
		style: styleDptoArsenico,
		onEachFeature:  (f, layer) => layer.bindPopup(popupContentDptoArsenico(f))
	});

var AreasProtegidas = L.geoJSON({
	...areasprotegidas,
	features: areasprotegidas.features.filter(f => f.properties.provincia === "Corrientes")
}, {
		style: styleAreas,
		onEachFeature:  (f, layer) =>  layer.bindPopup(popupContentAreas(f))
	}
);


///Daptos del IGN
var RegionesHirdo = L.geoJSON({
	...RegionHidrogeografica,
	features: RegionHidrogeografica.features.filter( f => f.properties.provincia === "Corrientes")
	}, {
		style: styleRegionHidro,
		onEachFeature: (f, layer) =>  layer.bindPopup(popupContentRegionHidro(f))
	}
);

///Dapto IGN
var CuencasHidro = L.geoJSON(cuencasSist,
	// {
	// 	 style: styleRegionHidro,

	// }
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
// var UsoDom = L.geoJSON(datamodelo,
// 	{
// 		// style: styleUD,
// 		onEachFeature: function (feature, layer) {
// 			var content = popupContentUD(feature);
// 			layer.bindPopup(content);
// 		},
// 		pointToLayer: function(feature, layer) {
// 			return L.marker(layer, {
// 				icon: IconUD
// 			})},
// 	}
// );
// // Seguridad Alimentaria con Sistema Impermeble
// var SASI = L.geoJSON(datamodelo,
// 	{

// 		onEachFeature: function (feature, layer) {
// 			var content = popupContentSASI(feature);
// 			layer.bindPopup(content);
// 		},
// 		pointToLayer: function(feature, layer) {
// 			return L.marker(layer, {
// 				icon: IconSASI
// 			})},
// 	}
// );
// // Seguridad Alimentaria con Sistema Suelo Natural
// var SASN = L.geoJSON(datamodelo, {
//     onEachFeature: function (feature, layer) {
//         var content = popupContentSASN(feature);
//         layer.bindPopup(content, {
//             maxWidth: "auto",  // Permite que el popup se ajuste al contenido
//             autoPan: true,      // Asegura que el popup se mantenga en vista
//             keepInView: true    // Evita que el popup se salga del mapa
//         });
//     },
//     pointToLayer: function (feature, latlng) {
//         return L.marker(latlng, {
//             icon: IconSASN
//         });
//     }
// });

// // Sistema Ganaderia con Suelo Impermeable
// var GanaderiaSI = L.geoJSON(datamodelo,
// 	{

// 		onEachFeature: function (feature, layer) {
// 			var content = popupContentGSI(feature);
// 			layer.bindPopup(content);
// 		},
// 		pointToLayer: function(feature, layer) {
// 			return L.marker(layer, {
// 				icon: IconGSI
// 			})},
// 	}
// );
// // Sistema Ganaderia con Suelo Natural
// var GanaderiaSN= L.geoJSON(datamodelo,
// 	{

// 		onEachFeature: function (feature, layer) {
// 			var content = popupContentGSN(feature);
// 			layer.bindPopup(content);
// 		},
// 		pointToLayer: function(feature, layer) {
// 			return L.marker(layer, {
// 				icon: IconGSN
// 			})},
// 	}
// );

// // Sistema Excedentes con Suelo Impermeble
// var ExComSI= L.geoJSON(datamodelo,
// 	{

// 		onEachFeature: function (feature, layer) {
// 			var content = popupContentESI(feature);
// 			layer.bindPopup(content);
// 		},
// 		pointToLayer: function(feature, layer) {
// 			return L.marker(layer, {
// 				icon: IconESI
// 			})},
// 	}
// );

// // Sistema Excedentes con Suelo Natural
// var ExComSN= L.geoJSON(datamodelo,
// 	{

// 		onEachFeature: function (feature, layer) {
// 			var content = popupContentESN(feature);
// 			layer.bindPopup(content);
// 		},
// 		pointToLayer: function(feature, layer) {
// 			return L.marker(layer, {
// 				icon: IconESN
// 			})},
// 	}
// );


// Modelo de cosecha de agua
var ModelosTotal = L.geoJSON(datamodelo, {
	onEachFeature: function (feature, layer) {
		var content = popupContentModelos(feature);
		layer.bindPopup(content, {
			maxWidth: "auto",  // Permite que el popup se ajuste al contenido
			autoPan: true,      // Asegura que el popup se mantenga en vista
			keepInView: true    // Evita que el popup se salga del mapa
		});
	},
	pointToLayer: function (feature, latlng) {
		return L.marker(latlng, {
			icon: IconSASN
		});
	}
});

// Modelo productivo de Lucas Costas
var ModelosProductivo = L.geoJSON({
  ...datamodeloProductivo,
  features: datamodeloProductivo.features.filter(f => f.properties.Provincia === "Corrientes")
}, {
  pointToLayer: (f, latlng) => L.circleMarker(latlng, IconModPrductivo),

  // ⚠️ Esta línea solo es necesaria si estás aplicando un estilo distinto a los iconos.
  // De lo contrario, podés eliminarla o renombrarla como styleModProductivo si lo tenés definido.
  style: IconModPrductivo, 

  onEachFeature: (f, layer) => {
    const content = popupContentModProductivos(f);
    layer.bindPopup(content, { maxWidth: "auto" });

    layer.on("popupopen", function (e) {
      const popup = e.popup;
      if (!popup) {
        console.error("Error: e.popup no está definido.");
        return;
      }

      const popupElement = popup.getElement();
      if (!popupElement) {
        console.error("Error: popupElement no encontrado usando popup.getElement().");
        return;
      }

      const downloadCsvButton = popupElement.querySelector("#downloadCSV");
      if (!downloadCsvButton) {
        console.error("Error: Botón de descarga con ID #downloadCSV no encontrado en el popup.");
        return;
      }

      downloadCsvButton.addEventListener('click', function () {
        // ✅ CORREGIDO: usar f.properties en lugar de feature.properties
        descargarCSV(popupElement, f.properties);
      });
    });
  }
});