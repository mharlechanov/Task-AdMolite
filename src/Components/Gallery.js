import React, { useState } from 'react'

export default function Gallery(props) {
  const [isShown, setIsShown] = useState(false);
  return (
    <div 
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        className="imageGallery">
      <img
        src={`${props.item.coverImg}`} className="imageGallery--image" />  
        <div className={"neshto " + ( isShown ? 'active': '')}>
         {props.item.title}
        </div>
    </div>
  )
}
