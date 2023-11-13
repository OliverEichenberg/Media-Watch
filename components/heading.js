import { View, Text, StyleSheet } from 'react-native';
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';

const Heading = (props) => {
    let [fonts, error] = useFonts({
        Pacifico_400Regular,
    });

    if (!fonts && !error) {
        return null;
    }


    return (
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30}}>
            <Text style={styles.text}>{props.title}</Text>
            <Text style={styles.text}>{props?.secondary}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100vw',
        height: '10%',
    },
    text: {
        color: '#3a8ecb',
        fontFamily: 'Pacifico_400Regular',
        fontSize: 30
    }
})

export default Heading;