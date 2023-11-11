import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, useColorScheme } from 'react-native';


//Renderers
const renderLight = () => {

}

const DashboardScreen = () => {
    //Color Scheme
    const colorScheme = useColorScheme();

    const pageScheme = colorScheme === 'light' ? styles.lightPage : styles.darkPage;


    return (
        <View style={[styles.wrapper, pageScheme]}>
            <Text>Testing2</Text>
            <StatusBar style={"auto"} />
        </View>
    );
}


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lightPage: {
        backgroundColor: '#f7fafd',
    },
    darkPage: {
        // backgroundColor: '#020508',
        backgroundColor: 'white',
    }
});

export default DashboardScreen;
