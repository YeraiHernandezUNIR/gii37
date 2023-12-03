// Código para PALINDROMO
function esPalindromo(cadena) {
    let cadenaReversa = cadena.split('').reverse().join('');
    return cadena === cadenaReversa;
}

// Código para comprar mayor de dos números
function mayorDeDosNumeros(num1, num2) {
    if(num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

// Código para detectar las vocales de una frase
function mostrarVocales(frase) {
    return frase.match(/[aeiou]/gi) || [];
}

//Código para saber cuantas veces aparece cada vocal
function contarVocales(frase) {
    let contador = { a: 0, e: 0, i: 0, o: 0, u: 0 };
    frase.toLowerCase().split('').forEach(char => {
        if (contador.hasOwnProperty(char)) {
            contador[char]++;
        }
    });
    return contador;
}
function mostrarConteoVocales() {
    let frase = document.getElementById('fraseInput').value;
    let resultado = contarVocales(frase);
    document.getElementById('resultadoVocales2').innerText = JSON.stringify(resultado);
}

//Código para que la caja de texto muestre la URL desde donde se navega
// Al cargar la página, el cuadro de texto mostrará la URL de la propia página
window.onload = function() {
    document.getElementById('recurso').value = window.location.href;
};

// Función para manejar la petición AJAX
function mostrarContenidos() {
    let url = document.getElementById('recurso').value;
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            document.getElementById('contenidos').innerText = xhr.responseText;
            document.getElementById('codigo').innerText = xhr.status + ' ' + xhr.statusText;
            document.getElementById('cabeceras').innerText = xhr.getAllResponseHeaders();
        }
        document.getElementById('estados').innerText = getEstadoPeticion(xhr.readyState);
    };

    xhr.open('GET', url, true);
    xhr.send();
}

function getEstadoPeticion(readyState) {
    switch(readyState) {
        case 0: return 'No iniciada';
        case 1: return 'Conexión establecida';
        case 2: return 'Recibida';
        case 3: return 'Procesando';
        case 4: return 'Completada';
        default: return 'Desconocido';
    }
}


