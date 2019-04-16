import React, { Component } from 'react';
import ReleaseFilm from './ReleaseFilm.js';

class ReleaseList extends Component {
  constructor(props){
    super(props);
  }
  render(){
     const films = this.props.data.map(film => {
           return( <ReleaseFilm name={film.name}key={film.id} url={film.url}></ReleaseFilm>)
         })

     return(
       <div>
         {films}
       </div>
     )
  }
}

export default ReleaseList;
