var dateString = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear()+543;
today = dd + '/' + mm + '/' + yyyy;
var cleararray = "";

var xMonth = "เมย. - มิย.";
var xMonthDetail = "ประจำไตรมาส 2 (เมย. - มิย. 2566)";
var xThisMonth = "ภาพรวม เดือนเมษายน 2566";
var sRH = "";
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
  GroupReport();
  Achievement();
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


function GroupReport() { 
  var str = "";
  var sRH = "";
  str += '<div class="btn-t33" style="margin-top:30px; background-color: #94a9b3;border: solid #94a9b3 1px;">ข้อมูลการแข่งขันระดับ Group</div>';
  str += '<div style="margin:0px auto 10px auto;text-align: center; width:90%;">';
  str += '<div style="width:30%;float: left;text-align: left;"><img src="./img/click-1.png"></div><div style="width:40%;float: left;">&nbsp;</div>';
  str += '<div style="width:30%;float: left;text-align: right;"></div></div><div class="clr"></div>';
  dbCompetitionRH
  .where('EmpGroup','==','Group')
  .orderBy('RankGroup','asc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      if(sRH=="") { sRH = doc.data().EmpRH; }
      str += '<div class="bar_background"><div style="padding-top:8px;">';
      str += '<div class="bar_body"><div class="btn-t66" onclick="ShowGroup(\''+ doc.data().EmpRH +'\')" style="padding:2px 7px;">'+ doc.data().EmpRH +'</div></div>';
      if(doc.data().MTD_Target<doc.data().MTD_Issue) { 
        str += '<div class="progress2" style="float: left;width:60%;margin-top:6px;"><div class="bar4" style="width:'+ doc.data().Total +'"></div></div>';
      } else {
        str += '<div class="progress2" style="float: left;width:60%;margin-top:6px;"><div class="bar2" style="width:'+ doc.data().Total +'"></div></div>';
      }
      str += '<div class="bar_body1" style="width:15%;margin-left:10px; cursor: none;background-color:#999;">'+ doc.data().Total +'</div>';
      str += '</div><div class="clr"></div></div>';
  });
    $("#DisplayGroup").html(str);  
    document.getElementById('DisplayGroup').style.display='block';
  })

}



function Achievement() {
  var str = "";
  var sRH = "";
  //str += '<div class="btn-t33" style="margin-top:50px; background-color: #94a9b3;border: solid #94a9b3 1px;">ข้อมูลการแข่งขันระดับ RH<br>'+xMonthDetail+'</div>';
  str += '<div class="btn-t33" style="margin-top:50px; background-color: #94a9b3;border: solid #94a9b3 1px;">ข้อมูลการแข่งขันระดับ RH</div>';
  str += '<div style="margin:0px auto 10px auto;text-align: center; width:90%;">';
  str += '<div style="width:30%;float: left;text-align: left;"><img src="./img/click-1.png"></div><div style="width:40%;float: left;">&nbsp;</div>';
  str += '<div style="width:30%;float: left;text-align: right;"><img src="./img/click-2.png"></div></div><div class="clr"></div>';
  dbCompetitionRH
  .where('EmpGroup','==','RH')
  .orderBy('TotalRank','asc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      if(sRH=="") { sRH = doc.data().EmpRH; }
      str += '<div class="bar_background"><div style="padding-top:8px;">';
      str += '<div class="bar_body"><div class="btn-t66" onclick="ShowZone(\''+ doc.data().EmpRH +'\')">'+ doc.data().GroupTeam+'-'+ doc.data().EmpRH +'</div></div>';
      if(doc.data().MTD_Target<doc.data().MTD_Issue) { 
        str += '<div class="progress2" style="float: left;width:60%;margin-top:6px;"><div class="bar4" style="width:'+ doc.data().Total +'"></div></div>';
      } else {
        str += '<div class="progress2" style="float: left;width:60%;margin-top:6px;"><div class="bar2" style="width:'+ doc.data().Total +'"></div></div>';
      }
      str += '<div class="bar_body1" onclick="OpenProfile(\''+ doc.id +'\')" style="width:15%;margin-left:10px;">'+ doc.data().Total +'</div>';
      str += '</div><div class="clr"></div></div>';
/*
      if(doc.data().EmpRH!=sRH) {
        var str1 = "";
        dbBBDKickoff.where('EmpRH','==', doc.data().EmpRH)
        .orderBy('EmpZone','asc')
        .get().then((snapshot)=> {
          snapshot.forEach(doc=> {
            //console.log(doc.data().EmpZone);
            str1 += '<div class="bar_background"><div style="padding-top:8px;">';
            str1 += '<div class="bar_body"><div class="btn-t66" onclick="OpenProfile1(\''+ doc.id +'\')">'+ doc.data().EmpZone +'</div></div>';
            str1 += '<div class="progress2" style="float: left;width:60%;margin-top:6px;"><div class="bar2" style="width:'+ doc.data().Total +'"></div></div>';
            str1 += '<div class="bar_body1">'+ doc.data().Total +'</div>';
            str1 += '</div><div class="clr"></div></div>';
          });
          str += ''+str1;
          //alert(str1);
          sRH = doc.data().EmpRH;
        })
      }

*/
  });
    $("#DisplayReport").html(str);  
    document.getElementById('DisplayWaitting').style.display='none';
    document.getElementById('DisplayReport').style.display='block';
  })
}



function ShowGroup(GroupRH) {
  var xGroup = GroupRH.substring(5);
  var str = "";
  str += '<center><div class="btn-t4" style="margin-top:30px;margin-bottom: 14px;">Group '+xGroup+'</div>';
  str += '<div style="font-size: 12px; margin-top:-10px;font-weight: 600;margin-bottom: 20px;">'+xReportDate+'</div>';
  dbCompetitionRH.where('GroupTeam','==', xGroup)
  .orderBy('TotalRank','asc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      str += '<div class="bar_background" style="width:95%;"><div style="padding-top:8px;">';
      str += '<div class="bar_body" style="width:30%;margin-right:6px;"><div class="btn-t666" style="text-align:center;">'+ doc.data().EmpRH +'</div></div>';
      if(doc.data().MTD_Target<doc.data().MTD_Issue) {
        str += '<div class="progress2" style="float: left;width:46%;margin-top:6px;"><div class="bar4" style="width:'+ doc.data().Total +'"></div></div>';
      } else {
        str += '<div class="progress2" style="float: left;width:46%;margin-top:6px;"><div class="bar3" style="width:'+ doc.data().Total +'"></div></div>';
      }
      str += '<div class="bar_body" style="font-weight: 600;">'+ doc.data().Total +'</div>';
      str += '</div><div class="clr"></div></div>';
    });
    str += '<div class="btn-t2" onclick="CloseAll()" style="margin-top:25px;">ปิดหน้าต่างนี้</div>';
    str += '<div class="clr" style="height: 25px;"></div></center>';
    $("#DisplayProfile").html(str);  
    document.getElementById("id01").style.display = "block";
  })
}


function ShowZone(RH) {
  var str = "";
  str += '<center><div class="btn-t4" style="margin-top:30px;margin-bottom: 14px;">ZONE ในสังกัด '+RH+'</div>';
  str += '<div style="font-size: 12px; margin-top:-10px;font-weight: 600;margin-bottom: 20px;">'+xReportDate+'</div>';
  dbCompetitionZONE.where('EmpRH','==', RH)
  .orderBy('RankZone','asc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      str += '<div class="bar_background" style="width:95%;"><div style="padding-top:8px;">';
      str += '<div class="bar_body" style="width:30%;margin-right:6px;"><div class="btn-t666">'+ doc.data().EmpZone +'</div></div>';
      if(doc.data().MTD_Target<doc.data().MTD_Issue) {
        str += '<div class="progress2" style="float: left;width:46%;margin-top:6px;"><div class="bar4" style="width:'+ doc.data().Total +'"></div></div>';
      } else {
        str += '<div class="progress2" style="float: left;width:46%;margin-top:6px;"><div class="bar3" style="width:'+ doc.data().Total +'"></div></div>';
      }
      str += '<div class="bar_body" style="font-weight: 600;">'+ doc.data().Total +'</div>';
      str += '</div><div class="clr"></div></div>';
    });
    str += '<div class="btn-t2" onclick="CloseAll()" style="margin-top:25px;">ปิดหน้าต่างนี้</div>';
    str += '<div class="clr" style="height: 25px;"></div></center>';
    $("#DisplayProfile").html(str);  
    document.getElementById("id01").style.display = "block";
  })
}



function OpenProfile(uid) {
  var str = "";
  dbCompetitionRH.where(firebase.firestore.FieldPath.documentId(), "==", uid)
  .get().then((snapshot)=> {
  snapshot.forEach(doc=> {
      const results = LinePictureArr.filter(obj => {return obj.EmpID === doc.data().EmpID;});
      str += '<center>';
      str += '<div><img src="'+results[0].EmpPicture+'" class="add-profile" style="margin:30px auto 0px auto;" onerror="javascript:imgError(this)"></div>';
      str += '<div class="text-1">'+doc.data().EmpName+'</div>';
      str += '<div class="text-2" style="margin-top:0px;"><b>'+ doc.data().EmpRH+'</b></div>';
      str += '<div class="btn-t4">ผลงาน -> '+doc.data().Total+' | อันดับกลุ่ม -> '+doc.data().TotalRank+'</div>';

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
