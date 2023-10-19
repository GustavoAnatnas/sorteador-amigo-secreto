import { useState } from "react"
import { useListParticipants } from "../state/hook/useListParticipants"
import { useSortResult } from "../state/hook/useSortResult"

export const Sort = () => {
    const participants = useListParticipants()

    const [participant, setParticipant] = useState('')
    const [amigoSecreto, setAmigoSecreto] = useState('')

    const result = useSortResult()

    const sort = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()  
        if(result.has(participant)){
            setAmigoSecreto(result.get(participant)!)
        }
    }

    return (
        <section>
            <form
                onSubmit={sort}
            >
                <select
                    required
                    name="participant"
                    id="participant"
                    placeholder="Selecione o seu nome"
                    value={participant}
                    onChange={(e) => setParticipant(e.target.value)}
                >
                    {participants.map((participant) => {
                        return (
                            <option
                                key={participant}
                            >
                                {participant}
                            </option>
                        )
                    })}
                    <button>Sortear</button>
                </select>
            </form>
            {amigoSecreto &&
                <p
                    role="alert"
                >
                    {amigoSecreto}
                </p>
            }
        </section>
    )
}