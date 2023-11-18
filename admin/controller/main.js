var dssp = [];

function layThongTinSP() {
  var _id = document.getElementById("idSP").value;
  var _name = document.getElementById("name").value;
  var _price = document.getElementById("price").value;
  var _img = document.getElementById("photo").value;
  var _desc = document.getElementById("desc").value;
  var sp = new product(_id, _name, _price, _img, _desc);

}

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

//thêm sản phẩm
document.getElementById('btnThemSP').onclick =() => {
  var sp = layThongTinSP();

  //call api thêm sp
  axios ({
    url: "https://653122ec4d4c2e3f333c7248.mockapi.io/product",
    mothod: "POST",
    data: sp,
  })
    .then(function (res) {
    console.log(res);
   })
   .catch(function (err) {
    console.log(err);
    turnOffLoading();
   });
  
}

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

//update sp



