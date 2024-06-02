// create function triangle

// parameter : height - triangle height

function GenerateTriangle(n){
    let triangle = ''
    for(let i=1; i<=n; i++){
        for(let j=1; j<=i; j++){
            triangle += '*'
         }
        triangle += '\n'
    }
    return triangle
}
console.log(GenerateTriangle(4))

// * * * * *
// * * * * *
// * * * * *
function GenerateBox(w, h){
    let box = ''
    for (let i=1; i<=h; i++){
        for(let j=1; j<=w; j++){
            box += `*`
        }
        box += '\n'
    }
    return box
}

console.log(GenerateBox(3, 4))
