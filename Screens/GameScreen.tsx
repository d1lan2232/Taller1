import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

export default function GameScreen() {
  const localHtmlFile = require('../assets/pacman.html');
  return (
    <WebView
    originWhitelist={['*']}
      source={localHtmlFile}
      style={{ flex: 1 }}
    />
  )
}

const styles = StyleSheet.create({})