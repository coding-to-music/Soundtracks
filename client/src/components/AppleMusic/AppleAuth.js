
import React, {useContext} from 'react'
import SoundtrackContext from '../../context/soundtrackContext'
import MusicProvider from '../../core/ MusicProvider'
import axios from 'axios'


let musicProvider = MusicProvider.sharedProvider();

export default function AppleAuth() {
  const {appleUserToken,setAppleUserToken}= useContext(SoundtrackContext)

  Object.keys(appleUserToken)
  
  const handleSignIn = async (event)=>{
    
      const result = await axios.get('/api/devtoken')
      musicProvider.configure(result.data.token)
      const musicInstance = musicProvider.getMusicInstance();
      const auth = await musicInstance.authorize()
    
      setAppleUserToken(auth)
  }

  const handleSignOut = async (event)=>{
    const result = await axios.get('/api/devtoken')
    musicProvider.configure(result.data.token)
    const musicInstance = musicProvider.getMusicInstance();
    const auth = await musicInstance.unauthorize()
  
    setAppleUserToken(false)
}


  return (
    <div>
    
      {appleUserToken ? <p className="navbar-brand"  title="Sign Out" onClick={()=>{handleSignOut()}}> Sign Out <img className="rounded-circle" src='/images/left-apple-logo.svg' alt='sign out'  /></p> :
      
      <p className="navbar-brand"  title="Sign In" onClick={()=>{handleSignIn()}} > Sign In <img className="rounded-circle" src='/images/left-black-apple.svg' alt='sign in' /></p> 
      }
    </div>
  )
}


