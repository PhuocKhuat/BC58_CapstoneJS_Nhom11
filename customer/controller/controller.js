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
const coverFilter = domID('coverFilter');
const coverFooter = domID('coverFooter');
const sideNav = () => {
  content.style.transition = "0.3s";  
  content.style.transform = "translateX(-100%)";
  cover.style.transform = "translateX(0px)";
  coverHeader.style.transform = "translateX(0px)";
  coverFilter.style.transform = "translateX(0px)";
  coverFooter.style.transform = "translateX(0px)";
}
const closes = () => {
  content.style.transition = "0.3s";
  content.style.transform ="translateX(100%)";
  cover.style.transform = "translateX(100%)";
  coverHeader.style.transform = "translateX(100%)";
  coverFilter.style.transform = "translateX(100%)";
  coverFooter.style.transform = "translateX(100%)";
}
// function getDataForm(){
//   let itemImg = domID('product-img').src;
//   let itemNames = domID('product-name').innerText;
//   let itemQuantity = 1;
//   let itemId = domID('location').innerText;
//   let itemPrice = domID('product-price').innerText;
// }
