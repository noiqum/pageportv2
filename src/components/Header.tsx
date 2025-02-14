import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons , } from '@expo/vector-icons'; // Import icons

interface HeaderProps {
    backgroundColor: string;
    title: string;
    icon?: undefined; // Optional icon name
}

const Header: React.FC<HeaderProps> = ({ backgroundColor, title, icon }) => {
    return (
        <View style={[styles.header, { backgroundColor }]}>
            {icon && <MaterialIcons name={icon} size={24} color="white" style={styles.icon} />}
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        borderBottomWidth:1,
        borderBottomColor:"white"
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 8, // Add spacing between icon and title
    },
    icon: {
        marginRight: 8, // Add spacing between icon and title
    },
});

export default Header; 