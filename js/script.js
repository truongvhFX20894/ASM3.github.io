function checkEmail() {
  // Lấy giá trị của email nhập từ user để so sánh với biến regex
  const emailValue = document.getElementById("email");
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const check = emailValue.value.match(regex);

  // Kiểm tra định dạng email
  const showInfo = document.querySelector(".hidden-info");
  const hideEmailcontent = document.querySelector(".request-email");
  if (check) {
    showInfo.style.display = "block"; //Hiện thông tin nếu email đúng định dạng
    hideEmailcontent.style.display = "none"; //Ẩn phần submit email sau khi email đã được nhập đúng
  } else {
    document.getElementById("text-email").innerHTML =
      "Hãy nhập lại email đúng định dạng"; //Yêu cầu nhập lại email
  }
}

//Tạo hàm để hiển thị nút Viewmore khi di chuyển chuột vào vùng thông tin
function MouseOn1(element) {
  if (document.querySelector(".viewless-1").style.display == "block") {
    document.querySelector(".viewmore-1").style.display = "none";
  } else {
    element.querySelector(".viewmore-1").style.display = "inline-block";
  }
}
function MouseOn2(element) {
  if (document.querySelector(".viewless-2").style.display == "block") {
    document.querySelector(".viewmore-2").style.display = "none";
  } else {
    element.querySelector(".viewmore-2").style.display = "inline-block";
  }
}
function MouseOn3(element) {
  if (document.querySelector(".viewless-3").style.display == "block") {
    document.querySelector(".viewmore-3").style.display = "none";
  } else {
    element.querySelector(".viewmore-3").style.display = "inline-block";
  }
}
function MouseOn4(element) {
  if (document.querySelector(".viewless-4").style.display == "block") {
    document.querySelector(".viewmore-4").style.display = "none";
  } else {
    element.querySelector(".viewmore-4").style.display = "inline-block";
  }
}
function MouseOn5(element) {
  if (document.querySelector(".viewless-5").style.display == "block") {
    document.querySelector(".viewmore-5").style.display = "none";
  } else {
    element.querySelector(".viewmore-5").style.display = "inline-block";
  }
}
function MouseOn6(element) {
  if (document.querySelector(".viewless-6").style.display == "block") {
    document.querySelector(".viewmore-6").style.display = "none";
  } else {
    element.querySelector(".viewmore-6").style.display = "inline-block";
  }
}

//Tạo hàm để ẩn nút Viewmore khi di chuyển chuột ra ngoài vùng thông tin
function MouseOut(element) {
  element.querySelector(".viewmore").style.display = "none";
}

//Ẩn và hiện phần Kinh nghiệm
function showJobInfo1() {
  document.querySelector(".detail-item-1").style.display = "block";
  document.querySelector(".viewless-1").style.display = "block";
  document.querySelector(".viewmore").style.display = "none";
}

function hideJobInfo1() {
  document.querySelector(".detail-item-1").style.display = "none";
  document.querySelector(".viewless-1").style.display = "none";
}

//Ẩn và hiện phần Học vấn
function showJobInfo2() {
  document.querySelector(".detail-item-2").style.display = "block";
  document.querySelector(".viewmore").style.display = "none";
  document.querySelector(".viewless-2").style.display = "block";
}

function hideJobInfo2() {
  document.querySelector(".detail-item-2").style.display = "none";
  document.querySelector(".viewless-2").style.display = "none";
}

//Ẩn và hiện phần Hoạt động
function showJobInfo3() {
  document.querySelector(".detail-item-3").style.display = "block";
  document.querySelector(".viewmore").style.display = "none";
  document.querySelector(".viewless-3").style.display = "block";
}

function hideJobInfo3() {
  document.querySelector(".detail-item-3").style.display = "none";
  document.querySelector(".viewless-3").style.display = "none";
}

//Ẩn và hiện phần Sở thích
function showJobInfo4() {
  document.querySelector(".detail-item-4").style.display = "block";
  document.querySelector(".viewmore").style.display = "none";
  document.querySelector(".viewless-4").style.display = "block";
}

function hideJobInfo4() {
  document.querySelector(".detail-item-4").style.display = "none";
  document.querySelector(".viewless-4").style.display = "none";
}

//Ẩn và hiện phần Ngôn ngữ
function showJobInfo5() {
  document.querySelector(".detail-item-5").style.display = "block";
  document.querySelector(".viewmore").style.display = "none";
  document.querySelector(".viewless-5").style.display = "block";
}

function hideJobInfo5() {
  document.querySelector(".detail-item-5").style.display = "none";
  document.querySelector(".viewless-5").style.display = "none";
}

//Ẩn và hiện phần Kỹ năng
function showJobInfo6() {
  document.querySelector(".detail-item-6").style.display = "block";
  document.querySelector(".viewmore").style.display = "none";
  document.querySelector(".viewless-6").style.display = "block";
}

function hideJobInfo6() {
  document.querySelector(".detail-item-6").style.display = "none";
  document.querySelector(".viewless-6").style.display = "none";
}
