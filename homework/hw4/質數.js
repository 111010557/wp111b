function isPrime(num) 
{
    if (num <= 1) 
    {
      return false;
    }
    if (num === 2) 
    {
      return true;
    }
    if (num % 2 === 0) 
    {
      return false;
    }
    return true;
  }


  {
  const prompt=require("prompt-sync")({sigint:true}); //提示同步 消除錯誤
  const num = parseInt(prompt("Enter the number:"));

  if (isPrime(num)) {
    console.log(`${num} 是質數。`);
  } else {
    console.log(`${num} 不是質數。`); //${變數}:字符串插值 效果跟+一樣
  }
}
/*老師寫的
function isPrime(n) 
{

    for (let i=2;i<n;i++)
    {
        if (n%i == 0) return false;
    }
    return true
}
console.log('isPrime(7)=',isPrime(7))
console.log('isPrime(10)=',isPrime(10))
console.log('isPrime(31)=',isPrime(31))
console.log('isPrime(80)=',isPrime(80)) */