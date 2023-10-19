import { useRecoilValue } from "recoil"
import { resultState } from "../atom"

export const useSortResult = () => {
    return useRecoilValue(resultState)

}