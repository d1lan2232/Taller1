import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

export default function GameScreen() {
  const localHtmlFile = require('../Game/pacman.html');
  return (
    <WebView
    originWhitelist={['*']}
      source={localHtmlFile}
      style={styles.pacman}
    />
  )
}

const styles = StyleSheet.create({
  pacman:{
    width: "100%",
    height: "100%",
    flex: 2,
    backgroundColor: "rgba (0, 55, 27, 0.8)"
  }
})