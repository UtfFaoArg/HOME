var IconSASN =
    L.icon({
        iconUrl: 'images/marcador.png',
        iconSize: [25, 25],
        iconAnchor: [17, 42],
        popupAnchor: [1, -32],
        className: 'custom-marker-gsi',
    });
function popupContentModelos(feature) {
    var tableHTML = (
        "<div id='Estilo1' align='center'><h3>Comparación de Modelos de Cosecha de Agua</h3></div>" +
        "<b> Departamento: </b>" + feature.properties.name + " - " + "<b> Localidad: </b>" + feature.properties.loc + " - " + "<b> Ecorregión: </b>" + feature.properties.NOMBRE_EC + "<br>" +
        "<hr class='hrx' align='center' noshade='noshade' size='1' width='100%' />" +
        "<table border='1' cellspacing='0' cellpadding='3' style='border-collapse: collapse; width: 100%; font-size: 10px;'>" +
        "<thead align='center'>" +
        "<tr>" +
        "<th>Parámetro</th>" +
        "<th>Uso Doméstico <img src='./images/hogar.png' alt=Ícono style=width:16px; height:16px; margin-left: 5px;'> </th>" +
        "<th>Seguridad Alimentaria <br> Sup. Impermeable <br> <img src='./images/huerta.png' alt=Ícono style=width:16px; height:16px; margin-left: 5px;'> </th>" +
        "<th>Segeguridad Alimentaria <br> Suelo Natural <br><img src='./images/huerta.png' alt=Ícono style=width:16px; height:16px; margin-left: 5px;'></th>" +
        "<th>Ganadería <br> Sup. Impermeable <br><img src='./images/ganado.svg' alt=Ícono style=width:16px; height:16px; margin-left: 5px;'></th>" +
        "<th>Ganadería <br> Suelo Natural <br><img src='./images/ganado.svg' alt=Ícono style=width:16px; height:16px; margin-left: 5px;'></th>" +
        "<th>Excedentes <br> Sup. Impermeable <br><img src='./images/vegetales.png' alt=Ícono style=width:16px; height:16px; margin-left: 5px;'></th>" +
        "<th>Excedentes <br> Suelo Natural <br><img src='./images/vegetales.png' alt=Ícono style=width:16px; height:16px; margin-left: 5px;'></th>" +
        "</tr>" +
        "</thead>" +
        "<tbody align='center'>" +
        "<tr><td><b>Precipitación</b></td>" +
        "<td>" + feature.properties.precipita + " mm</td>" +
        "<td>" + feature.properties.precipita + " mm</td>" +
        "<td>" + feature.properties.precipita + " mm</td>" +
        "<td>" + feature.properties.precipita + " mm</td>" +
        "<td>" + feature.properties.precipita + " mm</td>" +
        "<td>" + feature.properties.precipita + " mm</td>" +
        "<td>" + feature.properties.precipita + " mm</td>" +
        "</tr>" +
        "<tr><td><b>Temperatura</b></td>" +
        "<td>" + feature.properties.TempMedia + " °C</td>" +
        "<td>" + feature.properties.TempMedia + " °C</td>" +
        "<td>" + feature.properties.TempMedia + " °C</td>" +
        "<td>" + feature.properties.TempMedia + " °C</td>" +
        "<td>" + feature.properties.TempMedia + " °C</td>" +
        "<td>" + feature.properties.TempMedia + " °C</td>" +
        "<td>" + feature.properties.TempMedia + " °C</td>" +
        "</tr>" +
        "<tr><td><b>Eto Promedio</b></td>" +
        "<td>" + feature.properties.Etopromedio + " mm</td>" +
        "<td>" + feature.properties.Etopromedio + " mm</td>" +
        "<td>" + feature.properties.Etopromedio + " mm</td>" +
        "<td>" + feature.properties.Etopromedio + " mm</td>" +
        "<td>" + feature.properties.Etopromedio + " mm</td>" +
        "<td>" + feature.properties.Etopromedio + " mm</td>" +
        "<td>" + feature.properties.Etopromedio + " mm</td>" +
        "</tr>" +
        "<tr><td><b>Volumen Demandado</b></td>" +
        "<td>" + feature.properties.UD_VolDem + " m³</td>" +
        "<td>" + feature.properties.SASI_VolDe + " m³</td>" +
        "<td>" + feature.properties.SASN_VolDe + " m³</td>" +
        "<td>" + feature.properties.GSI_VolDem + " m³</td>" +
        "<td>" + feature.properties.GSN_VolDem + " m³</td>" +
        "<td>" + feature.properties.ECSI_VolDe + " m³</td>" +
        "<td>" + feature.properties.ECSN_VolDe + " m³</td>" +
        "</tr>" +
        "<tr><td><b>VCU</b></td>" +
        "<td>" + feature.properties.UD_VCU + "</td>" +
        "<td>" + feature.properties.SASI_VCU + "</td>" +
        "<td>" + feature.properties.SASN_VCU + "</td>" +
        "<td>" + feature.properties.GSI_VCU + "</td>" +
        "<td>" + feature.properties.GSN_VCU + "</td>" +
        "<td>" + feature.properties.ECSI_VCU + "</td>" +
        "<td>" + feature.properties.ECSN_VCU + "</td>" +
        "</tr>" +
        "<tr><td><b>Superficie de Captación</b></td>" +
        "<td>" + feature.properties.UD_SupCap + " ha</td>" +
        "<td>" + feature.properties.SASI_SupCa + " ha</td>" +
        "<td>" + feature.properties.SASN_SupCa + " ha</td>" +
        "<td>" + feature.properties.GSI_SupCap2 + " ha</td>" +
        "<td>" + feature.properties.GSN_SupCap + " ha</td>" +
        "<td>" + feature.properties.ECSI_SupCa + " ha</td>" +
        "<td>" + feature.properties.ECSN_SupCa + " ha</td>" +
        "</tr>" +
        "<tr><td><b>Volumen del Reservorio</b></td>" +
        "<td>" + feature.properties.UD_VolRes + " m³</td>" +
        "<td>" + feature.properties.SASI_VolRe + " m³</td>" +
        "<td>" + feature.properties.SASN_VolRe + " m³</td>" +
        "<td>" + feature.properties.GSI_VolRes + " m³</td>" +
        "<td>" + feature.properties.GSN_VolRes + " m³</td>" +
        "<td>" + feature.properties.ECSI_VolRe + " m³</td>" +
        "<td>" + feature.properties.ECSN_VolRe + " m³</td>" +
        "</tr>" +
        "<tr><td><b>Superficie del Reservorio</b></td>" +
        "<td>" + " N/A " + " </td>" +
        "<td>" + feature.properties.SASI_SupRe + " m²</td>" +
        "<td>" + feature.properties.SASN_SupRe + " m²</td>" +
        "<td>" + feature.properties.GSI_SupRes + " m²</td>" +
        "<td>" + feature.properties.GSN_SupRes + " m²</td>" +
        "<td>" + feature.properties.ECSI_SupRe + " m²</td>" +
        "<td>" + feature.properties.ECSI_SupRe + " m²</td>" +
        "</tr>" +
        "<tr><td><b>Profundidad del Reservorio</b></td>" +
        "<td>" + " N/A " + " </td>" +
        "<td>" + feature.properties.SASI_ProRe + " m</td>" +
        "<td>" + feature.properties.SASN_ProRe + " m</td>" +
        "<td>" + feature.properties.GSI_ProRes + " m</td>" +
        "<td>" + feature.properties.GSN_ProRes + " m</td>" +
        "<td>" + feature.properties.ECSI_ProRes + " m</td>" +
        "<td>" + feature.properties.ECSN_PorRes + " m</td>" +
        "</tr>" +
        "</tbody>" +
        "</table>" +
        "<br>" +
        "<button onclick='openModal()' style='padding: 5px 10px; font-size: 12px;'>Ver Imagen</button>" + // Botón para abrir el modal
        "<button onclick='descargarCSV()' style='padding: 5px 10px; font-size: 12px;'>Descargar CSV</button>" +

        "</div>" +
        "<div id='imageModal' style='display:flex; position:fixed; top:10px; left:20px; width:90%; height:90%; background:rgba(0,0,0,0.8); justify-content:center; align-items:center;'>" +
        "  <div style='position:relative; text-align:center;'>" +
        "<div style='overflow:hidden; width:90%; max-height:80%; margin:auto; position:relative;'>" +
        "    <img src='./images/uso_domestico.png' alt='Imagen' id='zoomImage' style='max-width:100%; cursor:zoom-in;' onclick='enableZoom()'/>" +
        "    <br><button onclick='closeModal()' style='margin-top:10px;'>Cerrar</button>" +
        "<button onclick='toggleFullscreen()' style='margin-top:10px; '>Pantalla Completa</button>" +
        "  </div>"

    );
    return tableHTML;

};


function bindPopupWithCSV(feature, layer) {
    var content = popupContentSASN(feature); // Contenido del popup con la tabla
    layer.bindPopup(content, { maxWidth: "auto" });

    layer.on("popupopen", function (e) {
        setTimeout(() => { // Esperar a que el popup se renderice correctamente
            const popupElement = e.popup._contentNode; // Obtener el nodo del contenido del popup
            if (!popupElement) {
                console.error("Error: popupElement no encontrado.");
                return;
            }

            const downloadCsvButton = popupElement.querySelector("#downloadCSV");
            if (!downloadCsvButton) {
                console.error("Error: Botón de descarga no encontrado en el popup.");
                return;
            }

            downloadCsvButton.onclick = function () {
                descargarCSV(popupElement);
            };
        }, 200); // Pequeño retraso para asegurar que el popup se ha renderizado
    });
}

function descargarCSV(popupElement) {
    if (!popupElement) {
        console.error("Error: popupElement es null o undefined.");
        return;
    }

    const table = popupElement.querySelector("#popupTable");
    if (!table) {
        console.error("Error: No se encontró la tabla en el popup.");
        return;
    }

    let csvContent = [];
    const rows = table.querySelectorAll("tr");

    rows.forEach(row => {
        const cols = row.querySelectorAll("th, td");
        const rowData = [];
        cols.forEach(col => rowData.push(col.innerText));
        csvContent.push(rowData.join(","));
    });

    const csvString = csvContent.join("\n");
    const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `tabla_comparativa_${Date.now()}.csv`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}



/// DAtos de GeoJson con toda la info
var datamodelo =
{
    "type": "FeatureCollection",
    "name": "jujuy_modeloscalculados_V2",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
        { "type": "Feature", "properties": { "id": 13.0, "x": -66.699898892767195, "y": -23.0851878819619, "provincia": "Jujuy", "ecoregion": "Altos Andes", "precipitacIO": 50.0, "depto": "Departamento", "name": "Susques", "NOMBRE_EC": "Altos andes", "Departamento": "Susques", "loc": "El Toro", "precipita": 250.1, "ppm75": 142.4, "TempMedia": 4.4, "Etopromedio": 3.53, "UD_VolDem": 44.0, "UD_VCU": 122, "UD_SupCap": 360, "UD_VolRes": 25.0, "SASI_VolDe": 78.0, "SASI_VCU": 131, "SASI_SupCa": 750, "SASI_VolRe": 50, "SASI_SupRe": 33.3, "SASI_ProRe": 1.5, "SASN_VolDe": 78.0, "SASN_VCU": 41, "SASN_SupCa": 2400, "SASN_VolRe": 50, "SASN_SupRe": 33.3, "SASN_ProRe": 1.5, "GSI_VolDem": 80.0, "GSI_VCU": 131, "GSI_SupCap2": 750.0, "GSI_VolRes": 55, "GSI_SupRes": 28, "GSI_ProRes": 2.0, "GSN_VolDem": 80.0, "GSN_VCU": 41, "GSN_SupCap": 2400.0, "GSN_VolRes": 55, "GSN_SupRes": 36.7, "GSN_ProRes": 1.5, "ECSI_VolDe": "N/A", "ECSI_VCU": "N/A", "ECSI_SupCa": "N/A", "ECSI_VolRe": "N/A", "ECSI_SupRe": "N/A", "ECSI_ProRes": "N/A", "ECSN_VolDe": "N/A", "ECSN_VCU": "N/A", "ECSN_SupCa": "N/A", "ECSN_VolRe": "N/A", "ECSN_SupRe": "N/A", "ECSN_PorRes": "N/A" }, "geometry": { "type": "Point", "coordinates": [-66.699898892767195, -23.0851878819619, 0.0] } },
        { "type": "Feature", "properties": { "id": 16.0, "x": -65.132061106993902, "y": -24.3741421797864, "provincia": "Jujuy", "ecoregion": "Selva de las Yungas", "precipitacIO": 2000.0, "depto": "Departamento", "name": "El Carmen", "NOMBRE_EC": "Selva de las Yungas", "Departamento": "El Carmen", "loc": "Perico", "precipita": 699.86, "ppm75": 461.1, "TempMedia": 17.2, "Etopromedio": 3.86, "UD_VolDem": 57.0, "UD_VCU": 471, "UD_SupCap": 125, "UD_VolRes": 30.0, "SASI_VolDe": 77.0, "SASI_VCU": 483, "SASI_SupCa": 210, "SASI_VolRe": 60, "SASI_SupRe": 40.0, "SASI_ProRe": 1.5, "SASN_VolDe": 77.0, "SASN_VCU": 151, "SASN_SupCa": 670, "SASN_VolRe": 60, "SASN_SupRe": 40.0, "SASN_ProRe": 1.5, "GSI_VolDem": 9930.0, "GSI_VCU": 483, "GSI_SupCap2": 2.4, "GSI_VolRes": 6700, "GSI_SupRes": 2680, "GSI_ProRes": 2.5, "GSN_VolDem": 9930.0, "GSN_VCU": 151, "GSN_SupCap": 7.7, "GSN_VolRes": 6800, "GSN_SupRes": 2720.0, "GSN_ProRes": 2.5, "ECSI_VolDe": "19020", "ECSI_VCU": "483", "ECSI_SupCa": "4.5999999999999996", "ECSI_VolRe": "13000", "ECSI_SupRe": "5200", "ECSI_ProRes": "2.5", "ECSN_VolDe": "19020", "ECSN_VCU": "151", "ECSN_SupCa": "14.5", "ECSN_VolRe": "12500", "ECSN_SupRe": "5000", "ECSN_PorRes": "2.5" }, "geometry": { "type": "Point", "coordinates": [-65.132061106993902, -24.3741421797864, 0.0] } },
        { "type": "Feature", "properties": { "id": 18.0, "x": -64.298233363043906, "y": -23.976997682270301, "provincia": "Jujuy", "ecoregion": "Selva de las Yungas", "precipitacIO": 2000.0, "depto": "Departamento", "name": "Santa Bárbara", "NOMBRE_EC": "Selva de las Yungas", "Departamento": "Santa Bárbara", "loc": "Palma Sola", "precipita": 855.55426273190835, "ppm75": 821.0, "TempMedia": 19.7, "Etopromedio": 3.52, "UD_VolDem": 53.1, "UD_VCU": 645, "UD_SupCap": 90, "UD_VolRes": 25.0, "SASI_VolDe": 147.0, "SASI_VCU": 657, "SASI_SupCa": 320, "SASI_VolRe": 110, "SASI_SupRe": 73.3, "SASI_ProRe": 1.5, "SASN_VolDe": 148.0, "SASN_VCU": 370, "SASN_SupCa": 500, "SASN_VolRe": 115, "SASN_SupRe": 57.5, "SASN_ProRe": 2.0, "GSI_VolDem": 637.0, "GSI_VCU": 657, "GSI_SupCap2": 1150.0, "GSI_VolRes": 330, "GSI_SupRes": 165, "GSI_ProRes": 2.0, "GSN_VolDem": 637.0, "GSN_VCU": 370, "GSN_SupCap": 2050.0, "GSN_VolRes": 340, "GSN_SupRes": 170.0, "GSN_ProRes": 2.0, "ECSI_VolDe": "15115", "ECSI_VCU": "657", "ECSI_SupCa": "2.85", "ECSI_VolRe": "12500", "ECSI_SupRe": "5000", "ECSI_ProRes": "2.5", "ECSN_VolDe": "15115", "ECSN_VCU": "370", "ECSN_SupCa": "5", "ECSN_VolRe": "12500", "ECSN_SupRe": "5000", "ECSN_PorRes": "2.5" }, "geometry": { "type": "Point", "coordinates": [-64.298233363043906, -23.976997682270301, 0.0] } },
        { "type": "Feature", "properties": { "id": 29.0, "x": -64.852652244119696, "y": -24.2001618574186, "provincia": "Jujuy", "ecoregion": "Chaco Seco", "precipitacIO": 500.0, "depto": "Departamento", "name": "San Pedro", "NOMBRE_EC": "Chaco Seco", "Departamento": "San Pedro", "loc": "San Pedro", "precipita": 771.4, "ppm75": 737.0, "TempMedia": 18.7, "Etopromedio": 3.09, "UD_VolDem": 54.0, "UD_VCU": 578, "UD_SupCap": 100, "UD_VolRes": 25.0, "SASI_VolDe": 136.0, "SASI_VCU": 590, "SASI_SupCa": 260, "SASI_VolRe": 55, "SASI_SupRe": 36.7, "SASI_ProRe": 1.5, "SASN_VolDe": 136.0, "SASN_VCU": 332, "SASN_SupCa": 470, "SASN_VolRe": 55, "SASN_SupRe": 36.7, "SASN_ProRe": 1.5, "GSI_VolDem": 53.0, "GSI_VCU": 590, "GSI_SupCap2": 110.0, "GSI_VolRes": 30, "GSI_SupRes": 20, "GSI_ProRes": 1.5, "GSN_VolDem": 53.0, "GSN_VCU": 332, "GSN_SupCap": 185.0, "GSN_VolRes": 30, "GSN_SupRes": 15.0, "GSN_ProRes": 2.0, "ECSI_VolDe": "13814", "ECSI_VCU": "590", "ECSI_SupCa": "2.7", "ECSI_VolRe": "5200", "ECSI_SupRe": "2600", "ECSI_ProRes": "2", "ECSN_VolDe": "13814", "ECSN_VCU": "332", "ECSN_SupCa": "4.5", "ECSN_VolRe": "5200", "ECSN_SupRe": "2080", "ECSN_PorRes": "2.5" }, "geometry": { "type": "Point", "coordinates": [-64.852652244119696, -24.2001618574186, 0.0] } },
        { "type": "Feature", "properties": { "id": 35.0, "x": -65.463236071587701, "y": -22.132691734302199, "provincia": "Jujuy", "ecoregion": "Puna", "precipitacIO": 100.0, "depto": "Departamento", "name": "Yavi", "NOMBRE_EC": null, "Departamento": "Yavi", "loc": "Yavi", "precipita": 328.6, "ppm75": 265.5, "TempMedia": 10.0, "Etopromedio": 3.9, "UD_VolDem": 38.8, "UD_VCU": 204, "UD_SupCap": 195, "UD_VolRes": 22.0, "SASI_VolDe": 165.1, "SASI_VCU": 212, "SASI_SupCa": 1050, "SASI_VolRe": 110, "SASI_SupRe": 73.3, "SASI_ProRe": 1.5, "SASN_VolDe": 165.1, "SASN_VCU": 66, "SASN_SupCa": 3000, "SASN_VolRe": 110, "SASN_SupRe": 55.0, "SASN_ProRe": 2.0, "GSI_VolDem": 54.8, "GSI_VCU": 212, "GSI_SupCap2": 305.0, "GSI_VolRes": 35, "GSI_SupRes": 18, "GSI_ProRes": 2.0, "GSN_VolDem": 54.8, "GSN_VCU": 66, "GSN_SupCap": 1000.0, "GSN_VolRes": 35, "GSN_SupRes": 17.5, "GSN_ProRes": 2.0, "ECSI_VolDe": "7207", "ECSI_VCU": "212", "ECSI_SupCa": "3.8", "ECSI_VolRe": "3700", "ECSI_SupRe": "1480", "ECSI_ProRes": "2", "ECSN_VolDe": "7207", "ECSN_VCU": "66", "ECSN_SupCa": "12.18", "ECSN_VolRe": "3730", "ECSN_SupRe": "1492", "ECSN_PorRes": "2.5" }, "geometry": { "type": "Point", "coordinates": [-65.463236071587701, -22.132691734302199, 0.0] } }
    ]
}
