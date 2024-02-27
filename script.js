
const boton= document.getElementById("calcular");
const peso = document.getElementById('peso');
const fluResultado = document.getElementById('flu');
const manResultado = document.getElementById('man');


boton.addEventListener("click",()=>{
    const peso = document.getElementById('peso').value;
    console.log("Peso del formulario",peso);
    if (peso > 0){
        document.getElementById("error").style.display = "none";
        let flujo = calcFlujo(peso);
        const mmMedio = flujo * 1.5;
        flujo = Math.round(flujo);
        // Mostrar los resultados 
        fluResultado.innerHTML = `Flujo : ${flujo.toFixed(2)} cc/h`;
        manResultado.innerHTML = `m+m/2: ${mmMedio.toFixed(2)} cc/h`;

           // Mostrar los elementos de resultado
        fluResultado.style.display = 'block';
        manResultado.style.display = 'block';
        console.log(flujo)
    }else{
        document.getElementById("error").style.display = "block";
        
    }

            
    function calcFlujo(peso) {
        let flujo = 0;
        if (peso <= 10) {
            flujo = peso * 100 / 24;
        } else if (peso <= 20) {
            flujo = (1000 + ((peso - 10) * 50)) / 24;
        } else {
            flujo = (1500 + ((peso - 20) * 20)) / 24;
        }
        return flujo;
    }
        
});


