
export function createOrder(data) {
    return {
        type: "CREATE_ORDER",
        payload: data
    }
}


export function moveOrderToFarm(data) {
    return {
        type: "MOVE_ORDER_TO_FARM",
        payload: data
    }
}
