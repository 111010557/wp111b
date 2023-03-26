function vadd(a,b){
    let c = []
    for (let i=0; i<a.length; i++){
        c[i] = a[i]*b[i]
    }
    return c
}

let v1 = [8,2], v2=[0,1]
console.log('vadd(v1,v2)=',vadd(v1,v2))