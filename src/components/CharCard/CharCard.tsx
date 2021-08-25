import React, { useState } from 'react';
import {Char} from '../../models/char';
import './CharCard.css';

function CharCard(props: {char: Char}) {

    const [expanded, setExpanded] = useState(false);

    function toggleExpanded(char: Char) {
        setExpanded(!expanded);
        return expanded;
    }

    return (
        <div
          data-testid='CharCard'
          className={`CharCard ${expanded? 'ExpandedChar' : ''}`}
          onClick={() => toggleExpanded(props.char)}>

          {props.char.award &&
           <img
             className="Medal"
             src={`${process.env.PUBLIC_URL}/assets/medal-${props.char.award}.png`}
             alt={`${props.char.name} Icon`}
           />
          }

          <div className="ThumbWrapper">
            <img
              className="Thumb"
              src={`${process.env.PUBLIC_URL}/assets/${props.char.name.toLowerCase().replace(/\s/g, '-')}.png`}
              alt={`${props.char.name} Icon`}
            />
          </div>
          
          <h2 className="CardTitle">{props.char.name}</h2>
          <h3 className={`CharDescriptionTitle ${expanded? 'Visible' : ''}`}>Appeared in: </h3>
          <ul className={`CharDescription ${expanded? 'Visible' : ''}`}>{props.char.films.map((movie, index) => (
              <li className='CharDescriptionItem' key={index}>
                {movie}
              </li>
          ))}
          </ul>
          <div className="MoreInfoWrapper">
            <p className="MoreInfoText">{expanded? 'Less Info' : 'More Info'}</p>
            <p className="MoreInfoIcon">{expanded? '̭' : '̬'}    </p>
          </div>
        </div>
    );
}

export default CharCard;
