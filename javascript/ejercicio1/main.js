
//Ejercicio 1.
const nombre_apellidos = (nombre, apellidos) => {
    nombre = window.prompt("Introduce tu nombre: ")
    apellido = window.prompt("Introduce tu apellido: ")
    alert(`${nombre} ${apellido}`)
}
//nombre_apellidos();

//Ejercicio 2
const funcion_booleana = (valor) =>{
    console.log(valor);
}
//funcion_booleana(true);
//Ejercicio 3
const parametros_ilimitados = (...valores) =>{
    valores.forEach(element =>{
        console.log(element + 1);
    })
}
//parametros_ilimitados(1,2,3,4,5,6);

//Ejercicio Cara o Cruz
var numero_aleatorio = Math.round(Math.random());
const moneda = (numero_aleatorio) => {
    console.log(numero_aleatorio);
    return numero_aleatorio === 1 ? "Cara" : "Cruz";
}
//console.log(moneda(numero_aleatorio));

const suma_3_numeros = (num1, num2, num3) => {
    return num1 + num2 + num3;
}
//console.log(suma_3_numeros(1,1,1));
const nombre_completo = (nombre, apellido1, apellido2) => {
    return `${nombre} ${apellido1} ${apellido2}`;
}
//console.log(nombre_completo("Ivan", "Pérez-Montes", "Atserà"));

const num_mayor = (num1, num2) => {
    return num1>num2 ? `${num1}` : `${num2}`;
}
//console.log(num_mayor(3,7));

const mes_del_año = (numero) => {
    let mes = " "
    switch(numero){
        case 1:
            mes = "Enero";
            break;
        case 2:
            mes = "Febrero";
            break;
        case 3:
            mes = "Marzo";
            break;
        case 4:
            mes = "Abril";
            break;
        case 5:
            mes = "Mayo";
            break;
        case 6:
            mes = "Junio";
            break;
        case 7:
            mes = "Julio";
            break;
        case 8:
            mes = "Agosto";
            break;
        case 9:
            mes = "Setiembre";
            break;
        case 10:
            mes = "Octubre";
            break;
        case 11:
            mes = "Noviembre";
            break;
        case 12:
            mes = "Diciembre";
            break;
    }
    return mes;
}
//console.log(mes_del_año(5));
const reemplazar_a_por_o= (texto) => {
    nuevo_texto = texto.replace(/A/g, "O");
    return nuevo_texto;
}
//console.log(reemplazar_a_por_o("AAAAAAAARRAAAO"));
const empieza_por_aca = (texto) => {
    return texto.startsWith("aca") ? "Empieza por aca" : "No empieza por aca";   
}
//console.log(empieza_por_aca("escuela"));
//console.log(empieza_por_aca("academia"));

const saludo_3 = (texto) => {
    return texto == "Hola" ? texto.repeat(3) : "No me has dicho Hola";
}
//console.log(saludo_3("Hola"));
//console.log(saludo_3("holA"));

const love_code = () => {
    console.log("Bucle con for");
    for (let i = 0; i < 10; i++){
        console.log(i + 1 + ". I love code");
    }
    console.log("Bucle con while");
    let i = 0;
    while(i<10){
        console.log(i + 1 + ". I love coding");
        i++;
    }
    console.log("Bucle do-while");
    let x = 0;
    do{
        console.log(x + 1 + ". I love coding");
        x ++;
    } while (x < 10);
}
love_code();