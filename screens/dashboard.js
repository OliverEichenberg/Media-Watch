import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';

import { GestureDetector, Gesture } from 'react-native-gesture-handler';

const native = Gesture.Native();


const DashboardScreen = () => {
    return (
        <GestureDetector gesture={Gesture.Native()}>
            <View style={styles.wrapper}>
                <Text>Testing2</Text>
                <StatusBar style={"auto"} />
            </View>
        </GestureDetector>
    );
}


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default DashboardScreen;
