import { useListParticipants } from "../state/hook/useListParticipants"

export const ListParticipants = () => {
    const participants: string[] = useListParticipants()
    return (
        <ul>
            {participants.map((participant) =>
                <li
                    key={participant}
                >
                    {participant}
                </li>
            )
            }
        </ul>
    )

}