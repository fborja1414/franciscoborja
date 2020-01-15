//replace active class wit
function ShowAsset(tile){
  if(tile==0){
    var item = document.getElementsByClassName("inactive");
    item[0].classList.toggle("active");

  }
  if(tile==1){
    var item = document.getElementsByClassName("inactive");
    item[1].classList.toggle("active");
    var topright=document.getElementById("1");
    topright.classList.toggle("neutral");
    var assets=document.getElementsByClassName("assets");
    assets[0].classList.add("changegrid");

  }
  if(tile==2){
    var item = document.getElementsByClassName("inactive");
    item[1].classList.toggle("active");
  }

  //document.getElementsByClassName("graphics").style.transitionProperty = "100vw, 100vh";
  //var webdev=getElementsByClassName("webdev");
  //webdev.style.display="none";
}

function pulse(){
  var pulse_node= document.getElementById("pulse");
  pulse_node.classList.toggle("pulse");
}
