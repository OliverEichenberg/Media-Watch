//React
import { View, Text, StyleSheet, useColorScheme, SafeAreaView, ScrollView } from 'react-native';
import { useEffect, useState } from "react";

//Fonts
import { Pacifico_400Regular, useFonts } from "@expo-google-fonts/pacifico";

//Components
import Heading from '../components/heading';
import Film from '../components/film';

const BrowseScreen = () => {
    //Hooks
    const colorScheme = useColorScheme();

    //States
    const [style, setStyle] = useState(styles.lightStyle)

    //Lifecycle
    useEffect(() => {
        colorScheme == "dark" ? setStyle(styles.darkStyle) : setStyle(styles.lightStyle)
    }, [colorScheme])

    let [fonts, error] = useFonts({
        Pacifico_400Regular,
    });

    if (!fonts && !error) {
        return null;
    }


    return (
        <View style={[styles.wrapper, style]}>
            <View style={styles.content}>
                <Film />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    content: {
        height: '85%',
    },
    lightStyle: {
        backgroundColor: '#f7fafd',
    },
    darkStyle: {
        backgroundColor: '#020508',
    }
});


export default BrowseScreen;