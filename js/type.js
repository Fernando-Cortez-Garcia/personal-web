 var i = 0;
 var j = 0;
 var texto = "Hola Bienvenido";
 var texto2 = "Esta es mi pagina personal";


 function type() {
     if (i < texto.length) {
         document.getElementById('texto').innerHTML += texto.charAt(i);
         i++;
         setTimeout(type, 250);
     }

 }

 function type2() {
     if (j < texto2.length) {
         document.getElementById('texto2').innerHTML += texto2.charAt(j);
         j++;
         setTimeout(type2, 250);
     }
 }

 type();
 setTimeout(type2, 6000);