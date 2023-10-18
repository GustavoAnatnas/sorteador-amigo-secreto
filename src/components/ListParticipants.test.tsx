import { render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { ListParticipants } from './ListParticipants';

describe('uma lista vazia de participantes', () => {
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

