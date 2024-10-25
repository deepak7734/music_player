import TrackPlayer, { RepeatMode , Event } from 'react-native-track-player';

import { playListData} from './constants';

/*export async function setupPlayer() {
    let isSetup = false;
 try{
        await TrackPlayer.getCurrentTrack();
    } catch (error) {
       await TrackPlayer.setupPlayer();
       isSetup = true;
    } finally{
        return isSetup;
    }

}*/

export async function setupPlayer() {
    try {
      await TrackPlayer.setupPlayer();
      return true; // Player setup was successful
    } catch (error) {
      console.error('Error setting up player:', error);
      return false; // Player setup failed
    }
  }

  export async function addTrack() {
    await TrackPlayer.add(playListData);
    await TrackPlayer.setRepeatMode(RepeatMode.Queue);
  }

export async function playbackService() {
    TrackPlayer.addEventListener(Event.RemotePause, () => {
        TrackPlayer.pause();
    });

    TrackPlayer.addEventListener(Event.RemotePlay, () => {
        TrackPlayer.play();
    });

    TrackPlayer.addEventListener(Event.RemoteNext, () => {
        TrackPlayer.skipToNext();
    });

    TrackPlayer.addEventListener(Event.RemotePrevious, () => {
        TrackPlayer.skipToPrevious();
    });
}
