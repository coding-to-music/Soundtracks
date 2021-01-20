
import React, {useContext} from 'react'
import SoundtrackContext from '../../context/soundtrackContext'
import MusicProvider from '../../core/ MusicProvider'
import axios from 'axios'


let musicProvider = MusicProvider.sharedProvider();

export default function AppleAuth() {
  const {appleUserToken,setAppleUserToken}= useContext(SoundtrackContext)


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
    setAppleUserToken(auth)
}


  return (
    <div>
      {console.log(appleUserToken)}
      {appleUserToken ? <p className="navbar-brand" onClick={()=>{handleSignOut()}}> Sign Out <img className="rounded-circle" src='/images/left-apple-logo.svg' alt='sign out'  /></p> :
      
      <p className="navbar-brand" onClick={()=>{handleSignIn()}} > Sign In <img className="rounded-circle" src='/images/left-black-apple.svg' alt='sign in' /></p> 
      }
     {/* <p>{appleUserToken ? 'Sign out' : 'Sign in'}<img className="rounded-circle" src='/images/apple-black-logo.svg' alt='sign in' onClick={()=>{handleAuthClick()}} /></p> */}
   
    </div>
  )
}
