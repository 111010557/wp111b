function madd(a,b){
    let r =[]
    for (let i=0; i<a.length; i++){
        r[i] = []
        for (let j=0; j<a[0].length; j++){
            r[i][j] = a[i][j]+b[i][j]
        }
    }
    return r
}
let a =[[4,2],[8,4]]
let b =[[0,1],[2,1]]
let c = madd(a,b)
console.log(c)