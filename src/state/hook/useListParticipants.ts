import { useRecoilValue } from "recoil"
import { listOfParticipants } from "../atom"

export const useListParticipants = () => {
    return useRecoilValue(listOfParticipants)
}