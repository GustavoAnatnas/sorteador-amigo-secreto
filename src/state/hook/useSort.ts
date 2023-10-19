import shuffle from "just-shuffle"
import { useListParticipants } from "./useListParticipants"
import { useSetRecoilState } from "recoil"
import { resultState } from "../atom"

export const useSort = () => {
    const setResult = useSetRecoilState(resultState)
    
    const participants = useListParticipants()
    const result = new Map<string, string>()
    
    return () => {
        const participantsTotal = participants.length
        const sorted = shuffle(participants)
        
        for (let index = 0; index < participantsTotal; index++) {
            const iFriend = index === (participantsTotal - 1) ? 0 : index + 1;
            result.set(sorted[index], sorted[iFriend])
        }
        setResult(result);
    }
}