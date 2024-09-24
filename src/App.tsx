import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {addTrack, setupPlayer} from '../musicPlayerService';

const App = () => {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  async function setUp() {
    let isSetUp = await setupPlayer();

    if (isSetUp) {
      await addTrack();
    }

    setIsPlayerReady(isSetUp);
  }

  useEffect(() => {
    setUp();
  }, []);

  if (!isPlayerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <Text>Track player App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
