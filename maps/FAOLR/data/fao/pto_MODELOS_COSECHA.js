
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
        "<b> name: </b>" + feature.properties.name + " - " + "<b> Localidad: </b>" + feature.properties.loc + " - " + "<b> Ecorregión: </b>" + feature.properties.NOMBRE_ECO + "<br>" +
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
        "<tr><td><b>Precipitaión</b></td>" +
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
        "<td>" + feature.properties.ECSN_SupRe + " m²</td>" +
        "</tr>" +
        "<tr><td><b>Profundidad del Reservorio</b></td>" +
        "<td>" + " N/A "+ " </td>" +
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
        "<button onclick='descargarCSV()' style='padding: 5px 10px; font-size: 12px;'>Descargar CSV</button>"+ 
        
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
    "name": "larioja_modeloscalculados",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "id": 34, "data": "Puesto El Tala - Paraje Angel Diaz", "Provincia": "La Rioja", "NOMBRE_ECO": "Chaco Seco", "name": "Capital", "loc": "Angel Díaz", "precipita": 470.7, "ppm75": 388.7, "TempMedia": 18.7, "Etopromedio": 4.15, "UD_VolDem": 49.0, "UD_VCU": 299, "UD_SupCap": 165, "UD_VolRes": 15.5, "SASI_VolDe": 91.0, "SASI_VCU": 311, "SASI_SupCa": 345, "SASI_VolRe": 33, "SASI_SupRe": 22.0, "SASI_ProRe": 1.5, "SASN_VolDe": 91.0, "SASN_VCU": 78, "SASN_SupCa": 1330, "SASN_VolRe": 32, "SASN_SupRe": 16.0, "SASN_ProRe": 2.0, "GSI_VolDem": 263.0, "GSI_VCU": "311", "GSI_SupCap2": "950", "GSI_VolRes": "90", "GSI_SupRes": "45", "GSI_ProRes": "2", "GSN_VolDem": 263.0, "GSN_VCU": "78", "GSN_SupCap": "3770", "GSN_VolRes": "78", "GSN_SupRes": "43", "GSN_ProRes": "2", "ECSI_VolDe": "0", "ECSI_VCU": "N/A", "ECSI_SupCa": "N/A", "ECSI_VolRe": "N/A", "ECSI_SupRe": "N/A", "ECSI_ProRes": "N/A", "ECSN_VolDe": "0", "ECSN_VCU": "N/A", "ECSN_SupCa": "N/A", "ECSN_VolRe": "N/A", "ECSN_SupRe": "N/A", "ECSN_PorRes": "N/A" }, "geometry": { "type": "Point", "coordinates": [ -66.74701970645603, -29.292139639095431 ] } },
    { "type": "Feature", "properties": { "id": 33, "data": "Patquia", "Provincia": "La Rioja", "NOMBRE_ECO": "Chaco Seco", "name": "Independencia", "loc": "Patquía (B° Balde del Milagro)", "precipita": 400.5, "ppm75": 308.1, "TempMedia": 19.7, "Etopromedio": 4.12, "UD_VolDem": 45.0, "UD_VCU": 234, "UD_SupCap": 195, "UD_VolRes": 16.0, "SASI_VolDe": 92.0, "SASI_VCU": 246, "SASI_SupCa": 445, "SASI_VolRe": 33, "SASI_SupRe": 22.0, "SASI_ProRe": 1.5, "SASN_VolDe": 92.0, "SASN_VCU": 52, "SASN_SupCa": 2000, "SASN_VolRe": 33, "SASN_SupRe": 16.5, "SASN_ProRe": 2.0, "GSI_VolDem": 526.0, "GSI_VCU": "246", "GSI_SupCap2": "2470", "GSI_VolRes": "200", "GSI_SupRes": "100", "GSI_ProRes": "2", "GSN_VolDem": 526.0, "GSN_VCU": "52", "GSN_SupCap": "1.15", "GSN_VolRes": "200", "GSN_SupRes": "100", "GSN_ProRes": "2", "ECSI_VolDe": "0", "ECSI_VCU": "N/A", "ECSI_SupCa": "N/A", "ECSI_VolRe": "N/A", "ECSI_SupRe": "N/A", "ECSI_ProRes": "N/A", "ECSN_VolDe": "0", "ECSN_VCU": "N/A", "ECSN_SupCa": "N/A", "ECSN_VolRe": "N/A", "ECSN_SupRe": "N/A", "ECSN_PorRes": "N/A" }, "geometry": { "type": "Point", "coordinates": [ -66.897256738101035, -30.038237634567697 ] } },
    { "type": "Feature", "properties": { "id": 32, "data": "Aguango", "Provincia": "La Rioja", "NOMBRE_ECO": "Chaco Seco", "name": "Independencia", "loc": "Aguango", "precipita": 258.1, "ppm75": 230.6, "TempMedia": 21.3, "Etopromedio": 3.44, "UD_VolDem": 45.3, "UD_VCU": 172, "UD_SupCap": 263, "UD_VolRes": 22.0, "SASI_VolDe": 81.3, "SASI_VCU": 184, "SASI_SupCa": 530, "SASI_VolRe": 40, "SASI_SupRe": 26.7, "SASI_ProRe": 1.5, "SASN_VolDe": 81.3, "SASN_VCU": 46, "SASN_SupCa": 2050, "SASN_VolRe": 40, "SASN_SupRe": 20.0, "SASN_ProRe": 2.0, "GSI_VolDem": 1153.4, "GSI_VCU": "184", "GSI_SupCap2": "7500", "GSI_VolRes": "580", "GSI_SupRes": "290", "GSI_ProRes": "2", "GSN_VolDem": 1153.4, "GSN_VCU": "46", "GSN_SupCap": "2.91", "GSN_VolRes": "600", "GSN_SupRes": "300", "GSN_ProRes": "2", "ECSI_VolDe": "0", "ECSI_VCU": "N/A", "ECSI_SupCa": "N/A", "ECSI_VolRe": "N/A", "ECSI_SupRe": "N/A", "ECSI_ProRes": "N/A", "ECSN_VolDe": "0", "ECSN_VCU": "N/A", "ECSN_SupCa": "N/A", "ECSN_VolRe": "N/A", "ECSN_SupRe": "N/A", "ECSN_PorRes": "N/A" }, "geometry": { "type": "Point", "coordinates": [ -67.359134829820434, -30.444810713032691 ] } },
    { "type": "Feature", "properties": { "id": 31, "data": "Comunidad Guandacol", "Provincia": "La Rioja", "NOMBRE_ECO": "Montes de Sierras y Bolsones", "name": "General Felipe Varela", "loc": "El Zapallar", "precipita": 127.4, "ppm75": 114.2, "TempMedia": 14.3, "Etopromedio": 3.46, "UD_VolDem": 45.4, "UD_VCU": 80, "UD_SupCap": 570, "UD_VolRes": 27.0, "SASI_VolDe": 85.3, "SASI_VCU": 91, "SASI_SupCa": 1150, "SASI_VolRe": 52, "SASI_SupRe": 34.7, "SASI_ProRe": 1.5, "SASN_VolDe": 85.3, "SASN_VCU": 23, "SASN_SupCa": 4400, "SASN_VolRe": 50, "SASN_SupRe": 25.0, "SASN_ProRe": 2.0, "GSI_VolDem": 0.0, "GSI_VCU": "N/A", "GSI_SupCap2": "N/A", "GSI_VolRes": "N/A", "GSI_SupRes": "N/A", "GSI_ProRes": "N/A", "GSN_VolDem": 0.0, "GSN_VCU": "N/A", "GSN_SupCap": "N/A", "GSN_VolRes": "N/A", "GSN_SupRes": "N/A", "GSN_ProRes": "N/A", "ECSI_VolDe": "10666.2", "ECSI_VCU": "91", "ECSI_SupCa": "12.7", "ECSI_VolRe": "4300", "ECSI_SupRe": "1720", "ECSI_ProRes": "2.5", "ECSN_VolDe": "10666.2", "ECSN_VCU": "23", "ECSN_SupCa": "51", "ECSN_VolRe": "4300", "ECSN_SupRe": "1720", "ECSN_PorRes": "2.5" }, "geometry": { "type": "Point", "coordinates": [ -68.552453567160796, -29.531081723071427 ] } }
    ]
    }
    