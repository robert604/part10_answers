
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
//import { useState,useEffect } from 'react';
import {useQuery} from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';
import { useNavigate } from 'react-router-native';



const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});


const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({repositories}) => {
  const navigate = useNavigate();
  
  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      // other props
      renderItem={({item}) => {
        const onPress = () => {
          console.log('pressed item',item.id);
          navigate(`/repository/${item.id}`);
        }      

        return(
          <Pressable onPress={onPress} >
            <RepositoryItem item={item}/>
          </Pressable>

        );
      }}
    />
  );
}


const RepositoryList = () => {
  /*
  const [repositories, setRepositories] = useState();
  const fetchRepositories = async () => {
    // Replace the IP address part with your own IP address!
    const response = await fetch('http://192.168.31.5:5000/api/repositories');
    const json = await response.json();

    console.log('json',json);

    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);
*/

  const {data,error,loading} = useQuery(GET_REPOSITORIES,{
    fetchPolicy: 'cache-and-network'
  });

  const repositories = loading ? null : data.repositories;

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;
