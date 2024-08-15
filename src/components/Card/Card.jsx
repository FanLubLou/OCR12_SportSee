export default function Card({ value, title, img, unit }) {

  /**
 * Creates a card
 * @param { String, string, image, string } props 
 * @returns { HTMLElement } returns a card
 */
  
  return (
    <div className='card'>
      <img src={img} alt={`${title} - logo`} className={'cardIcon'}/>
      <div className='cardTitleValue'>
        <h3 className='cardValue'>{value}{unit}</h3>
        <p className='cardTitle'>{title}</p>
      </div>
    </div>
  )
}
