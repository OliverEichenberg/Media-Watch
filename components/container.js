//React
import { View, Text, StyleSheet } from 'react-native'
import { Children } from "react";


const Container = (props) => {

    switch(props.type) {
        case('rectangle'):
            return(<View style={[styles.rectangle, props.theme]}>
                {props.children}
            </View>)
        case('square'):
            return(<View style={[styles.square, props.theme]}>
                {props.children}
            </View>)
    }
}

const styles = StyleSheet.create({
    rectangle: {
        width: 360,
        height: 260,
        borderRadius: 25,
        padding: 25,
        backgroundColor: '#1177c0'
    },
    square: {
        width: 170,
        height: 170,
        borderRadius: 25,
        padding: 15,
        backgroundColor: '#1177c0'
    }
})

export default Container;