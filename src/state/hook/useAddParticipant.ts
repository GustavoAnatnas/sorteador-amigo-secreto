import { useSetRecoilState } from "recoil"
import { listOfParticipants } from "../atom"

export const useAddParticipant = () => {
    const setList = useSetRecoilState(listOfParticipants)
    return(newParticipant: string) =>{
        setList((list) => [...list, newParticipant])
    }

}