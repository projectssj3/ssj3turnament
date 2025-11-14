const password = "SSJ3ADMIN";
let input = prompt("Mot de passe admin :");
if(input === password){
    document.getElementById("content").innerHTML = "<p>Bienvenue admin !</p>";
} else {
    alert("Accès refusé");
    window.location.href = "../index.html";
}