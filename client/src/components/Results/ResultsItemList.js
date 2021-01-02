import React from 'react'

export default function ResultsItemList(props) {
  console.log(props)
  return (
    <div>
      <li>
        {props.assetName}
      </li>
    </div>
  )
}
