export const splitName = (name: string): string => name.split(':')[1] || '';

export const formatCurrency = (amount: number | string, format: string = 'currency'): string => {
    if (!amount) return '';

    return new Intl.NumberFormat('en-US',
        { style: format, currency: 'USD', maximumSignificantDigits: 3 }
    ).format(Number(amount));
}

export const averagePrices = (prices: number[]): number | string => {
    if (prices.length === 0) return '';

    const sum = prices.reduce((cur, acc) => cur + acc, 0);
    const total = sum / prices.length;

    if (total < 0.001) return total;
    return parseFloat(total.toFixed(2));
}
