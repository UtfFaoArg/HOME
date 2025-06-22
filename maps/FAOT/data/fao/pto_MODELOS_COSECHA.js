
var IconSASN =
{
    radius: 12,
    fillColor: "#1365fc",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};
function popupContentModelos(feature) {
    var tableHTML = (
        "<div id='Estilo1' align='center'><h3>Comparación de Modelos Productivos</h3></div>" +
        "<b> Departamento: </b>" + feature.properties.name + " - " + "<b> Localidad: </b>" + feature.properties.loc + " - " + "<b> Ecorregión: </b>" + feature.properties.NOMBRE_ECO + "<br>" +
        "<hr class='hrx' align='center' noshade='noshade' size='1' width='100%' />" +
        "<table id='popupTableCosecha' border='1' cellspacing='0' cellpadding='3' style='border-collapse: collapse; width: 100%; font-size: 10px;'>" +
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
        "<td>" + feature.properties.precipitac + " mm</td>" +
        "<td>" + feature.properties.precipitac + " mm</td>" +
        "<td>" + feature.properties.precipitac + " mm</td>" +
        "<td>" + feature.properties.precipitac + " mm</td>" +
        "<td>" + feature.properties.precipitac + " mm</td>" +
        "<td>" + feature.properties.precipitac + " mm</td>" +
        "<td>" + feature.properties.precipitac + " mm</td>" +
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
        "<button id='downloadCSVCosecha' style='padding: 5px 10px; font-size: 12px;'>Descargar CSV</button>" +

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


// Nueva función específica para la descarga CSV de la capa de Cosecha de Agua
function descargarCSVCosecha(popupElement, properties) {
    console.log("Iniciando descargarCSVCosecha...");
    if (!popupElement) {
        console.error("Error: popupElement es null o undefined en descargarCSVCosecha.");
        return;
    }
    if (!properties) {
        console.error("Error: Las propiedades del feature (Departamento, Localidad, Ecorregión) no se pasaron a descargarCSVCosecha.");
        properties = {};
    }

    // Usar el ID de la tabla específica para esta capa
    const table = popupElement.querySelector("#popupTableCosecha"); // <--- CAMBIO AQUÍ
    if (!table) {
        console.error("Error: No se encontró la tabla en el popup en descargarCSVCosecha.");
        return;
    }
    console.log("Tabla encontrada:", table);

    let csvContent = [];

    // Añadir información de Departamento, Localidad, Ecorregión
    csvContent.push(`Departamento: ${properties.name || ''}`);
    csvContent.push(`Localidad: ${properties.loc || ''}`);
    csvContent.push(`Ecorregión: ${properties.NOMBRE_EC || ''}`); // <--- CAMBIO AQUÍ: NOMBRE_EC
    csvContent.push(""); // Línea vacía para separación

    // Iterar sobre cada fila para construir el contenido CSV
    const rows = table.querySelectorAll("tr");
    console.log("Número de filas de la tabla encontradas:", rows.length);

    rows.forEach(row => {
        const cols = row.querySelectorAll("th, td");
        const rowData = [];
        cols.forEach(col => {
            let text = col.innerText;

            // Limpieza de texto (la misma lógica que ya funciona bien)
            text = text.replace(/m³/g, 'm3');
            text = text.replace(/m²/g, 'm2');
            text = text.replace(/°C/g, 'C'); // Reemplazar °C por C
            text = text.replace(/\^/g, '');
            text = text.trim();

            // Manejo de comillas y saltos de línea para CSV
            if (text.includes(',') || text.includes('\n') || text.includes('"')) {
                text = `"${text.replace(/"/g, '""')}"`;
            }

            rowData.push(text);
        });
        csvContent.push(rowData.join(","));
    });

    const csvString = csvContent.join("\n");
    console.log("Contenido CSV generado (final para Cosecha de Agua):\n", csvString);

    if (csvString.trim().length === 0) {
        console.warn("El contenido CSV está vacío o solo contiene espacios en blanco. No se creará el archivo.");
        return;
    }

    const blob = new Blob(["\uFEFF" + csvString], { type: "text/csv;charset=utf-8;" }); // <--- CAMBIO CLAVE AQUÍ
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    // Cambiar el nombre del archivo para que sea específico de esta capa
    link.download = `Modelos_de_Cosecha_Agua_${properties.name || ''}_${properties.loc || ''}` // <--- CAMBIO AQUÍ
        .replace(/\s+/g, '_')       // Reemplaza espacios por guiones bajos
        .replace(/[^\w\-]/g, '');   // Elimina caracteres no válidos para archivos


    console.log("Intentando descargar archivo:", link.download);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log("Proceso de descarga completado (se hizo click en el enlace).");
}



/// DAtos de GeoJson con toda la info
var datamodelo =
{
    "type": "FeatureCollection",
    "name": "tucuman_modeloscalculados",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "id": 5.0, "x": -65.713518710385202, "y": -26.9318344081207, "provincia": "Tucumán", "ecoregion": "Selva de las Yungas", "precipitac": 2000.0, "depto": "Departamento", "name": "Tafí del Valle", "Provincia": "Tucumán", "NOMBRE_ECO": "Selva de las Yungas", "nam": "Tafí del Valle", "loc": "El Mollar", "precipita": 942.6, "ppm75": 794.8, "TempMedia": 11.3, "Etopromedio": 2.65, "UD_VolDem": 23.9, "UD_VCU": 624, "UD_SupCap": 39, "UD_VolRes": 10.0, "SASI_VolDe": 18.9, "SASI_VCU": 636, "SASI_SupCa": 38, "SASI_VolRe": 18, "SASI_SupRe": 12.0, "SASI_ProRe": 1.5, "SASN_VolDe": 18.9, "SASN_VCU": 199, "SASN_SupCa": 115, "SASN_VolRe": 18, "SASN_SupRe": 9.0, "SASN_ProRe": 2.0, "GSI_VolDem": 81.1, "GSI_VCU": "636", "GSI_SupCap2": "140", "GSI_VolRes": "35", "GSI_SupRes": "17.5", "GSI_ProRes": "2", "GSN_VolDem": 81.1, "GSN_VCU": "199", "GSN_SupCap": "450", "GSN_VolRes": "35", "GSN_SupRes": "17.5", "GSN_ProRes": "2", "ECSI_VolDe": "6316.4", "ECSI_VCU": "636", "ECSI_SupCa": "1.14", "ECSI_VolRe": "5600", "ECSI_SupRe": "2240", "ECSI_ProRes": "2.5", "ECSN_VolDe": "6316.4", "ECSN_VCU": "199", "ECSN_SupCa": "3.63", "ECSN_VolRe": "5570", "ECSN_SupRe": "2228", "ECSN_PorRes": "2.5" }, "geometry": { "type": "Point", "coordinates": [ -65.713518710385202, -26.9318344081207, 0.0 ] } },
    { "type": "Feature", "properties": { "id": 6.0, "x": -65.644186246195304, "y": -27.746115721011599, "provincia": "Tucumán", "ecoregion": "Chaco Seco", "precipitac": 500.0, "depto": "Departamento", "name": "La Cocha", "Provincia": "Tucumán", "NOMBRE_ECO": "Chaco Seco", "nam": "La Cocha", "loc": "Los Pizarro", "precipita": 819.7, "ppm75": 746.8, "TempMedia": 16.1, "Etopromedio": 3.25, "UD_VolDem": 58.3, "UD_VCU": 585, "UD_SupCap": 100, "UD_VolRes": 23.1, "SASI_VolDe": 55.1, "SASI_VCU": 597, "SASI_SupCa": 115, "SASI_VolRe": 30, "SASI_SupRe": 20.0, "SASI_ProRe": 1.5, "SASN_VolDe": 55.1, "SASN_VCU": 112, "SASN_SupCa": 570, "SASN_VolRe": 30, "SASN_SupRe": 15.0, "SASN_ProRe": 2.0, "GSI_VolDem": 87.6, "GSI_VCU": "597", "GSI_SupCap2": "165", "GSI_VolRes": "40", "GSI_SupRes": "20", "GSI_ProRes": "2", "GSN_VolDem": 87.6, "GSN_VCU": "112", "GSN_SupCap": "870", "GSN_VolRes": "38", "GSN_SupRes": "19", "GSN_ProRes": "2", "ECSI_VolDe": "8258", "ECSI_VCU": "597", "ECSI_SupCa": "1.58", "ECSI_VolRe": "5950", "ECSI_SupRe": "2380", "ECSI_ProRes": "2.5", "ECSN_VolDe": "8258", "ECSN_VCU": "112", "ECSN_SupCa": "8.38", "ECSN_VolRe": "5940", "ECSN_SupRe": "2376", "ECSN_PorRes": "2.5" }, "geometry": { "type": "Point", "coordinates": [ -65.644186246195304, -27.746115721011599, 0.0 ] } },
    { "type": "Feature", "properties": { "id": 7.0, "x": -65.441878054758007, "y": -26.387208651584899, "provincia": "Tucumán", "ecoregion": "Chaco Seco", "precipitac": 500.0, "depto": "Departamento", "name": "Trancas", "Provincia": "Tucumán", "NOMBRE_ECO": "Chaco Seco", "nam": "Trancas", "loc": "La Higuera", "precipita": 719.0, "ppm75": 654.6, "TempMedia": 15.94, "Etopromedio": 3.25, "UD_VolDem": 37.7, "UD_VCU": 512, "UD_SupCap": 74, "UD_VolRes": 17.5, "SASI_VolDe": 53.8, "SASI_VCU": 524, "SASI_SupCa": 125, "SASI_VolRe": 34, "SASI_SupRe": 22.7, "SASI_ProRe": 1.5, "SASN_VolDe": 53.8, "SASN_VCU": 98, "SASN_SupCa": 630, "SASN_VolRe": 32, "SASN_SupRe": 16.0, "SASN_ProRe": 2.0, "GSI_VolDem": 1434.5, "GSI_VCU": "524", "GSI_SupCap2": "3100", "GSI_VolRes": "740", "GSI_SupRes": "370", "GSI_ProRes": "2", "GSN_VolDem": 1434.5, "GSN_VCU": "98", "GSN_SupCap": "1.64", "GSN_VolRes": "730", "GSN_SupRes": "365", "GSN_ProRes": "2", "ECSI_VolDe": "17017", "ECSI_VCU": "524", "ECSI_SupCa": "3.9", "ECSI_VolRe": "11500", "ECSI_SupRe": "4600", "ECSI_ProRes": "2.5", "ECSN_VolDe": "17017", "ECSN_VCU": "98", "ECSN_SupCa": "19.7", "ECSN_VolRe": "11800", "ECSN_SupRe": "4720", "ECSN_PorRes": "2.5" }, "geometry": { "type": "Point", "coordinates": [ -65.441878054758007, -26.387208651584899, 0.0 ] } },
    { "type": "Feature", "properties": { "id": 8.0, "x": -64.895653876155293, "y": -26.6481419870099, "provincia": "Tucumán", "ecoregion": "Selva de las Yungas", "precipitac": 2000.0, "depto": "Departamento", "name": "Burruyacú", "Provincia": "Tucumán", "NOMBRE_ECO": "Selva de las Yungas", "nam": "Burrucayú", "loc": "El Barco", "precipita": 881.8, "ppm75": 800.2, "TempMedia": 19.2, "Etopromedio": 3.72, "UD_VolDem": 57.0, "UD_VCU": 628, "UD_SupCap": 92, "UD_VolRes": 24.0, "SASI_VolDe": 56.0, "SASI_VCU": 640, "SASI_SupCa": 110, "SASI_VolRe": 33, "SASI_SupRe": 22.0, "SASI_ProRe": 1.5, "SASN_VolDe": 56.0, "SASN_VCU": 200, "SASN_SupCa": 330, "SASN_VolRe": 33, "SASN_SupRe": 16.5, "SASN_ProRe": 2.0, "GSI_VolDem": 76.0, "GSI_VCU": "640", "GSI_SupCap2": "140", "GSI_VolRes": "37", "GSI_SupRes": "19", "GSI_ProRes": "2", "GSN_VolDem": 76.0, "GSN_VCU": "200", "GSN_SupCap": "440", "GSN_VolRes": "35", "GSN_SupRes": "17.5", "GSN_ProRes": "2", "ECSI_VolDe": "86526", "ECSI_VCU": "640", "ECSI_SupCa": "16.2", "ECSI_VolRe": "70000", "ECSI_SupRe": "28000", "ECSI_ProRes": "2.5", "ECSN_VolDe": "86526", "ECSN_VCU": "200", "ECSN_SupCa": "51.7", "ECSN_VolRe": "70000", "ECSN_SupRe": "28000", "ECSN_PorRes": "2.5" }, "geometry": { "type": "Point", "coordinates": [ -64.895653876155293, -26.6481419870099, 0.0 ] } },
    { "type": "Feature", "properties": { "id": 28.0, "x": -65.974881618550896, "y": -26.447910215578698, "provincia": "Tucumán", "ecoregion": "Monte de Sierras y Bolsones", "precipitac": 400.0, "depto": "Departamento", "name": "Tafí del Valle", "Provincia": "Tucumán", "NOMBRE_ECO": "Montes de Sierras y Bolsones", "nam": "Tafí del Valle", "loc": "Calimonte", "precipita": 542.7, "ppm75": 479.1, "TempMedia": 15.5, "Etopromedio": 5.06, "UD_VolDem": 23.9, "UD_VCU": 371, "UD_SupCap": 65, "UD_VolRes": 10.0, "SASI_VolDe": 122.7, "SASI_VCU": 383, "SASI_SupCa": 385, "SASI_VolRe": 50, "SASI_SupRe": 33.3, "SASI_ProRe": 1.5, "SASN_VolDe": 122.7, "SASN_VCU": 96, "SASN_SupCa": 1480, "SASN_VolRe": 47, "SASN_SupRe": 23.5, "SASN_ProRe": 2.0, "GSI_VolDem": 81.1, "GSI_VCU": "383", "GSI_SupCap2": "250", "GSI_VolRes": "38", "GSI_SupRes": "19", "GSI_ProRes": "2", "GSN_VolDem": 81.1, "GSN_VCU": "96", "GSN_SupCap": "990", "GSN_VolRes": "37", "GSN_SupRes": "18.5", "GSN_ProRes": "2", "ECSI_VolDe": "14164.8", "ECSI_VCU": "383", "ECSI_SupCa": "3.8", "ECSI_VolRe": "1300", "ECSI_SupRe": "520", "ECSI_ProRes": "2.5", "ECSN_VolDe": "14164.8", "ECSN_VCU": "96", "ECSN_SupCa": "15.2", "ECSN_VolRe": "1250", "ECSN_SupRe": "500", "ECSN_PorRes": "2.5" }, "geometry": { "type": "Point", "coordinates": [ -65.974881618550896, -26.447910215578698, 0.0 ] } }
    ]
    }
    