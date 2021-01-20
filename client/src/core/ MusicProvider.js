/**
 * Created by mohitbhansali on 10/06/18.
 */

export default class MusicProvider {

  static sharedProvider() {
      if(!MusicProvider.instance) {
          MusicProvider.instance = new MusicProvider();
      }
      return MusicProvider.instance;
  }

  configure() {
      window.MusicKit.configure({
          developerToken: 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkNIOTNTM1M3NUwifQ.eyJpc3MiOiI2VTY1UkEyQTlOIiwiZXhwIjoxNjExMTMwMjY3LCJpYXQiOjE2MTEwODcwNjd9.JmdS0Uk784ZHLck6BR7QdXJ9VAxabcktqeHhI2-dFuj0TFxlaCgD9vVDs5ZmDweIaoczmrZiMcRhK8nv8vtrTg',
          app: {
              name: 'SoundTracks',
              build: '2020.1.1'
          }
      });
  }

  getMusicInstance() {
      return window.MusicKit.getInstance();
  }
}