import {PriceType} from '../types/products'
export function useHighestPrice(prices: PriceType[] | number){
    if(prices instanceof Array){
        const price = Math.max(...prices.map(item => item.price))
        return {
            price
        }
    }else{
        const price = prices
        return {
            price
        }
    }
}