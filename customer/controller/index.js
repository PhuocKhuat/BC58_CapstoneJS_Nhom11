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
  
  //TÌM KIỂM SẢN PHẨM THEO TÊN.
domID('btnSearchSP').onclick = () =>{
  let input = domID('searchSP').value.toLowerCase();
  let result = cartArray.filter((item) => {
    item.name.toLowerCase().includes(input)
  });
  renderDSSP(result);
}
const btnSearchSP = domID('btnSearchSP');
const searchSP = domID('searchSP');
const tblSanPham = domID('tblSanPham');
btnSearchSP.addEventListener('click', () => {
  const productName = searchSP.value.toLowerCase();
  const filterProduct = products.filter(item => item.name.toLowerCase() === productName);
  if(filterProduct.length > 0){
    renderDSSP(filterProduct);
  } else{
    tblSanPham.innerHTML = `<strong class="notFound"><span>Product not found</span></strong>`;
  }
})

