/*import React, {PropsWithChildren} from 'react';
import { StyleSheet,View,Text } from 'react-native';
import { Track } from 'react-native-track-player';

type SongInfoProps = PropsWithChildren<{
    track: Track | null | undefined;
}>;

const SongInfo = ({track}: SongInfoProps) => {
    if (!track) {
        return(
            <View style={styles.container}>
            <Text style={styles.errorText}>No song information avaialble</Text>
            </View>
        );
    }

    return(
        <View style={styles.container}>
            <Text style={styles.name}>{track.title || 'Unknown Title'}</Text>
            <Text style={styles.artist}>
            {track.artist || 'Unknown Artist'}  .  {track.album || 'Unknown Album'}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      width: '90%',
      marginTop: 18,
      padding: 16,
      borderRadius: 10,
      backgroundColor: '#1e1e1e',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5,
    },
    name: {
      marginBottom: 4,
      textAlign: 'center',
      color: '#fff',
      fontSize: 26,
      fontWeight: '700',
    },
    artist: {
      color: '#b0b0b0',
      textAlign: 'center',
      fontSize: 16,
    },
    errorText: {
      color: '#ff4d4d',
      textAlign: 'center',
      fontSize: 16,
    },
  });

  export default SongInfo;
*/
import React, { PropsWithChildren } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Track } from 'react-native-track-player';


type SongInfoProps = PropsWithChildren<{
    track: Track | null | undefined
}>

const SongInfo = ({track}: SongInfoProps) => {
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.name}>
                {track?.title}
            </Text>
            <Text style={styles.artist}>
                {track?.artist}  .  {track?.album}
            </Text>
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      width: '90%',
      marginTop: 18,

      flexDirection: 'row',
      alignItems: 'baseline',
      justifyContent: 'center',
    },
    name: {
      marginBottom: 8,
      textAlign: 'center',

      color: '#fff',
      fontSize: 24,
      fontWeight: '800',
    },
    artist: {
      color: '#d9d9d9',
      textAlign: 'center',
    },
  });

export default SongInfo;
