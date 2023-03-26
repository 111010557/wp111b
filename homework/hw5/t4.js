function mul(a,b){
    var e=[[0,0,0],[0,0,0],[0,0,0]];
    for(var i in a){
        for(var j in a[i]){
            for(var k in a){
                e[k][j]+= a[k][i]*b[i][j];
            }       
       }
   }    
    console.log(e);
}
mul([[1,2,3],[4,5,6],[7,8,9]], [[1,2,3],[4,5,6],[7,8,9]]);