var yearCount2 = {}
var chartData2 = []
firebase.database().ref('remote_admin').once('value').then(function(snapshot) {
  var user = firebase.auth().currentUser;
  var postObject = snapshot.val();
  var keys = Object.keys(postObject);
  var value = Object.values(postObject)
  for (i = 0 ; i < keys.length ; i++){
    if (user.uid === keys[i]){
      key=Object.keys(value[i])
      for(j = 0 ; j < key.length ; j++){
        var val= Object.values(postObject[keys[i]][key[j]])
        for(k=0; k < val.length;k++){
          var date2 = val[k].Date_Time
          var dateParts = (date2.split(" ")[0]).split("/")
          var d1 = new Date(dateParts[2],dateParts[1]-1,dateParts[0])
          yearCount2[d1.getFullYear()] = (yearCount2[d1.getFullYear()] === undefined)? 1: yearCount2[d1.getFullYear()]+1;
         }
         
      }
    }
  }
  for (const [key, value] of Object.entries(yearCount2)) {
    chartData2.push({label:key,value:value});
  }
  window.addEventListener("load", getData(genFunction));

  function genFunction(data2) {
    var cdata = [];
    var len = data2.length;
    for(var i=1; i<len; i++) {
      cdata.push({
        label: data2[i]['label'],
        value: data2[i]['value']
      });
    }
  
  
  var firebaseChart = new FusionCharts({
     
      type: 'column2d',
      renderAt: 'chart-container',
      width: '500',
        height: '450',
      dataFormat: 'json',
      
      dataSource: {
  "chart": {
      // "caption": "Donation Trend 2020 ",
            // "subCaption": "Last 7 Days{br}ACME Inc.",
            "subCaptionFontBold": "0",
            "captionFontSize": "20",
            "subCaptionFontSize": "17",
            "captionPadding": "15",
            "captionFontColor": " #862d59",
            "baseFontSize": "14",
            "baseFont": "Barlow",
            "canvasBgAlpha": "0",
            "bgColor": "#FFFFFF",
            "bgAlpha": "100",
            "showBorder": "0",
            "showCanvasBorder": "0",
            "showPlotBorder": "0",
            "showAlternateHGridColor": "0",
            "usePlotGradientColor": "0",
            // "paletteColors": "#FF0000	",
            "showValues": "0",
            "divLineAlpha": "5",
            "showAxisLines": "1",
            "drawAnchors": "0",
            "xAxisLineColor": "#000000",
            "xAxisLineThickness": "0.7",
            "xAxisLineAlpha": "50",
            "yAxisLineColor": "#000000",
            "yAxisLineThickness": "0.7",
            "yAxisLineAlpha": "50",
            "baseFontColor": "#8C8C8C",
            "toolTipBgColor": " #ffc266",
            "toolTipPadding": "10",
            "toolTipColor": "#FFFFFF",
            "toolTipBorderRadius": "3",
            "toolTipBorderAlpha": "0",
            "drawCrossLine": "1",
            "crossLineColor": "#FFFFFF",
            "crossLineAlpha": "60",
            "crossLineThickness": "0.7",
            "alignCaptionWithCanvas": "1"
  },
  
  "data": chartData2
  }
  });
  
  firebaseChart.render();
  var radio =[];
  var radElem ,val;
  radio = document.getElementsByClassName('chart-type');
  for (i = 0; i < radio.length; i++) {
    radElem = radio[i];
    if (radElem.type === 'radio') {
      radElem.onclick = function() {
        val = this.getAttribute('value');
        val && firebaseChart.chartType(val);
      };
    }
  }
  }
})
function getData(callbackIN) {
  var ref = firebase.database().ref("remote_chart/data2");
  ref.once('value').then(function (snapshot) {
    callbackIN(snapshot.val())
  });
}





