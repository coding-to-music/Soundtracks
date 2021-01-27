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

  async configure(token) {
    

    window.MusicKit.configure({
       
        developerToken: token,
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