//B1. domQuerry chỗ hiện ở layout ở dòng 1.
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
          <em class="stocks">In Stock: ${sP.instock}</em>
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
    `
    //B5. Chuỗi rỗng += chuỗi string.
    contentHTML += string;
  }
  //B6. dom lên giao diện.
   domID('tblSanPham').innerHTML = contentHTML;
}

//THÊM SẢN PHẨM
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
//B2. Tạo 1 mảng rỗng để thêm sản phẩm vào.
let cartArray = [];
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
  // renderSubtotal();
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
//TẠO HÀM THAY ĐỔI SỐ LƯỢNG (MỤC ĐÍCH LÀ BIẾN NHỮNG PHẦN TỬ (SỐ LƯỢNG) THÀNH SỐ LƯỢNG MỚI)
/**
 * B1. Thêm onclick cho 2 nút cộng trừ, có 2 thuộc tính là action và id (ở renderCart).
 * B2. Gọi hàm thay đổi số lượng.
 * B3. Thay đổi số lượng từng phần tử trong cartArray bằng MAP và lưu (gán) vào cartArray cũ.
 * B4. Tạo biến trung gian gán bằng số lượng phần tử.
 * B5. Kiếm tra id biến từ map có giống id được duyệt từ forEach không.
 * B6. Nếu action = minus thì giảm số lượng xuống, plus thì tăng lên.
 * B7. Trả về item + quantity mới.
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
      return { //OBJECT LITERAL.
       ...item,
       quantity,
      };
  })
  capNhatSP();
}


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

