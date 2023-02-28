const texto = 'El hipopótamo Hipo está con hipo. Y su hipopotamito con hipito. ¿Quién les quita el hipo a los hipopótamos Hipo?';

const textoSinCaracteresEspeciales = texto.replace(/[&/\#,+()$~%.'":*¿?<>{}]/g, '');

const palabrasEnTexto = textoSinCaracteresEspeciales.split(' ');

const ocurrenciasPalabras = {};

palabrasEnTexto.forEach(palabra => {
  const palabraMinuscula = palabra.toLowerCase();

  if (ocurrenciasPalabras[palabraMinuscula]) { 
    ocurrenciasPalabras[palabraMinuscula]++;
  } else {
    ocurrenciasPalabras[palabraMinuscula] = 1;
  }
});

console.log(ocurrenciasPalabras);