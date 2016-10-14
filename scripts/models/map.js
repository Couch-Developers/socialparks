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
    'color': '#254515',
    'colorSolid': '#5EB7DE',
    'selectedColor': '#E86523',
    'outlineColor': '#fff',
    'rollOverColor': '#79AD24',
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
        $('p .state-button').empty();
        var select = $('<button>', {
          text: 'Select State',
          click: function(e) {
            page('/states');
            e.preventDefault();
          }
        });
        $('p .state-button').append(select);

      } else if (states.length > 1){
        $('p .state-button').empty();
        var select = $('<button>', {
          text: 'Select States',
          click: function(e) {
            page('/states');
            e.preventDefault();
          }
        });
        $('p .state-button').append(select);
      } else {
        $('p .state-button').empty();
      };

      if (states.length <= 5){
        $('h3 .selection').empty();
        $('h3 .selection').append('State Selection:' + states.reduce(function (acc, curr, index) {
          var lastElem = states.length - 1;
          if (index === 0) {
            return ' ' + curr['title'];
          } else if (lastElem === index) {
            return acc = acc + ' and ' + curr['title'];
          } else {
            return acc = acc + ', ' + curr['title'];
          }
        }, ''));
      }else {
        alert('Please keep your selection to only 5 states');
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
