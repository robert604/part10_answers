import {Alert,TextInput,Button} from 'react-native';
import { Field,Form,Formik } from 'formik';


const SignIn = () => {
  //return <Text>The sign in view</Text>;
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
    onSubmit={values => {
      console.log('values',values);
      Alert.alert(values);
    }}
  >
  {(isValid,dirty) => {
  return(
    <Form>
      <Field
        label='Username'
        placeholder='username'
        name='username'
        component={TextInput}
      />
      <Field
        label='Password'
        placeholder='password'
        name='password'
        component={TextInput}
      />
      <Button
        title='sign in'
      />
    </Form>

  );
  }}
  </Formik>
  );
};

export default SignIn;