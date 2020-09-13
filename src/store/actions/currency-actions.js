export const updateCurr = (code) => {
    return {
        type: "[Currency] Update Currency",  // mandatory
        code,  // additional payload (optional)
    };
};