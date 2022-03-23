export function formatNumber(nbr:number):string{
    let n = nbr;
    const arrayOfNumbers: number[] = []  

    while(n/1000>1){
        arrayOfNumbers.unshift(n%1000);
        n = Math.floor(n/1000) ;
    }
    
    arrayOfNumbers.unshift(n)
    return arrayOfNumbers.join(',')
}