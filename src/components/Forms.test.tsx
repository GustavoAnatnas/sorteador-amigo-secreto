import { render, screen } from "@testing-library/react";
import Forms from "./Forms";

test('quando o input está vazio, novos participantes não podem ser adicionados', () => {
    render(<Forms/>)

    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    const button = screen.getByRole('button')

    expect(input).toBeInTheDocument()
    expect(button).toBeDisabled()
})