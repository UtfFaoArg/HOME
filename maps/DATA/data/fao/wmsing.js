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

