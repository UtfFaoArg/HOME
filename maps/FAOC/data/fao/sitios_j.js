
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
    "name": "sitios_selec",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
  "features": [
{ "type": "Feature", "properties": { "id": 1.0, "x": -65.583045685343805, "y": -29.518899372573902, "provincia": "Catamarca", "ecoregion": "Chaco Seco", "precipitac": 500.0, "depto": "Departamento", "name": "Capayán", "NOMBRE_EC": null, "Localidad": null, "precipita": null, "ppm75": null, "TempMedia": null, "Etopromed": null, "UD_VolDem": null, "UD_VCU": null, "UD_SupCap": null, "UD_VolRes": null, "SASI_VolD": null, "SASI_VCU": null, "SASI_SupC": null, "SASI_VolR": null, "SASI_SupR": null, "SASI_ProR": null, "SASN_VolD": null, "SASN_VCU": null, "SASN_SupC": null, "SASN_VolR": null, "SASN_SupR": null, "SASN_ProR": null, "GSI_VolDe": null, "GSI_VCU": null, "GSI_SupCa": null, "GSI_VolRe": null, "GSI_SupRe": null, "GSI_ProRe": null, "GSN_VolDe": null, "GSN_VCU": null, "GSN_SupCa": null, "GSN_VolRe": null, "GSN_SupRe": null, "GSN_ProRe": null, "ECSI_VolD": null, "ECSI_VCU": null, "ECSI_SupC": null, "ECSI_VolR": null, "ECSI_SupR": null, "ECSI_ProR": null, "ECSN_VolD": null, "ECSN_VCU": null, "ECSN_SupC": null, "ECSN_VolR": null, "ECSN_SupR": null, "ECSN_PorR": null }, "geometry": { "type": "Point", "coordinates": [ -65.583045685343805, -29.518899372573902, 0.0 ] } },
{ "type": "Feature", "properties": { "id": 3.0, "x": -66.018735933383894, "y": -27.5265991841793, "provincia": "Catamarca", "ecoregion": "Selva de las Yungas", "precipitac": 2000.0, "depto": "Departamento", "name": "Andalgalá", "NOMBRE_EC": null, "Localidad": null, "precipita": null, "ppm75": null, "TempMedia": null, "Etopromed": null, "UD_VolDem": null, "UD_VCU": null, "UD_SupCap": null, "UD_VolRes": null, "SASI_VolD": null, "SASI_VCU": null, "SASI_SupC": null, "SASI_VolR": null, "SASI_SupR": null, "SASI_ProR": null, "SASN_VolD": null, "SASN_VCU": null, "SASN_SupC": null, "SASN_VolR": null, "SASN_SupR": null, "SASN_ProR": null, "GSI_VolDe": null, "GSI_VCU": null, "GSI_SupCa": null, "GSI_VolRe": null, "GSI_SupRe": null, "GSI_ProRe": null, "GSN_VolDe": null, "GSN_VCU": null, "GSN_SupCa": null, "GSN_VolRe": null, "GSN_SupRe": null, "GSN_ProRe": null, "ECSI_VolD": null, "ECSI_VCU": null, "ECSI_SupC": null, "ECSI_VolR": null, "ECSI_SupR": null, "ECSI_ProR": null, "ECSN_VolD": null, "ECSN_VCU": null, "ECSN_SupC": null, "ECSN_VolR": null, "ECSN_SupR": null, "ECSN_PorR": null }, "geometry": { "type": "Point", "coordinates": [ -66.018735933383894, -27.5265991841793, 0.0 ] } },
{ "type": "Feature", "properties": { "id": 4.0, "x": -67.024350097188602, "y": -27.678090735187499, "provincia": "Catamarca", "ecoregion": "Monte de Sierras y Bolsones", "precipitac": 400.0, "depto": "Departamento", "name": "Belén", "NOMBRE_EC": null, "Localidad": null, "precipita": null, "ppm75": null, "TempMedia": null, "Etopromed": null, "UD_VolDem": null, "UD_VCU": null, "UD_SupCap": null, "UD_VolRes": null, "SASI_VolD": null, "SASI_VCU": null, "SASI_SupC": null, "SASI_VolR": null, "SASI_SupR": null, "SASI_ProR": null, "SASN_VolD": null, "SASN_VCU": null, "SASN_SupC": null, "SASN_VolR": null, "SASN_SupR": null, "SASN_ProR": null, "GSI_VolDe": null, "GSI_VCU": null, "GSI_SupCa": null, "GSI_VolRe": null, "GSI_SupRe": null, "GSI_ProRe": null, "GSN_VolDe": null, "GSN_VCU": null, "GSN_SupCa": null, "GSN_VolRe": null, "GSN_SupRe": null, "GSN_ProRe": null, "ECSI_VolD": null, "ECSI_VCU": null, "ECSI_SupC": null, "ECSI_VolR": null, "ECSI_SupR": null, "ECSI_ProR": null, "ECSN_VolD": null, "ECSN_VCU": null, "ECSN_SupC": null, "ECSN_VolR": null, "ECSN_SupR": null, "ECSN_PorR": null }, "geometry": { "type": "Point", "coordinates": [ -67.024350097188602, -27.678090735187499, 0.0 ] } },
{ "type": "Feature", "properties": { "id": 27.0, "x": -67.410319470075606, "y": -26.059671609959899, "provincia": "Catamarca", "ecoregion": "Puna", "precipitac": 100.0, "depto": "Departamento", "name": "Antofagasta de la Sierra", "NOMBRE_EC": null, "Localidad": null, "precipita": null, "ppm75": null, "TempMedia": null, "Etopromed": null, "UD_VolDem": null, "UD_VCU": null, "UD_SupCap": null, "UD_VolRes": null, "SASI_VolD": null, "SASI_VCU": null, "SASI_SupC": null, "SASI_VolR": null, "SASI_SupR": null, "SASI_ProR": null, "SASN_VolD": null, "SASN_VCU": null, "SASN_SupC": null, "SASN_VolR": null, "SASN_SupR": null, "SASN_ProR": null, "GSI_VolDe": null, "GSI_VCU": null, "GSI_SupCa": null, "GSI_VolRe": null, "GSI_SupRe": null, "GSI_ProRe": null, "GSN_VolDe": null, "GSN_VCU": null, "GSN_SupCa": null, "GSN_VolRe": null, "GSN_SupRe": null, "GSN_ProRe": null, "ECSI_VolD": null, "ECSI_VCU": null, "ECSI_SupC": null, "ECSI_VolR": null, "ECSI_SupR": null, "ECSI_ProR": null, "ECSN_VolD": null, "ECSN_VCU": null, "ECSN_SupC": null, "ECSN_VolR": null, "ECSN_SupR": null, "ECSN_PorR": null }, "geometry": { "type": "Point", "coordinates": [ -67.410319470075606, -26.059671609959899, 0.0 ] } },
{ "type": "Feature", "properties": { "id": 30.0, "x": -65.363564641808395, "y": -28.148890221305901, "provincia": "Catamarca", "ecoregion": "Chaco Seco", "precipitac": 500.0, "depto": "Departamento", "name": "Santa Rosa", "NOMBRE_EC": null, "Localidad": null, "precipita": null, "ppm75": null, "TempMedia": null, "Etopromed": null, "UD_VolDem": null, "UD_VCU": null, "UD_SupCap": null, "UD_VolRes": null, "SASI_VolD": null, "SASI_VCU": null, "SASI_SupC": null, "SASI_VolR": null, "SASI_SupR": null, "SASI_ProR": null, "SASN_VolD": null, "SASN_VCU": null, "SASN_SupC": null, "SASN_VolR": null, "SASN_SupR": null, "SASN_ProR": null, "GSI_VolDe": null, "GSI_VCU": null, "GSI_SupCa": null, "GSI_VolRe": null, "GSI_SupRe": null, "GSI_ProRe": null, "GSN_VolDe": null, "GSN_VCU": null, "GSN_SupCa": null, "GSN_VolRe": null, "GSN_SupRe": null, "GSN_ProRe": null, "ECSI_VolD": null, "ECSI_VCU": null, "ECSI_SupC": null, "ECSI_VolR": null, "ECSI_SupR": null, "ECSI_ProR": null, "ECSN_VolD": null, "ECSN_VCU": null, "ECSN_SupC": null, "ECSN_VolR": null, "ECSN_SupR": null, "ECSN_PorR": null }, "geometry": { "type": "Point", "coordinates": [ -65.363564641808395, -28.148890221305901, 0.0 ] } },
{ "type": "Feature", "properties": { "id": 37.0, "x": -65.497480545261197, "y": -28.181223460500298, "provincia": "Catamarca", "ecoregion": "Chaco Seco", "precipitac": 500.0, "depto": "Departamento", "name": "Santa Rosa", "NOMBRE_EC": null, "Localidad": null, "precipita": null, "ppm75": null, "TempMedia": null, "Etopromed": null, "UD_VolDem": null, "UD_VCU": null, "UD_SupCap": null, "UD_VolRes": null, "SASI_VolD": null, "SASI_VCU": null, "SASI_SupC": null, "SASI_VolR": null, "SASI_SupR": null, "SASI_ProR": null, "SASN_VolD": null, "SASN_VCU": null, "SASN_SupC": null, "SASN_VolR": null, "SASN_SupR": null, "SASN_ProR": null, "GSI_VolDe": null, "GSI_VCU": null, "GSI_SupCa": null, "GSI_VolRe": null, "GSI_SupRe": null, "GSI_ProRe": null, "GSN_VolDe": null, "GSN_VCU": null, "GSN_SupCa": null, "GSN_VolRe": null, "GSN_SupRe": null, "GSN_ProRe": null, "ECSI_VolD": null, "ECSI_VCU": null, "ECSI_SupC": null, "ECSI_VolR": null, "ECSI_SupR": null, "ECSI_ProR": null, "ECSN_VolD": null, "ECSN_VCU": null, "ECSN_SupC": null, "ECSN_VolR": null, "ECSN_SupR": null, "ECSN_PorR": null }, "geometry": { "type": "Point", "coordinates": [ -65.497480545261197, -28.181223460500298, 0.0 ] } }
]
    }
    
