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

var SMN = {
"type": "FeatureCollection",
"name": "esmn_j",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "lat": "-24 23", "long": "-65 5", "ALT": 905, "NRO": 87046, "PROVINCIA": "JUJUY", "NOMBRE_ECO": "Chaco Seco", "region": "NOA" }, "geometry": { "type": "Point", "coordinates": [ -65.083333333333329, -24.383333333333333 ] } },
{ "type": "Feature", "properties": { "lat": "-24 10", "long": "-65 11", "ALT": 1302, "NRO": 87043, "PROVINCIA": "JUJUY", "NOMBRE_ECO": "Chaco Seco", "region": "NOA" }, "geometry": { "type": "Point", "coordinates": [ -65.183333333333337, -24.166666666666668 ] } },
{ "type": "Feature", "properties": { "lat": "-22 6", "long": "-65 36", "ALT": 3459, "NRO": 87007, "PROVINCIA": "JUJUY", "NOMBRE_ECO": "Puna", "region": "NOA" }, "geometry": { "type": "Point", "coordinates": [ -65.6, -22.1 ] } }
]
}

