var MarkerOptionsSMN= {
    radius: 8,
    fillColor: "#f8f80c",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

// // Contenido del popup para cada feature
function popupContentSMN(feature) {
    return (
        "<div id='Estilo1'><h3>Descripción</h3></div>" +
        "<hr class='hrx' style='color: #ef7d26;' align='left' noshade='noshade' size='1' width='100%' />" +
        "<div id='Estilo3a'>" +
        "<b> Número : </b>" + feature.properties.NRO + "<br>" +
        "<b> Altura : </b>" + feature.properties.ALT + " m.s.n.m."+ "<br>" +
        "<b> Latitud : </b>" + feature.properties.lat + "<br>" +
        "<b> Longitud: </b>" + feature.properties.long + "<br>" +
        // "<br>" +
        // "<b> <i>Fuente de Información:  </b>  INDEC - Censo 2010<br>" +
        // "<b> Fecha de actualización:  </b> - </i>" +
        "</div>"
    )
};
// Función para generar la leyenda
function createLegendSMN() {
    var legend = L.control({ position: 'bottomright' });

    legend.onAdd = function () {
        var div = L.DomUtil.create('div', 'info legend');
        var labels = [];
        var styles = [
            { label: 'Estaciones Meteorologicas', color: '' },
            { label: 'SMN', color: '#f8f80c' },
                    
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
        if (map.hasLayer(EstacionesSMN)) {
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

var SMN = 
{
    "type": "FeatureCollection",
    "name": "esmn",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "lat": "-30 22", "long": "-66 17", "ALT. (m)": 461, "NRO": 87320, "PROVINCIA": "LA RIOJA" }, "geometry": { "type": "Point", "coordinates": [ -66.283333333333331, -30.366666666666667 ] } },
    { "type": "Feature", "properties": { "lat": "-31 20", "long": "-66 36", "ALT. (m)": 658, "NRO": 87322, "PROVINCIA": "LA RIOJA" }, "geometry": { "type": "Point", "coordinates": [ -66.6, -31.333333333333332 ] } },
    { "type": "Feature", "properties": { "lat": "-29 14", "long": "-67 26", "ALT. (m)": 947, "NRO": 87213, "PROVINCIA": "LA RIOJA" }, "geometry": { "type": "Point", "coordinates": [ -67.433333333333337, -29.233333333333334 ] } },
    { "type": "Feature", "properties": { "lat": "-29 23", "long": "-66 49", "ALT. (m)": 429, "NRO": 87217, "PROVINCIA": "LA RIOJA" }, "geometry": { "type": "Point", "coordinates": [ -66.816666666666663, -29.383333333333333 ] } }
    ]
    }
    
    
    

