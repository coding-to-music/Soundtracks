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
       
        developerToken: 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkNIOTNTM1M3NUwifQ.eyJpc3MiOiI2VTY1UkEyQTlOIiwiZXhwIjoxNjI3MTIxODc3LCJpYXQiOjE2MTEzNDQ4Nzd9.N_2-usX4Tq6pf5hIK5uJw43jec6ekrnyMcKW-0GXGz98dsZokWiZUwaY6e9EUPoNzhhpxJ02TsEoMrIFv5j9eQ',
        // developerToken: token,
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