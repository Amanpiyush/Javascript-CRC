const form = document.querySelector('form');

form.addEventListener('submit',(event) => {
    event.preventDefault();
    //preventDefult : stop Default Action
    //DefaultPrevented = Return only true or false

    const Height = parseInt(document.querySelector('#height').value);
    const Weight = parseInt(document.querySelector('#weight').value);
    const Result = document.querySelector('#results')
    //innerHTML = Add Value
    // if(Height === '' || Height < 0 || isNaN(Height)){
    //     Result.innerHTML = `This is not a valid ${Height}`
    // }
    // else if(Weight === '' || Weight < 0 || isNaN(Weight)){
    //     Result.innerHTML = `This is not a valid ${Weight}`
    // }else{
    //     const BMI = (Weight / ((Height*Height) /10000)).toFixed(2);
    //     Result.innerHTML = `${BMI}`

    //     if(BMI < 18.6){
    //         Result.innerHTML = `Your BMI is ${BMI} so, you are UnderWeight`
    //     }
    //     else if(BMI > 18.6 && BMI <= 24.9){
    //         Result.innerHTML = `Your BMI is ${BMI} so, your Weight is Normal`
    //     }
    //     else{
    //         Result.innerHTML = `Your BMI is ${BMI} so, you are OverWeight`
    //     }
    // }


    if(isNaN(Height)|| Height <= 0){
        Result.innerHTML = 'Enter Valid Height';
    }
    else if(isNaN(Weight)||Weight <= 0 ){
        Result.innerHTML = 'Enter Valid Weight';
    }
    else{
        const BMI = ( Weight / ((Height/100) ** 2)).toFixed(2);
        let message = '';

        if(BMI < 18.6 ){
            message = `You BMI is ${BMI} & You are Underweight`;
        }else if (BMI >= 18.6 && BMI <= 24.9 ){
            message = `You BMI is ${BMI} & You are Normal Weight`;
        }else{
            message = `You BMI is ${BMI} & You are Overweight`;
        }
        Result.innerHTML = message;
    }
    
});