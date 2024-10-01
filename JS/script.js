function generarAtajo() {
    const cantidad = document.getElementById('cantidad').value;
    const clase = document.getElementById('clase').value;
    let contenido = document.getElementById('contenido').value;
    const textoAdicional = document.getElementById('texto_adicional').value;

    if (!cantidad || cantidad <= 0) {
        alert("La cantidad debe ser un número positivo.");
        return;
    }

    let atajo = `div*${cantidad}`;
    
    // Añadir la clase si está presente
    if (clase.trim() !== "") {
        atajo += `.${clase}`;
    }

    // Añadir el contenido si está presente
    if (contenido) {
        if (textoAdicional.trim() !== "") {
            contenido = contenido.replace("{Elemento}", `{${textoAdicional}}`);
        }
        atajo += `>${contenido}`;
    }

    const resultado = document.getElementById('resultado');
    resultado.textContent = `Atajo: ${atajo}`;

    // Mostrar el botón de copiar
    document.getElementById('copiarBtn').classList.remove('hidden');
}

function copiarAtajo() {
    const resultado = document.getElementById('resultado').textContent;
    const atajo = resultado.replace("Atajo: ", "");

    // Crear un elemento temporal para copiar el texto
    const tempInput = document.createElement('input');
    tempInput.value = atajo;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    alert("Atajo copiado al portapapeles!");
}
