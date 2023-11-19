//render dssp
var idEdit = null;

//gọi api lấy danh sách sp
function fetchProductList() {
  turnOnLoading();
  axios({
    url: "https://653122ec4d4c2e3f333c7248.mockapi.io/product",
    method: "GET",
  })
    .then(function (res) {
      rennderProductlist(res.data);
      turnOffLoading();
    })
    .catch(function (err) {
      turnOffLoading();
      console.log(err);
    });
}

fetchProductList();

//xóa 1 sản phẩm trên sever
function deleteProduct(id) {
  turnOnLoading();
  axios({
    url: `https://653122ec4d4c2e3f333c7248.mockapi.io/product/${id}`,
    method: "DELETE",
  })
    .then(function (res) {
      //gọi api lấy ds mới nhất từ server sau khi xóa thành công
      fetchProductList();
      console.log(res);
    })
    .catch(function (err) {
      console.log(err);
      turnOffLoading();
    });
}

//thêm sp trên sever
function createProduct(){
  console.log('sss')

  var product = getDataForm();
  turnOnLoading();
  axios({
    url: "https://653122ec4d4c2e3f333c7248.mockapi.io/product",
    method: "POST",
    data: product,
  })
    .then(function (res) {
      //gọi api lấy ds mới nhất từ server sau khi thêm thành công
      fetchProductList();
      console.log(res);
      //tắt modal sau khi thêm thành công
      $('#myModal').modal('hide')
    })
    .catch(function (err) {
      console.log(err);
      turnOffLoading();
    });
}

//sửa = lấy chi tiết + cập nhật
function editProduct(id) {
  $('#myModal').modal('show')
  axios({
    url: `https://653122ec4d4c2e3f333c7248.mockapi.io/product/${id}`,
    method: "GET",
  })
    .then(function (res) {
      console.log(res.data);
      var product = res.data;
      //hiện thị res lên form
      document.getElementById('maSP').value = product.id;
      document.getElementById('tenSP').value = product.name;
      document.getElementById('giaSP').value = product.price;
      document.getElementById('hinhAnh').value = product.img;
      document.getElementById('moTa').value = product.desc;
    })
    .catch(function (err) {
      console.log(err);
    });
}

function updateProduct(){
  var product = getDataForm();
  //gọi api cập nhật
  turnOnLoading();
  axios({
    url: `https://653122ec4d4c2e3f333c7248.mockapi.io/product/${idEdit}`,
    method: "PUT",
    data: product,
  })
    .then(function (res) {
      //gọi api lấy ds mới nhất từ server sau khi cập nhật thành công
      fetchProductList();
      console.log(res);
      //tắt modal sau khi cập nhật thành công
      $('#myModal').modal('hide')
    })
    .catch(function (err) {
      console.log(err);
      turnOffLoading();
    });
}



