var dssp = [];

function themSP() {
  var _ma = document.getElementById("txtMaSP").value;
  var _ten = document.getElementById("txtTenSP").value;
  var _gia = document.getElementById("txtGiaSP").value;
  var _moTa = document.getElementById("txtMoTaSP").value;
  var sp = new product(_ma, _ten, _gia, _moTa);

  dssp.push(sp);
  rennderDssp(dssp);
}

axios({
  url: "https://653122ec4d4c2e3f333c7248.mockapi.io/product",
  method: "GET",
})
  .then(function (res) {
    rennderProductlist(res.data);
  })
  .catch(function (err) {
    console.log(err);
  });
