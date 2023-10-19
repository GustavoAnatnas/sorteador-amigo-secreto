import { useListParticipants } from "../state/hook/useListParticipants"

export const Sort = () => {
    const participants = useListParticipants()
    return (
        <section>
            <form
                action=""
            >
                <select
                    name="participant"
                    id="participant"
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
                </select>
            </form>
        </section>
    )
}