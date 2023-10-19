import { useNavigate } from "react-router-dom"
import { useListParticipants } from "../../state/hook/useListParticipants"
import './styles.css'

const Footer = () => {
    const participants = useListParticipants()

    const redirect = useNavigate()

    const handleStart = () => {
        redirect('/sorteio')
    }

    return (
        <footer
        className="footer-config"
        >
            <button
            className="button"
                disabled={participants.length < 2}
                onClick={handleStart}
            >
                Iniciar brincadeira
            </button>
            <img src="/public/sacolas.png" alt="Sacolas de compras" />
        </footer>
    )
}

export default Footer