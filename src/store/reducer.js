const initialState = {
    leftColumnItems: [],
    rightColumnItems: []
}

function removeItem(items, item) {
    const itemsCopy = [...items]
    const index = itemsCopy.indexOf(item)
    if (index !== -1) {
        itemsCopy.splice(index, 1)
    }

    return itemsCopy
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'items/addToLeft':
            return {
                ...state,
                leftColumnItems: [
                    ...state.leftColumnItems,
                    action.payload
                ]
            }
        case 'items/addToRight':
            return {
                ...state,
                rightColumnItems: [
                    ...state.rightColumnItems,
                    action.payload
                ]
            }
        case 'items/deleteFromLeft':
            const newStateL = {
                ...state,
                leftColumnItems: removeItem(state.leftColumnItems, action.payload)
            }
            return newStateL
        case 'items/deleteFromRight':
            const newStateR = {
                ...state,
                rightColumnItems: removeItem(state.rightColumnItems, action.payload)
            }
            return newStateR
        default:
            return state
    }
}

export default reducer;