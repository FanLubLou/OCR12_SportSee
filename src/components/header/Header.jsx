import React from 'react';

/**
 * Composant d'en-tête affichant un message de bienvenue personnalisé.
 *
 * @export
 * @param {{ value: string; }} props - Les propriétés du composant.
 * @param {string} props.value - Le nom de l'utilisateur à afficher dans le message de bienvenue.
 * @returns {JSX.Element} Le composant d'en-tête avec le message de bienvenue.
 */
export default function Header({ value }) {
  return (
    <div>
      <h1 className='headerBonjour'>
        Bonjour <span className='headerSpan'>{value}</span>
      </h1>
      <p className='headerP'>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}
