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
        "<div id='Estilo1' align='center'><h3>Comparación de Modelos Productivos</h3></div>" +
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
        "<td>" + feature.properties.ECSN_SupRe + " m²</td>" +
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
    "name": "salta_modeloscalculados_V2",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "id": 19.0, "x": -62.712407534539501, "y": -22.279349394774901, "provincia": "Salta", "ecoregion": "Chaco Seco", "precipita": 500.0, "depto": "Departamento", "name": "Rivadavia", "NOMBRE_EC": "Chaco Seco", "Localidad": "Santa Victoria Este", "precipita": "648.2", "ppm75": "617.5", "Provincia": "Salta", "NOMBRE_ECO": "Chaco Seco", "nam": "Rivadavia", "loc": "Santa Victoria Este", "precipita": 648.2, "ppm75": 617.5, "TempMedia": 23.8, "Etopromedio": 4.12, "UD_VolDem": 59.0, "UD_VCU": 482, "UD_SupCap": 125, "UD_VolRes": 25.0, "SASI_VolDe": 107.0, "SASI_VCU": 494, "SASI_SupCa": 280, "SASI_VolRe": 60, "SASI_SupRe": 30.0, "SASI_ProRe": 2.0, "SASN_VolDe": 107.0, "SASN_VCU": 278, "SASN_SupCa": 490, "SASN_VolRe": 60, "SASN_SupRe": 30.0, "SASN_ProRe": 2.0, "GSI_VolDem": 518.0, "GSI_VCU": "494", "GSI_SupCap2": "1300", "GSI_VolRes": "260", "GSI_SupRes": "130", "GSI_ProRes": "2", "GSN_VolDem": 518.0, "GSN_VCU": "278", "GSN_SupCap": "2350", "GSN_VolRes": "270", "GSN_SupRes": "135", "GSN_ProRes": "2", "ECSI_VolDe": "21145", "ECSI_VCU": "494", "ECSI_SupCa": "5.3", "ECSI_VolRe": "12500", "ECSI_SupRe": "5000", "ECSI_ProRes": "2.5", "ECSN_VolDe": "21145", "ECSN_VCU": "278", "ECSN_SupCa": "9.30", "ECSN_VolRe": "13000", "ECSN_SupRe": "5200", "ECSN_PorRes": "2.5" }, "geometry": { "type": "Point", "coordinates": [ -62.712407534539501, -22.279349394774901, 0.0 ] } },
    { "type": "Feature", "properties": { "id": 20.0, "x": -63.789162297789197, "y": -22.495989459224901, "provincia": "Salta", "ecoregion": "Selva de las Yungas", "precipita": 2000.0, "depto": "Departamento", "name": "General José de San Martín", "NOMBRE_EC": "Selva de las Yungas", "Localidad": "Tartagal", "precipita": "993.9", "ppm75": "974.6", "Provincia": "Salta", "NOMBRE_ECO": "Selva de las Yungas", "nam": "San Martín", "loc": "Tartagal", "precipita": 993.9, "ppm75": 974.6, "TempMedia": 21.3, "Etopromedio": 3.75, "UD_VolDem": 56.0, "UD_VCU": 768, "UD_SupCap": 75, "UD_VolRes": 25.0, "SASI_VolDe": 84.0, "SASI_VCU": 780, "SASI_SupCa": 150, "SASI_VolRe": 65, "SASI_SupRe": 43.3, "SASI_ProRe": 1.5, "SASN_VolDe": 84.0, "SASN_VCU": 439, "SASN_SupCa": 250, "SASN_VolRe": 60, "SASN_SupRe": 30.0, "SASN_ProRe": 2.0, "GSI_VolDem": 474.0, "GSI_VCU": "780", "GSI_SupCap2": "800", "GSI_VolRes": "400", "GSI_SupRes": "200", "GSI_ProRes": "2", "GSN_VolDem": 474.0, "GSN_VCU": "439", "GSN_SupCap": "1450", "GSN_VolRes": "400", "GSN_SupRes": "200", "GSN_ProRes": "2", "ECSI_VolDe": "7151", "ECSI_VCU": "780", "ECSI_SupCa": "1.05", "ECSI_VolRe": "3780", "ECSI_SupRe": "1512", "ECSI_ProRes": "2.5", "ECSN_VolDe": "7151", "ECSN_VCU": "439", "ECSN_SupCa": "1.9", "ECSN_VolRe": "3850", "ECSN_SupRe": "1540", "ECSN_PorRes": "2.5" }, "geometry": { "type": "Point", "coordinates": [ -63.789162297789197, -22.495989459224901, 0.0 ] } },
    { "type": "Feature", "properties": { "id": 21.0, "x": -63.754264206012003, "y": -22.2425872745006, "provincia": "Salta", "ecoregion": "Selva de las Yungas", "precipita": 2000.0, "depto": "Departamento", "name": "General José de San Martín", "NOMBRE_EC": "Selva de las Yungas", "Localidad": "Aguaray", "precipita": "1042.6", "ppm75": "919.8", "Provincia": "Salta", "NOMBRE_ECO": "Selva de las Yungas", "nam": "San Martín", "loc": "Aguaray", "precipita": 1042.6, "ppm75": 919.8, "TempMedia": 21.0, "Etopromedio": 3.81, "UD_VolDem": 56.0, "UD_VCU": 724, "UD_SupCap": 80, "UD_VolRes": 27.0, "SASI_VolDe": 79.0, "SASI_VCU": 736, "SASI_SupCa": 150, "SASI_VolRe": 65, "SASI_SupRe": 43.3, "SASI_ProRe": 1.5, "SASN_VolDe": 79.0, "SASN_VCU": 414, "SASN_SupCa": 250, "SASN_VolRe": 65, "SASN_SupRe": 32.5, "SASN_ProRe": 2.0, "GSI_VolDem": 410.0, "GSI_VCU": "736", "GSI_SupCap2": "730", "GSI_VolRes": "370", "GSI_SupRes": "185", "GSI_ProRes": "2", "GSN_VolDem": 410.0, "GSN_VCU": "414", "GSN_SupCap": "1300", "GSN_VolRes": "375", "GSN_SupRes": "187.5", "GSN_ProRes": "2", "ECSI_VolDe": "6275", "ECSI_VCU": "736", "ECSI_SupCa": "1", "ECSI_VolRe": "3900", "ECSI_SupRe": "1560", "ECSI_ProRes": "2.5", "ECSN_VolDe": "6275", "ECSN_VCU": "414", "ECSN_SupCa": "1.8", "ECSN_VolRe": "4000", "ECSN_SupRe": "1600", "ECSN_PorRes": "2.5" }, "geometry": { "type": "Point", "coordinates": [ -63.754264206012003, -22.2425872745006, 0.0 ] } },
    { "type": "Feature", "properties": { "id": 22.0, "x": -65.014757401158803, "y": -22.2825448839363, "provincia": "Salta", "ecoregion": "Puna", "precipita": 100.0, "depto": "Departamento", "name": "Santa Victoria", "NOMBRE_EC": "Puna", "Localidad": "Santa Victoria Oeste", "precipita": "346.9", "ppm75": "294.4", "Provincia": "Salta", "NOMBRE_ECO": "Puna", "nam": "Santa Victoria", "loc": "Acoyte", "precipita": 346.9, "ppm75": 294.4, "TempMedia": 10.1, "Etopromedio": 2.63, "UD_VolDem": 37.0, "UD_VCU": 227, "UD_SupCap": 165, "UD_VolRes": 21.0, "SASI_VolDe": 89.0, "SASI_VCU": 236, "SASI_SupCa": 450, "SASI_VolRe": 60, "SASI_SupRe": 40.0, "SASI_ProRe": 1.5, "SASN_VolDe": 89.0, "SASN_VCU": 162, "SASN_SupCa": 630, "SASN_VolRe": 56, "SASN_SupRe": 28.0, "SASN_ProRe": 2.0, "GSI_VolDem": 633.0, "GSI_VCU": "236", "GSI_SupCap2": "3000", "GSI_VolRes": "375", "GSI_SupRes": "188", "GSI_ProRes": "2", "GSN_VolDem": 633.0, "GSN_VCU": "162", "GSN_SupCap": "4400", "GSN_VolRes": "380", "GSN_SupRes": "190", "GSN_ProRes": "2", "ECSI_VolDe": "2418", "ECSI_VCU": "236", "ECSI_SupCa": "1.100", "ECSI_VolRe": "670", "ECSI_SupRe": "335", "ECSI_ProRes": "2", "ECSN_VolDe": "2418", "ECSN_VCU": "162", "ECSN_SupCa": "1.62", "ECSN_VolRe": "650", "ECSN_SupRe": "260", "ECSN_PorRes": "2.5" }, "geometry": { "type": "Point", "coordinates": [ -65.014757401158803, -22.2825448839363, 0.0 ] } },
    { "type": "Feature", "properties": { "id": 23.0, "x": -63.9737155948214, "y": -24.3830909491369, "provincia": "Salta", "ecoregion": "Chaco Seco", "precipita": 500.0, "depto": "Departamento", "name": "Anta", "NOMBRE_EC": "Chaco Seco", "Localidad": "Luis Burela", "precipita": "762.2", "ppm75": "591.8", "Provincia": "Salta", "NOMBRE_ECO": "Chaco Seco", "nam": "Anta", "loc": "Luis Burela", "precipita": 762.2, "ppm75": 591.8, "TempMedia": 21.4, "Etopromedio": 3.78, "UD_VolDem": 73.0, "UD_VCU": 461, "UD_SupCap": 160, "UD_VolRes": 25.0, "SASI_VolDe": 96.0, "SASI_VCU": 473, "SASI_SupCa": 270, "SASI_VolRe": 60, "SASI_SupRe": 40.0, "SASI_ProRe": 1.5, "SASN_VolDe": 96.0, "SASN_VCU": 148, "SASN_SupCa": 850, "SASN_VolRe": 55, "SASN_SupRe": 36.7, "SASN_ProRe": 1.5, "GSI_VolDem": 17813.0, "GSI_VCU": "473", "GSI_SupCap2": "4.5", "GSI_VolRes": "9000", "GSI_SupRes": "4500", "GSI_ProRes": "2", "GSN_VolDem": 17813.0, "GSN_VCU": "148", "GSN_SupCap": "14", "GSN_VolRes": "9000", "GSN_SupRes": "3600", "GSN_ProRes": "2.5", "ECSI_VolDe": "20377", "ECSI_VCU": "473", "ECSI_SupCa": "5.09", "ECSI_VolRe": "12000", "ECSI_SupRe": "4800", "ECSI_ProRes": "2.5", "ECSN_VolDe": "20377", "ECSN_VCU": "148", "ECSN_SupCa": "16.2", "ECSN_VolRe": "12000", "ECSN_SupRe": "4800", "ECSN_PorRes": "2.5" }, "geometry": { "type": "Point", "coordinates": [ -63.9737155948214, -24.3830909491369, 0.0 ] } },
    { "type": "Feature", "properties": { "id": 24.0, "x": -66.2418953616708, "y": -25.324944280488101, "provincia": "Salta", "ecoregion": "Monte de Sierras y Bolsones", "precipita": 400.0, "depto": "Departamento", "name": "Molinos", "NOMBRE_EC": "Montes de Sierras y Bolsones", "Localidad": "Seclantás", "precipita": "157.4", "ppm75": "103.1", "Provincia": "Salta", "NOMBRE_ECO": "Montes de Sierras y Bolsones", "nam": "Molinos", "loc": "Seclantás", "precipita": 157.4, "ppm75": 103.1, "TempMedia": 12.7, "Etopromedio": 3.19, "UD_VolDem": 50.0, "UD_VCU": 74, "UD_SupCap": 700, "UD_VolRes": 35.0, "SASI_VolDe": 111.0, "SASI_VCU": 83, "SASI_SupCa": 1700, "SASI_VolRe": 80, "SASI_SupRe": 40.0, "SASI_ProRe": 2.0, "SASN_VolDe": 111.0, "SASN_VCU": 26, "SASN_SupCa": 5500, "SASN_VolRe": 80, "SASN_SupRe": 40.0, "SASN_ProRe": 2.0, "GSI_VolDem": 27045.0, "GSI_VCU": "83", "GSI_SupCap2": "38", "GSI_VolRes": "15000", "GSI_SupRes": "6000", "GSI_ProRes": "2.5", "GSN_VolDem": 27045.0, "GSN_VCU": "26", "GSN_SupCap": "120", "GSN_VolRes": "15000", "GSN_SupRes": "6000", "GSN_ProRes": "2.5", "ECSI_VolDe": "17524", "ECSI_VCU": "83", "ECSI_SupCa": "23", "ECSI_VolRe": "5600", "ECSI_SupRe": "2240", "ECSI_ProRes": "2.5", "ECSN_VolDe": "17524", "ECSN_VCU": "26", "ECSN_SupCa": "74", "ECSN_VolRe": "5700", "ECSN_SupRe": "2280", "ECSN_PorRes": "2.5" }, "geometry": { "type": "Point", "coordinates": [ -66.2418953616708, -25.324944280488101, 0.0 ] } },
    { "type": "Feature", "properties": { "id": 26.0, "x": -62.896635120765701, "y": -23.4791533053492, "provincia": "Salta", "ecoregion": "Chaco Seco", "precipita": 500.0, "depto": "Departamento", "name": "Rivadavia", "NOMBRE_EC": "Chaco Seco", "Localidad": "Coronel Juan Solá", "precipita": "674", "ppm75": "548.5", "Provincia": "Salta", "NOMBRE_ECO": "Chaco Seco", "nam": "Rivadavia", "loc": "Coronel Juan Solá", "precipita": 674.0, "ppm75": 548.5, "TempMedia": 23.7, "Etopromedio": 4.02, "UD_VolDem": 59.0, "UD_VCU": 427, "UD_SupCap": 140, "UD_VolRes": 26.0, "SASI_VolDe": 94.0, "SASI_VCU": 439, "SASI_SupCa": 300, "SASI_VolRe": 60, "SASI_SupRe": 40.0, "SASI_ProRe": 1.5, "SASN_VolDe": 94.0, "SASN_VCU": 110, "SASN_SupCa": 1250, "SASN_VolRe": 65, "SASN_SupRe": 43.3, "SASN_ProRe": 1.5, "GSI_VolDem": 2003.0, "GSI_VCU": "439", "GSI_SupCap2": "5700", "GSI_VolRes": "1100", "GSI_SupRes": "550", "GSI_ProRes": "2", "GSN_VolDem": 2003.0, "GSN_VCU": "110", "GSN_SupCap": "2.15", "GSN_VolRes": "1000", "GSN_SupRes": "400", "GSN_ProRes": "2.5", "ECSI_VolDe": "18989", "ECSI_VCU": "439", "ECSI_SupCa": "5.5", "ECSI_VolRe": "13300", "ECSI_SupRe": "5320", "ECSI_ProRes": "2.5", "ECSN_VolDe": "18929", "ECSN_VCU": "110", "ECSN_SupCa": "22", "ECSN_VolRe": "13000", "ECSN_SupRe": "5200", "ECSN_PorRes": "2.5" }, "geometry": { "type": "Point", "coordinates": [ -62.896635120765701, -23.4791533053492, 0.0 ] } }
    ]
    }
    