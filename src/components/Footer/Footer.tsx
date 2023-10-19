import { useNavigate } from "react-router-dom"
import { useListParticipants } from "../../state/hook/useListParticipants"
import './styles.css'
import { useSort } from "../../state/hook/useSort"

const Footer = () => {
    const participants = useListParticipants()

    const redirect = useNavigate()

    const sort = useSort()


    const handleStart = () => {
        sort()
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
            <img src="sacolas.png" alt="Sacolas de compras" />
        </footer>
    )
}

export default Footer