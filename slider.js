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