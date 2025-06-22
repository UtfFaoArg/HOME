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
    "name": "tucuman_modelosProductivos",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "id": 5.0, "x": -65.713518710385202, "y": -26.9318344081207, "provincia": "Tucumán", "ecoregion": "Selva de las Yungas", "precipitac": 2000.0, "depto": "Departamento", "name": "Tafí del Valle", "Provincia": "Tucumán", "NOMBRE_ECO": "Selva de las Yungas", "name": "Tafí del Valle", "loc": "El Mollar", "M1_PersonasHogar": 1.31, "M1_Dem": 23.9, "M2_Sup": 100.0, "M2_Dem": 18.9, "M3_Sup": "2", "M3_Cultivo": "Lechuga", "M3_Dem": "6316", "M4_Animal": "Ovinos (10), Caprinos (5), Porcinos ( 5), Gallinas (10)", "M4_Cantidad": "30", "M4_Dem": "81.1", "Total_Dem": 6439.9 }, "geometry": { "type": "Point", "coordinates": [ -65.713518710385202, -26.9318344081207, 0.0 ] } },
    { "type": "Feature", "properties": { "id": 6.0, "x": -65.644186246195304, "y": -27.746115721011599, "provincia": "Tucumán", "ecoregion": "Chaco Seco", "precipitac": 500.0, "depto": "Departamento", "name": "La Cocha", "Provincia": "Tucumán", "NOMBRE_ECO": "Chaco Seco", "name": "La Cocha", "loc": "Los Pizarros", "M1_PersonasHogar": 3.19, "M1_Dem": 58.0, "M2_Sup": 100.0, "M2_Dem": 55.1, "M3_Sup": "3", "M3_Cultivo": "Tabaco", "M3_Dem": "8258", "M4_Animal": "Porcinos (12)", "M4_Cantidad": "12", "M4_Dem": "87.6", "Total_Dem": 8458.7 }, "geometry": { "type": "Point", "coordinates": [ -65.644186246195304, -27.746115721011599, 0.0 ] } },
    { "type": "Feature", "properties": { "id": 7.0, "x": -65.441878054758007, "y": -26.387208651584899, "provincia": "Tucumán", "ecoregion": "Chaco Seco", "precipitac": 500.0, "depto": "Departamento", "name": "Trancas", "Provincia": "Tucumán", "NOMBRE_ECO": "Chaco Seco", "name": "Trancas", "loc": "La Higuera", "M1_PersonasHogar": 2.06, "M1_Dem": 38.0, "M2_Sup": 100.0, "M2_Dem": 53.8, "M3_Sup": "1", "M3_Cultivo": "Lechuga, Acelga, Apio, Tomate, Pimiento, Berenjena, Cebolla", "M3_Dem": "17019", "M4_Animal": "Vaca Lechera (15), Caprinos (30), Equinos (3), Vaca cría (30)", "M4_Cantidad": "78", "M4_Dem": "1434", "Total_Dem": 18544.8 }, "geometry": { "type": "Point", "coordinates": [ -65.441878054758007, -26.387208651584899, 0.0 ] } },
    { "type": "Feature", "properties": { "id": 8.0, "x": -64.895653876155293, "y": -26.6481419870099, "provincia": "Tucumán", "ecoregion": "Selva de las Yungas", "precipitac": 2000.0, "depto": "Departamento", "name": "Burruyacú", "Provincia": "Tucumán", "NOMBRE_ECO": "Selva de las Yungas", "name": "Burruyacú", "loc": "El Barco", "M1_PersonasHogar": 3.14, "M1_Dem": 57.0, "M2_Sup": 100.0, "M2_Dem": 56.0, "M3_Sup": "10", "M3_Cultivo": "Caña de Azucar", "M3_Dem": "14164", "M4_Animal": " Porcinos ( 10), Gallinas (40)", "M4_Cantidad": "40", "M4_Dem": "193", "Total_Dem": 14470.0 }, "geometry": { "type": "Point", "coordinates": [ -64.895653876155293, -26.6481419870099, 0.0 ] } },
    { "type": "Feature", "properties": { "id": 28.0, "x": -65.974881618550896, "y": -26.447910215578698, "provincia": "Tucumán", "ecoregion": "Monte de Sierras y Bolsones", "precipitac": 400.0, "depto": "Departamento", "name": "Tafí del Valle", "Provincia": "Tucumán", "NOMBRE_ECO": "Montes Sierras y Bolsones", "name": "Tafí del Valle", "loc": "Calimonte", "M1_PersonasHogar": 1.31, "M1_Dem": 23.9, "M2_Sup": 100.0, "M2_Dem": 122.7, "M3_Sup": "2", "M3_Cultivo": "Vid", "M3_Dem": "14164", "M4_Animal": "Ovinos (10), Caprinos (5), Porcinos ( 5), Gallinas (10)", "M4_Cantidad": "30", "M4_Dem": "81.1", "Total_Dem": 14391.7 }, "geometry": { "type": "Point", "coordinates": [ -65.974881618550896, -26.447910215578698, 0.0 ] } }
    ]
    }
    
