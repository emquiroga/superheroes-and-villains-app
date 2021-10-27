import { heroesActions } from "../actions/heroesActions";

export const HeroesReducer = (state, action) => {
    switch (action.type) {
        case heroesActions.add:
            return [...state, action.payload];
        case heroesActions.remove:
            return state.filter(actual => actual.id !== action.payload)
        default:
            return state
    }
}
