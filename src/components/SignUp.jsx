import { Formik } from "formik";
import * as yup from 'yup';
import {Pressable, Text,View} from 'react-native';
import FormikTextInput from './FormikTextInput';
import gs from '../globalStyles';
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutations";

import { useNavigate } from "react-router-native";
import useSignIn from "../hooks/useSignIn";

const SignUp = () => {
  const [createUser] = useMutation(CREATE_USER)
  const navigate = useNavigate();
  const [signIn] = useSignIn();


  const onSubmit = async ({username,password}) => {
    console.log('submitted sign up',username,password);
    try {    
      await createUser({variables:{
        user:{
          username,
          password
        }
      }});
      await signIn({username:username,password:password});
      navigate('/');
    } catch(error) {
      console.log(error);
    }
  }

  return(
    <Formik
      initialValues={{
        username:'',
        password:'',
        passwordConfirmation:''
      }}
      validationSchema={yup.object().shape({
        username:yup.string()
        .required('Username is required')
        .min(1,'Username is too short')
        .max(30,'Username is too long'),
        password:yup.string()
        .required('Password is required')
        .min(5,'Password is too short')
        .max(50,'Password is too long'),
        passwordConfirmation:yup.string()
        .required('Password confirmation is required')
        .oneOf([yup.ref('password')],'Passwords do not match')
        
      })}
      onSubmit={onSubmit}
    >
      {({handleSubmit}) => {
        return(
          <View style={[gs.padding5]}>
            <FormikTextInput name='username' placeholder='Username'/>
            <FormikTextInput name='password' placeholder='Password'/>
            <FormikTextInput name='passwordConfirmation' placeholder='Password confirmation'/>
            <Pressable style={gs.roundedBox} onPress={handleSubmit}>
              <Text style={gs.textLight}>Sign up</Text>
            </Pressable>
          </View>          
        );
      }}
    </Formik>
  );
}

export default SignUp;