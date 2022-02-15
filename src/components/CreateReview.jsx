import { Formik } from 'formik';
import * as yup from 'yup';
import {Pressable, Text,View} from 'react-native';
import FormikTextInput from './FormikTextInput';
import gs from '../globalStyles';
import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';
import { useEffect } from 'react/cjs/react.development';
import { useNavigate } from 'react-router-native';

const CreateReview = () => {
  const [createReview,{data,error}] = useMutation(CREATE_REVIEW,{
    onError:(error) => {
      console.log('create review error',error);
    }
  });
  const navigate = useNavigate();
  useEffect(() => {
    if(data) {
      navigate(`/repository/${data.createReview.repositoryId}`);
    }
  },[data,error]);
  const onSubmit = ({repositoryOwnerName,repositoryName,rating,review}) => {
    const repositoryId = repositoryOwnerName + '.' + repositoryName;
    const variables = {
      repositoryId:repositoryId,
      review: {
        repositoryName:repositoryName,
        ownerName:repositoryOwnerName,
        rating:Number(rating),
        text:review
      }
    }
    createReview({
      variables
    })
  }
  return(
    <Formik
      initialValues={{
        repositoryOwnerName:'',
        repositoryName:'',
        rating:'',
        review:''
      }}
      validationSchema={yup.object().shape({
        repositoryOwnerName:yup.string()
        .required('Repository owner name is required'),
        repositoryName:yup.string()
        .required('Repository name is required'),
        rating:yup.number()
        .required('Rating is required')
        .integer('Rating should be an integer')
        .min(0,'Rating should not be less than 0')
        .max(100,'Rating should not be more than 100')
      })}
      onSubmit={onSubmit}
    >
      {({handleSubmit}) => {
        return(
          <View style={[gs.padding5]}>
            <FormikTextInput name='repositoryOwnerName' placeholder='Repository owner name'/>
            <FormikTextInput name='repositoryName' placeholder='Repository name'/>
            <FormikTextInput name='rating' placeholder='Rating'/>
            <FormikTextInput name='review' placeholder='Review' multiline/>
            <Pressable style={gs.roundedBox} onPress={handleSubmit}>
              <Text style={gs.textLight}>Create a review</Text>
            </Pressable>
          </View>
      )}}
    </Formik>
  );
};

export default CreateReview;