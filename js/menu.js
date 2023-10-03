const menu =document.querySelector('.menu');
const boton=document.querySelector('.boton');
boton.addEventListener("click",function()
{
    boton.classList.toggle("change");
    validar ();
})
function validar ()
{
    if(boton.classList.contains("change"))
    {
        menu.style="right: 0"
    }
    else
    {
        menu.style="right: -100%"
    }
}
validar ();
