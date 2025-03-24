//options recomendada para disminuir el codido//

var options = {format: 'image/png',
    uppercase: true,
    transparent: true,
    version: '1.3.0',
    continuousWorld : true,
    tiled: true,
    info_format: 'text/html',
   info_format_pop:'application/json:type/geoJson',
    opacity: 1,
	attribution: '<a href="https://www.ign.gob.ar/"  target="_blank"> ArgenMap </a>',
  };

//llamo una vez al servidor//
var source = L.WMS.source("https://sigam.segemar.gov.ar/geoserver217/wms?", options);
// llama cada capa del servidor//
var GeologicoIGN = source.getLayer('sigam:e2.5M.UnidadesGeologicas');

var Rios= source.getLayer();

var SubCuencas= source.getLayer()

// var sourceINTA = L.WMS.source("http://geoportal.idesa.gob.ar/geoserver/ows?version=1.1.1", options);


// variable de otro geoservicio, en este caso de Secretaria de energia de la nacion.

var optionsEnergia = {format: 'image/png',
  uppercase: true,
  transparent: true,
  version: '1.3.0',
  continuousWorld : true,
  tiled: true,
 info_format: 'text/html',
 info_format_pop:'application/json:type/geoJson',
  opacity: 1,
//attribution: '<a href="https://www.ign.gob.ar/"  target="_blank"> ArgenMap </a>',
};

var wmsenergiasource =L.WMS.source("https://sig.energia.gob.ar/wmsenergia?", optionsEnergia );

var IsoHieta = wmsenergiasource.getLayer('layers=recursoshidricos_atlas2002_isohietas');


//version=1.3.0&service=WMS&request=GetLegendGraphic&sld_version=1.1.0&layer=recursoshidricos_atlas2002_isohietas&format=image/png&STYLE=default&