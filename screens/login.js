import {StatusBar} from "expo-status-bar";
import {StyleSheet, View, Text, Button} from 'react-native';

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.wrapper}>
            <Text>Testing</Text>
            <Button title={"To App"} onPress={() => navigation.navigate("App")}/>
            <StatusBar style={"auto"} />
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
});


export default LoginScreen;