
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
//import { useState,useEffect } from 'react';
import {useQuery} from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';


const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});


const ItemSeparator = () => <View style={styles.separator} />;

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

  console.log('repository list');
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
        return(
          <RepositoryItem item={item}/>

        );
      }}
    />
  );
};

export default RepositoryList;
