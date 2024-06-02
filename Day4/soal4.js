// remove odd number

function RemoveOddNumbers (arrNumbers){
    const result = arrNumbers.filter(number => number % 2 === 0)

    return result
}
console.log(RemoveOddNumbers([1,2,3,4,5,6,7,8,9,10])) 