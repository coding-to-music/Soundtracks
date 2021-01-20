
import React, {useContext} from 'react'
import SoundtrackContext from '../../context/soundtrackContext'
import MusicProvider from '../../core/ MusicProvider'

let musicProvider = MusicProvider.sharedProvider();
musicProvider.configure();
let musicInstance = musicProvider.getMusicInstance();



export default function AppleAuth() {
  console.log('musicInstance', musicInstance)
  // const {setAppleUserToken }= useContext(SoundtrackContext)


  const handleAuthClick = async (event)=>{
      console.log('auth button clicked')
      const auth = await musicInstance.authorize()
      console.log('userAuth', auth)
  }


  return (
    <div>
       <button type="button" id="authorize-btn" class="btn btn-primary col-1 m-3" onClick={()=>{handleAuthClick()}}>Authorize</button>
      <button type="button" id="apple-music-unauthorize" class="btn btn-primary col-1 m-3">UnAuthorize</button>
    </div>
  )
}
