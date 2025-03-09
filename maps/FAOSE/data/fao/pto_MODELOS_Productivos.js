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
    "name": "stgo_modelosProductivos",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "id": 9.0, "x": -63.650498813952296, "y": -26.9793291294122, "Provincia": "Santiao del estero", "NOMBRE_ECO": "Chaco seco", "name": "Figueroa", "loc": "Quebrachal", "M1_PersonasHogar": 3.27, "M1_Dem": 60.0, "M2_Sup": 150.0, "M2_Dem": 105.1, "M3_Sup": "0.5", "M3_Cultivo": "(0.5ha) Zapallo, (0.5ha) Sandia", "M3_Dem": "5033", "M4_Animal": "Gallinas(30), Porcinos(10), Caprinos(60), Vacas(60) ", "M4_Cantidad": "160", "M4_Dem": "1707", "Total_Dem": 6905.1 }, "geometry": { "type": "Point", "coordinates": [ -63.650498813952296, -26.9793291294122, 0.0 ] } },
    { "type": "Feature", "properties": { "id": 10.0, "x": -63.809790881860692, "y": -28.489417766093599, "Provincia": "Santiao del estero", "NOMBRE_ECO": "Chaco seco", "name": "Atamisqui", "loc": "Villa Atamisqui", "M1_PersonasHogar": 4.6, "M1_Dem": 84.0, "M2_Sup": 110.0, "M2_Dem": 80.3, "M3_Sup": "0.5", "M3_Cultivo": "(0.5ha) Zapallo, (0.5ha) Alflafa", "M3_Dem": "9116.8", "M4_Animal": "Gallinas(30), Caprinos(40), Vacas(2), Equinos(3)", "M4_Cantidad": "75", "M4_Dem": "223.9", "Total_Dem": 9504.99 }, "geometry": { "type": "Point", "coordinates": [ -63.8097908818607, -28.489417766093599, 0.0 ] } },
    { "type": "Feature", "properties": { "id": 11.0, "x": -62.184589584192899, "y": -27.9149549179857, "Provincia": "Santiao del estero", "NOMBRE_ECO": "Chaco húmedo", "name": "Juan Felipe Ibarra", "loc": "El Colorado", "M1_PersonasHogar": 3.3, "M1_Dem": 60.0, "M2_Sup": 150.0, "M2_Dem": 83.4, "M3_Sup": "0.5", "M3_Cultivo": "(0.5ha) Zapallo, (0.5ha) Sandia", "M3_Dem": "3768", "M4_Animal": "Gallinas(30), Porcinos(10), Caprinos(60), Vacas(60) ", "M4_Cantidad": "160", "M4_Dem": "1707", "Total_Dem": 5618.4 }, "geometry": { "type": "Point", "coordinates": [ -62.184589584192899, -27.9149549179857, 0.0 ] } },
    { "type": "Feature", "properties": { "id": 12.0, "x": -63.891799380125804, "y": -25.867428735810002, "Provincia": "Santiao del estero", "NOMBRE_ECO": "Chaco seco", "name": "Pellegrini", "loc": "Belgrano", "M1_PersonasHogar": 2.8, "M1_Dem": 50.0, "M2_Sup": 150.0, "M2_Dem": 107.2, "M3_Sup": "0.5", "M3_Cultivo": "(0.5ha) Zapallo; (0.5ha) Maíz Grano 2da, (0.5ha) Sorgo Forrajero", "M3_Dem": "4617", "M4_Animal": "Gallinas(15), Caprinos(65), Ovinos(15), Vacas(40), Equinos(3)", "M4_Cantidad": "138", "M4_Dem": "1243", "Total_Dem": 6017.2 }, "geometry": { "type": "Point", "coordinates": [ -63.891799380125804, -25.867428735810002, 0.0 ] } }
    ]
    }
    
