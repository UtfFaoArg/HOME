
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


var sitios = 
{
    "type": "FeatureCollection",
    "name": "sitios_seleccionados",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
        { "type": "Feature", "properties": { "id": 33.0, "x": -66.897256738101106, "y": -30.038237634567999, "provincia": "La Rioja", "ecoregion": "Chaco Seco", "precipitac": 500.0, "depto": "Departamento", "name": "Independencia", "NOMBRE_EC": null, "Localidad": null, "precipita": null, "ppm75": null, "TempMedia": null, "Etopromed": null, "UD_VolDem": null, "UD_VCU": null, "UD_SupCap": null, "UD_VolRes": null, "SASI_VolD": null, "SASI_VCU": null, "SASI_SupC": null, "SASI_VolR": null, "SASI_SupR": null, "SASI_ProR": null, "SASN_VolD": null, "SASN_VCU": null, "SASN_SupC": null, "SASN_VolR": null, "SASN_SupR": null, "SASN_ProR": null, "GSI_VolDe": null, "GSI_VCU": null, "GSI_SupCa": null, "GSI_VolRe": null, "GSI_SupRe": null, "GSI_ProRe": null, "GSN_VolDe": null, "GSN_VCU": null, "GSN_SupCa": null, "GSN_VolRe": null, "GSN_SupRe": null, "GSN_ProRe": null, "ECSI_VolD": null, "ECSI_VCU": null, "ECSI_SupC": null, "ECSI_VolR": null, "ECSI_SupR": null, "ECSI_ProR": null, "ECSN_VolD": null, "ECSN_VCU": null, "ECSN_SupC": null, "ECSN_VolR": null, "ECSN_SupR": null, "ECSN_PorR": null }, "geometry": { "type": "Point", "coordinates": [ -66.897256738101106, -30.038237634567999, 0.0 ] } },
        { "type": "Feature", "properties": { "id": 32.0, "x": -67.359134829820505, "y": -30.444810713033, "provincia": "La Rioja", "ecoregion": "Chaco Seco", "precipitac": 500.0, "depto": "Departamento", "name": "Independencia", "NOMBRE_EC": null, "Localidad": null, "precipita": null, "ppm75": null, "TempMedia": null, "Etopromed": null, "UD_VolDem": null, "UD_VCU": null, "UD_SupCap": null, "UD_VolRes": null, "SASI_VolD": null, "SASI_VCU": null, "SASI_SupC": null, "SASI_VolR": null, "SASI_SupR": null, "SASI_ProR": null, "SASN_VolD": null, "SASN_VCU": null, "SASN_SupC": null, "SASN_VolR": null, "SASN_SupR": null, "SASN_ProR": null, "GSI_VolDe": null, "GSI_VCU": null, "GSI_SupCa": null, "GSI_VolRe": null, "GSI_SupRe": null, "GSI_ProRe": null, "GSN_VolDe": null, "GSN_VCU": null, "GSN_SupCa": null, "GSN_VolRe": null, "GSN_SupRe": null, "GSN_ProRe": null, "ECSI_VolD": null, "ECSI_VCU": null, "ECSI_SupC": null, "ECSI_VolR": null, "ECSI_SupR": null, "ECSI_ProR": null, "ECSN_VolD": null, "ECSN_VCU": null, "ECSN_SupC": null, "ECSN_VolR": null, "ECSN_SupR": null, "ECSN_PorR": null }, "geometry": { "type": "Point", "coordinates": [ -67.359134829820505, -30.444810713033, 0.0 ] } },
        { "type": "Feature", "properties": { "id": 31.0, "x": -68.677229724045901, "y": -29.290378789162201, "provincia": "La Rioja", "ecoregion": "Monte de Sierras y Bolsones", "precipitac": 400.0, "depto": "Departamento", "name": "General Felipe Varela", "NOMBRE_EC": null, "Localidad": null, "precipita": null, "ppm75": null, "TempMedia": null, "Etopromed": null, "UD_VolDem": null, "UD_VCU": null, "UD_SupCap": null, "UD_VolRes": null, "SASI_VolD": null, "SASI_VCU": null, "SASI_SupC": null, "SASI_VolR": null, "SASI_SupR": null, "SASI_ProR": null, "SASN_VolD": null, "SASN_VCU": null, "SASN_SupC": null, "SASN_VolR": null, "SASN_SupR": null, "SASN_ProR": null, "GSI_VolDe": null, "GSI_VCU": null, "GSI_SupCa": null, "GSI_VolRe": null, "GSI_SupRe": null, "GSI_ProRe": null, "GSN_VolDe": null, "GSN_VCU": null, "GSN_SupCa": null, "GSN_VolRe": null, "GSN_SupRe": null, "GSN_ProRe": null, "ECSI_VolD": null, "ECSI_VCU": null, "ECSI_SupC": null, "ECSI_VolR": null, "ECSI_SupR": null, "ECSI_ProR": null, "ECSN_VolD": null, "ECSN_VCU": null, "ECSN_SupC": null, "ECSN_VolR": null, "ECSN_SupR": null, "ECSN_PorR": null }, "geometry": { "type": "Point", "coordinates": [ -68.677229724045901, -29.290378789162201, 0.0 ] } },
        { "type": "Feature", "properties": { "id": 34.0, "x": -66.911760964434393, "y": -29.723922912402202, "provincia": "La Rioja", "ecoregion": "Chaco Seco", "precipitac": 500.0, "depto": "Departamento", "name": "Capital", "NOMBRE_EC": null, "Localidad": null, "precipita": null, "ppm75": null, "TempMedia": null, "Etopromed": null, "UD_VolDem": null, "UD_VCU": null, "UD_SupCap": null, "UD_VolRes": null, "SASI_VolD": null, "SASI_VCU": null, "SASI_SupC": null, "SASI_VolR": null, "SASI_SupR": null, "SASI_ProR": null, "SASN_VolD": null, "SASN_VCU": null, "SASN_SupC": null, "SASN_VolR": null, "SASN_SupR": null, "SASN_ProR": null, "GSI_VolDe": null, "GSI_VCU": null, "GSI_SupCa": null, "GSI_VolRe": null, "GSI_SupRe": null, "GSI_ProRe": null, "GSN_VolDe": null, "GSN_VCU": null, "GSN_SupCa": null, "GSN_VolRe": null, "GSN_SupRe": null, "GSN_ProRe": null, "ECSI_VolD": null, "ECSI_VCU": null, "ECSI_SupC": null, "ECSI_VolR": null, "ECSI_SupR": null, "ECSI_ProR": null, "ECSN_VolD": null, "ECSN_VCU": null, "ECSN_SupC": null, "ECSN_VolR": null, "ECSN_SupR": null, "ECSN_PorR": null }, "geometry": { "type": "Point", "coordinates": [ -66.911760964434393, -29.723922912402202, 0.0 ] } }
        ]
    }
    
