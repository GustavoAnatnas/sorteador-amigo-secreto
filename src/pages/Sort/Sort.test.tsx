import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { useListParticipants } from "../../state/hook/useListParticipants";
import { Sort } from "./Sort";
import { useSortResult } from "../../state/hook/useSortResult";

jest.mock('../state/hook/useListParticipants', () => {
    return {
        useListParticipants: jest.fn()
    }
})

jest.mock('../state/hook/useSortResult', () => {
    return {
        useSortResult: jest.fn()
    }
})

describe('na pagina de sorteio', () => {
    const participants = ['test1', 'test2', 'test3']
    const result = new Map([
        ['test1', 'test2'],
        ['test2', 'test3'],
        ['test3', 'test1']
    ]
    )

    beforeEach(() => {
        (useListParticipants as jest.Mock).mockReturnValue(participants);
        (useSortResult as jest.Mock).mockReturnValue(result);
    })

    test('todos os participantes podem exibir o seu amigo secreto', () => {
        render(
            <RecoilRoot>
                <Sort />
            </RecoilRoot>

        )
        const options = screen.queryAllByRole('option')
        expect(options).toHaveLength(participants.length + 1)
    })

    test('o amigo secreto é exibido quando solicitado', () => {
        render(
            <RecoilRoot>
                <Sort />
            </RecoilRoot>
        )
        const select = screen.getByPlaceholderText('Selecione o seu nome')
        fireEvent.change(select, {
            target: {
                value: participants[0]
            }
        })
        const button = screen.getByRole('button')
        fireEvent.click(button)
        const amigoSecreto = screen.getByRole('alert')
        expect(amigoSecreto).toBeInTheDocument()

    })
})