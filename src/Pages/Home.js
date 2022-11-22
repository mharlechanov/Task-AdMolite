import React from 'react'
import Gallery from '../Components/Gallery'
import data from "../data"

export default function Home() {
  const images = data.map(item => {
    return (
      <Gallery
        key={item.id}
        item={item}

      />
    )
  })
  return (
    <div className='Home'>
      <div className='home--wrapper'>
        <img className="home--image" alt='' src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" />
      </div>

      <section className="imageGallery-list">
        {images}
      </section>
    </div>
  )
}
