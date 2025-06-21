//Sistema Seguridad Alimentaria - SASN
var IconModPrductivo =
{
    radius: 12,
    fillColor: "#fd5a5a",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};



function popupContentModProductivos(feature) {
    var tableHTML = (
        "<div id='Estilo1' align='center'><h3>Comparación de Modelos Productivos</h3></div>" +
        "<b> Departamento: </b>" + feature.properties.name + " - " + "<b> Localidad: </b>" + feature.properties.loc + " - " + "<b> Ecorregión: </b>" + feature.properties.NOMBRE_ECO + "<br>" +
        "<br>" +
        "<table id='popupTable' border='1' cellspacing='0' cellpadding='5' style='border-collapse: collapse; width: 100%; font-size: 11px;'>" +
        "<thead align='center'>" +
        "<tr>" +
        "<th>Modelo</th>" +
        "<th>Personas Hogar</th>" +
        "<th>Demanda (m³)</th>" +
        "<th>Superficie (m² o ha)</th>" +
        // "<th>Superficie (ha)</th>" +
        "<th>Tipo de Cultivos</th>" +
        "<th>Tipo de Animales</th>" +
        "<th>Cantidad de Animales</th>" +

        "</tr>" +
        "</thead>" +
        "<tbody align='center'>" +
        "<tr>" +
        "<td><b>Modelo I</b></td>" +
        "<td>" + feature.properties.M1_PersonasHogar + "</td>" +
        "<td>" + feature.properties.M1_Dem + " m³</td>" +
        "<td>-</td>" +
        "<td>-</td>" +
        "<td>-</td>" +
        "<td>-</td>" +

        "</tr>" +
        "<tr>" +
        "<td><b>Modelo II</b></td>" +
        "<td>-</td>" +
        "<td>" + feature.properties.M2_Dem + " m³</td>" +
        "<td>" + feature.properties.M2_Sup + " m²</td>" +
        "<td>-</td>" +
        "<td>-</td>" +
        "<td>-</td>" +

        "</tr>" +
        "<tr>" +
        "<td><b>Modelo III</b></td>" +
        "<td>-</td>" +
        "<td>" + feature.properties.M3_Dem + " m³</td>" +
        "<td>" + feature.properties.M3_Sup + " ha</td>" +
        "<td align='left'>" + feature.properties.M3_Cultivo + "</td>" +
        "<td>-</td>" +

        "</tr>" +
        "<tr>" +
        "<td><b>Modelo IV</b></td>" +
        "<td>-</td>" +
        "<td>" + feature.properties.M4_Dem + " m³</td>" +
        "<td>-</td>" +
        "<td>-</td>" +
        "<td align='left'>" + feature.properties.M4_Animal + "</td>" +
        "<td>" + feature.properties.M4_Cantidad + "</td>" +
        "</tr>" +
        "</tbody>" +
        "</table>" +
        "<br>" +
        "<b> Demanda Total : </b>" + feature.properties.Total_Dem + "  (m3)" +
        "<hr class='hrx' align='center' noshade='noshade' size='1' width='100%' />" +
        "<div >" +
        "<i > Modelo I - Agua para uso doméstico" + "<br>" +
        "Modelo II - Modelo de riego con un foco de seguridad alimentaria" + "<br>" +
        "Modelo III - Modelo de riego para producción con excedentes para comercialización" + "<br>" +
        "Modelo IV - Agua para bebida de ganado" + "<br>" +
        "</i>" +
        "</div>" +
        "<br>" +
        "<button id='downloadCSV' style='padding: 5px 10px; font-size: 12px;'>Descargar CSV</button>" +

        "</div>" +

        "  </div>"

    );
    return tableHTML;
}

// La función descargarCSV() se mantiene igual
function descargarCSV(popupElement, properties) {
    console.log("Iniciando descargarCSV...");
    if (!popupElement) {
        // console.error("Error: popupElement es null o undefined en descargarCSV.");
        return;
    }
    // Verificar si las propiedades se pasaron (útil para depuración)
    if (!properties) {
        // console.error("Error: Las propiedades del feature (Departamento, Localidad, Ecorregión) no se pasaron a descargarCSV.");
        properties = {}; // Si no se pasaron, usar un objeto vacío para evitar errores posteriores
    }

    const table = popupElement.querySelector("#popupTable"); // Asegúrate que tu tabla tiene id="popupTable"
    if (!table) {
        // console.error("Error: No se encontró la tabla en el popup en descargarCSV.");
        return;
    }
    // console.log("Tabla encontrada:", table);

    let csvContent = [];
    // AÑADIR LAS NUEVAS LÍNEAS DE CABECERA AQUÍ, antes de los datos de la tabla
    csvContent.push(`Departamento: ${properties.name || ''}`);
    csvContent.push(`Localidad: ${properties.loc || ''}`);
    csvContent.push(`Ecorregion: ${properties.NOMBRE_ECO || ''}`);
    csvContent.push(""); // Línea vacía para separar la información de la tabla (opcional, puedes quitarla)

    // codigo para tomar los datos de la tabla
    const rows = table.querySelectorAll("tr");
    // console.log("Número de filas encontradas:", rows.length);

    if (rows.length === 0) {
        // console.warn("No se encontraron filas en la tabla para exportar.");


    }

    rows.forEach(row => {
        const cols = row.querySelectorAll("th, td");
        const rowData = [];
        cols.forEach(col => {
            let text = col.innerText;

            // Limpieza de texto (la que ya funciona bien)
            text = text.replace(/m³/g, 'm3'); // Reemplazar 'm³' por 'm3'
            text = text.replace(/m²/g, 'm2'); // Reemplazar 'm²' por 'm2'
            text = text.replace(/\^/g, ''); // Eliminar cualquier carácter `^` suelto
            text = text.trim(); // Eliminar espacios al principio/final

            // Manejo de comillas y saltos de línea para CSV
            if (text.includes(',') || text.includes('\n') || text.includes('"')) {
                text = `"${text.replace(/"/g, '""')}"`; // Escapar comillas dobles y encerrar
            }

            rowData.push(text);
        });
        csvContent.push(rowData.join(","));
    });

    const csvString = csvContent.join("\n");
    // console.log("Contenido CSV generado:\n", csvString);

    if (csvString.trim().length === 0) {
        // console.warn("El contenido CSV está vacío o solo contiene espacios en blanco. No se creará el archivo.");
        return;
    }

    const blob = new Blob(["\uFEFF" + csvString], { type: "text/csv;charset=utf-8;" }); // <--- CAMBIO CLAVE AQUÍ
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `Modelos_Productivos_${properties.name || ''}_${properties.loc || ''}`
        .replace(/\s+/g, '_')       // Reemplaza espacios por guiones bajos
        .replace(/[^\w\-]/g, '');   // Elimina caracteres no válidos para archivos

    // console.log("Intentando descargar archivo:", link.download);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log("Proceso de descarga completado (se hizo click en el enlace).");
}

/// DAtos de GeoJson con toda la info
var datamodeloProductivo =
{
    "type": "FeatureCollection",
    "name": "salta_modelosProductivos",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
        { "type": "Feature", "properties": { "id": 19.0, "x": -62.712407534539501, "y": -22.279349394774901, "Provincia": "Salta", "NOMBRE_ECO": "Chaco Seco", "name": "Rivadavia", "loc": "Santa Victoria Este", "M1_PersonasHogar": 3.25, "M1_Dem": 59.0, "M2_Sup": 150.0, "M2_Dem": 106.9, "M3_Sup": "1.2", "M3_Cultivo": "(1.2has) Batata;(1.2has)Zapallo;(1.2has)Maíz;(0.4has)Tomate", "M3_Dem": "21145.25", "M4_Animal": "Porcinos (15), Gallinas (15), Caprinos (30), Vacas (23)", "M4_Cantidad": "83", "M4_Dem": "769.2", "Total_Dem": 22080.35 }, "geometry": { "type": "Point", "coordinates": [-62.712407534539501, -22.279349394774901, 0.0] } },
        { "type": "Feature", "properties": { "id": 20.0, "x": -63.789162297789197, "y": -22.495989459224901, "Provincia": "Salta", "NOMBRE_ECO": "Selva de las Yungas II", "name": "General San Martin", "loc": "Tartagal", "M1_PersonasHogar": 3.07, "M1_Dem": 56.0, "M2_Sup": 150.0, "M2_Dem": 84.4, "M3_Sup": "0.125", "M3_Cultivo": "(0.125has)Lechuga;(0.125has)Tomate", "M3_Dem": "474", "M4_Animal": "Gallinas (60), Porcinos (10)", "M4_Cantidad": "70", "M4_Dem": "78", "Total_Dem": 7844.0 }, "geometry": { "type": "Point", "coordinates": [-63.789162297789197, -22.495989459224901, 0.0] } },
        { "type": "Feature", "properties": { "id": 21.0, "x": -63.754264206012003, "y": -22.2425872745006, "Provincia": "Salta", "NOMBRE_ECO": "Selva de las Yungas I", "name": "General San Martin", "loc": "Aguaray", "M1_PersonasHogar": 3.07, "M1_Dem": 56.0, "M2_Sup": 150.0, "M2_Dem": 78.6, "M3_Sup": "0.125", "M3_Cultivo": "(0.125has) Lechuga; (0.125has)Tomate", "M3_Dem": "410", "M4_Animal": "Gallinas (60), Porcinos (10), Vacas (28)", "M4_Cantidad": "98", "M4_Dem": "773", "Total_Dem": 7592.0 }, "geometry": { "type": "Point", "coordinates": [-63.754264206012003, -22.2425872745006, 0.0] } },
        { "type": "Feature", "properties": { "id": 22.0, "x": -65.014757401158803, "y": -22.2825448839363, "Provincia": "Salta", "NOMBRE_ECO": "Puna", "name": "Santa Victoria", "loc": "Acoyte", "M1_PersonasHogar": 2.03, "M1_Dem": 37.0, "M2_Sup": 200.0, "M2_Dem": 88.8, "M3_Sup": "0.4", "M3_Cultivo": "(0.4 ha) Papa; (0.4ha) Maíz; (0.2ha) Haba", "M3_Dem": "2418.19", "M4_Animal": "Caprinos (30), Ovinos (30), Equinos (2), Vacas (20), Gallinas (15)", "M4_Cantidad": "97", "M4_Dem": "709.4", "Total_Dem": 3253.4 }, "geometry": { "type": "Point", "coordinates": [-65.014757401158803, -22.2825448839363, 0.0] } },
        { "type": "Feature", "properties": { "id": 23.0, "x": -63.9737155948214, "y": -24.3830909491369, "Provincia": "Salta", "NOMBRE_ECO": "Chaco Seco", "name": "Anta", "loc": "Luis Burela", "M1_PersonasHogar": 3.16, "M1_Dem": 58.0, "M2_Sup": 160.0, "M2_Dem": 96.5, "M3_Sup": "1.75", "M3_Cultivo": "(1.75has)Zapallo;(1.75has)Maíz;(1.75has)Cebolla;(1.5has)Sandía", "M3_Dem": "20377", "M4_Animal": "Porcinos (10), Caprinos (20), Ovinos (12), Vacas (40)", "M4_Cantidad": "80", "M4_Dem": "1159.2", "Total_Dem": 21690.7 }, "geometry": { "type": "Point", "coordinates": [-63.9737155948214, -24.3830909491369, 0.0] } },
        { "type": "Feature", "properties": { "id": 24.0, "x": -66.2418953616708, "y": -25.324944280488101, "Provincia": "Salta", "NOMBRE_ECO": "Montes Sierras y Bolsones", "name": "Molinos", "loc": "Seclantás", "M1_PersonasHogar": 2.76, "M1_Dem": 50.0, "M2_Sup": 150.0, "M2_Dem": 110.6, "M3_Sup": "1", "M3_Cultivo": "(1has) Cebolla;(1has)Pimiento", "M3_Dem": "4434.29", "M4_Animal": "Vacas (10), Caprinos (80), Ovinos (17)", "M4_Cantidad": "107", "M4_Dem": "531.14", "Total_Dem": 18215.0 }, "geometry": { "type": "Point", "coordinates": [-66.2418953616708, -25.324944280488101, 0.0] } },
        { "type": "Feature", "properties": { "id": 26.0, "x": -62.896635120765701, "y": -23.4791533053492, "Provincia": "Salta", "NOMBRE_ECO": "Chaco Seco", "name": "Rivadavia", "loc": "Coronel Solá", "M1_PersonasHogar": 3.25, "M1_Dem": 59.0, "M2_Sup": 150.0, "M2_Dem": 93.5, "M3_Sup": "1.2", "M3_Cultivo": "(1.2has) Batata; (1.2has) Zapallo; (1.2has) Maíz; (0.4has)Tomate", "M3_Dem": "18928", "M4_Animal": "Porcinos (45), Gallinas (15), Caprinos (70), Vacas (38)", "M4_Cantidad": "168", "M4_Dem": "1477", "Total_Dem": 20557.5 }, "geometry": { "type": "Point", "coordinates": [-62.896635120765701, -23.4791533053492, 0.0] } }
    ]
}

