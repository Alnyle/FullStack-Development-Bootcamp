import React, { useState } from 'react'
import Card from './Card'

const Foreground = () => {
  // const data = [
  //   icon, desc, fileSize, closeDownload, tagDetails
  // ]
  const data = [
    {
      desc: "This is the background color of the card that will be displayed.",
      fileSize: ".8mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green " }},
  ]
  useState()
  return (
    <div className="fixed top-0 left-0 z-[3] w-full h-full" >
      {data.map((item, index) => (
        <Card key={index} {...item}/>
      ))}
    </div>
  )
}

export default Foreground