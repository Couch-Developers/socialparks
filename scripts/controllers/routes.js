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

page('/states/:state1/',
  stateController.emptyHtml,
  stateController.loadData,
  stateController.index);

page('/states/:state1/:state2/',
  stateController.emptyHtml,
  stateController.loadData,
  stateController.index);
  
page('/states/:state1/:state2/:state3',
  stateController.emptyHtml,
  stateController.loadData,
  stateController.index);

page();
