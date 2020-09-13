// function reducer(storeData, action)
// state: initialize

function currencyReducer(storeData = 'INR', action) {

    switch (action.type) {
        case currencyActionType.UPDATE_CURRENCY:
            return action.code;
        default:
            return storeData; // current state
    }

}
export default currencyReducer;

const currencyActionType = {
    UPDATE_CURRENCY: '[Currency] Update Currency'
}