var myIndex = 0;
carousel();

function carousel(){
    var i;
    var v = document.getElementsByClassName("mySlides");
    for(i=0;i<v.length;i++){
        v[i].style.display = "none";
    }
    myIndex++;
    if(myIndex>v.length){
        myIndex = 1;
    }
    v[myIndex-1].style.display = "block";

    setTimeout(carousel,5000);
}

// var myIndex = 0,
//     container = document.getElementsByClassName('sliderContent')[0];

// carousel();

// function carousel() {
//   var i,
//       el,
//       x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.opacity = "0";
//   }
//   myIndex++;
//   if (myIndex > x.length) {
//     myIndex = 1
//   }
//   el = x[myIndex - 1];
//   container.style.height = el.height + 'px';
//   setTimeout(function() {
//     el.style.opacity = "1";
//     setTimeout(carousel, 3000);
//   },500);
// }