import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
    },
    balanceContainer: {
        width: '100%',
        marginVertical: 20,
    },
    balance: {
        fontSize: 35,
        fontWeight: 'bold',
    },
    image: {
        height: 200,
        resizeMode: 'contain',

    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#777777',
    },

})

export default styles