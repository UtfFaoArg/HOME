
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
        "<b> Número de identificación: </b>" + feature.properties.id + "<br>" +
        "<b> Provincia: </b>" + feature.properties.Provincia + "<br>" +
        "<b> Departamento: </b>" + feature.properties.name + "<br>" +
        "<b> Localidad: </b>" + feature.properties.loc + "<br>" +
        "<b> Ecorregión: </b>" + feature.properties.NOMBRE_ECO + "<br>" +
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
    "name": "larioja_modeloscalculados",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "id": 34, "data": "Puesto El Tala - Paraje Angel Diaz", "Provincia": "La Rioja", "NOMBRE_ECO": "Chaco Seco", "name": "Capital", "loc": "Angel Díaz", "precipita": 470.7, "ppm75": 388.7, "TempMedia": 18.7, "Etopromedio": 4.15, "UD_VolDem": 49.0, "UD_VCU": 299, "UD_SupCap": 165, "UD_VolRes": 15.5, "SASI_VolDe": 91.0, "SASI_VCU": 311, "SASI_SupCa": 345, "SASI_VolRe": 33, "SASI_SupRe": 22.0, "SASI_ProRe": 1.5, "SASN_VolDe": 91.0, "SASN_VCU": 78, "SASN_SupCa": 1330, "SASN_VolRe": 32, "SASN_SupRe": 16.0, "SASN_ProRe": 2.0, "GSI_VolDem": 263.0, "GSI_VCU": "311", "GSI_SupCap2": "950", "GSI_VolRes": "90", "GSI_SupRes": "45", "GSI_ProRes": "2", "GSN_VolDem": 263.0, "GSN_VCU": "78", "GSN_SupCap": "3770", "GSN_VolRes": "78", "GSN_SupRes": "43", "GSN_ProRes": "2", "ECSI_VolDe": "0", "ECSI_VCU": "N/A", "ECSI_SupCa": "N/A", "ECSI_VolRe": "N/A", "ECSI_SupRe": "N/A", "ECSI_ProRes": "N/A", "ECSN_VolDe": "0", "ECSN_VCU": "N/A", "ECSN_SupCa": "N/A", "ECSN_VolRe": "N/A", "ECSN_SupRe": "N/A", "ECSN_PorRes": "N/A" }, "geometry": { "type": "Point", "coordinates": [ -66.74701970645603, -29.292139639095431 ] } },
    { "type": "Feature", "properties": { "id": 33, "data": "Patquia", "Provincia": "La Rioja", "NOMBRE_ECO": "Chaco Seco", "name": "Independencia", "loc": "Patquía (B° Balde del Milagro)", "precipita": 400.5, "ppm75": 308.1, "TempMedia": 19.7, "Etopromedio": 4.12, "UD_VolDem": 45.0, "UD_VCU": 234, "UD_SupCap": 195, "UD_VolRes": 16.0, "SASI_VolDe": 92.0, "SASI_VCU": 246, "SASI_SupCa": 445, "SASI_VolRe": 33, "SASI_SupRe": 22.0, "SASI_ProRe": 1.5, "SASN_VolDe": 92.0, "SASN_VCU": 52, "SASN_SupCa": 2000, "SASN_VolRe": 33, "SASN_SupRe": 16.5, "SASN_ProRe": 2.0, "GSI_VolDem": 526.0, "GSI_VCU": "246", "GSI_SupCap2": "2470", "GSI_VolRes": "200", "GSI_SupRes": "100", "GSI_ProRes": "2", "GSN_VolDem": 526.0, "GSN_VCU": "52", "GSN_SupCap": "1.15", "GSN_VolRes": "200", "GSN_SupRes": "100", "GSN_ProRes": "2", "ECSI_VolDe": "0", "ECSI_VCU": "N/A", "ECSI_SupCa": "N/A", "ECSI_VolRe": "N/A", "ECSI_SupRe": "N/A", "ECSI_ProRes": "N/A", "ECSN_VolDe": "0", "ECSN_VCU": "N/A", "ECSN_SupCa": "N/A", "ECSN_VolRe": "N/A", "ECSN_SupRe": "N/A", "ECSN_PorRes": "N/A" }, "geometry": { "type": "Point", "coordinates": [ -66.897256738101035, -30.038237634567697 ] } },
    { "type": "Feature", "properties": { "id": 32, "data": "Aguango", "Provincia": "La Rioja", "NOMBRE_ECO": "Chaco Seco", "name": "Independencia", "loc": "Aguango", "precipita": 258.1, "ppm75": 230.6, "TempMedia": 21.3, "Etopromedio": 3.44, "UD_VolDem": 45.3, "UD_VCU": 172, "UD_SupCap": 263, "UD_VolRes": 22.0, "SASI_VolDe": 81.3, "SASI_VCU": 184, "SASI_SupCa": 530, "SASI_VolRe": 40, "SASI_SupRe": 26.7, "SASI_ProRe": 1.5, "SASN_VolDe": 81.3, "SASN_VCU": 46, "SASN_SupCa": 2050, "SASN_VolRe": 40, "SASN_SupRe": 20.0, "SASN_ProRe": 2.0, "GSI_VolDem": 1153.4, "GSI_VCU": "184", "GSI_SupCap2": "7500", "GSI_VolRes": "580", "GSI_SupRes": "290", "GSI_ProRes": "2", "GSN_VolDem": 1153.4, "GSN_VCU": "46", "GSN_SupCap": "2.91", "GSN_VolRes": "600", "GSN_SupRes": "300", "GSN_ProRes": "2", "ECSI_VolDe": "0", "ECSI_VCU": "N/A", "ECSI_SupCa": "N/A", "ECSI_VolRe": "N/A", "ECSI_SupRe": "N/A", "ECSI_ProRes": "N/A", "ECSN_VolDe": "0", "ECSN_VCU": "N/A", "ECSN_SupCa": "N/A", "ECSN_VolRe": "N/A", "ECSN_SupRe": "N/A", "ECSN_PorRes": "N/A" }, "geometry": { "type": "Point", "coordinates": [ -67.359134829820434, -30.444810713032691 ] } },
    { "type": "Feature", "properties": { "id": 31, "data": "Comunidad Guandacol", "Provincia": "La Rioja", "NOMBRE_ECO": "Montes de Sierras y Bolsones", "name": "General Felipe Varela", "loc": "El Zapallar", "precipita": 127.4, "ppm75": 114.2, "TempMedia": 14.3, "Etopromedio": 3.46, "UD_VolDem": 45.4, "UD_VCU": 80, "UD_SupCap": 570, "UD_VolRes": 27.0, "SASI_VolDe": 85.3, "SASI_VCU": 91, "SASI_SupCa": 1150, "SASI_VolRe": 52, "SASI_SupRe": 34.7, "SASI_ProRe": 1.5, "SASN_VolDe": 85.3, "SASN_VCU": 23, "SASN_SupCa": 4400, "SASN_VolRe": 50, "SASN_SupRe": 25.0, "SASN_ProRe": 2.0, "GSI_VolDem": 0.0, "GSI_VCU": "N/A", "GSI_SupCap2": "N/A", "GSI_VolRes": "N/A", "GSI_SupRes": "N/A", "GSI_ProRes": "N/A", "GSN_VolDem": 0.0, "GSN_VCU": "N/A", "GSN_SupCap": "N/A", "GSN_VolRes": "N/A", "GSN_SupRes": "N/A", "GSN_ProRes": "N/A", "ECSI_VolDe": "10666.2", "ECSI_VCU": "91", "ECSI_SupCa": "12.7", "ECSI_VolRe": "4300", "ECSI_SupRe": "1720", "ECSI_ProRes": "2.5", "ECSN_VolDe": "10666.2", "ECSN_VCU": "23", "ECSN_SupCa": "51", "ECSN_VolRe": "4300", "ECSN_SupRe": "1720", "ECSN_PorRes": "2.5" }, "geometry": { "type": "Point", "coordinates": [ -68.552453567160796, -29.531081723071427 ] } }
    ]
    }
    
