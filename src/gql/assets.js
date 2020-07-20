import { gql } from "@apollo/client";

export const GET_ASSETS = gql`
    query PageAssets {
        assets(sort: [{ marketCapRank: ASC }], page: { limit: 25 }) {
            id
            assetName
            assetSymbol
            marketCap
            markets {
            marketSymbol
            baseSymbol
            exchangeSymbol
            ticker {
                lastPrice
                highPrice
                lowPrice
                percentChange
            }
            }
        }
    }
`;