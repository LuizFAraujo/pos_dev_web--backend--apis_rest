class Order {
    constructor(id, productId, customerId, orderDate, quantity) {
        this.id = id;
        this.productId = productId;
        this.customerId = customerId;
        this.orderDate = orderDate;
        this.quantity = quantity;
    }
}

export default Order;
