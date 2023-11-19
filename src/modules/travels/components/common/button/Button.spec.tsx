import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from './Button'; // Importe o componente Button apropriadamente

describe('Button Component', () => {
  it('deve chamar a função onClick quando o botão é pressionado', () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Button text="Clique em Mim" onClick={onClick} />,
    );

    fireEvent.press(getByText('Clique em Mim'));

    expect(onClick).toHaveBeenCalled();
  });
});
