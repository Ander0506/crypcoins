const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
})

const FormatValue = new Intl.NumberFormat()

// Función para la conversión de precio a dolar
export default function convertCurrencyUSD(price: number): string {
    return USDollar.format(price)
}

// Función para dar formato a números de valor
export function formatValue(num: number): string {
    return FormatValue.format(num)
}