//MỤC 5. CHỌN SẢN PHẨM THÊM VÀO GIỎ HÀNG.
// TẢI LẠI TRANG ~ LOCALSTORAGE.
/**
 * B1. Lấy JSON lên từ LOCALSTORAGE.
 * B2. Nếu khác null (không có giá trị, là có giá trị lấy lên), chuyển JSON thành array vì chưa sử dụng được trực tiếp.
 * B3. Lấy array đi xử lý ~ renderCart.
 */
// B1. Tạo 1 mảng giỏ hàng rỗng.
let cartArray = [];
let dataJson = localStorage.getItem('LOCAL_CARTARRAY');
//B2. Nếu khác null (không có giá trị, là có giá trị lấy lên), chuyển JSON thành array vì chưa sử dụng được trực tiếp.
if(dataJson != null){
  cartArray = JSON.parse(dataJson);
}
//B3. Lấy array đi xử lý ~ renderCart.
renderCart(cartArray);

//THÊM SẢN PHẨM VÀO GIỎ HÀNG ~ LOCALSTORAGE.
/**
 * B1. Tạo 1 mảng giỏ hàng rỗng.
 * B2. Tạo lớp đối tượng, thêm thuộc tính quantity.
 * B3. Tạo vòng lặp for lấy các key trong lớp đối tượng.
 * B4. Thêm vào mảng cartArray.
 * B5. Chuyển array thành JSON, vì chỉ có JSON mới lưu xuống được LOCALSTORAGE.
 * B6. Lưu xuống LOCALSTORAGE.
 * B7. Lấy array đi xử lý tiếp.
 * B8. Khi ấn thêm tạo spinner.
 */

function themSP(){
    //B2. Tạo lớp đối tượng, thêm thuộc tính quantity.
    let itemImg = domID('product-img').src;
    let itemNames = domID('product-name').innerText;
    let itemQuantity = 1;
    let itemId = domID('location').innerText;
    let itemPrice = domID('product-price').innerText;
//B3. Tạo vòng lặp for lấy các key trong lớp đối tượng.
  // for(let i =0; i< array.length; i++){
    // const sP = array[i];
    var cardItem1 = {
       img: itemImg,
       names: itemNames,
       quantity: itemQuantity,
       id: itemId,
       price: itemPrice,
    }; 
    // }
    // id: sP.id,
    // names: sP.names,
    // price: sP.price,
    // img: sP.img,
    // quantity: sP.quantity,
  
  //B4. Thêm vào mảng cartArray:
    cartArray.push(cardItem1);
    console.log("cartArray", cartArray);
    //MỤC 7. NẾU CHƯA CÓ SẢN PHẨM THÌ PUSH VÀO LÀ 1, CÓ RỒI THÌ TĂNG LÊN 1. 
    //B5. Chuyển array thành JSON để lưu xuống LOCALSTORAGE.
    let dataJson = JSON.stringify(cartArray);
    //B6. Lưu xuống LOCALSTORAGE.
    localStorage.setItem('LOCAL_CARTARRAY', dataJson);
    //B7. Lấy array đi xử lý tiếp.
    renderCart(cartArray);
}

//MỤC 13.
//XOÁ SẢN PHẨM ~ LOCALSTORAGE (5 BƯỚC).
/**
 * B1. Tìm vị trí cần xoá dựa theo id, dùng findIndex.
 * B2. Xoá vị trí đã tìm đi 1.
 * B3. Chuyển array thành JSON để lưu xuống LOCALSTORAGE.
 * B4. Lưu xuống LOCALSTORAGE.
 * B5. Lấy array đi xử lý tiếp.
 */
const xoaSP = (id) => {
    //
    let viTri = cartArray.findIndex((i) => i.id == id);
    //
    cartArray.splice(viTri, 1);
    //
    let dataJson = JSON.stringify(cartArray);
    //
    localStorage.setItem('LOCAL_CARTARRAY', dataJson);
    //
    updatePriceAll();
    //
    renderCart(cartArray);
  }

//CẬP NHẬT GIÁ TIỀN SẢN PHẨM.
//CÓ CLASS KHÔNG XÁC ĐỊNH ĐƯỢC THÌ LẤY PHẦN TỬ ĐẦU TIÊN TRONG MẢNG.
/**
 * B1. Những class khi debugger không hiện lớp class thì thêm lấy vị trí đầu tiên [0].
 * B2. Duyệt thẻ class lớn nhất chứa tất cả các dòng, tới thẻ con chứa các dòng của thẻ này.
 * B3. Khai báo biến total = 0.
 * B4. Dùng vòng lặp for.
 * B5. Khai báo biến bằng vị trí thứ i trong mảng.
 * B6. Duyệt thẻ class của phần tử cần tính (nếu không thấy class thêm vị trí [0]).
 * B7. Lấy giá trị của phần tử (input thì .value, 2 thẻ đóng mở thì .innerText)
 * B8. Công thức tính total.
 * B9. dom đến chỗ cần đổi.
 */
function updatePriceAll() {
  const cartDiv = domCLASS('cart-items')[0]; //
  const cartTr = domCLASS('empty-cart');
  let total = 0;
  for(let i =0; i < cartTr.length; i++){
    const cartTrr = cartTr[i];
    const priceProduct = cartTrr.getElementsByClassName('priceProduct')[0];//
    const quantityProduct = cartTrr.getElementsByClassName('quantityProduct')[0];//
    const price = parseFloat(priceProduct.innerText);
    const quantity = quantityProduct.value;
    total += price*quantity;
  }
  domCLASS('total')[0].innerHTML = total; 
}

//SEARCH LẠI CHATGPT
//ĐIỀU CHỈNH SỐ LƯỢNG (KIỂM TRA LÀ SỐ, KHÔNG ĐƯỢC ÂM, TĂNG GIẢM SỐ LƯỢNG TĂNG GIẢM GIÁ).
const quantityProduct = domCLASS('quantityProduct');
for(let i =0; i < quantityProduct.length; i++){
   let input = quantityProduct[i];
   //thêm một sự kiện change cho phần tử input. Khi sự kiện change được kích hoạt, hàm quantityChanged() sẽ được gọi.
   input.addEventListener('change', quantityChanged)
}
function quantityChanged(event){
   let input = event.target;
   if(isNaN(input.value) || input.value <=0){
    input.value = 1;
   }
   updatePriceAll(); 
} 

//