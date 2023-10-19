
import { useListParticipants } from "./useListParticipants"
import { useSetRecoilState } from "recoil"
import { resultState } from "../atom"
import { sort } from "../helpers/sort"

export const useSort = () => {
    const participants = useListParticipants()
    const setResult = useSetRecoilState(resultState)

    return () => {
        const result = sort(participants)
        setResult(result);
    }
}