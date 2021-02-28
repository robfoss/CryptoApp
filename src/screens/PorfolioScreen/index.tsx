import React from 'react'
import { View, Text, Image } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import PortfolioCoin from '../../components/PortfolioCoin'
import styles from './styles'
const image = require('../../../assets/images/Saly-10.png')

const portfolioCoins = [
    {
        id: '1',
        name: 'Virtual Dollars',
        image: 'abc',
        symbol: 'USD',
        amount: 69.420,
        valueUSD: 59420,
    },
    {
        id: '2',
        name: 'Bitcoin',
        image: 'abc',
        symbol: 'USD',
        amount: 1.12,
        valueUSD: 69420,
    },
    {
        id: '3',
        name: 'Etherium',
        image: 'abc',
        symbol: 'ETH',
        amount: 1.12,
        valueUSD: 30120,
    },

]

const PortfolioScreen = () => {
    return (
        <View style={styles.root}>
            <Image style={styles.image} source={image} />
            <View style={styles.balanceContainer}>
                <Text style={styles.label}>Portfolio Balance</Text>
                <Text style={styles.balance}>$69.420</Text>
            </View>
            <FlatList
                style={{ width: '100%' }}
                data={portfolioCoins}
                renderItem={({ item }) => <PortfolioCoin portfolioCoin={item} />}
            />
        </View>
    )
}

export default PortfolioScreen
