//React
import { StyleSheet, View, Text, useColorScheme } from 'react-native';
import {useEffect, useState} from "react";

//Components
import Container from "../components/container";

const DashboardScreen = () => {
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
            <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignContent: 'space-around', justifyContent: 'space-around' }}>
                <Container style={style} direction='bottom-right' />
                <Container style={style} direction='bottom-left' />
                <Container style={style} direction='top-right' />
                <Container style={style} direction='top-left' />
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
