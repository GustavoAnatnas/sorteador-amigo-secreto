import { sort } from "./sort";

describe('dado um sorteio de um amigo secreto', () => {
    test('cada participante não sorteie o próprio nome', () => {
        
        const participants = ['test', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7', 'test8']

         const sorted = sort(participants)
         participants.forEach((participant) => {
            const amigoSecreto = sorted.get(participant)
            expect(amigoSecreto).not.toBe(participant)
         })
    })
});