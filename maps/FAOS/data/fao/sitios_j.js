
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
    "name": "pto_priorizados",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
        {
            "type": "Feature",
            "properties": {
                "id": 19.0,
                "x": -62.712407534539501,
                "y": -22.279349394774901,
                "provincia": "Salta",
                "ecoregion": "Chaco Seco",
                "precipitac": 500.0,
                "depto": "Departamento",
                "name": "Rivadavia",
                "NOMBRE_EC": "Chaco Seco",
                "Localidad": "Santa Victoria Este",
                "precipita": "648.2",
                "ppm75": "617.5",
                "TempMedia": "23.8",
                "Etopromed": "4.12",
                "UD_VolDem": "59",
                "UD_VCU": "482",
                "UD_SupCap": "125",
                "UD_VolRes": "25",
                "SASI_VolD": "107",
                "SASI_VCU": "494",
                "SASI_SupC": "280",
                "SASI_VolR": "60",
                "SASI_SupR": "30",
                "SASI_ProR": "2",
                "SASN_VolD": "107",
                "SASN_VCU": "278",
                "SASN_SupC": "490",
                "SASN_VolR": "60",
                "SASN_SupR": "30",
                "SASN_ProR": "2",
                "GSI_VolDe": "518",
                "GSI_VCU": "494",
                "GSI_SupCa": "1300",
                "GSI_VolRe": "260",
                "GSI_SupRe": "130",
                "GSI_ProRe": "2",
                "GSN_VolDe": "518",
                "GSN_VCU": "278",
                "GSN_SupCa": "2350",
                "GSN_VolRe": "270",
                "GSN_SupRe": "135",
                "GSN_ProRe": "2",
                "ECSI_VolD": "21145",
                "ECSI_VCU": "494",
                "ECSI_SupC": "5.3",
                "ECSI_VolR": "12500",
                "ECSI_SupR": "5000",
                "ECSI_ProR": "2.5",
                "ECSN_VolD": "21145",
                "ECSN_VCU": "278",
                "ECSN_SupC": "9.3",
                "ECSN_VolR": "13000",
                "ECSN_SupR": "5200",
                "ECSN_PorR": "2.5"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -62.712407534539501,
                    -22.279349394774901,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": 20.0,
                "x": -63.789162297789197,
                "y": -22.495989459224901,
                "provincia": "Salta",
                "ecoregion": "Selva de las Yungas",
                "precipitac": 2000.0,
                "depto": "Departamento",
                "name": "General José de San Martín",
                "NOMBRE_EC": "Selva de las Yungas",
                "Localidad": "Tartagal",
                "precipita": "993.9",
                "ppm75": "974.6",
                "TempMedia": "21.3",
                "Etopromed": "3.75",
                "UD_VolDem": "56",
                "UD_VCU": "768",
                "UD_SupCap": "75",
                "UD_VolRes": "25",
                "SASI_VolD": "84",
                "SASI_VCU": "780",
                "SASI_SupC": "150",
                "SASI_VolR": "65",
                "SASI_SupR": "43.3",
                "SASI_ProR": "1.5",
                "SASN_VolD": "84",
                "SASN_VCU": "439",
                "SASN_SupC": "250",
                "SASN_VolR": "60",
                "SASN_SupR": "30",
                "SASN_ProR": "2",
                "GSI_VolDe": "474",
                "GSI_VCU": "780",
                "GSI_SupCa": "800",
                "GSI_VolRe": "400",
                "GSI_SupRe": "200",
                "GSI_ProRe": "2",
                "GSN_VolDe": "474",
                "GSN_VCU": "439",
                "GSN_SupCa": "1450",
                "GSN_VolRe": "400",
                "GSN_SupRe": "200",
                "GSN_ProRe": "2",
                "ECSI_VolD": "7151",
                "ECSI_VCU": "780",
                "ECSI_SupC": "1.05",
                "ECSI_VolR": "3780",
                "ECSI_SupR": "1512",
                "ECSI_ProR": "2.5",
                "ECSN_VolD": "7151",
                "ECSN_VCU": "439",
                "ECSN_SupC": "1.9",
                "ECSN_VolR": "3850",
                "ECSN_SupR": "1540",
                "ECSN_PorR": "2.5"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -63.789162297789197,
                    -22.495989459224901,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": 21.0,
                "x": -63.754264206012003,
                "y": -22.2425872745006,
                "provincia": "Salta",
                "ecoregion": "Selva de las Yungas",
                "precipitac": 2000.0,
                "depto": "Departamento",
                "name": "General José de San Martín",
                "NOMBRE_EC": "Selva de las Yungas",
                "Localidad": "Aguaray",
                "precipita": "1042.6",
                "ppm75": "919.8",
                "TempMedia": "21",
                "Etopromed": "3.81",
                "UD_VolDem": "56",
                "UD_VCU": "724",
                "UD_SupCap": "80",
                "UD_VolRes": "27",
                "SASI_VolD": "79",
                "SASI_VCU": "736",
                "SASI_SupC": "150",
                "SASI_VolR": "65",
                "SASI_SupR": "43.3",
                "SASI_ProR": "1.5",
                "SASN_VolD": "79",
                "SASN_VCU": "414",
                "SASN_SupC": "250",
                "SASN_VolR": "65",
                "SASN_SupR": "32.5",
                "SASN_ProR": "2",
                "GSI_VolDe": "410",
                "GSI_VCU": "736",
                "GSI_SupCa": "730",
                "GSI_VolRe": "370",
                "GSI_SupRe": "185",
                "GSI_ProRe": "2",
                "GSN_VolDe": "410",
                "GSN_VCU": "414",
                "GSN_SupCa": "1300",
                "GSN_VolRe": "375",
                "GSN_SupRe": "187.5",
                "GSN_ProRe": "2",
                "ECSI_VolD": "6275",
                "ECSI_VCU": "736",
                "ECSI_SupC": "1",
                "ECSI_VolR": "3900",
                "ECSI_SupR": "1560",
                "ECSI_ProR": "2.5",
                "ECSN_VolD": "6275",
                "ECSN_VCU": "414",
                "ECSN_SupC": "1.8",
                "ECSN_VolR": "4000",
                "ECSN_SupR": "1600",
                "ECSN_PorR": "2.5"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -63.754264206012003,
                    -22.2425872745006,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": 22.0,
                "x": -65.014757401158803,
                "y": -22.2825448839363,
                "provincia": "Salta",
                "ecoregion": "Puna",
                "precipitac": 100.0,
                "depto": "Departamento",
                "name": "Santa Victoria",
                "NOMBRE_EC": "Puna",
                "Localidad": "Santa Victoria Oeste",
                "precipita": "346.9",
                "ppm75": "294.4",
                "TempMedia": "10.1",
                "Etopromed": "2.63",
                "UD_VolDem": "37",
                "UD_VCU": "227",
                "UD_SupCap": "165",
                "UD_VolRes": "21",
                "SASI_VolD": "89",
                "SASI_VCU": "236",
                "SASI_SupC": "450",
                "SASI_VolR": "60",
                "SASI_SupR": "40",
                "SASI_ProR": "1.5",
                "SASN_VolD": "89",
                "SASN_VCU": "162",
                "SASN_SupC": "630",
                "SASN_VolR": "56",
                "SASN_SupR": "28",
                "SASN_ProR": "2",
                "GSI_VolDe": "633",
                "GSI_VCU": "236",
                "GSI_SupCa": "3000",
                "GSI_VolRe": "375",
                "GSI_SupRe": "188",
                "GSI_ProRe": "2",
                "GSN_VolDe": "633",
                "GSN_VCU": "162",
                "GSN_SupCa": "4400",
                "GSN_VolRe": "380",
                "GSN_SupRe": "190",
                "GSN_ProRe": "2",
                "ECSI_VolD": "2418",
                "ECSI_VCU": "236",
                "ECSI_SupC": "1.1",
                "ECSI_VolR": "670",
                "ECSI_SupR": "335",
                "ECSI_ProR": "2",
                "ECSN_VolD": "2418",
                "ECSN_VCU": "162",
                "ECSN_SupC": "1.62",
                "ECSN_VolR": "650",
                "ECSN_SupR": "260",
                "ECSN_PorR": "2.5"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -65.014757401158803,
                    -22.2825448839363,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": 23.0,
                "x": -63.9737155948214,
                "y": -24.3830909491369,
                "provincia": "Salta",
                "ecoregion": "Chaco Seco",
                "precipitac": 500.0,
                "depto": "Departamento",
                "name": "Anta",
                "NOMBRE_EC": "Chaco Seco",
                "Localidad": "Luis Burela",
                "precipita": "762.2",
                "ppm75": "591.8",
                "TempMedia": "21.4",
                "Etopromed": "3.78",
                "UD_VolDem": "73",
                "UD_VCU": "461",
                "UD_SupCap": "160",
                "UD_VolRes": "25",
                "SASI_VolD": "96",
                "SASI_VCU": "473",
                "SASI_SupC": "270",
                "SASI_VolR": "60",
                "SASI_SupR": "40",
                "SASI_ProR": "1.5",
                "SASN_VolD": "96",
                "SASN_VCU": "148",
                "SASN_SupC": "850",
                "SASN_VolR": "55",
                "SASN_SupR": "36.7",
                "SASN_ProR": "1.5",
                "GSI_VolDe": "17813",
                "GSI_VCU": "473",
                "GSI_SupCa": "45000",
                "GSI_VolRe": "9000",
                "GSI_SupRe": "4500",
                "GSI_ProRe": "2",
                "GSN_VolDe": "17813",
                "GSN_VCU": "148",
                "GSN_SupCa": "140000",
                "GSN_VolRe": "9000",
                "GSN_SupRe": "3600",
                "GSN_ProRe": "2.5",
                "ECSI_VolD": "20377",
                "ECSI_VCU": "473",
                "ECSI_SupC": "5.1",
                "ECSI_VolR": "12000",
                "ECSI_SupR": "4800",
                "ECSI_ProR": "2.5",
                "ECSN_VolD": "20377",
                "ECSN_VCU": "148",
                "ECSN_SupC": "16.2",
                "ECSN_VolR": "12000",
                "ECSN_SupR": "4800",
                "ECSN_PorR": "2.5"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -63.9737155948214,
                    -24.3830909491369,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": 24.0,
                "x": -66.2418953616708,
                "y": -25.324944280488101,
                "provincia": "Salta",
                "ecoregion": "Monte de Sierras y Bolsones",
                "precipitac": 400.0,
                "depto": "Departamento",
                "name": "Molinos",
                "NOMBRE_EC": "Montes de Sierras y Bolsones",
                "Localidad": "Seclantás",
                "precipita": "157.4",
                "ppm75": "103.1",
                "TempMedia": "12.7",
                "Etopromed": "3.19",
                "UD_VolDem": "50",
                "UD_VCU": "74",
                "UD_SupCap": "700",
                "UD_VolRes": "35",
                "SASI_VolD": "111",
                "SASI_VCU": "83",
                "SASI_SupC": "1700",
                "SASI_VolR": "80",
                "SASI_SupR": "40",
                "SASI_ProR": "2",
                "SASN_VolD": "111",
                "SASN_VCU": "26",
                "SASN_SupC": "5500",
                "SASN_VolR": "80",
                "SASN_SupR": "40",
                "SASN_ProR": "2",
                "GSI_VolDe": "27045",
                "GSI_VCU": "83",
                "GSI_SupCa": "380000",
                "GSI_VolRe": "15000",
                "GSI_SupRe": "6000",
                "GSI_ProRe": "2.5",
                "GSN_VolDe": "27045",
                "GSN_VCU": "26",
                "GSN_SupCa": "120000",
                "GSN_VolRe": "15000",
                "GSN_SupRe": "6000",
                "GSN_ProRe": "2.5",
                "ECSI_VolD": "17524",
                "ECSI_VCU": "83",
                "ECSI_SupC": "23",
                "ECSI_VolR": "5600",
                "ECSI_SupR": "2240",
                "ECSI_ProR": "2.5",
                "ECSN_VolD": "17524",
                "ECSN_VCU": "26",
                "ECSN_SupC": "74",
                "ECSN_VolR": "5700",
                "ECSN_SupR": "2280",
                "ECSN_PorR": "2.5"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -66.2418953616708,
                    -25.324944280488101,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": 26.0,
                "x": -62.896635120765701,
                "y": -23.4791533053492,
                "provincia": "Salta",
                "ecoregion": "Chaco Seco",
                "precipitac": 500.0,
                "depto": "Departamento",
                "name": "Rivadavia",
                "NOMBRE_EC": "Chaco Seco",
                "Localidad": "Coronel Juan Solá",
                "precipita": "674",
                "ppm75": "548.5",
                "TempMedia": "23.7",
                "Etopromed": "4.02",
                "UD_VolDem": "59",
                "UD_VCU": "427",
                "UD_SupCap": "140",
                "UD_VolRes": "26",
                "SASI_VolD": "94",
                "SASI_VCU": "439",
                "SASI_SupC": "300",
                "SASI_VolR": "60",
                "SASI_SupR": "40",
                "SASI_ProR": "1.5",
                "SASN_VolD": "94",
                "SASN_VCU": "110",
                "SASN_SupC": "1250",
                "SASN_VolR": "65",
                "SASN_SupR": "43.3",
                "SASN_ProR": "1.5",
                "GSI_VolDe": "2003",
                "GSI_VCU": "439",
                "GSI_SupCa": "5700",
                "GSI_VolRe": "1100",
                "GSI_SupRe": "550",
                "GSI_ProRe": "2",
                "GSN_VolDe": "2003",
                "GSN_VCU": "110",
                "GSN_SupCa": "215000",
                "GSN_VolRe": "1000",
                "GSN_SupRe": "400",
                "GSN_ProRe": "2.5",
                "ECSI_VolD": "18989",
                "ECSI_VCU": "439",
                "ECSI_SupC": "5.5",
                "ECSI_VolR": "13300",
                "ECSI_SupR": "5320",
                "ECSI_ProR": "2.5",
                "ECSN_VolD": "18929",
                "ECSN_VCU": "110",
                "ECSN_SupC": "22",
                "ECSN_VolR": "13000",
                "ECSN_SupR": "5200",
                "ECSN_PorR": "2.5"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -62.896635120765701,
                    -23.4791533053492,
                    0.0
                ]
            }
        }
    ]
    }
    
