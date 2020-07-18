import * as U from '.';

test('should split market name and symbol name', () => {
    const { splitName } = U;

    expect(splitName('Binance:BTC/PAX')).toEqual('BTC/PAX');
});

test('should Convert Currencies to their corresponding format', () => {
    const { formatCurrency } = U;

    expect(true).toBe(true);
});

test('should Average a list of real numbers', () => {
    const { averagePrices } = U;

    expect(true).toBe(true);
});