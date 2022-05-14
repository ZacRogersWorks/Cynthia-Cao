import React from 'react'
import { AudioPlayer } from '../components/AudioPlayer';
import '../sass/styles.scss';

function audio() {
  return (
    <div className="player__container">
      <div className='player'>
        <AudioPlayer title='Track Title' 
        src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8ab52cf3-0fe6-40a7-a380-c68c7e4dc710/Artists__Curators_in_the_Evolving_NFT_Landscape.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220513T223702Z&X-Amz-Expires=86400&X-Amz-Signature=415111c9601ae16ae4a1a2accb3f43806cf8bcca3d90bce74eb11f26030a8f8d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Artists%2520%2526%2520Curators%2520in%2520the%2520Evolving%2520NFT%2520Landscape.mp3%22&x-id=GetObject' 
        />
      </div>
    </div>
  )
}

export default audio