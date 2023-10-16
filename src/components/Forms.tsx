import { useRef, useState } from "react";
import { useAddParticipant } from "../state/hook/useAddParticipant";

const Forms = () => {
    const [name, setName] = useState('')

    const inputRef = useRef<HTMLInputElement>(null)

    const addInList = useAddParticipant()

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
        </form>

    )
}

export default Forms;