//Sample routing page for nav

page('/', homeController.index);

page('/about', aboutController.index);

page('/compare', compareController.index);

page('/park/', parkController.index);
page('/region/', regionalController.index);

// page('/#', etcController.index);
page();
