// Grupos de capas bases
var baseLayers = [
	{
		name: "ArgenMap",
		layer: argenmap,
	},
	{
		name: "Open Street Map",
		layer: osm,
	},
	{
		name: "Google Satelite",
		layer: google
	}];

// Grupos de capas interactivas
var overlayMaps = [
	{
		group: "Datos Anuales (mm)",
		collapsed: false,
		layers: [
			{
				active: false,
				name: "Históricos (mm)",
				layer: grillaHistorico,
				transparent: true,
				opacity: 0.5,
			}, {
				active: false,
				name: "Proyectados (mm)",
				layer: grillaProyeccion,
				transparent: true,
				opacity: 0.5,
			},
			
		]
	},
	{
		group: "Datos Mensuales (mm) ",
		collapsed: false,
		layers: [

			{
				active: false,
				name: "Datos Mensuales ",
				layer: GrillaMensual,
				transparent: true,
				opacity: 0.5,
			},
		]
	},
	{
	 group: "Estaciones Meteorólogicas ",
		collapsed: false,
		layers: [

			{
				active: false,
				name: "Servicio Met. Nacional ",
				layer: EstacionesSMN,
				transparent: true,
				opacity: 0.5,
			},
			{
				active: false,
				name: "Red INTA ",
				layer: EstacionesINTA,
				transparent: true,
				opacity: 0.5,
			},

		]
	}
	

];
//panel ambiental
// var infoAmb = [
// 	{
// 		group: "Información Ambiental",
// 		collapsed: true,
// 		layers: [
// 			// {
// 			// 	active: false,
// 			// 	name: "Rios",
// 			// 	layer: Rios,
// 			// 	transparent: true,
// 			// 	opacity: 0.5,
// 			// },
// 			{
// 				active: false,
// 				name: "Estaciones Meteorologicas",
// 				layer: EstacionesSMN,
// 				transparent: true,
// 				opacity: 0.5,
// 			},
// 			{
// 				active: false,
// 				name: "Suelos",
// 				layer: SuelosTipo,
// 				transparent: true,
// 				opacity: 0.5,
// 			},
// 			{
// 				active: false,
// 				name: "Ecoregion",
// 				layer: Ecoregion,
// 				transparent: true,
// 				opacity: 0.5,
// 			},
// 			{
// 				active: false,
// 				name: "Cuencas Hídricas",
// 				layer: CuencasHidro,
// 				transparent: true,
// 				opacity: 0.5,
// 			},
// 			{
// 				active: false,
// 				name: "Regiones Hidrogeográficas",
// 				layer: RegionesHirdo,
// 				transparent: true,
// 				opacity: 0.5,
// 			},

// 			{
// 				active: false,
// 				name: "Unidades Geológicas (2.5M)",
// 				layer: GeologicoIGN,
// 				transparent: true,
// 				opacity: 0.5,
// 			},
			
// 		]
// 	},
// 	// {
// 	// 	group: "Arsénico",
// 	// 	collapsed: true,
// 	// 	layers: [
// 	// 		{
// 	// 			active: false,
// 	// 			name: "Dptos con Niveles de Arsenico",
// 	// 			layer: DeptoArsenico,
// 	// 			transparent: true,
// 	// 			opacity: 0.5,
// 	// 		},


// 	// 	]
// 	// }

// ];


// panel de CC
// var panelCC = [
// 	{
// 		title: "Escenarios de CC",
// 		group: "Escenarios de CC",
// 		collapsed: true,
// 		layers: [
// 			{
// 				active: false,
// 				name: " PPM 4.5 Actual",
// 				layer: Ppm45Actual,
// 				transparent: true,
// 				opacity: 0.5,
// 			},
// 			{
// 				active: false,
// 				name: "PPM 4.5 Futuro Cercano (2050)",
// 				layer: Ppm45FC,
// 				transparent: true,
// 				opacity: 0.5,
// 			},
// 			{
// 				active: false,
// 				name: "PPM 4.5 Futuro Lejano (2100)",
// 				layer: Ppm45FL,
// 				transparent: true,
// 				opacity: 0.5,
// 			},
// 			{
// 				active: false,
// 				name: "PPM 8.5 Actual",
// 				layer: Ppm85Actual,
// 				transparent: true,
// 				opacity: 0.5,
// 			},
// 			{
// 				active: false,
// 				name: "PPM 8.5 Futuro Cercano (2050)",
// 				layer: Ppm85FC,
// 				transparent: true,
// 				opacity: 0.5,
// 			},
// 			{
// 				active: false,
// 				name: "PPM 8.5 Futuro Lejano (2100)",
// 				layer: Ppm85FL,
// 				transparent: true,
// 				opacity: 0.5,
// 			},
// 			{
// 				active: false,
// 				name: " Temp Media 4.5 Actual",
// 				layer: temMedia45Actual,
// 				transparent: true,
// 				opacity: 0.5,
// 			},
// 			{
// 				active: false,
// 				name: "Temp Media 4.5 Futuro Cercano (2050)",
// 				layer: temMedia45FC,
// 				transparent: true,
// 				opacity: 0.5,
// 			},
// 			{
// 				active: false,
// 				name: "Temp Media 4.5 Futuro Lejano (2100)",
// 				layer: temMedia45FL,
// 				transparent: true,
// 				opacity: 0.5,
// 			},
// 			{
// 				active: false,
// 				name: "Temp Media 8.5 Actual",
// 				layer: temMedia85Actual,
// 				transparent: true,
// 				opacity: 0.5,
// 			},
// 			{
// 				active: false,
// 				name: "Temp Media 8.5 Futuro Cercano (2050)",
// 				layer: temMedia85FC,
// 				transparent: true,
// 				opacity: 0.5,
// 			},
// 			{
// 				active: false,
// 				name: "Temp Media 8.5 Futuro Lejano (2100)",
// 				layer: temMedia85FL,
// 				transparent: true,
// 				opacity: 0.5,
// 			},
// 		]
// 	},
// 	// {
// 	// 	group: "Temperatura Media",
// 	// 	collapsed: true,
// 	// 	layers: [
// 	// 		{
// 	// 			active: false,
// 	// 			name: " Temp Media 4.5 Actual",
// 	// 			layer: temMedia45Actual,
// 	// 			transparent: true,
// 	// 			opacity: 0.5,
// 	// 		},
// 	// 		{
// 	// 			active: false,
// 	// 			name: "Temp Media 4.5 Futuro Cercano (2050)",
// 	// 			layer: temMedia45FC,
// 	// 			transparent: true,
// 	// 			opacity: 0.5,
// 	// 		},
// 	// 		{
// 	// 			active: false,
// 	// 			name: "Temp Media 4.5 Futuro Lejano (2100)",
// 	// 			layer: temMedia45FL,
// 	// 			transparent: true,
// 	// 			opacity: 0.5,
// 	// 		},
// 	// 		{
// 	// 			active: false,
// 	// 			name: "Temp Media 8.5 Actual",
// 	// 			layer: temMedia85Actual,
// 	// 			transparent: true,
// 	// 			opacity: 0.5,
// 	// 		},
// 	// 		{
// 	// 			active: false,
// 	// 			name: "Temp Media 8.5 Futuro Cercano (2050)",
// 	// 			layer: temMedia85FC,
// 	// 			transparent: true,
// 	// 			opacity: 0.5,
// 	// 		},
// 	// 		{
// 	// 			active: false,
// 	// 			name: "Temp Media 8.5 Futuro Lejano (2100)",
// 	// 			layer: temMedia85FL,
// 	// 			transparent: true,
// 	// 			opacity: 0.5,
// 	// 		},
// 	// 	]
// 	// }
// ];


//panel de control agregado//
var panelLayers = new L.Control.PanelLayers(baseLayers, null,
	{
		compact: true,
		collapsed: false,
		collapsibleGroups: true,
		position: 'topleft',
	});
var panelLayers1 = new L.Control.PanelLayers(null, overlayMaps,
	{
		compact: true,
		collapsed: false,
		collapsibleGroups: true,
		position: 'topleft',
	});

// var panelLayers2 = new L.Control.PanelLayers(null, infoAmb,
// 		{
// 			compact: true,
// 			collapsed: false,
// 			collapsibleGroups: true,
// 			position: 'topleft',
// 		});


