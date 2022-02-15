import { StyleSheet,Text,View } from 'react-native';
import { useField } from 'formik';
import TextInput from './TextInput';
import gs from '../globalStyles';


const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
  },
  padding0:{
    padding:0
  }
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <View style={[gs.margin5]}>
      <TextInput {...props} style={[gs.text,gs.borderShape,showError ? gs.borderColorRed : gs.borderColorTertiary,gs.padding5]}
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}

        {...props}
      />
      {showError && <Text style={[gs.text,gs.marginTop5,gs.colorTextError]}>{meta.error}</Text>}      
      </View>

    </>
  );
};

export default FormikTextInput;