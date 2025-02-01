
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
        "<b> Provincia: </b>" + feature.properties.provincia + "<br>" +
        "<b> Departamento: </b>" + feature.properties.name + "<br>" +
        "<b> Localidad: </b>" + feature.properties.Localidad + "<br>" +
        "<b> Ecorregión: </b>" + feature.properties.ecoregion + "<br>" +
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


var sitios = {
    "type": "FeatureCollection",
    "name": "sitios_j",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
        { "type": "Feature", "properties": { "id": 13.0, "x": -66.699898892767195, "y": -23.0851878819619, "provincia": "Jujuy", "ecoregion": "Altos Andes", "precipitac": 50.0, "depto": "Departamento", "name": "Susques", "NOMBRE_EC": "Altos andes", "Localidad": "El Toro", "precipita": "250.1", "ppm75": "142.4", "TempMedia": "4.4", "Etopromed": "3.53", "UD_VolDem": "44", "UD_VCU": "122", "UD_SupCap": "360", "UD_VolRes": "25", "SASI_VolD": "78", "SASI_VCU": "131", "SASI_SupC": "750", "SASI_VolR": "50", "SASI_SupR": "33.3", "SASI_ProR": "1.5", "SASN_VolD": "78", "SASN_VCU": "41", "SASN_SupC": "2400", "SASN_VolR": "50", "SASN_SupR": "33.3", "SASN_ProR": "1.5", "GSI_VolDe": "80", "GSI_VCU": "131", "GSI_SupCa": "750", "GSI_VolRe": "55", "GSI_SupRe": "28", "GSI_ProRe": "2", "GSN_VolDe": "80", "GSN_VCU": "41", "GSN_SupCa": "2400", "GSN_VolRe": "55", "GSN_SupRe": "36.7", "GSN_ProRe": "1.5", "ECSI_VolD": null, "ECSI_VCU": null, "ECSI_SupC": null, "ECSI_VolR": null, "ECSI_SupR": null, "ECSI_ProR": null, "ECSN_VolD": null, "ECSN_VCU": null, "ECSN_SupC": null, "ECSN_VolR": null, "ECSN_SupR": null, "ECSN_PorR": null }, "geometry": { "type": "Point", "coordinates": [-66.699898892767195, -23.0851878819619, 0.0] } },
        { "type": "Feature", "properties": { "id": 16.0, "x": -65.132061106993902, "y": -24.3741421797864, "provincia": "Jujuy", "ecoregion": "Selva de las Yungas", "precipitac": 2000.0, "depto": "Departamento", "name": "El Carmen", "NOMBRE_EC": "Selva de las Yungas", "Localidad": "Perico", "precipita": "699.86", "ppm75": "461.1", "TempMedia": "17.2", "Etopromed": "3.86", "UD_VolDem": "57", "UD_VCU": "471", "UD_SupCap": "125", "UD_VolRes": "30", "SASI_VolD": "77", "SASI_VCU": "483", "SASI_SupC": "210", "SASI_VolR": "60", "SASI_SupR": "40", "SASI_ProR": "1.5", "SASN_VolD": "77", "SASN_VCU": "151", "SASN_SupC": "670", "SASN_VolR": "60", "SASN_SupR": "40", "SASN_ProR": "1.5", "GSI_VolDe": "9930", "GSI_VCU": "483", "GSI_SupCa": "24000", "GSI_VolRe": "6700", "GSI_SupRe": "2680", "GSI_ProRe": "2.5", "GSN_VolDe": "9930", "GSN_VCU": "151", "GSN_SupCa": "77000", "GSN_VolRe": "6800", "GSN_SupRe": "2720", "GSN_ProRe": "2.5", "ECSI_VolD": "19020", "ECSI_VCU": "483", "ECSI_SupC": "4.6", "ECSI_VolR": "13000", "ECSI_SupR": "5200", "ECSI_ProR": "2.5", "ECSN_VolD": "19020", "ECSN_VCU": "151", "ECSN_SupC": "14.5", "ECSN_VolR": "12500", "ECSN_SupR": "5000", "ECSN_PorR": "2.5" }, "geometry": { "type": "Point", "coordinates": [-65.132061106993902, -24.3741421797864, 0.0] } },
        { "type": "Feature", "properties": { "id": 18.0, "x": -64.298233363043906, "y": -23.976997682270301, "provincia": "Jujuy", "ecoregion": "Selva de las Yungas", "precipitac": 2000.0, "depto": "Departamento", "name": "Santa Bárbara", "NOMBRE_EC": "Selva de las Yungas", "Localidad": "Palma Sola", "precipita": "855.5542627", "ppm75": "821", "TempMedia": "19.7", "Etopromed": "3.52", "UD_VolDem": "53.1", "UD_VCU": "645", "UD_SupCap": "90", "UD_VolRes": "25", "SASI_VolD": "147", "SASI_VCU": "657", "SASI_SupC": "320", "SASI_VolR": "110", "SASI_SupR": "73.3", "SASI_ProR": "1.5", "SASN_VolD": "148", "SASN_VCU": "370", "SASN_SupC": "500", "SASN_VolR": "115", "SASN_SupR": "57.5", "SASN_ProR": "2", "GSI_VolDe": "637", "GSI_VCU": "657", "GSI_SupCa": "1150", "GSI_VolRe": "330", "GSI_SupRe": "165", "GSI_ProRe": "2", "GSN_VolDe": "637", "GSN_VCU": "370", "GSN_SupCa": "2050", "GSN_VolRe": "340", "GSN_SupRe": "170", "GSN_ProRe": "2", "ECSI_VolD": "15115", "ECSI_VCU": "657", "ECSI_SupC": "2.85", "ECSI_VolR": "12500", "ECSI_SupR": "5000", "ECSI_ProR": "2.5", "ECSN_VolD": "15115", "ECSN_VCU": "370", "ECSN_SupC": "5", "ECSN_VolR": "12500", "ECSN_SupR": "5000", "ECSN_PorR": "2.5" }, "geometry": { "type": "Point", "coordinates": [-64.298233363043906, -23.976997682270301, 0.0] } },
        { "type": "Feature", "properties": { "id": 29.0, "x": -64.852652244119696, "y": -24.2001618574186, "provincia": "Jujuy", "ecoregion": "Chaco Seco", "precipitac": 500.0, "depto": "Departamento", "name": "San Pedro", "NOMBRE_EC": "Chaco Seco", "Localidad": "San Pedro", "precipita": "771.4", "ppm75": "737", "TempMedia": "18.7", "Etopromed": "3.09", "UD_VolDem": "54", "UD_VCU": "578", "UD_SupCap": "100", "UD_VolRes": "25", "SASI_VolD": "136", "SASI_VCU": "590", "SASI_SupC": "260", "SASI_VolR": "55", "SASI_SupR": "36.7", "SASI_ProR": "1.5", "SASN_VolD": "136", "SASN_VCU": "332", "SASN_SupC": "470", "SASN_VolR": "55", "SASN_SupR": "36.7", "SASN_ProR": "1.5", "GSI_VolDe": "53", "GSI_VCU": "590", "GSI_SupCa": "110", "GSI_VolRe": "30", "GSI_SupRe": "20", "GSI_ProRe": "1.5", "GSN_VolDe": "53", "GSN_VCU": "332", "GSN_SupCa": "185", "GSN_VolRe": "30", "GSN_SupRe": "15", "GSN_ProRe": "2", "ECSI_VolD": "13814", "ECSI_VCU": "590", "ECSI_SupC": "2.7", "ECSI_VolR": "5200", "ECSI_SupR": "2600", "ECSI_ProR": "2", "ECSN_VolD": "13814", "ECSN_VCU": "332", "ECSN_SupC": "4.5", "ECSN_VolR": "5200", "ECSN_SupR": "2080", "ECSN_PorR": "2.5" }, "geometry": { "type": "Point", "coordinates": [-64.852652244119696, -24.2001618574186, 0.0] } },
        { "type": "Feature", "properties": { "id": 35.0, "x": -65.463236071587701, "y": -22.132691734302199, "provincia": "Jujuy", "ecoregion": "Puna", "precipitac": 100.0, "depto": "Departamento", "name": "Yavi", "NOMBRE_EC": null, "Localidad": null, "precipita": null, "ppm75": null, "TempMedia": null, "Etopromed": null, "UD_VolDem": null, "UD_VCU": null, "UD_SupCap": null, "UD_VolRes": null, "SASI_VolD": null, "SASI_VCU": null, "SASI_SupC": null, "SASI_VolR": null, "SASI_SupR": null, "SASI_ProR": null, "SASN_VolD": null, "SASN_VCU": null, "SASN_SupC": null, "SASN_VolR": null, "SASN_SupR": null, "SASN_ProR": null, "GSI_VolDe": null, "GSI_VCU": null, "GSI_SupCa": null, "GSI_VolRe": null, "GSI_SupRe": null, "GSI_ProRe": null, "GSN_VolDe": null, "GSN_VCU": null, "GSN_SupCa": null, "GSN_VolRe": null, "GSN_SupRe": null, "GSN_ProRe": null, "ECSI_VolD": null, "ECSI_VCU": null, "ECSI_SupC": null, "ECSI_VolR": null, "ECSI_SupR": null, "ECSI_ProR": null, "ECSN_VolD": null, "ECSN_VCU": null, "ECSN_SupC": null, "ECSN_VolR": null, "ECSN_SupR": null, "ECSN_PorR": null }, "geometry": { "type": "Point", "coordinates": [-65.463236071587701, -22.132691734302199, 0.0] } },
        { "type": "Feature", "properties": { "id": 36.0, "x": -65.4300184157118, "y": -23.654420630914, "provincia": "Jujuy", "ecoregion": "Monte de Sierras y Bolsones", "precipitac": 400.0, "depto": "Departamento", "name": "Tilcara", "NOMBRE_EC": null, "Localidad": null, "precipita": null, "ppm75": null, "TempMedia": null, "Etopromed": null, "UD_VolDem": null, "UD_VCU": null, "UD_SupCap": null, "UD_VolRes": null, "SASI_VolD": null, "SASI_VCU": null, "SASI_SupC": null, "SASI_VolR": null, "SASI_SupR": null, "SASI_ProR": null, "SASN_VolD": null, "SASN_VCU": null, "SASN_SupC": null, "SASN_VolR": null, "SASN_SupR": null, "SASN_ProR": null, "GSI_VolDe": null, "GSI_VCU": null, "GSI_SupCa": null, "GSI_VolRe": null, "GSI_SupRe": null, "GSI_ProRe": null, "GSN_VolDe": null, "GSN_VCU": null, "GSN_SupCa": null, "GSN_VolRe": null, "GSN_SupRe": null, "GSN_ProRe": null, "ECSI_VolD": null, "ECSI_VCU": null, "ECSI_SupC": null, "ECSI_VolR": null, "ECSI_SupR": null, "ECSI_ProR": null, "ECSN_VolD": null, "ECSN_VCU": null, "ECSN_SupC": null, "ECSN_VolR": null, "ECSN_SupR": null, "ECSN_PorR": null }, "geometry": { "type": "Point", "coordinates": [-65.4300184157118, -23.654420630914, 0.0] } }

    ]
}
