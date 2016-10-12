//Sample routing page for nav

page('/',
  homeController.npsPortion,
  homeController.index
  );

page('/about', aboutController.index);

page('/compare', compareController.index);

page('/park/:name',
  parkController.loadParkData,
  parkController.index);

page('/states/:state1/', stateController.index);
page('/states/:state1/:state2/', stateController.index);
page('/states/:state1/:state2/:state3', stateController.index);

// page('/#', etcController.index);
page();
