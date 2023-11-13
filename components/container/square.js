//React
import { View, Text, StyleSheet } from 'react-native';

export const Square = (props) => {
    return (
        <View style={styles.wrapper}></View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: 170,
        height: 170,
        borderRadius: 25,
        backgroundColor: 'orange'
    }
})

