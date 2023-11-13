//React
import { View, Text, StyleSheet } from 'react-native';

export const Rectangle = () => {
    return (
        <View style={styles.wrapper}></View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: 360,
        height: 260,
        borderRadius: 25,
        backgroundColor: 'orange'
    }
})