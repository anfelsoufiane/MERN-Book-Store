const cart = [];

const handleCart = (state = cart, action) => {
    const book = action.payload;
    switch (action.type) {
        case "ADDBOOK":
            // Check if The book is already in the cart
            const exist = state.find((x) => x._id === book._id);
            if(exist){
                // Increase the quantity
                return state.map((x) => x._id == book._id ? {...x, qty: x.qty+1} : x);
            } else {
                const book = action.payload;
                return [
                    ...state,
                    {
                        ...book,
                        qty: 1,
                    }
                ]
            }
            break;
        
        case "DELETEBOOK":
            const exist1 = state.find((x) => x._id === book._id);
            if(exist1.qty === 1){
                return state.filter((x) => x._id !== exist1._id);
            }else {
                return state.map((x) => x._id === book._id ? {...x, qty: x.qty-1 } : x);
            }
            break;

        default:
            return state;
            break;
    }
}

export default handleCart;