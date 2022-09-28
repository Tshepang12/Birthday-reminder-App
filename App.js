import React, { useState } from 'react';

import { SafeAreaView, StyleSheet, View, Dimensions, TextInput,TouchableOpacity ,Text  } from 'react-native';

import EventCalendar from 'react-native-events-calendar';

let { width } = Dimensions.get('window');

const App = () => {

  const  [start, setStart] =useState('');
  
  const  [end, setEnd] =useState('');
  
  const  [title, setTitle] =useState('');
  
  const  [summary, setSummary] =useState('');

  const [events, setEvents] = useState([

      
    {
      start: '2022-09-19',
      end: '2020-01-01 ',
      title: 'New Year Party',
      summary: 'xyz Location',
    },
  
  ]);
   
    const addBirthday=(()=>{
    
      setEvents((events)=>[...events,{start:start , end: end ,title: title, summary:summary }])
      console.log(events);
    })

  const eventClicked = (event) => {
    alert(JSON.stringify(event));
  };




  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.container}>
      <View>
        <TextInput type="date" placeholder="  add starting date..." style={styles.input} onChangeText={(start=> setStart(start))} />
        
           <TextInput type="date" placeholder="  add ending date..." style={styles.input} onChangeText={(end=> setEnd(end))}/>

 <TextInput type="text" placeholder="  enter title..." style={styles.input} onChangeText={(title=> setTitle(title))} />

<TextInput type="text" placeholder="  add summary..." style={styles.input} onChangeText={(summary=> setSummary(summary))} />
  

<TouchableOpacity        style={styles.btn} onPress= {addBirthday}>

       <Text style={styles.text}>Add</Text >


    </TouchableOpacity>


 
    
      </View>
        <EventCalendar
          eventTapped={eventClicked}
          events={events}
          width={width}
          size={60}
         
          scrollToFirst
        />
      
      </View>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
   input:{
  width:300,
height: 50,
  backgroundColor: 'lightgrey',
  borderRadius: 20,

  },
    btn:{
    marginTop:12,
    backgroundColor: 'blue',
    width: 150,
    height: 40,
    marginLeft:66,
    paddingTop: 15,
  },
  text:{
    textAlign: 'center',
    color: 'white',
    marginTop: '5',
  }
});

