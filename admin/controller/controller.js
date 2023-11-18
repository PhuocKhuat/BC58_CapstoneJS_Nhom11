    function rennderProductlist(productArr) {
    var contentHTML = "";
    for (var i = 0; i < productArr.length; i++) {
      var product = productArr[i];
      var trString = `<tr>
              <td>${product.id}</td>
              <td>${product.name}</td>
              <td>${product.price}</td>
              <td><img src="${product.img}"/></td>
              <td>${product.desc}</td>
              <td>
              <button onclick='deleteProduct(${product.id})' class="btn btn-danger">Delete</button>
              <button onclick='editProduct(${product.id})' class="btn btn-warning">Edit</button>
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

  //lấy thông tin từ form
  function getDataForm() {
    var id = document.getElementById("maSP").value;
    var ten = document.getElementById("tenSP").value;
    var gia = document.getElementById("giaSP").value;
    var hinhAnh = document.getElementById("hinhAnh").value;
    var moTa = document.getElementById("moTa").value;

    return {
      id: id,
      name: ten,
      price: gia,
      img: hinhAnh,
      desc: moTa,
    }
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
  rennderfetchProductList(productFilter);
}

