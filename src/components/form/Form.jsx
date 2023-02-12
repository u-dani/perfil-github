
import Input from "./Input"
import SubmitButton from "./SubmitButton"
import '../../styles/components/Form.scss'

import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Form = () => {

    const navigate = useNavigate()

    const [ username, setUsername ] = useState()
    const [ msgError, setMsgError ] = useState('')

    function handleChange({ target }) {
        setUsername(target.value)
        setMsgError('')
    }

    function submit( e ) {
        e.preventDefault()
        checkUsername()
    }

    async function checkUsername() {

        const res = await fetch(`https://api.github.com/users/${username}`)

        if (!res.ok) {
            setMsgError("Usuário não encontrado, verifique se escreveu corretamente.")
            throw new Error("Usuário nao encontrado!")
        }

        const data = await res.json()
        navigate("/perfil-github/perfil", {state: {data}})
    }

    return (
        <form onSubmit={submit}>
            <Input 
                id="iuser" 
                text="Busque por um nome de usuário do Github." 
                placeholder="Username"
                handleChange={handleChange}
            />
            <SubmitButton text="Ver perfil"/>
            <p>{msgError}</p>
        </form>
    )
}

export default Form