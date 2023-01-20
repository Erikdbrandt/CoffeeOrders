import {useForm} from 'react-hook-form'
import {loginUser} from "../../api/user";
import {useState} from "react";

const usernameConfig = {
    required: true,
    minLength: 3
}
const LoginForm = () => {

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm()

    const [loading, setloading] = useState(false)

    const onSubmit = async ({username}) => {
        setloading(true)
        const [error, user] = await loginUser(username)
        setloading(false)
    }


    const errorMessage = (() => {
        if (!errors.username) {
            return null
        }

        if (errors.username.type === 'required') {
            return <span>Username is required</span>
        }

        if (errors.username.type === 'minLength') {
            return <span>Username is too short (min 3 characters)</span>
        }

    })()

    return (
        <>
            <h2>What's your name?</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <label htmlFor="username">Username: </label>
                    <input
                        type="text"
                        placeholder="johnDoe"
                        {...register("username", usernameConfig)} />
                    {errorMessage}
                </fieldset>

                <button type="submit" disabled={loading}>Continue</button>
                {loading && <p>Logging in...</p>}
            </form>
        </>
    )
}

export default LoginForm
