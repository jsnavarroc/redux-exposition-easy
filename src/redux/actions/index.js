export const SET_CITY = 'SET_CITY'

const setCity = (city) => (
    {
        type: SET_CITY,
        payload: {city},
    }
);

export const setSelectedCity = (city) => {

    return ( dispatch, getState ) => {

        dispatch(setCity(city));
        const state = getState();
        console.log(state);
        
    };
};