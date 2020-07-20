interface ITicker {
    lastPrice: string;
    highPrice: string;
    lowPrice: string;
    percentChange: string;
}

interface IMarket {
    marketSymbol: string;
    baseSymbol: string;
    exchangeSymbol: string;
    ticker: ITicker[]
}

interface IAssetsState {
    id: string;
    assetName: string;
    assetSymbol: string;
    marketCap: number;
    markets: IMarket[];
    loading: boolean;
    error: boolean;
}