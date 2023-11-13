//React
import { View, Text, StyleSheet } from 'react-native';

const Film = () => {
    return(
        <View style={styles.wrapper}>
            <View style={{ width: '100%', height: '100%', position: 'relative' }}>
                <View style={styles.footer}>
                    <View style={{ backgroundColor: 'white', width: 50, borderRadius: 25}}><Text style={{ color: 'orange' }}>Testing</Text></View>
                </View>
            </View>
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
        backgroundColor: 'orange'
    },
    footer: {
        flex: 1,
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: 15,
        height: '20%',
        width: '100%',
        backgroundColor: 'green'
    }
});

export default Film;