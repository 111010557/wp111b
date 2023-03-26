function fibonacci(n)
{
    if(n<=1)
    {
        return n
    }
    else
    {
        return fibonacci(n-1)+fibonacci(n-2)
    }
}

console.log('fibonacci(0)=',fibonacci(0))
console.log('fibonacci(1)=',fibonacci(1))
console.log('fibonacci(4)=',fibonacci(4))
console.log('fibonacci(12)=',fibonacci(12))
console.log('fibonacci(20)=',fibonacci(20))