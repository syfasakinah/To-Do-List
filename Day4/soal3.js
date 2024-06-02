//BMI

function calculateBMI (weight, height){
    height = height / 100;
    const BMI = weight / (height * height)
    console.log('nilai:',BMI);

    if(BMI < 18,5){
        return 'Less weight'
    }else if(BMI >= 18,5 && BMI <= 24,9){
        return 'ideal'
    }else if(BMI >= 25  && BMI <= 29,9){
        return 'Overweight'
    }else if(BMI >= 30 && BMI <= 39,9){
        return 'Very overweight'
    }else if(BMI >= 39,9){
        return 'obesity'
    }
}
console.log(calculateBMI(60, 160))
