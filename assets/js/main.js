//replace active class wit
function showAsset(tile){
  if(tile==0){
    var item = document.getElementsByClassName("inactive");
    item[0].classList.toggle("active");
    if(item[0].classList.contains("neutral")){
      var item = document.getElementsByClassName("inactive");
      item[1].classList.toggle("active");
      var item = document.getElementsByClassName("inactive");
      item[0].classList.toggle("neutral");
    }
    }


  if(tile==1){
    var item = document.getElementsByClassName("inactive");
    item[1].classList.toggle("active");
    var topright=document.getElementById("1");
    topright.classList.toggle("neutral");
    var item = document.getElementsByClassName("inactive");
    item[0].classList.remove("active");
    var assets=document.getElementsByClassName("assets");
    assets[0].classList.add("changegrid");

  }
}

function changeHeader(tile){
  if(tile==1){
  var description_node=document.getElementsByClassName("center");
  description_node[1].classList.toggle("webDevheader");
  var description_node=document.getElementsByClassName("center");
  description_node[0].classList.toggle("hidden_description");
  var web_node=document.getElementsByClassName("weboff");
  web_node[0].classList.toggle("webon");
  var cross=document.getElementById("label");
  cross.classList.toggle("crossoff");
  var img=document.getElementById("imghide");
  img.classList.toggle("crossoff");
  var web_node=document.getElementsByClassName("weboff");
  web_node[1].classList.toggle("webon");
  var web_node=document.getElementsByClassName("weboff");
  web_node[2].classList.toggle("webon");
  var web_node=document.getElementsByClassName("weboff");
  web_node[3].classList.toggle("webon");
  var web_node=document.getElementsByClassName("weboff");
  web_node[4].classList.toggle("webon");
  }
}

function graphics(tile){
  if(tile==0){
    var graphics_node=document.getElementsByClassName("hide");
    graphics_node[0].classList.toggle("graphics_active");
    var graphics_node=document.getElementsByClassName("hide");
    graphics_node[1].classList.toggle("graphics_active");
  }

}
