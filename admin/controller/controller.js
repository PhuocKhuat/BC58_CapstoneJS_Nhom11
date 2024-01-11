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
            <td><img src=${product.img} class="w-20 ms-5"/></td>
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

function layThongTinSP() {
  var _id = document.getElementById("idSP").value;
  var _name = document.getElementById("name").value;
  var _price = document.getElementById("price").value;
  var _img = document.getElementById("photo").value;
  var _desc = document.getElementById("desc").value;
  return {
    id: _id,
    name: _name,
    price: _price,
    img: _img,
    desc: _desc
  };
}