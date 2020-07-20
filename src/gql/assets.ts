import { gql } from "@apollo/client";

export const GET_ASSETS = gql`
    query PageAssets($pageSize: Int) {
        assets(sort: [{ marketCapRank: ASC }], page: { limit: $pageSize }) {
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