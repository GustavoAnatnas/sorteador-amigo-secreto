import { useNavigate } from "react-router-dom"
import { useListParticipants } from "../state/hook/useListParticipants"

const Footer = () => {
    const participants = useListParticipants()

    const redirect = useNavigate()

    const handleStart = () => {
        redirect('/sorteio')
    }

    return (
        <footer>
            <button
                disabled={participants.length < 2}
                onClick={handleStart}
            >
                Iniciar brincadeira
            </button>
        </footer>
    )
}

export default Footer