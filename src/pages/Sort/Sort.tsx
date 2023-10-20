import { useState } from "react"
import { useListParticipants } from "../../state/hook/useListParticipants"
import { useSortResult } from "../../state/hook/useSortResult"
import Card from "../../components/Card"
import './styles.css'

export const Sort = () => {
    const participants = useListParticipants()

    const [participant, setParticipant] = useState('')
    const [amigoSecreto, setAmigoSecreto] = useState('')

    const result = useSortResult()

    const sort = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (result.has(participant)) {
            setAmigoSecreto(result.get(participant)!)
            setTimeout(() => {
                setAmigoSecreto('')
            }, 5000)
        }
    }

    return (
        <Card>
            <section
                className="sort"
            >
                <h2>Quem vai tirar o papelzinho?</h2>
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
                        <option>Selecione seu nome</option>
                        {participants.map((participant) => {
                            return (
                                <option
                                    key={participant}
                                >
                                    {participant}
                                </option>
                            )
                        })}
                    </select>
                    <p>Clique em em sortear para ver quem é seu amigo secreto!</p>
                    <button
                        className="sort-button"
                    >
                        Sortear
                    </button>
                </form>
                {amigoSecreto &&
                    <p
                        role="alert"
                        className="result"
                    >
                        {amigoSecreto}
                    </p>
                }
                <footer className="sort">
                    <img src="aviao.png" className="aviao" alt="Um desenho de um avião de papel" />
                </footer>
            </section>
        </Card>
    )
}