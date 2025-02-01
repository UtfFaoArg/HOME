
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
    "name": "pto_seleccionados",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
        { "type": "Feature", "properties": { "id": 9.0, "x": -63.650498813952296, "y": -26.9793291294122, "provincia": "Santiago del Estero", "ecoregion": "Chaco Seco", "precipitac": 500.0, "depto": "Departamento", "name": "Figueroa", "NOMBRE_EC": "Chaco Seco", "Localidad": "Quebrachal", "precipita": "705.8", "ppm75": "647.1", "TempMedia": "27.9", "Etopromed": "4.1", "UD_VolDem": "60", "UD_VCU": "509", "UD_SupCap": "120", "UD_VolRes": "25", "SASI_VolD": "105", "SASI_VCU": "518", "SASI_SupC": "290", "SASI_VolR": "60", "SASI_SupR": "40", "SASI_ProR": "1.5", "SASN_VolD": "105", "SASN_VCU": "291", "SASN_SupC": "520", "SASN_VolR": "60", "SASN_SupR": "40", "SASN_ProR": "1.5", "GSI_VolDe": "1707", "GSI_VCU": "518", "GSI_SupCa": "4400", "GSI_VolRe": "950", "GSI_SupRe": "475", "GSI_ProRe": "2", "GSN_VolDe": "1707", "GSN_VCU": "291", "GSN_SupCa": "7700", "GSN_VolRe": "950", "GSN_SupRe": "475", "GSN_ProRe": "2", "ECSI_VolD": "5033", "ECSI_VCU": "518", "ECSI_SupC": "1.1", "ECSI_VolR": "1100", "ECSI_SupR": "550", "ECSI_ProR": "2", "ECSN_VolD": "5033", "ECSN_VCU": "291", "ECSN_SupC": "1.9", "ECSN_VolR": "1100", "ECSN_SupR": "440", "ECSN_PorR": "2.5" }, "geometry": { "type": "Point", "coordinates": [ -63.650498813952296, -26.9793291294122, 0.0 ] } },
        { "type": "Feature", "properties": { "id": 10.0, "x": -63.809790881860692, "y": -28.489417766093599, "provincia": "Santiago del Estero", "ecoregion": "Chaco Seco", "precipitac": 500.0, "depto": "Departamento", "name": "Atamisqui", "NOMBRE_EC": "Chaco Seco", "Localidad": "Villa Atamisqui", "precipita": "626.3", "ppm75": "546.1", "TempMedia": "27.4", "Etopromed": "4.1", "UD_VolDem": "84", "UD_VCU": "425", "UD_SupCap": "200", "UD_VolRes": "32", "SASI_VolD": "80", "SASI_VCU": "437", "SASI_SupC": "250", "SASI_VolR": "38", "SASI_SupR": "25.3", "SASI_ProR": "1.5", "SASN_VolD": "80", "SASN_VCU": "246", "SASN_SupC": "440", "SASN_VolR": "37", "SASN_SupR": "24.7", "SASN_ProR": "1.5", "GSI_VolDe": "224", "GSI_VCU": "437", "GSI_SupCa": "650", "GSI_VolRe": "110", "GSI_SupRe": "55", "GSI_ProRe": "2", "GSN_VolDe": "224", "GSN_VCU": "246", "GSN_SupCa": "1150", "GSN_VolRe": "110", "GSN_SupRe": "55", "GSN_ProRe": "2", "ECSI_VolD": "9117", "ECSI_VCU": "437", "ECSI_SupC": "2.34", "ECSI_VolR": "1950", "ECSI_SupR": "975", "ECSI_ProR": "2", "ECSN_VolD": "9117", "ECSN_VCU": "246", "ECSN_SupC": "4.05", "ECSN_VolR": "1800", "ECSN_SupR": "720", "ECSN_PorR": "2.5" }, "geometry": { "type": "Point", "coordinates": [ -63.8097908818607, -28.489417766093599, 0.0 ] } },
        { "type": "Feature", "properties": { "id": 11.0, "x": -62.184589584192899, "y": -27.9149549179857, "provincia": "Santiago del Estero", "ecoregion": "Chaco Humedo", "precipitac": 1000.0, "depto": "Departamento", "name": "Juan Felipe Ibarra", "NOMBRE_EC": "Chaco Húmedo", "Localidad": "El Colorado", "precipita": "769.1", "ppm75": "712.1", "TempMedia": "22.6", "Etopromed": "3.69", "UD_VolDem": "60", "UD_VCU": "558", "UD_SupCap": "110", "UD_VolRes": "20", "SASI_VolD": "83", "SASI_VCU": "570", "SASI_SupC": "170", "SASI_VolR": "30", "SASI_SupR": "15", "SASI_ProR": "2", "SASN_VolD": "83", "SASN_VCU": "320", "SASN_SupC": "305", "SASN_VolR": "30", "SASN_SupR": "15", "SASN_ProR": "2", "GSI_VolDe": "1707", "GSI_VCU": "570", "GSI_SupCa": "3500", "GSI_VolRe": "650", "GSI_SupRe": "325", "GSI_ProRe": "2", "GSN_VolDe": "1707", "GSN_VCU": "320", "GSN_SupCa": "6200", "GSN_VolRe": "650", "GSN_SupRe": "325", "GSN_ProRe": "2", "ECSI_VolD": "3768", "ECSI_VCU": "570", "ECSI_SupC": "0.74", "ECSI_VolR": "1000", "ECSI_SupR": "500", "ECSI_ProR": "2", "ECSN_VolD": "3768", "ECSN_VCU": "320", "ECSN_SupC": "1.3", "ECSN_VolR": "1000", "ECSN_SupR": "400", "ECSN_PorR": "2.5" }, "geometry": { "type": "Point", "coordinates": [ -62.184589584192899, -27.9149549179857, 0.0 ] } },
        { "type": "Feature", "properties": { "id": 12.0, "x": -63.891799380125804, "y": -25.867428735810002, "provincia": "Santiago del Estero", "ecoregion": "Chaco Seco", "precipitac": 500.0, "depto": "Departamento", "name": "Pellegrini", "NOMBRE_EC": "Chaco Seco", "Localidad": "Belgrano", "precipita": "622", "ppm75": "530.1", "TempMedia": "23.2", "Etopromed": "4.05", "UD_VolDem": "50", "UD_VCU": "412", "UD_SupCap": "125", "UD_VolRes": "23", "SASI_VolD": "107", "SASI_VCU": "424", "SASI_SupC": "320", "SASI_VolR": "60", "SASI_SupR": "30", "SASI_ProR": "2", "SASN_VolD": "107", "SASN_VCU": "239", "SASN_SupC": "570", "SASN_VolR": "60", "SASN_SupR": "30", "SASN_ProR": "2", "GSI_VolDe": "1244", "GSI_VCU": "424", "GSI_SupCa": "3700", "GSI_VolRe": "660", "GSI_SupRe": "330", "GSI_ProRe": "2", "GSN_VolDe": "1244", "GSN_VCU": "239", "GSN_SupCa": "6500", "GSN_VolRe": "6550", "GSN_SupRe": "325", "GSN_ProRe": "2", "ECSI_VolD": "4617", "ECSI_VCU": "424", "ECSI_SupC": "1.22", "ECSI_VolR": "1450", "ECSI_SupR": "580", "ECSI_ProR": "2.5", "ECSN_VolD": "4617", "ECSN_VCU": "239", "ECSN_SupC": "2.16", "ECSN_VolR": "1450", "ECSN_SupR": "580", "ECSN_PorR": "2.5" }, "geometry": { "type": "Point", "coordinates": [ -63.891799380125804, -25.867428735810002, 0.0 ] } }
         ]
    }
    
