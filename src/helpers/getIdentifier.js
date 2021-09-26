import { types } from "../utils/const";

const getIdentifier = (code) => {
     let codeCad = [];
     let objLex = [];
     let Ident = /[a-zA-Z_]\w*/g;
     let Nums = /\b\d+(\.\d*)?([eE][+-]?\d+)?\b/g;
     let OperM = /(===|!==|[+][+=]|-[-=]|=[=<>]|[<>][=<>]|&&|[|][|])/g;
     let Oper1 = /([-+*/=()&|;:.,<>{}[\]])/g; // May be some character is missing?
     let identificador = "";
     let numero = "";

     for (let i = 0; i < code.length; i++) {
       let char = code.charAt(i);
   
       if (char.match(Ident)) {
         identificador = identificador + char;
         if (
           !code.charAt(i + 1).match(Ident) 
         ) {
           codeCad = [...codeCad, identificador];
           identificador = "";
         }
       } else if (char.match(Oper1)) {
         codeCad = [...codeCad, char];
       } else if (char.match(Nums)) {
         numero = numero + char;
   
         if (!code.charAt(i + 1).match(Nums)
         ) {
           codeCad = [...codeCad, numero];
           numero = "";
         }
       }
     }
   
     let cadNums = [];
   
     //unificacion de numeros decimales
     for (let ss = 0; ss < codeCad.length; ss++) {
       if (codeCad[ss].match(/\d+/) || codeCad[ss].match(/\.{1}/)) {
         if (codeCad[ss].match(/(\.){1}/) && codeCad[ss + 1] != null) {
           if (codeCad[ss + 1].match(/\d+/) && codeCad[ss - 1].match(/\d+/) && codeCad[ss - 1]!=null) {
             cadNums = [...cadNums, codeCad[ss - 1], codeCad[ss], codeCad[ss + 1]];
             codeCad.splice(ss - 1, 3, cadNums.join(""));
             cadNums = [];
           }
         }
       }
     }
   
     //unificar los operadores multi simbolos
   
     let inc = 0;
     while (inc < codeCad.length) {
       if (codeCad[inc].match(Oper1) || codeCad[inc].match(OperM)) {
         if (
           (codeCad[inc] + codeCad[inc + 1]).match(OperM) &&
           codeCad[inc + 1] != null
         ) {
           codeCad.splice(inc, 2, codeCad[inc] + codeCad[inc + 1]);
         }
       }
       inc++;
     }
   

   
     objLex = codeCad.map((x) => {
       let obj = {
         Nombre: x,
         Tipo: "",
         Token: 0,
       };
       //Palabras reservadas o identificadores
       if (x.match(Ident)) {
         let Palabras = types[0].values;
         for (let i = 0; i < Palabras.length; i++) {
           if (x === Palabras[i]) {
             obj.Tipo = types[0].name;
             obj.Token = i + 1;
           }
         }
         if (obj.Tipo === "") {
           obj.Tipo = "Identificador";
           obj.Token = 185;
         }
       }
   
       if (x.match(Oper1) || x.match(OperM)) {
         let ParentesisIzq = types[1].values;
         let ParentesisDer = types[2].values;
         let LlaveIzq = types[3].values;
         let LlaveDer = types[4].values;
         let corcheteIzq = types[5].values;
         let corcheteDer = types[6].values;
         let OperadoresAri = types[7].values;
         let logicos = types[8].values;
         let comparadores = types[9].values;
         let delimitador = types[10].values;
   
         //Para operadores aritmeticos
         for (let i = 0; i < OperadoresAri.length; i++) {
           if (x === OperadoresAri[i]) {
             obj.Tipo = types[7].name;
             obj.Token = i + 155;
           }
         }
         //Para parentesis izquierdo
         for (let i = 0; i < ParentesisIzq.length; i++) {
           if (x === ParentesisIzq[i]) {
             obj.Tipo = types[1].name;
             obj.Token = i + 151;
           }
         }
         //Para parentesis derecho
         for (let i = 0; i < ParentesisDer.length; i++) {
           if (x === ParentesisDer[i]) {
             obj.Tipo = types[2].name;
             obj.Token = i + 152;
           }
         }
   
         //Para llave izquierda
   
         for (let i = 0; i < LlaveIzq.length; i++) {
           if (x === LlaveIzq[i]) {
             obj.Tipo = types[3].name;
             obj.Token = i + 153;
           }
         }
         //Para llave derecha
         for (let i = 0; i < LlaveDer.length; i++) {
           if (x === LlaveDer[i]) {
             obj.Tipo = types[4].name;
             obj.Token = i + 154;
           }
         }
         //Para Corchete izquierdo
         for (let i = 0; i < corcheteIzq.length; i++) {
           if (x === corcheteIzq[i]) {
             obj.Tipo = types[5].name;
             obj.Token = i + 186;
           }
         }
         //Para corchete derecho
         for (let i = 0; i < corcheteDer.length; i++) {
           if (x === corcheteDer[i]) {
             obj.Tipo = types[6].name;
             obj.Token = i + 187;
           }
         }
         //Para Operadores logicos
         for (let i = 0; i < logicos.length; i++) {
           if (x === logicos[i]) {
             obj.Tipo = types[8].name;
             obj.Token = i + 166;
           }
         }
         //Para Operadores comparadores
         for (let i = 0; i < comparadores.length; i++) {
           if (x === comparadores[i]) {
             obj.Tipo = types[9].name;
             obj.Token = i + 172;
           }
         }
         //Para Delimitador
         for (let i = 0; i < delimitador.length; i++) {
           if (x === delimitador[i]) {
             obj.Tipo = types[10].name;
             obj.Token = i + 183;
           }
         }
       }
       let numero = types[11].values;
       if (x.match(Nums)) {
         //Para Nmeros
         for (let i = 0; i < numero.length; i++) {
           if (x.match(numero[i])) {
             obj.Tipo = types[11].name;
             obj.Token = i + 188;
           }
         }
       }
   
       return obj;
     });
     
     return objLex;
   };
   
   export default getIdentifier;   
   