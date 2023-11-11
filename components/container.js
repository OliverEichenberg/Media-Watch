//React
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

//Helpers
const gradientDirection = (dir) => {
    switch(dir) {
        case 'left':
            return [0, 0.5]
        case 'right':
            return [1, 0.5]
        case 'top':
            return [0.5, 1]
        case 'bottom':
            return [0.5, 0]
        case 'top-left':
            return [1, 1]
        case 'top-right':
            return [0.5, 0.5]
        case 'bottom-left':
            return [0, 0.5]
        case 'bottom-right':
            return[1, 0.5]
    }
}


const Container = (props) => {
    return (
        <LinearGradient
            style={[styles.wrapper, props.style.content]}
            colors={[styles.lightStyle.accent, styles.lightStyle.primary]}
            end={gradientDirection(props.direction)}
        >
                <Text>Testing</Text>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: '45%',
        height: '40%',
        borderRadius: '25px',
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
        primary: '#1177c0',
        secondary: '#123044',
        accent: '#3a8ecb',

        content: {
            backgroundColor: 'orange'
        },
    }
})

export default Container;
