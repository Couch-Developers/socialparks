//Sample routing page for nav

page('/',
  homeController.npsPortion,
  homeController.index
  );

page('/about', aboutController.index);

page('/compare', compareController.index);

page('/park/:name',
  parkController.loadFlickrData,
  parkController.index);

page('/states/', stateController.index);

// page('/#', etcController.index);
page();
