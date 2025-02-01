var pobInd = 
{
    "type": "FeatureCollection",
    "name": "pobIndigena",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "fid": 2522.0, "com_id": 46001.0, "nom_com": "Comunidad Indígena de Guandacol", "p_com": "Diaguita", "prov_id": 46.0, "prov_com": "La Rioja", "depto_id": "28", "depto_com": "Coronel Felipe Varela", "loc_id": 20.0, "loc_com": "Guandacol", "barrio_com": "Pje. Campo Grande", "zona_com": "Sin dato", "pers_j_edo": "Inscripta", "pers_t_ins": "Nacional", "pers_n_ins": "Resolución INAI N° 101", "pers_f_ins": "2008-03-18", "pers_r_ins": "Registro Nacional de Comunidades Indígenas (Re.Na.C.I.)", "rel_edo": "Sin relevar", "rel_f": null, "rel_r_inai": null, "rel_f_r": null, "codepto": 4628.0 }, "geometry": { "type": "Point", "coordinates": [ -68.461536111111116, -29.507637777777777 ] } }
    ]
    }
    

var IconPobInd = {
    radius: 6,
    fillColor: "#807dba",
    color: "#fff",
    weight: 0.5,
    opacity: 1,
    fillOpacity: 0.8
};

// Contenido del popup para cada feature
function popupContentPobInd(feature) {
    return (
        "<div id='Estilo1'><h3>Descripción</h3></div>" +
        "<hr class='hrx' style='color: #ef7d26;' align='left' noshade='noshade' size='1' width='100%' />" +
        "<div id='Estilo3a'>" +
        "<b> Nombre : </b>" + feature.properties.nom_com + "<br>" +
        "<b> Comunidad: </b>" + feature.properties.p_com + "<br>" +
        
        "<br>" +
        "<b><i> Fuente de Información:  </b>  INAI - Censo 2022<br>" +
        // "<b> Fecha de actualización:  </b> - </i>  "  +
        "</div>"
    )
};


// Función para generar la leyenda
function createLegendPobOriginaria() {
    var legend = L.control({ position: 'bottomright' });

    legend.onAdd = function () {
        var div = L.DomUtil.create('div', 'info legend');
        var labels = [];

        // Array con los estilos y sus etiquetas correspondientes
        var styles = [
            { label: 'Población Originaria', color: '#807dba' },
           
            
            // Agrega aquí el resto de estilos con su respectiva etiqueta y color
        ];

        // Genera el contenido HTML de la leyenda
        styles.forEach(function (style) {
            labels.push(
                '<i style="background:' + style.color + '"></i> ' + style.label
            );
        });

        div.innerHTML = labels.join('<br>');
        return div;
    };
// Función para mostrar/ocultar la leyenda
function toggleLegend() {
    if (map.hasLayer(POBIndigena)) {
        legend.addTo(map);
    } else {
        legend.remove();
    }
}
// Eliminar la leyenda al inicio
legend.remove();
// Escucha el cambio de estado de la capa
map.on('overlayadd overlayremove', toggleLegend);
}