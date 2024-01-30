function turnOnLoading() {
  document.getElementById("spinner").style.display = "block";
}
function turnOffLoading() {
  document.getElementById("spinner").style.display = "none";
}

//THEME
const theme = domID("theme");
theme.onclick = () => {
  document.body.classList.toggle("darkTheme");
  if (document.body.classList.contains("darkTheme")) {
    theme.src = "./asset/img/sun.png";
  } else {
    theme.src = "./asset/img/moon.png";
  }
};

const findProduct = (productAPI) => {
  //TÌM KIỂM SẢN PHẨM THEO TÊN.
  // domID("btnTimSP").onclick = () => {
  //   let input = domID("searchName").value.toLowerCase();
  //   let result = productAPI.filter((item) => item.name.toLowerCase().includes(input));
  //   renderDssp(result);
  // };
  domID("btnTimSP").addEventListener("click", () => {
    const productName = domID("searchName").value.toLowerCase();
    const filterProduct = productAPI.filter(
      (item) => item.name.toLowerCase() === productName
    );
    if (filterProduct.length > 0) {
      renderDssp(filterProduct);
    } else if(filterProduct) {
      domID("notFound").innerHTML = `<p>
      <strong class="notFound"><span>Product not found</span></strong>
      </p>`;
      domID("tableDanhSach").innerHTML = "";
    }
  });
};

const btnCapNhat = domID("btnCapNhat");
btnCapNhat.style.display = "block";
const btnThemSP = domID("btnThemSP");
btnThemSP.style.display = "block";
domID("btnThem").onclick = () => {
  btnCapNhat.style.display = "none";
  btnThemSP.style.display = "block";
}

//NAV MOBILE
function myFunctions() {
  var x = document.getElementById("myLinkss");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
// const modal = domID("exampleModal");
// modal.style.display = "none";
// domID("editSP").onclick = () =>{ 
//   modal.style.display = "block";
// }