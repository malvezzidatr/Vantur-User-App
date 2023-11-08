import { renderHook, act } from '@testing-library/react-hooks';
import useRegisterViewModel from '../view.model';
import { createUser } from '../../../services/User/requests';

jest.mock('../../../services/User/requests');

const mockCreateUser = createUser as jest.Mock;

describe('useRegisterViewModel', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('deve ter o estado inicial correto', () => {
    const { result } = renderHook(() => useRegisterViewModel());

    expect(result.current.email).toBe('');
    expect(result.current.password).toBe('');
    expect(result.current.firstName).toBe('');
    expect(result.current.lastName).toBe('');
    expect(result.current.isLoading).toBe(false);
    expect(result.current.buttonIsDisabled).toBe(true);
  });

  it('deve chamar createUser e atualizar o estado ao chamar onSubmit', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useRegisterViewModel());

    act(() => {
      result.current.setEmail('test@example.com');
      result.current.setPassword('password123');
      result.current.setFirstName('John');
      result.current.setLastName('Doe');
    });

    await act(async () => {
      result.current.onSubmit();
      await waitForNextUpdate();
    });

    expect(mockCreateUser).toHaveBeenCalledWith({
      firstName: 'John',
      lastName: 'Doe',
      email: 'test@example.com',
      password: 'password123',
    });

    expect(result.current.isLoading).toBe(false);
  });

  it('deve atualizar buttonIsDisabled corretamente', () => {
    const { result } = renderHook(() => useRegisterViewModel());

    expect(result.current.buttonIsDisabled).toBe(true);

    act(() => {
      result.current.setEmail('test@example.com');
      result.current.setPassword('password123');
      result.current.setFirstName('John');
      result.current.setLastName('Doe');
    });

    expect(result.current.buttonIsDisabled).toBe(false);
  });

  it('deve lidar com erro ao chamar createUser', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useRegisterViewModel());

      act(() => {
          result.current.setEmail('test@example.com');
          result.current.setPassword('password123');
          result.current.setFirstName('John');
          result.current.setLastName('Doe');
      });

      const errorMessage = 'Mensagem de erro';
      mockCreateUser.mockRejectedValue({ response: { data: { message: errorMessage } } });

      await act(async () => {
          result.current.onSubmit();
          await waitForNextUpdate();
      });

      expect(mockCreateUser).toHaveBeenCalledWith({
          firstName: 'John',
          lastName: 'Doe',
          email: 'test@example.com',
          password: 'password123',
      });

      expect(result.current.isLoading).toBe(false);
  });
});