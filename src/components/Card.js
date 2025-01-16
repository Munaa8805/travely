import React from 'react'
import Image from 'next/image'
import css from './card.module.css'

export default function Card({ title, description, image }) {
  return (
      <div className={css.container}>
        <Image src={image} alt={title} className={css.image} />
        <h2 className={css.title}>{title}</h2>
        <p>{description}</p>
    </div>
  )
}
