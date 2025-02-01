
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
    "name": "sitios",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
        { "type": "Feature", "properties": { "id": 5.0, "x": -65.713518710385202, "y": -26.9318344081207, "provincia": "Tucumán", "ecoregion": "Selva de las Yungas", "precipitac": 2000.0, "depto": "Departamento", "name": "Tafí del Valle", "-NOMBRE_ECO": null, "-Localidad cercana": null, "-precipitac": null, "-ppm75": null, "-TempMedia": null, "-Etopromedio": null, "-UD_VolDem": null, "-UD_VCU": null, "-UD_SupCap": null, "-UD_VolRes": null, "-SASI_VolDe": null, "-SASI_VCU": null, "-SASI_SupCa": null, "-SASI_VolRe": null, "-SASI_SupRe": null, "-SASI_ProRe": null, "-SASN_VolDe": null, "-SASN_VCU": null, "-SASN_SupCa": null, "-SASN_VolRe": null, "-SASN_SupRe": null, "-SASN_ProRe": null, "-GSI_VolDem": null, "-GSI_VCU": null, "-GSI_SupCap": null, "-GSI_VolRes": null, "-GSI_SupRes": null, "-GSI_ProRes": null, "-GSN_VolDem": null, "-GSN_VCU": null, "-GSN_SupCap": null, "-GSN_VolRes": null, "-GSN_SupRes": null, "-GSN_ProRes": null, "-ECSI_VolDe": null, "-ECSI_VCU": null, "-ECSI_SupCa": null, "-ECSI_VolRe": null, "-ECSI_SupRe": null, "-ECSI_ProRes": null, "-ECSN_VolDe": null, "-ECSN_VCU": null, "-ECSN_SupCa": null, "-ECSN_VolRe": null, "-ECSN_SupRe": null, "-ECSN_PorRes": null }, "geometry": { "type": "Point", "coordinates": [ -65.713518710385202, -26.9318344081207, 0.0 ] } },
        { "type": "Feature", "properties": { "id": 6.0, "x": -65.644186246195304, "y": -27.746115721011599, "provincia": "Tucumán", "ecoregion": "Chaco Seco", "precipitac": 500.0, "depto": "Departamento", "name": "La Cocha", "-NOMBRE_ECO": null, "-Localidad cercana": null, "-precipitac": null, "-ppm75": null, "-TempMedia": null, "-Etopromedio": null, "-UD_VolDem": null, "-UD_VCU": null, "-UD_SupCap": null, "-UD_VolRes": null, "-SASI_VolDe": null, "-SASI_VCU": null, "-SASI_SupCa": null, "-SASI_VolRe": null, "-SASI_SupRe": null, "-SASI_ProRe": null, "-SASN_VolDe": null, "-SASN_VCU": null, "-SASN_SupCa": null, "-SASN_VolRe": null, "-SASN_SupRe": null, "-SASN_ProRe": null, "-GSI_VolDem": null, "-GSI_VCU": null, "-GSI_SupCap": null, "-GSI_VolRes": null, "-GSI_SupRes": null, "-GSI_ProRes": null, "-GSN_VolDem": null, "-GSN_VCU": null, "-GSN_SupCap": null, "-GSN_VolRes": null, "-GSN_SupRes": null, "-GSN_ProRes": null, "-ECSI_VolDe": null, "-ECSI_VCU": null, "-ECSI_SupCa": null, "-ECSI_VolRe": null, "-ECSI_SupRe": null, "-ECSI_ProRes": null, "-ECSN_VolDe": null, "-ECSN_VCU": null, "-ECSN_SupCa": null, "-ECSN_VolRe": null, "-ECSN_SupRe": null, "-ECSN_PorRes": null }, "geometry": { "type": "Point", "coordinates": [ -65.644186246195304, -27.746115721011599, 0.0 ] } },
        { "type": "Feature", "properties": { "id": 7.0, "x": -65.441878054758007, "y": -26.387208651584899, "provincia": "Tucumán", "ecoregion": "Chaco Seco", "precipitac": 500.0, "depto": "Departamento", "name": "Trancas", "-NOMBRE_ECO": null, "-Localidad cercana": null, "-precipitac": null, "-ppm75": null, "-TempMedia": null, "-Etopromedio": null, "-UD_VolDem": null, "-UD_VCU": null, "-UD_SupCap": null, "-UD_VolRes": null, "-SASI_VolDe": null, "-SASI_VCU": null, "-SASI_SupCa": null, "-SASI_VolRe": null, "-SASI_SupRe": null, "-SASI_ProRe": null, "-SASN_VolDe": null, "-SASN_VCU": null, "-SASN_SupCa": null, "-SASN_VolRe": null, "-SASN_SupRe": null, "-SASN_ProRe": null, "-GSI_VolDem": null, "-GSI_VCU": null, "-GSI_SupCap": null, "-GSI_VolRes": null, "-GSI_SupRes": null, "-GSI_ProRes": null, "-GSN_VolDem": null, "-GSN_VCU": null, "-GSN_SupCap": null, "-GSN_VolRes": null, "-GSN_SupRes": null, "-GSN_ProRes": null, "-ECSI_VolDe": null, "-ECSI_VCU": null, "-ECSI_SupCa": null, "-ECSI_VolRe": null, "-ECSI_SupRe": null, "-ECSI_ProRes": null, "-ECSN_VolDe": null, "-ECSN_VCU": null, "-ECSN_SupCa": null, "-ECSN_VolRe": null, "-ECSN_SupRe": null, "-ECSN_PorRes": null }, "geometry": { "type": "Point", "coordinates": [ -65.441878054758007, -26.387208651584899, 0.0 ] } },
        { "type": "Feature", "properties": { "id": 8.0, "x": -64.895653876155293, "y": -26.6481419870099, "provincia": "Tucumán", "ecoregion": "Selva de las Yungas", "precipitac": 2000.0, "depto": "Departamento", "name": "Burruyacú", "-NOMBRE_ECO": null, "-Localidad cercana": null, "-precipitac": null, "-ppm75": null, "-TempMedia": null, "-Etopromedio": null, "-UD_VolDem": null, "-UD_VCU": null, "-UD_SupCap": null, "-UD_VolRes": null, "-SASI_VolDe": null, "-SASI_VCU": null, "-SASI_SupCa": null, "-SASI_VolRe": null, "-SASI_SupRe": null, "-SASI_ProRe": null, "-SASN_VolDe": null, "-SASN_VCU": null, "-SASN_SupCa": null, "-SASN_VolRe": null, "-SASN_SupRe": null, "-SASN_ProRe": null, "-GSI_VolDem": null, "-GSI_VCU": null, "-GSI_SupCap": null, "-GSI_VolRes": null, "-GSI_SupRes": null, "-GSI_ProRes": null, "-GSN_VolDem": null, "-GSN_VCU": null, "-GSN_SupCap": null, "-GSN_VolRes": null, "-GSN_SupRes": null, "-GSN_ProRes": null, "-ECSI_VolDe": null, "-ECSI_VCU": null, "-ECSI_SupCa": null, "-ECSI_VolRe": null, "-ECSI_SupRe": null, "-ECSI_ProRes": null, "-ECSN_VolDe": null, "-ECSN_VCU": null, "-ECSN_SupCa": null, "-ECSN_VolRe": null, "-ECSN_SupRe": null, "-ECSN_PorRes": null }, "geometry": { "type": "Point", "coordinates": [ -64.895653876155293, -26.6481419870099, 0.0 ] } },
        { "type": "Feature", "properties": { "id": 28.0, "x": -65.974881618550896, "y": -26.447910215578698, "provincia": "Tucumán", "ecoregion": "Monte de Sierras y Bolsones", "precipitac": 400.0, "depto": "Departamento", "name": "Tafí del Valle", "-NOMBRE_ECO": null, "-Localidad cercana": null, "-precipitac": null, "-ppm75": null, "-TempMedia": null, "-Etopromedio": null, "-UD_VolDem": null, "-UD_VCU": null, "-UD_SupCap": null, "-UD_VolRes": null, "-SASI_VolDe": null, "-SASI_VCU": null, "-SASI_SupCa": null, "-SASI_VolRe": null, "-SASI_SupRe": null, "-SASI_ProRe": null, "-SASN_VolDe": null, "-SASN_VCU": null, "-SASN_SupCa": null, "-SASN_VolRe": null, "-SASN_SupRe": null, "-SASN_ProRe": null, "-GSI_VolDem": null, "-GSI_VCU": null, "-GSI_SupCap": null, "-GSI_VolRes": null, "-GSI_SupRes": null, "-GSI_ProRes": null, "-GSN_VolDem": null, "-GSN_VCU": null, "-GSN_SupCap": null, "-GSN_VolRes": null, "-GSN_SupRes": null, "-GSN_ProRes": null, "-ECSI_VolDe": null, "-ECSI_VCU": null, "-ECSI_SupCa": null, "-ECSI_VolRe": null, "-ECSI_SupRe": null, "-ECSI_ProRes": null, "-ECSN_VolDe": null, "-ECSN_VCU": null, "-ECSN_SupCa": null, "-ECSN_VolRe": null, "-ECSN_SupRe": null, "-ECSN_PorRes": null }, "geometry": { "type": "Point", "coordinates": [ -65.974881618550896, -26.447910215578698, 0.0 ] } }
         ]
    }
    
    
