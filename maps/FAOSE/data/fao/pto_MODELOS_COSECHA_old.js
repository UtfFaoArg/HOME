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
        { "type": "Feature", "properties": { "id": 9.0, "x": -63.650498813952296, "y": -26.9793291294122, "provincia": "Santiago del Estero", "ecoregion": "Chaco Seco", "precipitac": 500.0, "depto": "Departamento", "name": "Figueroa", "NOMBRE_EC": "Chaco Seco", "Localidad": "Quebrachal", "precipita": "705.8", "ppm75": "647.1", "TempMedia": "27.9", "Etopromed": "4.1", "UD_VolDem": "60", "UD_VCU": "509", "UD_SupCap": "120", "UD_VolRes": "25", "SASI_VolD": "105", "SASI_VCU": "518", "SASI_SupC": "290", "SASI_VolR": "60", "SASI_SupR": "40", "SASI_ProR": "1.5", "SASN_VolD": "105", "SASN_VCU": "291", "SASN_SupC": "520", "SASN_VolR": "60", "SASN_SupR": "40", "SASN_ProR": "1.5", "GSI_VolDe": "1707", "GSI_VCU": "518", "GSI_SupCa": "4400", "GSI_VolRe": "950", "GSI_SupRe": "475", "GSI_ProRe": "2", "GSN_VolDe": "1707", "GSN_VCU": "291", "GSN_SupCa": "7700", "GSN_VolRe": "950", "GSN_SupRe": "475", "GSN_ProRe": "2", "ECSI_VolD": "5033", "ECSI_VCU": "518", "ECSI_SupC": "1.1", "ECSI_VolR": "1100", "ECSI_SupR": "550", "ECSI_ProR": "2", "ECSN_VolD": "5033", "ECSN_VCU": "291", "ECSN_SupC": "1.9", "ECSN_VolR": "1100", "ECSN_SupR": "440", "ECSN_PorR": "2.5" }, "geometry": { "type": "Point", "coordinates": [-63.650498813952296, -26.9793291294122, 0.0] } },
        { "type": "Feature", "properties": { "id": 10.0, "x": -63.809790881860692, "y": -28.489417766093599, "provincia": "Santiago del Estero", "ecoregion": "Chaco Seco", "precipitac": 500.0, "depto": "Departamento", "name": "Atamisqui", "NOMBRE_EC": "Chaco Seco", "Localidad": "Villa Atamisqui", "precipita": "626.3", "ppm75": "546.1", "TempMedia": "27.4", "Etopromed": "4.1", "UD_VolDem": "84", "UD_VCU": "425", "UD_SupCap": "200", "UD_VolRes": "32", "SASI_VolD": "80", "SASI_VCU": "437", "SASI_SupC": "250", "SASI_VolR": "38", "SASI_SupR": "25.3", "SASI_ProR": "1.5", "SASN_VolD": "80", "SASN_VCU": "246", "SASN_SupC": "440", "SASN_VolR": "37", "SASN_SupR": "24.7", "SASN_ProR": "1.5", "GSI_VolDe": "224", "GSI_VCU": "437", "GSI_SupCa": "650", "GSI_VolRe": "110", "GSI_SupRe": "55", "GSI_ProRe": "2", "GSN_VolDe": "224", "GSN_VCU": "246", "GSN_SupCa": "1150", "GSN_VolRe": "110", "GSN_SupRe": "55", "GSN_ProRe": "2", "ECSI_VolD": "9117", "ECSI_VCU": "437", "ECSI_SupC": "2.34", "ECSI_VolR": "1950", "ECSI_SupR": "975", "ECSI_ProR": "2", "ECSN_VolD": "9117", "ECSN_VCU": "246", "ECSN_SupC": "4.05", "ECSN_VolR": "1800", "ECSN_SupR": "720", "ECSN_PorR": "2.5" }, "geometry": { "type": "Point", "coordinates": [-63.8097908818607, -28.489417766093599, 0.0] } },
        { "type": "Feature", "properties": { "id": 11.0, "x": -62.184589584192899, "y": -27.9149549179857, "provincia": "Santiago del Estero", "ecoregion": "Chaco Humedo", "precipitac": 1000.0, "depto": "Departamento", "name": "Juan Felipe Ibarra", "NOMBRE_EC": "Chaco Húmedo", "Localidad": "El Colorado", "precipita": "769.1", "ppm75": "712.1", "TempMedia": "22.6", "Etopromed": "3.69", "UD_VolDem": "60", "UD_VCU": "558", "UD_SupCap": "110", "UD_VolRes": "20", "SASI_VolD": "83", "SASI_VCU": "570", "SASI_SupC": "170", "SASI_VolR": "30", "SASI_SupR": "15", "SASI_ProR": "2", "SASN_VolD": "83", "SASN_VCU": "320", "SASN_SupC": "305", "SASN_VolR": "30", "SASN_SupR": "15", "SASN_ProR": "2", "GSI_VolDe": "1707", "GSI_VCU": "570", "GSI_SupCa": "3500", "GSI_VolRe": "650", "GSI_SupRe": "325", "GSI_ProRe": "2", "GSN_VolDe": "1707", "GSN_VCU": "320", "GSN_SupCa": "6200", "GSN_VolRe": "650", "GSN_SupRe": "325", "GSN_ProRe": "2", "ECSI_VolD": "3768", "ECSI_VCU": "570", "ECSI_SupC": "0.74", "ECSI_VolR": "1000", "ECSI_SupR": "500", "ECSI_ProR": "2", "ECSN_VolD": "3768", "ECSN_VCU": "320", "ECSN_SupC": "1.3", "ECSN_VolR": "1000", "ECSN_SupR": "400", "ECSN_PorR": "2.5" }, "geometry": { "type": "Point", "coordinates": [-62.184589584192899, -27.9149549179857, 0.0] } },
        { "type": "Feature", "properties": { "id": 12.0, "x": -63.891799380125804, "y": -25.867428735810002, "provincia": "Santiago del Estero", "ecoregion": "Chaco Seco", "precipitac": 500.0, "depto": "Departamento", "name": "Pellegrini", "NOMBRE_EC": "Chaco Seco", "Localidad": "Belgrano", "precipita": "622", "ppm75": "530.1", "TempMedia": "23.2", "Etopromed": "4.05", "UD_VolDem": "50", "UD_VCU": "412", "UD_SupCap": "125", "UD_VolRes": "23", "SASI_VolD": "107", "SASI_VCU": "424", "SASI_SupC": "320", "SASI_VolR": "60", "SASI_SupR": "30", "SASI_ProR": "2", "SASN_VolD": "107", "SASN_VCU": "239", "SASN_SupC": "570", "SASN_VolR": "60", "SASN_SupR": "30", "SASN_ProR": "2", "GSI_VolDe": "1244", "GSI_VCU": "424", "GSI_SupCa": "3700", "GSI_VolRe": "660", "GSI_SupRe": "330", "GSI_ProRe": "2", "GSN_VolDe": "1244", "GSN_VCU": "239", "GSN_SupCa": "6500", "GSN_VolRe": "6550", "GSN_SupRe": "325", "GSN_ProRe": "2", "ECSI_VolD": "4617", "ECSI_VCU": "424", "ECSI_SupC": "1.22", "ECSI_VolR": "1450", "ECSI_SupR": "580", "ECSI_ProR": "2.5", "ECSN_VolD": "4617", "ECSN_VCU": "239", "ECSN_SupC": "2.16", "ECSN_VolR": "1450", "ECSN_SupR": "580", "ECSN_PorR": "2.5" }, "geometry": { "type": "Point", "coordinates": [-63.891799380125804, -25.867428735810002, 0.0] } }

    ]
}
