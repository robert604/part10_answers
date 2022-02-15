
import { FlatList, View, StyleSheet, Pressable,Text } from 'react-native';
import RepositoryItem from './RepositoryItem';
//import { useState,useEffect } from 'react';
import {useQuery} from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';
import { useNavigate } from 'react-router-native';
import { Menu,Button,Provider as PaperProvider} from 'react-native-paper';
import { useState } from 'react';
import gs from '../globalStyles';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});


const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({repositories,orders,orderBy,setOrderBy}) => {
  const navigate = useNavigate();

  const [ordering,setOrdering] = useState({orderingName:'latest first'});
  const [showMenu,setShowMenu] = useState(false);

  const openMenu = () => setShowMenu(true);
  const closeMenu = () => setShowMenu(false);
  const latestFirst = () => {
    setOrdering({orderingName:'latest first'});
    setOrderBy(orders.latest);
    closeMenu();
  }
  const highestRatedFirst = () => {
    setOrdering({orderingName:'highest rated first'});
    setOrderBy(orders.highestRating);
    closeMenu();    
  }
  const lowestRatedFirst = () => {
    setOrdering({orderingName:'lowest rated first'});
    setOrderBy(orders.lowestRating);
    closeMenu();    
  }    
  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];
  return (
    <PaperProvider>
      <FlatList
        data={repositoryNodes}
        ListHeaderComponent={
          <Menu
            visible={showMenu}
            onDismiss={closeMenu}
            anchor={
              <Pressable style={[gs.flexContainerRow,gs.roundedBox]} onPress={openMenu}>
                <Text style={gs.textLight}>{`Ordered by ${orderBy.orderingName}`}</Text>
                <Button style={gs.colorLight} icon='menu-down-outline'></Button>
              </Pressable>
            }
          >
            <Menu.Item onPress={latestFirst} title='Latest first'/>
            <Menu.Item onPress={highestRatedFirst} title='Highest rated first'/>
            <Menu.Item onPress={lowestRatedFirst} title='Lowest rated first'/>                    
          </Menu>
        }
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
    </PaperProvider>
  );
}
/*
anchor={<Button onPress={openMenu}>{`Ordered by ${ordering.orderingName}`}</Button>}

        ListHeaderComponent={
          <Menu
            visible={showMenu}
            onDismiss={closeMenu}
            anchor={<Button onPress={openMenu}>{`Ordered by ${ordering.orderingName}`}</Button>}
          >
            <Menu.Item onPress={latestFirst} title='Latest first'/>
            <Menu.Item onPress={highestRatedFirst} title='Highest rated first'/>
            <Menu.Item onPress={lowestRatedFirst} title='Lowest rated first'/>                    
          </Menu>
        }
*/

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
  const orders = {
    highestRating:{orderBy:'RATING_AVERAGE',orderDirection:'DESC',orderingName:'highest rated first'},
    lowestRating: {orderBy:'RATING_AVERAGE',orderDirection:'ASC',orderingName:'lowest rated first'},
    latest: {orderBy:'CREATED_AT',orderDirection:'DESC',orderingName:'latest first'},
  }

  const [orderBy,setOrderBy] = useState(orders.latest);
  const {data,error,loading} = useQuery(GET_REPOSITORIES,{
    fetchPolicy: 'cache-and-network',
    variables:orderBy
  });

  const repositories = loading ? null : data.repositories;

  return <RepositoryListContainer repositories={repositories} orders={orders} orderBy={orderBy} setOrderBy={setOrderBy}/>;
};

export default RepositoryList;
