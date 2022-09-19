
   
    function go(currentStep, nextStep)
    {

        var firstDiv = document.querySelector('.first-step');
        var secondDiv = document.querySelector('.second-step');
        var finalDiv = document.querySelector('.final-step');

        let dNone, dBlock;
        if (currentStep == 1)
        {
            dNone = document.querySelector('.first-step');
        }
        else if(currentStep == 2)
        {
            dNone = secondDiv;
        }
        else
        {
            dNone = finalDiv;
        }
        dNone.style.display = 'none';

        
        if (nextStep == 1)
        {
            dBlock = firstDiv;
        }
        else if(nextStep == 2)
        {
            dBlock = secondDiv;
        }
        else
        {
            dBlock = finalDiv;
        }
        dBlock.style.display = 'block';
    }

    function validate()
    {
        const peso   = document.getElementById('peso');
        const altura = document.getElementById('altura');
        peso.style.border   = 'none';
        altura.style.border = 'none';
        if(!peso.value || !altura.value)
        {
           if(!peso.value && !altura.value)
           {
                peso.style.border   = '1px solid red';
                altura.style.border = '1px solid red';
           }
           else if(!peso.value)
           {
                peso.style.border = '1px solid red';
           }
           else
           {
                altura.style.border = '1px solid red';
           }
        }
        else  
        {
            let imc = peso.value/(altura.value * altura.value);
            var result = document.getElementById('resultado');
                      
            if(imc < 18.5)
            {
                console.log('Magreza | Obesidade: 0');
                result.style.color = 'yellow';
                result.innerHTML = 'Magreza | Obesidade: 0';
            }
            else if(imc >= 18.5 && imc < 25)
            {
                console.log('Normal | Obesidade: 0');
                result.style.color = 'green';
                result.innerHTML = 'Normal | Obesidade: 0';
            }
            else if(imc >= 25 && imc < 30)
            {
                conslole.log('Sobrepeso | Obesidade: 1');
                result.style.color = 'yellow';
                result.innerHTML = 'Sobrepeso | Obesidade: 1';
            }
            else if(imc >= 30 && imc < 40)
            {
                cosole.log('Obesidade | Obesidade: 2');
                result.style.color = 'red';
                result.innerHTML = 'Obesidade | Obesidade: 2';
            }
            else 
            {
                console.log('Obesidade Grave | Obesidade 3');
                result.style.color = 'black';
                result.innerHTML = 'Obesidade Grave | Obesidade: 3';
            }
            go(2,3);
        }
            
    }

