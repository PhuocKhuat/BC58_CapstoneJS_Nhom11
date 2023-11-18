function rennderDssp(dssp) {
    var contentHTML = "";
    for (var i = 0; i < dssp.length; i++) {
      var data = dssp[i];
      var trString = `<tr>
              <td>${data.id}</td>
              <td>${data.name}</td>
              <td>${data.price}</td>
              <td>${data.img}</td>
              <td>${data.desc}</td>
              <td>
              <button class="btn btn-danger">Delete</button>
              <button class="btn btn-primary">Edit</button>
              </td>
          </tr>`;
      contentHTML = contentHTML + trString;
    }
    document.getElementById("tableDanhSach").innerHTML = contentHTML;
  }
  
  function rennderProductlist(productArr) {
    var contentHTML = "";
    for (var i = 0; i < productArr.length; i++) {
      var product = productArr[i];
      var trString = `<tr>
              <td>${product.id}</td>
              <td>${product.name}</td>
              <td>${product.price}</td>
              <td>${product.img}</td>
              <td>${product.desc}</td>
              <td>
              <button onclick=deleteProduct(${product.id}) class="btn btn-danger">Delete</button>
              <button class="btn btn-warning">Edit</button>
              </td>
          </tr>`;
      contentHTML += trString;
    }
    document.getElementById("tableDanhSach").innerHTML = contentHTML;
  }
  
  function turnOnLoading() {
    document.getElementById("spinner").style.display = "block";
  }
  function turnOffLoading() {
    document.getElementById("spinner").style.display = "none";
  }
  
  
  //theme
  const theme = domID('theme');
  theme.onclick = () =>{
    document.body.classList.toggle("darkTheme");
    if(document.body.classList.contains("darkTheme")){
       theme.src = '../../asset/img/sun.png';
    } else{
      theme.src = '../../asset/img/moon.png';
    }
  }

  //LỌC DANH SÁCH THEO LOẠI 
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
      productFilter = products.filter((item) => item.type === "Samsung" );
  } else if(selectList === "iPhone"){
      productFilter = products.filter((item) => item.type === "iPhone");   
  } else if(selectList === "Macbook") {
      productFilter = products.filter((item) => item.type === "Macbook");
  } else if(selectList === "iPad") {
    productFilter = products.filter((item) => item.type === "iPad");
  }
  else {
      productFilter = products;
  }
  rennderDssp(productFilter);
}

//Mở đóng modal
const btnOpen = document.getElementById('btnOpen')
const modal = document.getElementById('modal-container')
const btnClose = document.getElementById('btnClose')

function toggleModal(e) {
  modal.classList.toggle('hide')
}
btnOpen.addEventListener('click', toggleModal)
btnClose.addEventListener('click', toggleModal)
modal.addEventListener('click', function(e) {
  if(e.target == e.currentTarget){
    toggleModal()
  }
})
