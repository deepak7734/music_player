/*import React, {useState,useEffect} from 'react';

import {View,Text,SafeAreaView, ActivityIndicator} from 'react-native';

import {setupPlayer, addTrack} from './musicPlayerService';


function App(): JSX.Element {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  async function setup() {
   let isSetup = await setupPlayer();

   if (isSetup) {
    await addTrack();
   }

   setIsPlayerReady(isSetup);
  }

  useEffect(() => {
     setup();
  }, []);

  if (!isPlayerReady) {
      return(
        <SafeAreaView>
          <ActivityIndicator />
        </SafeAreaView>
      );
  }

  return (
     <SafeAreaView>
      <View>
        <Text>HELLO JUST CHECKIN</Text>
      </View>
     </SafeAreaView>
);
}

export default App;*/

//import { TrackPlayerManager } from './TrackPlayerManager';
/*import React, {useState, useEffect} from 'react';

import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import {setupPlayer , addTrack} from './musicPlayerService';
import MusicPlayer from './screens/MusicPlayer';


function App(): JSX.Element {
  const [isPlayerReady, setIsPaylerReady] = useState(false);

  async function setup(){
    let isSetup = await setupPlayer();

    if (isSetup) {
      await addTrack();
    }

    setIsPaylerReady(isSetup);
  }

  useEffect(() => {
    setup();
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
      <MusicPlayer />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
});

export default App;*/

import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { setupPlayer, addTrack } from './musicPlayerService';
import MusicPlayer from './screens/MusicPlayer';

function App(): JSX.Element {
  const [isPlayerReady, setIsPlayerReady] = useState(false); // Fixed typo here

  async function setup() {
    let isSetup = await setupPlayer();

    if (isSetup) {
      await addTrack();
    }

    setIsPlayerReady(isSetup); // Fixed typo here as well
  }

  useEffect(() => {
    setup();
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
      <MusicPlayer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
