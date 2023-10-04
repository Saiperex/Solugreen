const sectores = document.querySelectorAll('.sec');
    let indiceActual = 0;
    let valorTop = 100;

    var desplazarSectores = (deltaY) => 
    {
        if (deltaY > 0 && indiceActual < sectores.length) 
        {
            
            if(valorTop==0)
            {
                indiceActual=indiceActual+1;
                valorTop=100;
            }
            valorTop=valorTop-10;
        } else 
        if (deltaY < 0 && indiceActual >= 0) 
        {
            
            if(valorTop==100)
            {
                indiceActual=indiceActual-1;
                valorTop=0;
            }
            valorTop=valorTop+10;
        }
        sectores[indiceActual].style.top = valorTop+'vh';
        console.log("moviendo el sec "+indiceActual+" Y el valor de top es"+valorTop)
    };

    document.addEventListener('wheel', (event) => {
        const deltaY = event.deltaY;
        desplazarSectores(deltaY);
    });
