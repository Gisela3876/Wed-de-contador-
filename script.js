let count = 0;

function increment() {
    count++;
    document.getElementById("counter").textContent = count;
}

function decrement() {
    count--;
    document.getElementById("counter").textContent = count;
}

function updateCounter() {
    document.getElementById("counter").textContent = count;
    updateHistory();

    function updateCounter() {
        const counterElement = document.getElementById("counter");
        counterElement.textContent = count;
    
        // Agregar animación
        counterElement.classList.add("counter-animation");
        setTimeout(() => counterElement.classList.remove("counter-animation"), 200);
    
        // Cambiar el color
        if (count > 0) {
            counterElement.style.color = "green";
        } else if (count < 0) {
            counterElement.style.color = "red";
        } else {
            counterElement.style.color = "black";
        }
    
        updateHistory();
    }
    
}

function increment() {
    count++;
    updateCounter();
}

function decrement() {
    count--;
    updateCounter();
}

function resetCounter() {
    count = 0;
    updateCounter();
    document.getElementById("history").innerHTML = ''; // Limpiar historial
}

function updateHistory() {
    const history = document.getElementById("history");
    const listItem = document.createElement("li");
    listItem.textContent = `Contador: ${count}`;
    history.appendChild(listItem);
}

let maxLimit = 10;
let minLimit = 0;

function increment() {
    if (count < maxLimit) {
        count++;
        updateCounter();
    } else {
        alert("¡Has alcanzado el límite máximo!");
    }
}

function decrement() {
    if (count > minLimit) {
        count--;
        updateCounter();
    } else {
        alert("¡Has alcanzado el límite mínimo!");
    }
}

function updateCounter() {
    const counterElement = document.getElementById("counter");
    counterElement.textContent = count;

    // Cambiar el color según el valor del contador
    if (count > 0) {
        counterElement.style.color = "green";
    } else if (count < 0) {
        counterElement.style.color = "red";
    } else {
        counterElement.style.color = "black";
    }

    updateHistory();
}
