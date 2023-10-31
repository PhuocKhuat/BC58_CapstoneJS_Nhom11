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

//GET DATAFORM
function getDataForm(){
  let array = [
    {
      id: "1",
      name: "iphoneX",
      price: 1000,
      "screen": "screen 68",
      "backCamera": "2 camera 12 MP",
      "frontCamera": "7 MP",
      img: "https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg",
      "desc": "Thiết kế mang tính đột phá",
      "type": "iphone"
    },
    {
      id: "2",
      name: "Samsung Galaxy M51 ",
      price: 3500,
      "screen": "screen 69",
      "backCamera": " Chính 64 MP & Phụ 12 MP, 5 MP, 5 MP",
      "frontCamera": " 32 MP",
      img: "https://cdn.tgdd.vn/Products/Images/42/217536/samsung-galaxy-m51-trang-new-600x600-600x600.jpg",
      "desc": "Thiết kế đột phá, màn hình tuyệt đỉnh",
      "type": "Samsung"
    },
    {
      id: "3",
      name: "Samsung Galaxy M22",
      price: 45000,
      "screen": "screen 70",
      "backCamera": "Chính 12 MP & Phụ 64 MP, 12 MP",
      "frontCamera": " 32 MP",
      img: "https://shopping-cart-demo2.vercel.app/customer/view/img/s22.png",
      "desc": "Thiết kế mang tính đột phá",
      "type": "Samsung"
    },
    {
      id: "4",
      name: "Iphone 11",
      price: 1000,
      "screen": "screen 54",
      "backCamera": "Camera: Chính 12 MP & Phụ 64 MP, 12 MP",
      "frontCamera": "32 MP",
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-midnight-green-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566954990073",
      "desc": "Thiết kế đột phá, màn hình tuyệt đỉnh",
      "type": "Iphone"
    }
  ]
  let array1 = array[0];
  array1.id = "123";
  console.log(array1);
  var cardItem1 = {
    id: array.id,
    name: array.name,
    price: array.price,
    img: array.img,
    quantity: 1,
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
var contentHTML = "";
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
// domCLASS('cart-items').innerHTML = contentHTML;
document.getElementById('tblSanPham').innerHTML = contentHTML;
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

