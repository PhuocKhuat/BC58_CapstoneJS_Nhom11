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
    .then(function(res){
        //B7. Để hàm renddrDSSeP vào .then.
        renderDSSP(res.data);
        //B10. Đi sử dụng hàm fetchProductList để ở dưới cùng.
        productBrr(res.data);
        turnOffLoading();
    })
    //B5. Trả catch khi thất bại.
    .catch(function(err){
        //B10. Đi sử dụng hàm fetchProductList để ở dưới cùng.
        turnOffLoading();
    })
}
fetchProductList();

//THÊM SẢN PHẨM VÀO GIỎ HÀNG. ~ 6 BƯỚC.
/**
 * B1. Tạo 1 mảng giỏ hàng.
 * B2. Xây dựng đối tượng cartItem mock API (để lấy thông tin đưa vào giỏ hàng).
 * B3. Khởi tạo biến gán bằng lớp đối tượng.
 * B4. Dùng axios POST, "",có thêm key data bằng biến gán lớp đối tượng.
 * B5. Trả then khi thành công.
 * B6. Trả catch khi thất bại.
 */

function themSP(){
   var info = getDataForm();
  //B2. Xây dựng đối tượng cart.
  axios({
    url: "https://653122dc4d4c2e3f333c71dd.mockapi.io/QDDT",
    method: "POST",
    data: info,
  })
  .then(function(res){
    
  })
  .catch(function(err){

  })
}

//THÊM SẢN PHẨM VÀO GIỎ HÀNG
/**
 * B1. Tạo 1 mảng giỏ hàng rỗng.
 * B2. Lấy các thuộc tính cần thiết trên giao diện.
 * B3. Tạo lớp đối tượng, thêm thuộc tính quantity.
 * B4. Thêm vào mảng cartArray.
 * B5. Lấy array đi xử lý tiếp.
 */
//B1. Tạo 1 mảng giỏ hàng rỗng.
// var cartArray = [];
// function themSP(sanPham){
//     //B2. Lấy các thuộc tính cần thiết trên giao diện.
//     var _id = domID('location').value;
//     var _name = domID('product-name').value;
//     var _price = domID('product-price').value;
//     var _img = domID('product-img').value; 
//     //B3. Tạo lớp đối tượng, thêm thuộc tính quantity.
//     var cardItem1 = {
//        id: _id,
//        name: _name,
//        price: _price,
//        img: _img,
//     }
//     cardItem1.quantity = 1;
//     //B4. Thêm vào mảng cartArray:
//     cartArray.push(cardItem1);
//     //B5. Lấy array đi xử lý tiếp.
//     renderCart(cartArray);
// }

function domID(id){
    return document.getElementById(id);
}
function domCLASS(id){
    return document.getElementsByClassName(id);
}