import {render,fireEvent,waitFor} from '@testing-library/react-native';
import {Form} from '../../components/SignIn';


describe('SignIn form',() => {
  it('calls function with correct values when button is pressed',async () => {
    const func = jest.fn();
    const {getByPlaceholderText,getByTestId} = render(<Form onSubmit={func}/>);

    fireEvent.changeText(getByPlaceholderText('Username'),'kalle');
    fireEvent.changeText(getByPlaceholderText('Password'),'password');  
    fireEvent.press(getByTestId('pressable'));   
    await waitFor(() => {      
      expect(func).toHaveBeenCalledTimes(1);  
      expect(func.mock.calls[0][0]).toEqual({
        username: 'kalle',
        password: 'password'
      });                
    });

  });
});