# Encriptador de Texto🔐

Este proyecto es una aplicación web para encriptar y desencriptar texto utilizando JavaScript. La herramienta convierte texto a una cadena codificada en Base64 y permite revertir esta codificación. También incluye funciones para copiar el texto al portapapeles, validar la entrada y limpiar las áreas de texto.

## Funcionalidades Principales 🏹 

### Encriptación de Texto
- **Introducción de Texto**: Permite a los usuarios introducir texto en minúsculas y espacios en un área de texto.
- **Encriptar**: Al hacer clic en el botón "¡Encriptar!", el texto ingresado se convierte en una cadena codificada en Base64 y se muestra en otro área de texto.

### Desencriptación de Texto
- **Desencriptar**: El área de texto que muestra el texto encriptado puede ser utilizado para revertir la encriptación. Al hacer clic en el botón "¡Desencriptar!", la cadena encriptada se decodifica de vuelta al texto original y se muestra en el área de texto de entrada.

### Copiar al Portapapeles
- **Copiar**: Los usuarios pueden copiar el texto desencriptado al portapapeles mediante el botón "Copiar".
- **Mensaje de Copia**: Se muestra un mensaje temporal indicando el éxito o error en la operación de copia.

### Validación de Entrada
- **Entrada Permitida**: Solo se permite la entrada de letras minúsculas y espacios en el área de encriptación.
- **Mensaje de Error**: Si se introduce un carácter no permitido, se elimina automáticamente y se muestra un mensaje de error.

### Limpieza de Áreas de Texto
- **Limpiar**: Un botón de "limpiar" borra el contenido de ambas áreas de texto, facilitando la limpieza rápida del contenido.

## Diseño e Interfaz

- **HTML**: La estructura está definida con elementos `<textarea>` para la entrada y salida de texto, botones para ejecutar acciones y mensajes de error para la validación de la entrada.
- **CSS**: La apariencia visual se gestiona a través del archivo `style.css`, que define el diseño y estilo de los elementos de la página.
- **JavaScript**: La lógica para encriptar, desencriptar, validar texto, copiar al portapapeles y limpiar las áreas de texto se maneja en el archivo `script.js`.

## Detalles Técnicos

- **Encriptación**: Se utiliza la codificación en Base64 para encriptar el texto.
- **Desencriptación**: Se decodifica el texto en Base64 para revertir la encriptación.
- **Validación de Entrada**: Se asegura que solo letras minúsculas y espacios sean permitidos mediante expresiones regulares.
