// Función para devolver clase css dependiendo del número
export default function getClassNumber(number: string | number): string {
    if(Number(number) > 0){
        return "text-green"
    }
    return "text-red"
}