// LOOPING

while(condition){
    action
}

do{
    action
}while(condition)


let start = 1
while(start <= 10){
    console.log(start) // TRUE; TRUE; TRUE
    start++
}


let startCount = 1 // 1 ---> 11
do{
    console.log(startCount) // 1
    startCount+=10
}while(startCount<3) // false