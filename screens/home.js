import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Button } from 'react-native';


const HomeScreen = ({ navigation }) => {
    return(
        <View style={styles.wrapper}>
            <Text>Home Page</Text>
            <Button title={"To Login"} onPress={() => navigation.navigate("Login")}/>
            <StatusBar style="auto" />
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


export default HomeScreen;