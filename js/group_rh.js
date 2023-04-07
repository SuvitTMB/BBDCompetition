var dateString = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear()+543;
today = dd + '/' + mm + '/' + yyyy;
var cleararray = "";

var xClickMenu = "A";
var yGroupRH = "";
var xGroupRH = "";



//var xMonth = "เมษายน";
var xMonthDetail = "ประจำไตรมาส 2 (เมย. - มิย. 2566)";
var xThisMonth = "ภาพรวมเดือนเมษายน 2566";
var xReportDate = "";
var xCodeDate = "BBDCompetition";

$(document).ready(function () {
  if(sessionStorage.getItem("EmpID_Competition")==null) { location.href = "index.html"; }
  Connect_DB();
  dbLeagueMember = firebase.firestore().collection("BBD_LeagueMember");
  dbCompetitionRH = firebase.firestore().collection("Competition_RH");
  dbCompetitionZONE = firebase.firestore().collection("Competition_ZONE");
  dbCompetitionZDate = firebase.firestore().collection("TNIdate");
  CheckDate();
  GetLinePicture();
  SelectBox(xClickMenu);
  //loadData();
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


function loadData() {
  var i = 0;
  var str = "";
  str += '<table class="table" style="width:95%; margin:10px auto;"><tbody>';
  dbCompetitionZONE
  .where('Round1','==', xClickMenu)
  .orderBy('RankZone','asc')
  //.orderBy('EmpZone','asc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      const results = LinePictureArr.filter(obj => {return obj.EmpID === doc.data().EmpID;});
      str += '<tr onclick="OpenProfile(\''+ doc.id +'\')" class="LinkProfile">';
      str += '<td class="td-center td-padding" style="width:18%;text-align:center;background-color:#c9d5e6;"><img src="'+results[0].EmpPicture+'" class="profile-team" onerror="javascript:imgError(this)" style="margin-top:14px;"></td>';
      str += '<td class="td-padding" style="width:83%;padding-top:5px;background-color:#c9d5e6;"><font color="#0056ff"><b>สนข. '+doc.data().EmpZone+' ('+doc.data().EmpRH+')</b></font>';
      str += '<font color="#002d63"><br><b>คุณ'+doc.data().EmpName+'</b></font><br><b>อันดับที่ : <b>'+(i+1)+'</b> ของกลุ่ม | ผลงาน : '+doc.data().Total+'</b>';
      if(parseInt(doc.data().Total)> 100) {
        str += '<div class="progress2" style="float: left;width:100%;margin-top:3px;" onclick="OpenProfile(\''+ doc.id +'\')"><div class="bar4" style="width:'+ doc.data().Total +'"></div></div>';        
      } else {
        str += '<div class="progress2" style="float: left;width:100%;margin-top:3px;" onclick="OpenProfile(\''+ doc.id +'\')"><div class="bar3" style="width:'+ doc.data().Total +'"></div></div>';        
      }
      str += '</td>';
      str += '</tr>';
      console.log(doc.data().EmpRH);
      i++;
    }); 
    str += '</tbody></table>';
    $("#DisplayTeam").html(str);  
    $("#DisplaySum").html("<div class='btn-t33' style='background-color: #94a9b3;border: solid #94a9b3 1px;margin-top:15px;'>ข้อมูลการแบ่งสายการแข่งขัน<br>สาย  "+ xClickMenu +" จำนวน "+ i +" สำนักงานเขตธุรกิจสาขา</div>");  
    document.getElementById('DisplaySum').style.display='block';
    document.getElementById('DisplayTeam').style.display='block';
  });
}


function SelectBox(x) {
  var xx = "";
  document.getElementById('DisplayWaittingTarget').style.display='block';
  document.getElementById('DisplayTarget').style.display='none';
  document.getElementById('DisplaySum').style.display='none';
  document.getElementById('DisplayTeam').style.display='none';
  if(x=="A") {
    xx = 1;
    xGroupRH = "GroupA";
    yGroupRH = "Group A";
  } else if(x=="B") { 
    xx = 2;
    xGroupRH = "GroupB";
    yGroupRH = "Group B";
  } else if(x=="C") { 
    xx = 3;
    xGroupRH = "GroupC";
    yGroupRH = "Group C";
  }
  var i = 1;
  for (i = 1; i < 4; i++) {
    document.getElementById(i).classList.remove('box-menu2');
  }   
  if(x!="") {
    xClickMenu = x;
    document.getElementById(xx).classList.add('box-menu2');
    TargetGroup();
    loadData();
  }
}


var MTDTarget = 0;
var MTDIssue = 0;
var MTDRatio = 0;
function TargetGroup() {
  str = "";
  dbCompetitionRH
  .where('EmpRH','==',xGroupRH)
  .limit(1)
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      MTDTarget = parseFloat(doc.data().MTD_Target);
      MTDIssue = parseFloat(doc.data().MTD_Issue);

      MTDTarget = ((MTDIssue / MTDTarget) * 100).toFixed(2);
      str += '<div class="bar_background"><div style="padding-top:8px;"><div class="bar_body"><b>'+yGroupRH+'</b></div>';
      str += '<div class="progress2" style="float: left;width:60%;margin-top:6px;"><div class="bar2" style="width:'+ doc.data().Total +'"></div></div>';
      str += '<div class="bar_body1" style="width:15%;margin-left:10px;">'+ doc.data().Total +'</div></div><div class="clr"></div></div>';

    });

    $("#DisplayTarget").html(str);  
    document.getElementById('DisplayWaittingTarget').style.display='none';
    document.getElementById('DisplayTarget').style.display='block';
  })
}


function OpenTeam(x) {
  xClickMenu = x;
  loadData()
  //location.href = 'team.html?gid='+x;
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
      str += '<div class="btn-t4">ผลงาน -> '+doc.data().Total+' | อันดับกลุ่ม -> '+ doc.data().RankinZone +'</div>';

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
/*

      str += '<center>';
      str += '<div><img src="'+results[0].EmpPicture+'" class="add-profile" style="margin:30px auto 0px auto;" onerror="javascript:imgError(this)"></div>';
      str += '<div class="text-1">'+doc.data().EmpName+'</div>';
      str += '<div class="text-2" style="margin-top:0px;"><b>เขตธุรกิจสาขา-'+doc.data().EmpZone+' ('+doc.data().EmpRH+')</b><br>สาย <b>'+ doc.data().Round1+ '</b></div>';
      str += '<div class="btn-t4">ผลงาน -> '+doc.data().Total+' | อันดับ -> '+doc.data().TotalRank+'</div>';

      str += '<div>';
      str += '<div class="btn-t77">1. หมวด % APE Achievement</div>';
      str += '<table class="table table-bordered table-hover" style="width:90%; max-width: 400px; margin:auto;">';
      str += '<thead class="thead-dark"><tr><th scope="col" class="col_td">รายการ</th><th scope="col" class="col_td">รายละเอียด</th></thead>';
      str += '<tbody>';
      str += '<tr><th scope="row">MTD Target</th><td style="text-align:center;">'+doc.data().MTDTarget_1+'</td></tr>';
      str += '<tr><th scope="row">MTD Issue</th><td style="text-align:center;">'+doc.data().MTDIssue_1+'</td></tr>';
      str += '<tr><th scope="row">% APE Achievement</th><td style="text-align:center;">'+doc.data().APEAchieve_1+'</td></tr>';
      str += '</tbody>';
      str += '</table>';

      str += '<div class="btn-t77">2. หมวด % Focus Product Achievement</div>';
      str += '<table class="table table-bordered table-hover" style="width:90%; max-width: 400px; margin:auto;">';
      str += '<thead class="thead-dark"><tr><th scope="col" class="col_td">รายการ</th><th scope="col" class="col_td">รายละเอียด</th></thead>';
      str += '<tbody>';
      str += '<tr><th scope="row">Target</th><td style="text-align:center;">'+doc.data().ProductTarget_2+'</td></tr>';
      str += '<tr><th scope="row">Product Focus</th><td style="text-align:center;">'+doc.data().ProductFocus_2 +'</td></tr>';
      str += '<tr><th scope="row">% Target Focus Product</th><td style="text-align:center;">'+doc.data().ProductAchieve_2+'</td></tr>';
      str += '</tbody>';
      str += '</table>';

      str += '<div class="btn-t77">3. Total % Weighted</div>';
      str += '<table class="table table-bordered table-hover" style="width:90%; max-width: 400px; margin:auto;">';
      str += '<thead class="thead-dark"><tr><th scope="col" class="col_td">รายการ</th><th scope="col" class="col_td">รายละเอียด</th></thead>';
      str += '<tbody>';
      str += '<tr><th scope="row">50% APE Achievement</th><td style="text-align:center;">'+doc.data().APE_50+'</td></tr>';
      str += '<tr><th scope="row">50% Focused Product</th><td style="text-align:center;">'+doc.data().Product_50+'</td></tr>';
      str += '<tr><th scope="row">% Total</th><td style="text-align:center;">'+doc.data().Total+'</td></tr>';
      str += '<tr><th scope="row">Rank</th><td style="text-align:center;">'+doc.data().TotalRank+'</td></tr>';
      str += '</tbody>';
      str += '</table>';
      str += '</div>';
      str += '<div class="btn-t2" onclick="CloseAll()" style="margin-top:15px;">ปิดหน้าต่างนี้</div>';
      str += '<div class="clr" style="height: 25px;"></div>';
      str += '</center>';
*/
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
