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
    "name": "jujuy_modelosProductivo",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
        { "type": "Feature", "properties": { "id": 13.0, "x": -66.699898892767195, "y": -23.0851878819619, "provincia": "Jujuy", "ecoregion": "Altos Andes", "precipitac": 50.0, "Provincia": "Jujuy", "NOMBRE_ECO": "Altos Andes", "name": "Susques", "loc": "El Toro", "M1_PersonasHogar": 2.38, "M1_Dem": 44.0, "M2_Sup": 100.0, "M2_Dem": 78.2, "M3_Sup": "N/A", "M3_Cultivo": "N/A", "M3_Dem": "N/A", "M4_Animal": "Ovinos(10), Caprinos(10), Lllamas(20)", "M4_Cantidad": "40", "M4_Dem": "80.256", "Total_Dem": 202.0 }, "geometry": { "type": "Point", "coordinates": [-66.699898892767195, -23.0851878819619, 0.0] } },
        { "type": "Feature", "properties": { "id": 16.0, "x": -65.132061106993902, "y": -24.3741421797864, "provincia": "Jujuy", "ecoregion": "Selva de las Yungas", "precipitac": 2000.0, "Provincia": "Jujuy", "NOMBRE_ECO": "Selva de las Yungas I", "name": "El Carmen", "loc": "Perico", "M1_PersonasHogar": 3.15, "M1_Dem": 57.4, "M2_Sup": 100.0, "M2_Dem": 77.4, "M3_Sup": "0.5", "M3_Cultivo": "(0.5has)Lechuga;(0.25has)Maíz;(0.5has)Cebolla;(0.23has)Tomate;(0.23has)Pimiento;(0.25has)Zapallo;(0.25has)Zapallito;(0.25has)Papa;(0.25has)Arveja;(0.25has)Habas", "M3_Dem": "19019.85", "M4_Animal": "Vacas(10), Equinos(3)", "M4_Cantidad": "13", "M4_Dem": "302.784", "Total_Dem": 19457.44 }, "geometry": { "type": "Point", "coordinates": [-65.132061106993902, -24.3741421797864, 0.0] } },
        { "type": "Feature", "properties": { "id": 18.0, "x": -64.298233363043906, "y": -23.976997682270301, "provincia": "Jujuy", "ecoregion": "Selva de las Yungas", "precipitac": 2000.0, "Provincia": "Jujuy", "NOMBRE_ECO": "Selva de las Yungas II", "name": "Santa Bárbara", "loc": "Palma Sola", "M1_PersonasHogar": 2.91, "M1_Dem": 53.0, "M2_Sup": 250.0, "M2_Dem": 147.64, "M3_Sup": "0.5", "M3_Cultivo": "(0.5has) Palta;(0.5has) Citricos;(0.5has) Mango", "M3_Dem": "9564.034", "M4_Animal": "Chanchas(8), Gallinas(15), Vacas(20)", "M4_Cantidad": "43", "M4_Dem": "556", "Total_Dem": 15872.0 }, "geometry": { "type": "Point", "coordinates": [-64.298233363043906, -23.976997682270301, 0.0] } },
        { "type": "Feature", "properties": { "id": 29.0, "x": -64.852652244119696, "y": -24.2001618574186, "provincia": "Jujuy", "ecoregion": "Chaco Seco", "precipitac": 500.0, "Provincia": "Jujuy", "NOMBRE_ECO": "Chaco Seco", "name": "San Pedro", "loc": "San Pedro", "M1_PersonasHogar": 2.94, "M1_Dem": 54.0, "M2_Sup": 250.0, "M2_Dem": 136.1, "M3_Sup": "0.5", "M3_Cultivo": "(0.5has)Palta;(0.5has)Cítricos;(0.5has)Mango", "M3_Dem": "9191.617", "M4_Animal": "Chanchas(7), Gallinas(20)", "M4_Cantidad": "27", "M4_Dem": "52.896", "Total_Dem": 14057.0 }, "geometry": { "type": "Point", "coordinates": [-64.852652244119696, -24.2001618574186, 0.0] } },
        { "type": "Feature", "properties": { "id": 35.0, "x": -65.463236071587701, "y": -22.132691734302199, "provincia": "Jujuy", "ecoregion": "Puna", "precipitac": 100.0, "Provincia": "Jujuy", "NOMBRE_ECO": "Puna", "name": "Yavi, Sta. Catalina, Rinconada, Cochinoca y Susques.", "loc": "Yavi", "M1_PersonasHogar": 2.13, "M1_Dem": 39.0, "M2_Sup": 200.0, "M2_Dem": 165.1, "M3_Sup": "0.5", "M3_Cultivo": "(0.5has)Papa;(0.5has)Maíz;(1.5has)Quinoa", "M3_Dem": "7207", "M4_Animal": "Ovinos(15), Caprinos(15), Llamas(15)", "M4_Cantidad": "30", "M4_Dem": "82.080", "Total_Dem": 7493.18 }, "geometry": { "type": "Point", "coordinates": [-65.463236071587701, -22.132691734302199, 0.0] } },
        { "type": "Feature", "properties": { "id": 36.0, "x": -65.4300184157118, "y": -23.654420630914, "provincia": "Jujuy", "ecoregion": "Monte de Sierras y Bolsones", "precipitac": 400.0, "Provincia": "Jujuy", "NOMBRE_ECO": "Montes Sierras y Bolsones", "name": "Tilcara", "loc": "Los Hornillos", "M1_PersonasHogar": 2.25, "M1_Dem": 41.0, "M2_Sup": 250.00, "M2_Dem": 219.2, "M3_Sup": "0.4", "M3_Cultivo": "(0.4has)Lechuga;(0.4has) Repollo;(0.4has)Tomate", "M3_Dem": "12443", "M4_Animal": "Vacas(40), Caprinos(50), Gallinas(15)", "M4_Cantidad": "105", "M4_Dem": "1140", "Total_Dem": 13843.2 }, "geometry": { "type": "Point", "coordinates": [-65.4300184157118, -23.654420630914, 0.0] } }
    ]
}


