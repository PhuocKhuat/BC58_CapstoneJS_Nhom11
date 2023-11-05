//B6. Tạo rendderDSSP bên controller.
/**
 * B1. Tạo 1 chuỗi rỗng.
 * B2. Tạo 1 vòng lặp for.
 * B3. Khởi tạo biến và gán bằng vị trí i trong productArr.
 * B4. Tạo 1 chuỗi string chứa div cho từng sản phẩm.
 * B5. Chuỗi rỗng += chuỗi string.
 * B6. dom lên giao diện
 */
//B1. Tạo 1 chuỗi rỗng.
function renderDSSP(productArr){
   //B2. Tạo 1 vòng lặp for.
    var contentHTML = "";
   //B3. Khởi tạo biến và gán bằng vị trí i trong productArr.
   for(i =0; i< productArr.length; i++){
    //B4. Tạo 1 chuỗi string chứa div cho từng sản phẩm.
    var sP = productArr[i];
    //
    var string = `
    <div class="col">
    <div class="main-card flex justify-evenly space-x-20 pt-5">
    <div class="card">
        <div class="card-header flex justify-between">
          <i class="fab fa-apple"></i>
          <p class="location" id="location">${sP.id}</p>
          <em class="stocks">In Stock</em>
        </div>
        <div class="card-body">
          <img id="product-img" class="product-img" src="${sP.img}" alt="">
        </div>
        <div class="card-footer">
          <div class="name-fav flex justify-between">
            <strong class="product-name" id="product-name">${sP.name}</strong>
            <button onclick="this.classList.toggle('fav')" class="heart fav"><i class="fas fa-heart"></i></button>
          </div>
          <div class="wrapper">
            <h5>${sP.desc}</h5>
            <p>Product details: ${sP.screen}, back camera: ${sP.backCamera}, font camera: ${sP.frontCamera}</p>
          </div>
          <div class="purchase flex justify-between items-center">
            $<p class="product-price font-bold" id="product-price">${sP.price}</p>
            <p>${sP.type}</p>
            <span class="btn-add">
              <div>
              <button class="add-btn" id="add-btn" onclick="themSP()">Add <i class="fas fa-chevron-right"></i></button>
              </div>
           </span>
          </div>
        </div>
      </div>
      </div>
    </div>
    `
    //
    contentHTML += string;
    //
   }
   domID('tblSanPham').innerHTML = contentHTML;
}

//SPINNER ~ tạo 2 nút turnOnLoading, turnOffLoading
function turnOnLoading(){
    domID('spinner').style.display = "block";
}
function turnOffLoading(){
    domID('spinner').style.display = "none";
}

//FILTER.
// var array =[];
// function productBrr(productArr){
//   var products = [productArr];
//   products.forEach((product)=> {
//   var o = document.createElement("option");
//    o.text = products.type;
//    selectList.appendChild(o);
// });
// selectList.onchange = function(){
//  phoneList.innerHTML = "render"; 
// }
// }

// const prdFilter = .filter((val) => {
//   if(val.type == "Samsung"){
//     let fetch = renderDSSP();
//     domID('phoneList').innerHTML = fetch; 
//   } 
// })

//Tạo renderCart
/**
 * B1. Tạo 1 chuỗi rỗng.
 * B2. Tạo 1 vòng lặp for.
 * B3. Khởi tạo biến và gán bằng vị trí i trong dSSP.
 * B4. Tạo 1 chuỗi string dòng tr.
 * B5. Chuỗi rỗng += chuỗi string.
 * B6. dom lên giao diện.
 */
function renderCart(cartArray){
//B1. Tạo 1 chuỗi rỗng.
var contentHTML = "";
//B2. Tạo 1 vòng lặp for.
for(i=0; i< cartArray.length; i++){
//B3. Khởi tạo biến và gán bằng vị trí i trong dSSP.
let sP = cartArray[i];
//B4. Tạo 1 chuỗi string dòng tr.
//Để 1 thẻ bao bọc các object thì td mới hiểu, giãn cách các ô được.
let string = `
<div class="cartDiv flex justify-evenly items-center">
<tr class="cartTr col w-24">
  <td><img src="${sP.img}" class="w-16 sPcom" style="display: inline-block"/></td>
  <td><span class="sPcom">${sP.names}</span></td>
  <td><input type="number" class="w-14 h-7 p-2 sPcom quantityProduct" id="quantityProduct" value="${sP.quantity}"/></td>
  <td><span class="sPcom2">${sP.id}</span></td>
  <td><span class="sPcom3 priceProduct">${sP.price}</span></td>
  <td>
  <button class="btn btn-danger sPcom3" onclick="xoaSP('${sP.id}')">Clear</button>
  </td>
  <br>
</tr>
</div>
`
//B5. Chuỗi rỗng += chuỗi string.
contentHTML += string;
}
//B6. dom lên giao diện.
// domCLASS('cart-items').innerHTML = contentHTML;
domID('tblCart').innerHTML = contentHTML;
}

//MÀN HÌNH MỞ KHI ẤN VÀO NÚT
// function sideNav(thamSo){
//   let side = domCLASS('side-nav')[0];
//   let cover = domCLASS('cover')[0];
//   if(thamSo == 0){
//     side.style.right = 0;
//     cover.style.display = "block";
//   } else{
//     side.style.right = -1;
//     cover.style.display = "none";
//   }
//   CartIsEmpty();
// }

const content = domID('content');
const cover = domID('cover');
const sideNav = () => {
  content.style.transition = "0.3s";  
  content.style.transform = "translateX(-100%)";
  cover.style.transform = "translateX(0px)";
}
const closes = () => {
  content.style.transition = "0.3s";
  content.style.transform ="translateX(100%)";
  cover.style.transform = "translateX(100%)";
}
// function getDataForm(){
//   let itemImg = domID('product-img').src;
//   let itemNames = domID('product-name').innerText;
//   let itemQuantity = 1;
//   let itemId = domID('location').innerText;
//   let itemPrice = domID('product-price').innerText;
// }
function domID(id){
  return document.getElementById(id);
}
function domCLASS(id){
  return document.getElementsByClassName(id);
}

