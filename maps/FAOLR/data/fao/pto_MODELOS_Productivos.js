//Sistema Seguridad Alimentaria - SASN
var IconModPrductivo =
    L.icon({
        iconUrl: 'images/marcador.png',
        iconSize: [25, 25],
        iconAnchor: [17, 42],
        popupAnchor: [1, -32],
        className: 'custom-marker-green',
    });
    function popupContentModProductivos(feature) {
        var tableHTML = (
            "<div id='Estilo1' align='center'><h3>Comparación de Modelos Productivos</h3></div>" +
            "<b> Departamento: </b>" + feature.properties.name + " - " + "<b> Localidad: </b>" + feature.properties.loc + " - " + "<b> Ecorregión: </b>" + feature.properties.NOMBRE_ECO + "<br>" +
            "<br>" +
            "<table border='1' cellspacing='0' cellpadding='5' style='border-collapse: collapse; width: 100%; font-size: 11px;'>" +
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
            "<button onclick='descargarCSV()' style='padding: 5px 10px; font-size: 12px;'>Descargar CSV</button>" +
    
            "</div>" +
    
            "  </div>"
    
        );
        return tableHTML;
    }


function bindPopupWithCSV(feature, layer) {
    var content = popupContentModProductivos(feature); // Contenido del popup con la tabla
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
var datamodeloProductivo =
{
    "type": "FeatureCollection",
    "name": "larioja_modelosProductivos",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "id": 31, "data": "Comunidad Guandacol", "Provincia": "La Rioja", "NOMBRE_ECO": "Montes, Sierras y Bolsones", "name": "General Felipe Varela", "loc": "El Zapallar", "M1_PersonasHogar": 2.49, "M1_Dem": 45.0, "M2_Sup": 100.0, "M2_Dem": 85.3, "M3_Sup": "1.2", "M3_Cultivo": "Nogales", "M3_Dem": "10796", "M4_Animal": "N/A", "M4_Cantidad": "N/A", "M4_Dem": "N/A", "Total_Dem": 10926.0 }, "geometry": { "type": "Point", "coordinates": [ -68.552453567160796, -29.531081723071427 ] } },
    { "type": "Feature", "properties": { "id": 32, "data": "Aguango", "Provincia": "La Rioja", "NOMBRE_ECO": "Chaco Seco", "name": "Independencia", "loc": "Aguango", "M1_PersonasHogar": 2.48, "M1_Dem": 45.0, "M2_Sup": 100.0, "M2_Dem": 81.3, "M3_Sup": "N/A", "M3_Cultivo": "N/A", "M3_Dem": "N/A", "M4_Animal": "Bovinos(40), Caprinos(50), Ovinos(5)", "M4_Cantidad": "95", "M4_Dem": "1153.40", "Total_Dem": 1280.0 }, "geometry": { "type": "Point", "coordinates": [ -67.359134829820434, -30.444810713032691 ] } },
    { "type": "Feature", "properties": { "id": 33, "data": "Patquia", "Provincia": "La Rioja", "NOMBRE_ECO": "Chaco Seco", "name": "Independencia", "loc": "Balde del Milagro", "M1_PersonasHogar": 2.48, "M1_Dem": 45.0, "M2_Sup": 100.0, "M2_Dem": 92.1, "M3_Sup": "N/A", "M3_Cultivo": "N/A", "M3_Dem": "N/A", "M4_Animal": "Bovinos(20), Caprinos(10)", "M4_Cantidad": "30", "M4_Dem": "525.6", "Total_Dem": 663.0 }, "geometry": { "type": "Point", "coordinates": [ -66.897256738101035, -30.038237634567697 ] } },
    { "type": "Feature", "properties": { "id": 34, "data": "Puesto El Tala - Paraje Angel Diaz", "Provincia": "La Rioja", "NOMBRE_ECO": "Chaco Seco", "name": "Capital", "loc": "Angel Díaz", "M1_PersonasHogar": 2.68, "M1_Dem": 49.0, "M2_Sup": 100.0, "M2_Dem": 91.4, "M3_Sup": "N/A", "M3_Cultivo": "N/A", "M3_Dem": "N/A", "M4_Animal": "Bovinos(10), Ovinos(5)", "M4_Cantidad": "15", "M4_Dem": "262.8", "Total_Dem": 403.2 }, "geometry": { "type": "Point", "coordinates": [ -66.74701970645603, -29.292139639095431 ] } }
    ]
    }
    
    
