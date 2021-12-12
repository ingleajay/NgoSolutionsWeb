window.addEventListener("load", getData2(genFunction2));
function getData2(callbackIN) {
  var ref = firebase.database().ref("data2");
  ref.once('value').then(function (snapshot) {
    callbackIN(snapshot.val())
  });
}

function genFunction2(data2) {
  var cdata2 = [];
  var len = data2.length;
  for(var i=1; i<len; i++) {
    cdata2.push({
      id :data2[i]['id'],
      value: data2[i]['value']
    });
   
  }

var firebaseChart2 = new FusionCharts({
    type: 'maps/world',
    renderAt: 'chart-container2',
    width: '500',
    height: '450',
    dataFormat: 'json',
    "theme": "fusion",
    dataSource: {
        "chart": {
            // "caption": "Global Population",
            "theme": "fusion",
            "formatNumberScale": "0",
            "numberSuffix": "M",
            "showLabels": "1",
            "includeNameInLabels": "1",
            "useSNameInLabels": "0"
        },
        "colorrange": {
            "color": [{
                "minvalue": "0",
                "maxvalue": "100",
                "code": "#D0DFA3",
                "displayValue": "< 100M"
            }, {
                "minvalue": "100",
                "maxvalue": "500",
                "code": "#B0BF92",
                "displayValue": "100-500M"
            }, {
                "minvalue": "500",
                "maxvalue": "1000",
                "code": "#91AF64",
                "displayValue": "500M-1B"
            }, {
                "minvalue": "1000",
                "maxvalue": "5000",
                "code": "#A9FF8D",
                "displayValue": "> 1B"
            }]
        },
        
"data": cdata2
}
});

firebaseChart2.render();

}