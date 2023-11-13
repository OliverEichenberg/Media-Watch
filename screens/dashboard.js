//React
import { StyleSheet, View, Text, useColorScheme } from 'react-native';
import {useEffect, useState} from "react";

//Fonts
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';

//Components
import Heading from '../components/heading';
import Container from "../components/container/container";

const DashboardScreen = () => {
    //Hooks
    const colorScheme = useColorScheme();

    //States
    const [theme, setTheme] = useState(styles.lightStyle)

    //Lifecycle
    useEffect(() => {
        colorScheme == "dark" ? setTheme(styles.darkStyle) : setTheme(styles.lightStyle)
    }, [colorScheme])

    let [fonts, error] = useFonts({
        Pacifico_400Regular,
    });

    if (!fonts && !error) {
        return null;
    }


    return (
        <View style={[styles.wrapper, theme]}>
            <View style={styles.content}>
                <Heading title={'Welcome Back!'}/>
                <View style={{ flex: 2, flexDirection: 'row', flexWrap: 'wrap', gap: 20, justifyContent: 'center' }}>
                    <Container type={'rectangle'}></Container>
                    <Container type={'square'}></Container>
                    <Container type={'square'}></Container>
                    <Container type={'square'}></Container>
                    <Container type={'square'}></Container>
                </View>
            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    content: {
        height: '85%',
    },
    lightStyle: {
        backgroundColor: '#f7fafd',
        primary: '#3489c5',
        secondary: '#bbd9ed',
        accent: '#3fa5ee',

        content: {
            backgroundColor: 'orange'
        },
    },
    darkStyle: {
        backgroundColor: '#020508',
        primary: '#3a8ecb',
        secondary: '#123044',
        accent: '#1177c0',

        content: {
            backgroundColor: 'orange'
        },
    }
});

export default DashboardScreen;
