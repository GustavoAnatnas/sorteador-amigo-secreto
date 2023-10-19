import shuffle from "just-shuffle"

export const sort = (participants: string[]) => {
    const participantsTotal = participants.length
    const sorted = shuffle(participants)

    const result = new Map<string, string>()

        for (let index = 0; index < participantsTotal; index++) {
            const iFriend = index === (participantsTotal - 1) ? 0 : index + 1;
            result.set(sorted[index], sorted[iFriend])
        }
        return result
    }
