function solution(n)
{
    let sum = 0
    while(n > 0){
        const a = n % 10;
        sum += a;
        n = Math.floor(n / 10)
    }
    return sum;
}