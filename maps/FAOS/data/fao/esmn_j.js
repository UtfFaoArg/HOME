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
    "name": "esmn_s",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "lat": "-25 29", "long": "-64 48", "ALT": 855, "NRO": 87050, "PROVINCIA": "SALTA", "NOMBRE_ECO": "Chaco Seco", "region": "NOA" }, "geometry": { "type": "Point", "coordinates": [ -64.8, -25.483333333333334 ] } },
    { "type": "Feature", "properties": { "lat": "-23 9", "long": "-64 19", "ALT": 357, "NRO": 87016, "PROVINCIA": "SALTA", "NOMBRE_ECO": "Selva de las Yungas", "region": "NOA" }, "geometry": { "type": "Point", "coordinates": [ -64.316666666666663, -23.15 ] } },
    { "type": "Feature", "properties": { "lat": "-24 10", "long": "-62 54", "ALT": 205, "NRO": 87065, "PROVINCIA": "SALTA", "NOMBRE_ECO": "Chaco Seco", "region": "NOA" }, "geometry": { "type": "Point", "coordinates": [ -62.9, -24.166666666666668 ] } },
    { "type": "Feature", "properties": { "lat": "-24 51", "long": "-65 29", "ALT": 1221, "NRO": 87047, "PROVINCIA": "SALTA", "NOMBRE_ECO": "Chaco Seco", "region": "NOA" }, "geometry": { "type": "Point", "coordinates": [ -65.483333333333334, -24.85 ] } },
    { "type": "Feature", "properties": { "lat": "-22 39", "long": "-63 49", "ALT": 450, "NRO": 87022, "PROVINCIA": "SALTA", "NOMBRE_ECO": "Selva de las Yungas", "region": "NOA" }, "geometry": { "type": "Point", "coordinates": [ -63.81666666666667, -22.65 ] } }
    ]
    }
    

