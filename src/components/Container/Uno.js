import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setSelectedCity} from '../../redux/actions/index';
import City from '../Dummy/City';


class Uno extends Component { 

  handleChange = () => {
    this.props.setSelectedCity('Medellin');
  }

 
  render() {
    return (
      <div className="Uno">
        <button onClick = {this.handleChange} >
          Subir al state Uno
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


export default connect(mapStateToProps, { setSelectedCity })(Uno);