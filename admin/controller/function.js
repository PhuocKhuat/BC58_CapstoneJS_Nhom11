function turnOnLoading() {
    document.getElementById("spinner").style.display = "block";
  }
  function turnOffLoading() {
    document.getElementById("spinner").style.display = "none";
  }
  
  //Theme
  const theme = domID('theme');
  theme.onclick = () =>{
    document.body.classList.toggle("darkTheme");
    if(document.body.classList.contains("darkTheme")){
       theme.src = '../../asset/img/sun.png';
    } else{
      theme.src = '../../asset/img/moon.png';
    }
  }