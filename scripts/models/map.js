var states = [];

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
      states = map.dataProvider.areas.filter(function(data){
        return data.showAsSelected === true;
      }).map(function(data){
        var id = data.id[3]+data.id[4];
        return {id:id, title:data.title};
      });

      if (states.length === 1){
        $('h2 .state-button').empty();
        var select = $('<button>', {
          text: 'Select State',
          click: function(e) {
            var stateId = states.map(function(data){
              return '/states/' + data.title;
            });
            console.log(stateId);
            e.preventDefault();
            page(stateId[0]);
          }
        });
        $('h2 .state-button').append(select);

      } else if (states.length > 1){
        $('h2 .state-button').empty();
        var select = $('<button>', {
          text: 'Select States',
          click: function(e) {
            var stateId = states.map(function(data){
              return data.title;
            });
            console.log(stateId);
            e.preventDefault();
            if (stateId.length === 2){
              page('/states/' + stateId[1] + '/' + stateId[0]);
            } else {
              page('/states/' + stateId[2] + '/' + stateId[1] + '/' + stateId[0]);
            }
          }
        });
        $('h2 .state-button').append(select);
      } else {
        $('h2 .state-button').empty();
      };

      if (states.length <=3){

        $('h2 .selection').empty();
        $('h2 .selection').append('State Selection:' + states.map(function(data){
          return ' ' + data.title;
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
      console.log(states);
    }
  } ],
  'export': {
    'enabled': false
  }
} );
