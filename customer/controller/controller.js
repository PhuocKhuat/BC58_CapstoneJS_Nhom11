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
          <p class="location">${sP.id}</p>
          <em class="stocks">In Stock</em>
        </div>
        <div class="card-body">
          <img src="${sP.img}" alt="">
        </div>
        <div class="card-footer">
          <div class="name-fav flex justify-between">
            <strong class="product-name">${sP.name}</strong>
            <button onclick="this.classList.toggle('fav')" class="heart fav"><i class="fas fa-heart"></i></button>
          </div>
          <div class="wrapper">
            <h5>${sP.desc}</h5>
            <p>Product details: ${sP.screen}, back camera: ${sP.backCamera}, font camera: ${sP.frontCamera}</p>
          </div>
          <div class="purchase flex justify-between items-center">
            <p class="product-price font-bold">$ ${sP.price}</p>
            <p>${sP.type}</p>
            <span class="btn-add">
              <div>
              <button onclick="addItem(this)" class="add-btn">Add <i class="fas fa-chevron-right"></i></button>
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