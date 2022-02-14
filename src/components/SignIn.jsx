import { Formik } from "formik";
import { View,Text,TouchableOpacity } from "react-native";
import * as yup from 'yup';
import FormikTextInput from "./FormikTextInput";
import gs from '../globalStyles';
import useSignIn from "../hooks/useSignIn";
import { useNavigate } from "react-router-native";

export const Form = ({onSubmit}) => {
  return (
    <Formik
      initialValues={{
        username:'',
        password:''
      }}
      validationSchema={yup.object().shape({
        username:yup.string()
        .required('Username is required'),
        password:yup.string()
        .required('Password is required')
      })}     
      onSubmit={onSubmit}
    >
      {({handleSubmit}) => {
        return(
          <View>
            <FormikTextInput 
              placeholder={'Username'}
              name={'username'}
            />
            <FormikTextInput
              placeholder={'Password'}
              name={'password'}
              secureTextEntry
            />
            <View>
              <TouchableOpacity testID='pressable'  style={[gs.margin5,gs.backgroundColorPrimary,gs.borderShape,gs.borderColorPrimary]}
                title='Sign in'
                onPress={handleSubmit}
              ><Text style={[gs.colorTextLight,gs.bold,gs.textAlignCenter]}>Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      }}

    </Formik>
  );
}


const SignIn = () => {
  const navigate = useNavigate();
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    try {
      await signIn({username:values.username,password:values.password});
      navigate('/');
    } catch(error) {
      console.log(error);
    }
  };

  return(
    <Form onSubmit={onSubmit} />
  );
}

export default SignIn;