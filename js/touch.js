let touchStartY = null;

    var desplazarSectores = (deltaY) => 
    {
        if (deltaY > 0 && indiceActual < sectores.length) 
        {
            if(valorTop === 0)
            {
                indiceActual++;
                valorTop = 100;
            }
            valorTop -= 10;
        } else 
        if (deltaY < 0 && indiceActual >= 0) 
        {
            if(valorTop === 100)
            {
                indiceActual--;
                valorTop = 0;
            }
            valorTop += 10;
        }
        sectores[indiceActual].style.top = valorTop + 'vh';
        console.log("moviendo el sec " + indiceActual + " Y el valor de top es " + valorTop)
    };
    document.addEventListener('touchstart', (event) => {
        touchStartY = event.touches[0].clientY;
    });

    document.addEventListener('touchmove', (event) => {
        if (touchStartY !== null) {
            const touchEndY = event.touches[0].clientY;
            const deltaY = touchEndY - touchStartY;
            touchStartY = touchEndY;
            desplazarSectores(deltaY);
        }
    });

    document.addEventListener('touchend', () => {
        touchStartY = null;
    });