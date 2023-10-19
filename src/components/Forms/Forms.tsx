import { useRef, useState } from "react";
import { useAddParticipant } from "../../state/hook/useAddParticipant";
import { useErrorMessage } from "../../state/hook/useErrorMessage";
import './styles.css'

const Forms = () => {
    const [name, setName] = useState('')

    const inputRef = useRef<HTMLInputElement>(null)

    const addInList = useAddParticipant()
    const errorMessage = useErrorMessage()

    const addParticipant = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        addInList(name)
        setName('')
        inputRef.current?.focus()
    }

    return (
        <form
            onSubmit={addParticipant}
        >
            <div className="group-input-btn">
                <input
                    ref={inputRef}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Insira os nomes dos participantes"
                />
                <button
                    disabled={!name}
                >
                    Adicionar
                </button>
            </div>
            {errorMessage && 
            <p 
            role="alert"
            className="alert error"
            >
                {errorMessage}
                </p>
                }
        </form>

    )
}

export default Forms;