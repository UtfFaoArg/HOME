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
    link.download = `Modelos_Productivos_${properties.name || ''}_${properties.loc || ''}` // <--- CAMBIO AQUÍ
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
    "name": "catamarca_modelosProductivos",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "id": 1.0, "x": -65.616160617394243, "y": -29.528862439253771, "fna": "Departamento Capayán", "nam": "Capayán", "NOMBRE_ECO": "Chaco Seco", "precipitac": 500.0, "Provincia": "Catamarca", "NOMBRE_ECO": "Chaco Seco", "name": "Capayan", "loc": "Balde de la Punta", "M1_PersonasHogar": 2.57, "M1_Dem": 47.0, "M2_Sup": 100.0, "M2_Dem": 74.2, "M3_Sup": "0.5", "M3_Cultivo": "(0.5has)Maíz;(0.5has)Zapallo;(0.5has)Tomate", "M3_Dem": "8616.5", "M4_Animal": " Caprinos (25), Vacas(25),", "M4_Cantidad": "150", "M4_Dem": "9723.1", "Total_Dem": 18460.8 }, "geometry": { "type": "Point", "coordinates": [ -65.616160617394243, -29.528862439253771 ] } },
    { "type": "Feature", "properties": { "id": 37.0, "x": -65.495387947522843, "y": -28.179392472055149, "fna": "DepartamentoSanta Rosa", "nam": "Santa Rosa", "NOMBRE_ECO": "Chaco Seco", "precipitac": 1039.0, "Provincia": null, "NOMBRE_ECO": null, "name": null, "loc": null, "M1_PersonasHogar": null, "M1_Dem": null, "M2_Sup": null, "M2_Dem": null, "M3_Sup": null, "M3_Cultivo": null, "M3_Dem": null, "M4_Animal": null, "M4_Cantidad": null, "M4_Dem": null, "Total_Dem": null }, "geometry": { "type": "Point", "coordinates": [ -65.495387947522843, -28.179392472055149 ] } },
    { "type": "Feature", "properties": { "id": 3.0, "x": -66.056742772686363, "y": -27.559697464272414, "fna": "Departamento Andalgalá", "nam": "Andalgalá", "NOMBRE_ECO": "Selva de las Yungas", "precipitac": 824.0, "Provincia": "Catamarca", "NOMBRE_ECO": "Selva de las Yungas", "name": "Andalgalá", "loc": "Alumbrera", "M1_PersonasHogar": 2.46, "M1_Dem": 45.0, "M2_Sup": 100.0, "M2_Dem": 36.0, "M3_Sup": "3", "M3_Cultivo": "Alfalfa", "M3_Dem": "11716", "M4_Animal": "Vacas(35), Ovinos(20)", "M4_Cantidad": "55", "M4_Dem": "927.1", "Total_Dem": 20427.0 }, "geometry": { "type": "Point", "coordinates": [ -66.056742772686363, -27.559697464272414 ] } },
    { "type": "Feature", "properties": { "id": 27.0, "x": -67.410958056331538, "y": -26.057949510685024, "fna": "Departamento Antofagasta de la Sierra", "nam": "Antofagasta de la Sierra", "NOMBRE_ECO": "Puna", "precipitac": 100.0, "Provincia": "Catamarca", "NOMBRE_ECO": "Puna", "name": "Antofagasta de las Sierras", "loc": "Antofagasta de las Sierras", "M1_PersonasHogar": 1.83, "M1_Dem": 33.0, "M2_Sup": 100.0, "M2_Dem": 64.0, "M3_Sup": "0.25", "M3_Cultivo": "(0.25hs)Papa Andina;(0.25has)Quinoa;(0.25has)Acelga;(0.25has)Maíz", "M3_Dem": "5981", "M4_Animal": " Ovinos(200), Llamas(200)", "M4_Cantidad": "400", "M4_Dem": "876", "Total_Dem": 6954.0 }, "geometry": { "type": "Point", "coordinates": [ -67.410958056331538, -26.057949510685024 ] } },
    { "type": "Feature", "properties": { "id": 30.0, "x": -65.363564641808296, "y": -28.148890221305628, "fna": "Departamento Santa Rosa", "nam": "Santa Rosa", "NOMBRE_ECO": "Chaco Seco", "precipitac": 500.0, "Provincia": "Catamarca", "NOMBRE_ECO": "Chaco  Seco", "name": "Santa Rosa", "loc": "Las Tunas", "M1_PersonasHogar": 2.84, "M1_Dem": 52.0, "M2_Sup": 150.0, "M2_Dem": 82.4, "M3_Sup": "3", "M3_Cultivo": "(3has) Citricola", "M3_Dem": "17796", "M4_Animal": " Caprinos(20), Vacas(20)", "M4_Cantidad": "40", "M4_Dem": "555", "Total_Dem": 54142.0 }, "geometry": { "type": "Point", "coordinates": [ -65.363564641808296, -28.148890221305628 ] } },
    { "type": "Feature", "properties": { "id": 4.0, "x": -67.026316606470289, "y": -27.649529254029019, "fna": "Departamento Belen", "nam": "Belen", "NOMBRE_ECO": "Monte de Sierras y Bolsones", "precipitac": 317.0, "Provincia": "Catamarca", "NOMBRE_ECO": "Montes Sierras y Bolsones", "name": "Belén", "loc": "Belén", "M1_PersonasHogar": 2.63, "M1_Dem": 48.0, "M2_Sup": 100.0, "M2_Dem": 74.7, "M3_Sup": "0.5", "M3_Cultivo": "(0.5has)Lechuga;(0.5has)Tomate;(0.5has)Maíz;(0.5has)Cebolla;(0.5has)Sandía", "M3_Dem": "12972.9", "M4_Animal": " Caprinos(25), Vacas(150), Gallinas(25)", "M4_Cantidad": "200", "M4_Dem": "3798", "Total_Dem": 66752.0 }, "geometry": { "type": "Point", "coordinates": [ -67.026316606470289, -27.649529254029019 ] } }
    ]
    }
    
