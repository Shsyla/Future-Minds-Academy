const outputResults = document.querySelector('.input');
let equalResults = false;
outputResults.innerHTML = '';
let fullOutput = '';
let lastChar = '';
            //  0    1    2    3
let allChar = ['-', '+', '/', ','];

function calculate(n){
    if(n == 'done'){
        outputResults.innerHTML += 
        " = <span>" + eval(outputResults.innerHTML) + 
        "</span>";
        equalResults = true;
    }
    else{ 
        if(equalResults){
            outputResults.innerHTML = '';
            equalResults = false;
        }

        for(let i=0; i<allChar.length; i++)
        {
            if(lastChar === allChar[i] && n === allChar[i]){
                return;
            }
        }
        
        
        outputResults.innerHTML += n;
    }

    fullOutput = outputResults.innerHTML;
    lastChar = fullOutput.slice(-1);
}
