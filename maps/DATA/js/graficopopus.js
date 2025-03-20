var grillaHistorico = L.geoJSON(historico, {
    style: function (feature) {
        return {
            fillColor: "gray",
            weight: 1,
            opacity: 0.7,
            color: '#000',
            dashArray: '0.2',
            fillOpacity: 0.1
        };
    },
    onEachFeature: function (feature, layer) {
        // Crear el popup con el canvas para el gráfico y botones de descarga
        layer.bindPopup(`
            <div>
                <h3>Medias Anuales de Precipitación (mm)<br>Históricas 1990 al 2015</h3>
                <hr class='hrx' align='left' noshade='noshade' size='1' width='100%' />
                <b><i>Fuente de Información:</i></b> Elaborado a partir de datos estadísticos<br>
                <b>Fecha de actualización:</b> Diciembre 2024
                <hr class='hrx' align='left' noshade='noshade' size='1' width='100%' />
                <div>
                    <canvas id="chart_${feature.properties.id}" width="400" height="200"></canvas>
                    <button id="download_csv_${feature.properties.id}" class="btn btn-primary">Descargar CSV</button>
                    <button id="download_png_${feature.properties.id}" class="btn btn-secondary">Descargar PNG</button>
                </div>
            </div>
        `);

        layer.on('popupopen', function (e) {
            const popup = e.popup;
            const properties = feature.properties;

            // Filtrar datos de años desde las propiedades del feature
            const labels = Object.keys(properties)
                .filter(key => /^\d{4}$/.test(key)) // Claves que sean años
                .sort(); // Ordenar por año
            const data = labels.map(year => properties[year]); // Obtener valores correspondientes

            // Obtener el canvas por ID y generar el gráfico
            const canvasId = `chart_${feature.properties.id}`;
            const canvas = popup.getElement().querySelector(`#${canvasId}`);
            if (canvas) {
                const ctx = canvas.getContext('2d');
                new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: labels,
                        datasets: [{
                            label: 'Precipitación anual (mm)',
                            data: data,
                            borderColor: 'rgba(75, 192, 192, 1)',
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        }]
                    },
                    options: {
                        responsive: true,
                        scales: {
                            x: { title: { display: true, text: 'Año' } },
                            y: { title: { display: true, text: 'Precipitación (mm)' } }
                        }
                    }
                });
            }

            // Funcionalidad para descargar CSV
            const downloadCsvButton = popup.getElement().querySelector(`#download_csv_${feature.properties.id}`);
            if (downloadCsvButton) {
                downloadCsvButton.addEventListener('click', function () {
                    const csvContent = `Año,Precipitación (mm)\n` +
                        labels.map((year, index) => `${year},${data[index]}`).join("\n");
                    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
                    const link = document.createElement("a");
                    link.href = URL.createObjectURL(blob);
                    link.download = `precipitacion_historico_${feature.properties.id}.csv`;
                    document.body.appendChild(link); // Requerido para Firefox
                    link.click();
                    document.body.removeChild(link);
                });
            }

            // Botón para descargar PNG
            const downloadPngButton = popup.getElement().querySelector(`#download_png_${feature.properties.id}`);
            if (downloadPngButton && canvas) {
                downloadPngButton.addEventListener('click', function () {
                    const link = document.createElement('a');
                    link.href = canvas.toDataURL('image/png');
                    link.download = `grafico_historico_${feature.properties.id}.png`;
                    link.click();
                });
            }
        });
    }
});

///
var grillaProyeccion = L.geoJSON(proyeccion, {
    style: function (feature) {
        return {
            fillColor: "gray",
            weight: 1,
            opacity: 0.7,
            color: '#000',
            dashArray: '0.2',
            fillOpacity: 0.1
        };
    },
    onEachFeature: function (feature, layer) {
        // Crear el popup con el canvas para el gráfico y botones de descarga
        layer.bindPopup(`
            <div>
                <h3>Medias Anuales de Precipitación (mm)<br>Proyección 2015 al 2050</h3>
                <hr class='hrx' align='left' noshade='noshade' size='1' width='100%' />
                <b><i>Fuente de Información:</i></b> Elaborado a partir de datos estadísticos<br>
                <b>Fecha de actualización:</b> Diciembre 2024
                <hr class='hrx' align='left' noshade='noshade' size='1' width='100%' />
                <div>
                    <canvas id="chart_${feature.properties.id}" width="400" height="200"></canvas>
                    <button id="download_csv_${feature.properties.id}" class="btn btn-primary">Descargar CSV</button>
                    <button id="download_png_${feature.properties.id}" class="btn btn-secondary">Descargar PNG</button>
                </div>
            </div>
        `);

        layer.on('popupopen', function (e) {
            const popup = e.popup;
            const properties = feature.properties;

            // Filtrar datos de años desde las propiedades del feature
            const labels = Object.keys(properties)
                .filter(key => /^\d{4}$/.test(key)) // Claves que sean años
                .sort(); // Ordenar por año
            const data = labels.map(year => properties[year]); // Obtener valores correspondientes

            // Obtener el canvas por ID y generar el gráfico
            const canvasId = `chart_${feature.properties.id}`;
            const canvas = popup.getElement().querySelector(`#${canvasId}`);
            if (canvas) {
                const ctx = canvas.getContext('2d');
                new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: labels,
                        datasets: [{
                            label: 'Precipitación anual (mm)',
                            data: data,
                            borderColor: 'rgba(75, 192, 192, 1)',
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        }]
                    },
                    options: {
                        responsive: true,
                        scales: {
                            x: { title: { display: true, text: 'Año' } },
                            y: { title: { display: true, text: 'Precipitación (mm)' } }
                        }
                    }
                });
            }

            // Funcionalidad para descargar CSV
            const downloadCsvButton = popup.getElement().querySelector(`#download_csv_${feature.properties.id}`);
            if (downloadCsvButton) {
                downloadCsvButton.addEventListener('click', function () {
                    const csvContent = `Año,Precipitación (mm)\n` +
                        labels.map((year, index) => `${year},${data[index]}`).join("\n");
                    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
                    const link = document.createElement("a");
                    link.href = URL.createObjectURL(blob);
                    link.download = `precipitacion_proyeccion_${feature.properties.id}.csv`;
                    document.body.appendChild(link); // Requerido para Firefox
                    link.click();
                    document.body.removeChild(link);
                });
            }

            // Funcionalidad para descargar PNG
            const downloadPngButton = popup.getElement().querySelector(`#download_png_${feature.properties.id}`);
            if (downloadPngButton && canvas) {
                downloadPngButton.addEventListener('click', function () {
                    const link = document.createElement('a');
                    link.href = canvas.toDataURL('image/png');
                    link.download = `grafico_proyeccion_${feature.properties.id}.png`;
                    link.click();
                });
            }
        });
    }
});



///
var GrillaMensual = L.geoJSON(mensual, {
    style: function (feature) {
        return {
            fillColor: "black",
            weight: 1,
            opacity: 0.5,
            color: '#000',
            dashArray: '0.2',
            fillOpacity: 0.1
        };
    },
    onEachFeature: function (feature, layer) {
        // Crear el popup con el canvas para el gráfico y botones de descarga
        layer.bindPopup(`
            <div>
                <h3>Medias Mensuales de Precipitación (mm) 2015 al 2035</h3>
                <hr class='hrx' align='left' noshade='noshade' size='1' width='100%' />
                <b><i>Fuente de Información:</i></b> Elaborado a partir de datos estadísticos<br>
                <b>Fecha de actualización:</b> Diciembre 2024
                <hr class='hrx' align='left' noshade='noshade' size='1' width='100%' />
                <div>
                    <canvas id="chart_${feature.properties.id}" width="400" height="200"></canvas>
                    <button id="download_csv_${feature.properties.id}" class="btn btn-primary">Descargar CSV</button>
                    <button id="download_png_${feature.properties.id}" class="btn btn-secondary">Descargar PNG</button>
                </div>
            </div>
        `);

        layer.on('popupopen', function (e) {
            const popup = e.popup;
            const properties = feature.properties;

            // Filtrar las claves que corresponden a datos mensuales en formato "AAAA-MM"
            const labels = Object.keys(properties).filter(key => /^\d{4}-\d{2}$/.test(key)).sort();
            const data = labels.map(key => properties[key]);

            // Generar el gráfico en el canvas
            const canvasId = `chart_${feature.properties.id}`;
            const canvas = popup.getElement().querySelector(`#${canvasId}`);
            if (canvas) {
                const ctx = canvas.getContext('2d');
                new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: labels,
                        datasets: [{
                            label: 'Valores mensuales',
                            data: data,
                            borderColor: 'rgba(75, 192, 192, 1)',
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        }]
                    },
                    options: {
                        responsive: true,
                        scales: {
                            x: { title: { display: true, text: 'Mes (AAAA-MM)' } },
                            y: { title: { display: true, text: 'Precipitación (mm)' } }
                        }
                    }
                });
            }

            // Funcionalidad para descargar CSV
            const downloadCsvButton = popup.getElement().querySelector(`#download_csv_${feature.properties.id}`);
            if (downloadCsvButton) {
                downloadCsvButton.addEventListener('click', function () {
                    const csvContent = `Mes,Precipitación (mm)\n` +
                        labels.map((label, index) => `${label},${data[index]}`).join("\n");
                    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
                    const link = document.createElement("a");
                    link.href = URL.createObjectURL(blob);
                    link.download = `precipitacion_mensual_${feature.properties.id}.csv`;
                    link.click();
                });
            }

            // Funcionalidad para descargar PNG
            const downloadPngButton = popup.getElement().querySelector(`#download_png_${feature.properties.id}`);
            if (downloadPngButton && canvas) {
                downloadPngButton.addEventListener('click', function () {
                    const link = document.createElement('a');
                    link.href = canvas.toDataURL('image/png');
                    link.download = `grafico_mensual_${feature.properties.id}.png`;
                    link.click();
                });
            }
        });
    }
});

////







