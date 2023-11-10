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
  } else {
      productFilter = products;
  }
  renderDSSP(productFilter);
}
//
