//React
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import { useEffect, useState } from "react";

const BrowseScreen = () => {
    //Hooks
    const colorScheme = useColorScheme();

    //States
    const [style, setStyle] = useState(styles.lightStyle)

    //Lifecycle
    useEffect(() => {
        colorScheme == "dark" ? setStyle(styles.darkStyle) : setStyle(styles.lightStyle)
    }, [colorScheme])

    return (
        <View style={[styles.wrapper, style]}>
            <Text>Browse Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    lightStyle: {
        backgroundColor: '#f7fafd',
    },
    darkStyle: {
        backgroundColor: '#020508',
    }
});


export default BrowseScreen;