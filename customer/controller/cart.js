const tblCart = document.querySelector("#tblCart");
//B6. Tạo rendderDSSP bên controller.
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
          <em class="stocks">In Stock</em>
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
            $<p class="product-price font-bold" id="product-price">${sP.price}</p>
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
    <script>
    
    </script>
    `
    //B5. Chuỗi rỗng += chuỗi string.
    contentHTML += string;
  }
  //B6. dom lên giao diện.
   domID('tblSanPham').innerHTML = contentHTML;
}

//THÊM SẢN PHẨM
/**
 * B1. Tạo 1 mảng productss chứa các thông tin.
 * B2. Tạo 1 mảng rỗng để thêm sản phẩm vào.
 * B3. Tạo 1 nút thêm.
 * B4. Tạo biến trung gian và tìm sản phẩm trong productss bằng hàm FIND.
 * B5. Thêm sản phẩm vào mảng rỗng.
 * B6. Vì thêm 1 sản phẩm xuất hiện 2 lần chứ không tăng thêm số lượng (không đúng), sử dụng if xem sản phẩm xuất hiện chưa.
 * B7. Ngược lại thì đi tìm ở B4.
 */
let cartArray = [];  

const themSP = (id) => {
  if(cartArray.some((item) => item.id === id)){
    alert("Product already in cart.");
  } else{
    const item = productss.find((product) => product.id === id);
    // console.log("item", item);
    cartArray.push({
      ...item,
      quantity: 1,     
    });
    console.log("cartArray", cartArray);
  }
  capNhatSP();
}

//CẬP NHẬT SẢN PHẨM.
function capNhatSP(){
  renderCart();
  // renderSubtotal();
} 

//TẠO RENDERCART ~ 4 BƯỚC.
/**
 * B1. Dùng forEach duyệt mảng cartArray trả về từng phần tử trong array.
 * B2. domQuerry chỗ hiện ở layout.
 * B3. Xuất ra màn hình các thẻ html.
 * B4. Gán từng thuộc tính tương ứng muốn xuất hiện.
 */
function renderCart(){
  cartArray.forEach((item) => {
    tblCart.innerHTML += `
  <div class="cartDiv flex justify-evenly items-center">
  <tr class="cartTr col w-24">
    <td><img src="${item.img}" class="w-16 sPcom" style="display: inline-block"/></td>
    <td><span class="sPcom">${item.name}</span></td>
    <td><span class="sPcom units">
            <span class="btn minus" onclick = "changeUnits('minus', ${item.id})">-</span>  
            <span class="numberUnits">${item.quantity}</span>  
            <span class="btn plus" onclick = "changeUnits('plus', ${item.id})">+</span>  
        </span>
    </td>
    <td><span class="sPcom2">${item.id}</span></td>
    <td><span class="sPcom3 priceProduct">${item.price}</span></td>
    <td>
    <button class="btn btn-danger sPcom3" onclick="xoaSP('${item.id}')">Clear</button>
    </td>
    <br>
  </tr>
  </div>
  `
});
}
//TẠO HÀM THAY ĐỔI SỐ LƯỢNG.
/**
 * B1. Thêm onclick cho 2 nút cộng trừ, có 2 thuộc tính là action và id.
 * B2. Thay đổi số lượng từng phần tử trong cartArray bằng MAP và lưu (gán) vào cartArray cũ.
 * B3.  
 */
//Tham số đầu tiên là hành động (cộng hoặc trừ)
function changeUnits(action, id){
   cartArray = cartArray.map((item) => {
      
   })
}
//ĐẾN 32:04

//13. XOÁ SẢN PHẨM
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

