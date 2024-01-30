function operacion(){
    var n1 = Number((document.getElementById("num1")).value);
    var n2 = Number((document.getElementById("num2")).value);
    var lblre = (document.getElementById("resultado"));
    if(isNaN(n1)||isNaN(n2)){
        lblre.innerHTML="Error";
    }else{
        var lblre = document.getElementById("resultado");
        lblre.innerHTML=sumar(n1,n2);
    }
}

function sumar(num1,num2){
    //console.log(num1+num2);
    //document.write("<h1>num1+num2</h1>");
    var suma = num1+num2;
    return(suma);

}