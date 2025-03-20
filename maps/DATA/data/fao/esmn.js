var MarkerOptionsSMN= {
    radius: 5,
    fillColor: "#f8f80c",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.9
};

// // Contenido del popup para cada feature
function popupContentSMN(feature) {
    return (
        "<div id='Estilo1'><h3>ESTACIONES METEORÓLOGICAS</h3></div>" +
        "<hr class='hrx' align='left' noshade='noshade' size='1' width='100%' />"+
        "<b> <i>Fuente de Información:  </b>  Servicio Meteorológico Nacional (2024) </i><br>" +
        "<hr class='hrx' style='color: #ef7d26;' align='left' noshade='noshade' size='1' width='100%' />" +
        "<div id='Estilo3a'>" +
        "<b> Número de Estación : </b>" + feature.properties.NRO + "<br>" +
        "<b> Altura : </b>" + feature.properties.ALT + " m.s.n.m."+ "<br>" +
        "<b> Latitud : </b>" + feature.properties.lat + "    -    " + "<b> Longitud: </b>" + feature.properties.long + "<br>" +
        // "<br>" +
        "<hr class='hrx' align='left' noshade='noshade' size='1' width='100%' />"+
                "<div>"+
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
    "name": "SMN_estaciones_pais",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "lat": "-36 50", "long": "-59 53", "ALT": 147, "NRO": 87641, "PROVINCIA": "BUENOS AIRES" }, "geometry": { "type": "Point", "coordinates": [ -59.883333333333333, -36.833333333333336 ] } },
    { "type": "Feature", "properties": { "lat": "-38 44", "long": "-62 10", "ALT": 83, "NRO": 87750, "PROVINCIA": "BUENOS AIRES" }, "geometry": { "type": "Point", "coordinates": [ -62.166666666666664, -38.733333333333334 ] } },
    { "type": "Feature", "properties": { "lat": "-37 43", "long": "-59 47", "ALT": 207, "NRO": 87649, "PROVINCIA": "BUENOS AIRES" }, "geometry": { "type": "Point", "coordinates": [ -59.783333333333331, -37.716666666666669 ] } },
    { "type": "Feature", "properties": { "lat": "-36 12", "long": "-61 4", "ALT": 94, "NRO": 87640, "PROVINCIA": "BUENOS AIRES" }, "geometry": { "type": "Point", "coordinates": [ -61.06666666666667, -36.2 ] } },
    { "type": "Feature", "properties": { "lat": "-34 32", "long": "-58 40", "ALT": 26, "NRO": 87570, "PROVINCIA": "BUENOS AIRES" }, "geometry": { "type": "Point", "coordinates": [ -58.666666666666664, -34.533333333333331 ] } },
    { "type": "Feature", "properties": { "lat": "-38 1", "long": "-61 20", "ALT": 247, "NRO": 87683, "PROVINCIA": "BUENOS AIRES" }, "geometry": { "type": "Point", "coordinates": [ -61.333333333333336, -38.016666666666666 ] } },
    { "type": "Feature", "properties": { "lat": "-37 26", "long": "-61 53", "ALT": 233, "NRO": 87637, "PROVINCIA": "BUENOS AIRES" }, "geometry": { "type": "Point", "coordinates": [ -61.883333333333333, -37.43333333333333 ] } },
    { "type": "Feature", "properties": { "lat": "-36 21", "long": "-57 44", "ALT": 9, "NRO": 87648, "PROVINCIA": "BUENOS AIRES" }, "geometry": { "type": "Point", "coordinates": [ -57.733333333333334, -36.35 ] } },
    { "type": "Feature", "properties": { "lat": "-34 36", "long": "-58 36", "ALT": 12, "NRO": 87571, "PROVINCIA": "BUENOS AIRES" }, "geometry": { "type": "Point", "coordinates": [ -58.6, -34.6 ] } },
    { "type": "Feature", "properties": { "lat": "-34 49", "long": "-58 32", "ALT": 20, "NRO": 87576, "PROVINCIA": "BUENOS AIRES" }, "geometry": { "type": "Point", "coordinates": [ -58.533333333333331, -34.81666666666667 ] } },
    { "type": "Feature", "properties": { "lat": "-34 33", "long": "-60 55", "ALT": 81, "NRO": 87548, "PROVINCIA": "BUENOS AIRES" }, "geometry": { "type": "Point", "coordinates": [ -60.916666666666664, -34.55 ] } },
    { "type": "Feature", "properties": { "lat": "-34 58", "long": "-57 54", "ALT": 23, "NRO": 87593, "PROVINCIA": "BUENOS AIRES" }, "geometry": { "type": "Point", "coordinates": [ -57.9, -34.966666666666669 ] } },
    { "type": "Feature", "properties": { "lat": "-36 2", "long": "-59 8", "ALT": 36, "NRO": 87563, "PROVINCIA": "BUENOS AIRES" }, "geometry": { "type": "Point", "coordinates": [ -59.133333333333333, -36.033333333333331 ] } },
    { "type": "Feature", "properties": { "lat": "-37 56", "long": "-57 35", "ALT": 21, "NRO": 87692, "PROVINCIA": "BUENOS AIRES" }, "geometry": { "type": "Point", "coordinates": [ -57.583333333333336, -37.93333333333333 ] } },
    { "type": "Feature", "properties": { "lat": "-34 33", "long": "-58 49", "ALT": 32, "NRO": 87572, "PROVINCIA": "BUENOS AIRES" }, "geometry": { "type": "Point", "coordinates": [ -58.81666666666667, -34.55 ] } },
    { "type": "Feature", "properties": { "lat": "-34 41", "long": "-58 44", "ALT": 36, "NRO": 87573, "PROVINCIA": "BUENOS AIRES" }, "geometry": { "type": "Point", "coordinates": [ -58.733333333333334, -34.68333333333333 ] } },
    { "type": "Feature", "properties": { "lat": "-34 40", "long": "-58 38", "ALT": 24, "NRO": 87574, "PROVINCIA": "BUENOS AIRES" }, "geometry": { "type": "Point", "coordinates": [ -58.633333333333333, -34.666666666666664 ] } },
    { "type": "Feature", "properties": { "lat": "-35 27", "long": "-60 53", "ALT": 76, "NRO": 87550, "PROVINCIA": "BUENOS AIRES" }, "geometry": { "type": "Point", "coordinates": [ -60.883333333333333, -35.45 ] } },
    { "type": "Feature", "properties": { "lat": "-36 53", "long": "-60 13", "ALT": 166, "NRO": 87643, "PROVINCIA": "BUENOS AIRES" }, "geometry": { "type": "Point", "coordinates": [ -60.216666666666669, -36.883333333333333 ] } },
    { "type": "Feature", "properties": { "lat": "-35 52", "long": "-61 54", "ALT": 87, "NRO": 87544, "PROVINCIA": "BUENOS AIRES" }, "geometry": { "type": "Point", "coordinates": [ -61.9, -35.866666666666667 ] } },
    { "type": "Feature", "properties": { "lat": "-37 36", "long": "-62 23", "ALT": 304, "NRO": 87679, "PROVINCIA": "BUENOS AIRES" }, "geometry": { "type": "Point", "coordinates": [ -62.383333333333333, -37.6 ] } },
    { "type": "Feature", "properties": { "lat": "-35 22", "long": "-57 17", "ALT": 22, "NRO": 87596, "PROVINCIA": "BUENOS AIRES" }, "geometry": { "type": "Point", "coordinates": [ -57.283333333333331, -35.366666666666667 ] } },
    { "type": "Feature", "properties": { "lat": "-34 27", "long": "-58 35", "ALT": 3, "NRO": 87553, "PROVINCIA": "BUENOS AIRES" }, "geometry": { "type": "Point", "coordinates": [ -58.583333333333336, -34.45 ] } },
    { "type": "Feature", "properties": { "lat": "-36 33", "long": "-56 41", "ALT": 4, "NRO": 87658, "PROVINCIA": "BUENOS AIRES" }, "geometry": { "type": "Point", "coordinates": [ -56.68333333333333, -36.55 ] } },
    { "type": "Feature", "properties": { "lat": "-37 14", "long": "-59 15", "ALT": 175, "NRO": 87645, "PROVINCIA": "BUENOS AIRES" }, "geometry": { "type": "Point", "coordinates": [ -59.25, -37.233333333333334 ] } },
    { "type": "Feature", "properties": { "lat": "-35 58", "long": "-62 44", "ALT": 95, "NRO": 87540, "PROVINCIA": "BUENOS AIRES" }, "geometry": { "type": "Point", "coordinates": [ -62.733333333333334, -35.966666666666669 ] } },
    { "type": "Feature", "properties": { "lat": "-38 20", "long": "-60 15", "ALT": 115, "NRO": 87688, "PROVINCIA": "BUENOS AIRES" }, "geometry": { "type": "Point", "coordinates": [ -60.25, -38.333333333333336 ] } },
    { "type": "Feature", "properties": { "lat": "-37 14", "long": "-57 1", "ALT": 9, "NRO": 87663, "PROVINCIA": "BUENOS AIRES" }, "geometry": { "type": "Point", "coordinates": [ -57.016666666666666, -37.233333333333334 ] } },
    { "type": "Feature", "properties": { "lat": "-34 34", "long": "-58 25", "ALT": 6, "NRO": 87582, "PROVINCIA": "CAPITAL FEDERAL" }, "geometry": { "type": "Point", "coordinates": [ -58.416666666666664, -34.56666666666667 ] } },
    { "type": "Feature", "properties": { "lat": "-34 35", "long": "-58 29", "ALT": 25, "NRO": 87585, "PROVINCIA": "CAPITAL FEDERAL" }, "geometry": { "type": "Point", "coordinates": [ -58.483333333333334, -34.583333333333336 ] } },
    { "type": "Feature", "properties": { "lat": "-28 36", "long": "-65 46", "ALT": 454, "NRO": 87222, "PROVINCIA": "CATAMARCA" }, "geometry": { "type": "Point", "coordinates": [ -65.766666666666666, -28.6 ] } },
    { "type": "Feature", "properties": { "lat": "-28 4", "long": "-67 34", "ALT": 1201, "NRO": 87211, "PROVINCIA": "CATAMARCA" }, "geometry": { "type": "Point", "coordinates": [ -67.566666666666663, -28.066666666666666 ] } },
    { "type": "Feature", "properties": { "lat": "-26 45", "long": "-60 24", "ALT": 93, "NRO": 87148, "PROVINCIA": "CHACO" }, "geometry": { "type": "Point", "coordinates": [ -60.4, -26.75 ] } },
    { "type": "Feature", "properties": { "lat": "-27 27", "long": "-59 3", "ALT": 52, "NRO": 87155, "PROVINCIA": "CHACO" }, "geometry": { "type": "Point", "coordinates": [ -59.05, -27.45 ] } },
    { "type": "Feature", "properties": { "lat": "-45 47", "long": "-67 30", "ALT": 46, "NRO": 87860, "PROVINCIA": "CHUBUT" }, "geometry": { "type": "Point", "coordinates": [ -67.5, -45.783333333333331 ] } },
    { "type": "Feature", "properties": { "lat": "-42 56", "long": "-71 9", "ALT": 797, "NRO": 87803, "PROVINCIA": "CHUBUT" }, "geometry": { "type": "Point", "coordinates": [ -71.15, -42.93333333333333 ] } },
    { "type": "Feature", "properties": { "lat": "-43 49", "long": "-68 53", "ALT": 460, "NRO": 87814, "PROVINCIA": "CHUBUT" }, "geometry": { "type": "Point", "coordinates": [ -68.88333333333334, -43.81666666666667 ] } },
    { "type": "Feature", "properties": { "lat": "-42 44", "long": "-65 4", "ALT": 136, "NRO": 87823, "PROVINCIA": "CHUBUT" }, "geometry": { "type": "Point", "coordinates": [ -65.066666666666663, -42.733333333333334 ] } },
    { "type": "Feature", "properties": { "lat": "-43 12", "long": "-65 16", "ALT": 43, "NRO": 87828, "PROVINCIA": "CHUBUT" }, "geometry": { "type": "Point", "coordinates": [ -65.266666666666666, -43.2 ] } },
    { "type": "Feature", "properties": { "lat": "-31 18", "long": "-64 12", "ALT": 495, "NRO": 87344, "PROVINCIA": "CORDOBA" }, "geometry": { "type": "Point", "coordinates": [ -64.2, -31.3 ] } },
    { "type": "Feature", "properties": { "lat": "-31 24", "long": "-64 11", "ALT": 425, "NRO": 87345, "PROVINCIA": "CORDOBA" }, "geometry": { "type": "Point", "coordinates": [ -64.183333333333337, -31.4 ] } },
    { "type": "Feature", "properties": { "lat": "-31 27", "long": "-64 16", "ALT": 502, "NRO": 87347, "PROVINCIA": "CORDOBA" }, "geometry": { "type": "Point", "coordinates": [ -64.266666666666666, -31.45 ] } },
    { "type": "Feature", "properties": { "lat": "-34 8", "long": "-63 22", "ALT": 137, "NRO": 87534, "PROVINCIA": "CORDOBA" }, "geometry": { "type": "Point", "coordinates": [ -63.366666666666667, -34.133333333333333 ] } },
    { "type": "Feature", "properties": { "lat": "-32 42", "long": "-62 9", "ALT": 114, "NRO": 87467, "PROVINCIA": "CORDOBA" }, "geometry": { "type": "Point", "coordinates": [ -62.15, -32.7 ] } },
    { "type": "Feature", "properties": { "lat": "-31 40", "long": "-63 53", "ALT": 338, "NRO": 87349, "PROVINCIA": "CORDOBA" }, "geometry": { "type": "Point", "coordinates": [ -63.883333333333333, -31.666666666666668 ] } },
    { "type": "Feature", "properties": { "lat": "-33 7", "long": "-64 14", "ALT": 421, "NRO": 87453, "PROVINCIA": "CORDOBA" }, "geometry": { "type": "Point", "coordinates": [ -64.233333333333334, -33.116666666666667 ] } },
    { "type": "Feature", "properties": { "lat": "-31 57", "long": "-65 8", "ALT": 566, "NRO": 87328, "PROVINCIA": "CORDOBA" }, "geometry": { "type": "Point", "coordinates": [ -65.13333333333334, -31.95 ] } },
    { "type": "Feature", "properties": { "lat": "-29 54", "long": "-63 41", "ALT": 341, "NRO": 87244, "PROVINCIA": "CORDOBA" }, "geometry": { "type": "Point", "coordinates": [ -63.68333333333333, -29.9 ] } },
    { "type": "Feature", "properties": { "lat": "-27 27", "long": "-58 46", "ALT": 62, "NRO": 87166, "PROVINCIA": "CORRIENTES" }, "geometry": { "type": "Point", "coordinates": [ -58.766666666666666, -27.45 ] } },
    { "type": "Feature", "properties": { "lat": "-27 35", "long": "-56 40", "ALT": 72, "NRO": 87173, "PROVINCIA": "CORRIENTES" }, "geometry": { "type": "Point", "coordinates": [ -56.666666666666664, -27.583333333333332 ] } },
    { "type": "Feature", "properties": { "lat": "-29 13", "long": "-58 6", "ALT": 107, "NRO": 87281, "PROVINCIA": "CORRIENTES" }, "geometry": { "type": "Point", "coordinates": [ -58.1, -29.216666666666665 ] } },
    { "type": "Feature", "properties": { "lat": "-30 16", "long": "-57 39", "ALT": 54, "NRO": 87393, "PROVINCIA": "CORRIENTES" }, "geometry": { "type": "Point", "coordinates": [ -57.65, -30.266666666666666 ] } },
    { "type": "Feature", "properties": { "lat": "-29 41", "long": "-57 9", "ALT": 70, "NRO": 87289, "PROVINCIA": "CORRIENTES" }, "geometry": { "type": "Point", "coordinates": [ -57.15, -29.683333333333334 ] } },
    { "type": "Feature", "properties": { "lat": "-31 18", "long": "-58 1", "ALT": 38, "NRO": 87395, "PROVINCIA": "ENTRE RIOS" }, "geometry": { "type": "Point", "coordinates": [ -58.016666666666666, -31.3 ] } },
    { "type": "Feature", "properties": { "lat": "-33 0", "long": "-58 37", "ALT": 23, "NRO": 87497, "PROVINCIA": "ENTRE RIOS" }, "geometry": { "type": "Point", "coordinates": [ -58.616666666666667, -33.0 ] } },
    { "type": "Feature", "properties": { "lat": "-31 47", "long": "-60 29", "ALT": 78, "NRO": 87374, "PROVINCIA": "ENTRE RIOS" }, "geometry": { "type": "Point", "coordinates": [ -60.483333333333334, -31.783333333333335 ] } },
    { "type": "Feature", "properties": { "lat": "-26 12", "long": "-58 14", "ALT": 60, "NRO": 87162, "PROVINCIA": "FORMOSA" }, "geometry": { "type": "Point", "coordinates": [ -58.233333333333334, -26.2 ] } },
    { "type": "Feature", "properties": { "lat": "-24 42", "long": "-60 35", "ALT": 130, "NRO": 87078, "PROVINCIA": "FORMOSA" }, "geometry": { "type": "Point", "coordinates": [ -60.583333333333336, -24.7 ] } },
    { "type": "Feature", "properties": { "lat": "-24 23", "long": "-65 5", "ALT": 905, "NRO": 87046, "PROVINCIA": "JUJUY" }, "geometry": { "type": "Point", "coordinates": [ -65.083333333333329, -24.383333333333333 ] } },
    { "type": "Feature", "properties": { "lat": "-24 10", "long": "-65 11", "ALT": 1302, "NRO": 87043, "PROVINCIA": "JUJUY" }, "geometry": { "type": "Point", "coordinates": [ -65.183333333333337, -24.166666666666668 ] } },
    { "type": "Feature", "properties": { "lat": "-22 6", "long": "-65 36", "ALT": 3459, "NRO": 87007, "PROVINCIA": "JUJUY" }, "geometry": { "type": "Point", "coordinates": [ -65.6, -22.1 ] } },
    { "type": "Feature", "properties": { "lat": "-35 42", "long": "-63 45", "ALT": 145, "NRO": 87532, "PROVINCIA": "LA PAMPA" }, "geometry": { "type": "Point", "coordinates": [ -63.75, -35.7 ] } },
    { "type": "Feature", "properties": { "lat": "-36 34", "long": "-64 16", "ALT": 191, "NRO": 87623, "PROVINCIA": "LA PAMPA" }, "geometry": { "type": "Point", "coordinates": [ -64.266666666666666, -36.56666666666667 ] } },
    { "type": "Feature", "properties": { "lat": "-36 13", "long": "-65 26", "ALT": 312, "NRO": 87616, "PROVINCIA": "LA PAMPA" }, "geometry": { "type": "Point", "coordinates": [ -65.433333333333337, -36.216666666666669 ] } },
    { "type": "Feature", "properties": { "lat": "-30 22", "long": "-66 17", "ALT": 461, "NRO": 87320, "PROVINCIA": "LA RIOJA" }, "geometry": { "type": "Point", "coordinates": [ -66.283333333333331, -30.366666666666667 ] } },
    { "type": "Feature", "properties": { "lat": "-31 20", "long": "-66 36", "ALT": 658, "NRO": 87322, "PROVINCIA": "LA RIOJA" }, "geometry": { "type": "Point", "coordinates": [ -66.6, -31.333333333333332 ] } },
    { "type": "Feature", "properties": { "lat": "-29 14", "long": "-67 26", "ALT": 947, "NRO": 87213, "PROVINCIA": "LA RIOJA" }, "geometry": { "type": "Point", "coordinates": [ -67.433333333333337, -29.233333333333334 ] } },
    { "type": "Feature", "properties": { "lat": "-29 23", "long": "-66 49", "ALT": 429, "NRO": 87217, "PROVINCIA": "LA RIOJA" }, "geometry": { "type": "Point", "coordinates": [ -66.816666666666663, -29.383333333333333 ] } },
    { "type": "Feature", "properties": { "lat": "-35 30", "long": "-69 35", "ALT": 1425, "NRO": 87506, "PROVINCIA": "MENDOZA" }, "geometry": { "type": "Point", "coordinates": [ -69.583333333333329, -35.5 ] } },
    { "type": "Feature", "properties": { "lat": "-32 50", "long": "-68 47", "ALT": 704, "NRO": 87418, "PROVINCIA": "MENDOZA" }, "geometry": { "type": "Point", "coordinates": [ -68.783333333333331, -32.833333333333336 ] } },
    { "type": "Feature", "properties": { "lat": "-32 53", "long": "-68 51", "ALT": 827, "NRO": 87420, "PROVINCIA": "MENDOZA" }, "geometry": { "type": "Point", "coordinates": [ -68.85, -32.883333333333333 ] } },
    { "type": "Feature", "properties": { "lat": "-33 46", "long": "-69 2", "ALT": 940, "NRO": 87412, "PROVINCIA": "MENDOZA" }, "geometry": { "type": "Point", "coordinates": [ -69.033333333333331, -33.766666666666666 ] } },
    { "type": "Feature", "properties": { "lat": "-33 5", "long": "-68 25", "ALT": 653, "NRO": 87416, "PROVINCIA": "MENDOZA" }, "geometry": { "type": "Point", "coordinates": [ -68.416666666666671, -33.083333333333336 ] } },
    { "type": "Feature", "properties": { "lat": "-34 35", "long": "-68 24", "ALT": 748, "NRO": 87509, "PROVINCIA": "MENDOZA" }, "geometry": { "type": "Point", "coordinates": [ -68.4, -34.583333333333336 ] } },
    { "type": "Feature", "properties": { "lat": "-32 36", "long": "-69 20", "ALT": 1891, "NRO": 87405, "PROVINCIA": "MENDOZA" }, "geometry": { "type": "Point", "coordinates": [ -69.333333333333329, -32.6 ] } },
    { "type": "Feature", "properties": { "lat": "-26 15", "long": "-53 39", "ALT": 815, "NRO": 87163, "PROVINCIA": "MISIONES" }, "geometry": { "type": "Point", "coordinates": [ -53.65, -26.25 ] } },
    { "type": "Feature", "properties": { "lat": "-25 44", "long": "-54 28", "ALT": 270, "NRO": 87097, "PROVINCIA": "MISIONES" }, "geometry": { "type": "Point", "coordinates": [ -54.466666666666669, -25.733333333333334 ] } },
    { "type": "Feature", "properties": { "lat": "-27 29", "long": "-55 8", "ALT": 303, "NRO": 87187, "PROVINCIA": "MISIONES" }, "geometry": { "type": "Point", "coordinates": [ -55.133333333333333, -27.483333333333334 ] } },
    { "type": "Feature", "properties": { "lat": "-27 22", "long": "-55 58", "ALT": 125, "NRO": 87178, "PROVINCIA": "MISIONES" }, "geometry": { "type": "Point", "coordinates": [ -55.966666666666669, -27.366666666666667 ] } },
    { "type": "Feature", "properties": { "lat": "-40 5", "long": "-71 8", "ALT": 779, "NRO": 87761, "PROVINCIA": "NEUQUEN" }, "geometry": { "type": "Point", "coordinates": [ -71.13333333333334, -40.083333333333336 ] } },
    { "type": "Feature", "properties": { "lat": "-38 57", "long": "-68 8", "ALT": 271, "NRO": 87715, "PROVINCIA": "NEUQUEN" }, "geometry": { "type": "Point", "coordinates": [ -68.13333333333334, -38.95 ] } },
    { "type": "Feature", "properties": { "lat": "-41 9", "long": "-71 10", "ALT": 840, "NRO": 87765, "PROVINCIA": "RIO NEGRO" }, "geometry": { "type": "Point", "coordinates": [ -71.166666666666671, -41.15 ] } },
    { "type": "Feature", "properties": { "lat": "-38 57", "long": "-67 58", "ALT": 265, "NRO": 87719, "PROVINCIA": "RIO NEGRO" }, "geometry": { "type": "Point", "coordinates": [ -67.966666666666669, -38.95 ] } },
    { "type": "Feature", "properties": { "lat": "-41 58", "long": "-71 31", "ALT": 337, "NRO": 87800, "PROVINCIA": "RIO NEGRO" }, "geometry": { "type": "Point", "coordinates": [ -71.516666666666666, -41.966666666666669 ] } },
    { "type": "Feature", "properties": { "lat": "-41 15", "long": "-68 44", "ALT": 888, "NRO": 87774, "PROVINCIA": "RIO NEGRO" }, "geometry": { "type": "Point", "coordinates": [ -68.733333333333334, -41.25 ] } },
    { "type": "Feature", "properties": { "lat": "-39 1", "long": "-64 5", "ALT": 79, "NRO": 87736, "PROVINCIA": "RIO NEGRO" }, "geometry": { "type": "Point", "coordinates": [ -64.083333333333329, -39.016666666666666 ] } },
    { "type": "Feature", "properties": { "lat": "-40 47", "long": "-65 6", "ALT": 20, "NRO": 87784, "PROVINCIA": "RIO NEGRO" }, "geometry": { "type": "Point", "coordinates": [ -65.1, -40.783333333333331 ] } },
    { "type": "Feature", "properties": { "lat": "-40 51", "long": "-63 1", "ALT": 7, "NRO": 87791, "PROVINCIA": "RIO NEGRO" }, "geometry": { "type": "Point", "coordinates": [ -63.016666666666666, -40.85 ] } },
    { "type": "Feature", "properties": { "lat": "-25 29", "long": "-64 48", "ALT": 855, "NRO": 87050, "PROVINCIA": "SALTA" }, "geometry": { "type": "Point", "coordinates": [ -64.8, -25.483333333333334 ] } },
    { "type": "Feature", "properties": { "lat": "-23 9", "long": "-64 19", "ALT": 357, "NRO": 87016, "PROVINCIA": "SALTA" }, "geometry": { "type": "Point", "coordinates": [ -64.316666666666663, -23.15 ] } },
    { "type": "Feature", "properties": { "lat": "-24 10", "long": "-62 54", "ALT": 205, "NRO": 87065, "PROVINCIA": "SALTA" }, "geometry": { "type": "Point", "coordinates": [ -62.9, -24.166666666666668 ] } },
    { "type": "Feature", "properties": { "lat": "-24 51", "long": "-65 29", "ALT": 1221, "NRO": 87047, "PROVINCIA": "SALTA" }, "geometry": { "type": "Point", "coordinates": [ -65.483333333333334, -24.85 ] } },
    { "type": "Feature", "properties": { "lat": "-22 39", "long": "-63 49", "ALT": 450, "NRO": 87022, "PROVINCIA": "SALTA" }, "geometry": { "type": "Point", "coordinates": [ -63.81666666666667, -22.65 ] } },
    { "type": "Feature", "properties": { "lat": "-30 14", "long": "-68 45", "ALT": 1175, "NRO": 87305, "PROVINCIA": "SAN JUAN" }, "geometry": { "type": "Point", "coordinates": [ -68.75, -30.233333333333334 ] } },
    { "type": "Feature", "properties": { "lat": "-31 34", "long": "-68 25", "ALT": 598, "NRO": 87311, "PROVINCIA": "SAN JUAN" }, "geometry": { "type": "Point", "coordinates": [ -68.416666666666671, -31.566666666666666 ] } },
    { "type": "Feature", "properties": { "lat": "-33 16", "long": "-66 21", "ALT": 713, "NRO": 87436, "PROVINCIA": "SAN LUIS" }, "geometry": { "type": "Point", "coordinates": [ -66.35, -33.266666666666666 ] } },
    { "type": "Feature", "properties": { "lat": "-32 23", "long": "-65 11", "ALT": 620, "NRO": 87444, "PROVINCIA": "SAN LUIS" }, "geometry": { "type": "Point", "coordinates": [ -65.183333333333337, -32.383333333333333 ] } },
    { "type": "Feature", "properties": { "lat": "-33 44", "long": "-65 23", "ALT": 486, "NRO": 87448, "PROVINCIA": "SAN LUIS" }, "geometry": { "type": "Point", "coordinates": [ -65.38333333333334, -33.733333333333334 ] } },
    { "type": "Feature", "properties": { "lat": "-50 16", "long": "-72 3", "ALT": 204, "NRO": 87904, "PROVINCIA": "SANTA CRUZ" }, "geometry": { "type": "Point", "coordinates": [ -72.05, -50.266666666666666 ] } },
    { "type": "Feature", "properties": { "lat": "-48 47", "long": "-70 10", "ALT": 358, "NRO": 87880, "PROVINCIA": "SANTA CRUZ" }, "geometry": { "type": "Point", "coordinates": [ -70.166666666666671, -48.783333333333331 ] } },
    { "type": "Feature", "properties": { "lat": "-46 31", "long": "-71 1", "ALT": 429, "NRO": 87852, "PROVINCIA": "SANTA CRUZ" }, "geometry": { "type": "Point", "coordinates": [ -71.016666666666666, -46.516666666666666 ] } },
    { "type": "Feature", "properties": { "lat": "-47 44", "long": "-65 55", "ALT": 80, "NRO": 87896, "PROVINCIA": "SANTA CRUZ" }, "geometry": { "type": "Point", "coordinates": [ -65.916666666666671, -47.733333333333334 ] } },
    { "type": "Feature", "properties": { "lat": "-51 37", "long": "-69 17", "ALT": 19, "NRO": 87925, "PROVINCIA": "SANTA CRUZ" }, "geometry": { "type": "Point", "coordinates": [ -69.283333333333331, -51.616666666666667 ] } },
    { "type": "Feature", "properties": { "lat": "-49 19", "long": "-67 47", "ALT": 62, "NRO": 87909, "PROVINCIA": "SANTA CRUZ" }, "geometry": { "type": "Point", "coordinates": [ -67.783333333333331, -49.31666666666667 ] } },
    { "type": "Feature", "properties": { "lat": "-50 1", "long": "-68 34", "ALT": 111, "NRO": 87912, "PROVINCIA": "SANTA CRUZ" }, "geometry": { "type": "Point", "coordinates": [ -68.566666666666663, -50.016666666666666 ] } },
    { "type": "Feature", "properties": { "lat": "-29 53", "long": "-61 57", "ALT": 88, "NRO": 87257, "PROVINCIA": "SANTA FE" }, "geometry": { "type": "Point", "coordinates": [ -61.95, -29.883333333333333 ] } },
    { "type": "Feature", "properties": { "lat": "-32 12", "long": "-61 40", "ALT": 96, "NRO": 87470, "PROVINCIA": "SANTA FE" }, "geometry": { "type": "Point", "coordinates": [ -61.666666666666664, -32.2 ] } },
    { "type": "Feature", "properties": { "lat": "-31 16", "long": "-61 30", "ALT": 99, "NRO": 87360, "PROVINCIA": "SANTA FE" }, "geometry": { "type": "Point", "coordinates": [ -61.5, -31.266666666666666 ] } },
    { "type": "Feature", "properties": { "lat": "-29 11", "long": "-59 42", "ALT": 53, "NRO": 87270, "PROVINCIA": "SANTA FE" }, "geometry": { "type": "Point", "coordinates": [ -59.7, -29.183333333333334 ] } },
    { "type": "Feature", "properties": { "lat": "-32 55", "long": "-60 47", "ALT": 25, "NRO": 87480, "PROVINCIA": "SANTA FE" }, "geometry": { "type": "Point", "coordinates": [ -60.783333333333331, -32.916666666666664 ] } },
    { "type": "Feature", "properties": { "lat": "-31 42", "long": "-60 49", "ALT": 18, "NRO": 87371, "PROVINCIA": "SANTA FE" }, "geometry": { "type": "Point", "coordinates": [ -60.81666666666667, -31.7 ] } },
    { "type": "Feature", "properties": { "lat": "-30 58", "long": "-61 20", "ALT": 92, "NRO": 87356, "PROVINCIA": "SANTA FE" }, "geometry": { "type": "Point", "coordinates": [ -61.333333333333336, -30.966666666666665 ] } },
    { "type": "Feature", "properties": { "lat": "-33 40", "long": "-61 58", "ALT": 112, "NRO": 87468, "PROVINCIA": "SANTA FE" }, "geometry": { "type": "Point", "coordinates": [ -61.966666666666669, -33.666666666666664 ] } },
    { "type": "Feature", "properties": { "lat": "-27 46", "long": "-64 18", "ALT": 199, "NRO": 87129, "PROVINCIA": "SANTIAGO DEL ESTERO" }, "geometry": { "type": "Point", "coordinates": [ -64.3, -27.766666666666666 ] } },
    { "type": "Feature", "properties": { "lat": "-27 29", "long": "-64 56", "ALT": 280, "NRO": 87127, "PROVINCIA": "SANTIAGO DEL ESTERO" }, "geometry": { "type": "Point", "coordinates": [ -64.933333333333337, -27.483333333333334 ] } },
    { "type": "Feature", "properties": { "lat": "-53 48", "long": "-67 45", "ALT": 22, "NRO": 87934, "PROVINCIA": "TIERRA DEL FUEGO" }, "geometry": { "type": "Point", "coordinates": [ -67.75, -53.8 ] } },
    { "type": "Feature", "properties": { "lat": "-54 48", "long": "-68 19", "ALT": 57, "NRO": 87938, "PROVINCIA": "TIERRA DEL FUEGO" }, "geometry": { "type": "Point", "coordinates": [ -68.316666666666663, -54.8 ] } },
    { "type": "Feature", "properties": { "lat": "-26 51", "long": "-65 6", "ALT": 450, "NRO": 87121, "PROVINCIA": "TUCUMAN" }, "geometry": { "type": "Point", "coordinates": [ -65.1, -26.85 ] } }
    ]
    }
    
    
    

