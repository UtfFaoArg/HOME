var MarkerOptionsINTA= {
    radius: 5,
    fillColor: "#530cf8",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.9
};

// // Contenido del popup para cada feature
function popupContentINTA(feature) {
    return (
        "<div id='Estilo1'><h3>ESTACIONES METEORÓLOGICAS</h3></div>" +
        "<hr class='hrx' align='left' noshade='noshade' size='1' width='100%' />"+
        "<b> <i>Fuente de Información:  </b>  INTA (2024) </i><br>" +
        "<hr class='hrx' style='color: #ef7d26;' align='left' noshade='noshade' size='1' width='100%' />" +
        "<div id='Estilo3a'>" +
        "<b> Número de identificación : </b>" + feature.properties.id + "<br>" +
        "<b> Nombre de la estación : </b>" + feature.properties.Nombre +  "<br>" +
        "<b> Latitud : </b>" + feature.properties.Latitud + "    -    " +"<b> Longitud: </b>" + feature.properties.Longitud + "<br>" +
        
        "<b> Estado: </b>" + feature.properties.Estado + "<br>" +
        
        // "<br>" +
        "<hr class='hrx' align='left' noshade='noshade' size='1' width='100%' />"+
                "<div>"+
        // "<b> Fecha de actualización:  </b> - </i>" +
        "</div>"
    )
};
// Función para generar la leyenda
function createLegendINTA() {
    var legend = L.control({ position: 'bottomright' });

    legend.onAdd = function () {
        var div = L.DomUtil.create('div', 'info legend');
        var labels = [];
        var styles = [
            { label: 'Estaciones Meteorologicas', color: '' },
            { label: 'INTA', color: '#530cf8' },
                    
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
        if (map.hasLayer(EstacionesINTA)) {
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

var ESMINTA = 
{
    "type": "FeatureCollection",
    "name": "INTA_estaciones_pais",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "id": "A872801", "Nombre": "Castelar - ICyA CIRN", "Latitud": -34.61, "Longitud": -58.67, "Estado": "E", "IP": "SI" }, "geometry": { "type": "Point", "coordinates": [ -58.67, -34.61 ] } },
    { "type": "Feature", "properties": { "id": "A872802", "Nombre": "San Fernando - EEA Delta", "Latitud": -34.25, "Longitud": -58.61, "Estado": "E", "IP": "SI" }, "geometry": { "type": "Point", "coordinates": [ -58.61, -34.25 ] } },
    { "type": "Feature", "properties": { "id": "A872803", "Nombre": "S.J. Frontera - EEA Concordia", "Latitud": -30.36, "Longitud": -58.32, "Estado": "E", "IP": "SI" }, "geometry": { "type": "Point", "coordinates": [ -58.32, -30.36 ] } },
    { "type": "Feature", "properties": { "id": "A872804", "Nombre": "Villa Paranacito-EEA C. del Ur", "Latitud": -33.71, "Longitud": -58.65, "Estado": "E", "IP": "SI" }, "geometry": { "type": "Point", "coordinates": [ -58.65, -33.71 ] } },
    { "type": "Feature", "properties": { "id": "A872805", "Nombre": "Federal - EEA Concordia", "Latitud": -30.93, "Longitud": -58.77, "Estado": "E", "IP": "SI" }, "geometry": { "type": "Point", "coordinates": [ -58.77, -30.93 ] } },
    { "type": "Feature", "properties": { "id": "A872806", "Nombre": "Chascomus - EEA Cuenca Salado", "Latitud": -35.74, "Longitud": -58.05, "Estado": "E", "IP": "SI" }, "geometry": { "type": "Point", "coordinates": [ -58.05, -35.74 ] } },
    { "type": "Feature", "properties": { "id": "A872808", "Nombre": "La Dulce - EEA Balcarce", "Latitud": -38.34, "Longitud": -59.01, "Estado": "F", "IP": "SI" }, "geometry": { "type": "Point", "coordinates": [ -59.01, -38.34 ] } },
    { "type": "Feature", "properties": { "id": "A872810", "Nombre": "Llavallol - ICyA CIRN", "Latitud": -34.79, "Longitud": -58.45, "Estado": "E", "IP": "SI" }, "geometry": { "type": "Point", "coordinates": [ -58.45, -34.79 ] } },
    { "type": "Feature", "properties": { "id": "A872811", "Nombre": "Bandera - EEA E Santiago", "Latitud": -28.89, "Longitud": -62.27, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -62.27, -28.89 ] } },
    { "type": "Feature", "properties": { "id": "A872812", "Nombre": "Sachayoj - EEA E Santiago", "Latitud": -26.46, "Longitud": -61.81, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -61.81, -26.46 ] } },
    { "type": "Feature", "properties": { "id": "A872813", "Nombre": "Jumial Grande - EEA E Santiago", "Latitud": -27.43, "Longitud": -63.36, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -63.36, -27.43 ] } },
    { "type": "Feature", "properties": { "id": "A872814", "Nombre": "Alfonso - EEA Pergamino", "Latitud": -33.91, "Longitud": -60.84, "Estado": "F", "IP": "SI" }, "geometry": { "type": "Point", "coordinates": [ -60.84, -33.91 ] } },
    { "type": "Feature", "properties": { "id": "A872815", "Nombre": "Ferre - EEA Pergamino", "Latitud": -34.1, "Longitud": -61.14, "Estado": "E", "IP": "SI" }, "geometry": { "type": "Point", "coordinates": [ -61.14, -34.1 ] } },
    { "type": "Feature", "properties": { "id": "A872816", "Nombre": "Coronel Suarez - EEA Bordenave", "Latitud": -37.29, "Longitud": -62.04, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -62.04, -37.29 ] } },
    { "type": "Feature", "properties": { "id": "A872817", "Nombre": "Bordenave - EEA Bordenave", "Latitud": -37.75, "Longitud": -63.08, "Estado": "ER", "IP": "EN" }, "geometry": { "type": "Point", "coordinates": [ -63.08, -37.75 ] } },
    { "type": "Feature", "properties": { "id": "A872819", "Nombre": "Miramar - EEA Balcarce", "Latitud": -38.15, "Longitud": -57.99, "Estado": "F", "IP": "SI" }, "geometry": { "type": "Point", "coordinates": [ -57.99, -38.15 ] } },
    { "type": "Feature", "properties": { "id": "A872820", "Nombre": "Arrecifes - EEA Pergamino", "Latitud": -34.05, "Longitud": -60.14, "Estado": "E", "IP": "SI" }, "geometry": { "type": "Point", "coordinates": [ -60.14, -34.05 ] } },
    { "type": "Feature", "properties": { "id": "A872821", "Nombre": "Gral San Martin - EEA Anguil", "Latitud": -38.0, "Longitud": -63.52, "Estado": "ER", "IP": "EN" }, "geometry": { "type": "Point", "coordinates": [ -63.52, -38.0 ] } },
    { "type": "Feature", "properties": { "id": "A872822", "Nombre": "Huinca Renanco - EEA Anguil", "Latitud": -34.77, "Longitud": -64.37, "Estado": "SR", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -64.37, -34.77 ] } },
    { "type": "Feature", "properties": { "id": "A872823", "Nombre": "Anguil -EEA Anguil", "Latitud": -36.54, "Longitud": -63.99, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -63.99, -36.54 ] } },
    { "type": "Feature", "properties": { "id": "A872824", "Nombre": "Balcarce - EEA Balcarce", "Latitud": -37.76, "Longitud": -58.3, "Estado": "E", "IP": "SI" }, "geometry": { "type": "Point", "coordinates": [ -58.3, -37.76 ] } },
    { "type": "Feature", "properties": { "id": "A872825", "Nombre": "Tornquist - EEA Bordenave", "Latitud": -38.12, "Longitud": -62.24, "Estado": "ER", "IP": "EN" }, "geometry": { "type": "Point", "coordinates": [ -62.24, -38.12 ] } },
    { "type": "Feature", "properties": { "id": "A872826", "Nombre": "Villa Dolores - EEA Manfredi", "Latitud": -31.94, "Longitud": -65.22, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -65.22, -31.94 ] } },
    { "type": "Feature", "properties": { "id": "A872827", "Nombre": "M Juarez - EEA Marcos Juarez", "Latitud": -32.72, "Longitud": -62.11, "Estado": "E", "IP": "SI" }, "geometry": { "type": "Point", "coordinates": [ -62.11, -32.72 ] } },
    { "type": "Feature", "properties": { "id": "A872829", "Nombre": "Dean Funes - EEA Manfredi", "Latitud": -30.34, "Longitud": -64.32, "Estado": "ER", "IP": "EN" }, "geometry": { "type": "Point", "coordinates": [ -64.32, -30.34 ] } },
    { "type": "Feature", "properties": { "id": "A872830", "Nombre": "Concepción - EEA Conc. Uruguay", "Latitud": -32.49, "Longitud": -58.35, "Estado": "E", "IP": "SI" }, "geometry": { "type": "Point", "coordinates": [ -58.35, -32.49 ] } },
    { "type": "Feature", "properties": { "id": "A872831", "Nombre": "San Salvador - EEA Concordia", "Latitud": -31.65, "Longitud": -58.5, "Estado": "E", "IP": "SI" }, "geometry": { "type": "Point", "coordinates": [ -58.5, -31.65 ] } },
    { "type": "Feature", "properties": { "id": "A872832", "Nombre": "Maciá - EEA Conc. del Uruguay", "Latitud": -32.06, "Longitud": -59.6, "Estado": "E", "IP": "SI" }, "geometry": { "type": "Point", "coordinates": [ -59.6, -32.06 ] } },
    { "type": "Feature", "properties": { "id": "A872833", "Nombre": "Las Armas - EEA Cuenca Salado", "Latitud": -37.09, "Longitud": -57.87, "Estado": "E", "IP": "SI" }, "geometry": { "type": "Point", "coordinates": [ -57.87, -37.09 ] } },
    { "type": "Feature", "properties": { "id": "A872834", "Nombre": "Lima - EEA San Pedro", "Latitud": -34.08, "Longitud": -59.21, "Estado": "ER", "IP": "SI" }, "geometry": { "type": "Point", "coordinates": [ -59.21, -34.08 ] } },
    { "type": "Feature", "properties": { "id": "A872835", "Nombre": "Rio Tala - EEA San Pedro", "Latitud": -33.77, "Longitud": -59.63, "Estado": "E", "IP": "SI" }, "geometry": { "type": "Point", "coordinates": [ -59.63, -33.77 ] } },
    { "type": "Feature", "properties": { "id": "A872837", "Nombre": "Rauch - EEA Cuenca Salado", "Latitud": -36.8, "Longitud": -59.11, "Estado": "E", "IP": "SI" }, "geometry": { "type": "Point", "coordinates": [ -59.11, -36.8 ] } },
    { "type": "Feature", "properties": { "id": "A872838", "Nombre": "Aparicio - EEA Barrow", "Latitud": -38.67, "Longitud": -60.93, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -60.93, -38.67 ] } },
    { "type": "Feature", "properties": { "id": "A872839", "Nombre": "Loma Chata - EEA Barrow", "Latitud": -38.65, "Longitud": -61.45, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -61.45, -38.65 ] } },
    { "type": "Feature", "properties": { "id": "A872840", "Nombre": "Medanos - EEA Hilario Ascasubi", "Latitud": -38.87, "Longitud": -62.66, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -62.66, -38.87 ] } },
    { "type": "Feature", "properties": { "id": "A872841", "Nombre": "Villalonga - EEA H Ascasubi", "Latitud": -39.92, "Longitud": -62.62, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -62.62, -39.92 ] } },
    { "type": "Feature", "properties": { "id": "A872842", "Nombre": "Stroeder -EEA Hilario Ascasubi", "Latitud": -40.18, "Longitud": -62.61, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -62.61, -40.18 ] } },
    { "type": "Feature", "properties": { "id": "A872846", "Nombre": "Gral. Roca - EEA Alto Valle", "Latitud": -39.03, "Longitud": -67.74, "Estado": "E", "IP": "SI" }, "geometry": { "type": "Point", "coordinates": [ -67.74, -39.03 ] } },
    { "type": "Feature", "properties": { "id": "A872847", "Nombre": "Rio Colorado - EEA Alto Valle", "Latitud": -39.02, "Longitud": -64.08, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -64.08, -39.02 ] } },
    { "type": "Feature", "properties": { "id": "A872849", "Nombre": "Bariloche - EEA Bariloche", "Latitud": -41.12, "Longitud": -71.25, "Estado": "E", "IP": "SI" }, "geometry": { "type": "Point", "coordinates": [ -71.25, -41.12 ] } },
    { "type": "Feature", "properties": { "id": "A872850", "Nombre": "P Golondrinas - EEA Bariloche", "Latitud": -41.96, "Longitud": -71.52, "Estado": "MM", "IP": "EN" }, "geometry": { "type": "Point", "coordinates": [ -71.52, -41.96 ] } },
    { "type": "Feature", "properties": { "id": "A872852", "Nombre": "Trevelin - EEA Esquel", "Latitud": -43.12, "Longitud": -71.55, "Estado": "MM", "IP": "SI" }, "geometry": { "type": "Point", "coordinates": [ -71.55, -43.12 ] } },
    { "type": "Feature", "properties": { "id": "A872853", "Nombre": "Gualjaina - EEA Esquel", "Latitud": -42.73, "Longitud": -70.5, "Estado": "MM", "IP": "SI" }, "geometry": { "type": "Point", "coordinates": [ -70.5, -42.73 ] } },
    { "type": "Feature", "properties": { "id": "A872854", "Nombre": "Colan Conhué - EEA Esquel", "Latitud": -43.23, "Longitud": -69.92, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -69.92, -43.23 ] } },
    { "type": "Feature", "properties": { "id": "A872855", "Nombre": "Puerto Piramides - EEA Chubut", "Latitud": -42.54, "Longitud": -64.29, "Estado": "MM", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -64.29, -42.54 ] } },
    { "type": "Feature", "properties": { "id": "A872856", "Nombre": "Paso de Indios - EEA Chubut", "Latitud": -43.86, "Longitud": -69.05, "Estado": "MM", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -69.05, -43.86 ] } },
    { "type": "Feature", "properties": { "id": "A872857", "Nombre": "Sarmiento - EEA Chubut", "Latitud": -45.6, "Longitud": -69.03, "Estado": "MM", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -69.03, -45.6 ] } },
    { "type": "Feature", "properties": { "id": "A872859", "Nombre": "San Sebastian - EEA Santa Cruz", "Latitud": -52.89, "Longitud": -68.45, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -68.45, -52.89 ] } },
    { "type": "Feature", "properties": { "id": "A872860", "Nombre": "Esperanza - EEA Santa Cruz", "Latitud": -51.1, "Longitud": -70.5, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -70.5, -51.1 ] } },
    { "type": "Feature", "properties": { "id": "A872861", "Nombre": "Viamonte - ICyA CIRN", "Latitud": -33.83, "Longitud": -63.02, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -63.02, -33.83 ] } },
    { "type": "Feature", "properties": { "id": "A872862", "Nombre": "Rafaela - EEA Rafaela", "Latitud": -31.2, "Longitud": -61.5, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -61.5, -31.2 ] } },
    { "type": "Feature", "properties": { "id": "A872863", "Nombre": "San Jorge - EEA Rafaela", "Latitud": -31.95, "Longitud": -61.83, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -61.83, -31.95 ] } },
    { "type": "Feature", "properties": { "id": "A872864", "Nombre": "Ceres - EEA Rafaela", "Latitud": -29.87, "Longitud": -61.96, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -61.96, -29.87 ] } },
    { "type": "Feature", "properties": { "id": "A872865", "Nombre": "Reconquista - EEA Reconquista", "Latitud": -29.26, "Longitud": -59.71, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -59.71, -29.26 ] } },
    { "type": "Feature", "properties": { "id": "A872867", "Nombre": "Calchaqui - EEA Reconquista", "Latitud": -29.88, "Longitud": -60.24, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -60.24, -29.88 ] } },
    { "type": "Feature", "properties": { "id": "A872868", "Nombre": "Las Rosas - EEA Oliveros", "Latitud": -32.49, "Longitud": -61.57, "Estado": "E", "IP": "SI" }, "geometry": { "type": "Point", "coordinates": [ -61.57, -32.49 ] } },
    { "type": "Feature", "properties": { "id": "A872870", "Nombre": "Hughes - EEA Oliveros", "Latitud": -33.85, "Longitud": -61.33, "Estado": "E", "IP": "SI" }, "geometry": { "type": "Point", "coordinates": [ -61.33, -33.85 ] } },
    { "type": "Feature", "properties": { "id": "A872871", "Nombre": "Famailla - EEA Famailla", "Latitud": -27.02, "Longitud": -65.38, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -65.38, -27.02 ] } },
    { "type": "Feature", "properties": { "id": "A872872", "Nombre": "25 de Mayo - EEA Pergamino", "Latitud": -35.48, "Longitud": -60.13, "Estado": "E", "IP": "SI" }, "geometry": { "type": "Point", "coordinates": [ -60.13, -35.48 ] } },
    { "type": "Feature", "properties": { "id": "A872873", "Nombre": "Taco Ralo - EEA Famailla", "Latitud": -27.83, "Longitud": -65.05, "Estado": "ER", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -65.05, -27.83 ] } },
    { "type": "Feature", "properties": { "id": "A872874", "Nombre": "La Colmena - EEA Paraná", "Latitud": -31.55, "Longitud": -59.72, "Estado": "E", "IP": "SI" }, "geometry": { "type": "Point", "coordinates": [ -59.72, -31.55 ] } },
    { "type": "Feature", "properties": { "id": "A872876", "Nombre": "Las Tunas - EEA Paraná", "Latitud": -31.87, "Longitud": -59.68, "Estado": "ER", "IP": "SI" }, "geometry": { "type": "Point", "coordinates": [ -59.68, -31.87 ] } },
    { "type": "Feature", "properties": { "id": "A872877", "Nombre": "Trancas - EEA Famaillá", "Latitud": -26.28, "Longitud": -65.27, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -65.27, -26.28 ] } },
    { "type": "Feature", "properties": { "id": "A872880", "Nombre": "Morillo - EEA Salta", "Latitud": -23.46, "Longitud": -62.89, "Estado": "SR", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -62.89, -23.46 ] } },
    { "type": "Feature", "properties": { "id": "A872881", "Nombre": "Santa Victoria Este - EEA Yuto", "Latitud": -22.27, "Longitud": -62.71, "Estado": "SR", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -62.71, -22.27 ] } },
    { "type": "Feature", "properties": { "id": "A872882", "Nombre": "Palma Sola - EEA Yuto", "Latitud": -23.98, "Longitud": -64.3, "Estado": "MM", "IP": "EN" }, "geometry": { "type": "Point", "coordinates": [ -64.3, -23.98 ] } },
    { "type": "Feature", "properties": { "id": "A872883", "Nombre": "El Potrero - EEA Yuto", "Latitud": -23.47, "Longitud": -64.38, "Estado": "ER", "IP": "EN" }, "geometry": { "type": "Point", "coordinates": [ -64.38, -23.47 ] } },
    { "type": "Feature", "properties": { "id": "A872884", "Nombre": "Sumalao - EEA Catamarca", "Latitud": -28.47, "Longitud": -65.73, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -65.73, -28.47 ] } },
    { "type": "Feature", "properties": { "id": "A872885", "Nombre": "Andalgala - EEA Catamarca", "Latitud": -27.61, "Longitud": -66.33, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -66.33, -27.61 ] } },
    { "type": "Feature", "properties": { "id": "A872887", "Nombre": "El Portezuelo - EEA La Rioja", "Latitud": -30.84, "Longitud": -66.7, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -66.7, -30.84 ] } },
    { "type": "Feature", "properties": { "id": "A872888", "Nombre": "P de Los Llanos - EEA La Rioja", "Latitud": -30.15, "Longitud": -66.55, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -66.55, -30.15 ] } },
    { "type": "Feature", "properties": { "id": "A872889", "Nombre": "Catuna - EEA La Rioja", "Latitud": -30.96, "Longitud": -66.17, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -66.17, -30.96 ] } },
    { "type": "Feature", "properties": { "id": "A872890", "Nombre": "San Pedro - EEA San Pedro", "Latitud": -33.74, "Longitud": -59.8, "Estado": "E", "IP": "SI" }, "geometry": { "type": "Point", "coordinates": [ -59.8, -33.74 ] } },
    { "type": "Feature", "properties": { "id": "A872891", "Nombre": "Col Popular - EEA Col Benitez", "Latitud": -27.27, "Longitud": -59.14, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -59.14, -27.27 ] } },
    { "type": "Feature", "properties": { "id": "A872893", "Nombre": "Basail - EEA Col Benitez", "Latitud": -27.9, "Longitud": -59.3, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -59.3, -27.9 ] } },
    { "type": "Feature", "properties": { "id": "A872896", "Nombre": "Hermoso Campo - EEA Las Breñas", "Latitud": -27.6, "Longitud": -61.31, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -61.31, -27.6 ] } },
    { "type": "Feature", "properties": { "id": "A872897", "Nombre": "Gob. Virasoro - EEA Mercedes", "Latitud": -28.27, "Longitud": -55.86, "Estado": "E", "IP": "SI" }, "geometry": { "type": "Point", "coordinates": [ -55.86, -28.27 ] } },
    { "type": "Feature", "properties": { "id": "A872898", "Nombre": "Ing. Jacobacci - EEA Bariloche", "Latitud": -41.33, "Longitud": -69.55, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -69.55, -41.33 ] } },
    { "type": "Feature", "properties": { "id": "A872899", "Nombre": "J J Castelli - EEA Saenz Peña", "Latitud": -25.96, "Longitud": -60.56, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -60.56, -25.96 ] } },
    { "type": "Feature", "properties": { "id": "A872900", "Nombre": "Santa Sylvina - EEA Sáenz Peña", "Latitud": -27.85, "Longitud": -61.13, "Estado": "E", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -61.13, -27.85 ] } },
    { "type": "Feature", "properties": { "id": "A872901", "Nombre": "P. de la Plaza -EEA Sáenz Peña", "Latitud": -26.93, "Longitud": -59.8, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -59.8, -26.93 ] } },
    { "type": "Feature", "properties": { "id": "A872904", "Nombre": "Bme de las Casas -EEA Colorado", "Latitud": -25.45, "Longitud": -59.5, "Estado": "SR", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -59.5, -25.45 ] } },
    { "type": "Feature", "properties": { "id": "A872905", "Nombre": "El Colorado - EEA El Colorado", "Latitud": -26.33, "Longitud": -59.35, "Estado": "SR", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -59.35, -26.33 ] } },
    { "type": "Feature", "properties": { "id": "A872906", "Nombre": "Trenque Lauquen - EEA Villegas", "Latitud": -35.97, "Longitud": -62.77, "Estado": "ER", "IP": "SI" }, "geometry": { "type": "Point", "coordinates": [ -62.77, -35.97 ] } },
    { "type": "Feature", "properties": { "id": "A872907", "Nombre": "Manfredi - EEA Manfredi", "Latitud": -31.86, "Longitud": -63.75, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -63.75, -31.86 ] } },
    { "type": "Feature", "properties": { "id": "A872908", "Nombre": "Cerro Azul - EEA Cerro Azul", "Latitud": -27.66, "Longitud": -55.44, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -55.44, -27.66 ] } },
    { "type": "Feature", "properties": { "id": "A872909", "Nombre": "V Miguel Lanus -EEA Cerro Azul", "Latitud": -27.43, "Longitud": -55.89, "Estado": "SR", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -55.89, -27.43 ] } },
    { "type": "Feature", "properties": { "id": "A872910", "Nombre": "San Vicente - EEA Cerro Azul", "Latitud": -26.92, "Longitud": -54.42, "Estado": "SR", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -54.42, -26.92 ] } },
    { "type": "Feature", "properties": { "id": "A872911", "Nombre": "Montecarlo - EEA Montecarlo", "Latitud": -26.57, "Longitud": -54.73, "Estado": "E", "IP": "SI" }, "geometry": { "type": "Point", "coordinates": [ -54.73, -26.57 ] } },
    { "type": "Feature", "properties": { "id": "A872912", "Nombre": "Andresito - EEA Montecarlo", "Latitud": -25.62, "Longitud": -54.07, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -54.07, -25.62 ] } },
    { "type": "Feature", "properties": { "id": "A872913", "Nombre": "B de Irigoyen - EEA Montecarlo", "Latitud": -26.28, "Longitud": -53.67, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -53.67, -26.28 ] } },
    { "type": "Feature", "properties": { "id": "A872914", "Nombre": "Esquina - EEA Bella Vista", "Latitud": -30.04, "Longitud": -59.53, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -59.53, -30.04 ] } },
    { "type": "Feature", "properties": { "id": "A872915", "Nombre": "Mercedes - EEA Mercedes", "Latitud": -29.2, "Longitud": -58.04, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -58.04, -29.2 ] } },
    { "type": "Feature", "properties": { "id": "A872916", "Nombre": "Sombrerito - EEA Corrientes", "Latitud": -27.65, "Longitud": -58.77, "Estado": "F", "IP": "EN" }, "geometry": { "type": "Point", "coordinates": [ -58.77, -27.65 ] } },
    { "type": "Feature", "properties": { "id": "A872917", "Nombre": "Col. Tabay - EEA Bella Vista", "Latitud": -28.18, "Longitud": -58.16, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -58.16, -28.18 ] } },
    { "type": "Feature", "properties": { "id": "A872918", "Nombre": "Pje. Desmochado - EEA B Vista", "Latitud": -28.8, "Longitud": -59.0, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -59.0, -28.8 ] } },
    { "type": "Feature", "properties": { "id": "A872920", "Nombre": "Curuzu Cuatia - EEA Mercedes", "Latitud": -29.87, "Longitud": -58.11, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -58.11, -29.87 ] } },
    { "type": "Feature", "properties": { "id": "A872921", "Nombre": "Caa Cati - EEA Corrientes", "Latitud": -27.75, "Longitud": -57.62, "Estado": "F", "IP": "EN" }, "geometry": { "type": "Point", "coordinates": [ -57.62, -27.75 ] } },
    { "type": "Feature", "properties": { "id": "A872923", "Nombre": "Abra Pampa - EEA Abra Pampa", "Latitud": -22.8, "Longitud": -65.83, "Estado": "ER", "IP": "SI" }, "geometry": { "type": "Point", "coordinates": [ -65.83, -22.8 ] } },
    { "type": "Feature", "properties": { "id": "A872924", "Nombre": "Sta Victoria O -EEA Abra Pampa", "Latitud": -22.25, "Longitud": -64.96, "Estado": "ER", "IP": "SI" }, "geometry": { "type": "Point", "coordinates": [ -64.96, -22.25 ] } },
    { "type": "Feature", "properties": { "id": "A872925", "Nombre": "Hornillos - IPAF NOA", "Latitud": -23.66, "Longitud": -65.43, "Estado": "E", "IP": "SI" }, "geometry": { "type": "Point", "coordinates": [ -65.43, -23.66 ] } },
    { "type": "Feature", "properties": { "id": "A872926", "Nombre": "Casbas - EEA C. Naredo", "Latitud": -36.86, "Longitud": -62.45, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -62.45, -36.86 ] } },
    { "type": "Feature", "properties": { "id": "A872927", "Nombre": "Barreal - EEA San Juan", "Latitud": -31.62, "Longitud": -69.47, "Estado": "E", "IP": "SI" }, "geometry": { "type": "Point", "coordinates": [ -69.47, -31.62 ] } },
    { "type": "Feature", "properties": { "id": "A872928", "Nombre": "Caucete - EEA San Juan", "Latitud": -31.7, "Longitud": -68.29, "Estado": "SR", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -68.29, -31.7 ] } },
    { "type": "Feature", "properties": { "id": "A872929", "Nombre": "Pocito - EEA San juan", "Latitud": -31.66, "Longitud": -68.59, "Estado": "SR", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -68.59, -31.66 ] } },
    { "type": "Feature", "properties": { "id": "A872930", "Nombre": "Villa Mercedes - EEA San Luis", "Latitud": -33.66, "Longitud": -65.41, "Estado": "SR", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -65.41, -33.66 ] } },
    { "type": "Feature", "properties": { "id": "A872931", "Nombre": "Tilisarao - EEA San Luis", "Latitud": -32.67, "Longitud": -65.23, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -65.23, -32.67 ] } },
    { "type": "Feature", "properties": { "id": "A872933", "Nombre": "Rama Caida - EEA Rama Caida", "Latitud": -34.67, "Longitud": -68.39, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -68.39, -34.67 ] } },
    { "type": "Feature", "properties": { "id": "A872934", "Nombre": "La Guevarina - EEA Rama Caida", "Latitud": -34.79, "Longitud": -68.02, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -68.02, -34.79 ] } },
    { "type": "Feature", "properties": { "id": "A872935", "Nombre": "Malargüe - EEA Rama Caida", "Latitud": -35.38, "Longitud": -69.57, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -69.57, -35.38 ] } },
    { "type": "Feature", "properties": { "id": "A872936", "Nombre": "Rivadavia - EEA Junin Mendoza", "Latitud": -33.26, "Longitud": -68.5, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -68.5, -33.26 ] } },
    { "type": "Feature", "properties": { "id": "A872937", "Nombre": "Santa Rosa - EEA Junin Mendoza", "Latitud": -33.18, "Longitud": -67.87, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -67.87, -33.18 ] } },
    { "type": "Feature", "properties": { "id": "A872938", "Nombre": "Junín - EEA Junin Mendoza", "Latitud": -33.12, "Longitud": -68.48, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -68.48, -33.12 ] } },
    { "type": "Feature", "properties": { "id": "A872939", "Nombre": "La Consulta - EEA Consulta", "Latitud": -33.77, "Longitud": -69.15, "Estado": "F", "IP": "SI" }, "geometry": { "type": "Point", "coordinates": [ -69.15, -33.77 ] } },
    { "type": "Feature", "properties": { "id": "A872940", "Nombre": "Pareditas - EEA Consulta", "Latitud": -33.95, "Longitud": -69.08, "Estado": "F", "IP": "EN" }, "geometry": { "type": "Point", "coordinates": [ -69.08, -33.95 ] } },
    { "type": "Feature", "properties": { "id": "A872941", "Nombre": "Tupungato - EEA La Consulta", "Latitud": -33.03, "Longitud": -69.28, "Estado": "F", "IP": "EN" }, "geometry": { "type": "Point", "coordinates": [ -69.28, -33.03 ] } },
    { "type": "Feature", "properties": { "id": "A872942", "Nombre": "Lincoln - EEA Villegas", "Latitud": -34.84, "Longitud": -61.6, "Estado": "E", "IP": "SI" }, "geometry": { "type": "Point", "coordinates": [ -61.6, -34.84 ] } },
    { "type": "Feature", "properties": { "id": "A872945", "Nombre": "Capilla de Siton - ICyA CIRN", "Latitud": -30.57, "Longitud": -63.65, "Estado": "SR", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -63.65, -30.57 ] } },
    { "type": "Feature", "properties": { "id": "A872946", "Nombre": "Cañada Ombu - EEA Reconquista", "Latitud": -28.36, "Longitud": -60.15, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -60.15, -28.36 ] } },
    { "type": "Feature", "properties": { "id": "A872947", "Nombre": "Plottier - IPAF Patagonia", "Latitud": -38.95, "Longitud": -68.33, "Estado": "MM", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -68.33, -38.95 ] } },
    { "type": "Feature", "properties": { "id": "A872948", "Nombre": "Villa Ramallo - EEA San Pedro", "Latitud": -33.52, "Longitud": -60.11, "Estado": "E", "IP": "SI" }, "geometry": { "type": "Point", "coordinates": [ -60.11, -33.52 ] } },
    { "type": "Feature", "properties": { "id": "A872949", "Nombre": "Guardia Mitre - EEA V Inferior", "Latitud": -40.43, "Longitud": -63.68, "Estado": "MM", "IP": "SI" }, "geometry": { "type": "Point", "coordinates": [ -63.68, -40.43 ] } },
    { "type": "Feature", "properties": { "id": "A872950", "Nombre": "Goya - EEA Bella Vista", "Latitud": -29.18, "Longitud": -59.09, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -59.09, -29.18 ] } },
    { "type": "Feature", "properties": { "id": "A872951", "Nombre": "Bella Vista - EEA Bella Vista", "Latitud": -28.45, "Longitud": -58.99, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -58.99, -28.45 ] } },
    { "type": "Feature", "properties": { "id": "A872952", "Nombre": "Herlitzka - EEA Corrientes", "Latitud": -27.62, "Longitud": -58.37, "Estado": "F", "IP": "EN" }, "geometry": { "type": "Point", "coordinates": [ -58.37, -27.62 ] } },
    { "type": "Feature", "properties": { "id": "A872954", "Nombre": "Monte Quemado - EEA E Santiago", "Latitud": -25.86, "Longitud": -62.71, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -62.71, -25.86 ] } },
    { "type": "Feature", "properties": { "id": "A872955", "Nombre": "Quimilí - EEA E Santiago", "Latitud": -27.54, "Longitud": -62.35, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -62.35, -27.54 ] } },
    { "type": "Feature", "properties": { "id": "A872956", "Nombre": "Los Juríes - EEA E Santiago", "Latitud": -28.61, "Longitud": -62.16, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -62.16, -28.61 ] } },
    { "type": "Feature", "properties": { "id": "A872957", "Nombre": "Pampa Infierno -EA Sáenz Peña", "Latitud": -26.5, "Longitud": -61.2, "Estado": "ER", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -61.2, -26.5 ] } },
    { "type": "Feature", "properties": { "id": "A872958", "Nombre": "Du Graty - EEA Sáenz Peña", "Latitud": -27.7, "Longitud": -60.91, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -60.91, -27.7 ] } },
    { "type": "Feature", "properties": { "id": "A872961", "Nombre": "Malbran - EEA E Sgo del Estero", "Latitud": -29.32, "Longitud": -62.46, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -62.46, -29.32 ] } },
    { "type": "Feature", "properties": { "id": "A872962", "Nombre": "La Cigüeña - EEA Reconquista", "Latitud": -29.25, "Longitud": -61.02, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -61.02, -29.25 ] } },
    { "type": "Feature", "properties": { "id": "A872963", "Nombre": "Villa Ana - EEA Reconquista", "Latitud": -28.44, "Longitud": -59.8, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -59.8, -28.44 ] } },
    { "type": "Feature", "properties": { "id": "A872967", "Nombre": "El Calafate - EEA Rio Gallegos", "Latitud": -50.31, "Longitud": -72.32, "Estado": "F", "IP": "NO" }, "geometry": { "type": "Point", "coordinates": [ -72.32, -50.31 ] } },
    { "type": "Feature", "properties": { "id": "A872970", "Nombre": "IDEVI - EEA Valle Inferior", "Latitud": -40.71, "Longitud": -63.53, "Estado": "MM", "IP": "SI" }, "geometry": { "type": "Point", "coordinates": [ -63.53, -40.71 ] } },
    { "type": "Feature", "properties": { "id": "A872971", "Nombre": "Ituzaingo - EEA Corrientes", "Latitud": -27.54, "Longitud": -56.58, "Estado": "F", "IP": "EN" }, "geometry": { "type": "Point", "coordinates": [ -56.58, -27.54 ] } },
    { "type": "Feature", "properties": { "id": "A872972", "Nombre": "Gral. Conesa - EEA Valle Inf.", "Latitud": -40.21, "Longitud": -64.19, "Estado": "MM", "IP": "SI" }, "geometry": { "type": "Point", "coordinates": [ -64.19, -40.21 ] } }
    ]
    }
    
    
    

