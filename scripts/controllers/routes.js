//Sample routing page for nav

page('/',
  homeController.npsPortion,
  homeController.resetFilters,
  homeController.index
  );

page('/about', aboutController.index);

page('/compare', compareController.index);

page('/park/:name',
  parkController.emptyParkHtml,
  parkController.loadParkData,
  parkController.index);

page('/states',
  stateController.emptyHtml,
  stateController.loadData,
  stateController.index);


// page('/#', etcController.index);
page();
