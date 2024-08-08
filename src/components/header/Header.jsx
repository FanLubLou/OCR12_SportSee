import React from 'react'

export default function header({ value }) {
  
   return (
    <div>
      <h1 className='headerBonjour'>
        Bonjour <span className='headerSpan'>{value}</span>
      </h1>
      <p className='headerP'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>  
  )
}
