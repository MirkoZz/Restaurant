
//Analyse de l'adresse mail dans le formulaire
document.getElementById("mail").onblur = function(){
	var mail = document.querySelector("#mail").value;
	var regMail = /[a-z\d._-]+@[a-z._-]{2,}\.[a-z]{2,4}/;

	if(regMail.test(mail)){
        document.getElementById("invalidMail").style.display = "none";
        document.getElementById("mail").style.boxShadow = "0 0 5px 1px green";
    }else{
        document.getElementById("invalidMail").style.display = "block";
        document.getElementById("mail").style.boxShadow = "0 0 5px 1px red";
    }
}   

//Analyse du numéro de téléphone dans le formulaire
document.getElementById("telephone").onblur = function(){
	var tel = document.getElementById("telephone").value;
    var regTel = /(0|\+33)[1-9]( ?-?\.?[0-9]{2}){4}/;

	if(regTel.test(tel)){
        document.getElementById("invalidTel").style.display = "none";
        document.getElementById("telephone").style.boxShadow = "0 0 5px 1px green";
    }else{
        document.getElementById("invalidTel").style.display = "block";
        document.getElementById("telephone").style.boxShadow = "0 0 5px 1px red";
    }
}

//Analyse de l'espace souhaité
document.getElementById("espace").onblur = function(){
    if(document.getElementById("espace").value != "null"){
        document.getElementById("espace").style.boxShadow = "0 0 5px 1px green";
    }else{
        document.getElementById("espace").style.boxShadow = "0 0 5px 1px red";
    }
}

//Analyse du nombre de couverts
document.getElementById("couverts").onblur = function(){
    if(document.getElementById("couverts").value != "null"){
        document.getElementById("couverts").style.boxShadow = "0 0 5px 1px green";
    }else{
        document.getElementById("couverts").style.boxShadow = "0 0 5px 1px red";
    }
}

//Analyse du service souhaité
document.getElementById("radio1").onclick = function(){
    document.getElementById("radio1").style.boxShadow = "0 0 5px 1px green";
    document.getElementById("radio2").style.boxShadow = "none";
}
document.getElementById("radio2").onclick = function(){
    document.getElementById("radio2").style.boxShadow = "0 0 5px 1px green";
    document.getElementById("radio1").style.boxShadow = "none";
}

//Remise à zero du formulaire
document.getElementById("clear").onclick = function(){
    document.getElementById("invalidMail").style.display = "none";
    document.getElementById("mail").style.boxShadow = "0 0 5px 1px red";
    document.getElementById("invalidTel").style.display = "none";
    document.getElementById("telephone").style.boxShadow = "0 0 5px 1px red";
    document.getElementById("couverts").style.boxShadow = "0 0 5px 1px red";
    document.getElementById("espace").style.boxShadow = "0 0 5px 1px red";
    document.getElementById("radio1").style.boxShadow = "0 0 5px 1px red";
    document.getElementById("radio2").style.boxShadow = "0 0 5px 1px red";
}

//Analyse du formulaire avant envoi
document.getElementById("envoyer").onclick = function(){
    var mail = document.getElementById("mail").value;
	var regMail = /[a-z\d._-]+@[a-z._-]{2,}\.[a-z]{2,4}/;
    var tel = document.getElementById("telephone").value;
    var regTel = /(0|\+33)[1-9]( ?-?\.?[0-9]{2}){4}/;
    var date = document.getElementById("date").value;
    var regDate = /(\d{4})\-(\d{1,2})\-(\d{1,2})/;
    var time = document.getElementById("heure").value;
    var regTime = /(\d{1,2}):(\d{2})/;
    
    if((document.getElementById("nom").valid != "") &&
       (document.getElementById("prenom").value != "") &&
       (document.getElementById("nom").value != "") &&
       (regTel.test(tel)) && (regMail.test(mail)) &&
       (document.getElementById("espace").value != "null") &&
       (document.getElementById("couverts").value != "null") &&
       (regDate.test(date)) && (regTime.test(time))){
        alert("Réservation envoyée");
    }else{
        alert("Le formulaire est incomplet");
        }
}