// components/ui/CustomHeader.js
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CustomHeader() {
  const router = useRouter();

  return (
    <View style={styles.header}>
      {/* Logo */}
      <TouchableOpacity
        onPress={() => router.push('/')}
        style={styles.logoContainer}
      >
        <Image
          source={require('../../assets/images/logo-fieb.png')}
          alt='sou FIEB'
          style={styles.logoImage}
        />
      </TouchableOpacity>

      {/* Ícone de Notificações */}
      <TouchableOpacity
        onPress={() => router.push('/notifications')}
        style={styles.iconContainer}
      >
        <IconSymbol name="bell.fill" size={24} color="#fff" />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>3</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#2bae9e',
    backgroundColor: '#2bae9e',

    // Ajuste para iOS (notch/status bar)
    paddingTop: Platform.OS === 'ios' ? 50 : 12,
    height: Platform.OS === 'ios' ? 90 : 60,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  logoImage: {
    width: 160,
    height: 40,
    resizeMode: 'contain',
  },
  iconContainer: {
    position: 'relative',
    padding: 8,
  },
  badge: {
    position: 'absolute',
    top: 3,
    right: 3,
    backgroundColor: '#fc0',
    borderRadius: 10,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});