//USO DOEMSTICO
var IconUD = L.icon({
    iconUrl: 'images/hogar.png',
    iconSize: [35, 45],
    iconAnchor: [17, 42],
    popupAnchor: [1, -32],
    className: 'custom-marker-gsi',

});
// Contenido del popup para Sistema -UD
function popupContentUD(feature) {
    return (
        "<div id='Estilo1'><h3>Modelo de Cosecha de Agua <br> Consumo Doméstico </h3></div>" +
        "<hr class='hrx' align='left' noshade='noshade' size='1' width='100%' />" +
        "<div id='Estilo3a'>" +
        "<b> Precipitación media : </b>" + feature.properties.precipitac + " mm" + "<br>" + "<br>" +

        "<b> Precipitación calculada :</b>" + feature.properties.ppm75 + " mm" + "<br>" +
        "<i> Precipitación con el 75% de probabilidad de ocurrencia</i>" +
        "<hr class='hrx' align='left' noshade='noshade' size='1' width='100%' />" +
        "<b> Volumen Consumo : </b>" + feature.properties.UD_VolDem + " m3" + "<br>" +
        "<i> Volumen total consumido para uso doméstico al año </i>" + "<br>" + "<br>" +

        " <b> VCU : </b>" + feature.properties.UD_VCU + " Litros/m2.año" + "<br>" +
        "<i> Volumen captado unitario por cada metro cuadrado de superficie impermeable</i>" + "<br>" + "<br>" +

        "<b> Superficie de Captación : </b>" + feature.properties.UD_SupCap + " m2" + "<br>" +
        "<i> Superficie de captación total </i>" + "<br>" + "<br>" +

        " <b> Volumen Reservorio : </b>" + feature.properties.UD_VolRes + " m3" + "<br>" +
        "<i> Volumen adoptado del reservorio </i>" + "<br>" + "<br>" +

        //  "<b> Cantidad de Beneficiario: </b>" + feature.properties.CANTIDAD_D + "<br>" +
        // "<br>" +
        // "<b><i> Fuente de Información:  </b> <br>" +
        // "<b> Fecha de actualización:  </b> Mayo 2024  </i>" +
        "<button onclick='openModal()'>Ver Imagen</button>" + // Botón para abrir el modal
        "</div>" +
        "<div id='imageModal' style='display:flex; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); justify-content:center; align-items:center;'>" +
        "  <div style='position:relative; text-align:center;'>" +
        "<div style='overflow:hidden; width:90%; max-height:80%; margin:auto; position:relative;'>" +
        "    <img src='./images/uso_domestico.png' alt='Imagen' id='zoomImage' style='max-width:100%; cursor:zoom-in;' onclick='enableZoom()'/>" +
        "    <br><button onclick='closeModal()' style='margin-top:10px;'>Cerrar</button>" +
        "<button onclick='toggleFullscreen()' style='margin-top:10px; '>Pantalla Completa</button>" +
        "  </div>" +
        " <br>" +

        "</div>"
    )
};
//Sistema Seguridad Alimentaria - SASI
var IconSASI = L.icon({
    iconUrl: 'images/huerta.png',
    iconSize: [35, 45],
    iconAnchor: [17, 42],
    popupAnchor: [1, -32],
    className: 'custom-marker-gsi',

});
// Contenido del popup para Sistema Seguridad Alimentaria - SASI 
function popupContentSASI(feature) {
    return (
        "<div id='Estilo1'><h3>Seguridad Alimentaria <br> Sistema Impermeable </h3> </div>" +
        "<hr class='hrx' align='left' noshade='noshade' size='1' width='100%' />" +
        "<div id='Estilo3a'>" +
        "<b> Precipitación media : </b>" + feature.properties.precipitac + " mm" + "<br>" + "<br>" +

        "<b> Precipitación calculada :</b>" + feature.properties.ppm75 + " mm" + "<br>" +
        "<i> Precipitación con el 75% de probabilidad de ocurrencia</i>" +
        "<hr class='hrx' align='left' noshade='noshade' size='1' width='100%' />" +
        "<b> Volumen Consumo : </b>" + feature.properties.SASI_VolD + " m3" + "<br>" +
        "<i> Volumen total consumido para uso doméstico al año </i>" + "<br>" + "<br>" +

        " <b> VCU : </b>" + feature.properties.SASI_VCU + " Litros/m2.año" + "<br>" +
        "<i> Volumen captado unitario por cada metro cuadrado de superficie impermeable</i>" + "<br>" + "<br>" +

        "<b> Superficie de Captación : </b>" + feature.properties.SASI_SupC + " m2" + "<br>" +
        "<i> Superficie de captación total </i>" + "<br>" + "<br>" +

        " <b> Volumen Reservorio : </b>" + feature.properties.SASI_VolR + " m3" + "<br>" +
        "<i> Volumen adoptado del reservorio </i>" + "<br>" + "<br>" +

        //  "<b> Cantidad de Beneficiario: </b>" + feature.properties.CANTIDAD_D + "<br>" +
        // "<br>" +
        // "<b><i> Fuente de Información:  </b> <br>" +
        // "<b> Fecha de actualización:  </b> Mayo 2024  </i>" +

        "<button onclick='openModal()'>Ver Imagen</button>" + // Botón para abrir el modal
        "</div>" +
        "<div id='imageModal' style='display:flex; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); justify-content:center; align-items:center;'>" +
        "  <div style='position:relative; text-align:center;'>" +
        "<div style='overflow:hidden; width:90%; max-height:80%; margin:auto; position:relative;'>" +
        "    <img src='./images/segalimentaria_sup_imp.png' alt='Imagen' id='zoomImage' style='max-width:100%; cursor:zoom-in;' onclick='enableZoom()'/>" +
        "    <br><button onclick='closeModal()' style='margin-top:10px;'>Cerrar</button>" +
        "<button onclick='toggleFullscreen()' style='margin-top:10px; '>Pantalla Completa</button>" +
        "  </div>" +
        " <br>" +

        "</div>"
    )
};

//Sistema Seguridad Alimentaria - SASN
var IconSASN =
    L.icon({
        iconUrl: 'images/huerta.png',
        iconSize: [35, 45],
        iconAnchor: [17, 42],
        popupAnchor: [1, -32],
        className: 'custom-marker-green',
    });
// Contenido del popup para Sistema Seguridad Alimentaria - SASN
function popupContentSASN(feature) {
    return (
        "<div id='Estilo1'><h3>Seguridad Alimentaria <br> Suelo Natural </h3> </div>" +
        "<hr class='hrx' align='left' noshade='noshade' size='1' width='100%' />" +
        "<div id='Estilo3a'>" +
        "<b> Precipitación media : </b>" + feature.properties.precipitac + " mm" + "<br>" + "<br>" +

        "<b> Precipitación calculada :</b>" + feature.properties.ppm75 + " mm" + "<br>" +
        "<i> Precipitación con el 75% de probabilidad de ocurrencia</i>" +
        "<hr class='hrx' align='left' noshade='noshade' size='1' width='100%' />" +
        "<b> Volumen Consumo : </b>" + feature.properties.SASN_VolD + " m3" + "<br>" +
        "<i> Volumen total consumido para uso doméstico al año </i>" + "<br>" + "<br>" +

        " <b> VCU : </b>" + feature.properties.SASN_VCU + " Litros/m2.año" + "<br>" +
        "<i> Volumen captado unitario por cada metro cuadrado de superficie impermeable</i>" + "<br>" + "<br>" +

        "<b> Superficie de Captación : </b>" + feature.properties.SASN_SupC + " m2" + "<br>" +
        "<i> Superficie de captación total </i>" + "<br>" + "<br>" +

        " <b> Volumen Reservorio : </b>" + feature.properties.SASN_VolR + " m3" + "<br>" +
        "<i> Volumen adoptado del reservorio </i>" + "<br>" + "<br>" +

        //  "<b> Cantidad de Beneficiario: </b>" + feature.properties.CANTIDAD_D + "<br>" +
        // "<br>" +
        // "<b><i> Fuente de Información:  </b> <br>" +
        // "<b> Fecha de actualización:  </b> Mayo 2024  </i>" +
        "<button onclick='openModal()'>Ver Imagen</button>" + // Botón para abrir el modal
        "</div>" +
        "<div id='imageModal' style='display:flex; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); justify-content:center; align-items:center;'>" +
        "  <div style='position:relative; text-align:center;'>" +
        "<div style='overflow:hidden; width:90%; max-height:80%; margin:auto; position:relative;'>" +
        "    <img src='./images/segalimentaria_suelo_desnudo.png' alt='Imagen' id='zoomImage' style='max-width:100%; cursor:zoom-in;' onclick='enableZoom()'/>" +
        "    <br><button onclick='closeModal()' style='margin-top:10px;'>Cerrar</button>" +
        "<button onclick='toggleFullscreen()' style='margin-top:10px; '>Pantalla Completa</button>" +
        "  </div>" +
        " <br>" +
        "</div>"
    )
};

//Sist. Ganaderia Suelo Impermeable
var IconGSI = L.icon({
    iconUrl: 'images/ganado.svg',
    iconSize: [35, 45],
    iconAnchor: [17, 42],
    popupAnchor: [1, -32],
    className: 'custom-marker-gsi',

});
// Contenido del popup para Ganaderia Suelo Impermeable
function popupContentGSI(feature) {
    return (
        "<div id='Estilo1'><h3>Modelo de Cosecha para <br> Ganaderia con Suelo Impermable </h3> </div>" +
        "<hr class='hrx' align='left' noshade='noshade' size='1' width='100%' />" +
        "<div id='Estilo3a'>" +
        "<b> Precipitación media : </b>" + feature.properties.precipitac + " mm" + "<br>" + "<br>" +

        "<b> Precipitación calculada :</b>" + feature.properties.ppm75 + " mm" + "<br>" +
        "<i> Precipitación con el 75% de probabilidad de ocurrencia</i>" +
        "<hr class='hrx' align='left' noshade='noshade' size='1' width='100%' />" +
        "<b> Volumen Consumo : </b>" + feature.properties.GSI_VolDe + " m3" + "<br>" +
        "<i> Volumen total consumido para uso doméstico al año </i>" + "<br>" + "<br>" +

        " <b> VCU : </b>" + feature.properties.GSI_VCU + " Litros/m2.año" + "<br>" +
        "<i> Volumen captado unitario por cada metro cuadrado de superficie impermeable</i>" + "<br>" + "<br>" +

        "<b> Superficie de Captación : </b>" + feature.properties.GSI_SupCa + " m2" + "<br>" +
        "<i> Superficie de captación total </i>" + "<br>" + "<br>" +

        " <b> Volumen Reservorio : </b>" + feature.properties.GSI_VolRe + " m3" + "<br>" +
        "<i> Volumen adoptado del reservorio </i>" + "<br>" + "<br>" +
        " <b> Profundidad del Reservorio : </b>" + feature.properties.GSI_ProRe + " m" + "<br>" +
        "<i> Profundidad del reservorio </i>" + "<br>" + "<br>" +

        //  "<b> Cantidad de Beneficiario: </b>" + feature.properties.CANTIDAD_D + "<br>" +
        // "<br>" +
        // "<b><i> Fuente de Información:  </b> <br>" +
        // "<b> Fecha de actualización:  </b> Mayo 2024  </i>" +

        "<button onclick='openModal()'>Ver Imagen</button>" + // Botón para abrir el modal
        "</div>" +
        "<div id='imageModal' style='display:flex; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); justify-content:center; align-items:center;'>" +
        "  <div style='position:relative; text-align:center;'>" +
        "<div style='overflow:hidden; width:90%; max-height:80%; margin:auto; position:relative;'>" +
        "    <img src='./images/ganaderia_impremeable.png' alt='Imagen' id='zoomImage' style='max-width:100%; cursor:zoom-in;' onclick='enableZoom()'/>" +
        "    <br><button onclick='closeModal()' style='margin-top:10px;'>Cerrar</button>" +
        "<button onclick='toggleFullscreen()' style='margin-top:10px; '>Pantalla Completa</button>" +
        "  </div>" +
        " <br>" +
        "</div>"
    )
};



//Sist. Ganaderia Suelo Natural
var IconGSN = L.icon({
    iconUrl: 'images/ganado.svg',
    iconSize: [35, 45],
    iconAnchor: [17, 42],
    popupAnchor: [1, -32],
    className: 'custom-marker-green',
});
// Contenido del popup para Ganaderia Suelo Natural
function popupContentGSN(feature) {
    return (
        "<div id='Estilo1'><h3>Modelo de Cosecha para <br> Ganaderia con Suelo Natural </h3> </div>" +
        "<hr class='hrx' align='left' noshade='noshade' size='1' width='100%' />" +
        "<div id='Estilo3a'>" +
        "<b> Precipitación media : </b>" + feature.properties.precipitac + " mm" + "<br>" + "<br>" +

        "<b> Precipitación calculada :</b>" + feature.properties.ppm75 + " mm" + "<br>" +
        "<i> Precipitación con el 75% de probabilidad de ocurrencia</i>" +
        "<hr class='hrx' align='left' noshade='noshade' size='1' width='100%' />" +
        "<b> Volumen Consumo : </b>" + feature.properties.GSN_VolDe + " m3" + "<br>" +
        "<i> Volumen total consumido para uso doméstico al año </i>" + "<br>" + "<br>" +

        " <b> VCU : </b>" + feature.properties.GSN_VCU + " Litros/m2.año" + "<br>" +
        "<i> Volumen captado unitario por cada metro cuadrado de superficie impermeable</i>" + "<br>" + "<br>" +

        "<b> Superficie de Captación : </b>" + feature.properties.GSN_SupCa + " m2" + "<br>" +
        "<i> Superficie de captación total </i>" + "<br>" + "<br>" +

        " <b> Volumen Reservorio : </b>" + feature.properties.GSN_VolRe + " m3" + "<br>" +
        "<i> Volumen adoptado del reservorio </i>" + "<br>" + "<br>" +
        " <b> Profundidad Reservorio : </b>" + feature.properties.GSN_ProRe + " m" + "<br>" +
        "<i> Profundidad del reservorio </i>" + "<br>" + "<br>" +

        //  "<b> Cantidad de Beneficiario: </b>" + feature.properties.CANTIDAD_D + "<br>" +
        // "<br>" +
        // "<b><i> Fuente de Información:  </b> <br>" +
        // "<b> Fecha de actualización:  </b> Mayo 2024  </i>" +
        "<button onclick='openModal()'>Ver Imagen</button>" + // Botón para abrir el modal
        "</div>" +
        "<div id='imageModal' style='display:flex; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); justify-content:center; align-items:center;'>" +
        "  <div style='position:relative; text-align:center;'>" +
        "<div style='overflow:hidden; width:90%; max-height:80%; margin:auto; position:relative;'>" +
        "    <img src='./images/ganaderia_suelodesnudo.png' alt='Imagen' id='zoomImage' style='max-width:100%; cursor:zoom-in;' onclick='enableZoom()'/>" +
        "    <br><button onclick='closeModal()' style='margin-top:10px;'>Cerrar</button>" +
        "<button onclick='toggleFullscreen()' style='margin-top:10px; '>Pantalla Completa</button>" +
        "  </div>" +
        " <br>" +

        "</div>"
    )
};


//Sist. Excedentes con Suelo Impermeable
var IconESI = L.icon({
    iconUrl: 'images/vegetales.png',
    iconSize: [35, 45],
    iconAnchor: [17, 42],
    popupAnchor: [1, -32],
    className: 'custom-marker-gsi',

});
// Contenido del popup Excedente con Suelo Impermable
function popupContentESI(feature) {
    return (
        "<div id='Estilo1'><h3>Modelo de Cosecha con <br> Excedentes y Sist. Impermeable</h3> </div>" +
        "<hr class='hrx' align='left' noshade='noshade' size='1' width='100%' />" +
        "<div id='Estilo3a'>" +
        "<b> Precipitación media : </b>" + feature.properties.precipitac + " mm" + "<br>" + "<br>" +

        "<b> Precipitación calculada :</b>" + feature.properties.ppm75 + " mm" + "<br>" +
        "<i> Precipitación con el 75% de probabilidad de ocurrencia</i>" +
        "<hr class='hrx' align='left' noshade='noshade' size='1' width='100%' />" +
        "<b> Volumen Consumo : </b>" + feature.properties.ECSI_VolD + " m3" + "<br>" +
        "<i> Volumen total consumido para uso doméstico al año </i>" + "<br>" + "<br>" +

        " <b> VCU : </b>" + feature.properties.ECSI_VCU + " Litros/m2.año" + "<br>" +
        "<i> Volumen captado unitario por cada metro cuadrado de superficie impermeable</i>" + "<br>" + "<br>" +

        "<b> Superficie de Captación : </b>" + feature.properties.ECSI_SupC + " m2" + "<br>" +
        "<i> Superficie de captación total </i>" + "<br>" + "<br>" +

        " <b> Volumen Reservorio : </b>" + feature.properties.ECSI_VolR + " m3" + "<br>" +
        "<i> Volumen adoptado del reservorio </i>" + "<br>" + "<br>" +
        " <b> VPRofundidad del Reservorio : </b>" + feature.properties.ECSI_ProR + " m" + "<br>" +
        "<i> Profundidad del reservorio </i>" + "<br>" + "<br>" +
        //  "<b> Cantidad de Beneficiario: </b>" + feature.properties.CANTIDAD_D + "<br>" +
        // "<br>" +
        // "<b><i> Fuente de Información:  </b> <br>" +
        // "<b> Fecha de actualización:  </b> Mayo 2024  </i>" +

        "<div id='imageModal' style='display:flex; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); justify-content:center; align-items:center;'>" +
        "  <div style='position:relative; text-align:center;'>" +
        "<div style='overflow:hidden; width:90%; max-height:80%; margin:auto; position:relative;'>" +
        "    <img src='./images/exedentes_impermeables.png' alt='Imagen' id='zoomImage' style='max-width:100%; cursor:zoom-in;' onclick='enableZoom()'/>" +
        "    <br><button onclick='closeModal()' style='margin-top:10px;'>Cerrar</button>" +
        "<button onclick='toggleFullscreen()' style='margin-top:10px; '>Pantalla Completa</button>" +
        "  </div>" +
        " <br>" +
        "</div>"
    )
};


//Sist. Excedentes con Suelo Natural
var IconESN = L.icon({
    iconUrl: 'images/vegetales.png',
    iconSize: [35, 45],
    iconAnchor: [17, 42],
    popupAnchor: [1, -32],
    className: 'custom-marker-green',
});
// Contenido del popup Excedente con Suelo Impermable
function popupContentESN(feature) {
    return (
        "<div id='Estilo1'><h3>Modelo de Cosecha con <br> Excedentes en Suelos Naturales</h3> </div>" +
        "<hr class='hrx' align='left' noshade='noshade' size='1' width='100%' />" +
        "<div id='Estilo3a'>" +
        "<b> Precipitación media : </b>" + feature.properties.precipitac + " mm" + "<br>" + "<br>" +

        "<b> Precipitación calculada :</b>" + feature.properties.ppm75 + " mm" + "<br>" +
        "<i> Precipitación con el 75% de probabilidad de ocurrencia</i>" +
        "<hr class='hrx' align='left' noshade='noshade' size='1' width='100%' />" +
        "<b> Volumen Consumo : </b>" + feature.properties.ECSN_VolD + " m3" + "<br>" +
        "<i> Volumen total consumido para uso doméstico al año </i>" + "<br>" + "<br>" +

        " <b> VCU : </b>" + feature.properties.ECSN_VCU + " Litros/m2.año" + "<br>" +
        "<i> Volumen captado unitario por cada metro cuadrado de superficie impermeable</i>" + "<br>" + "<br>" +

        "<b> Superficie de Captación : </b>" + feature.properties.ECSN_SupC + " m2" + "<br>" +
        "<i> Superficie de captación total </i>" + "<br>" + "<br>" +

        " <b> Volumen Reservorio : </b>" + feature.properties.ECSN_VolR + " m3" + "<br>" +
        "<i> Volumen adoptado del reservorio </i>" + "<br>" + "<br>" +

        " <b> Profundidad del Reservorio : </b>" + feature.properties.ECSN_PorR + " m" + "<br>" +
        "<i> VProfundidad del reservorio </i>" + "<br>" + "<br>" +
        "<button onclick='openModal()'>Ver Imagen</button>" + // Botón para abrir el modal
        "</div>" +
        "<div id='imageModal' style='display:flex; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); justify-content:center; align-items:center;'>" +
        "  <div style='position:relative; text-align:center;'>" +
        "<div style='overflow:hidden; width:90%; max-height:80%; margin:auto; position:relative;'>" +
        "    <img src='./images/exedentes_suelonatural.png' alt='Imagen' id='zoomImage' style='max-width:100%; cursor:zoom-in;' onclick='enableZoom()'/>" +
        "    <br><button onclick='closeModal()' style='margin-top:10px;'>Cerrar</button>" +
        "<button onclick='toggleFullscreen()' style='margin-top:10px; '>Pantalla Completa</button>" +
        "  </div>" +
        " <br>" +

        "</div>" +
        "</div>"
    )
};


function createLeyendModelos() {
    var legend = L.control({ position: 'bottomright' });

    legend.onAdd = function () {
        var div = L.DomUtil.create('div', 'info legend');
        var labels = [];
        var styles = [
            { label: 'Uso Doméstico', icon: IconUD.options.iconUrl },
            { label: 'Seguridad Alimentaria ', icon: IconSASI.options.iconUrl },

            { label: 'Ganadería ', icon: IconGSI.options.iconUrl },
            // { label: 'Ganadería con Suelo Natural', icon: IconGSN.options.iconUrl },
            { label: 'Excedentes ', icon: IconESI.options.iconUrl },
            // { label: 'Excedentes con Suelo Natural', icon: IconESN.options.iconUrl },
        ];

        // Genera el contenido HTML de la leyenda
        styles.forEach(function (style) {
            labels.push(
                `<div style="display: flex; align-items: center; margin-bottom: 5px;">
                    <img src="${style.icon}" style="width: 20px; height: 20px; margin-right: 8px;" alt="${style.label}">
                    <span>${style.label}</span>
                </div>`
            );
        });

        div.innerHTML = labels.join('');
        return div;
    };

    // Función para mostrar/ocultar la leyenda
    function toggleLegend() {
        // Revisar si alguna de las capas está activa
        if (map.hasLayer(UsoDom) || map.hasLayer(ExComSI) || map.hasLayer(ExComSN) || map.hasLayer(GanaderiaSN) || map.hasLayer(GanaderiaSI) || map.hasLayer(SASN) || map.hasLayer(SASI)) {
            // Si alguna capa está activa, agregar la leyenda
            legend.addTo(map);
        } else {
            // Si ninguna capa está activa, remover la leyenda
            legend.remove();
        }
    }

    // Eliminar la leyenda al inicio
    legend.remove();
    // Escucha el cambio de estado de la capa
    map.on('overlayadd overlayremove', toggleLegend);
}




/// DAtos de GeoJson con toda la info
var datamodelo =
{
    "type": "FeatureCollection",
    "name": "pto_MODELOS_COSECHA",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
        {
            "type": "Feature",
            "properties": {
                "id": 19.0,
                "x": -62.712407534539501,
                "y": -22.279349394774901,
                "provincia": "Salta",
                "ecoregion": "Chaco Seco",
                "precipitac": 500.0,
                "depto": "Departamento",
                "name": "Rivadavia",
                "NOMBRE_EC": "Chaco Seco",
                "Localidad": "Santa Victoria Este",
                "precipita": "648.2",
                "ppm75": "617.5",
                "TempMedia": "23.8",
                "Etopromed": "4.12",
                "UD_VolDem": "59",
                "UD_VCU": "482",
                "UD_SupCap": "125",
                "UD_VolRes": "25",
                "SASI_VolD": "107",
                "SASI_VCU": "494",
                "SASI_SupC": "280",
                "SASI_VolR": "60",
                "SASI_SupR": "30",
                "SASI_ProR": "2",
                "SASN_VolD": "107",
                "SASN_VCU": "278",
                "SASN_SupC": "490",
                "SASN_VolR": "60",
                "SASN_SupR": "30",
                "SASN_ProR": "2",
                "GSI_VolDe": "518",
                "GSI_VCU": "494",
                "GSI_SupCa": "1300",
                "GSI_VolRe": "260",
                "GSI_SupRe": "130",
                "GSI_ProRe": "2",
                "GSN_VolDe": "518",
                "GSN_VCU": "278",
                "GSN_SupCa": "2350",
                "GSN_VolRe": "270",
                "GSN_SupRe": "135",
                "GSN_ProRe": "2",
                "ECSI_VolD": "21145",
                "ECSI_VCU": "494",
                "ECSI_SupC": "5.3",
                "ECSI_VolR": "12500",
                "ECSI_SupR": "5000",
                "ECSI_ProR": "2.5",
                "ECSN_VolD": "21145",
                "ECSN_VCU": "278",
                "ECSN_SupC": "9.3",
                "ECSN_VolR": "13000",
                "ECSN_SupR": "5200",
                "ECSN_PorR": "2.5"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -62.712407534539501,
                    -22.279349394774901,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": 20.0,
                "x": -63.789162297789197,
                "y": -22.495989459224901,
                "provincia": "Salta",
                "ecoregion": "Selva de las Yungas",
                "precipitac": 2000.0,
                "depto": "Departamento",
                "name": "General José de San Martín",
                "NOMBRE_EC": "Selva de las Yungas",
                "Localidad": "Tartagal",
                "precipita": "993.9",
                "ppm75": "974.6",
                "TempMedia": "21.3",
                "Etopromed": "3.75",
                "UD_VolDem": "56",
                "UD_VCU": "768",
                "UD_SupCap": "75",
                "UD_VolRes": "25",
                "SASI_VolD": "84",
                "SASI_VCU": "780",
                "SASI_SupC": "150",
                "SASI_VolR": "65",
                "SASI_SupR": "43.3",
                "SASI_ProR": "1.5",
                "SASN_VolD": "84",
                "SASN_VCU": "439",
                "SASN_SupC": "250",
                "SASN_VolR": "60",
                "SASN_SupR": "30",
                "SASN_ProR": "2",
                "GSI_VolDe": "474",
                "GSI_VCU": "780",
                "GSI_SupCa": "800",
                "GSI_VolRe": "400",
                "GSI_SupRe": "200",
                "GSI_ProRe": "2",
                "GSN_VolDe": "474",
                "GSN_VCU": "439",
                "GSN_SupCa": "1450",
                "GSN_VolRe": "400",
                "GSN_SupRe": "200",
                "GSN_ProRe": "2",
                "ECSI_VolD": "7151",
                "ECSI_VCU": "780",
                "ECSI_SupC": "1.05",
                "ECSI_VolR": "3780",
                "ECSI_SupR": "1512",
                "ECSI_ProR": "2.5",
                "ECSN_VolD": "7151",
                "ECSN_VCU": "439",
                "ECSN_SupC": "1.9",
                "ECSN_VolR": "3850",
                "ECSN_SupR": "1540",
                "ECSN_PorR": "2.5"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -63.789162297789197,
                    -22.495989459224901,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": 21.0,
                "x": -63.754264206012003,
                "y": -22.2425872745006,
                "provincia": "Salta",
                "ecoregion": "Selva de las Yungas",
                "precipitac": 2000.0,
                "depto": "Departamento",
                "name": "General José de San Martín",
                "NOMBRE_EC": "Selva de las Yungas",
                "Localidad": "Aguaray",
                "precipita": "1042.6",
                "ppm75": "919.8",
                "TempMedia": "21",
                "Etopromed": "3.81",
                "UD_VolDem": "56",
                "UD_VCU": "724",
                "UD_SupCap": "80",
                "UD_VolRes": "27",
                "SASI_VolD": "79",
                "SASI_VCU": "736",
                "SASI_SupC": "150",
                "SASI_VolR": "65",
                "SASI_SupR": "43.3",
                "SASI_ProR": "1.5",
                "SASN_VolD": "79",
                "SASN_VCU": "414",
                "SASN_SupC": "250",
                "SASN_VolR": "65",
                "SASN_SupR": "32.5",
                "SASN_ProR": "2",
                "GSI_VolDe": "410",
                "GSI_VCU": "736",
                "GSI_SupCa": "730",
                "GSI_VolRe": "370",
                "GSI_SupRe": "185",
                "GSI_ProRe": "2",
                "GSN_VolDe": "410",
                "GSN_VCU": "414",
                "GSN_SupCa": "1300",
                "GSN_VolRe": "375",
                "GSN_SupRe": "187.5",
                "GSN_ProRe": "2",
                "ECSI_VolD": "6275",
                "ECSI_VCU": "736",
                "ECSI_SupC": "1",
                "ECSI_VolR": "3900",
                "ECSI_SupR": "1560",
                "ECSI_ProR": "2.5",
                "ECSN_VolD": "6275",
                "ECSN_VCU": "414",
                "ECSN_SupC": "1.8",
                "ECSN_VolR": "4000",
                "ECSN_SupR": "1600",
                "ECSN_PorR": "2.5"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -63.754264206012003,
                    -22.2425872745006,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": 22.0,
                "x": -65.014757401158803,
                "y": -22.2825448839363,
                "provincia": "Salta",
                "ecoregion": "Puna",
                "precipitac": 100.0,
                "depto": "Departamento",
                "name": "Santa Victoria",
                "NOMBRE_EC": "Puna",
                "Localidad": "Santa Victoria Oeste",
                "precipita": "346.9",
                "ppm75": "294.4",
                "TempMedia": "10.1",
                "Etopromed": "2.63",
                "UD_VolDem": "37",
                "UD_VCU": "227",
                "UD_SupCap": "165",
                "UD_VolRes": "21",
                "SASI_VolD": "89",
                "SASI_VCU": "236",
                "SASI_SupC": "450",
                "SASI_VolR": "60",
                "SASI_SupR": "40",
                "SASI_ProR": "1.5",
                "SASN_VolD": "89",
                "SASN_VCU": "162",
                "SASN_SupC": "630",
                "SASN_VolR": "56",
                "SASN_SupR": "28",
                "SASN_ProR": "2",
                "GSI_VolDe": "633",
                "GSI_VCU": "236",
                "GSI_SupCa": "3000",
                "GSI_VolRe": "375",
                "GSI_SupRe": "188",
                "GSI_ProRe": "2",
                "GSN_VolDe": "633",
                "GSN_VCU": "162",
                "GSN_SupCa": "4400",
                "GSN_VolRe": "380",
                "GSN_SupRe": "190",
                "GSN_ProRe": "2",
                "ECSI_VolD": "2418",
                "ECSI_VCU": "236",
                "ECSI_SupC": "1.1",
                "ECSI_VolR": "670",
                "ECSI_SupR": "335",
                "ECSI_ProR": "2",
                "ECSN_VolD": "2418",
                "ECSN_VCU": "162",
                "ECSN_SupC": "1.62",
                "ECSN_VolR": "650",
                "ECSN_SupR": "260",
                "ECSN_PorR": "2.5"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -65.014757401158803,
                    -22.2825448839363,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": 23.0,
                "x": -63.9737155948214,
                "y": -24.3830909491369,
                "provincia": "Salta",
                "ecoregion": "Chaco Seco",
                "precipitac": 500.0,
                "depto": "Departamento",
                "name": "Anta",
                "NOMBRE_EC": "Chaco Seco",
                "Localidad": "Luis Burela",
                "precipita": "762.2",
                "ppm75": "591.8",
                "TempMedia": "21.4",
                "Etopromed": "3.78",
                "UD_VolDem": "73",
                "UD_VCU": "461",
                "UD_SupCap": "160",
                "UD_VolRes": "25",
                "SASI_VolD": "96",
                "SASI_VCU": "473",
                "SASI_SupC": "270",
                "SASI_VolR": "60",
                "SASI_SupR": "40",
                "SASI_ProR": "1.5",
                "SASN_VolD": "96",
                "SASN_VCU": "148",
                "SASN_SupC": "850",
                "SASN_VolR": "55",
                "SASN_SupR": "36.7",
                "SASN_ProR": "1.5",
                "GSI_VolDe": "17813",
                "GSI_VCU": "473",
                "GSI_SupCa": "45000",
                "GSI_VolRe": "9000",
                "GSI_SupRe": "4500",
                "GSI_ProRe": "2",
                "GSN_VolDe": "17813",
                "GSN_VCU": "148",
                "GSN_SupCa": "140000",
                "GSN_VolRe": "9000",
                "GSN_SupRe": "3600",
                "GSN_ProRe": "2.5",
                "ECSI_VolD": "20377",
                "ECSI_VCU": "473",
                "ECSI_SupC": "5.1",
                "ECSI_VolR": "12000",
                "ECSI_SupR": "4800",
                "ECSI_ProR": "2.5",
                "ECSN_VolD": "20377",
                "ECSN_VCU": "148",
                "ECSN_SupC": "16.2",
                "ECSN_VolR": "12000",
                "ECSN_SupR": "4800",
                "ECSN_PorR": "2.5"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -63.9737155948214,
                    -24.3830909491369,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": 24.0,
                "x": -66.2418953616708,
                "y": -25.324944280488101,
                "provincia": "Salta",
                "ecoregion": "Monte de Sierras y Bolsones",
                "precipitac": 400.0,
                "depto": "Departamento",
                "name": "Molinos",
                "NOMBRE_EC": "Montes de Sierras y Bolsones",
                "Localidad": "Seclantás",
                "precipita": "157.4",
                "ppm75": "103.1",
                "TempMedia": "12.7",
                "Etopromed": "3.19",
                "UD_VolDem": "50",
                "UD_VCU": "74",
                "UD_SupCap": "700",
                "UD_VolRes": "35",
                "SASI_VolD": "111",
                "SASI_VCU": "83",
                "SASI_SupC": "1700",
                "SASI_VolR": "80",
                "SASI_SupR": "40",
                "SASI_ProR": "2",
                "SASN_VolD": "111",
                "SASN_VCU": "26",
                "SASN_SupC": "5500",
                "SASN_VolR": "80",
                "SASN_SupR": "40",
                "SASN_ProR": "2",
                "GSI_VolDe": "27045",
                "GSI_VCU": "83",
                "GSI_SupCa": "380000",
                "GSI_VolRe": "15000",
                "GSI_SupRe": "6000",
                "GSI_ProRe": "2.5",
                "GSN_VolDe": "27045",
                "GSN_VCU": "26",
                "GSN_SupCa": "120000",
                "GSN_VolRe": "15000",
                "GSN_SupRe": "6000",
                "GSN_ProRe": "2.5",
                "ECSI_VolD": "17524",
                "ECSI_VCU": "83",
                "ECSI_SupC": "23",
                "ECSI_VolR": "5600",
                "ECSI_SupR": "2240",
                "ECSI_ProR": "2.5",
                "ECSN_VolD": "17524",
                "ECSN_VCU": "26",
                "ECSN_SupC": "74",
                "ECSN_VolR": "5700",
                "ECSN_SupR": "2280",
                "ECSN_PorR": "2.5"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -66.2418953616708,
                    -25.324944280488101,
                    0.0
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": 26.0,
                "x": -62.896635120765701,
                "y": -23.4791533053492,
                "provincia": "Salta",
                "ecoregion": "Chaco Seco",
                "precipitac": 500.0,
                "depto": "Departamento",
                "name": "Rivadavia",
                "NOMBRE_EC": "Chaco Seco",
                "Localidad": "Coronel Juan Solá",
                "precipita": "674",
                "ppm75": "548.5",
                "TempMedia": "23.7",
                "Etopromed": "4.02",
                "UD_VolDem": "59",
                "UD_VCU": "427",
                "UD_SupCap": "140",
                "UD_VolRes": "26",
                "SASI_VolD": "94",
                "SASI_VCU": "439",
                "SASI_SupC": "300",
                "SASI_VolR": "60",
                "SASI_SupR": "40",
                "SASI_ProR": "1.5",
                "SASN_VolD": "94",
                "SASN_VCU": "110",
                "SASN_SupC": "1250",
                "SASN_VolR": "65",
                "SASN_SupR": "43.3",
                "SASN_ProR": "1.5",
                "GSI_VolDe": "2003",
                "GSI_VCU": "439",
                "GSI_SupCa": "5700",
                "GSI_VolRe": "1100",
                "GSI_SupRe": "550",
                "GSI_ProRe": "2",
                "GSN_VolDe": "2003",
                "GSN_VCU": "110",
                "GSN_SupCa": "215000",
                "GSN_VolRe": "1000",
                "GSN_SupRe": "400",
                "GSN_ProRe": "2.5",
                "ECSI_VolD": "18989",
                "ECSI_VCU": "439",
                "ECSI_SupC": "5.5",
                "ECSI_VolR": "13300",
                "ECSI_SupR": "5320",
                "ECSI_ProR": "2.5",
                "ECSN_VolD": "18929",
                "ECSN_VCU": "110",
                "ECSN_SupC": "22",
                "ECSN_VolR": "13000",
                "ECSN_SupR": "5200",
                "ECSN_PorR": "2.5"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -62.896635120765701,
                    -23.4791533053492,
                    0.0
                ]
            }
        }
    ]
}