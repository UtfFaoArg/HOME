
var MarkerOptionsSitios = {
    radius: 8,
    fillColor: "#ff7f00",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

// // Contenido del popup para cada feature
function popupContentSitios(feature) {
    return (
        "<div id='Estilo1'><h3>Descripción</h3></div>" +
        "<hr class='hrx' style='color: #ef7d26;' align='left' noshade='noshade' size='1' width='100%' />" +
        "<div id='Estilo3a'>" +
       // "<b> Número de identificación: </b>" + feature.properties.id + "<br>" +
      //  "<b> Provincia: </b>" + feature.properties.nom_pcia + "<br>" +
        "<b> Departamento: </b>" + feature.properties.nom_depto + "<br>" +
        "<b> Localidad: </b>" + feature.properties.fna + "<br>" +
        //"<b> Ecorregión: </b>" + feature.properties.ecoregion + "<br>" +
        "<br>" +
        // "<b> <i>Fuente de Información:  </b>  INDEC - Censo 2010<br>" +
        // "<b> Fecha de actualización:  </b> - </i>" +
        "</div>"
    )
};
// Función para generar la leyenda
function createLegendSitios() {
    var legend = L.control({ position: 'bottomright' });

    legend.onAdd = function () {
        var div = L.DomUtil.create('div', 'info legend');
        var labels = [];
        var styles = [
            { label: 'Sitios seleccionados', color: '' },
            { label: ' ', color: '#ff7f00' },
                    
            // Agrega aquí el resto de estilos con su respectiva etiqueta y color
        ];

        // Genera el contenido HTML de la leyenda
        styles.forEach(function (style) {
            labels.push(
                '<i style="background:' + style.color + '"></i> ' + style.label
            );
        });

        div.innerHTML = labels.join('<br>');
        return div;
    };

    // Función para mostrar/ocultar la leyenda
    function toggleLegend() {
        if (map.hasLayer(SitiosSeleccionados)) {
            legend.addTo(map);
        } else {
            legend.remove();
        }
    }
// Eliminar la leyenda al inicio
legend.remove();
    // Escucha el cambio de estado de la capa
    map.on('overlayadd overlayremove', toggleLegend);
}


var sitios = 
{
    "type": "FeatureCollection",
    "name": "Puntos NEA_ajustados_280425_prj",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "description": null, "nom_pcia": "Formosa", "nom_depto": "Ramón Lista", "fna": "General Mosconi", "tipo_asent": "Localidad simple", "nom_aglo": "General Mosconi", "nom_agl": "General Enrique Mosconi,General Mosconi", "lat_gd": "-23.183830", "long_gd": "-62.306572", "fdc": "INDEC" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -59.922198818009555, -25.348860338081309 ] ] } },
    { "type": "Feature", "properties": { "description": null, "nom_pcia": "Formosa", "nom_depto": "Pirane", "fna": "Monte Quemado", "tipo_asent": "Localidad simple", "nom_aglo": null, "nom_agl": null, "lat_gd": null, "long_gd": null, "fdc": null }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -59.268508669962856, -25.868744015470462 ] ] } },
    { "type": "Feature", "properties": { "description": null, "nom_pcia": "Formosa", "nom_depto": "Laishi", "fna": "San Francisco de Laishi", "tipo_asent": "Localidad simple", "nom_aglo": "San Francisco de Laishi", "nom_agl": "Misión San Francisco de Laishi", "lat_gd": "-26.243867", "long_gd": "-58.629613", "fdc": "INDEC" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -58.62961305224588, -26.243867035262223 ] ] } },
    { "type": "Feature", "properties": { "description": null, "nom_pcia": "Chaco", "nom_depto": "General Güemes", "fna": "Miraflores", "tipo_asent": "Localidad simple", "nom_aglo": "Miraflores", "nom_agl": "Miraflores", "lat_gd": "-25.649425", "long_gd": "-60.930187", "fdc": "INDEC" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -60.930187454337172, -25.649424977763125 ] ] } },
    { "type": "Feature", "properties": { "description": null, "nom_pcia": "Chaco", "nom_depto": "General Güemes", "fna": "Zaparinqui", "tipo_asent": "Localidad simple", "nom_aglo": "Zaparinqui", "nom_agl": "Juan José Castelli", "lat_gd": "-26.065792", "long_gd": "-60.561927", "fdc": "INDEC" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -60.561926701387492, -26.065792017441019 ] ] } },
    { "type": "Feature", "properties": { "description": null, "nom_pcia": "Chaco", "nom_depto": "Maipú", "fna": "Tres Isletas", "tipo_asent": "Localidad simple", "nom_aglo": "Tres Isletas", "nom_agl": "Tres Isletas", "lat_gd": "-26.340325", "long_gd": "-60.431262", "fdc": "INDEC" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -60.431261529359794, -26.340324562211627 ] ] } },
    { "type": "Feature", "properties": { "description": null, "nom_pcia": "Chaco", "nom_depto": "Tapenagá", "fna": "Charadai", "tipo_asent": "Localidad simple", "nom_aglo": "Charadai", "nom_agl": "Charadai", "lat_gd": "-27.652364", "long_gd": "-59.860351", "fdc": "INDEC" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -59.86035073189398, -27.652364422085327 ] ] } },
    { "type": "Feature", "properties": { "description": null, "nom_pcia": "Chaco", "nom_depto": "General Güemes", "fna": "Miraflores", "tipo_asent": "Localidad simple", "nom_aglo": "Miraflores", "nom_agl": "Miraflores", "lat_gd": "-25.649425", "long_gd": "-60.930187", "fdc": "INDEC" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -60.930187454337172, -25.649424977763125 ] ] } },
    { "type": "Feature", "properties": { "description": null, "nom_pcia": "Chaco", "nom_depto": "General Güemes", "fna": "Zaparinqui", "tipo_asent": "Localidad simple", "nom_aglo": "Zaparinqui", "nom_agl": "Juan José Castelli", "lat_gd": "-26.065792", "long_gd": "-60.561927", "fdc": "INDEC" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -60.561926701387492, -26.065792017441019 ] ] } },
    { "type": "Feature", "properties": { "description": null, "nom_pcia": "Chaco", "nom_depto": "Maipú", "fna": "Tres Isletas", "tipo_asent": "Localidad simple", "nom_aglo": "Tres Isletas", "nom_agl": "Tres Isletas", "lat_gd": "-26.340325", "long_gd": "-60.431262", "fdc": "INDEC" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -60.431261529359794, -26.340324562211627 ] ] } },
    { "type": "Feature", "properties": { "description": null, "nom_pcia": "Chaco", "nom_depto": "Tapenagá", "fna": "Charadai", "tipo_asent": "Localidad simple", "nom_aglo": "Charadai", "nom_agl": "Charadai", "lat_gd": "-27.652364", "long_gd": "-59.860351", "fdc": "INDEC" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -59.86035073189398, -27.652364422085327 ] ] } },
    { "type": "Feature", "properties": { "description": "Ovinos/caprinos", "nom_pcia": "Misiones", "nom_depto": "Capital", "fna": "Fachinal", "tipo_asent": "Localidad simple", "nom_aglo": null, "nom_agl": null, "lat_gd": null, "long_gd": null, "fdc": null }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -55.705017542150642, -27.628474554070817 ] ] } },
    { "type": "Feature", "properties": { "description": "Horticola", "nom_pcia": "Misiones", "nom_depto": "San Ingacio", "fna": "Corpus Chisti", "tipo_asent": "Localidad simple", "nom_aglo": null, "nom_agl": null, "lat_gd": null, "long_gd": null, "fdc": null }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -55.506668363637687, -27.129105657517766 ] ] } },
    { "type": "Feature", "properties": { "description": null, "nom_pcia": "Corrientes", "nom_depto": "Sauce", "fna": "Francisco Gómez", "tipo_asent": "Paraje", "nom_aglo": null, "nom_agl": "Sauce", "lat_gd": "-30.120836", "long_gd": "-58.914069", "fdc": "Mapa Educativo (GPS)" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -58.914068514222571, -30.120836348063584 ] ] } },
    { "type": "Feature", "properties": { "description": null, "nom_pcia": "Formosa", "nom_depto": "Bermejo", "fna": "Laguna Yema", "tipo_asent": "Localidad simple", "nom_aglo": null, "nom_agl": null, "lat_gd": null, "long_gd": null, "fdc": null }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -59.864723173595749, -25.31416564473696 ] ] } },
    { "type": "Feature", "properties": { "description": "Actividad Lechera", "nom_pcia": "Misiones", "nom_depto": "San Pedro", "fna": "Pozo Azul", "tipo_asent": "Localidad simple", "nom_aglo": null, "nom_agl": null, "lat_gd": null, "long_gd": null, "fdc": null }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -54.151834302613743, -26.346503456582244 ] ] } }
    ]
    }
    
    
