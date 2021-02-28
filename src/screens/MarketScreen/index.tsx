import React from 'react'
import { View, Text, Image } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import MarketCoin from '../../components/MarketCoin'
import styles from './styles'
const image = require('../../../assets/images/Saly-17.png')

const portfolioCoins = [
    {
        id: '1',
        name: 'Virtual Dollars',
        image: 'abc',
        symbol: 'USD',
        valueChange24H: 69.420,
        valueUSD: 59420,
    },
    {
        id: '2',
        name: 'Bitcoin',
        image: 'abc',
        symbol: 'USD',
        valueChange24H: 8.5,
        valueUSD: 69420,
    },
    {
        id: '3',
        name: 'Etherium',
        image: 'abc',
        symbol: 'ETH',
        valueChange24H: -11.76,
        valueUSD: 30120,
    },
    {
        id: '3',
        name: 'Etherium',
        image: 'abc',
        symbol: 'ETH',
        valueChange24H: 4.64,
        valueUSD: 30120,
    },
    {
        id: '3',
        name: 'Etherium',
        image: 'abc',
        symbol: 'ETH',
        valueChange24H: -1.12,
        valueUSD: 30120,
    },
    {
        id: '3',
        name: 'Etherium',
        image: 'abc',
        symbol: 'ETH',
        valueChange24H: -3.62,
        valueUSD: 30120,
    },
    {
        id: '3',
        name: 'Etherium',
        image: 'abc',
        symbol: 'ETH',
        valueChange24H: 7.22,
        valueUSD: 30120,
    },
    {
        id: '3',
        name: 'Etherium',
        image: 'abc',
        symbol: 'ETH',
        valueChange24H: -6.92,
        valueUSD: 30120,
    },
    {
        id: '3',
        name: 'Etherium',
        image: 'abc',
        symbol: 'ETH',
        valueChange24H: 1.12,
        valueUSD: 30120,
    },
    {
        id: '3',
        name: 'Etherium',
        image: 'abc',
        symbol: 'ETH',
        valueChange24H: 3.54,
        valueUSD: 30120,
    },
    {
        id: '3',
        name: 'Etherium',
        image: 'abc',
        symbol: 'ETH',
        valueChange24H: -1.12,
        valueUSD: 30120,
    },


]

const PortfolioScreen = () => {
    return (
        <View style={styles.root}>

            <FlatList
                style={{ width: '100%' }}
                data={portfolioCoins}
                renderItem={({ item }) => <MarketCoin marketCoin={item} />}
                showsVerticalScrollIndicator={false}
                ListHeaderComponentStyle={{ alignItems: 'center' }}
                ListHeaderComponent={() => (
                    <>
                        <Image style={styles.image} source={image} />
                        <Text style={styles.label}>Market</Text>
                    </>
                )}
            />
        </View>
    )
}

export default PortfolioScreen

