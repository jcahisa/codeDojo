// alert("holamundo");

// const color=prompt("color preferido");

// document.getElementById("titulo").innerHTML=`su color preferido es ${color}`;

// var condicionsalida=prompt("desea salir");

// while (condicionsalida.toLowerCase() != "si") {}

// let suma=0
// consolelog =suma+"1";

const amarillo=[];

amarillo.push("Vero");
amarillo.push("Martin");
amarillo.push("Ale");
amarillo.push(402);

console.log(amarillo);

console.log(amarillo[3]);

amarillo.pop();

console.log(amarillo);

const binarios=[0,1,0,0,1,0];
let contador=0;
while(binarios.length>0){
    
    let valor=binarios.pop();
    if(valor===0){
        contador++
    };   
}
console.log(contador);

const binarios1="0100010"
 contador=0;

for(var i=0;i<binarios1.length;i++){

    let valor=binarios1[i];
    if(valor==="0"){
        contador++;
    }
}

console.log(contador);

contador=0;

function contarceros(cadenabinaria){

    for(var i=0;i<cadenabinaria.length;i++){

        let valor=cadenabinaria[i];
        if(valor==="0"){
            contador++;
        }
    }
    return contador;
}

console.log(contarceros("000000"));
