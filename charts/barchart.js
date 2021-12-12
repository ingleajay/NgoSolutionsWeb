
var postIds = []
firebase.database().ref('post_app').once('value').then(function (snapshot) {
  var user = firebase.auth().currentUser;
  var postObject = snapshot.val();
  var keys = Object.keys(postObject);
  for (i = 0; i < keys.length; i++) {
    if (user.uid === postObject[keys[i]]["adminId"]) {
      postIds.push(keys[i]);
    }
  }
})
var yearCount = {}
var chartData = []
firebase.database().ref('Ngo_Likes').once('value').then(function (snapshot) {
  var postObject = snapshot.val();
  for (i = 0; i < postIds.length; i++) {
    var keys = Object.keys(postObject[postIds[i]]);
    for (j = 0; j < Object.keys(postObject[postIds[i]]).length; j++) {
      var date1 = postObject[postIds[i]][keys[j]]
      var dateParts = (date1.split(" ")[0]).split("/")
      var d = new Date(dateParts[2], dateParts[1] - 1, dateParts[0])
      yearCount[d.getFullYear()] = (yearCount[d.getFullYear()] === undefined) ? 1 : yearCount[d.getFullYear()] + 1;
    }
  }
  for (const [key, value] of Object.entries(yearCount)) {
    chartData.push({ label: key, value: value });
  }
});
window.addEventListener("load", getData(genFunction));

function getData(callbackIN) {
  var ref = firebase.database().ref("data");
  ref.once('value').then(function (snapshot) {
    callbackIN(snapshot.val())
  });
}

function genFunction(data) {
  var cdata = [];
  var len = data.length;
  for (var i = 1; i < len; i++) {
    cdata.push({
      label: data[i]['label'],
      value: data[i]['value']
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
        // "caption": "Website Visitors Trend",
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
        "paletteColors": "#666699	",
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

      "data": chartData
    }
  });

  firebaseChart.render();
  var radio = [];
  var radElem, val;
  radio = document.getElementsByClassName('chart-type');
  for (i = 0; i < radio.length; i++) {
    radElem = radio[i];
    if (radElem.type === 'radio') {
      radElem.onclick = function () {
        val = this.getAttribute('value');
        val && firebaseChart.chartType(val);
      };
    }
  }
}





firebase.database().ref('/App_Users/').once('value').then(function (snapshot) {
  var yearCount8 = {}
  var chartData8 = []
  var user = firebase.auth().currentUser;
  var postObject = snapshot.val();
  var keys = Object.keys(postObject);
  var value = Object.values(postObject);
  firebase.database().ref('/nFollow/' + user.uid).once('value').then(function (snapshot) {
    var postObject1 = snapshot.val();
    var keys1 = Object.keys(postObject1);
    for (i = 0; i < keys.length; i++) {
      for (j = 0; j < keys1.length; j++) {
        if (keys[i] == keys1[j]) {
          yearCount8[value[i]._gender] = (yearCount8[value[i]._gender] === undefined) ? 1 : yearCount8[value[i]._gender] + 1;
        }
      }
    }
    for (const [key, value] of Object.entries(yearCount8)) {
      chartData8.push({
        label: key,
        value: value
      });
    }
    console.log(chartData8)


    window.addEventListener("load", getData8(genFunction8));

    function getData8(callbackIN) {
      var ref = firebase.database().ref("data");
      ref.once('value').then(function (snapshot) {
        callbackIN(snapshot.val())
      });
    }

    function genFunction8(data8) {
      var cdata8 = [];
      var len = data8.length;
      for (var i = 1; i < len; i++) {
        cdata8.push({
          label: data8[i]['label'],
          value: data8[i]['value']
        });
      }


      var firebaseChart8 = new FusionCharts({

        type: 'pie3d',
        renderAt: 'chart-container8',
        width: '500',
        height: '450',
        dataFormat: 'json',

        dataSource: {
          "chart": {
            // "caption": "Website Visitors Trend",
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

          "data": chartData8
        }
      });

      firebaseChart8.render();
      var radio8 = [];
      var radElem8, val8;
      radio8 = document.getElementsByClassName('chart-type8');
      for (i = 0; i < radio8.length; i++) {
        radElem8 = radio8[i];
        if (radElem8.type === 'radio') {
          radElem8.onclick = function () {
            val8 = this.getAttribute('value');
            val8 && firebaseChart8.chartType(val8);
          };
        }
      }
    }
  })
})


firebase.database().ref('/App_Users/').once('value').then(function (snapshot) {
  var yearCount9 = {}
  var chartData9 = []
  var user = firebase.auth().currentUser;
  var postObject = snapshot.val();
  var keys = Object.keys(postObject);
  var value = Object.values(postObject);
  firebase.database().ref('/nFollow/' + user.uid).once('value').then(function (snapshot) {
    var postObject1 = snapshot.val();
    var keys1 = Object.keys(postObject1);
    for (i = 0; i < keys.length; i++) {
      for (j = 0; j < keys1.length; j++) {
        if (keys[i] == keys1[j]) {
          var date1 = value[i]._date
          var dateParts = (date1.split(" ")[0]).split("/")
          var d = new Date(dateParts[2], dateParts[1] - 1, dateParts[0])
          if (value[i]._city == "mumbai") {
            yearCount9[d.getFullYear()] = (yearCount9[d.getFullYear()] === undefined) ? 1 : yearCount9[d.getFullYear()] + 1;
          }
        }
      }
    }
    for (const [key, value] of Object.entries(yearCount9)) {
      chartData9.push({
        label: key,
        value: value
      });
    }



    window.addEventListener("load", getData9(genFunction9));

    function getData9(callbackIN) {
      var ref = firebase.database().ref("data");
      ref.once('value').then(function (snapshot) {
        callbackIN(snapshot.val())
      });
    }

    function genFunction9(data9) {
      var cdata9 = [];
      var len = data9.length;
      for (var i = 1; i < len; i++) {
        cdata9.push({
          label: data9[i]['label'],
          value: data9[i]['value']
        });
      }


      var firebaseChart9 = new FusionCharts({

        type: 'column2d',
        renderAt: 'chart-container9',
        width: '500',
        height: '450',
        dataFormat: 'json',

        dataSource: {
          "chart": {
            // "caption": "Website Visitors Trend",
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

          "data": chartData9
        }
      });

      firebaseChart9.render();
      var radio9 = [];
      var radElem9, val9;
      radio9 = document.getElementsByClassName('chart-type9');
      for (i = 0; i < radio9.length; i++) {
        radElem9 = radio9[i];
        if (radElem9.type === 'radio') {
          radElem9.onclick = function () {
            val9 = this.getAttribute('value');
            val9 && firebaseChart9.chartType(val9);
          };
        }
      }
    }
  })
})


var yearCount10 = {}
var chartData10 = []
firebase.database().ref('Donation').once('value').then(function (snapshot) {
  var user = firebase.auth().currentUser;
  var postObject = snapshot.val();
  var keys = Object.keys(postObject);
  for (i = 0; i < keys.length; i++) {
    if (user.uid === postObject[keys[i]]["ngo_adminid"]) {
      var value = postObject[keys[i]]["sendAmount"]
      var date1 = postObject[keys[i]]["date_Time"]
      var dateParts = (date1.split(" ")[0]).split("/")
      var d = new Date(dateParts[2], dateParts[1] - 1, dateParts[0])
      yearCount10[d.getFullYear()] = (yearCount10[d.getFullYear()] === undefined) ? parseInt(value) : yearCount10[d.getFullYear()] + parseInt(value);

    }
  }

  for (const [key, value] of Object.entries(yearCount10)) {
    chartData10.push({
      label: key,
      value: value
    });
  }
  console.log(chartData10)


  window.addEventListener("load", getData10(genFunction10));

  function getData10(callbackIN) {
    var ref = firebase.database().ref("data");
    ref.once('value').then(function (snapshot) {
      callbackIN(snapshot.val())
    });
  }

  function genFunction10(data10) {
    var cdata10 = [];
    var len = data10.length;
    for (var i = 1; i < len; i++) {
      cdata10.push({
        label: data10[i]['label'],
        value: data10[i]['value']
      });
    }


    var firebaseChart10 = new FusionCharts({

      type: 'column2d',
      renderAt: 'chart-container10',
      width: '500',
      height: '450',
      dataFormat: 'json',

      dataSource: {
        "chart": {
          // "caption": "Website Visitors Trend",
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

        "data": chartData10
      }
    });

    firebaseChart10.render();
    var radio10 = [];
    var radElem10, val10;
    radio10 = document.getElementsByClassName('chart-type10');
    for (i = 0; i < radio10.length; i++) {
      radElem10 = radio10[i];
      if (radElem10.type === 'radio') {
        radElem10.onclick = function () {
          val10 = this.getAttribute('value');
          val10 && firebaseChart10.chartType(val10);
        };
      }
    }
  }
})


