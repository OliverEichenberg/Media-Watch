import {View, Text, StyleSheet} from 'react-native';

const BrowseScreen = () => {
    return (
        <View style={styles.wrapper}>
            <Text>Browse Screen</Text>
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


export default BrowseScreen;