function renderDssp(dssp) {
  var contentHTML = "";
  for (var i = 0; i < dssp.length; i++) {
    var data = dssp[i];
    var trString = `<tr>
            <td>${data.id}</td>
            <td>${data.name}</td>
            <td>${data.price}</td>
            <td>${data.screen}</td>
            <td>${data.backCamera}</td>
            <td>${data.frontCamera}</td>
            <td><img src=${data.img} class="w-20" alt="Phone Image"/></td>
            <td>${data.type}</td>
            <td>${data.instock}</td>
            <td>${data.desc}</td>
            <td>
            <button class="btn btn-warning" data-bs-toggle ="modal" data-bs-target ="#exampleModal" id="editSP" onclick="editProduct(${data.id})" >Edit</button>
            <button class="btn btn-danger" onclick="deleteProduct(${data.id})" class="deleteSP">Delete</button>
            </td>
        </tr>`;
    contentHTML = contentHTML + trString;
  }
  document.getElementById("tableDanhSach").innerHTML = contentHTML;
}

function layThongTinSP() {
  var _name = domID("nameSP").value;
  var _price = domID("priceSP").value*1;
  var _screen = domID("screen").value;
  var _backCamera = domID("backCamera").value;
  var _fontCamera = domID("frontCamera").value;
  var _img = domID("photo").value;
  var _type = domID("type").value;
  var _instock = domID("quantitySP").value;
  var _desc = domID("desc").value;
  return {
    name: _name,
    price: _price,
    screen: _screen,
    backCamera: _backCamera,
    frontCamera: _fontCamera,
    img: _img,
    type: _type,
    instock: _instock,
    desc: _desc
  };
}