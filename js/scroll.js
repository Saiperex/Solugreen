const sectores = document.querySelectorAll('.sec');
let indiceActual = 0;
let valorTop = 100;

const desplazarSectores = (deltaY) => {
    if (window.innerWidth > 500) {
        if (deltaY > 0 && indiceActual < sectores.length) {
            if (valorTop === 0) {
                indiceActual++;
                valorTop = 100;
            }
            valorTop -= 10;
        } else if (deltaY < 0 && indiceActual >= 0) {
            if (valorTop === 100) {
                indiceActual--;
                valorTop = 0;
            }
            valorTop += 10;
        }
        sectores[indiceActual].style.top = valorTop + 'vh';
        console.log("Moviendo el sec " + indiceActual + " Y el valor de top es " + valorTop);
    }
};

document.addEventListener('wheel', (event) => {
    const deltaY = event.deltaY;
    desplazarSectores(deltaY);
});