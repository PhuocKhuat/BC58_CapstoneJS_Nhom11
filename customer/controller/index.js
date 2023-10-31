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

// function themSP(){
//    var info = getDataForm();
//   //B2. Xây dựng đối tượng cart.
//   axios({
//     url: "https://653122dc4d4c2e3f333c71dd.mockapi.io/QDDT",
//     method: "POST",
//     data: info,
//   })
//   .then(function(res){
    
//   })
//   .catch(function(err){

//   })
// }

//THÊM SẢN PHẨM VÀO GIỎ HÀNG
/**
 * B1. Tạo 1 mảng giỏ hàng rỗng.
 * B2. Lấy các thuộc tính cần thiết trên giao diện.
 * B3. Tạo lớp đối tượng, thêm thuộc tính quantity.
 * B4. Thêm vào mảng cartArray.
 * B5. Lấy array đi xử lý tiếp.
 */
// B1. Tạo 1 mảng giỏ hàng rỗng.
var cartArray = [];
function themSP(sanPham){
    //B2. Lấy các thuộc tính cần thiết trên giao diện.
        var array = [
            {
              id: "1",
              names: "iphoneX",
              price: 1000,
              img: "https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg",
            },
            {
              id: "2",
              names: "Samsung Galaxy M51 ",
              price: 3500,
              img: "https://cdn.tgdd.vn/Products/Images/42/217536/samsung-galaxy-m51-trang-new-600x600-600x600.jpg",
            },
            {
              id: "3",
              names: "Samsung Galaxy M22",
              price: 45000,
              img: "https://shopping-cart-demo2.vercel.app/customer/view/img/s22.png",
            },
            {
              id: "4",
              names: "Iphone 11",
              price: 1000,
              img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-midnight-green-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566954990073",
            }
          ];
//   let array1 = array[0];
//   let array2 = array[0].id;
//   console.log(array2)
//   console.log(array1);
var contentHTML ="";
  for(i =0; i< array.length; i++){
    var sP = array[i];
    var cardItem1 = {
        id: sP.id,
        name: sP.names,
        price: sP.price,
        img: sP.img,
     }
     cardItem1.quantity = 1;
     console.log(cardItem1);
     contentHTML += cardItem1;
  }
    //B3. Tạo lớp đối tượng, thêm thuộc tính quantity.
    
    //B4. Thêm vào mảng cartArray:
    cartArray.push(cardItem1);
    //B5. Lấy array đi xử lý tiếp.
    renderCart(cartArray);
}

function domID(id){
    return document.getElementById(id);
}
function domCLASS(id){
    return document.getElementsByClassName(id);
}