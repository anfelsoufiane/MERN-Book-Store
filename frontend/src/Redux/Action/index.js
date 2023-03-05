// FOR ADD ITEM TO CART

export const addCart = (book) => {
    return {
        type: "ADDBOOK",
        payload: book
    }
}

// FOR DELETE ITEM FROM CART

export const deleteCart = (book) => {
    return {
        type: "DELETEBOOK",
        payload: book
    }
}