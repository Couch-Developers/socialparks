var map = AmCharts.makeChart( 'chartdiv', {
  'type': 'map',
  'theme': 'light',

  'panEventsEnabled': true,
  //'backgroundColor': '#666666',
  //'backgroundAlpha': 1,
  'dataProvider': {
    'map': 'usaLow',
    'getAreasFromMap': true
  },
  'areasSettings': {
    'autoZoom': false,
    'color': '#CDCDCD',
    'colorSolid': '#5EB7DE',
    'selectedColor': '#5EB7DE',
    'outlineColor': '#666666',
    'rollOverColor': '#88CAE7',
    'rollOverOutlineColor': '#FFFFFF',
    'selectable': true
  },
  'listeners': [ {
    'event': 'clickMapObject',
    'method': function( event ) {
      // deselect the area by assigning all of the dataProvider as selected object
      map.selectedObject = map.dataProvider;

      // toggle showAsSelected
      event.mapObject.showAsSelected = !event.mapObject.showAsSelected;

      // bring it to an appropriate color
      map.returnInitialColor( event.mapObject );

      var states = map.dataProvider.areas.filter(function(data){
        return data.showAsSelected === true;
      }).map(function(data){
        var id = data.id[3]+data.id[4];
        return {id:id, title:data.title};
      });
      if (states.length <=3){

        $('h2 .selection').empty();
        $('h2 .selection').append(states.map(function(data){
          return data.title + '<br>';
        }));
      }else {
        alert('Please keep your selection to only 3 states');
        // deselect the area by assigning all of the dataProvider as selected object
        map.selectedObject = map.dataProvider;

        // toggle showAsSelected
        event.mapObject.showAsSelected = !event.mapObject.showAsSelected;

        // bring it to an appropriate color
        map.returnInitialColor( event.mapObject );
      }

    }
  } ],
  'export': {
    'enabled': false
  }
} );
