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
      <View style={[gs.borderShape,gs.borderColorTertiary,gs.margin5]}>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={gs.marginLeft10}
        {...props}
      />
      </View>
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;