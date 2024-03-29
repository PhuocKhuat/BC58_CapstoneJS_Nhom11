var dssp = [];

//GỌI API LẤY DANH SÁCH SẢN PHẨM.
function fetchProductList() {
  turnOnLoading();
  axios({
    url: "https://653122dc4d4c2e3f333c71dd.mockapi.io/QDDT",
    method: "GET",
  })
    .then(function (res) {
      renderDssp(res.data);
      findProduct(res.data);
      turnOffLoading();
    })
    .catch(function (err) {
      turnOffLoading();
      console.log(err);
    });
}
fetchProductList();

//THÊM SẢN PHẨM.
domID("btnThemSP").onclick = () => {
  const sP = layThongTinSP();
  //call api thêm sp
  axios({
    url: "https://653122dc4d4c2e3f333c71dd.mockapi.io/QDDT",
    method: "POST",
    data: sP,
  })
    .then(function (res) {
      console.log(res);
      fetchProductList();
      turnOffLoading();
    })
    .catch(function (err) {
      console.log(err);
      turnOffLoading();
    });
};

//XOÁ SẢN PHẨM:
function deleteProduct(id) {
  turnOnLoading();
  axios({
    url: `https://653122dc4d4c2e3f333c71dd.mockapi.io/QDDT/${id}`,
    method: "DELETE",
  })
    .then(function (res) {
      //gọi api lấy ds mới nhất từ server sau khi xóa thành công
      console.log(res);
      fetchProductList();
      turnOffLoading();
    })
    .catch(function (err) {
      console.log(err);
      turnOffLoading();
    });
}

//SỬA SẢN PHẨM:
let idProduct = null;
function editProduct(id) {
  idProduct = id;
  turnOnLoading();
  let promise = axios({
    url: `https://653122dc4d4c2e3f333c71dd.mockapi.io/QDDT/${id}`,
    method: "GET",
  });
  promise
    .then((res) => {
      console.log(res.data);
      const product = res.data;
      domID("nameSP").value = product.name;
      domID("priceSP").value = product.price;
      domID("screen").value = product.screen;
      domID("backCamera").value = product.backCamera;
      domID("frontCamera").value = product.frontCamera;
      domID("photo").value = product.img;
      domID("type").value = product.type;
      domID("quantitySP").value = product.instock;
      domID("desc").value = product.desc;
      btnCapNhat.style.display = "block";
      btnThemSP.style.display = "none";
      turnOffLoading();
    })
    .catch((err) => {
      console.log(err);
      turnOffLoading();
    });
}
//CẬP NHẬT SẢN PHẨM:
domID("btnCapNhat").onclick = function()  { 
  const product = layThongTinSP();
  turnOnLoading();
  axios({
    url: `https://653122dc4d4c2e3f333c71dd.mockapi.io/QDDT/${idProduct}`,
    method: "PUT",
    data: product,
  })
    .then((res) => {
      console.log(res);
      fetchProductList();
      turnOffLoading();
    })
    .catch((err) => {
      console.log(err);
      turnOffLoading();
    });
};

// https://653122ec4d4c2e3f333c7248.mockapi.io/product