import { Formik } from "formik";
import { View,Text,TouchableOpacity } from "react-native";
import * as yup from 'yup';
import FormikTextInput from "./FormikTextInput";
import gs from '../globalStyles';
import useSignIn from "../hooks/useSignIn";

const SignIn = () => {
  const [signIn] = useSignIn();

  return(
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
      onSubmit={async (values) => {
        console.log('values',values);
        try {
          const {data} = await signIn({username:values.username,password:values.password});
          console.log('got signin data',data);
        } catch(error) {
          console.log(error);
        }
      }}
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
              <TouchableOpacity   style={[gs.margin5,gs.backgroundColorPrimary,gs.borderShape,gs.borderColorPrimary]}
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

export default SignIn;