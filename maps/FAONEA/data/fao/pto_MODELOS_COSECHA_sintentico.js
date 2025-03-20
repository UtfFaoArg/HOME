//Sistema Seguridad Alimentaria - SASN
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
        "<b> Departamento: </b>" + feature.properties.nam + " - " + "<b> Localidad: </b>" + feature.properties.loc + " - " + "<b> Ecorregión: </b>" + feature.properties.NOMBRE_ECO + "<br>" +
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
    "name": "catamarca_modeloscalculados",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
        { "type": "Feature", "properties": { "id": 1.0, "x": -65.616160617394243, "y": -29.528862439253771, "fna": "Departamento Capayán", "nam": "Capayán", "NOMBRE_ECO": "Chaco Seco", "precipitac": 500.0, "loc": "Balde de la Punta", "-Provincia": "Catamarca", "-Ecorregion": "Chaco Seco ", "-Departamento": "Capayán", "-Localidad cercana": "Balde de la Punta", "precipita": 542.3, "ppm75": 432.9, "TempMedia": 21.3, "Etopromedio": 3.98, "UD_VolDem": 46.9, "UD_VCU": 334, "UD_SupCap": 141, "UD_VolRes": 17.5, "SASI_VolDe": 74.2, "SASI_VCU": 346, "SASI_SupCa": 265, "SASI_VolRe": 30, "SASI_SupRe": 20.0, "SASI_ProRe": 1.5, "SASN_VolDe": 74.2, "SASN_VCU": 65, "SASN_SupCa": 1330, "SASN_VolRe": 29, "SASN_SupRe": 14.5, "SASN_ProRe": 2, "GSI_VolDem": 985.5, "GSI_VCU": 346, "GSI_SupCap2": 3350.0, "GSI_VolRes": 390, "GSI_SupRes": 195, "GSI_ProRes": 2, "GSN_VolDem": 985.5, "GSN_VCU": 65, "GSN_SupCap": 1.77, "GSN_VolRes": 400, "GSN_SupRes": 200, "GSN_ProRes": 2, "ECSI_VolDe": 8616.5, "ECSI_VCU": 346, "ECSI_SupCa": 2.91, "ECSI_VolRe": 4450, "ECSI_SupRe": 1780, "ECSI_ProRes": 2.5, "ECSN_VolDe": 8616.5, "ECSN_VCU": 65, "ECSN_SupCa": 15.5, "ECSN_VolRe": 4400, "ECSN_SupRe": 1760, "ECSN_PorRes": 2.5 }, "geometry": { "type": "Point", "coordinates": [-65.616160617394243, -29.528862439253771] } },
        { "type": "Feature", "properties": { "id": 37.0, "x": -65.495387947522843, "y": -28.179392472055149, "fna": "DepartamentoSanta Rosa", "nam": "Santa Rosa", "NOMBRE_ECO": "Chaco Seco", "precipitac": 1039.0, "loc": "Alijilan", "-Provincia": "Catamarca", "-Ecorregion": "Chaco Seco", "-Departamento": "Santa Rosa", "-Localidad cercana": "Alijilán", "precipita": 1039.2, "ppm75": 818.6, "TempMedia": 16.2, "Etopromedio": 3.42, "UD_VolDem": 51.9, "UD_VCU": 643, "UD_SupCap": 81, "UD_VolRes": 15.0, "SASI_VolDe": 59.6, "SASI_VCU": 655, "SASI_SupCa": 110, "SASI_VolRe": 30, "SASI_SupRe": 20.0, "SASI_ProRe": 1.5, "SASN_VolDe": 59.6, "SASN_VCU": 143, "SASN_SupCa": 470, "SASN_VolRe": 30, "SASN_SupRe": 15.0, "SASN_ProRe": 2, "GSI_VolDem": 554.8, "GSI_VCU": 655, "GSI_SupCap2": 920.0, "GSI_VolRes": 170, "GSI_SupRes": 85, "GSI_ProRes": 2, "GSN_VolDem": 554.8, "GSN_VCU": 143, "GSN_SupCap": 4200.0, "GSN_VolRes": 170, "GSN_SupRes": 96, "GSN_ProRes": 2, "ECSI_VolDe": 11685.7, "ECSI_VCU": 655, "ECSI_SupCa": 2.0, "ECSI_VolRe": 6150, "ECSI_SupRe": 2460, "ECSI_ProRes": 2.5, "ECSN_VolDe": 11685.7, "ECSN_VCU": 143, "ECSN_SupCa": 9.05, "ECSN_VolRe": 6150, "ECSN_SupRe": 2460, "ECSN_PorRes": 2.5 }, "geometry": { "type": "Point", "coordinates": [-65.495387947522843, -28.179392472055149] } },
        { "type": "Feature", "properties": { "id": 3.0, "x": -66.056742772686363, "y": -27.559697464272414, "fna": "Departamento Andalgalá", "nam": "Andalgalá", "NOMBRE_ECO": "Selva de las Yungas", "precipitac": 824.0, "loc": "Alumbrera", "-Provincia": "Catamarca", "-Ecorregion": "Selva de las Yungas", "-Departamento": "Andalgalá", "-Localidad cercana": "Alumbrera", "precipita": 824.1, "ppm75": 674.6, "TempMedia": 12.6, "Etopromedio": 2.63, "UD_VolDem": 44.8, "UD_VCU": 528, "UD_SupCap": 85, "UD_VolRes": 17.5, "SASI_VolDe": 36.6, "SASI_VCU": 540, "SASI_SupCa": 80, "SASI_VolRe": 23, "SASI_SupRe": 15.3, "SASI_ProRe": 1.5, "SASN_VolDe": 36.6, "SASN_VCU": 189, "SASN_SupCa": 225, "SASN_VolRe": 21, "SASN_SupRe": 10.5, "SASN_ProRe": 2, "GSI_VolDem": 927.1, "GSI_VCU": 540, "GSI_SupCap2": 1870.0, "GSI_VolRes": 380, "GSI_SupRes": 190, "GSI_ProRes": 2, "GSN_VolDem": 927.1, "GSN_VCU": 189, "GSN_SupCap": 5350.0, "GSN_VolRes": 390, "GSN_SupRes": 195, "GSN_ProRes": 2, "ECSI_VolDe": 19418.8, "ECSI_VCU": 540, "ECSI_SupCa": 3.92, "ECSI_VolRe": 11200, "ECSI_SupRe": 4480, "ECSI_ProRes": 2.5, "ECSN_VolDe": 19418.8, "ECSN_VCU": 189, "ECSN_SupCa": 11.2, "ECSN_VolRe": 11200, "ECSN_SupRe": 4480, "ECSN_PorRes": 2.5 }, "geometry": { "type": "Point", "coordinates": [-66.056742772686363, -27.559697464272414] } },
        { "type": "Feature", "properties": { "id": 27.0, "x": -67.410958056331538, "y": -26.057949510685024, "fna": "Departamento Antofagasta de la Sierra", "nam": "Antofagasta de la Sierra", "NOMBRE_ECO": "Puna", "precipitac": 100.0, "loc": "Antofagasta de la Sierra", "-Provincia": "Catamarca", "-Ecorregion": "Puna", "-Departamento": "Antofagasta de la Sierra", "-Localidad cercana": "Antofagasta de la Sierra", "precipita": 173.4, "ppm75": 83.7, "TempMedia": 9.3, "Etopromedio": 3.55, "UD_VolDem": 33.2, "UD_VCU": 56, "UD_SupCap": 600, "UD_VolRes": 21.5, "SASI_VolDe": 64.0, "SASI_VCU": 67, "SASI_SupCa": 1170, "SASI_VolRe": 40, "SASI_SupRe": 26.7, "SASI_ProRe": 1.5, "SASN_VolDe": 64.0, "SASN_VCU": 27, "SASN_SupCa": 2750, "SASN_VolRe": 38, "SASN_SupRe": 19.0, "SASN_ProRe": 2, "GSI_VolDem": 876.0, "GSI_VCU": 67, "GSI_SupCap2": 1.56, "GSI_VolRes": 550, "GSI_SupRes": 275, "GSI_ProRes": 2, "GSN_VolDem": 876.0, "GSN_VCU": 27, "GSN_SupCap": 3.75, "GSN_VolRes": 550, "GSN_SupRes": 275, "GSN_ProRes": 2, "ECSI_VolDe": 5981.1, "ECSI_VCU": 67, "ECSI_SupCa": 10.0, "ECSI_VolRe": 3150, "ECSI_SupRe": 1260, "ECSI_ProRes": 2.5, "ECSN_VolDe": 5981.1, "ECSN_VCU": 27, "ECSN_SupCa": 24.5, "ECSN_VolRe": 3150, "ECSN_SupRe": 1260, "ECSN_PorRes": 2.5 }, "geometry": { "type": "Point", "coordinates": [-67.410958056331538, -26.057949510685024] } },
        { "type": "Feature", "properties": { "id": 30.0, "x": -65.363564641808296, "y": -28.148890221305628, "fna": "Departamento Santa Rosa", "nam": "Santa Rosa", "NOMBRE_ECO": "Chaco Seco", "precipitac": 500.0, "loc": "Las Tunas", "-Provincia": "Catamarca", "-Ecorregion": "Chaco Seco", "-Departamento": "Santa Rosa", "-Localidad cercana": "Las Tunas", "precipita": 787.9, "ppm75": 642.3, "TempMedia": 17.7, "Etopromedio": 3.42, "UD_VolDem": 51.9, "UD_VCU": 52, "UD_SupCap": 104, "UD_VolRes": 16.0, "SASI_VolDe": 82.4, "SASI_VCU": 514, "SASI_SupCa": 190, "SASI_VolRe": 40, "SASI_SupRe": 26.7, "SASI_ProRe": 1.5, "SASN_VolDe": 82.4, "SASN_VCU": 64, "SASN_SupCa": 1450, "SASN_VolRe": 40, "SASN_SupRe": 20.0, "SASN_ProRe": 2, "GSI_VolDem": 554.8, "GSI_VCU": 514, "GSI_SupCap2": 1200.0, "GSI_VolRes": 180, "GSI_SupRes": 90, "GSI_ProRes": 2, "GSN_VolDem": 554.8, "GSN_VCU": 64, "GSN_SupCap": 9500.0, "GSN_VolRes": 180, "GSN_SupRes": 90, "GSN_ProRes": 2, "ECSI_VolDe": 53454.4, "ECSI_VCU": 514, "ECSI_SupCa": 11.0, "ECSI_VolRe": 14600, "ECSI_SupRe": 5840, "ECSI_ProRes": 2.5, "ECSN_VolDe": 53454.4, "ECSN_VCU": 64, "ECSN_SupCa": 88.0, "ECSN_VolRe": 14500, "ECSN_SupRe": 5800, "ECSN_PorRes": 2.5 }, "geometry": { "type": "Point", "coordinates": [-65.363564641808296, -28.148890221305628] } },
        { "type": "Feature", "properties": { "id": 4.0, "x": -67.026316606470289, "y": -27.649529254029019, "fna": "Departamento Belen", "nam": "Belen", "NOMBRE_ECO": "Monte de Sierras y Bolsones", "precipitac": 317.0, "loc": "Belen", "-Provincia": "Catamarca", "-Ecorregion": "Montes de Sierras y Bolsones", "-Departamento": "Belén", "-Localidad cercana": "Belén", "precipita": 317.9, "ppm75": 284.7, "TempMedia": 17.5, "Etopromedio": 3.32, "UD_VolDem": 48.0, "UD_VCU": 216, "UD_SupCap": 225, "UD_VolRes": 20.0, "SASI_VolDe": 74.7, "SASI_VCU": 228, "SASI_SupCa": 390, "SASI_VolRe": 36, "SASI_SupRe": 24.0, "SASI_ProRe": 1.5, "SASN_VolDe": 74.7, "SASN_VCU": 57, "SASN_SupCa": 1500, "SASN_VolRe": 35, "SASN_SupRe": 17.5, "SASN_ProRe": 2, "GSI_VolDem": 3798.1, "GSI_VCU": 228, "GSI_SupCap2": 1.87, "GSI_VolRes": 1650, "GSI_SupRes": 825, "GSI_ProRes": 2, "GSN_VolDem": 3798.1, "GSN_VCU": 57, "GSN_SupCap": 7.5, "GSN_VolRes": 1650, "GSN_SupRes": 825, "GSN_ProRes": 2, "ECSI_VolDe": 62831.4, "ECSI_VCU": 228, "ECSI_SupCa": 29.0, "ECSI_VolRe": 15500, "ECSI_SupRe": 6200, "ECSI_ProRes": 2.8, "ECSN_VolDe": 62831.4, "ECSN_VCU": 57, "ECSN_SupCa": 116.0, "ECSN_VolRe": 15500, "ECSN_SupRe": 6200, "ECSN_PorRes": 2.5 }, "geometry": { "type": "Point", "coordinates": [-67.026316606470289, -27.649529254029019] } }
    ]
}

