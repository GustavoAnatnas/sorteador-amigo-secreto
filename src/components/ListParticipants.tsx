export const ListParticipants = () => {
    const participants: string[] = []
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