import React, {Component} from 'react';
import {AppRegistry, Dimensions,
  FlatList, StyleSheet, 
  Text, View} from 'react-native';
  


type Props = {};
export default class MyApp extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.itemView}>
          <Text style={styles.itemDate}>
              Date
          </Text>
          <Text style={styles.itemCount}>
              Count
          </Text>
        </View>
      
        <FlatList 
          data={[
            {
              date: "9/8/20",
              itemCount: 10
            },
            {
              date: "9/10/20",
              itemCount: 12
            },
            {
              date: "9/25/20",
              itemCount: 5
            }
          ]}
          renderItem={
            ({item}) => (
              <View style={styles.itemView}>
                <Text style={styles.itemDate}>
                  {item.date} 
                </Text>
                <Text style={styles.itemCount}>
                  {item.itemCount}
                </Text>
              </View>
             )
          }/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2A2734',
    marginTop: 30
  },
  other: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  
  tableHeader: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 5,
    flex: 0.3
  },
  
  table
  itemCount: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 5,
    flex: 0.3
  },
  itemDate: {
    textAlign: 'left',
    color: 'black',
    marginBottom: 5,
    flex: 0.7
  },
  itemView: {
    backgroundColor: "blue",
    flexDirection: "row",
    flex: 1,
    width: Dimensions.get("window").width - 20
  }
});

// You must register the main component
// with the same name as the project
AppRegistry.registerComponent(
  'Spending Tracker', () => MyApp
);
