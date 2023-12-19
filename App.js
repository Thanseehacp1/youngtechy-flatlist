import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';
const App = () => {
 
  const [activity1,setActivity1]=React.useState([
    {
      title:"coffee",
      item:"with Peter Bower",
     icon: <Feather name="coffee" size={24} color="white" />,
      rate:"$50",
    },
    
    
   
    {
      title:"Gift",
      item:"for Audrey Campbell",
      rate:"$1500",
      icon: <AntDesign name="gift" size={24} color="white" />,
    },
    {
      title:"Subscription",
      item:"made with chapman",
      rate:"$500",
    icon:  <AntDesign name="mail" size={24} color="white" />
    },
  
  ]);
  const [activity2,setActivity2]=React.useState([
    {
      title:"Tea & Snacks",
      item:"with Peter Bower",
    
      rate:"$50",
      icon: <Feather name="coffee" size={24} color="white" />,
    },
    {
      title:"Subscription",
      item:"made with chapman",
      rate:"$500",
    
      icon:  <AntDesign name="mail" size={24} color="white" />
    },
    
  ]);
  return (
   
    <View style={{
      //flex:1,
      //height:20,
      //justifyContent:"auto",
      //alignItems:"center",
      marginTop:50,
      marginLeft:50,
    }}>
      <Text style={{
        color:"black",
        fontSize:20,
        fontWeight:"bold",
      }}>::  Dashboard</Text>
    
    <View style={{
      backgroundColor:"black",
      height:100,
      width:250,
      borderRadius:30,
      justifyContent:"center",
      alignSelf:"center",
      marginTop:20,
      alignItems:"center",
    }}>
      <Text style={{
        color:"white",
        fontSize:30,
        fontWeight:"bold",
      }}>$ 17,800
      </Text>
    </View>
<View style={{
  marginTop:20,
  flexDirection:"row",
}}>
  <Text style={{
    fontWeight:"bold",
  }}>All Expenses</Text>
  <View style={{
    height:25,
    width:70,
    borderRadius:20,
    backgroundColor:"#e5e5e5",
    marginLeft:150,
    alignItems:"center",
    justifyContent:"center",
  }}>
    <Text style={{
      fontSize:11,
      color:"#9d9d9d",
    }}>View All</Text>
  </View>
</View>
<View style={{
  marginTop:5,
}}>
  <Text style={{
    fontSize:10,
    color:"#9d9d9d",
  }}>
   Today</Text>
</View>
<FlatList
data={activity1}

renderItem={({item})=>(
  <View style={{
 flex:1,
  height:60,
  width:290, 
  backgroundColor:"#e5e5e5",
      marginTop:10,
  borderRadius:20,
  justifyContent:"center",
  //alignItems:"center",
  //marginLeft:10,
}}>          
    <View style={{
                 // flex: 1,
                  backgroundColor: "pink",
                  marginLeft: 4,
                  alignSelf:"flexStart",
                  alignContent:"center",
                  alignItems:"center",
                  justifyContent:"center",
                    marginTop:30,
                // marginBottom:1,
                  width: 40,
                  height: 30,
                  borderRadius: 10,
                }}
              >
  
                  {item.icon}
              
                </View>  
 
  <Text style={{
    color:"black",
    fontSize:16,
    fontWeight:"bold",
    alignItems:"center",
    marginLeft:50,
   // marginBottom:5,
  }}>
{item.title}
</Text>

  <Text style={{
    color:"black",
    fontSize:12,
    marginLeft:50,
    //marginBottom:8,
  }}>
{item.item}
 

   </Text>
   <Text style={{
  // marginRight:50,
    //alignSelf:"flex-end",
    color:"black",
    fontSize:12,
    marginBottom:40,
   // marginRight:70,
   // marginTop:30,
    marginLeft:200,
  }}>
  {item.rate}
</Text>
   </View>
 
 
 
)}
  />  
  

<View style={{
  marginTop:5,
}}>
  <Text style={{
    fontSize:10,
    color:"#9d9d9d",
  }}>
   Yesterday</Text>
</View>
<FlatList
data={activity2}

renderItem={({item,icon})=>(

<View
  style={{
    //flexDirection:"row",
    height:60,
    width:290,
    backgroundColor:"#e5e5e5",
        marginTop:10,
    borderRadius:20,
    justifyContent:"center",
    //alignItems:"center",
    //marginLeft:10,
  }}>
  <View style={{
                 // flex: 1,
                  backgroundColor: "pink",
                  marginLeft: 6,
                  alignSelf:"flexStart",
                  alignContent:"center",
                  alignItems:"center",
                  justifyContent:"center",
                    marginTop:10,
                // marginBottom:10,
                  width: 40,
                  height: 30,
                  borderRadius: 10,
                }}
              >

                  {item.icon}
                  </View>      
  <Text style={{
    color:"black",
    fontSize:16,
    fontWeight:"bold",
    alignItems:"center",
    marginLeft:40,
   // marginBottom:20,
  }}>
{item.title}

  </Text>
  
  <Text style={{
    color:"black",
    fontSize:12,
    marginLeft:40,
    //marginBottom:40,
  }}>
{item.item}

  </Text>
 
  <Text style={{
  // marginRight:50,
    //alignSelf:"flex-end",
    color:"black",
    fontSize:12,
    marginBottom:40,
   // marginRight:70,
   // marginTop:30,
    marginLeft:200,
  }}>
  {item.rate}
</Text>
</View>
)}
  />  
  
</View>

  );
}

export default App

const styles = StyleSheet.create({})