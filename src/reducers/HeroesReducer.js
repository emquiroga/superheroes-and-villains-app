export const HeroesReducer = (state, action) => {
    switch (action.type) {
        case "add":
            return [...state, action.payload];
        case "delete":
            return state.filter(actual => actual.id !== action.payload)
        default:
            return state
    }
}
