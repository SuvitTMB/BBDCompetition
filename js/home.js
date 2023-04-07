var dateString = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear()+543;
today = dd + '/' + mm + '/' + yyyy;
var cleararray = "";
var A1,A2,B1,B2,C1,C2,D1,D2,E1,E2,F1,F2;
var RH1,RH2,RH3,RH4,RH5,RH6;
var Group1, Group2, Group3;
var xReportDate = "";
var xCodeDate = "BBDCompetition";

var xRH1 = "./img/RH1.png";
var xRH2 = "./img/RH2.png";
var xRH3 = "./img/RH3.png";
var xRH4 = "./img/RH4.png";
var xRH5 = "./img/RH5.png";
var xRH6 = "./img/RH6.png";

$(document).ready(function () {
  if(sessionStorage.getItem("EmpID_Competition")==null) { location.href = "index.html"; }

//document.getElementById("menu").style.display = "block";  
  Connect_DB();
  dbCompetitionRH = firebase.firestore().collection("Competition_RH");
  dbCompetitionZDate = firebase.firestore().collection("TNIdate");
  CheckDate();
  CheckGroup();
  CheckGroupRH();
});


(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "6/31/",
    birthday = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
      birthday = dayMonth + nextYear;
  }
  
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    
        const now = new Date().getTime(),
        distance = countDown - now;
        document.getElementById("days").innerText = Math.floor(distance / (day)),
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
        if (distance < 0) {
          document.getElementById("headline").innerText = "It's my birthday!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
      }, 0)
  }()
);


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

function CheckGroup() {
  console.log("Check Group");
  var i = 0;
  var str1 = "";
  var str2 = "";
  var str3 = "";
  dbCompetitionRH.where('EmpGroup','==','Group')
  //.orderBy('Rank_Group','asc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      if(doc.data().RankGroup==1) {
        //Group1 = doc.data().EmpRH;
        str1 += '<div class="box3"><div class="box-text" style="height:50px;">'+ doc.data().EmpRH +'</div>';
        str1 += '<div style="margin:auto; width:100px;">';
        if(doc.data().EmpRH=='GroupA') {
          str1 += '<div class="box-img"><img src="'+ xRH1 +'" onerror="javascript:imgError(this)" style="width:100%;border-radius: 50%;padding-bottom: 4px;"><br>RH1</div>';
          str1 += '<div class="box-img1"><img src="'+ xRH3 +'" onerror="javascript:imgError(this)" style="width:100%;border-radius: 50%;padding-bottom: 4px;"><br>RH3</div>';
        } else if(doc.data().EmpRH=='GroupB') { 
          str1 += '<div class="box-img"><img src="'+ xRH2 +'" onerror="javascript:imgError(this)" style="width:100%;border-radius: 50%;padding-bottom: 4px;padding-bottom: 4px;"><br>RH2</div>';
          str1 += '<div class="box-img1"><img src="'+ xRH6 +'" onerror="javascript:imgError(this)" style="width:100%;border-radius: 50%;padding-bottom: 4px;padding-bottom: 4px;"><br>RH6</div>';
        } else if(doc.data().EmpRH=='GroupC') { 
          str1 += '<div class="box-img"><img src="'+ xRH4 +'" onerror="javascript:imgError(this)" style="width:100%;border-radius: 50%;padding-bottom: 4px;"><br>RH4</div>';
          str1 += '<div class="box-img1"><img src="'+ xRH5 +'" onerror="javascript:imgError(this)" style="width:100%;border-radius: 50%;padding-bottom: 4px;"><br>RH5</div>';
        }
        str1 += '</div>';
        str1 += '<div class="clr"></div><div class="box-text" style="margin-top:23px;color:#fff;font-size:16px;">'+ doc.data().Total +'</div></div>';
        $("#GroupTeam1").html(str1);  
      } else if(doc.data().RankGroup==2) { 
        //Group1 = doc.data().EmpRH;
        str2 += '<div class="box3"><div class="box-text" style="padding-top:14px;height:50px;">'+ doc.data().EmpRH +'</div>';
        str2 += '<div style="margin:auto; width:100px;">';
        if(doc.data().EmpRH=='GroupA') {
          str2 += '<div class="box-img"><img src="'+ xRH1 +'" onerror="javascript:imgError(this)" style="width:100%;border-radius: 50%;padding-bottom: 4px;"><br>RH1</div>';
          str2 += '<div class="box-img1"><img src="'+ xRH3 +'" onerror="javascript:imgError(this)" style="width:100%;border-radius: 50%;padding-bottom: 4px;"><br>RH3</div>';
        } else if(doc.data().EmpRH=='GroupB') { 
          str2 += '<div class="box-img"><img src="'+ xRH2 +'" onerror="javascript:imgError(this)" style="width:100%;border-radius: 50%;padding-bottom: 4px;"><br>RH2</div>';
          str2 += '<div class="box-img1"><img src="'+ xRH6 +'" onerror="javascript:imgError(this)" style="width:100%;border-radius: 50%; padding-bottom: 4px;"><br>RH6</div>';
        } else if(doc.data().EmpRH=='GroupC') { 
          str2 += '<div class="box-img"><img src="'+ xRH4 +'" onerror="javascript:imgError(this)" style="width:100%;border-radius: 50%;padding-bottom: 4px;"><br>RH4</div>';
          str2 += '<div class="box-img1"><img src="'+ xRH5 +'" onerror="javascript:imgError(this)" style="width:100%;border-radius: 50%;padding-bottom: 4px;"><br>RH5</div>';
        }
        str2 += '</div>';
        str2 += '<div class="clr"></div><div class="box-text" style="margin-top:23px;color:#fff;font-size:16px;">'+ doc.data().Total +'</div></div>';
        $("#GroupTeam2").html(str2);  
      } else if(doc.data().RankGroup==3) { 
        str3 += '<div class="box3"><div class="box-text" style="padding-top:26px;height:50px;">'+ doc.data().EmpRH +'</div>';
        str3 += '<div style="margin:auto; width:100px;">';
        if(doc.data().EmpRH=='GroupA') {
          str3 += '<div class="box-img"><img src="'+ xRH1 +'" onerror="javascript:imgError(this)" style="width:100%;border-radius: 50%;padding-bottom: 4px;"><br>RH1</div>';
          str3 += '<div class="box-img1"><img src="'+ xRH3 +'" onerror="javascript:imgError(this)" style="width:100%;border-radius: 50%;padding-bottom: 4px;"><br>RH3</div>';
        } else if(doc.data().EmpRH=='GroupB') { 
          str3 += '<div class="box-img"><img src="'+ xRH2 +'" onerror="javascript:imgError(this)" style="width:100%;border-radius: 50%;padding-bottom: 4px;"><br>RH2</div>';
          str3 += '<div class="box-img1"><img src="'+ xRH6 +'" onerror="javascript:imgError(this)" style="width:100%;border-radius: 50%;padding-bottom: 4px;"><br>RH6</div>';
        } else if(doc.data().EmpRH=='GroupC') { 
          str3 += '<div class="box-img"><img src="'+ xRH4 +'" onerror="javascript:imgError(this)" style="width:100%;border-radius: 50%;padding-bottom: 4px;"><div>RH4</div></div>';
          str3 += '<div class="box-img1"><img src="'+ xRH5 +'" onerror="javascript:imgError(this)" style="width:100%;border-radius: 50%;padding-bottom: 4px;"><div>RH5</div></div>';
        }
        str3 += '</div>';
        str3 += '<div class="clr"></div><div class="box-text" style="margin-top:23px;color:#fff;font-size:16px;">'+ doc.data().Total +'</div></div>';
        $("#GroupTeam3").html(str3);  
      }      
      i++;
    });
  })
}


function CheckGroupRH() {
  var i = 0;
  dbCompetitionRH.where('EmpGroup','==','RH')
  .orderBy('EmpRH','asc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      //console.log(doc.data().EmpRH+" === "+doc.data().APE70+" === "+doc.data().Focused30);
      if(i==0) {
        RH1 = doc.data().EmpRH;
        A1 = parseFloat(doc.data().APE70);
        A2 = parseFloat(doc.data().Focused30);
      } else if(i==1) { 
        RH2 = doc.data().EmpRH;
        B1 = parseFloat(doc.data().APE70);
        B2 = parseFloat(doc.data().Focused30);
      } else if(i==2) { 
        RH3 = doc.data().EmpRH;
        C1 = parseFloat(doc.data().APE70);
        C2 = parseFloat(doc.data().Focused30);
      } else if(i==3) { 
        RH4 = doc.data().EmpRH;
        D1 = parseFloat(doc.data().APE70);
        D2 = parseFloat(doc.data().Focused30);
      } else if(i==4) { 
        RH5 = doc.data().EmpRH;
        E1 = parseFloat(doc.data().APE70);
        E2 = parseFloat(doc.data().Focused30);
      } else if(i==5) { 
        RH6 = doc.data().EmpRH;
        F1 = parseFloat(doc.data().APE70);
        F2 = parseFloat(doc.data().Focused30);
      }      
      i++;
    });
    drawStacked();
  })
}

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStacked);

function drawStacked() {
  var data = google.visualization.arrayToDataTable([
    ['RH', '% APE Achievement', { role: 'annotation'}, '% Focused Product', { role: 'annotation'}],
    ['RH1', A1, A1+"%", A2, A2+"%"],
    ['RH2', B1, B1+"%", B2, B2+"%"],
    ['RH3', C1, C1+"%", C2, C2+"%"],
    ['RH4', D1, D1+"%", D2, D2+"%"],
    ['RH5', E1, E1+"%", E2, E2+"%"],
    ['RH6', F1, F1+"%", F2, F2+"%"]
  ]);

  var options = {
    annotations: {textStyle: { fontName: 'ttb-bold' }},
    hAxis: {textStyle: { fontName: 'ttb-regular' }, titleTextStyle: { fontName: 'ttb-regular' }},
    vAxis: {textStyle: { fontName: 'ttb-regular' }, titleTextStyle: { fontName: 'ttb-regular' }},
    titleTextStyle: { fontName: 'ttb-bold' },
    tooltip: {textStyle: {fontName: 'ttb-bold' }},
    fontName: 'ttb-regular',
    fontSize: 12,
    width: 360,
    height: 300,
    chartArea: {width: '80%'},
    legend: { position: 'top', maxLines: 3 },
    bar: { groupWidth: '90%' },
    backgroundColor: '#dbe5f3',
    isStacked: true,
  };
  var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}


function imgError(image) {
    image.onerror = "";
    image.src = "./img/box.jpg";
    return true;
}


