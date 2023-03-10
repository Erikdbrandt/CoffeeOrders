import {createHeaders} from "./index"

const apiUrl = process.env.REACT_APP_API_URL

export const orderAdd = async (user, order) => {
    try {
        const response = await fetch(`${apiUrl}/${user.id}`, {
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                orders: [...user.orders, order]
            })

        })
        if (!response.ok) {
            throw new Error('Could not update the error')
        }

        const result = await response.json()
        return [null, result]
    } catch (error) {
        return [error.message, null]
    }
}

export const orderClearHistory = async (userId) => {

    try {
        const response = await fetch(`${apiUrl}/${userId}`, {
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                    orders: []
                })
        })
        if(!response.ok){
            throw new Error('Could not update orders')
        }
        const result = await response.json()
        return [null, result]
    } catch (error) {
        return [error.message, null]
    }


}