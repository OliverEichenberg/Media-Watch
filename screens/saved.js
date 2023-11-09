import {View, Text, StyleSheet} from 'react-native';

const SavedScreen = () => {
    return(
        <View style={styles.wrapper}>
            <Text>Saved Screen</Text>
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


export default SavedScreen;