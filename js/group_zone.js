var dateString = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear()+543;
today = dd + '/' + mm + '/' + yyyy;
var cleararray = "";

var A3, B3, C3, D3, E3, F3, G3, H3, I3, J3, K3, L3, M3;
var Zone1, Zone2, Zone3, Zone4, Zone5, Zone6, Zone7;
var xClickMenu = "RH1";
var A1 = 0;
var A2 = 0;
var A3 = 0;
var B1 = 0;
var B2 = 0;
var B3 = 0;
var C1 = 0;
var C2 = 0;
var C3 = 0;
var D1 = 0;
var D2 = 0;
var D3 = 0;
var E1 = 0;
var E2 = 0;
var E3 = 0;
var F1 = 0;
var F2 = 0;
var F3 = 0;
var G1 = 0;
var G2 = 0;
var G3 = 0;
var xReportDate = "";
var xCodeDate = "BBDCompetition";



$(document).ready(function () {
  if(sessionStorage.getItem("EmpID_Competition")==null) { location.href = "index.html"; }
  Connect_DB();
  dbCompetitionZONE = firebase.firestore().collection("Competition_ZONE");
  dbCompetitionZDate = firebase.firestore().collection("TNIdate");
  CheckDate();
  SelectBox(xClickMenu);
});


function CheckDate() {
  dbCompetitionZDate.where('CodeName','==',xCodeDate)
  .limit(1)
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      xReportDate = doc.data().DateUpload;
    });
    $("#ReportDate").html(xReportDate);  
  });
}


function CheckScore() {
  var i = 0;
  dbCompetitionZONE.where('EmpRH','==', xClickMenu)
  .orderBy('RankinZone','asc')
  //.orderBy('Target_Total','desc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      console.log(doc.data().EmpZone+" === "+doc.data().APE70+" === "+doc.data().Focused30);
      if(i==0) {
        Zone1 = doc.data().EmpZone  + "\n("+ doc.data().EmpRH +")";
        A1 = parseFloat(doc.data().APE70);
        A2 = parseFloat(doc.data().Focused30);
      } else if(i==1) { 
        Zone2 = doc.data().EmpZone + "\n("+ doc.data().EmpRH +")";
        B1 = parseFloat(doc.data().APE70);
        B2 = parseFloat(doc.data().Focused30);
      } else if(i==2) { 
        Zone3 = doc.data().EmpZone + "\n("+ doc.data().EmpRH +")";
        C1 = parseFloat(doc.data().APE70);
        C2 = parseFloat(doc.data().Focused30);
      } else if(i==3) { 
        Zone4 = doc.data().EmpZone + "\n("+ doc.data().EmpRH +")";
        D1 = parseFloat(doc.data().APE70);
        D2 = parseFloat(doc.data().Focused30);
      } else if(i==4) { 
        Zone5 = doc.data().EmpZone + "\n("+ doc.data().EmpRH +")";
        E1 = parseFloat(doc.data().APE70);
        E3 = parseFloat(doc.data().Target_3);
      } else if(i==5) { 
        Zone6 = doc.data().EmpZone + "\n("+ doc.data().EmpRH +")";
        F1 = parseFloat(doc.data().APE70);
        F2 = parseFloat(doc.data().Focused30);
      } else if(i==6) { 
        Zone7 = doc.data().EmpZone + "\n("+ doc.data().EmpRH +")";
        G1 = parseFloat(doc.data().APE70);
        G2 = parseFloat(doc.data().Focused30);
      }
      i++;
    });
    drawStacked();
  })
}

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStacked);


function drawStacked() {
  //alert("pass");
  if(xClickMenu=="RH1" || xClickMenu=="RH5") {
    var data = google.visualization.arrayToDataTable([
      ['Zone', '% APE',{ role: 'annotation'}, '%Focused',{ role: 'annotation'}],
      [ Zone1, A1, A1+"%", A2, A2+"%"],
      [ Zone2, B1, B1+"%", B2, B2+"%"],
      [ Zone3, C1, C1+"%", C2, C2+"%"],
      [ Zone4, D1, D1+"%", D2, D2+"%"],
      [ Zone5, E1, E1+"%", E2, E2+"%"],
      [ Zone6, F1, F1+"%", F2, F2+"%"]
    ]);
  } else {
    var data = google.visualization.arrayToDataTable([
      ['Zone', '% APE',{ role: 'annotation'}, '%Focused',{ role: 'annotation'}],
      [ Zone1, A1, A1+"%", A2, A2+"%"],
      [ Zone2, B1, B1+"%", B2, B2+"%"],
      [ Zone3, C1, C1+"%", C2, C2+"%"],
      [ Zone4, D1, D1+"%", D2, D2+"%"],
      [ Zone5, E1, E1+"%", E2, E2+"%"]
    ]);
  }
  var options = {
      annotations: {textStyle: { fontName: 'ttb-bold' }},
      hAxis: {textStyle: { fontName: 'ttb-regular' }, titleTextStyle: { fontName: 'ttb-regular' }},
      vAxis: {textStyle: { fontName: 'ttb-bold' }, titleTextStyle: { fontName: 'ttb-regular' }},
      titleTextStyle: { fontName: 'ttb-bold' },
      tooltip: {textStyle: {fontName: 'ttb-bold' }},
      fontName: 'ttb-regular',
      fontSize: 12,
      Top: 0,
      width: 360,
      chartArea: {width: '50%'},
      legend: { position: 'none' },
      title: 'ข้อมูลภาพรวมของ '+xClickMenu,
      bars: 'horizontal',
      backgroundColor: '#dbe5f3',
      isStacked: true,
      bar: { groupWidth: "90%" }
  };
  var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}



function SelectBox(x) {
  var xx = "";
  if(x=="RH1") {
    xx = 1;
  } else if(x=="RH2") { 
    xx = 2;
  } else if(x=="RH3") { 
    xx = 3;
  } else if(x=="RH4") { 
    xx = 4;
  } else if(x=="RH5") { 
    xx = 5;
  } else if(x=="RH6") { 
    xx = 6;
  }
  var i = 1;
  for (i = 1; i < 7; i++) {
    document.getElementById(i).classList.remove('box-menu33');
  }   
  if(x!="") {
    console.log(x+"==="+xx);
    xClickMenu = x;
    document.getElementById(xx).classList.add('box-menu33');
    CheckScore()
  }
}



function imgError(image) {
    image.onerror = "";
    image.src = "./img/box.jpg";
    return true;
}

function CloseAll() {
  document.getElementById('id01').style.display='none';
}
