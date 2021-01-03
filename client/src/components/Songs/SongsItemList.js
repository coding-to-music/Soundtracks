import React from 'react'

export default function SongsItemList(props) {
  return (
    <div>
       <ul>
        <li>{props.song.title} - {props.song.artist}</li>
      </ul>
    </div>
  )
}
