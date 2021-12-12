var yearCount3 = {}
var chartData3 = []
firebase.database().ref('remote_admin').once('value').then(function (snapshot) {
  var user = firebase.auth().currentUser;
  var postObject = snapshot.val();
  var value = Object.values(postObject[user.uid]["customer"])
  for (i = 0; i < value.length; i++) {
    var date1 = value[i]["Date_Time"]
    var dateParts = (date1.split(" ")[0]).split("/")
    var d = new Date(dateParts[2], dateParts[1] - 1, dateParts[0])
    yearCount3[d.getFullYear()] = (yearCount3[d.getFullYear()] === undefined) ? parseInt(value[i]["Money"]) : yearCount3[d.getFullYear()] + parseInt(value[i]["Money"]);

  }
  for (const [key, value] of Object.entries(yearCount3)) {
    chartData3.push({
      label: key,
      value: value
    });
  }
})

window.addEventListener("load", getData1(genFunction1));
function getData1(callbackIN) {
  var ref = firebase.database().ref("remote_chart/data1");
  ref.once('value').then(function (snapshot) {
    callbackIN(snapshot.val())
  });
}
function genFunction1(data1) {
  var cdata1 = [];
  var len = data1.length;
  for (var i = 1; i < len; i++) {
    cdata1.push({
      label: data1[i]['label'],
      value: data1[i]['value']
    });
  }
  var firebaseChart1 = new FusionCharts({
    type: 'pie3d',
    renderAt: 'chart-container1',
    width: '500',
    height: '450',
    dataFormat: 'json',
    "theme": "fusion",
    dataSource: {
      "chart": {
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
        "showpercentintooltip": "0",
        "showAlternateHGridColor": "0",
        "usePlotGradientColor": "0",
          "enablemultislicing": "1",
        "showValues": "1",
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

      "data": chartData3
    }
  });

  firebaseChart1.render();
  var radio1 = [];
  var radElem1, val1;
  radio1 = document.getElementsByClassName('chart-type1');
  for (i = 0; i < radio1.length; i++) {
    radElem1 = radio1[i];
    if (radElem1.type === 'radio') {
      radElem1.onclick = function () {
        val1 = this.getAttribute('value');
        val1 && firebaseChart1.chartType(val1);
      };
    }
  }
}

var yearCount4 = {}
var chartData4 = []
firebase.database().ref('remote_admin').once('value').then(function (snapshot) {
  var user = firebase.auth().currentUser;
  var postObject = snapshot.val();
  var value = Object.values(postObject[user.uid]["customer"])
  for (i = 0; i < value.length; i++) {
    var date1 = value[i]["Date_Time"]
    var dateParts = (date1.split(" ")[0]).split("/")
    var d = new Date(dateParts[2], dateParts[1] - 1, dateParts[0])
    if (value[i]["gender"] == "male") {
      yearCount4[d.getFullYear()] = (yearCount4[d.getFullYear()] === undefined) ? 1 : yearCount4[d.getFullYear()] + 1;
    }
  }
  for (const [key, value] of Object.entries(yearCount4)) {
    chartData4.push({
      label: key,
      value: value
    });
  }
})


window.addEventListener("load", getData4(genFunction4));
function getData4(callbackIN) {
  var ref = firebase.database().ref("remote_chart/data1");
  ref.once('value').then(function (snapshot) {
    callbackIN(snapshot.val())
  });
}
function genFunction4(data4) {
  var cdata4 = [];
  var len = data4.length;
  for (var i = 1; i < len; i++) {
    cdata4.push({
      label: data4[i]['label'],
      value: data4[i]['value']
    });
  }
  var firebaseChart4 = new FusionCharts({
    type: 'bar2d',
    renderAt: 'chart-container4',
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
        "captionFontColor": "#602060",
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
        "paletteColors": "#008080	",
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
        "toolTipBgColor": "#FA8D67",
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

      "data": chartData4
    }
  });

  firebaseChart4.render();
  var radio4 = [];
  var radElem4, val4;
  radio4 = document.getElementsByClassName('chart-type4');
  for (i = 0; i < radio4.length; i++) {
    radElem4 = radio4[i];
    if (radElem4.type === 'radio') {
      radElem4.onclick = function () {
        val4 = this.getAttribute('value');
        val4 && firebaseChart4.chartType(val4);
      };
    }
  }
}

var yearCount5 = {}
var chartData5 = []
firebase.database().ref('remote_admin').once('value').then(function (snapshot) {
  var user = firebase.auth().currentUser;
  var postObject = snapshot.val();
  var value = Object.values(postObject[user.uid]["customer"])
  for (i = 0; i < value.length; i++) {
    var date1 = value[i]["Date_Time"]
    var dateParts = (date1.split(" ")[0]).split("/")
    var d = new Date(dateParts[2], dateParts[1] - 1, dateParts[0])
    if (value[i]["gender"] == "female") {
      yearCount5[d.getFullYear()] = (yearCount5[d.getFullYear()] === undefined) ? 1 : yearCount5[d.getFullYear()] + 1;
    }
  }
  for (const [key, value] of Object.entries(yearCount5)) {
    chartData5.push({
      label: key,
      value: value
    });
  }
})

window.addEventListener("load", getData5(genFunction5));
function getData5(callbackIN) {
  var ref = firebase.database().ref("remote_chart/data1");
  ref.once('value').then(function (snapshot) {
    callbackIN(snapshot.val())
  });
}
function genFunction5(data5) {
  var cdata5 = [];
  var len = data5.length;
  for (var i = 1; i < len; i++) {
    cdata5.push({
      label: data5[i]['label'],
      value: data5[i]['value']
    });
  }
  var firebaseChart5 = new FusionCharts({
    type: 'column2d',
    renderAt: 'chart-container5',
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
        "captionFontColor": "#602060",
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
        "paletteColors": "#00008B	",
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
        "toolTipBgColor": "#FA8D67",
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

      "data": chartData5
    }
  });

  firebaseChart5.render();
  var radio5 = [];
  var radElem5, val5;
  radio5 = document.getElementsByClassName('chart-type5');
  for (i = 0; i < radio5.length; i++) {
    radElem5 = radio5[i];
    if (radElem5.type === 'radio') {
      radElem5.onclick = function () {
        val5 = this.getAttribute('value');
        val5 && firebaseChart5.chartType(val5);
      };
    }
  }
}



var yearCount6 = {}
var chartData6 = []
firebase.database().ref('remote_admin').once('value').then(function(snapshot) {
  var user = firebase.auth().currentUser;
  var postObject = snapshot.val();
  var value = Object.values(postObject[user.uid]["customer"])
  for (i = 0; i < value.length; i++) {
    yearCount6[value[i]["donate"]] = (yearCount6[value[i]["donate"]] === undefined) ? 1 : yearCount6[value[i]["donate"]] + 1;
  }
 
  for (const [key, value] of Object.entries(yearCount6)) {
    chartData6.push({
      label: key,
      value: value
    });
  }
})



window.addEventListener("load", getData6(genFunction6));
function getData6(callbackIN) {
  var ref = firebase.database().ref("remote_chart/data1");
  ref.once('value').then(function (snapshot) {
    callbackIN(snapshot.val())
  });
}
function genFunction6(data6) {
  var cdata6 = [];
  var len = data6.length;
  for (var i = 1; i < len; i++) {
    cdata6.push({
      label: data6[i]['label'],
      value: data6[i]['value']
    });
  }
  var firebaseChart6 = new FusionCharts({
    type: 'bar2d',
    renderAt: 'chart-container6',
    width: '500',
    height: '450',
    dataFormat: 'json',
    "theme": "fusion",
    dataSource: {
      "chart": {
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
        "showpercentintooltip": "0",
        "showAlternateHGridColor": "0",
        "usePlotGradientColor": "0",
          "enablemultislicing": "1",
        "showValues": "1",
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

      "data": chartData6
    }
  });

  firebaseChart6.render();
  var radio6 = [];
  var radElem6, val6;
  radio6 = document.getElementsByClassName('chart-type6');
  for (i = 0; i < radio6.length; i++) {
    radElem6 = radio6[i];
    if (radElem6.type === 'radio') {
      radElem6.onclick = function () {
        val6 = this.getAttribute('value');
        val6 && firebaseChart6.chartType(val6);
      };
    }
  }
}


var yearCount7 = {}
var chartData7 = []
firebase.database().ref('remote_admin').once('value').then(function(snapshot) {
  var user = firebase.auth().currentUser;
  var postObject = snapshot.val();
  var value = Object.values(postObject[user.uid]["customer"])
  for (i = 0; i < value.length; i++) {
    yearCount7[value[i]["country"]] = (yearCount7[value[i]["country"]] === undefined) ? 1 : yearCount7[value[i]["country"]] + 1;
  }
 
  for (const [key, value] of Object.entries(yearCount7)) {
    chartData7.push({
      label: key,
      value: value
    });
  }
  console.log(chartData7)
})



window.addEventListener("load", getData7(genFunction7));
function getData7(callbackIN) {
  var ref = firebase.database().ref("remote_chart/data1");
  ref.once('value').then(function (snapshot) {
    callbackIN(snapshot.val())
  });
}
function genFunction7(data7) {
  var cdata7 = [];
  var len = data7.length;
  for (var i = 1; i < len; i++) {
    cdata7.push({
      label: data7[i]['label'],
      value: data7[i]['value']
    });
  }
  var firebaseChart7 = new FusionCharts({
    type: 'Doughnut2D',
    renderAt: 'chart-container7',
    width: '500',
    height: '450',
    dataFormat: 'json',
    "theme": "fusion",
    dataSource: {
      "chart": {
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
        "showpercentintooltip": "0",
        "showAlternateHGridColor": "0",
        "usePlotGradientColor": "0",
          "enablemultislicing": "1",
        "showValues": "1",
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

      "data": chartData7
    }
  });

  firebaseChart7.render();
  var radio7= [];
  var radElem7, val7;
  radio7 = document.getElementsByClassName('chart-type7');
  for (i = 0; i < radio7.length; i++) {
    radElem7 = radio7[i];
    if (radElem7.type === 'radio') {
      radElem7.onclick = function () {
        val7 = this.getAttribute('value');
        val7 && firebaseChart7.chartType(val7);
      };
    }
  }
}