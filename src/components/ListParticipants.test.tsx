import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { ListParticipants } from './ListParticipants';
import { useListParticipants } from '../state/hook/useListParticipants';

jest.mock('../state/hook/useListParticipants', () => {
    return {
        useListParticipants: jest.fn()
    }
})

describe('uma lista vazia de participantes', () => {
    beforeEach(() => {
        (useListParticipants as jest.Mock).mockReturnValue([])
    })

    test('não deve renderizar nenhum item', () => {

        render(
            <RecoilRoot>
                <ListParticipants />
            </RecoilRoot>
        )

        const itens = screen.queryAllByRole('listitem')
        expect(itens).toHaveLength(0)
    })
})

describe('uma lista preenchida de participantes', () => {
    const participants = ['Jhony', 'Gabe']
    beforeEach(() => {
        (useListParticipants as jest.Mock).mockReturnValue(participants)
    })
    test('não deve renderizar nenhum item', () => {

        render(
            <RecoilRoot>
                <ListParticipants />
            </RecoilRoot>
        )

        const itens = screen.queryAllByRole('listitem')
        expect(itens).toHaveLength(participants.length)
    })
})