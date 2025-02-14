import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {lightTheme} from "../styles/theme"

const AddScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add Books to Your Shelf</Text>
            <Text style={styles.description}>
                Here you can add books to your personal library, categorize them by genre, or create custom lists to organize your reading. Start building your collection today!
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: lightTheme.primary, // Match HomeScreen background color
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: lightTheme.secondary, // Match HomeScreen text color
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
        color: lightTheme.secondary, // Match HomeScreen text color
    },
});

export default AddScreen; 