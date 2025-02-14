import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import {lightTheme} from "../styles/theme"

const HomeScreen = () => {
    const [email, setEmail] = useState('');

    const handleJoinWaitlist = () => {
        if (email) {
            Alert.alert('Success', 'You have been added to the waiting list!');
            setEmail('');
        } else {
            Alert.alert('Error', 'Please enter a valid email address.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Our Library Sharing Platform</Text>
            <Text style={styles.description}>
                This is a platform where people can share their libraries, borrow and give books to each other, and follow what their friends are reading. All these exciting features are coming soon!
            </Text>
            <Text style={styles.waitlistText}>Join our waiting list to be notified when we go live:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <Button color={lightTheme.accent}  title="Join Waitlist" onPress={handleJoinWaitlist} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: lightTheme.primary
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color:lightTheme.secondary
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
        color:lightTheme.secondary
    },
    waitlistText: {
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center',
        color:lightTheme.secondary
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius:12,
        paddingVertical:8
    },
    button:{
        backgroundColor:lightTheme.accent
    }
});

export default HomeScreen; 