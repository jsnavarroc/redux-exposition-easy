import { SET_CITY } from '../actions';

const merge = ( ...objects ) => ( { ...objects } );

export const cities = (state = {}, action) => {
    const { type, payload } = action;
    console.log('state>>',state);
    
    switch (type) {
        case SET_CITY:
         const { city } = payload; 
        //Si la propiedad del objeto cambia refresca 
        // unicamente los componentes que este utilizando la propiedad, Si no los deja como estan.
         return { ...state, 'Manizales':city };
        // Agrega una nueva propiedad sin modificar las demas 
        // return { ...state, [city]:city };
        default:

         return state;
    }

};