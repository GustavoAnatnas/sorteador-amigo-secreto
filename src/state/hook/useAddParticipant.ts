import { useRecoilValue, useSetRecoilState } from "recoil"
import { errorState, listOfParticipants } from "../atom"

export const useAddParticipant = () => {
    const setList = useSetRecoilState(listOfParticipants)
    const list = useRecoilValue(listOfParticipants)
    const setError = useSetRecoilState(errorState)

    return(newParticipant: string) =>{
        if(list.includes(newParticipant)){
            setError('Nomes duplicados não são permitidos!')
            setTimeout(() => {
                setError('')
            }, 5000)
        }
        setList((list) => [...list, newParticipant])
    }

}