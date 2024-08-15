import React from 'react'

/**
 * ${1:Description placeholder}
 *
 * @export
 * @param {{ value: any; }} param0
 * @param {${2:*}} param0.value
 * @returns {${3:*}\}
 */
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
