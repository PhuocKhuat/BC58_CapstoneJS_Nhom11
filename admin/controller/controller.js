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