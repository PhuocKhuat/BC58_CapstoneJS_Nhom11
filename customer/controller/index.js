//MỤC 3. HIỂN THỊ DANH SÁCH SẢN PHẨM.
// TẢI LẠI TRANG ~ 10 BƯỚC
/**
 * B1. Lấy CDN axios để bên HTML.
 * B2. Tạo 1 hàm fetchProductList chứa sản phẩm và tái sử dụng được nhiều lần. 
 * B3. Gọi API GET, "".
 * B4. Trả then khi thành công.
 * B5. Trả catch khi thất bại.
 * B6. Tạo rendderDSSP bên controller. 
 * B7. Để hàm rendderDSSP vào .then.
 * B8. Bật spinner ở trên axios.
 * B9. Tắt spinner ở then và catch. 
 * B10. Đi sử dụng hàm fetchProductList để ở dưới cùng.
 */
//B1. Tạo 1 hàm fetchProductList chứa sản phẩm và tái sử dụng được nhiều lần. 
function fetchProductList(){
    //B8. Bật spinner ở trên axios.
    turnOnLoading();
    //B3. Gọi API GET, "".
    axios({
        url: "https://653122dc4d4c2e3f333c71dd.mockapi.io/QDDT",
        method: "GET",
    })
    //B4. Trả then khi thành công.
    .then((res) =>{
        //B7. Để hàm renddrDSSeP vào .then.
        renderDSSP(res.data);
        turnOffLoading();
    })
    //B5. Trả catch khi thất bại.
    .catch((err) =>{
        //B10. Đi sử dụng hàm fetchProductList để ở dưới cùng.
        turnOffLoading();
    })
  }
  //B10. Đi sử dụng hàm fetchProductList để ở dưới cùng.
  fetchProductList();
  //
  
  //6. TẠO RENDERDSSP Ở ĐÂY.
  /**
   * B1. Tạo 1 chuỗi rỗng.
   * B2. Tạo 1 vòng lặp for.
   * B3. Khởi tạo biến và gán bằng vị trí i trong productArr.
   * B4. Tạo 1 chuỗi string chứa div cho từng sản phẩm.
   * B5. Chuỗi rỗng += chuỗi string.
   * B6. dom lên giao diện.
   */
  //B1. Tạo 1 chuỗi rỗng.
  function renderDSSP(productArr){
    var contentHTML = "";
    //B2. Tạo 1 vòng lặp for.
    for(i =0; i< productArr.length; i++){
       //B3. Khởi tạo biến và gán bằng vị trí i trong productArr.
       var sP = productArr[i];
       //B4. Tạo 1 chuỗi string chứa div cho từng sản phẩm.
      var string = `
      <div class="col">
      <div class="main-card flex justify-evenly space-x-20 pt-5">
      <div class="card">
          <div class="card-header flex justify-between">
            <i class="fab fa-apple"></i>
            <p class="location" id="location">${sP.id}</p>
            <em class="stocks">In Stock: ${sP.instock}</em>
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
              <span class="priceDola">$</span>
              <p class="product-price font-bold" id="product-price">${sP.price}</p>
              <p>${sP.type}</p>
              <span class="btn-add">
                <div>
                <button class="add-btn" id="add-btn" onclick="themSP(${sP.id})">Add <i class="fas fa-chevron-right"></i></button>
                </div>
             </span>
            </div>
          </div>
        </div>
        </div>
      </div>
      `
      //B5. Chuỗi rỗng += chuỗi string.
      contentHTML += string;
    }
    //B6. dom lên giao diện.
     domID('tblSanPham').innerHTML = contentHTML;
  }
  