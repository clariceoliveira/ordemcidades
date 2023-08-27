function fListar(){
    var cidades = document.querySelector("#cidades").value;
    cidades = cidades.replaceAll(" ", "");
    var acidades= cidades.split(",");
    acidades= acidades.sort();
    var resultado = document.querySelector("#resultado");
    resultado.innerHTML= "<p>"+acidades+"</p>";
    
}
