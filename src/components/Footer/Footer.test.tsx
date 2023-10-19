import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { useListParticipants } from "../../state/hook/useListParticipants";
import Footer from "./Footer";


jest.mock('../../state/hook/useListParticipants', () => {
    return {
        useListParticipants: jest.fn()
    }
})

const mockNavigate = jest.fn()
jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavigate
    }
}
)

describe('onde não existem participantes suficientes', () => {
    beforeEach(() => {
        (useListParticipants as jest.Mock).mockReturnValue([])
    })

    test('a brincadeira não pode ser iniciada', () => {
        render(
            <RecoilRoot>
                <Footer />
            </RecoilRoot>
        )
        const button = screen.getByRole('button')
        expect(button).toBeDisabled()
    })
})

describe('onde existem participantes suficientes', () => {
    beforeEach(() => {
        (useListParticipants as jest.Mock).mockReturnValue(['test', 'test', 'test'])
    })

  test('a brincadeira pode ser iniciada', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    )
    const button = screen.getByRole('button')
    expect(button).toBeEnabled()
  })

  test('a brincadeira foi iniciada', () => {
    render(
        <RecoilRoot>
          <Footer />
        </RecoilRoot>
      )
      const button = screen.getByRole('button')
      fireEvent.click(button)

      expect(mockNavigate).toHaveBeenCalledTimes(1)
      expect(mockNavigate).toHaveBeenCalledWith('/sorteio')
  })

})