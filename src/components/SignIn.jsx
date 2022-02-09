import { Formik } from "formik";
import { View,Button,Text,TouchableOpacity } from "react-native";
import FormikTextInput from "./FormikTextInput";
import gs from '../globalStyles';

const SignIn = () => {
  return(
    <Formik
      initialValues={{
        username:'',
        password:''
      }}
      validate={(values) => {
        const errors ={};
        if(!values.username) {
          errors.username = 'Required';
        }
        if(!values.password) {
          errors.password = 'Required';
        }        
        return errors;
      }}      
      onSubmit={(values) => {
        console.log('values',values);
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