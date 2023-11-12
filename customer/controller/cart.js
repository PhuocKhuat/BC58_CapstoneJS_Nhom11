const domSelector = (selector) => document.querySelector(selector);
//B1. domQuerry chỗ hiện ở layout ở dòng 1.
const tblCart = domSelector("#tblCart");
const subtotal = domSelector(".subtotal");
const totalQuantity = domSelector(".totalQuantity");

//B2. Tạo 1 mảng rỗng để thêm sản phẩm vào.
//C1:
// let cartArray = [];
// let dataJson = localStorage.getItem('cartArray');
// if(dataJson != null){
//   cartArray = JSON.parse(dataJson);
// }
// capNhatSP();
let cartArray = JSON.parse(localStorage.getItem("cartArray")) || [];
capNhatSP();


//THÊM SẢN PHẨM VÀO GIỎ HÀNG.
/**
 * B1. Tạo 1 mảng products ở product.js chứa các thông tin.
 * B2. Tạo 1 mảng rỗng để thêm sản phẩm vào.
 * B3. Tạo 1 hàm thêm.
 * B4. Tạo biến trung gian và tìm sản phẩm trong products bằng hàm FIND.
 * B5. Thêm sản phẩm vào mảng rỗng (SPREAD OPERATOR), thêm quantity.
 * B6. Vì thêm 1 sản phẩm ở B5 xuất hiện 2 lần chứ không tăng số lượng (không đúng), sử dụng if xem sản phẩm xuất hiện chưa ~ SOME.
 * B7. Ngược lại thì đi tìm và thêm ở B4 và B5.
 * B8. Thêm xong thì cập nhật lại bảng giỏ hàng (renderCart).
 */
//B3. Tạo 1 hàm thêm sản phẩm vào giỏ hàng.
const themSP = (id) => {
  //B6. Sử dụng SOME để kiểm tra sản phẩm dựa theo id đã tồn tại hay chưa.
  if(cartArray.some((item) => item.id === id)){
    changeUnits('plus', id);
  }
  // 
  else{
    //B4. Tìm sản phẩm trong products ~ FIND.
    const item = products.find((product) => product.id === id);
    // console.log("item", item);
    //B5. Thêm sản phẩm vào mảng rỗng, thêm quantity.
    cartArray.push({
      ...item,
      quantity: 1,     
    });
    // console.log("cartArray", cartArray);
  }
  //B8. Cập nhật bảng giỏ hàng.
  capNhatSP();
}

//CẬP NHẬT SẢN PHẨM.
/**
 * B1. Tạo 1 hàm capNhatSP().
 * B2. Cập nhật bảng giỏ hàng (renderCart).
 */
function capNhatSP(){
  renderCart();
  renderSubtotal();
  //LƯU LOCALSTORAGE VÀ CHUYỂN THÀNH CARTARRAY TỪ ARRAY THÀNH JSON.
  //C1:
  // dataJson = JSON.stringify(cartArray);
  // localStorage.setItem('cartArray', dataJson);
  localStorage.setItem("cartArray", JSON.stringify(cartArray));
} 

//TẠO RENDERCART ~ 5 BƯỚC.
/**
 * B1. domQuerry chỗ hiện ở layout ở dòng 1.
 * B2. Xoá phần tử card ban đầu.
 * B3. Dùng forEach duyệt mảng cartArray trả về từng phần tử trong array.
 * B4. Xuất ra màn hình các thẻ html.
 * B5. Tạo layout và gán các cặp key:value tương ứng muốn xuất hiện.
 */
function renderCart(){
  tblCart.innerHTML = ""; //B2. Xoá phần tử card ban đầu.
  //B3. Dùng forEach duyệt mảng.
  cartArray.forEach((item) => {
    //B4. Xuất ra màn hình.
    //B5. Tạo layout và gán các cặp key:value.
    tblCart.innerHTML += `
  <div class="cartDiv flex justify-evenly items-center space-x-6">
  <tr class="cartTr col w-24">
    <td><img src="${item.img}" class="w-16 sPcom" style="display: inline-block"/></td>
    <td><span class="sPcom name">${item.name}</span></td>
    <td><span class="sPcom1 units">
            <span class="btn minus" onclick = "changeUnits('minus', ${item.id})">-</span>  
            <span class="numberUnits">${item.quantity}</span>  
            <span class="btn plus" onclick = "changeUnits('plus', ${item.id})">+</span>  
        </span>
    </td>
    <td><span class="sPcom2">${item.id}</span></td>
    <td><span class="sPcom3 priceProduct">${item.price}</span></td>
    <td>
    <button class="btn btn-danger sPcom4" onclick="xoaSP('${item.id}')">Delete</button>
    </td>
   </tr>
  </div>
  `
});
}
// renderCart();
//TẠO HÀM THAY ĐỔI SỐ LƯỢNG (MỤC ĐÍCH LÀ BIẾN NHỮNG PHẦN TỬ (SỐ LƯỢNG) THÀNH SỐ LƯỢNG MỚI)
/**
 * B1. Thêm onclick cho 2 nút cộng trừ, có 2 thuộc tính là action và id (ở renderCart).
 * B2. Gọi hàm thay đổi số lượng.
 * B3. Thay đổi số lượng từng phần tử trong cartArray bằng MAP và lưu (gán) vào cartArray cũ.
 * B4. Tạo biến trung gian gán bằng số lượng phần tử.
 * B5. Kiếm tra id biến từ map có giống id được duyệt từ forEach không.
 * B6. Nếu action = minus thì giảm số lượng xuống, plus thì tăng lên.
 * B7. Trả về ...item + quantity mới.
 * B8. Đi sử dụng capNhatSP().
 */
//Tham số đầu tiên là hành động (cộng hoặc trừ)
function changeUnits(action, id){
  cartArray = cartArray.map((item) => {
      let quantity = item.quantity;
      //Nếu những item trong cartArray này trùng với tham số id.
      if(item.id === id){
        if(action === 'minus' && quantity >1){ //Để >1 là 2 trở lên, khi giảm xuống 1.
         quantity--;
        } else if(action === 'plus' && quantity < item.instock){ //Để <9 là 8 trở xuống, khi tăng lên 1 là 9.
         quantity++;
        }
      }
      return { //SPREAD OPERATOR + OBJECT LITERAL.
       ...item,
       quantity,
      };
  })
  capNhatSP();
}

//TÍNH TỔNG PHỤ.
function renderSubtotal(){
  let totalItems =0, totalPrice =0;
  cartArray.forEach((item) => {
    totalItems += item.quantity;
    totalPrice += item.price * item.quantity;
  })
  subtotal.innerHTML = `Subtotal (${totalItems} items): $${totalPrice.toLocaleString()}`;
  totalQuantity.innerText = totalItems;
}
// renderSubtotal();
//13. XOÁ SẢN PHẨM
/**
 * B1. Gán cartArray cũ vào cartArray.
 * B2. Lọc qua từng item trong cartArray trả về id của từng item khác tham số id truyền vào
 * B3. Xoá xong cập nhật lại bảng và giá (đi sử dụng hàm capNhatSP).
 */
const xoaSP= (id) =>{
  //C1:
  // let viTri = cartArray.findIndex((item) => item.id == id);
  // cartArray.splice(viTri, 1);
  //C2:
  cartArray = cartArray.filter((item) => item.id != id);
  capNhatSP();
}

//12. NÚT CLEAR TẤT CẢ SẢN PHẨM.
const clearCart = () => {
  const items = document.querySelectorAll('.cartDiv');
  if(items.length <= 0){
    tblCart.innerHTML = `<p class="text-center text-3xl text-red-600 my-6">There is no order. Please make a first order.</p>`;
    // return;  
  }
  else if(items.length >= 1){
    items.forEach(item => (item.remove()));
    subtotal.textContent = "Subtotal (0 items): $0";
    totalQuantity.textContent = 0;
    tblCart.innerHTML = `<p class="text-center text-3xl text-red-600 my-6">There is no order. Please make a first order.</p>`;
    // return;
  }
  localStorage.setItem('cartArray', JSON.stringify([]));
}

//12. NÚT THANH TOÁN.
const buy = () => {
  const items = document.querySelectorAll('.cartDiv');
  items.forEach(item => (item.remove()));
  subtotal.textContent = "Subtotal (0 items): $0";
  totalQuantity.textContent = 0;
  localStorage.setItem('cartArray', JSON.stringify([]));
} 
