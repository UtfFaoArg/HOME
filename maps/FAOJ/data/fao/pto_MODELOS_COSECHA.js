//USO DOEMSTICO
var IconUD = L.icon({
    iconUrl:'images/hogar.png',
    iconSize: [35, 45],
    iconAnchor: [17, 42],
    popupAnchor: [1, -32],
    className: 'custom-marker-gsi',
// L.AwesomeMarkers.icon({
//     iconSize: [35, 45],
//     iconAnchor: [17, 42],
//     popupAnchor: [1, -32],
//     shadowAnchor: [10, 12],
//     shadowSize: [36, 16],
//    // className: 'awesome-marker',
//     // prefix: 'glyphicon',
//     prefix: 'fa',
//     stylePrefix: 'fas',
//     // spinClass: 'fa-spin',
//     // extraClasses: 'fa-light',  // para que sea light
//     icon: 'house-user',
//     markerColor: 'white',
//     iconColor: 'lightblue',
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
    iconUrl:'images/huerta.png',
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
        "<b> Volumen Consumo : </b>" + feature.properties.SASI_VolDe + " m3" + "<br>" +
        "<i> Volumen total consumido para uso doméstico al año </i>" + "<br>" + "<br>" +

        " <b> VCU : </b>" + feature.properties.SASI_VCU + " Litros/m2.año" + "<br>" +
        "<i> Volumen captado unitario por cada metro cuadrado de superficie impermeable</i>" + "<br>" + "<br>" +

        "<b> Superficie de Captación : </b>" + feature.properties.SASI_SupCa + " m2" + "<br>" +
        "<i> Superficie de captación total </i>" + "<br>" + "<br>" +

        " <b> Volumen Reservorio : </b>" + feature.properties.SASI_VolRe + " m3" + "<br>" +
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
    iconUrl:'images/huerta.png',
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
        "<b> Volumen Consumo : </b>" + feature.properties.SASN_VolDe + " m3" + "<br>" +
        "<i> Volumen total consumido para uso doméstico al año </i>" + "<br>" + "<br>" +

        " <b> VCU : </b>" + feature.properties.SASN_VCU + " Litros/m2.año" + "<br>" +
        "<i> Volumen captado unitario por cada metro cuadrado de superficie impermeable</i>" + "<br>" + "<br>" +

        "<b> Superficie de Captación : </b>" + feature.properties.SASN_SupCa + " m2" + "<br>" +
        "<i> Superficie de captación total </i>" + "<br>" + "<br>" +

        " <b> Volumen Reservorio : </b>" + feature.properties.SASN_VolRe + " m3" + "<br>" +
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
    iconUrl:'images/ganado.svg',
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
        "<b> Volumen Consumo : </b>" + feature.properties.GSI_VolDem + " m3" + "<br>" +
        "<i> Volumen total consumido para uso doméstico al año </i>" + "<br>" + "<br>" +

        " <b> VCU : </b>" + feature.properties.GSI_VCU + " Litros/m2.año" + "<br>" +
        "<i> Volumen captado unitario por cada metro cuadrado de superficie impermeable</i>" + "<br>" + "<br>" +

        "<b> Superficie de Captación : </b>" + feature.properties.GSI_SupCap + " m2" + "<br>" +
        "<i> Superficie de captación total </i>" + "<br>" + "<br>" +

        " <b> Volumen Reservorio : </b>" + feature.properties.GSI_VolRes + " m3" + "<br>" +
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
    iconUrl:'images/ganado.svg',
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
        "<b> Volumen Consumo : </b>" + feature.properties.GSN_VolDem + " m3" + "<br>" +
        "<i> Volumen total consumido para uso doméstico al año </i>" + "<br>" + "<br>" +

        " <b> VCU : </b>" + feature.properties.GSN_VCU + " Litros/m2.año" + "<br>" +
        "<i> Volumen captado unitario por cada metro cuadrado de superficie impermeable</i>" + "<br>" + "<br>" +

        "<b> Superficie de Captación : </b>" + feature.properties.GSN_SupCap + " m2" + "<br>" +
        "<i> Superficie de captación total </i>" + "<br>" + "<br>" +

        " <b> Volumen Reservorio : </b>" + feature.properties.GSN_VolRes + " m3" + "<br>" +
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
    iconUrl:'images/vegetales.png',
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
        "<b> Volumen Consumo : </b>" + feature.properties.ECSI_VolDe + " m3" + "<br>" +
        "<i> Volumen total consumido para uso doméstico al año </i>" + "<br>" + "<br>" +

        " <b> VCU : </b>" + feature.properties.ECSI_VCU + " Litros/m2.año" + "<br>" +
        "<i> Volumen captado unitario por cada metro cuadrado de superficie impermeable</i>" + "<br>" + "<br>" +

        "<b> Superficie de Captación : </b>" + feature.properties.ECSI_SupCa + " m2" + "<br>" +
        "<i> Superficie de captación total </i>" + "<br>" + "<br>" +

        " <b> Volumen Reservorio : </b>" + feature.properties.ECSI_VolRe + " m3" + "<br>" +
        "<i> Volumen adoptado del reservorio </i>" + "<br>" + "<br>" +

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
    iconUrl:'images/vegetales.png',
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
        "<b> Volumen Consumo : </b>" + feature.properties.ECSN_VolDe + " m3" + "<br>" +
        "<i> Volumen total consumido para uso doméstico al año </i>" + "<br>" + "<br>" +

        " <b> VCU : </b>" + feature.properties.ECSN_VCU + " Litros/m2.año" + "<br>" +
        "<i> Volumen captado unitario por cada metro cuadrado de superficie impermeable</i>" + "<br>" + "<br>" +

        "<b> Superficie de Captación : </b>" + feature.properties.ECSN_SupCa + " m2" + "<br>" +
        "<i> Superficie de captación total </i>" + "<br>" + "<br>" +

        " <b> Volumen Reservorio : </b>" + feature.properties.ECSN_VolRe + " m3" + "<br>" +
        "<i> Volumen adoptado del reservorio </i>" + "<br>" + "<br>" +

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
            { label: 'Uso Doméstico', icon: IconUD.options.iconUrl  },
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
  { "type": "Feature", "properties": { "id": 13.0, "x": -66.699898892767195, "y": -23.0851878819619, "provincia": "Jujuy", "ecoregion": "Altos Andes", "precipitac": 50.0, "depto": "Departamento", "name": "Susques", "NOMBRE_EC": "Altos andes", "Localidad": "El Toro", "precipita": "250.1", "ppm75": "142.4", "TempMedia": "4.4", "Etopromed": "3.53", "UD_VolDem": "44", "UD_VCU": "122", "UD_SupCap": "360", "UD_VolRes": "25", "SASI_VolD": "78", "SASI_VCU": "131", "SASI_SupC": "750", "SASI_VolR": "50", "SASI_SupR": "33.3", "SASI_ProR": "1.5", "SASN_VolD": "78", "SASN_VCU": "41", "SASN_SupC": "2400", "SASN_VolR": "50", "SASN_SupR": "33.3", "SASN_ProR": "1.5", "GSI_VolDe": "80", "GSI_VCU": "131", "GSI_SupCa": "750", "GSI_VolRe": "55", "GSI_SupRe": "28", "GSI_ProRe": "2", "GSN_VolDe": "80", "GSN_VCU": "41", "GSN_SupCa": "2400", "GSN_VolRe": "55", "GSN_SupRe": "36.7", "GSN_ProRe": "1.5", "ECSI_VolD": null, "ECSI_VCU": null, "ECSI_SupC": null, "ECSI_VolR": null, "ECSI_SupR": null, "ECSI_ProR": null, "ECSN_VolD": null, "ECSN_VCU": null, "ECSN_SupC": null, "ECSN_VolR": null, "ECSN_SupR": null, "ECSN_PorR": null }, "geometry": { "type": "Point", "coordinates": [ -66.699898892767195, -23.0851878819619, 0.0 ] } },
{ "type": "Feature", "properties": { "id": 16.0, "x": -65.132061106993902, "y": -24.3741421797864, "provincia": "Jujuy", "ecoregion": "Selva de las Yungas", "precipitac": 2000.0, "depto": "Departamento", "name": "El Carmen", "NOMBRE_EC": "Selva de las Yungas", "Localidad": "Perico", "precipita": "699.86", "ppm75": "461.1", "TempMedia": "17.2", "Etopromed": "3.86", "UD_VolDem": "57", "UD_VCU": "471", "UD_SupCap": "125", "UD_VolRes": "30", "SASI_VolD": "77", "SASI_VCU": "483", "SASI_SupC": "210", "SASI_VolR": "60", "SASI_SupR": "40", "SASI_ProR": "1.5", "SASN_VolD": "77", "SASN_VCU": "151", "SASN_SupC": "670", "SASN_VolR": "60", "SASN_SupR": "40", "SASN_ProR": "1.5", "GSI_VolDe": "9930", "GSI_VCU": "483", "GSI_SupCa": "24000", "GSI_VolRe": "6700", "GSI_SupRe": "2680", "GSI_ProRe": "2.5", "GSN_VolDe": "9930", "GSN_VCU": "151", "GSN_SupCa": "77000", "GSN_VolRe": "6800", "GSN_SupRe": "2720", "GSN_ProRe": "2.5", "ECSI_VolD": "19020", "ECSI_VCU": "483", "ECSI_SupC": "4.6", "ECSI_VolR": "13000", "ECSI_SupR": "5200", "ECSI_ProR": "2.5", "ECSN_VolD": "19020", "ECSN_VCU": "151", "ECSN_SupC": "14.5", "ECSN_VolR": "12500", "ECSN_SupR": "5000", "ECSN_PorR": "2.5" }, "geometry": { "type": "Point", "coordinates": [ -65.132061106993902, -24.3741421797864, 0.0 ] } },
{ "type": "Feature", "properties": { "id": 18.0, "x": -64.298233363043906, "y": -23.976997682270301, "provincia": "Jujuy", "ecoregion": "Selva de las Yungas", "precipitac": 2000.0, "depto": "Departamento", "name": "Santa Bárbara", "NOMBRE_EC": "Selva de las Yungas", "Localidad": "Palma Sola", "precipita": "855.5542627", "ppm75": "821", "TempMedia": "19.7", "Etopromed": "3.52", "UD_VolDem": "53.1", "UD_VCU": "645", "UD_SupCap": "90", "UD_VolRes": "25", "SASI_VolD": "147", "SASI_VCU": "657", "SASI_SupC": "320", "SASI_VolR": "110", "SASI_SupR": "73.3", "SASI_ProR": "1.5", "SASN_VolD": "148", "SASN_VCU": "370", "SASN_SupC": "500", "SASN_VolR": "115", "SASN_SupR": "57.5", "SASN_ProR": "2", "GSI_VolDe": "637", "GSI_VCU": "657", "GSI_SupCa": "1150", "GSI_VolRe": "330", "GSI_SupRe": "165", "GSI_ProRe": "2", "GSN_VolDe": "637", "GSN_VCU": "370", "GSN_SupCa": "2050", "GSN_VolRe": "340", "GSN_SupRe": "170", "GSN_ProRe": "2", "ECSI_VolD": "15115", "ECSI_VCU": "657", "ECSI_SupC": "2.85", "ECSI_VolR": "12500", "ECSI_SupR": "5000", "ECSI_ProR": "2.5", "ECSN_VolD": "15115", "ECSN_VCU": "370", "ECSN_SupC": "5", "ECSN_VolR": "12500", "ECSN_SupR": "5000", "ECSN_PorR": "2.5" }, "geometry": { "type": "Point", "coordinates": [ -64.298233363043906, -23.976997682270301, 0.0 ] } },
{ "type": "Feature", "properties": { "id": 29.0, "x": -64.852652244119696, "y": -24.2001618574186, "provincia": "Jujuy", "ecoregion": "Chaco Seco", "precipitac": 500.0, "depto": "Departamento", "name": "San Pedro", "NOMBRE_EC": "Chaco Seco", "Localidad": "San Pedro", "precipita": "771.4", "ppm75": "737", "TempMedia": "18.7", "Etopromed": "3.09", "UD_VolDem": "54", "UD_VCU": "578", "UD_SupCap": "100", "UD_VolRes": "25", "SASI_VolD": "136", "SASI_VCU": "590", "SASI_SupC": "260", "SASI_VolR": "55", "SASI_SupR": "36.7", "SASI_ProR": "1.5", "SASN_VolD": "136", "SASN_VCU": "332", "SASN_SupC": "470", "SASN_VolR": "55", "SASN_SupR": "36.7", "SASN_ProR": "1.5", "GSI_VolDe": "53", "GSI_VCU": "590", "GSI_SupCa": "110", "GSI_VolRe": "30", "GSI_SupRe": "20", "GSI_ProRe": "1.5", "GSN_VolDe": "53", "GSN_VCU": "332", "GSN_SupCa": "185", "GSN_VolRe": "30", "GSN_SupRe": "15", "GSN_ProRe": "2", "ECSI_VolD": "13814", "ECSI_VCU": "590", "ECSI_SupC": "2.7", "ECSI_VolR": "5200", "ECSI_SupR": "2600", "ECSI_ProR": "2", "ECSN_VolD": "13814", "ECSN_VCU": "332", "ECSN_SupC": "4.5", "ECSN_VolR": "5200", "ECSN_SupR": "2080", "ECSN_PorR": "2.5" }, "geometry": { "type": "Point", "coordinates": [ -64.852652244119696, -24.2001618574186, 0.0 ] } },
{ "type": "Feature", "properties": { "id": 35.0, "x": -65.463236071587701, "y": -22.132691734302199, "provincia": "Jujuy", "ecoregion": "Puna", "precipitac": 100.0, "depto": "Departamento", "name": "Yavi", "NOMBRE_EC": null, "Localidad": null, "precipita": null, "ppm75": null, "TempMedia": null, "Etopromed": null, "UD_VolDem": null, "UD_VCU": null, "UD_SupCap": null, "UD_VolRes": null, "SASI_VolD": null, "SASI_VCU": null, "SASI_SupC": null, "SASI_VolR": null, "SASI_SupR": null, "SASI_ProR": null, "SASN_VolD": null, "SASN_VCU": null, "SASN_SupC": null, "SASN_VolR": null, "SASN_SupR": null, "SASN_ProR": null, "GSI_VolDe": null, "GSI_VCU": null, "GSI_SupCa": null, "GSI_VolRe": null, "GSI_SupRe": null, "GSI_ProRe": null, "GSN_VolDe": null, "GSN_VCU": null, "GSN_SupCa": null, "GSN_VolRe": null, "GSN_SupRe": null, "GSN_ProRe": null, "ECSI_VolD": null, "ECSI_VCU": null, "ECSI_SupC": null, "ECSI_VolR": null, "ECSI_SupR": null, "ECSI_ProR": null, "ECSN_VolD": null, "ECSN_VCU": null, "ECSN_SupC": null, "ECSN_VolR": null, "ECSN_SupR": null, "ECSN_PorR": null }, "geometry": { "type": "Point", "coordinates": [ -65.463236071587701, -22.132691734302199, 0.0 ] } },
{ "type": "Feature", "properties": { "id": 36.0, "x": -65.4300184157118, "y": -23.654420630914, "provincia": "Jujuy", "ecoregion": "Monte de Sierras y Bolsones", "precipitac": 400.0, "depto": "Departamento", "name": "Tilcara", "NOMBRE_EC": null, "Localidad": null, "precipita": null, "ppm75": null, "TempMedia": null, "Etopromed": null, "UD_VolDem": null, "UD_VCU": null, "UD_SupCap": null, "UD_VolRes": null, "SASI_VolD": null, "SASI_VCU": null, "SASI_SupC": null, "SASI_VolR": null, "SASI_SupR": null, "SASI_ProR": null, "SASN_VolD": null, "SASN_VCU": null, "SASN_SupC": null, "SASN_VolR": null, "SASN_SupR": null, "SASN_ProR": null, "GSI_VolDe": null, "GSI_VCU": null, "GSI_SupCa": null, "GSI_VolRe": null, "GSI_SupRe": null, "GSI_ProRe": null, "GSN_VolDe": null, "GSN_VCU": null, "GSN_SupCa": null, "GSN_VolRe": null, "GSN_SupRe": null, "GSN_ProRe": null, "ECSI_VolD": null, "ECSI_VCU": null, "ECSI_SupC": null, "ECSI_VolR": null, "ECSI_SupR": null, "ECSI_ProR": null, "ECSN_VolD": null, "ECSN_VCU": null, "ECSN_SupC": null, "ECSN_VolR": null, "ECSN_SupR": null, "ECSN_PorR": null }, "geometry": { "type": "Point", "coordinates": [ -65.4300184157118, -23.654420630914, 0.0 ] } }

    ]
}
