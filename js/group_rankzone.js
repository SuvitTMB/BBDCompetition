var dateString = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear()+543;
today = dd + '/' + mm + '/' + yyyy;
var cleararray = "";

var id0, id1, id2, id3, id4, id5, id6, id7, id8, id9, id10, id11, id12, id13, id14, id15, id16, id17, id18, id19, id20;
var id21, id22, id23, id24, id25, id26, id27, id28, id29, id30, id31, id32, id33, id34, id35;
var a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20;
var aa0, aa1, aa2, aa3, aa4, aa5, aa6, aa7, aa8, aa9, aa10, aa11, aa12, aa13, aa14, aa15, aa16, aa17, aa18, aa19, aa20;
var a21, a22, a23, a24, a25, a26, a27, a28, a29, a30, a31, a32, a33, a34, a35;
var n0, n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11, n12, n13, n14, n15, n16, n17, n18, n19, n20;
var n21, n22, n23, n24, n25, n26, n27, n28, n29, n30, n31, n32, n33, n34, n35;
var xReportDate = "";
var xCodeDate = "BBDCompetition";



$(document).ready(function () {
  if(sessionStorage.getItem("EmpID_Competition")==null) { location.href = "index.html"; }
  Connect_DB();
  dbLeagueMember = firebase.firestore().collection("BBD_LeagueMember");
  dbCompetitionZONE = firebase.firestore().collection("Competition_ZONE");
  dbCompetitionZDate = firebase.firestore().collection("TNIdate");
  CheckDate();
  GetLinePicture();
  CheckScore();
});


function GetLinePicture() {
  var i = 0;
  var str = "";
  LineEmpIDArr = [];
  LinePictureArr = [];
  dbLeagueMember
  .orderBy('EmpID','asc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      LineEmpIDArr.push(doc.data().EmpID);
      LinePictureArr.push({ EmpID: doc.data().EmpID, EmpName: doc.data().LineName , EmpPicture: doc.data().LinePicture, EmpRef: doc.id });
    });    
  });
}


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
  dbCompetitionZONE
  .orderBy('RankZone','asc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      //console.log(doc.data().EmpZone+" === "+doc.data().TotalPoint);
      if(i==0) {
        id0 = doc.id;

        n0 = doc.data().EmpZone +"<br>Group "+ doc.data().Round1 + " | "+doc.data().EmpRH ;
        a0 = parseFloat(doc.data().Total);
        aa0 = parseFloat(doc.data().Total)+"%";
        if(parseFloat(a0)>100) { a0 = 100; }
      } else if(i==1) { 
        id1 = doc.id;
        n1 = doc.data().EmpZone +"<br>Group "+ doc.data().Round1 + " | "+doc.data().EmpRH ;
        a1 = parseFloat(doc.data().Total);
        aa1 = parseFloat(doc.data().Total)+"%";
        if(parseFloat(a1)>100) { a1 = 100; }
      } else if(i==2) { 
        id2 = doc.id;
        n2 = doc.data().EmpZone +"<br>Group "+ doc.data().Round1 + " | "+doc.data().EmpRH ;
        a2 = parseFloat(doc.data().Total);
        aa2 = parseFloat(doc.data().Total)+"%";
        if(parseFloat(a2)>100) { a2 = 100; }
      } else if(i==3) { 
        id3 = doc.id;
        n3 = doc.data().EmpZone +"<br>Group "+ doc.data().Round1 + " | "+doc.data().EmpRH ;
        a3 = parseFloat(doc.data().Total);
        aa3 = parseFloat(doc.data().Total)+"%";
        if(parseFloat(a3)>100) { a3 = 100; }
      } else if(i==4) { 
        id4 = doc.id;
        n4 = doc.data().EmpZone +"<br>Group "+ doc.data().Round1 + " | "+doc.data().EmpRH ;
        a4 = parseFloat(doc.data().Total);
        aa4 = parseFloat(doc.data().Total)+"%";
        if(parseFloat(a4)>100) { a4 = 100; }
      } else if(i==5) { 
        id5 = doc.id;
        n5 = doc.data().EmpZone +"<br>Group "+ doc.data().Round1 + " | "+doc.data().EmpRH ;
        a5 = parseFloat(doc.data().Total);
        aa5 = parseFloat(doc.data().Total)+"%";
        if(parseFloat(a5)>100) { a5 = 100; }
      } else if(i==6) { 
        id6 = doc.id;
        n6 = doc.data().EmpZone +"<br>Group "+ doc.data().Round1 + " | "+doc.data().EmpRH ;
        a6 = parseFloat(doc.data().Total);
        aa6 = parseFloat(doc.data().Total)+"%";
        if(parseFloat(a6)>100) { a6 = 100; }
      } else if(i==7) { 
        id7 = doc.id;
        n7 = doc.data().EmpZone +"<br>Group "+ doc.data().Round1 + " | "+doc.data().EmpRH ;
        a7 = parseFloat(doc.data().Total);
        aa7 = parseFloat(doc.data().Total)+"%";
        if(parseFloat(a7)>100) { a7 = 100; }
      } else if(i==8) { 
        id8 = doc.id;
        n8 = doc.data().EmpZone +"<br>Group "+ doc.data().Round1 + " | "+doc.data().EmpRH ;
        a8 = parseFloat(doc.data().Total);
        aa8 = parseFloat(doc.data().Total)+"%";
        if(parseFloat(a8)>100) { a8 = 100; }
      } else if(i==9) { 
        id9 = doc.id;
        n9 = doc.data().EmpZone +"<br>Group "+ doc.data().Round1 + " | "+doc.data().EmpRH ;
        a9 = parseFloat(doc.data().Total);
        aa9 = parseFloat(doc.data().Total)+"%";
        if(parseFloat(a9)>100) { a9 = 100; }
      } else if(i==10) { 
        id10 = doc.id;
        n10 = doc.data().EmpZone +"<br>Group "+ doc.data().Round1 + " | "+doc.data().EmpRH ;
        a10 = parseFloat(doc.data().Total);
        aa10 = parseFloat(doc.data().Total)+"%";
        if(parseFloat(a10)>100) { a10 = 100; }
      } else if(i==11) { 
        id11 = doc.id;
        n11 = doc.data().EmpZone +"<br>Group "+ doc.data().Round1 + " | "+doc.data().EmpRH ;
        a11 = parseFloat(doc.data().Total);
        aa11 = parseFloat(doc.data().Total)+"%";
        if(parseFloat(a11)>100) { a11 = 100; }
      } else if(i==12) { 
        id12 = doc.id;
        n12 = doc.data().EmpZone +"<br>Group "+ doc.data().Round1 + " | "+doc.data().EmpRH ;
        a12 = parseFloat(doc.data().Total);
        aa12 = parseFloat(doc.data().Total)+"%";
        if(parseFloat(a12)>100) { a12 = 100; }
      } else if(i==13) { 
        id13 = doc.id;
        n13 = doc.data().EmpZone +"<br>Group "+ doc.data().Round1 + " | "+doc.data().EmpRH ;
        a13 = parseFloat(doc.data().Total);
        aa13 = parseFloat(doc.data().Total)+"%";
        if(parseFloat(a13)>100) { a13 = 100; }
      } else if(i==14) { 
        id14 = doc.id;
        n14 = doc.data().EmpZone +"<br>Group "+ doc.data().Round1 + " | "+doc.data().EmpRH ;
        a14 = parseFloat(doc.data().Total);
        aa14 = parseFloat(doc.data().Total)+"%";
        if(parseFloat(a14)>100) { a14 = 100; }
      } else if(i==15) { 
        id15 = doc.id;
        n15 = doc.data().EmpZone +"<br>Group "+ doc.data().Round1 + " | "+doc.data().EmpRH ;
        a15 = parseFloat(doc.data().Total);
        aa15 = parseFloat(doc.data().Total)+"%";
        if(parseFloat(a15)>100) { a15 = 100; }
      } else if(i==16) { 
        id16 = doc.id;
        n16 = doc.data().EmpZone +"<br>Group "+ doc.data().Round1 + " | "+doc.data().EmpRH ;
        a16 = parseFloat(doc.data().Total);
        aa16 = parseFloat(doc.data().Total)+"%";
        if(parseFloat(a16)>100) { a16 = 100; }
      } else if(i==17) { 
        id17 = doc.id;
        n17 = doc.data().EmpZone +"<br>Group "+ doc.data().Round1 + " | "+doc.data().EmpRH ;
        a17 = parseFloat(doc.data().Total);
        aa17 = parseFloat(doc.data().Total)+"%";
        if(parseFloat(a17)>100) { a17 = 100; }
      } else if(i==18) { 
        id18 = doc.id;
        n18 = doc.data().EmpZone +"<br>Group "+ doc.data().Round1 + " | "+doc.data().EmpRH ;
        a18 = parseFloat(doc.data().Total);
        aa18 = parseFloat(doc.data().Total)+"%";
        if(parseFloat(a18)>100) { a18 = 100; }
      } else if(i==19) { 
        id19 = doc.id;
        n19 = doc.data().EmpZone +"<br>Group "+ doc.data().Round1 + " | "+doc.data().EmpRH ;
        a19 = parseFloat(doc.data().Total);
        aa19 = parseFloat(doc.data().Total)+"%";
        if(parseFloat(a19)>100) { a19 = 100; }
      } else if(i==20) { 
        id20 = doc.id;
        n20 = doc.data().EmpZone +"<br>Group "+ doc.data().Round1 + " | "+doc.data().EmpRH ;
        a20 = parseFloat(doc.data().Total);
        aa20 = parseFloat(doc.data().Total)+"%";
        if(parseFloat(a20)>100) { a20 = 100; }
      } else if(i==21) { 
        id21 = doc.id;
        n21 = doc.data().EmpZone +"<br>Group "+ doc.data().Round1 + " | "+doc.data().EmpRH ;
        a21 = parseFloat(doc.data().Total);
        aa21 = parseFloat(doc.data().Total)+"%";
        if(parseFloat(a21)>100) { a21 = 100; }
      } else if(i==22) { 
        id22 = doc.id;
        n22 = doc.data().EmpZone +"<br>Group "+ doc.data().Round1 + " | "+doc.data().EmpRH ;
        a22 = parseFloat(doc.data().Total);
        aa22 = parseFloat(doc.data().Total)+"%";
        if(parseFloat(a22)>100) { a22 = 100; }
      } else if(i==23) { 
        id23 = doc.id;
        n23 = doc.data().EmpZone +"<br>Group "+ doc.data().Round1 + " | "+doc.data().EmpRH ;
        a23 = parseFloat(doc.data().Total);
        aa23 = parseFloat(doc.data().Total)+"%";
        if(parseFloat(a23)>100) { a23 = 100; }
      } else if(i==24) { 
        id24 = doc.id;
        n24 = doc.data().EmpZone +"<br>Group "+ doc.data().Round1 + " | "+doc.data().EmpRH ;
        a24 = parseFloat(doc.data().Total);
        aa24 = parseFloat(doc.data().Total)+"%";
        if(parseFloat(a24)>100) { a24 = 100; }
      } else if(i==25) { 
        id25 = doc.id;
        n25 = doc.data().EmpZone +"<br>Group "+ doc.data().Round1 + " | "+doc.data().EmpRH ;
        a25 = parseFloat(doc.data().Total);
        aa25 = parseFloat(doc.data().Total)+"%";
        if(parseFloat(a25)>100) { a25 = 100; }
      } else if(i==26) { 
        id26 = doc.id;
        n26 = doc.data().EmpZone +"<br>Group "+ doc.data().Round1 + " | "+doc.data().EmpRH ;
        a26 = parseFloat(doc.data().Total);
        aa26 = parseFloat(doc.data().Total)+"%";
        if(parseFloat(a26)>100) { a26 = 100; }
      } else if(i==27) { 
        id27 = doc.id;
        n27 = doc.data().EmpZone +"<br>Group "+ doc.data().Round1 + " | "+doc.data().EmpRH ;
        a27 = parseFloat(doc.data().Total);
        aa27 = parseFloat(doc.data().Total)+"%";
        if(parseFloat(a27)>100) { a27 = 100; }
      } else if(i==28) { 
        id28 = doc.id;
        n28 = doc.data().EmpZone +"<br>Group "+ doc.data().Round1 + " | "+doc.data().EmpRH ;
        a28 = parseFloat(doc.data().Total);        
        aa28 = parseFloat(doc.data().Total)+"%";
        if(parseFloat(a28)>100) { a28 = 100; }
      } else if(i==29) { 
        id29 = doc.id;
        n29 = doc.data().EmpZone +"<br>Group "+ doc.data().Round1 + " | "+doc.data().EmpRH ;
        a29 = parseFloat(doc.data().Total);
        aa29 = parseFloat(doc.data().Total)+"%";
        if(parseFloat(a29)>100) { a29 = 100; }
      } else if(i==30) { 
        id30 = doc.id;
        n30 = doc.data().EmpZone +"<br>Group "+ doc.data().Round1 + " | "+doc.data().EmpRH ;
        a30 = parseFloat(doc.data().Total);
        aa30 = parseFloat(doc.data().Total)+"%";
        if(parseFloat(a30)>100) { a30 = 100; }
      } else if(i==31) { 
        id31 = doc.id;
        n31 = doc.data().EmpZone +"<br>Group "+ doc.data().Round1 + " | "+doc.data().EmpRH ;
        a31 = parseFloat(doc.data().Total);
        aa31 = parseFloat(doc.data().Total)+"%";
        if(parseFloat(a31)>100) { a31 = 100; }
        /*
      } else if(i==32) { 
        id32 = doc.id;
        n32 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a32 = parseFloat(doc.data().Total);
      } else if(i==33) { 
        id33 = doc.id;
        n33 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a33 = parseFloat(doc.data().Total);
      } else if(i==34) { 
        id34 = doc.id;
        n34 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a34 = parseFloat(doc.data().Total);
        */
      }
      i++;
    });
    NewSet();
  });
}


function NewSet() {
  str = '';

  str += '<div style="margin:10px auto;text-align: center; width:95%;">';
  str += '<div style="width:30%;float: left;text-align: left;"><img src="./img/click-1.png"></div><div style="width:60%;float: left;">&nbsp;</div>';
  str += '</div><div class="clr" style="height:10px;"></div>';


  //str += "<div class='bar' onclick='OpenProfile(\""+ id0 +"\")'><div style='width:20%;float:left;'>จอมทอง</div><div  style='width:60%;float:left;'><span class='percent' style='float: right;padding:8px 10px;font-weight: 600;'>"+ aa0 +"</span></div><div class='bar-info rsoc8' data-total="+ a0 +">"+ n0 +"</div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id0 +"\")'><div class='line1'>"+ n0 +"</div><div class='line3'><div class='bar-info rsoc8' data-total="+ a0 +"></div></div><div class='line2'>"+ aa0 +"</div></div>";
  str += "<div class='bar' onclick='OpenProfile(\""+ id1 +"\")'><div class='line1'>"+ n1 +"</div><div class='line3'><div class='bar-info rsoc8' data-total="+ a1 +"></div></div><div class='line2'>"+ aa1 +"</div></div>";
  str += "<div class='bar' onclick='OpenProfile(\""+ id2 +"\")'><div class='line1'>"+ n2 +"</div><div class='line3'><div class='bar-info rsoc6' data-total="+ a2 +"></div></div><div class='line2'>"+ aa2 +"</div></div>";
  str += "<div class='bar' onclick='OpenProfile(\""+ id3 +"\")'><div class='line1'>"+ n3 +"</div><div class='line3'><div class='bar-info rsoc3' data-total="+ a3 +"></div></div><div class='line2'>"+ aa3 +"</div></div>";
  str += "<div class='bar' onclick='OpenProfile(\""+ id4 +"\")'><div class='line1'>"+ n4 +"</div><div class='line3'><div class='bar-info rsoc4' data-total="+ a4 +"></div></div><div class='line2'>"+ aa4 +"</div></div>";
  str += "<div class='bar' onclick='OpenProfile(\""+ id5 +"\")'><div class='line1'>"+ n5 +"</div><div class='line3'><div class='bar-info rsoc5' data-total="+ a5 +"></div></div><div class='line2'>"+ aa5 +"</div></div>";
  str += "<div class='bar' onclick='OpenProfile(\""+ id6 +"\")'><div class='line1'>"+ n6 +"</div><div class='line3'><div class='bar-info rsoc2' data-total="+ a6 +"></div></div><div class='line2'>"+ aa6 +"</div></div>";
  str += "<div class='bar' onclick='OpenProfile(\""+ id7 +"\")'><div class='line1'>"+ n7 +"</div><div class='line3'><div class='bar-info rsoc7' data-total="+ a7 +"></div></div><div class='line2'>"+ aa7 +"</div></div>";
  str += "<div class='bar' onclick='OpenProfile(\""+ id8 +"\")'><div class='line1'>"+ n8 +"</div><div class='line3'><div class='bar-info rsoc1' data-total="+ a8 +"></div></div><div class='line2'>"+ aa8 +"</div></div>";
  str += "<div class='bar' onclick='OpenProfile(\""+ id9 +"\")'><div class='line1'>"+ n9 +"</div><div class='line3'><div class='bar-info rsoc9' data-total="+ a9 +"></div></div><div class='line2'>"+ aa9 +"</div></div>";
  str += "<div class='bar' onclick='OpenProfile(\""+ id10 +"\")'><div class='line1'>"+ n10 +"</div><div class='line3'><div class='bar-info rsoc10' data-total="+ a10 +"></div></div><div class='line2'>"+ aa10 +"</div></div>";
  str += "<div class='bar' onclick='OpenProfile(\""+ id11 +"\")'><div class='line1'>"+ n11 +"</div><div class='line3'><div class='bar-info rsoc11' data-total="+ a11 +"></div></div><div class='line2'>"+ aa11 +"</div></div>";
  str += "<div class='bar' onclick='OpenProfile(\""+ id12 +"\")'><div class='line1'>"+ n12 +"</div><div class='line3'><div class='bar-info rsoc12' data-total="+ a12 +"></div></div><div class='line2'>"+ aa12 +"</div></div>";
  str += "<div class='bar' onclick='OpenProfile(\""+ id13 +"\")'><div class='line1'>"+ n13 +"</div><div class='line3'><div class='bar-info rsoc13' data-total="+ a13 +"></div></div><div class='line2'>"+ aa13 +"</div></div>";
  str += "<div class='bar' onclick='OpenProfile(\""+ id14 +"\")'><div class='line1'>"+ n14 +"</div><div class='line3'><div class='bar-info rsoc14' data-total="+ a14 +"></div></div><div class='line2'>"+ aa14 +"</div></div>";
  str += "<div class='bar' onclick='OpenProfile(\""+ id15 +"\")'><div class='line1'>"+ n15 +"</div><div class='line3'><div class='bar-info rsoc15' data-total="+ a15 +"></div></div><div class='line2'>"+ aa15 +"</div></div>";
  str += "<div class='bar' onclick='OpenProfile(\""+ id16 +"\")'><div class='line1'>"+ n16 +"</div><div class='line3'><div class='bar-info rsoc16' data-total="+ a16 +"></div></div><div class='line2'>"+ aa16 +"</div></div>";
  str += "<div class='bar' onclick='OpenProfile(\""+ id17 +"\")'><div class='line1'>"+ n17 +"</div><div class='line3'><div class='bar-info rsoc17' data-total="+ a17 +"></div></div><div class='line2'>"+ aa17 +"</div></div>";
  str += "<div class='bar' onclick='OpenProfile(\""+ id18 +"\")'><div class='line1'>"+ n18 +"</div><div class='line3'><div class='bar-info rsoc18' data-total="+ a18 +"></div></div><div class='line2'>"+ aa18 +"</div></div>";
  str += "<div class='bar' onclick='OpenProfile(\""+ id19 +"\")'><div class='line1'>"+ n19 +"</div><div class='line3'><div class='bar-info rsoc19' data-total="+ a19 +"></div></div><div class='line2'>"+ aa19 +"</div></div>";
  str += "<div class='bar' onclick='OpenProfile(\""+ id20 +"\")'><div class='line1'>"+ n20 +"</div><div class='line3'><div class='bar-info rsoc20' data-total="+ a20 +"></div></div><div class='line2'>"+ aa20 +"</div></div>";
  str += "<div class='bar' onclick='OpenProfile(\""+ id21 +"\")'><div class='line1'>"+ n21 +"</div><div class='line3'><div class='bar-info rsoc21' data-total="+ a21 +"></div></div><div class='line2'>"+ aa21 +"</div></div>";
  str += "<div class='bar' onclick='OpenProfile(\""+ id22 +"\")'><div class='line1'>"+ n22 +"</div><div class='line3'><div class='bar-info rsoc22' data-total="+ a22 +"></div></div><div class='line2'>"+ aa22 +"</div></div>";
  str += "<div class='bar' onclick='OpenProfile(\""+ id23 +"\")'><div class='line1'>"+ n23 +"</div><div class='line3'><div class='bar-info rsoc23' data-total="+ a23 +"></div></div><div class='line2'>"+ aa23 +"</div></div>";
  str += "<div class='bar' onclick='OpenProfile(\""+ id24 +"\")'><div class='line1'>"+ n24 +"</div><div class='line3'><div class='bar-info rsoc24' data-total="+ a24 +"></div></div><div class='line2'>"+ aa24 +"</div></div>";
  str += "<div class='bar' onclick='OpenProfile(\""+ id25 +"\")'><div class='line1'>"+ n25 +"</div><div class='line3'><div class='bar-info rsoc25' data-total="+ a25 +"></div></div><div class='line2'>"+ aa25 +"</div></div>";
  str += "<div class='bar' onclick='OpenProfile(\""+ id26 +"\")'><div class='line1'>"+ n26 +"</div><div class='line3'><div class='bar-info rsoc26' data-total="+ a26 +"></div></div><div class='line2'>"+ aa26 +"</div></div>";
  str += "<div class='bar' onclick='OpenProfile(\""+ id27 +"\")'><div class='line1'>"+ n27 +"</div><div class='line3'><div class='bar-info rsoc27' data-total="+ a27 +"></div></div><div class='line2'>"+ aa27 +"</div></div>";
  str += "<div class='bar' onclick='OpenProfile(\""+ id28 +"\")'><div class='line1'>"+ n28 +"</div><div class='line3'><div class='bar-info rsoc28' data-total="+ a28 +"></div></div><div class='line2'>"+ aa28 +"</div></div>";
  str += "<div class='bar' onclick='OpenProfile(\""+ id29 +"\")'><div class='line1'>"+ n29 +"</div><div class='line3'><div class='bar-info rsoc29' data-total="+ a29 +"></div></div><div class='line2'>"+ aa29 +"</div></div>";
  str += "<div class='bar' onclick='OpenProfile(\""+ id30 +"\")'><div class='line1'>"+ n30 +"</div><div class='line3'><div class='bar-info rsoc30' data-total="+ a30 +"></div></div><div class='line2'>"+ aa30 +"</div></div>";
  str += "<div class='bar' onclick='OpenProfile(\""+ id31 +"\")'><div class='line1'>"+ n31 +"</div><div class='line3'><div class='bar-info rsoc31' data-total="+ a31 +"></div></div><div class='line2'>"+ aa31 +"</div></div>";

  //str += "<div class='bar' onclick='OpenProfile(\""+ id0 +"\")'><div><span class='percent' style='float: right;padding:8px 10px;'>"+ aa0 +"</span></div><span class='percent' style='float: right;'>"+ aa0 +"</span></div>";
  //str += "<div class='bar' onclick='OpenProfile(\""+ id0 +"\")'><div class='bar-info rsoc8' data-total="+ a0 +">"+ n0 +"<span class='percent' style='float: right;'>"+ aa0 +"</span></div></div>";

/*
  str += "<div class='bar' onclick='OpenProfile(\""+ id0 +"\")'><div><span class='percent' style='float: right;padding:8px 10px;font-weight: 600;'>"+ aa0 +"</span></div><div class='bar-info rsoc8' data-total="+ a0 +">"+ n0 +"</div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id1 +"\")'><div><span class='percent' style='float: right;padding:8px 10px;font-weight: 600;'>"+ aa1 +"</span></div><div class='bar-info rsoc6' data-total="+ a1 +"><b>"+ n1 +"</b></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id2 +"\")'><div><span class='percent' style='float: right;padding:8px 10px;font-weight: 600;'>"+ aa2 +"</span></div><div class='bar-info rsoc3' data-total="+ a2 +"><b>"+ n2 +"</b></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id3 +"\")'><div><span class='percent' style='float: right;padding:8px 10px;font-weight: 600;'>"+ aa3 +"</span></div><div class='bar-info rsoc4' data-total="+ a3 +"><b>"+ n3 +"</b></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id4 +"\")'><div><span class='percent' style='float: right;padding:8px 10px;font-weight: 600;'>"+ aa4 +"</span></div><div class='bar-info rsoc5' data-total="+ a4 +"><b>"+ n4 +"</b></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id5 +"\")'><div><span class='percent' style='float: right;padding:8px 10px;font-weight: 600;'>"+ aa5 +"</span></div><div class='bar-info rsoc2' data-total="+ a5 +"><b>"+ n5 +"</b></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id6 +"\")'><div><span class='percent' style='float: right;padding:8px 10px;font-weight: 600;'>"+ aa6 +"</span></div><div class='bar-info rsoc7' data-total="+ a6 +"><b>"+ n6 +"</b></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id7 +"\")'><div><span class='percent' style='float: right;padding:8px 10px;font-weight: 600;'>"+ aa7 +"</span></div><div class='bar-info rsoc1' data-total="+ a7 +"><b>"+ n7 +"</b></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id8 +"\")'><div><span class='percent' style='float: right;padding:8px 10px;font-weight: 600;'>"+ aa8 +"</span></div><div class='bar-info rsoc9' data-total="+ a8 +"><b>"+ n8 +"</b></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id9 +"\")'><div><span class='percent' style='float: right;padding:8px 10px;font-weight: 600;'>"+ aa9 +"</span></div><div class='bar-info rsoc10' data-total="+ a9 +"><b>"+ n9 +"</b></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id10 +"\")'><div><span class='percent' style='float: right;padding:8px 10px;font-weight: 600;'>"+ aa10 +"</span></div><div class='bar-info rsoc11' data-total="+ a10 +"><b>"+ n10 +"</b></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id11 +"\")'><div><span class='percent' style='float: right;padding:8px 10px;font-weight: 600;'>"+ aa11 +"</span></div><div class='bar-info rsoc12' data-total="+ a11 +"><b>"+ n11 +"</b></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id12 +"\")'><div><span class='percent' style='float: right;padding:8px 10px;font-weight: 600;'>"+ aa12 +"</span></div><div class='bar-info rsoc13' data-total="+ a12 +"><b>"+ n12 +"</b></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id13 +"\")'><div><span class='percent' style='float: right;padding:8px 10px;font-weight: 600;'>"+ aa13 +"</span></div><div class='bar-info rsoc14' data-total="+ a13 +"><b>"+ n13 +"</b></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id14 +"\")'><div><span class='percent' style='float: right;padding:8px 10px;font-weight: 600;'>"+ aa14 +"</span></div><div class='bar-info rsoc15' data-total="+ a14 +"><b>"+ n14 +"</b></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id15 +"\")'><div><span class='percent' style='float: right;padding:8px 10px;font-weight: 600;'>"+ aa15 +"</span></div><div class='bar-info rsoc16' data-total="+ a15 +"><b>"+ n15 +"</b></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id16 +"\")'><div><span class='percent' style='float: right;padding:8px 10px;font-weight: 600;'>"+ aa16 +"</span></div><div class='bar-info rsoc17' data-total="+ a16 +"><b>"+ n16 +"</b></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id17 +"\")'><div><span class='percent' style='float: right;padding:8px 10px;font-weight: 600;'>"+ aa17 +"</span></div><div class='bar-info rsoc18' data-total="+ a17 +"><b>"+ n17 +"</b></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id18 +"\")'><div><span class='percent' style='float: right;padding:8px 10px;font-weight: 600;'>"+ aa18 +"</span></div><div class='bar-info rsoc19' data-total="+ a18 +"><b>"+ n18 +"</b></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id19 +"\")'><div><span class='percent' style='float: right;padding:8px 10px;font-weight: 600;'>"+ aa19 +"</span></div><div class='bar-info rsoc20' data-total="+ a19 +"><b>"+ n19 +"</b></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id20 +"\")'><div><span class='percent' style='float: right;padding:8px 10px;font-weight: 600;'>"+ aa20 +"</span></div><div class='bar-info rsoc21' data-total="+ a20 +"><b>"+ n20 +"</b></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id21 +"\")'><div><span class='percent' style='float: right;padding:8px 10px;font-weight: 600;'>"+ aa21 +"</span></div><div class='bar-info rsoc22' data-total="+ a21 +"><b>"+ n21 +"</b></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id22 +"\")'><div><span class='percent' style='float: right;padding:8px 10px;font-weight: 600;'>"+ aa22 +"</span></div><div class='bar-info rsoc23' data-total="+ a22 +"><b>"+ n22 +"</b></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id23 +"\")'><div><span class='percent' style='float: right;padding:8px 10px;font-weight: 600;'>"+ aa23 +"</span></div><div class='bar-info rsoc24' data-total="+ a23 +"><b>"+ n23 +"</b></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id24 +"\")'><div><span class='percent' style='float: right;padding:8px 10px;font-weight: 600;'>"+ aa24 +"</span></div><div class='bar-info rsoc25' data-total="+ a24 +"><b>"+ n24 +"</b></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id25 +"\")'><div><span class='percent' style='float: right;padding:8px 10px;font-weight: 600;'>"+ aa25 +"</span></div><div class='bar-info rsoc26' data-total="+ a25 +"><b>"+ n25 +"</b></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id26 +"\")'><div><span class='percent' style='float: right;padding:8px 10px;font-weight: 600;'>"+ aa26 +"</span></div><div class='bar-info rsoc27' data-total="+ a26 +"><b>"+ n26 +"</b></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id27 +"\")'><div><span class='percent' style='float: right;padding:8px 10px;font-weight: 600;'>"+ aa27 +"</span></div><div class='bar-info rsoc28' data-total="+ a27 +"><b>"+ n27 +"</b></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id28 +"\")'><div><span class='percent' style='float: right;padding:8px 10px;font-weight: 600;'>"+ aa28 +"</span></div><div class='bar-info rsoc29' data-total="+ a28 +"><b>"+ n28 +"</b></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id29 +"\")'><div><span class='percent' style='float: right;padding:8px 10px;font-weight: 600;'>"+ aa29 +"</span></div><div class='bar-info rsoc30' data-total="+ a29 +"><b>"+ n29 +"</b></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id30 +"\")'><div><span class='percent' style='float: right;padding:8px 10px;font-weight: 600;'>"+ aa30 +"</span></div><div class='bar-info rsoc31' data-total="+ a30 +"><b>"+ n30 +"</b></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id31 +"\")'><div><span class='percent' style='float: right;padding:8px 10px;font-weight: 600;'>"+ aa31 +"</span></div><div class='bar-info rsoc32' data-total="+ a31 +"><b>"+ n31 +"</b></div></div>";  
*/

  $('#Display').html(str);
  document.getElementById('DisplayWaitting').style.display='none';

  function skillSet() {
    $('.bar-info').each(function() {
      total = $(this).data("total");
      $(this).css("width", total + "%");
    });
    
    $('.percent').each(function() {
      var $this = $(this);
      $({
        Counter: 10
      }).animate({
        Counter: $this.text()
      }, {
        duration: 3000,
        easing: 'swing',
        step: function() {
          $this.text(Math.ceil(this.Counter) + "%");
        }
      });
    });
  };
  setTimeout(skillSet, 1000);
}


function OpenProfile(uid) {
  var str = "";
  console.log(uid);
  dbCompetitionZONE.where(firebase.firestore.FieldPath.documentId(), "==", uid)
  .get().then((snapshot)=> {
  snapshot.forEach(doc=> {
      const results = LinePictureArr.filter(obj => {return obj.EmpID === doc.data().EmpID;});
      str += '<center>';
      str += '<div><img src="'+results[0].EmpPicture+'" class="add-profile" style="margin:30px auto 0px auto;" onerror="javascript:imgError(this)"></div>';
      str += '<div class="text-1">'+doc.data().EmpName+'</div>';
      str += '<div class="text-2" style="margin-top:0px;"><b>'+doc.data().ZoneMap+'</b> ('+ doc.data().EmpRH+')</div>';
      str += '<div class="btn-t4">ผลงาน -> '+doc.data().Total+' | อันดับกลุ่ม -> '+ doc.data().RankZone +'</div>';

      str += '<div>';
      str += '<div class="btn-t77">% APE Achievement</div>';
      str += '<table class="table table-bordered table-hover" style="width:90%; max-width: 400px; margin:auto;">';
      str += '<thead class="thead-dark"><tr><th scope="col" class="col_td">รายการ</th><th scope="col" class="col_td">รายละเอียด</th></thead>';
      str += '<tbody>';
      str += '<tr><th scope="row">MTD Target</th><td style="text-align:center;"><b>'+doc.data().MTD_Target+'</b></td></tr>';
      str += '<tr><th scope="row">MTD Issue</th><td style="text-align:center;"><b>'+doc.data().MTD_Issue+'</b></td></tr>';
      str += '<tr><th scope="row">% APE Achievement</th><td style="text-align:center;"><b>'+doc.data().MTD_adv+'</b></td></tr>';
      str += '<tr><th scope="row">70% APE Achievement</th><td style="text-align:center;"><b>'+doc.data().APE70+'</b></td></tr>';
      str += '</tbody>';
      str += '</table>';

      str += '<div class="btn-t77">% Focused Product Progress</div>';
      str += '<table class="table table-bordered table-hover" style="width:90%; max-width: 400px; margin:auto;">';
      str += '<thead class="thead-dark"><tr><th scope="col" class="col_td">รายการ</th><th scope="col" class="col_td">รายละเอียด</th></thead>';
      str += '<tbody>';
      str += '<tr><th scope="row">Product Focus </th><td style="text-align:center;"><b>'+doc.data().Product_Focus +'</b></td></tr>';
      str += '<tr><th scope="row">Target</th><td style="text-align:center;"><b>'+doc.data().Target +'</b></td></tr>';
      str += '<tr><th scope="row">% Focused Product</th><td style="text-align:center;"><b>'+doc.data().Target_adv+'</b></td></tr>';
      str += '<tr><th scope="row">30% Focused Product Progress</th><td style="text-align:center;"><b>'+doc.data().Focused30+'</b></td></tr>';
      str += '</tbody>';
      str += '</table>';
      str += '</tbody>';
      str += '</table>';
      str += '</div>';
      str += '<div class="btn-t2" onclick="CloseAll()" style="margin-top:15px;">ปิดหน้าต่างนี้</div>';
      str += '<div class="clr" style="height: 25px;"></div>';
      str += '</center>';
    });
    $("#DisplayProfile").html(str);  
    document.getElementById("id01").style.display = "block";
  });
}



function imgError(image) {
    image.onerror = "";
    image.src = "./img/box.jpg";
    return true;
}

function CloseAll() {
  document.getElementById('id01').style.display='none';
}
