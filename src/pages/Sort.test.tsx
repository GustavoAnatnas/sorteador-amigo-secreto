import { render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { useListParticipants } from "../state/hook/useListParticipants";
import { Sort } from "./Sort";

jest.mock('../state/hook/useListParticipants', () => {
    return {
        useListParticipants: jest.fn()
    }
})

describe('na pagina de sorteio', () => {
    const participants = ['test', 'test', 'test']

    beforeEach(() => {
        (useListParticipants as jest.Mock).mockReturnValue(participants)
    })
    test('todos os participantes podem exibir o seu amigo secreto', () => {
        render(
            <RecoilRoot>
                <Sort />
            </RecoilRoot>

        )
        const options = screen.queryAllByRole('option')
        expect(options).toHaveLength(participants.length)
    })

})