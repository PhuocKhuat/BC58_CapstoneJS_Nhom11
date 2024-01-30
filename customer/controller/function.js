//CHỨC NĂNG 
//SPINNER ~ tạo 2 nút turnOnLoading, turnOffLoading
function turnOnLoading(){
  domID('spinner').style.display = "block";
}
function turnOffLoading(){
  domID('spinner').style.display = "none";
}

//MÀN HÌNH MỞ KHI ẤN VÀO NÚT
const content = domID('content');
const cover = domID('cover');
const coverHeader = domID('coverHeader');
const coverBanner = domID('coverBanner');
const coverFooter = domID('coverFooter');
const sideNav = () => {
content.style.transition = "0.3s";  
content.style.transform = "translateX(70%)";
cover.style.transform = "translateX(0px)";
coverHeader.style.transform = "translateX(0px)";
coverBanner.style.transform = "translateX(0px)";
coverFooter.style.transform = "translateX(0px)";
}
const closes = () => {
content.style.transition = "0.3s";
content.style.transform ="translateX(170%)";
cover.style.transform = "translateX(100%)";
coverHeader.style.transform = "translateX(100%)";
coverBanner.style.transform = "translateX(100%)";
coverFooter.style.transform = "translateX(100%)";
}

//LIGHT & DARK THEME.
/**
* B1. HTML: Tạo img hình ảnh moon và id cho nó.
* B2. CSS: Tạo :root bên css, set các thuộc tính ban đầu.
* B3. CSS: Tạo 1 class mới, class này chứa các thuộc tính sau khi nhấn nút.
* B4. CSS: Thay thế primary, secondary cho những chỗ muốn hiện ban đầu.
* B5. JS: dom đến id của thẻ img và tạo nút, cho phương thức toggle lớp class trên.
* B6. Nếu body chứa lớp class trên thì đổi hình ảnh sun, ngược lại thì moon.
*/
const theme = domID('theme');
theme.onclick = () =>{
document.body.classList.toggle("darkTheme");
if(document.body.classList.contains("darkTheme")){
   theme.src = './asset/img/sun.png';
} else{
  theme.src = './asset/img/moon.png';
}
}

// MỤC 4. LỌC DANH SÁCH THEO LOẠI 
/**
* B1. Tạo onchange ở thẻ select.
* B2. Khởi tạo function bằng ES6.
* B3. dom id của thẻ select lấy giá trị.
* B4. Khởi tạo 1 mảng rỗng 
*/
const filterProduct = () => {
let selectList = domID('selectList').value;
let productFilter = [];
if(selectList === "Samsung"){
    productFilter = products.filter((item) => item.type === "Samsung" );
} else if(selectList === "iPhone"){
    productFilter = products.filter((item) => item.type === "iPhone");   
} else if(selectList === "Macbook") {
    productFilter = products.filter((item) => item.type === "Macbook");
} else if(selectList === "iPad") {
  productFilter = products.filter((item) => item.type === "iPad");
}
else {
    productFilter = products;
}
renderDSSP(productFilter);
}
//

//NAV MOBILE
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}