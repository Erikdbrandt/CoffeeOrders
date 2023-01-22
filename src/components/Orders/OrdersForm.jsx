import {useForm} from "react-hook-form"

const OrdersForm = () => {


    const {register, handleSubmit} = useForm()

    const onSubmit = data => {
        console.log(data)
    }

    return (


        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <label htmlFor="order-notes">Order notes:</label>
                <input type="text" {...register('orderNotes')} placeholder="No suger, extra milk" />
            </fieldset>

            <button type="submit">Order</button>
        </form>
    )

}

export default OrdersForm