var dssp = [];

//GỌI API LẤY DANH SÁCH SẢN PHẨM.
function fetchProductList() {
  turnOnLoading();
  axios({
    url: "https://653122dc4d4c2e3f333c71dd.mockapi.io/QDDT",
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

//THÊM SẢN PHẨM.
document.getElementById('btnThemSP').onclick =() => {
  var sP = layThongTinSP();
  //call api thêm sp
  axios ({
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
}

//XOÁ SẢN PHẨM:
function deleteProduct(id) {
  turnOnLoading();
  axios({
    // https://653122ec4d4c2e3f333c7248.mockapi.io/product
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

//TÌM KIỂM SẢN PHẨM THEO TÊN.
domID('btnTimSP').onclick = () =>{
  let input = domID('searchName').value.toLowerCase();
  let result = cartArray.filter((item) => {
    item.name.toLowerCase().includes(input)
  });
  renderDssp(result);
}
const btnSearchSP = domID('btnTimSP');
const searchSP = domID('searchName');
const tblSanPham = domID('tblSanPham');
btnSearchSP.addEventListener('click', () => {
  const productName = searchSP.value.toLowerCase();
  const filterProduct = products.filter(item => item.name.toLowerCase() === productName);
  if(filterProduct.length > 0){
    renderDSSP(filterProduct);
  } else{
    tblSanPham.innerHTML = `<strong class="notFound"><span>Product not found</span></strong>`;
  }
})
