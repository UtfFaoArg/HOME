//Sistema Seguridad Alimentaria - SASN
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
        "<div id='Estilo1' align='center'><h3>Comparación de Modelos de Cosecha de Agua</h3></div>" +
        "<b> Departamento: </b>" + feature.properties.nam + " - " + "<b> Localidad: </b>" + feature.properties.loc + " - " + "<b> Ecorregión: </b>" + feature.properties.NOMBRE_ECO + "<br>" +
        "<hr class='hrx' align='center' noshade='noshade' size='1' width='100%' />" +
        "<table id='popupTableCosecha'  border='1' cellspacing='0' cellpadding='3' style='border-collapse: collapse; width: 100%; font-size: 10px;'>" +
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
        "<td>" + feature.properties.GSI_SupCap + " ha</td>" +
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
        "<button id='downloadCSVCosecha' style='padding: 5px 10px; font-size: 12px;'>Descargar CSV</button>"+ 
        
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
      //  console.error("Error: popupElement es null o undefined en descargarCSVCosecha.");
        return;
    }
    if (!properties) {
     //   console.error("Error: Las propiedades del feature (Departamento, Localidad, Ecorregión) no se pasaron a descargarCSVCosecha.");
        properties = {};
    }

    // Usar el ID de la tabla específica para esta capa
    const table = popupElement.querySelector("#popupTableCosecha"); // <--- CAMBIO AQUÍ
    if (!table) {
      //  console.error("Error: No se encontró la tabla en el popup en descargarCSVCosecha.");
        return;
    }
    console.log("Tabla encontrada:", table);

    let csvContent = [];

    // Añadir información de Departamento, Localidad, Ecorregión
    csvContent.push(`Departamento: ${properties.name || ''}`);
    csvContent.push(`Localidad: ${properties.loc || ''}`);
    csvContent.push(`Ecorregión: ${properties.NOMBRE_ECO || ''}`); // <--- CAMBIO AQUÍ: NOMBRE_EC
    csvContent.push(""); // Línea vacía para separación

    // Iterar sobre cada fila para construir el contenido CSV
    const rows = table.querySelectorAll("tr");
 //   console.log("Número de filas de la tabla encontradas:", rows.length);

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
  //  console.log("Contenido CSV generado (final para Cosecha de Agua):\n", csvString);

    if (csvString.trim().length === 0) {
  //      console.warn("El contenido CSV está vacío o solo contiene espacios en blanco. No se creará el archivo.");
        return;
    }

    const blob = new Blob(["\uFEFF" + csvString], { type: "text/csv;charset=utf-8;" }); // <--- CAMBIO CLAVE AQUÍ
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    // Cambiar el nombre del archivo para que sea específico de esta capa
    link.download = `Modelos_de_Cosecha_Agua_${properties.name || ''}_${properties.loc || ''}` // <--- CAMBIO AQUÍ
        .replace(/\s+/g, '_')       // Reemplaza espacios por guiones bajos
        .replace(/[^\w\-]/g, '');   // Elimina caracteres no válidos para archivos


 //   console.log("Intentando descargar archivo:", link.download);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log("Proceso de descarga completado (se hizo click en el enlace).");
}


/// DAtos de GeoJson con toda la info
var datamodelo =
{
"type": "FeatureCollection",
"name": "modelos_decosecha_agua",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "loc": "El Chorro", "Numero": "9", "Provincia": "Formosa", "NOMBRE_ECO": "Chaco Seco", "nam": "Ramón Lista", "Localidad cercana": "El Chorro", "precipita": 538.6, "ppm75": 486.8, "TempMedia": 23.9, "Etopromedio": 4.11, "UD_VolDem": 70.1, "UD_VCU": 377, "UD_SupCap": 186.0, "UD_VolRes": 27.0, "SASI_VolDe": 114.8, "SASI_VCU": 389, "SASI_SupCa": 390, "SASI_VolRe": 60, "SASI_SupRe": 40.0, "SASI_ProRe": 1.5, "SASN_VolDe": 114.8, "SASN_VCU": 97, "SASN_SupCa": 1560, "SASN_VolRe": 60, "SASN_SupRe": 40.0, "SASN_ProRe": 1.5, "GSI_VolDem": 1715.5, "GSI_VCU": 389, "GSI_SupCap": 5400, "GSI_VolRes": 800, "GSI_SupRes": 400.0, "GSI_ProRes": 2.0, "GSN_VolDem": 1715.5, "GSN_VCU": 97, "GSN_SupCap": 2.13, "GSN_VolRes": 770, "GSN_SupRes": 385, "GSN_ProRes": 2.0, "ECSI_VolDe": 813.4, "ECSI_VCU": 389, "ECSI_SupCa": 0.28, "ECSI_VolRe": 690, "ECSI_SupRe": 276, "ECSI_ProRes": 2.5, "ECSN_VolDe": 813.4, "ECSN_VCU": 97, "ECSN_SupCa": 1.15, "ECSN_VolRe": 665, "ECSN_SupRe": 266, "ECSN_PorRes": 2.5 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -62.306572014753385, -23.183829530874622 ] ] } },
{ "type": "Feature", "properties": { "loc": "Monte Quemado", "Numero": "10", "Provincia": "Formosa", "NOMBRE_ECO": "Chaco Húmedo", "nam": "Pirané", "Localidad cercana": "Monte Quemado", "precipita": 1165.7, "ppm75": 1023.4, "TempMedia": 22.2, "Etopromedio": 4.19, "UD_VolDem": 48.4, "UD_VCU": 807, "UD_SupCap": 60.5, "UD_VolRes": 10.6, "SASI_VolDe": 63.6, "SASI_VCU": 819, "SASI_SupCa": 100, "SASI_VolRe": 30, "SASI_SupRe": 20.0, "SASI_ProRe": 1.5, "SASN_VolDe": 63.6, "SASN_VCU": 102, "SASN_SupCa": 770, "SASN_VolRe": 26, "SASN_SupRe": 17.0, "SASN_ProRe": 1.53, "GSI_VolDem": 83.2, "GSI_VCU": 819, "GSI_SupCap": 113, "GSI_VolRes": 21, "GSI_SupRes": 10.5, "GSI_ProRes": 2.0, "GSN_VolDem": 83.2, "GSN_VCU": 102, "GSN_SupCap": 920.0, "GSN_VolRes": 20, "GSN_SupRes": 10, "GSN_ProRes": 2.0, "ECSI_VolDe": 2947.1, "ECSI_VCU": 819, "ECSI_SupCa": 0.4, "ECSI_VolRe": 960, "ECSI_SupRe": 384, "ECSI_ProRes": 2.5, "ECSN_VolDe": 2947.1, "ECSN_VCU": 102, "ECSN_SupCa": 3.2, "ECSN_VolRe": 960, "ECSN_SupRe": 384, "ECSN_PorRes": 2.5 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -59.268508669962856, -25.868744015470462 ] ] } },
{ "type": "Feature", "properties": { "loc": "Laguna Yema", "Numero": "12", "Provincia": "Formosa", "NOMBRE_ECO": "Chaco Seco", "nam": "Bermejo", "Localidad cercana": "Laguna Yema", "precipita": 707.8, "ppm75": 649.2, "TempMedia": 23.6, "Etopromedio": 3.79, "UD_VolDem": 48.5, "UD_VCU": 507, "UD_SupCap": 96.0, "UD_VolRes": 17.0, "SASI_VolDe": 77.6, "SASI_VCU": 519, "SASI_SupCa": 220, "SASI_VolRe": 65, "SASI_SupRe": 43.0, "SASI_ProRe": 1.51, "SASN_VolDe": 77.6, "SASN_VCU": 65, "SASN_SupCa": 1750, "SASN_VolRe": 65, "SASN_SupRe": 43.0, "SASN_ProRe": 1.51, "GSI_VolDem": 1416.2, "GSI_VCU": 519, "GSI_SupCap": 3200, "GSI_VolRes": 550, "GSI_SupRes": 275.0, "GSI_ProRes": 2.0, "GSN_VolDem": 1416.2, "GSN_VCU": 65, "GSN_SupCap": 2.51, "GSN_VolRes": 550, "GSN_SupRes": 275, "GSN_ProRes": 2.0, "ECSI_VolDe": 16913.8, "ECSI_VCU": 519, "ECSI_SupCa": 4.3, "ECSI_VolRe": 14800, "ECSI_SupRe": 5920, "ECSI_ProRes": 2.5, "ECSN_VolDe": 16913.8, "ECSN_VCU": 65, "ECSN_SupCa": 34.5, "ECSN_VolRe": 14800, "ECSN_SupRe": 5920, "ECSN_PorRes": 2.5 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -61.241622872198178, -24.255689109899453 ] ] } },
{ "type": "Feature", "properties": { "loc": "Zapalinqui", "Numero": "15", "Provincia": "Chaco", "NOMBRE_ECO": "Chaco Seco", "nam": "General Güemes", "Localidad cercana": "Zaparinqui", "precipita": 1022.3, "ppm75": 880.1, "TempMedia": 22.3, "Etopromedio": 4.25, "UD_VolDem": 48.3, "UD_VCU": 692, "UD_SupCap": 75.0, "UD_VolRes": 14.0, "SASI_VolDe": 40.0, "SASI_VCU": 704, "SASI_SupCa": 74, "SASI_VolRe": 20, "SASI_SupRe": 13.0, "SASI_ProRe": 1.53, "SASN_VolDe": 40.0, "SASN_VCU": 88, "SASN_SupCa": 590, "SASN_VolRe": 20, "SASN_SupRe": 13.0, "SASN_ProRe": 1.53, "GSI_VolDem": 1759.3, "GSI_VCU": 704, "GSI_SupCap": 3100, "GSI_VolRes": 550, "GSI_SupRes": 275.0, "GSI_ProRes": 2.0, "GSN_VolDem": 1759.3, "GSN_VCU": 88, "GSN_SupCap": 2.55, "GSN_VolRes": 500, "GSN_SupRes": 250, "GSN_ProRes": 2.0, "ECSI_VolDe": 12264.0, "ECSI_VCU": 704, "ECSI_SupCa": 2.25, "ECSI_VolRe": 9500, "ECSI_SupRe": 3800, "ECSI_ProRes": 2.5, "ECSN_VolDe": 12264.0, "ECSN_VCU": 88, "ECSN_SupCa": 18.0, "ECSN_VolRe": 9500, "ECSN_SupRe": 3800, "ECSN_PorRes": 2.5 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -60.561926701387492, -26.065792017441019 ] ] } },
{ "type": "Feature", "properties": { "loc": "Pampa del Indio", "Numero": "16", "Provincia": "Chaco", "NOMBRE_ECO": "Chaco Húmedo", "nam": "Libertador General San Martín", "Localidad cercana": "Pampa del Indio", "precipita": 1047.0, "ppm75": 870.6, "TempMedia": 22.2, "Etopromedio": 3.71, "UD_VolDem": 55.2, "UD_VCU": 684, "UD_SupCap": 82.0, "UD_VolRes": 14.0, "SASI_VolDe": 23.5, "SASI_VCU": 696, "SASI_SupCa": 44, "SASI_VolRe": 10, "SASI_SupRe": 7.0, "SASI_ProRe": 1.42, "SASN_VolDe": 23.5, "SASN_VCU": 218, "SASN_SupCa": 135, "SASN_VolRe": 10, "SASN_SupRe": 7.0, "SASN_ProRe": 1.42, "GSI_VolDem": 1365.1, "GSI_VCU": 696, "GSI_SupCap": 2180, "GSI_VolRes": 380, "GSI_SupRes": 190.0, "GSI_ProRes": 2.0, "GSN_VolDem": 1365.1, "GSN_VCU": 218, "GSN_SupCap": 7000.0, "GSN_VolRes": 385, "GSN_SupRes": 193, "GSN_ProRes": 1.99, "ECSI_VolDe": 4341.3, "ECSI_VCU": 696, "ECSI_SupCa": 0.82, "ECSI_VolRe": 3900, "ECSI_SupRe": 1560, "ECSI_ProRes": 2.5, "ECSN_VolDe": 4341.3, "ECSN_VCU": 218, "ECSN_SupCa": 2.55, "ECSN_VolRe": 3950, "ECSN_SupRe": 1580, "ECSN_PorRes": 2.5 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -59.942474261381598, -26.047847448204688 ] ] } },
{ "type": "Feature", "properties": { "loc": "Miraflores", "Numero": "14", "Provincia": "Chaco", "NOMBRE_ECO": "Chaco Seco", "nam": "General Güemes", "Localidad cercana": "Miraflores", "precipita": 828.3, "ppm75": 709.6, "TempMedia": 22.6, "Etopromedio": 3.71, "UD_VolDem": 48.3, "UD_VCU": 556, "UD_SupCap": 87.0, "UD_VolRes": 14.0, "SASI_VolDe": 23.5, "SASI_VCU": 568, "SASI_SupCa": 55, "SASI_VolRe": 11, "SASI_SupRe": 7.5, "SASI_ProRe": 1.46, "SASN_VolDe": 23.5, "SASN_VCU": 71, "SASN_SupCa": 440, "SASN_VolRe": 10, "SASN_SupRe": 7.0, "SASN_ProRe": 1.42, "GSI_VolDem": 1511.1, "GSI_VCU": 568, "GSI_SupCap": 3000, "GSI_VolRes": 480, "GSI_SupRes": 240.0, "GSI_ProRes": 2.0, "GSN_VolDem": 1511.1, "GSN_VCU": 71, "GSN_SupCap": 2.57, "GSN_VolRes": 450, "GSN_SupRes": 225, "GSN_ProRes": 2.0, "ECSI_VolDe": 11609.6, "ECSI_VCU": 568, "ECSI_SupCa": 2.6, "ECSI_VolRe": 10300, "ECSI_SupRe": 4120, "ECSI_ProRes": 2.5, "ECSN_VolDe": 11609.6, "ECSN_VCU": 71, "ECSN_SupCa": 22.0, "ECSN_VolRe": 10200, "ECSN_SupRe": 4080, "ECSN_PorRes": 2.5 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -60.930187454337172, -25.649424977763125 ] ] } },
{ "type": "Feature", "properties": { "loc": "Sauce", "Numero": "5", "Provincia": "Corrientes", "NOMBRE_ECO": "Espinal", "nam": "Sauce", "Localidad cercana": "Sauce", "precipita": 1234.7, "ppm75": 992.1, "TempMedia": 19.6, "Etopromedio": 3.87, "UD_VolDem": 53.4, "UD_VCU": 782, "UD_SupCap": 69.0, "UD_VolRes": 9.0, "SASI_VolDe": 15.2, "SASI_VCU": 794, "SASI_SupCa": 24, "SASI_VolRe": 8, "SASI_SupRe": 5.0, "SASI_ProRe": 1.6, "SASN_VolDe": 15.2, "SASN_VCU": 99, "SASN_SupCa": 200, "SASN_VolRe": 8, "SASN_SupRe": 5.0, "SASN_ProRe": 1.6, "GSI_VolDem": 1328.6, "GSI_VCU": 794, "GSI_SupCap": 1780, "GSI_VolRes": 230, "GSI_SupRes": 115.0, "GSI_ProRes": 2.0, "GSN_VolDem": 1328.6, "GSN_VCU": 99, "GSN_SupCap": 1.43, "GSN_VolRes": 235, "GSN_SupRes": 118, "GSN_ProRes": 1.99, "ECSI_VolDe": 666.3, "ECSI_VCU": 794, "ECSI_SupCa": 0.1, "ECSI_VolRe": 250, "ECSI_SupRe": 100, "ECSI_ProRes": 2.5, "ECSN_VolDe": 666.3, "ECSN_VCU": 99, "ECSN_SupCa": 0.75, "ECSN_VolRe": 275, "ECSN_SupRe": 110, "ECSN_PorRes": 2.5 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -58.75749801905669, -30.090105983653554 ] ] } },
{ "type": "Feature", "properties": { "loc": "Mercedes", "Numero": "3", "Provincia": "Corrientes", "NOMBRE_ECO": "Espinal", "nam": "Mercedes", "Localidad cercana": "Mercedes", "precipita": 1374.8, "ppm75": 1105.4, "TempMedia": 20.1, "Etopromedio": 4.02, "UD_VolDem": 53.1, "UD_VCU": 872, "UD_SupCap": 61.0, "UD_VolRes": 8.0, "SASI_VolDe": 32.7, "SASI_VCU": 884, "SASI_SupCa": 45, "SASI_VolRe": 12, "SASI_SupRe": 8.0, "SASI_ProRe": 1.5, "SASN_VolDe": 32.7, "SASN_VCU": 387, "SASN_SupCa": 105, "SASN_VolRe": 12, "SASN_SupRe": 8.0, "SASN_ProRe": 1.5, "GSI_VolDem": 4015.0, "GSI_VCU": 884, "GSI_SupCap": 4800, "GSI_VolRes": 640, "GSI_SupRes": 320.0, "GSI_ProRes": 2.0, "GSN_VolDem": 4015.0, "GSN_VCU": 387, "GSN_SupCap": 1.11, "GSN_VolRes": 650, "GSN_SupRes": 325, "GSN_ProRes": 2.0, "ECSI_VolDe": 3706.1, "ECSI_VCU": 884, "ECSI_SupCa": 0.47, "ECSI_VolRe": 1400, "ECSI_SupRe": 560, "ECSI_ProRes": 2.5, "ECSN_VolDe": 3706.1, "ECSN_VCU": 387, "ECSN_SupCa": 1.11, "ECSN_VolRe": 1300, "ECSN_SupRe": 520, "ECSN_PorRes": 2.5 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -58.074721702179865, -29.15825414385835 ] ] } },
{ "type": "Feature", "properties": { "loc": "Colonia Carolina", "Numero": "2", "Provincia": "Corrientes", "NOMBRE_ECO": "Esteros del Iberá", "nam": "Goya", "Localidad cercana": "Colonia Carolina", "precipita": 1227.9, "ppm75": 1017.2, "TempMedia": 20.4, "Etopromedio": 3.32, "UD_VolDem": 54.6, "UD_VCU": 802, "UD_SupCap": 70.0, "UD_VolRes": 13.0, "SASI_VolDe": 27.0, "SASI_VCU": 814, "SASI_SupCa": 38, "SASI_VolRe": 9, "SASI_SupRe": 6.0, "SASI_ProRe": 1.5, "SASN_VolDe": 27.0, "SASN_VCU": 254, "SASN_SupCa": 125, "SASN_VolRe": 9, "SASN_SupRe": 6.0, "SASN_ProRe": 1.5, "GSI_VolDem": 588.2, "GSI_VCU": 814, "GSI_SupCap": 780, "GSI_VolRes": 150, "GSI_SupRes": 75.0, "GSI_ProRes": 2.0, "GSN_VolDem": 588.2, "GSN_VCU": 254, "GSN_SupCap": 2550.0, "GSN_VolRes": 140, "GSN_SupRes": 70, "GSN_ProRes": 2.0, "ECSI_VolDe": 8025.7, "ECSI_VCU": 814, "ECSI_SupCa": 1.05, "ECSI_VolRe": 2050, "ECSI_SupRe": 820, "ECSI_ProRes": 2.5, "ECSN_VolDe": 8025.7, "ECSN_VCU": 254, "ECSN_SupCa": 3.4, "ECSN_VolRe": 2000, "ECSN_SupRe": 800, "ECSN_PorRes": 2.5 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -59.155074180013756, -29.160317970711485 ] ] } },
{ "type": "Feature", "properties": { "loc": "Herlitzka", "Numero": "1", "Provincia": "Corrientes", "NOMBRE_ECO": "Esteros del Iberá", "nam": "San Luis del Palmar", "Localidad cercana": "Herlitzka", "precipita": 1340.7, "ppm75": 1037.7, "TempMedia": 21.6, "Etopromedio": 4.16, "UD_VolDem": 56.0, "UD_VCU": 818, "UD_SupCap": 70.0, "UD_VolRes": 12.0, "SASI_VolDe": 23.0, "SASI_VCU": 830, "SASI_SupCa": 34, "SASI_VolRe": 10, "SASI_SupRe": 7.0, "SASI_ProRe": 1.42, "SASN_VolDe": 23.0, "SASN_VCU": 208, "SASN_SupCa": 140, "SASN_VolRe": 10, "SASN_SupRe": 7.0, "SASN_ProRe": 1.42, "GSI_VolDem": 2059.0, "GSI_VCU": 830, "GSI_SupCap": 2750, "GSI_VolRes": 500, "GSI_SupRes": 250.0, "GSI_ProRes": 2.0, "GSN_VolDem": 2059.0, "GSN_VCU": 208, "GSN_SupCap": 1.09, "GSN_VolRes": 500, "GSN_SupRes": 250, "GSN_ProRes": 2.0, "ECSI_VolDe": 4131.0, "ECSI_VCU": 830, "ECSI_SupCa": 0.57, "ECSI_VolRe": 1800, "ECSI_SupRe": 720, "ECSI_ProRes": 2.5, "ECSN_VolDe": 4131.0, "ECSN_VCU": 208, "ECSN_SupCa": 2.27, "ECSN_VolRe": 1800, "ECSN_SupRe": 720, "ECSN_PorRes": 2.5 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -58.258766984307549, -27.565191257039004 ] ] } },
{ "type": "Feature", "properties": { "loc": "Santo Tomé", "Numero": "4", "Provincia": "Corrientes", "NOMBRE_ECO": "Campos y Malezales", "nam": "Santo Tomé", "Localidad cercana": "Santo Tomé", "precipita": 1640.6, "ppm75": 1305.0, "TempMedia": 20.8, "Etopromedio": 3.4, "UD_VolDem": 51.4, "UD_VCU": 1032, "UD_SupCap": 50.0, "UD_VolRes": 6.0, "SASI_VolDe": 8.9, "SASI_VCU": 1044, "SASI_SupCa": 12, "SASI_VolRe": 6, "SASI_SupRe": 4.0, "SASI_ProRe": 1.5, "SASN_VolDe": 8.9, "SASN_VCU": 457, "SASN_SupCa": 27, "SASN_VolRe": 6, "SASN_SupRe": 4.0, "SASN_ProRe": 1.5, "GSI_VolDem": 781.1, "GSI_VCU": 1044, "GSI_SupCap": 780, "GSI_VolRes": 80, "GSI_SupRes": 40.0, "GSI_ProRes": 2.0, "GSN_VolDem": 781.1, "GSN_VCU": 457, "GSN_SupCap": 1780.0, "GSN_VolRes": 80, "GSN_SupRes": 40, "GSN_ProRes": 2.0, "ECSI_VolDe": 310.2, "ECSI_VCU": 1044, "ECSI_SupCa": 0.04, "ECSI_VolRe": 210, "ECSI_SupRe": 84, "ECSI_ProRes": 2.5, "ECSN_VolDe": 310.2, "ECSN_VCU": 457, "ECSN_SupCa": 0.08, "ECSN_VolRe": 200, "ECSN_SupRe": 80, "ECSN_PorRes": 2.5 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -56.048837792713179, -28.540623348875986 ] ] } },
{ "type": "Feature", "properties": { "loc": "Fachinal", "Numero": "8", "Provincia": "Misiones", "NOMBRE_ECO": "Campos y Malezales", "nam": "Capital", "Localidad cercana": "Fachinal", "precipita": 1897.5, "ppm75": 1557.6, "TempMedia": 21.0, "Etopromedio": 3.75, "UD_VolDem": 49.5, "UD_VCU": 1234, "UD_SupCap": 41.0, "UD_VolRes": 5.0, "SASI_VolDe": 8.9, "SASI_VCU": 1246, "SASI_SupCa": 10, "SASI_VolRe": 7, "SASI_SupRe": 5.0, "SASI_ProRe": 1.4, "SASN_VolDe": 8.9, "SASN_VCU": 545, "SASN_SupCa": 24, "SASN_VolRe": 6, "SASN_SupRe": 4.0, "SASN_ProRe": 1.5, "GSI_VolDem": 708.1, "GSI_VCU": 1246, "GSI_SupCap": 590, "GSI_VolRes": 75, "GSI_SupRes": 38.0, "GSI_ProRes": 1.97, "GSN_VolDem": 708.1, "GSN_VCU": 545, "GSN_SupCap": 1350.0, "GSN_VolRes": 75, "GSN_SupRes": 38, "GSN_ProRes": 1.97, "ECSI_VolDe": 163.7, "ECSI_VCU": 1246, "ECSI_SupCa": 0.02, "ECSI_VolRe": 125, "ECSI_SupRe": 50, "ECSI_ProRes": 2.5, "ECSN_VolDe": 163.7, "ECSN_VCU": 545, "ECSN_SupCa": 0.04, "ECSN_VolRe": 125, "ECSN_SupRe": 50, "ECSN_PorRes": 2.5 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -55.705017542150657, -27.628474554071119 ] ] } },
{ "type": "Feature", "properties": { "loc": "Corpus", "Numero": "7", "Provincia": "Misiones", "NOMBRE_ECO": "Selva Paranaense", "nam": "San Ignacio", "Localidad cercana": "Corpus", "precipita": 1863.6, "ppm75": 1517.2, "TempMedia": 21.2, "Etopromedio": 3.47, "UD_VolDem": 50.0, "UD_VCU": 1202, "UD_SupCap": 42.0, "UD_VolRes": 4.0, "SASI_VolDe": 8.0, "SASI_VCU": 1214, "SASI_SupCa": 10, "SASI_VolRe": 7, "SASI_SupRe": 4.0, "SASI_ProRe": 1.75, "SASN_VolDe": 8.0, "SASN_VCU": 455, "SASN_SupCa": 26, "SASN_VolRe": 7, "SASN_SupRe": 5.0, "SASN_ProRe": 1.4, "GSI_VolDem": 248.0, "GSI_VCU": 1214, "GSI_SupCap": 210, "GSI_VolRes": 21, "GSI_SupRes": 10.0, "GSI_ProRes": 2.1, "GSN_VolDem": 248.0, "GSN_VCU": 455, "GSN_SupCap": 565.0, "GSN_VolRes": 20, "GSN_SupRes": 10, "GSN_ProRes": 2.0, "ECSI_VolDe": 251.0, "ECSI_VCU": 1214, "ECSI_SupCa": 0.03, "ECSI_VolRe": 180, "ECSI_SupRe": 72, "ECSI_ProRes": 2.5, "ECSN_VolDe": 251.0, "ECSN_VCU": 455, "ECSN_SupCa": 0.07, "ECSN_VolRe": 180, "ECSN_SupRe": 72, "ECSN_PorRes": 2.5 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -55.506668363637758, -27.129105657518132 ] ] } },
{ "type": "Feature", "properties": { "loc": "Pozo Azul", "Numero": "6", "Provincia": "Misiones", "NOMBRE_ECO": "Selva Paranaense", "nam": "San Pedro", "Localidad cercana": "Pozo Azul", "precipita": 1935.3, "ppm75": 1719.7, "TempMedia": 20.3, "Etopromedio": 3.57, "UD_VolDem": 51.0, "UD_VCU": 1364, "UD_SupCap": 38.0, "UD_VolRes": 4.0, "SASI_VolDe": 5.8, "SASI_VCU": 1376, "SASI_SupCa": 6, "SASI_VolRe": 5, "SASI_SupRe": 3.3, "SASI_ProRe": 1.51, "SASN_VolDe": 5.8, "SASN_VCU": 774, "SASN_SupCa": 11, "SASN_VolRe": 5, "SASN_SupRe": 3.3, "SASN_ProRe": 1.51, "GSI_VolDem": 1606.0, "GSI_VCU": 1376, "GSI_SupCap": 1200, "GSI_VolRes": 110, "GSI_SupRes": 55.0, "GSI_ProRes": 2.0, "GSN_VolDem": 1606.0, "GSN_VCU": 774, "GSN_SupCap": 2120.0, "GSN_VolRes": 105, "GSN_SupRes": 53, "GSN_ProRes": 1.98, "ECSI_VolDe": 1288.2, "ECSI_VCU": 1376, "ECSI_SupCa": 0.11, "ECSI_VolRe": 940, "ECSI_SupRe": 376, "ECSI_ProRes": 2.5, "ECSN_VolDe": 1288.2, "ECSN_VCU": 774, "ECSN_SupCa": 0.2, "ECSN_VolRe": 940, "ECSN_SupRe": 376, "ECSN_PorRes": 2.5 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -54.151834302613729, -26.346503456582543 ] ] } },
{ "type": "Feature", "properties": { "loc": "Nueva Pompeya", "Numero": "13", "Provincia": "Chaco", "NOMBRE_ECO": "Chaco Seco", "nam": "General Güemes", "Localidad cercana": "Nueva Pompeya", "precipita": 709.2, "ppm75": 601.5, "TempMedia": 23.2, "Etopromedio": 3.99, "UD_VolDem": 48.3, "UD_VCU": 469, "UD_SupCap": 105.0, "UD_VolRes": 17.0, "SASI_VolDe": 83.6, "SASI_VCU": 481, "SASI_SupCa": 225, "SASI_VolRe": 40, "SASI_SupRe": 27.0, "SASI_ProRe": 1.48, "SASN_VolDe": 83.6, "SASN_VCU": 180, "SASN_SupCa": 600, "SASN_VolRe": 40, "SASN_SupRe": 27.0, "SASN_ProRe": 1.48, "GSI_VolDem": 2569.6, "GSI_VCU": 481, "GSI_SupCap": 6600, "GSI_VolRes": 950, "GSI_SupRes": 475.0, "GSI_ProRes": 2.0, "GSN_VolDem": 2569.6, "GSN_VCU": 180, "GSN_SupCap": 1.76, "GSN_VolRes": 950, "GSN_SupRes": 475, "GSN_ProRes": 2.0, "ECSI_VolDe": 6378.4, "ECSI_VCU": 481, "ECSI_SupCa": 1.6, "ECSI_VolRe": 3000, "ECSI_SupRe": 1200, "ECSI_ProRes": 2.5, "ECSN_VolDe": 6378.4, "ECSN_VCU": 180, "ECSN_SupCa": 4.5, "ECSN_VolRe": 2950, "ECSN_SupRe": 1180, "ECSN_PorRes": 2.5 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -61.483225587349324, -24.932300245122477 ] ] } },
{ "type": "Feature", "properties": { "loc": "Ismael Sanchez", "Numero": "11", "Provincia": "Formosa", "NOMBRE_ECO": "Chaco Húmedo", "nam": "Patiño", "Localidad cercana": "Isamel Sanchez", "precipita": 1052.3, "ppm75": 898.3, "TempMedia": 22.6, "Etopromedio": 3.76, "UD_VolDem": 49.2, "UD_VCU": 707, "UD_SupCap": 70.0, "UD_VolRes": 12.0, "SASI_VolDe": 47.4, "SASI_VCU": 719, "SASI_SupCa": 81, "SASI_VolRe": 21, "SASI_SupRe": 14.0, "SASI_ProRe": 1.5, "SASN_VolDe": 47.4, "SASN_VCU": 180, "SASN_SupCa": 330, "SASN_VolRe": 20, "SASN_SupRe": 13.0, "SASN_ProRe": 1.54, "GSI_VolDem": 2628.0, "GSI_VCU": 719, "GSI_SupCap": 4030, "GSI_VolRes": 700, "GSI_SupRes": 350.0, "GSI_ProRes": 2.0, "GSN_VolDem": 2628.0, "GSN_VCU": 180, "GSN_SupCap": 1.62, "GSN_VolRes": 700, "GSN_SupRes": 350, "GSN_ProRes": 2.0, "ECSI_VolDe": 1810.7, "ECSI_VCU": 719, "ECSI_SupCa": 0.28, "ECSI_VolRe": 600, "ECSI_SupRe": 240, "ECSI_ProRes": 2.5, "ECSN_VolDe": 1810.7, "ECSN_VCU": 180, "ECSN_SupCa": 1.12, "ECSN_VolRe": 610, "ECSN_SupRe": 244, "ECSN_PorRes": 2.5 }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -59.922582317692779, -25.351140657920045 ] ] } }
]
}

