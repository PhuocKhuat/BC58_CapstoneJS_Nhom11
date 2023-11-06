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
    .then(function(res){
        //B7. Để hàm renddrDSSeP vào .then.
        renderDSSP(res.data);
        turnOffLoading();
    })
    //B5. Trả catch khi thất bại.
    .catch(function(err){
        //B10. Đi sử dụng hàm fetchProductList để ở dưới cùng.
        turnOffLoading();
    })
}
//B10. Đi sử dụng hàm fetchProductList để ở dưới cùng.
fetchProductList();
//

//THÊM SẢN PHẨM VÀO GIỎ HÀNG. ~ 6 BƯỚC.
/**
 * B1. Tạo 1 mảng giỏ hàng.
 * B2. Xây dựng đối tượng cartItem mock API (để lấy thông tin đưa vào giỏ hàng).
 * B3. Khởi tạo biến gán bằng lớp đối tượng.
 * B4. Dùng axios POST, "",có thêm key data bằng biến gán lớp đối tượng.
 * B5. Trả then khi thành công.
 * B6. Trả catch khi thất bại.
 */
// B1. Tạo 1 mảng giỏ hàng.
// const themSP = () => {
//     let them = getDataForm();
//     axios({
//         url: "https://653e7b249e8bd3be29df5d3a.mockapi.io/cartItem",
//         method: "POST",
//         data: them,
//     })
//     .then(function(res){
//         fetchProductList();
//     })
//     .catch(function(res){

//     })
// }

// MỤC 4. LỌC DANH SÁCH THEO LOẠI 
const products = [
{
  name: "iphoneX",
  price: 1000,
  screen: "screen 68",
  backCamera: "2 camera 12 MP",
  frontCamera: "7 MP",
  img: "https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg",
  desc: "Breakthrough design",
  type: "iPhone",
  id: "1"
},
{
  name: "Samsung Galaxy M51",
  price: 3500,
  screen: "screen 69",
  backCamera: "Main 64 MP & secondary 12 MP, 5 MP, 5 MP",
  frontCamera: "frontCamera 2",
  img: "https://cdn.tgdd.vn/Products/Images/42/217536/samsung-galaxy-m51-trang-new-600x600-600x600.jpg",
  desc: "Breakthrough design",
  type: "samsung",
  id: "2"
},
{
  name: "Samsung Galaxy M22",
  price: 45000,
  screen: "screen 70",
  backCamera: "Main 12 MP & secondary 64 MP, 12 MP",
  frontCamera: "32 MP",
  img: "https://shopping-cart-demo2.vercel.app/customer/view/img/s22.png",
  desc: "Breakthrough design",
  type: "samsung",
  id: "3"
},
{
  name: "Iphone 11",
  price: 1000,
  screen: "screen 54",
  backCamera: "Main 12 MP & secondary 64 MP, 12 MP",
  frontCamera: "32 MP",
  img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-midnight-green-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566954990073",
  desc: "Breakthrough design",
  type: "iPhone",
  id: "4"
}
];
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
        productFilter = products.filter((item) => item.type === "samsung" );
    } else if(selectList === "iPhone"){
        productFilter = products.filter((item) => item.type === "iPhone");   
    } else {
        productFilter = products;
    }
    renderDSSP(productFilter);
}
//
