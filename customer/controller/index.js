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

function domCLASS(id){
    return document.getElementsByClassName(id);
}
