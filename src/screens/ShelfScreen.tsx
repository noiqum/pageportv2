import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { lightTheme } from '../styles/theme'; // Import your theme

const ShelfScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your Book Shelf</Text>
            <Text style={styles.description}>
                Here you can view and manage your personal book collection. Organize your books into categories, track your reading progress, and share your favorite reads with friends. Start exploring your shelf today!
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

export default ShelfScreen; 