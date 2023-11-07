const listLetterValue = [
    '', 'K', 'M', 'MM', 'B', 'MB'
]

// Función para simplificar valor y cantidad de números
export default function shorValue(value: number, decimal: number = 0){
    const sizeNumber: number = String(Math.trunc(value)).length
    const pow: number = Math.pow(10, decimal)
    const modulNumber: number = sizeNumber%3 === 0 ? ((sizeNumber-1)-(sizeNumber-1)%3)  : (sizeNumber - sizeNumber%3)
    const resultFixed = (value * pow / Math.pow(10,modulNumber) / pow).toFixed((modulNumber/3) + 1)
    const listResult = String(resultFixed).split('.')
    let result: number = Number(resultFixed)

    if( listResult[1] && Number(listResult[1]) === 0){
        result = Math.trunc(result)
    }
    
    return  result + ' ' + listLetterValue[modulNumber/3]

}