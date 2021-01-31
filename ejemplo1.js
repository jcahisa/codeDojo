const amarillo = [];
amarillo.push(1);
amarillo.push("Ale");
amarillo.push("Anto");
amarillo.push("Ruli");
amarillo.push("Vero");
amarillo.push("Jo");
console.log(amarillo);
console.log(amarillo[1]);
amarillo.pop();
console.log(amarillo);
const valor=amarillo.pop();
console.log(amarillo);
console.log(valor);
let nombre="Vero";
console.log(nombre[1]);
const binarios=[0,1,0,1,1,0,0];
let contador=0;
while(binarios.length>0){
    let valor=binarios.pop();
    if(valor===0){
        contador=contador+1;
    }
}
console.log(contador);

const binarios1="0100010";
contador=0;
for(let i=0; i<binarios1.length;i++){
    let valor=binarios1[i];
    if(valor==="0"){
        contador++;
    }
}
console.log(contador);

function contarceros(cadenabinaria){
    let contador=0
    for(let i=0; i<cadenabinaria.length;i++){
        let valor=cadenabinaria[i];
        if(valor==="0"){
            contador++;
        }   
    }
    return contador;
}
console.log(contarceros("10101010"))
