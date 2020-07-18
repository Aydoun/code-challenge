export const splitName = (name: string): string => name.split(':')[1] || '';

export const formatCurrency = (amount: number, format: string = 'en-US'): string => {
    return new Intl.NumberFormat(format,
        { style: 'currency', currency: 'USD' }
    ).format(amount);
}

export const averagePrices = (prices: number[]): number | string => {
    if (prices.length === 0) return '';

    const sum = prices.reduce((cur, acc) => cur + acc, 0);
    return parseFloat((sum / prices.length).toFixed(2));
}
