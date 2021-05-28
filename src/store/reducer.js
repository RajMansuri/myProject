import { createActions, createReducer } from 'reduxsauce';


export const { Types, Creators } = createActions({
    buyCake: ['noOfCake'],
    buyIceCream: ['noOfIceCream']
});

const initialState = {
    noOfCake: 10,
    noOfIceCream: 100
};

const buyCake = (state = initialState, action) => {
    return {
        ...state,
        noOfCake: state.noOfCake - action.noOfCake
    }
}
const buyIceCream = (state = initialState, action) => (
    {
        ...state,
        noOfIceCream: state.noOfIceCream - action.noOfIceCream
    }
)

export default createReducer(initialState, {
    [Types.BUY_CAKE]: buyCake,
    [Types.BUY_ICE_CREAM]: buyIceCream
});