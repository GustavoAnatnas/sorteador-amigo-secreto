import { fireEvent, render, screen } from "@testing-library/react";
import Forms from "./Forms";
import { RecoilRoot } from "recoil";

test('quando o input está vazio, novos participantes não podem ser adicionados', () => {
    render(<Forms />)

    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    const button = screen.getByRole('button')

    expect(input).toBeInTheDocument()
    expect(button).toBeDisabled()
})

test('adicionar um participante caso exista um nome preenchido', () => {
    render(
        <RecoilRoot>
            <Forms />
        </RecoilRoot>
    )

    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    const button = screen.getByRole('button')

    fireEvent.change(input, {
        target: {
            value: 'Gustavo'
        }
    })
    fireEvent.click(button)
    expect(input).toHaveFocus()
    expect(input).toHaveValue('')
})