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

//THÊM SẢN PHẨM VÀO GIỎ HÀNG
function addItem(e) {
    //Lấy t là cha của e 4 lần.
    let t = e.parentElement.parentElement.parentElement.parentElement.parentElement;
    //Kiểm tra lớp out-of-stock-cover tại vị trí 0 có được hiển thị không.
    if ("flex" == t.getElementsByClassName("out-of-stock-cover")[0].style.display)
    //Thì hết hàng, trả về.
        return;
    //Lớp này không hiển thị, còn hàng thì thực hiện:
    let n = t.getElementsByClassName("product-name")[0].innerText
      , a = parseFloat(t.getElementsByClassName("product-price")[0].innerText.replace("$ ", ""))
      , s = t.getElementsByClassName("product-img")[0].src;
    SwitchBtns(t);
    let i = {
        name: n,
        price: a,
        imgSrc: s,
        qty: 1
    };
    CartItems(i),
    cartDetails.push(i),
    RenderCart(),
    CartItemsTotal()
}



function domID(id){
    return document.getElementById(id);
}