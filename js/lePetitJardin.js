//Gestion de l'affichage du menu en version portable
document.getElementById("menu_btn").addEventListener("click", function(){
    var nav = document.querySelector("nav").style.display;
    if(nav == "none"){
        document.querySelector("nav").style.display = "block";
    }else{
        document.querySelector("nav").style.display = "none";
    }
});




