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
  if(tile==2){
    var item = document.getElementsByClassName("inactive");
    item[1].classList.toggle("active");
  }

}

function changeHeader(){
  var description_node=document.getElementsByClassName("center")
  description_node[1].classList.toggle("webDevheader")
  var description_node=document.getElementsByClassName("center")
  description_node[0].classList.toggle("hidden_description")
}
