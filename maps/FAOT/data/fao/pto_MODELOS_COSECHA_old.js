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
        { "type": "Feature", "properties": { "id": 5.0, "x": -65.713518710385202, "y": -26.9318344081207, "provincia": "Tucumán", "ecoregion": "Selva de las Yungas", "precipitac": 2000.0, "depto": "Departamento", "name": "Tafí del Valle", "-NOMBRE_ECO": null, "-Localidad cercana": null, "-precipitac": null, "-ppm75": null, "-TempMedia": null, "-Etopromedio": null, "-UD_VolDem": null, "-UD_VCU": null, "-UD_SupCap": null, "-UD_VolRes": null, "-SASI_VolDe": null, "-SASI_VCU": null, "-SASI_SupCa": null, "-SASI_VolRe": null, "-SASI_SupRe": null, "-SASI_ProRe": null, "-SASN_VolDe": null, "-SASN_VCU": null, "-SASN_SupCa": null, "-SASN_VolRe": null, "-SASN_SupRe": null, "-SASN_ProRe": null, "-GSI_VolDem": null, "-GSI_VCU": null, "-GSI_SupCap": null, "-GSI_VolRes": null, "-GSI_SupRes": null, "-GSI_ProRes": null, "-GSN_VolDem": null, "-GSN_VCU": null, "-GSN_SupCap": null, "-GSN_VolRes": null, "-GSN_SupRes": null, "-GSN_ProRes": null, "-ECSI_VolDe": null, "-ECSI_VCU": null, "-ECSI_SupCa": null, "-ECSI_VolRe": null, "-ECSI_SupRe": null, "-ECSI_ProRes": null, "-ECSN_VolDe": null, "-ECSN_VCU": null, "-ECSN_SupCa": null, "-ECSN_VolRe": null, "-ECSN_SupRe": null, "-ECSN_PorRes": null }, "geometry": { "type": "Point", "coordinates": [ -65.713518710385202, -26.9318344081207, 0.0 ] } },
        { "type": "Feature", "properties": { "id": 6.0, "x": -65.644186246195304, "y": -27.746115721011599, "provincia": "Tucumán", "ecoregion": "Chaco Seco", "precipitac": 500.0, "depto": "Departamento", "name": "La Cocha", "-NOMBRE_ECO": null, "-Localidad cercana": null, "-precipitac": null, "-ppm75": null, "-TempMedia": null, "-Etopromedio": null, "-UD_VolDem": null, "-UD_VCU": null, "-UD_SupCap": null, "-UD_VolRes": null, "-SASI_VolDe": null, "-SASI_VCU": null, "-SASI_SupCa": null, "-SASI_VolRe": null, "-SASI_SupRe": null, "-SASI_ProRe": null, "-SASN_VolDe": null, "-SASN_VCU": null, "-SASN_SupCa": null, "-SASN_VolRe": null, "-SASN_SupRe": null, "-SASN_ProRe": null, "-GSI_VolDem": null, "-GSI_VCU": null, "-GSI_SupCap": null, "-GSI_VolRes": null, "-GSI_SupRes": null, "-GSI_ProRes": null, "-GSN_VolDem": null, "-GSN_VCU": null, "-GSN_SupCap": null, "-GSN_VolRes": null, "-GSN_SupRes": null, "-GSN_ProRes": null, "-ECSI_VolDe": null, "-ECSI_VCU": null, "-ECSI_SupCa": null, "-ECSI_VolRe": null, "-ECSI_SupRe": null, "-ECSI_ProRes": null, "-ECSN_VolDe": null, "-ECSN_VCU": null, "-ECSN_SupCa": null, "-ECSN_VolRe": null, "-ECSN_SupRe": null, "-ECSN_PorRes": null }, "geometry": { "type": "Point", "coordinates": [ -65.644186246195304, -27.746115721011599, 0.0 ] } },
        { "type": "Feature", "properties": { "id": 7.0, "x": -65.441878054758007, "y": -26.387208651584899, "provincia": "Tucumán", "ecoregion": "Chaco Seco", "precipitac": 500.0, "depto": "Departamento", "name": "Trancas", "-NOMBRE_ECO": null, "-Localidad cercana": null, "-precipitac": null, "-ppm75": null, "-TempMedia": null, "-Etopromedio": null, "-UD_VolDem": null, "-UD_VCU": null, "-UD_SupCap": null, "-UD_VolRes": null, "-SASI_VolDe": null, "-SASI_VCU": null, "-SASI_SupCa": null, "-SASI_VolRe": null, "-SASI_SupRe": null, "-SASI_ProRe": null, "-SASN_VolDe": null, "-SASN_VCU": null, "-SASN_SupCa": null, "-SASN_VolRe": null, "-SASN_SupRe": null, "-SASN_ProRe": null, "-GSI_VolDem": null, "-GSI_VCU": null, "-GSI_SupCap": null, "-GSI_VolRes": null, "-GSI_SupRes": null, "-GSI_ProRes": null, "-GSN_VolDem": null, "-GSN_VCU": null, "-GSN_SupCap": null, "-GSN_VolRes": null, "-GSN_SupRes": null, "-GSN_ProRes": null, "-ECSI_VolDe": null, "-ECSI_VCU": null, "-ECSI_SupCa": null, "-ECSI_VolRe": null, "-ECSI_SupRe": null, "-ECSI_ProRes": null, "-ECSN_VolDe": null, "-ECSN_VCU": null, "-ECSN_SupCa": null, "-ECSN_VolRe": null, "-ECSN_SupRe": null, "-ECSN_PorRes": null }, "geometry": { "type": "Point", "coordinates": [ -65.441878054758007, -26.387208651584899, 0.0 ] } },
        { "type": "Feature", "properties": { "id": 8.0, "x": -64.895653876155293, "y": -26.6481419870099, "provincia": "Tucumán", "ecoregion": "Selva de las Yungas", "precipitac": 2000.0, "depto": "Departamento", "name": "Burruyacú", "-NOMBRE_ECO": null, "-Localidad cercana": null, "-precipitac": null, "-ppm75": null, "-TempMedia": null, "-Etopromedio": null, "-UD_VolDem": null, "-UD_VCU": null, "-UD_SupCap": null, "-UD_VolRes": null, "-SASI_VolDe": null, "-SASI_VCU": null, "-SASI_SupCa": null, "-SASI_VolRe": null, "-SASI_SupRe": null, "-SASI_ProRe": null, "-SASN_VolDe": null, "-SASN_VCU": null, "-SASN_SupCa": null, "-SASN_VolRe": null, "-SASN_SupRe": null, "-SASN_ProRe": null, "-GSI_VolDem": null, "-GSI_VCU": null, "-GSI_SupCap": null, "-GSI_VolRes": null, "-GSI_SupRes": null, "-GSI_ProRes": null, "-GSN_VolDem": null, "-GSN_VCU": null, "-GSN_SupCap": null, "-GSN_VolRes": null, "-GSN_SupRes": null, "-GSN_ProRes": null, "-ECSI_VolDe": null, "-ECSI_VCU": null, "-ECSI_SupCa": null, "-ECSI_VolRe": null, "-ECSI_SupRe": null, "-ECSI_ProRes": null, "-ECSN_VolDe": null, "-ECSN_VCU": null, "-ECSN_SupCa": null, "-ECSN_VolRe": null, "-ECSN_SupRe": null, "-ECSN_PorRes": null }, "geometry": { "type": "Point", "coordinates": [ -64.895653876155293, -26.6481419870099, 0.0 ] } },
        { "type": "Feature", "properties": { "id": 28.0, "x": -65.974881618550896, "y": -26.447910215578698, "provincia": "Tucumán", "ecoregion": "Monte de Sierras y Bolsones", "precipitac": 400.0, "depto": "Departamento", "name": "Tafí del Valle", "-NOMBRE_ECO": null, "-Localidad cercana": null, "-precipitac": null, "-ppm75": null, "-TempMedia": null, "-Etopromedio": null, "-UD_VolDem": null, "-UD_VCU": null, "-UD_SupCap": null, "-UD_VolRes": null, "-SASI_VolDe": null, "-SASI_VCU": null, "-SASI_SupCa": null, "-SASI_VolRe": null, "-SASI_SupRe": null, "-SASI_ProRe": null, "-SASN_VolDe": null, "-SASN_VCU": null, "-SASN_SupCa": null, "-SASN_VolRe": null, "-SASN_SupRe": null, "-SASN_ProRe": null, "-GSI_VolDem": null, "-GSI_VCU": null, "-GSI_SupCap": null, "-GSI_VolRes": null, "-GSI_SupRes": null, "-GSI_ProRes": null, "-GSN_VolDem": null, "-GSN_VCU": null, "-GSN_SupCap": null, "-GSN_VolRes": null, "-GSN_SupRes": null, "-GSN_ProRes": null, "-ECSI_VolDe": null, "-ECSI_VCU": null, "-ECSI_SupCa": null, "-ECSI_VolRe": null, "-ECSI_SupRe": null, "-ECSI_ProRes": null, "-ECSN_VolDe": null, "-ECSN_VCU": null, "-ECSN_SupCa": null, "-ECSN_VolRe": null, "-ECSN_SupRe": null, "-ECSN_PorRes": null }, "geometry": { "type": "Point", "coordinates": [ -65.974881618550896, -26.447910215578698, 0.0 ] } }
        
    ]
}
