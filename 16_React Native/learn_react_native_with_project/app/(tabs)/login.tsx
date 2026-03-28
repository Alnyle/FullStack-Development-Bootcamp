import { View, Text, StyleSheet } from "react-native"

export default function LoginScreen() {


    return (
        <View style={styles.View}>
            {" "}
            <Text style={styles.text}>Hello this login screen</Text>
        </View>
    )
}

// StyleSheet is an object where can put all your screen style 
// and even re-use it
const styles = StyleSheet.create({

    View: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8px',
    },

    text: {
        fontSize: 16,
    }
})