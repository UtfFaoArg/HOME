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
        "<div id='Estilo1' align='center'><h3>Comparación de Modelos Cosecha de Agua</h3></div>" +
        "<b> Departamento: </b>" + feature.properties.name + " - " + "<b> Localidad: </b>" + feature.properties.loc + " - " + "<b> Ecorregión: </b>" + feature.properties.NOMBRE_ECO + "<br>" +
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
    "name": "stgo_modeloscalculados_v2",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "id": 9.0, "x": -63.650498813952296, "y": -26.9793291294122, "provincia": "Santiago del Estero", "ecoregion": "Chaco Seco", "precipita": 500.0, "depto": "Departamento", "name": "Figueroa", "Provincia": "Santiago del Estero", "NOMBRE_ECO": "Chaco Seco", "nam": "Figueroa", "loc": "Quebrachal", "precipita": 705.8, "ppm75": 647.1, "TempMedia": 27.9, "Etopromedio": 4.1, "UD_VolDem": 60.0, "UD_VCU": 509, "UD_SupCap": 120, "UD_VolRes": 25.0, "SASI_VolDe": 105.0, "SASI_VCU": 518, "SASI_SupCa": 290, "SASI_VolRe": 60, "SASI_SupRe": 40.0, "SASI_ProRe": 1.5, "SASN_VolDe": 105.0, "SASN_VCU": 291, "SASN_SupCa": 520, "SASN_VolRe": 60, "SASN_SupRe": 40.0, "SASN_ProRe": 1.5, "GSI_VolDem": 1707.0, "GSI_VCU": "518", "GSI_SupCap2": "4400", "GSI_VolRes": "950", "GSI_SupRes": "475", "GSI_ProRes": "2", "GSN_VolDem": 1707.0, "GSN_VCU": "291", "GSN_SupCap": "7700", "GSN_VolRes": "950", "GSN_SupRes": "475", "GSN_ProRes": "2", "ECSI_VolDe": "5033", "ECSI_VCU": "518", "ECSI_SupCa": "1.10", "ECSI_VolRe": "1100", "ECSI_SupRe": "550", "ECSI_ProRes": "2", "ECSN_VolDe": "5033", "ECSN_VCU": "291", "ECSN_SupCa": "1.9", "ECSN_VolRe": "1100", "ECSN_SupRe": "440", "ECSN_PorRes": "2.5" }, "geometry": { "type": "Point", "coordinates": [ -63.650498813952296, -26.9793291294122, 0.0 ] } },
    { "type": "Feature", "properties": { "id": 10.0, "x": -63.809790881860692, "y": -28.489417766093599, "provincia": "Santiago del Estero", "ecoregion": "Chaco Seco", "precipita": 500.0, "depto": "Departamento", "name": "Atamisqui", "Provincia": "Santiago del Estero", "NOMBRE_ECO": "Chaco Seco", "nam": "Atamisqui", "loc": "Villa Atamisqui", "precipita": 626.3, "ppm75": 546.1, "TempMedia": 27.4, "Etopromedio": 4.1, "UD_VolDem": 84.0, "UD_VCU": 425, "UD_SupCap": 200, "UD_VolRes": 32.0, "SASI_VolDe": 80.0, "SASI_VCU": 437, "SASI_SupCa": 250, "SASI_VolRe": 38, "SASI_SupRe": 25.3, "SASI_ProRe": 1.5, "SASN_VolDe": 80.0, "SASN_VCU": 246, "SASN_SupCa": 440, "SASN_VolRe": 37, "SASN_SupRe": 24.7, "SASN_ProRe": 1.5, "GSI_VolDem": 224.0, "GSI_VCU": "437", "GSI_SupCap2": "650", "GSI_VolRes": "110", "GSI_SupRes": "55", "GSI_ProRes": "2", "GSN_VolDem": 224.0, "GSN_VCU": "246", "GSN_SupCap": "1150", "GSN_VolRes": "110", "GSN_SupRes": "55", "GSN_ProRes": "2", "ECSI_VolDe": "9117", "ECSI_VCU": "437", "ECSI_SupCa": "2.34", "ECSI_VolRe": "1950", "ECSI_SupRe": "975", "ECSI_ProRes": "2", "ECSN_VolDe": "9117", "ECSN_VCU": "246", "ECSN_SupCa": "4.05", "ECSN_VolRe": "1800", "ECSN_SupRe": "720", "ECSN_PorRes": "2.5" }, "geometry": { "type": "Point", "coordinates": [ -63.8097908818607, -28.489417766093599, 0.0 ] } },
    { "type": "Feature", "properties": { "id": 11.0, "x": -62.184589584192899, "y": -27.9149549179857, "provincia": "Santiago del Estero", "ecoregion": "Chaco Humedo", "precipita": 1000.0, "depto": "Departamento", "name": "Juan Felipe Ibarra", "Provincia": "Santiago del Estero", "NOMBRE_ECO": "Chaco Húmedo", "nam": "Juan Felipe Ibarra", "loc": "El Colorado", "precipita": 769.1, "ppm75": 712.1, "TempMedia": 22.6, "Etopromedio": 3.69, "UD_VolDem": 60.0, "UD_VCU": 558, "UD_SupCap": 110, "UD_VolRes": 20.0, "SASI_VolDe": 83.0, "SASI_VCU": 570, "SASI_SupCa": 170, "SASI_VolRe": 30, "SASI_SupRe": 15.0, "SASI_ProRe": 2.0, "SASN_VolDe": 83.0, "SASN_VCU": 320, "SASN_SupCa": 305, "SASN_VolRe": 30, "SASN_SupRe": 15.0, "SASN_ProRe": 2.0, "GSI_VolDem": 1707.0, "GSI_VCU": "570", "GSI_SupCap2": "3500", "GSI_VolRes": "650", "GSI_SupRes": "325", "GSI_ProRes": "2", "GSN_VolDem": 1707.0, "GSN_VCU": "320", "GSN_SupCap": "6200", "GSN_VolRes": "650", "GSN_SupRes": "325", "GSN_ProRes": "2", "ECSI_VolDe": "3768", "ECSI_VCU": "570", "ECSI_SupCa": "0.74", "ECSI_VolRe": "1000", "ECSI_SupRe": "500", "ECSI_ProRes": "2", "ECSN_VolDe": "3768", "ECSN_VCU": "320", "ECSN_SupCa": "1.3", "ECSN_VolRe": "1000", "ECSN_SupRe": "400", "ECSN_PorRes": "2.5" }, "geometry": { "type": "Point", "coordinates": [ -62.184589584192899, -27.9149549179857, 0.0 ] } },
    { "type": "Feature", "properties": { "id": 12.0, "x": -63.891799380125804, "y": -25.867428735810002, "provincia": "Santiago del Estero", "ecoregion": "Chaco Seco", "precipita": 500.0, "depto": "Departamento", "name": "Pellegrini", "Provincia": "Santiago del Estero", "NOMBRE_ECO": "Chaco Seco", "nam": "Pellegrini", "loc": "Belgrano", "precipita": 622.0, "ppm75": 530.1, "TempMedia": 23.2, "Etopromedio": 4.05, "UD_VolDem": 50.0, "UD_VCU": 412, "UD_SupCap": 125, "UD_VolRes": 23.0, "SASI_VolDe": 107.0, "SASI_VCU": 424, "SASI_SupCa": 320, "SASI_VolRe": 60, "SASI_SupRe": 30.0, "SASI_ProRe": 2.0, "SASN_VolDe": 107.0, "SASN_VCU": 239, "SASN_SupCa": 570, "SASN_VolRe": 60, "SASN_SupRe": 30.0, "SASN_ProRe": 2.0, "GSI_VolDem": 1244.0, "GSI_VCU": "424", "GSI_SupCap2": "3700", "GSI_VolRes": "660", "GSI_SupRes": "330", "GSI_ProRes": "2", "GSN_VolDem": 1244.0, "GSN_VCU": "239", "GSN_SupCap": "6500", "GSN_VolRes": "6550", "GSN_SupRes": "325", "GSN_ProRes": "2", "ECSI_VolDe": "4617", "ECSI_VCU": "424", "ECSI_SupCa": "1.22", "ECSI_VolRe": "1450", "ECSI_SupRe": "580", "ECSI_ProRes": "2.5", "ECSN_VolDe": "4617", "ECSN_VCU": "239", "ECSN_SupCa": "2.16", "ECSN_VolRe": "1450", "ECSN_SupRe": "580", "ECSN_PorRes": "2.5" }, "geometry": { "type": "Point", "coordinates": [ -63.891799380125804, -25.867428735810002, 0.0 ] } }
    ]
    }
    