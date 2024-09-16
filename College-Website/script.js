let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

function acadinc(){
    var flag = 0;
    document.querySelector("#hrb-1")
    .addEventListener("click",function(){
       if(flag===0){
        document.querySelector("#academics").style.top= "140px"
        flag=1;
        document.querySelector("#students").style.top = "-640px"
       }else{
        document.querySelector("#academics").style.top = "-640px"
        flag=0;
       }
    }) 
}

acadinc();
function students(){
    var flag = 0;
    document.querySelector("#hrb-4")
    .addEventListener("click",function(){
       if(flag===0){
         document.querySelector("#students").style.top = "140px"
         document.querySelector("#academics").style.top = "-640px"
        flag=1;
       }else{
        document.querySelector("#students").style.top = "-640px"
        flag=0;
       }
    }) 
}

students();



function loadGoogleTranslate()

{

  new google.translate.TranslateElement("myid")

}

function chatbox(){
  var flag = 0;
  document.querySelector("#chatbox")
  .addEventListener("click",function(){
     if(flag===0){
       document.querySelector(".wrapper").style.left = "1900px"
      //  document.querySelector("#chatbox").style.opacity = "50%"
      //  document.querySelector("#academics").style.display = "none"
      flag=1;
     }else{
      document.querySelector(".wrapper").style.left = "1500px"
      flag=0;
     }
  }) 
}

chatbox();


function color1(){
  var flag = 0;
  document.querySelector("#color1")
  .addEventListener("mouseover",function(){
     if(flag===0){
      document.querySelector("#main").style.background= "linear-gradient(89deg, rgba(255, 255, 0, 1) 0%, rgba(235, 199, 230, 0) 0%, rgba(191, 172, 226, 1) 100%, rgba(238, 130, 238, 1) 100%, rgba(63, 81, 181, 1) 100%);"
      document.querySelector("#hr-bottom-right button").style.backgroundColor= "rgb(0, 81, 86)";
      document.querySelector("#resources").style.backgroundColor= "rgb(0, 81, 86)"
      document.querySelector("#utility-menu").style.backgroundColor= "rgb(0, 171, 179)"
      // document.querySelector("#hr-buttom").style.backgroundColor= "red"
      document.querySelector("#scroll").style.backgroundColor= "rgb(60, 64, 72)"
      document.querySelector("#contect-us").style.backgroundColor= "rgb(178, 178, 178)"
      document.querySelector("#gallery").style.backgroundColor= "rgb(178, 178, 178)"
      document.querySelector("#menu-icons").style.backgroundColor= "rgb(178, 178, 178)"
      document.querySelector("#footer").style.backgroundColor= "rgb(234, 234, 234)"

      // flag=1;
     }else{
      document.querySelector("#academics").style.top = "-640px"
      flag=0;
     }
  }) 
}
color1();

function color2(){
  var flag = 0;
  document.querySelector("#color2")
  .addEventListener("mouseover",function(){
     if(flag===0){
      document.querySelector("#main").style.backgroundColor= "#fff"
      document.querySelector("#hr-bottom-right button").style.backgroundColor= "#060047";
      document.querySelector("#resources").style.backgroundColor= "#060065"
      document.querySelector("#utility-menu").style.backgroundColor= "#060080"
      // document.querySelector("#hr-buttom").style.backgroundColor= "red"
      document.querySelector("#scroll").style.backgroundColor= "#b3005e"
      document.querySelector("#contect-us").style.backgroundColor= "#e90064"
      document.querySelector("#gallery").style.backgroundColor= "#e90064"
      document.querySelector("#menu-icons").style.backgroundColor= "#E90064"
      document.querySelector("#contect-us h1").style.color= "#FFF"
      document.querySelector("#gallery h1").style.color= "#FFF"
      document.querySelector("#menu-icons h1").style.color= "#FFF"

      // flag=1;
     }else{
      document.querySelector("#academics").style.top = "-640px"
      flag=0;
     }
  }) 
}
color2();



function color3(){
  var flag = 0;
  document.querySelector("#color3")
  .addEventListener("mouseover",function(){
     if(flag===0){
      document.querySelector("#main").style.backgroundColor= "#fff"
      document.querySelector("#hr-bottom-right button").style.backgroundColor= "#7286D3";
      document.querySelector("#resources").style.backgroundColor= "#7286D3"
      document.querySelector("#utility-menu").style.backgroundColor= "rgb(142, 167, 233)"
      document.querySelector("#scroll").style.backgroundColor= "#8EA7E9"
      document.querySelector("#contect-us").style.backgroundColor= "#E5E0FF"
      document.querySelector("#gallery").style.backgroundColor= "#E5E0FF"
      document.querySelector("#menu-icons").style.backgroundColor= "#E5E0FF"
      document.querySelector("#contect-us h1").style.color= "black"
      document.querySelector("#gallery h1").style.color= "black"
      document.querySelector("#menu-icons h1").style.color= "black"
      document.querySelector("#footer").style.backgroundColor= "#FFF2F2"

      // flag=1;
     }else{
      document.querySelector("#academics").style.top = "-640px"
      flag=0;
     }
  }) 
}
color3();

function color4(){
  var flag = 0;
  document.querySelector("#color4")
  .addEventListener("mouseover",function(){
     if(flag===0){
      document.querySelector("#main").style.backgroundColor= "#fff"
      document.querySelector("#hr-bottom-right button").style.backgroundColor= "rgb(116,4,38)";
      document.querySelector("#resources").style.backgroundColor= "rgb(116,4,38)"
      document.querySelector("#utility-menu").style.backgroundColor= "rgb(153,1,46)"
      document.querySelector("#hr-bottom-right button").style.backgroundColor= "rgb(153,1,46)";
      // document.querySelector("#resources").style.backgroundColor= "rgb(45,37,60)"
      document.querySelector("#utility-menu").style.backgroundColor= "rgb(153,1,46)"
      // document.querySelector("#hr-buttom").style.backgroundColor= "red"
      document.querySelector("#scroll").style.backgroundColor= "rgb(153,1,46)"
      document.querySelector("#contect-us").style.backgroundColor= "#B42B51"
      document.querySelector("#gallery").style.backgroundColor= "#B42B51"
      document.querySelector("#menu-icons").style.backgroundColor= "#B42B51"
      document.querySelector("#contect-us h1").style.color= "#fff"
      document.querySelector("#gallery h1").style.color= "#fff"
      document.querySelector("#menu-icons h1").style.color= "#fff"
      document.querySelector("#footer").style.backgroundColor= "#E63E6D"

      // flag=1;
     }else{
      document.querySelector("#academics").style.top = "-640px"
      flag=0;
     }
  }) 
}
color4();


