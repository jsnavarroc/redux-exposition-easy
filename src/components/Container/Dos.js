import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setSelectedCity} from '../../redux/actions';
import City from '../Dummy/City';


class Dos extends Component { 

  handleChange = () => {
    this.props.setSelectedCity('Pereira');
  }

 
  render() {
    return (
      <div className="Dos">
        <button onClick = {this.handleChange} >
          Subir al state Dos
        </button>
        <City city = {this.props.cities.Manizales}/>
      </div>
    );
  }
}
function mapStateToProps(state, props) {
  console.log('state>>',state);
  console.log('props>>',props);
  
  return {
    cities: state.cities,
  }
}


export default connect(mapStateToProps, { setSelectedCity })(Dos);