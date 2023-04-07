MenuFooter();


function OpenMenu() {
  var xLine = "";
    xLine += '<div style="margin:20px 0 20px 0;">';
    xLine += '<center><div class="btn-t4" style="margin-top:10px;margin-bottom: 14px;">Q2 BBD Sale Campaign & Competition</div>';
    xLine += '<div class="container" style="width:100%;padding:5px;"><img src="./img/intro-04.jpg" style="width:100%; border-radius: 10px;">';

    //xLine += '<div style="width:95px;float: left;text-align: center;"><img src="'+ sessionStorage.getItem("LinePicture") +'" class="Profile-img"></div>';
    //xLine += '<div class="Profile-title"><b>'+ sessionStorage.getItem("EmpName_Society") +'</b><br>LineName : '+ sessionStorage.getItem("LineName") +'<br>Phone : '+ sessionStorage.getItem("EmpPhone_Society") +'</div>';
    //xLine += '</div></div><div class="clr"></div>';


    xLine += '<div class="clr"></div>';
    xLine += '<div class="btn-t33" style="">การแข่งขัน BBD Competition Q2-2023</div>';
    xLine += '<div style="margin:10px;">';
    xLine += '<div style="text-align:left;"><b>การนับผลงาน (รายเดือน)</b></div>';
    xLine += '<div><ul style="text-align:left;">';
    xLine += '<li style="margin-left:-20px;">เดือน เม.ย. 66 :  นับผลจากจากกรมธรรม์ Net Issued ตั้งแต่ 1-30 เม.ย. 66 โดยต้องพ้นระยะเวลายกเลิกถึงวันที่ 20 พ.ค. 66</li>';
    xLine += '<li style="margin-left:-20px;">เดือน พ.ค. 66 : นับผลจากจากกรมธรรม์ Net Issued ตั้งแต่ 1-31 พ.ค. 66 โดยต้องพ้นระยะเวลายกเลิกถึงวันที่ 20 มิ.ย. 66</li>';
    xLine += '<li style="margin-left:-20px;">เดือน มิ.ย. 66 :  นับผลจากจากกรมธรรม์ Net Issued ตั้งแต่ 1-30 มิ.ย. 66 โดยต้องพ้นระยะเวลายกเลิกถึงวันที่ 31 ก.ค. 66</li>';
    xLine += '<li style="margin-left:-20px;">ผลิตภัณฑ์: ทุกผลิตภัณฑ์, 16/2 และ 16/3 นับ 10% (ถ้ามี)</li>';
    xLine += '</ul></div>';
    xLine += '</div>';

    xLine += '<div class="clr"></div>';
    xLine += '<div style="margin:10px;">';
    xLine += '<div style="text-align:left;"><b>เงื่อนไข: วัดผลการแข่งขันของ Zone </b></div>';
    xLine += '<div><ul style="text-align:left;">';
    xLine += '<li style="margin-left:-20px;">คะแนนการแข่งขัน = (70% x %APE Achievement รายเดือน) + (30% x %Product Focus Achievement รายเดือน)</li>';
    xLine += '<li style="margin-left:-20px;">Zone ที่มีคะแนนการแข่งขัน สูงสุด 3 อันดับแรก ในแต่ละคู่เป็นผู้ชนะ</li>';
    xLine += '</ul></div>';
    xLine += '</div>';

    xLine += '<div class="clr"></div>';
    xLine += '<div style="margin:10px;">';
    xLine += '<div style="text-align:left;"><b>พิเศษ!! การแข่งขันระหว่างกลุ่ม ระดับ Region</b></div>';
    xLine += '<div><ul style="text-align:left;">';
    xLine += '<li style="margin-left:-20px;">วัดผลงานจาก %APE Achievement รายเดือน ของทั้ง 2 Region รวมกัน</li>';
    xLine += '<li style="margin-left:-20px;">โดยมีขั้นต่ำ %APE Achievement รายเดือน ของทั้ง 2 Region รวมกันที่ 70% ขึ้นไป</li>';
    xLine += '<li style="margin-left:-20px;">กลุ่มที่มี %APE Achievement รายเดือนสูงสุด จะได้รับงบสนับสนุน มูลค่า 100,000 บาท</li>';
    xLine += '<li style="margin-left:-20px;">เงินรางวัลแบ่งตามสัดส่วนของ APE ที่แต่ละ Region ทำได้</li>';
    xLine += '</ul></div>';
    xLine += '</div>';

    xLine += '<div class="clr"></div>';
    xLine += '<div style="margin:10px;">';
    xLine += '<div style="text-align:left;"><b>แข่งขันระดับRegion และ Zone</b></div>';
    xLine += '<div><ul style="text-align:left;">';
    xLine += '<li style="margin-left:-20px;">การนับผลงาน: นับผลจากจากกรมธรรม์ Net Issued ตั้งแต่ 1 เม.ย.-30 มิ.ย. 66 โดยต้องพ้นระยะเวลายกเลิกถึง วันที่ 31 ก.ค. 66</li>';
    xLine += '<li style="margin-left:-20px;">ผลิตภัณฑ์: ทุกผลิตภัณฑ์, 16/2 และ 16/3 นับ 10% (ถ้ามี)</li>';
    xLine += '</ul></div>';
    xLine += '</div>';


    //xLine += '<div style="margin: 10px auto; width:280px; text-align: center;"></div><div class="clr"></div>';
    xLine += '<div class="clr" style="height:10px;"></div>';
    xLine += '<center><div class="btn-t2" onclick="CloseMenu()">Close Menu</div></center>';
    xLine += '<div class="clr" style="height:20px;"></div>';
  //alert(xLine);
    $("#MenuSociety").html(xLine); 
    document.getElementById("menu").style.display = "block";
}




function MenuFooter() {
  var str = "";

/*
  str += '<div class="footer-top"><div class="container">';
  str += '<div class="row"><div class="col-lg-4 col-md-6 footer-newsletter">';
  str += '<div class="font13" style="color:#ffffff;"><b>เมนูสำหรับเลือกใช้งาน</b></div>';
  //str += '<p>ไม่ว่าจะเป็นเรื่องที่ต้องการความช่วยเหลือ หรือการสนับสนุนจากผู้บริหาร คุณสามารถส่งเรื่องราวของคุณที่นี่</p>';

  str += '<div style="margin-top:20px;">';

  str += '<div class="menu-box1" onclick="window.location.href=\'home.html\';">';
  str += '<div class="menu-box-img1"><img src="./img/icon-01.png" style="width:35px;"></div>';
  str += '<div class="menu-box-text1">หน้าแรก</div></div>';

  str += '<div class="menu-box1" onclick="window.location.href=\'promotion.html\';">';
  str += '<div class="menu-box-img1"><img src="./img/news-01.png" style="width:35px;"></div>';
  str += '<div class="menu-box-text1">แคมเปญ</div></div>';

  str += '<div class="menu-box1" onclick="window.location.href=\'openchat.html\';">';
  str += '<div class="menu-box-img1"><img src="./img/icon-16.png" style="width:35px;"></div>';
  str += '<div class="menu-box-text1">Chat</div></div>';

  str += '<div class="menu-box1" onclick="window.location.href=\'contact.html\';">';
  str += '<div class="menu-box-img1"><img src="./img/icon-13.png" style="width:35px;"></div>';
  str += '<div class="menu-box-text1">ติดต่อเรา</div></div>';

  str += '<div class="menu-box1" onclick="window.location.href=\'telfriend.html\';">';
  str += '<div class="menu-box-img1"><img src="./img/icon-friends.png" style="width:35px;"></div>';
  str += '<div class="menu-box-text1">บอกเพื่อน</div></div>';
  str += '</div>';

  //str += '<form action="" method="post"><input type="email" name="email"><input type="submit" value="ส่งเรื่องราว">';
  //str += '</form></div></div></div></div>';
  str += '</div></div></div></div>';
*/
  str += '<div class="container d-md-flex py-4"><div class="mr-md-auto text-center text-md-left">';
  str += '<div class="copyright">@<span>LINE Retail Society</span></div></div></div>';
  $("#DisplayFooter").html(str);  
}


function CloseMenu() {
  document.getElementById('menu').style.display='none';
}

