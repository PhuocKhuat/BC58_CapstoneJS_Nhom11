// TẢI LẠI TRANG ~ LOCALSTORAGE.
/**
 * B1. Lấy JSON lên từ LOCALSTORAGE.
 * B2. Nếu khác null (không có giá trị, là có giá trị lấy lên), chuyển JSON thành array vì chưa sử dụng được trực tiếp.
 * B3. Lấy array đi xử lý ~ renderCart.
 */
// B1. Tạo 1 mảng giỏ hàng rỗng.
const cartArray = [];
const dataJson = localStorage.getItem('LOCAL_CARTARRAY');
//B2. Nếu khác null (không có giá trị, là có giá trị lấy lên), chuyển JSON thành array vì chưa sử dụng được trực tiếp.
if(dataJson != null){
  let cartArray = JSON.parse(dataJson);
  console.log(cartArray);
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
    const array = [
  {
    id: "1",
    names: "iphoneX",
    price: 1000,
    img: "https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg",
    quantity: 1,
  },
  {
    id: "2",
    names: "Samsung Galaxy M51 ",
    price: 3500,
    img: "https://cdn.tgdd.vn/Products/Images/42/217536/samsung-galaxy-m51-trang-new-600x600-600x600.jpg",
    quantity: 1,
  },
  {
    id: "3",
    names: "Samsung Galaxy M22",
    price: 45000,
    img: "https://shopping-cart-demo2.vercel.app/customer/view/img/s22.png",
    quantity: 1,
  },
  {
    id: "4",
    names: "Iphone 11",
    price: 1000,
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-midnight-green-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566954990073",
    quantity: 1,
  }
];
  // console.log("array", array);
  // const array1 = [{
  //    ...array,
  // }];
  // console.log(array1);
//B3. Tạo vòng lặp for lấy các key trong lớp đối tượng.
  for(let i =0; i< array.length; i++){
    const sP = array[i];
    var cardItem1 = {
      id: sP.id,
      names: sP.names,
      price: sP.price,
      img: sP.img,
      quantity: sP.quantity,
   };
    // console.log(cardItem1);
  }
    //B4. Thêm vào mảng cartArray:
    cartArray.push(cardItem1);
    //B5. 
    let dataJson = JSON.stringify(cartArray);
    //B6. Lưu xuống LOCALSTORAGE.
    localStorage.setItem('LOCAL_CARTARRAY', dataJson);
    //B5. Lấy array đi xử lý tiếp.
    renderCart(cartArray);
}

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
    renderCart(cartArray);
  }

  function domID(id){
    return document.getElementById(id);
}