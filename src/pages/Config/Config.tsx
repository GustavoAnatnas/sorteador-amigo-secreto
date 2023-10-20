import Card from "../../components/Card"
import Footer from "../../components/Footer/Footer"
import Forms from "../../components/Forms/Forms"
import { ListParticipants } from "../../components/ListParticipants/ListParticipants"

export const Config = () => {
    return (
        <Card>
            <section>
                <h2>Vamos começar!</h2>
                <Forms />
                <ListParticipants />
                <Footer />
            </section>
        </Card>
    )
}