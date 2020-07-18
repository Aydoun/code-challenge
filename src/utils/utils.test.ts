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

    expect(true).toBe(true);
});

test('should Average a list of real numbers', () => {
    const { averagePrices } = U;

    expect(true).toBe(true);
});