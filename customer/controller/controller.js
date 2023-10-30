//B6. Tạo rendderDSSP bên controller.
/**
 * B1. Tạo 1 chuỗi rỗng.
 * B2. Tạo 1 vòng lặp for.
 * B3. Khởi tạo biến và gán bằng vị trí i trong productArr.
 * B4. Tạo 1 chuỗi string chứa div cho từng sản phẩm.
 * B5. Chuỗi rỗng += chuỗi string.
 * B6. dom lên giao diện
 */
//
function renderDSSP(productArr){
   //
    var contentHTML = "";
   //
   for(i =0; i< productArr.length; i++){
    //
    var sP = productArr[i];
    //
    var string = `
    <div class="container">
    <div class="main-card flex justify-evenly space-x-20 pt-5">
    <div class="card ">
        <div class="card-header flex justify-between">
          <i class="fab fa-apple"></i>
          <p class="location" id="location">${sP.id}</p>
          <em class="stocks">In Stock</em>
        </div>
        <div class="card-body">
          <img id="product-img" src="${sP.img}" alt="">
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
            <p class="product-price font-bold" id="product-price">$ ${sP.price}</p>
            <p>${sP.type}</p>
            <span class="btn-add">
              <div>
              <button onclick="themSP('${sP.id}')" class="add-btn">Add <i class="fas fa-chevron-right"></i></button>
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
   document.getElementById('tblSanPham').innerHTML = contentHTML;
}

//SPINNER ~ tạo 2 nút turnOnLoading, turnOffLoading
function turnOnLoading(){
    document.getElementById('spinner').style.display = "block";
}
function turnOffLoading(){
    document.getElementById('spinner').style.display = "none";
}

//FILTER.
var array =[];
function productBrr(productArr){
  var products = [productArr];
  products.forEach((product)=> {
  var o = document.createElement("option");
   o.text = products.type;
   selectList.appendChild(o);
});
selectList.onchange = function(){
 phoneList.innerHTML = "render"; 
}
}

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
let contentHTML = "";
//B2. Tạo 1 vòng lặp for.
for(i=0; i< cartArray.length; i++){
//B3. Khởi tạo biến và gán bằng vị trí i trong dSSP.
let sP = cartArray[i];
//B4. Tạo 1 chuỗi string dòng tr.
let string = `
<tr>
  <td>${sP.img}</td>
  <td>${sP.name}</td>
  <td>${sP.quantity}</td>
  <td>${sP.img}</td>
  <td>${sP.price}</td>
</tr>
`
//B5. Chuỗi rỗng += chuỗi string.
contentHTML += string;
}
//B6. dom lên giao diện.
domCLASS('cart-items').innerHTML = contentHTML;
}

//MÀN HÌNH MỞ KHI ẤN VÀO NÚT
function sideNav(thamSo){
  let side = domCLASS('side-nav')[0];
  let cover = domCLASS('cover')[0];
  if(thamSo == 0){
    side.style.right = 0;
    cover.style.display = "block";
  } else{
    side.style.right = -1;
    cover.style.display = "none";
  }
  CartIsEmpty();
}

//KIỂM TRA GIỎ TRỐNG
function CartIsEmpty() {
  if(cartArray.length == 0){
    (document.getElementsByClassName("cart-items")[0].innerHTML = "<span class='empty-cart'>Looks Like You Haven't Added Any Product In The Cart</span>")
  }
}

