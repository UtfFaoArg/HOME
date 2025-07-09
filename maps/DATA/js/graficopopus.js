// Grilla Histórica
var grillaHistorico = L.geoJSON(historico, {
    style: () => ({
        fillColor: "gray",
        weight: 1,
        opacity: 0.7,
        color: '#000',
        dashArray: '0.2',
        fillOpacity: 0.1
    }),
    onEachFeature: function (feature, layer) {
        layer.bindPopup(`
            <div>
                <h3>Medias Anuales de Precipitación (mm)<br>Históricas 1990 al 2015</h3>
                <hr class='hrx' width='100%' />
                <b><i>Fuente de Información:</i></b> Elaborado a partir de datos del Ministerio de Ambiente y Desarrollo Sostenible. (2023). <br> <i>Cambios observados y escenarios climáticos futuros para Argentina para diferentes horizontes temporales y umbrales de calentamiento global.</i><br>
                <b>Fecha de actualización:</b> Diciembre 2024
                <hr class='hrx' width='100%' />
                <div>
                    <canvas id="chart_${feature.properties.id}" width="400" height="200"></canvas>
                    <button id="download_csv_${feature.properties.id}" class="btn btn-primary">Descargar CSV</button>
                    <button id="download_png_${feature.properties.id}" class="btn btn-secondary">Descargar PNG</button>
                </div>
            </div>
        `);

        layer.on('popupopen', function (e) {
            const popup = e.popup;
            const props = feature.properties;

            const labels = Object.keys(props).filter(k => /^\d{4}$/.test(k)).sort();
            const data = labels.map(year => props[year]);

            const canvas = popup.getElement().querySelector(`#chart_${props.id}`);
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
                            backgroundColor: 'rgba(75, 192, 192, 0.2)'
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

            const csvBtn = popup.getElement().querySelector(`#download_csv_${props.id}`);
            if (csvBtn) {
                csvBtn.addEventListener('click', function () {
                    const bom = '\uFEFF';
                    const csv = bom + "Año,Precipitación (mm)\n" + labels.map((y, i) => `${y},${data[i]}`).join("\n");
                    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
                    const link = document.createElement("a");
                    link.href = URL.createObjectURL(blob);
                    link.download = `precipitacion_historico_${props.id}.csv`;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                });
            }

            const pngBtn = popup.getElement().querySelector(`#download_png_${props.id}`);
            if (pngBtn && canvas) {
                pngBtn.addEventListener('click', function () {
                    const link = document.createElement("a");
                    link.href = canvas.toDataURL("image/png");
                    link.download = `grafico_historico_${props.id}.png`;
                    link.click();
                });
            }
        });
    }
});

// Grilla Proyección
var grillaProyeccion = L.geoJSON(proyeccion, {
    style: () => ({
        fillColor: "gray",
        weight: 1,
        opacity: 0.7,
        color: '#000',
        dashArray: '0.2',
        fillOpacity: 0.1
    }),
    onEachFeature: function (feature, layer) {
        layer.bindPopup(`
            <div>
                <h3>Medias Anuales de Precipitación (mm)<br>Proyección 2015 al 2050</h3>
                <hr class='hrx' width='100%' />
                <b><i>Fuente de Información:</i></b> Elaborado a partir de datos del Ministerio de Ambiente y Desarrollo Sostenible. (2023). <br> <i>Cambios observados y escenarios climáticos futuros para Argentina para diferentes horizontes temporales y umbrales de calentamiento global.</i><br>
                <b>Fecha de actualización:</b> Diciembre 2024
                <hr class='hrx' width='100%' />
                <div>
                    <canvas id="chart_${feature.properties.id}" width="400" height="200"></canvas>
                    <button id="download_csv_${feature.properties.id}" class="btn btn-primary">Descargar CSV</button>
                    <button id="download_png_${feature.properties.id}" class="btn btn-secondary">Descargar PNG</button>
                </div>
            </div>
        `);

        layer.on('popupopen', function (e) {
            const popup = e.popup;
            const props = feature.properties;

            const labels = Object.keys(props).filter(k => /^\d{4}$/.test(k)).sort();
            const data = labels.map(year => props[year]);

            const canvas = popup.getElement().querySelector(`#chart_${props.id}`);
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
                            backgroundColor: 'rgba(75, 192, 192, 0.2)'
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

            const csvBtn = popup.getElement().querySelector(`#download_csv_${props.id}`);
            if (csvBtn) {
                csvBtn.addEventListener('click', function () {
                    const bom = '\uFEFF';
                    const csv = bom + "Año,Precipitación (mm)\n" + labels.map((y, i) => `${y},${data[i]}`).join("\n");
                    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
                    const link = document.createElement("a");
                    link.href = URL.createObjectURL(blob);
                    link.download = `precipitacion_proyeccion_${props.id}.csv`;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                });
            }

            const pngBtn = popup.getElement().querySelector(`#download_png_${props.id}`);
            if (pngBtn && canvas) {
                pngBtn.addEventListener('click', function () {
                    const link = document.createElement("a");
                    link.href = canvas.toDataURL("image/png");
                    link.download = `grafico_proyeccion_${props.id}.png`;
                    link.click();
                });
            }
        });
    }
});

// Grilla Mensual
var GrillaMensual = L.geoJSON(mensual, {
    style: () => ({
        fillColor: "black",
        weight: 1,
        opacity: 0.5,
        color: '#000',
        dashArray: '0.2',
        fillOpacity: 0.1
    }),
    onEachFeature: function (feature, layer) {
        layer.bindPopup(`
            <div>
                <h3>Medias Mensuales de Precipitación (mm)<br>2015 al 2035</h3>
                <hr class='hrx' width='100%' />
               <b><i>Fuente de Información:</i></b> Elaborado a partir de datos del Ministerio de Ambiente y Desarrollo Sostenible. (2023). <br> <i>Cambios observados y escenarios climáticos futuros para Argentina para diferentes horizontes temporales y umbrales de calentamiento global.</i><br>
                <b>Fecha de actualización:</b> Diciembre 2024
                <hr class='hrx' width='100%' />
                <div>
                    <canvas id="chart_${feature.properties.id}" width="400" height="200"></canvas>
                    <button id="download_csv_${feature.properties.id}" class="btn btn-primary">Descargar CSV</button>
                    <button id="download_png_${feature.properties.id}" class="btn btn-secondary">Descargar PNG</button>
                </div>
            </div>
        `);

        layer.on('popupopen', function (e) {
            const popup = e.popup;
            const props = feature.properties;

            const labels = Object.keys(props).filter(k => /^\d{4}-\d{2}$/.test(k)).sort();
            const data = labels.map(key => props[key]);

            const canvas = popup.getElement().querySelector(`#chart_${props.id}`);
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
                            backgroundColor: 'rgba(75, 192, 192, 0.2)'
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

            const csvBtn = popup.getElement().querySelector(`#download_csv_${props.id}`);
            if (csvBtn) {
                csvBtn.addEventListener('click', function () {
                    const bom = '\uFEFF';
                    const csv = bom + "Mes,Precipitación (mm)\n" + labels.map((l, i) => `${l},${data[i]}`).join("\n");
                    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
                    const link = document.createElement("a");
                    link.href = URL.createObjectURL(blob);
                    link.download = `precipitacion_mensual_${props.id}.csv`;
                    link.click();
                });
            }

            const pngBtn = popup.getElement().querySelector(`#download_png_${props.id}`);
            if (pngBtn && canvas) {
                pngBtn.addEventListener('click', function () {
                    const link = document.createElement("a");
                    link.href = canvas.toDataURL("image/png");
                    link.download = `grafico_mensual_${props.id}.png`;
                    link.click();
                });
            }
        });
    }
});

////







