import React, { Component } from 'react';
import './cryptocurrency.css';

class Cryptocurrency extends Component {
  render() {
    var {  //definiujemy zmienne dla jsona z coinmarketcap.com
      id,
      name,
      symbol,
      price_usd,
      percent_change_1h,
      percent_change_24h,
      percent_change_7d,
    } = this.props.data;
    return (
      <li className={"cryptocurrency " + id}> {/*tworzymy li dla danych */}
        <p className="cryptocurrency-name">{name} ({symbol})</p>  {/* podpinamy nazwe */}
        <h1>${ (+price_usd).toFixed(2) }</h1> {/*cena usd, toFixed po przecinku 2 liczby */}
        <p>{percent_change_1h}% 1hr</p> {/*zmiana procentowa 1h */}
        <p>{percent_change_24h}% 24hr</p>
        <p>{percent_change_7d}% 7d</p>
      </li>
    );
  }
}


export default Cryptocurrency;
