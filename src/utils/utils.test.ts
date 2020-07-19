import * as U from '.';

test('should split market name and symbol name', () => {
    const { splitName } = U;

    expect(splitName('')).toEqual('');
    expect(splitName('some string')).toEqual('');

    expect(splitName('Binance:BTC/PAX')).toEqual('BTC/PAX');
    expect(splitName('CoinbasePro:BTC/USDC')).toEqual('BTC/USDC');
    expect(splitName('Kraken:BTC/CAD  LIDE')).toEqual('BTC/CAD  LIDE');
    expect(splitName(':BTC/CAD')).toEqual('BTC/CAD');
    expect(splitName('Kraken:')).toEqual('');
});

test('should Convert Currencies to their corresponding format', () => {
    const { formatCurrency } = U;

    expect(formatCurrency(9121.14000000)).toBe('$9,121.14');
    expect(formatCurrency(7979.43993853)).toBe('$7,979.44');
    expect(formatCurrency(9125.17000000)).toBe('$9,125.17');
    expect(formatCurrency(parseFloat('9125.17000000'))).toBe('$9,125.17');
});

test('should Average a list of real numbers', () => {
    const { averagePrices } = U;
    const numbers = [9262.50000000, 8046.30000000, 9172.64100000, 7361.90000000];
    const newNumbers = [12419.50000000, 9124.19200022, 203.50848452, 232.24000000];

    expect(averagePrices(numbers)).toBe(8460.84);
    expect(averagePrices(newNumbers)).toBe(5494.86);
});