import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Text, TextInput } from 'react-native';
import { db } from '../config1';
import { ref, onValue } from 'firebase/database';


const FetchData = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const starCountRef = ref(db, 'application/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const newPosts = Object.keys(data).map(key => ({
        id: key,
        ...data[key]
      }));
      setData(newPosts);
    });
  }, []);

  const filteredData = data.filter(item => {
    const regex = new RegExp(searchQuery, 'gi');
    return (
      regex.test(item.schoolname) ||
      regex.test(item.collegename) ||
      regex.test(item.name) ||
      regex.test(item.fathername)
    );
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Fetch Data</Text>
      <TextInput
        style={styles.searchInput}
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search"
      />
      {filteredData.map(item => (
        <View style={styles.item} key={item.id}>
          <Text>Student name: {item.name}</Text>
          <Text> College name  {item.collegename}</Text>
          <Text>Father name {item.fathername}</Text>
          <Text>Accuse address: {item.schoolname}</Text>
          <Text>Accused Date of Arrest: {item.dob}</Text>
        
          <Text></Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#afeeee',
    borderRadius: 20,
    margin: 20,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign:'center'
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
    width: '100%',
  },
  item: {
    backgroundColor: '#6495ed',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default FetchData;
