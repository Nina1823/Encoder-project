document.addEventListener('DOMContentLoaded', function() {
    const encriptarTextArea = document.getElementById('encriptarTextArea');
    const desencriptarTextArea = document.getElementById('desencriptarTextArea');
    const btnEncriptar = document.getElementById('btnEncriptar');
    const btnCopy = document.getElementById('btnCopy');
    const copyMessage = document.getElementById('copyMessage');
    const btnDesencriptar = document.getElementById('btnDesencriptar');
    const encriptarError = document.getElementById('encriptarError');
    const clearTextAreas = document.getElementById('clear');

    // Expresión regular para permitir solo minúsculas y espacios
    const regex = /^[a-z\s]*$/;

    //Validar texto
    function validarTexto(texto) {
        if (!regex.test(texto)) {
            return texto.replace(/[^a-z\s]/g, '');
        }
        return texto;
    }

    // Mostrar mensaje de error
    function mostrarError(elementoError, mensaje) {
        elementoError.textContent = mensaje;
        elementoError.style.display = 'block';
    }

    // Ocultar mensaje de error
    function ocultarError(elementoError) {
        elementoError.textContent = '';
        elementoError.style.display = 'none';
    }

    // Manejar la entrada de texto
    function manejarEntrada(textarea, errorElement) {
        textarea.addEventListener('input', function() {
            if (!regex.test(textarea.value)) {
                textarea.value = validarTexto(textarea.value);
                mostrarError(errorElement, 'Solo se permiten minúsculas y espacios.');
            } else {
                ocultarError(errorElement);
            }
        });
    }

    // Manejar entrada en el área de encriptación
    manejarEntrada(encriptarTextArea, encriptarError);

    // Copiar texto y mostrar mensaje
    async function copiarTexto(texto, mensajeElemento) {
        try {
            await navigator.clipboard.writeText(texto);
            mensajeElemento.textContent = 'Texto copiado';
            mensajeElemento.style.display = 'block';
            setTimeout(() => {
                mensajeElemento.style.display = 'none';
            }, 2000);
        } catch (err) {
            console.error('Error al copiar al portapapeles:', err);
            mensajeElemento.textContent = 'Error al copiar';
            mensajeElemento.style.display = 'block';
        }
    }

    // Funciones de encriptación y desencriptación
    function encriptarTexto(texto) {
        return btoa(texto); // Codifica el texto en Base64
    }
    
    function desencriptarTexto(texto) {
        return atob(texto); // Decodifica el texto 
    }

    // Encriptar el texto
    btnEncriptar.addEventListener('click', function() {
        const textoEncriptado = encriptarTexto(encriptarTextArea.value);
        desencriptarTextArea.value = textoEncriptado;
    });

    // Copiar el texto
    btnCopy.addEventListener('click', () => {
        copiarTexto(desencriptarTextArea.value, copyMessage);
    });

    // Desencriptar el texto
    btnDesencriptar.addEventListener('click', () => {
        const textoDesencriptado = desencriptarTexto(desencriptarTextArea.value);
        encriptarTextArea.value = textoDesencriptado;
        desencriptarTextArea.value = encriptarTextArea.value; 
    });

    // Limpiar las áreas de texto
    clearTextAreas.addEventListener('click', function() {
        desencriptarTextArea.value = '';
        encriptarTextArea.value = '';
    });
});
