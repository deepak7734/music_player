/*import React from 'react';
import {Pressable, View} from 'react-native';
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { playbackService } from '../musicPlayerService';

const ControlCenter = () => {

    const playBackState = usePlaybackState();
    //next button
    const skipToNext = async () => {
        await TrackPlayer.skipToNext();
    };

    //previous button
    const skipToPrevious = async () => {
        await TrackPlayer.skipToPrevious();
    };

    const togglePlayback = async (playback: State) => {
        const currentTrack = await TrackPlayer.getActiveTrack();

        if (currentTrack !== null) {
            if(playback === State.Paused || playback === State.Ready) {
                await TrackPlayer.play();
            } else {
                await TrackPlayer.pause();
            }
        }
    };


  return (
    <View>
        <Pressable onPress={skipToPrevious}>
              <Icon style={styles.icon} name="skip-previous" size={40} />
        </Pressable>
        <Pressable onPress={() => togglePlayback(playBackState as State)}>
              <Icon style={styles.icon} name="skip-previous" size={40} />
        </Pressable>
        <Pressable onPress={skipToPrevious}>
              <Icon style={styles.icon} name="skip-next" size={40} />
        </Pressable>
    </View>
  );
};
*/

/*import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player';


import Icon from 'react-native-vector-icons/MaterialIcons';

//import { playbackService } from '../../musicPlayerServices';

const ControlCenter = () => {

    const playBackState = usePlaybackState();
    // next button
    const skipToNext = async () => {
        await TrackPlayer.skipToNext();
    };
    // Previous button
    const skipToPrevious = async () => {
        await TrackPlayer.skipToPrevious();
    };

    const togglePlayback = async (playback: State) => {
        const  currentTrack = await TrackPlayer.getActiveTrack();

        if (currentTrack !== null) {
            if (playback === State.Paused || playback === State.Ready) {
                await TrackPlayer.play();
            } else {
                await TrackPlayer.pause();
            }
        }
    };

  return (
    <View style={styles.container}>
        <Pressable onPress={skipToPrevious}>
            <Icon style={styles.icon} name="skip-previous" size={40} />
        </Pressable>
        <Pressable onPress={() => togglePlayback(playBackState)}>
            <Icon
            style={styles.icon}
            name={currentState === State.Playing ? 'pause' : 'play-arrow'}
            size={75} />
        </Pressable>
        <Pressable onPress={skipToNext}>
            <Icon style={styles.icon} name="skip-next" size={40} />
        </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      marginBottom: 56,

      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      color: '#FFFFFF',
    },
    playButton: {
      marginHorizontal: 24,
    },
  });

export default ControlCenter;
*/
import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ControlCenter = () => {
    const playBackState = usePlaybackState();

    // Next track button handler
    const skipToNext = async () => {
        try {
            await TrackPlayer.skipToNext();
        } catch (error) {
            console.error('Error skipping to next track:', error);
        }
    };

    // Previous track button handler
    const skipToPrevious = async () => {
        try {
            await TrackPlayer.skipToPrevious();
        } catch (error) {
            console.error('Error skipping to previous track:', error);
        }
    };

    // Play/pause toggle handler
    const togglePlayback = async (playback: State) => {
        try {
            const currentTrack = await TrackPlayer.getActiveTrack();

            if (currentTrack !== null) {
                if (playback === State.Paused || playback === State.Ready) {
                    await TrackPlayer.play();
                } else {
                    await TrackPlayer.pause();
                }
            }
        } catch (error) {
            console.error('Error toggling playback:', error);
        }
    };

    // Safely access playback state (fallback to 'State.None' if undefined)
    const currentState = playBackState ?? State.None;

    return (
        <View style={styles.container}>
            {/* Previous track button */}
            <Pressable onPress={skipToPrevious}>
                <Icon style={styles.icon} name="skip-previous" size={40} />
            </Pressable>

            {/* Play/Pause button */}
            <Pressable onPress={() => togglePlayback(currentState)}>
                <Icon
                    style={styles.icon}
                    name={currentState === State.Playing ? 'pause' : 'play-arrow'}
                    size={75}
                />
            </Pressable>

            {/* Next track button */}
            <Pressable onPress={skipToNext}>
                <Icon style={styles.icon} name="skip-next" size={40} />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 56,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 24,
        paddingVertical: 16,
    },
    icon: {
        color: '#FFFFFF',
    },
});

export default ControlCenter;

