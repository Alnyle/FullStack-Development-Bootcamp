import { useAuth } from "@/lib/auth-context";
import { useRouter } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, View, StyleSheet } from "react-native";
import { Button, Text, TextInput, useTheme } from 'react-native-paper'
export default function AuthScreen() {

    const router = useRouter()

    const [isSignUp, setIsSignUp] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    
    const theme = useTheme()

    // import signUp and sign in functions to handle sign up and sign in
    // from useAuth hook
    const {  signUp, signIn } = useAuth();

    // state to tack error
    const [error, setError] = useState<string | null>('') 

    // handle when want to switch from sgin up to sign and the opposite
    const handleSwitchMode = () => {
        setIsSignUp((prev) => !prev)
    }


    const handleAuth = async () => {
        if (!email || !password) {
            setError('Please fill in all fields.')
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters long.')
        }

        setError(null);


        if (isSignUp) {
            const error = await signUp(email, password);

            if (error) {
                setError(error)
                return;
            }
        } else {
            const error = await signIn(email, password);
            
            if (error) {
                setError(error);
                return;
            }
        }

        router.replace('/')
    }

    // KeyboardAvoidingView: component adjust it's heihgt, positionm padding based on the 
    // keyboard height and remain visible while the virtual keyboard is displayed


    // is the plaform is ios it will adjust it's padding and height
    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <View style={styles.content}>
                <Text style={styles.title} variant="headlineMedium">
                    {isSignUp ? 'Create an Account' : 'Welcome Back'}
                </Text>

                {/* gmail field */}
                <TextInput 
                    label='Email' 
                    autoCapitalize="none" 
                    keyboardType="email-address"
                    placeholder="example@gmail.com"
                    mode='outlined'
                    style={styles.input}
                    onChangeText={setEmail}
                />

                {/* password field */}
                <TextInput 
                    label='password' 
                    autoCapitalize="none" 
                    placeholder="Your password..."
                    mode='outlined'
                    style={styles.input}
                    onChangeText={setPassword}
                />

                {error && (
                    <Text style={{ color: theme.colors.error }}>
                        {error}
                    </Text>
                )}

                {/* sign up and sign buttons */}
                <Button 
                    mode='contained' 
                    style={styles.button}
                    onPress={handleAuth}
                    >
                    {isSignUp ? 'Sign Up' : 'Login'}
                </Button>

                <Button 
                    mode="text"
                    style={styles.switchModeButton}
                    onPress={handleSwitchMode}
                    >
                    {isSignUp ? 
                        'Already have an account? Sign In'
                        : "Don't have an account? Sign Up"}
                </Button>
            </View>
        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },

    content: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',

    },

    title: {
        textAlign: 'center',
        marginBottom: 24,
    },

    input: {
        marginBottom: 16,
    },

    button: {
        marginTop: 8,
    },

    switchModeButton: {
        marginTop: 16,
    },

    erroText: {
        color: 'red',
    }
})