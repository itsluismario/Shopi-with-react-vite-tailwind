    // Shoppinh Cart • Get the total cost 
    /**
     * This function calculates total price of a new order
     * @param {Array} products cartProducts: Array of Objects
     * @returns {number} Total Price
     */
    
    export const totalPrice = (products) => {
        const totalCost = products.reduce((acc, item) => acc + item.price * item.quantity, 0)
        return (
            totalCost
        )
    }
    