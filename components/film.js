//React
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

import image from '../public/images/TestBanner.jpg'

const Film = () => {
    return(
        <View style={styles.wrapper}>
            <ImageBackground source={image} style={styles.image}>
                <View style={{ width: '100%', height: '100%', position: 'relative' }}>
                    <View style={styles.heading}>
                        <Text style={{ color: '#3a8ebc' }}>Testing</Text>
                    </View>
                    <View style={styles.footer}>
                        <View style={styles.tag}><Text style={{ color: 'white' }}>Testing</Text></View>
                    </View>
                </View>
            </ImageBackground>
        </View>
        )
    }

const styles = StyleSheet.create({
    wrapper: {
        flex: 0,
        flexDirection: 'column',
        overflow: 'hidden',
        height: 140,
        width: 225,
        borderRadius: 25,
        backgroundColor: 'black',
    },
    footer: {
        flex: 1,
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: 15,
        height: '20%',
        width: '100%',
        backgroundColor: '#1e2731'
    },
    tag: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3a8ebc',
        width: 60,
        height: 18,
        borderRadius: 25,
    },
    image: {
        margin: 10,
        overflow: 'hidden',
        borderRadius: 25
    },
    heading: {

    }
});

export default Film;