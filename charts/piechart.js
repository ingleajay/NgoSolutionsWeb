var yearCount1 = {}
var chartData1 = []
var postIdss = []
firebase.database().ref('nFollow').once('value').then(function(snapshot) {
  var postObject = snapshot.val();
  var user = firebase.auth().currentUser;
  postIdss.push(user.uid)
  for(i=0;i<postIdss.length;i++){
    var keys = Object.keys(postObject[postIdss[i]]);
    for(j=0;j<Object.keys(postObject[postIdss[i]]).length;j++){
      var date1 = postObject[postIdss[i]][keys[j]]
      var dateParts = (date1.split(" ")[0]).split("/")
      var d = new Date(dateParts[2],dateParts[1]-1,dateParts[0])
      yearCount1[d.getFullYear()] = (yearCount1[d.getFullYear()] === undefined)? 1: yearCount1[d.getFullYear()]+1;
    }
  }
 for (const [key, value] of Object.entries(yearCount1)) {
  chartData1.push({label:key,value:value});
}
});

window.addEventListener("load", getData1(genFunction1));
function getData1(callbackIN) {
  var ref = firebase.database().ref("data1");
  ref.once('value').then(function (snapshot) {
    callbackIN(snapshot.val())
  });
}

function genFunction1(data1) {
  var cdata1 = [];
  var len = data1.length;
  for(var i=1; i<len; i++) {
    cdata1.push({
      label: data1[i]['label'],
      value: data1[i]['value']
    });
  }


var firebaseChart1 = new FusionCharts({
    type: 'Doughnut2D',
    renderAt: 'chart-container1',
    width: '500',
    height: '450',
    dataFormat: 'json',
    "theme": "fusion",
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

"data": chartData1
}
});

firebaseChart1.render();
var radio1 =[];
var radElem1 , val1;
radio1 = document.getElementsByClassName('chart-type1');
for (i = 0; i < radio1.length; i++) {
  radElem1 = radio1[i];
  if (radElem1.type === 'radio') {
    radElem1.onclick = function() {
      val1 = this.getAttribute('value');
      val1 && firebaseChart1.chartType(val1);
    };
  }
}
}

window.addEventListener("load", getData3(genFunction3));
function getData3(callbackIN) {
  var ref = firebase.database().ref("data3");
  ref.once('value').then(function (snapshot) {
    callbackIN(snapshot.val())
  });
}

function genFunction3(data3) {
  var cdata3 = [];
  var len = data3.length;
  for(var i=1; i<len; i++) {
    cdata3.push({
      label: data3[i]['label'],
      value: data3[i]['value']
    });
  }


var firebaseChart3 = new FusionCharts({
    type: 'pareto2d',
    renderAt: 'chart-container3',
    width: '500',
      height: '450',
    dataFormat: 'json',
    "theme": "fusion",
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

"data": cdata3
}
});

firebaseChart3.render();
var radio3 =[];
var radElem3 , val3;
radio3 = document.getElementsByClassName('chart-type3');
for (i = 0; i < radio3.length; i++) {
  radElem3 = radio3[i];
  if (radElem3.type === 'radio') {
    radElem3.onclick = function() {
      val3 = this.getAttribute('value');
      val3 && firebaseChart3.chartType(val3);
    };
  }
}
}