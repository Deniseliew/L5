import React from 'react';
import { Text, View, Button, Image, SectionList, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";


const datasource = [
  {data :[
      {name: 'Pikachu', num: '25'},
      {name: 'Voltorb', num: '100'}
    ],
    icon: 'bolt', element: 'ELECTRIC', bgColor: 'yellow', textColor: '#DAA520'},
  {data :[
      {name: 'Squirtle', num: '7'},
      {name: 'Wartotle', num: '8'}
    ],
    icon: 'droplet', element: 'WATER', bgColor: 'skyblue', textColor: '#1E90FF'},
  {data :[
      {name: 'Charmander', num: '4'},
      {name: 'Growlithe', num: '58'}
    ],
    icon: 'fire', element: 'FIRE', bgColor: 'lightsalmon', textColor: '#C30010'},
  {data :[
      {name: 'Gastly', num: '92'},
      {name: 'Haunter', num: '93'}
    ],
    icon: 'ghost', element: 'GHOST', bgColor: 'plum', textColor: '#301934'}
];

const styles = StyleSheet.create({
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
    borderWidth: 1,
  },
  headerText: {
    fontSize: 18,
    marginLeft: 10,
  },
  opacityStyle: {
    padding: 10,
    borderBottomWidth: 1,
    backgroundColor: '#f0f8ff',
    borderWidth: 1,
  },
  textStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    marginLeft: 50,
    textAlign: 'left',
  },
  imageStyle: {
    width: 200,
    height: 300,
    marginLeft: 10,
    borderRadius: 10,
  },
});

const renderItem = ({item}) => {
  let imageLink = "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_" + item.num + "-2x.png"

  return (
      <TouchableOpacity style = {styles.opacityStyle}>
        <View style = {{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <Text style = {[styles.textStyle, {fontFamily: 'ArialCustom' }]}>{item.name}</Text>
          <Image source = {{uri:imageLink}} style={styles.imageStyle}/>
        </View>
      </TouchableOpacity>
  )
}

const App = () => {
  return (
      <View style={{flex: 1, margin: 10, paddingTop: 50}}>
        <View style={{borderWidth:1}}>
          <View style={{padding:20}}><Button title='Add Pokemon'/></View>
        </View>
        <View style={{paddingTop: 10, paddingBottom: 110}}>
          <StatusBar hidden={true}/>
          <SectionList
              sections={datasource}
              renderItem={renderItem}
              renderSectionHeader={({ section: { element, bgColor, icon, textColor } }) => (
                  <View style={[styles.sectionHeader, { backgroundColor: bgColor }]}>
                    <Icon name={icon} size={20} color={textColor} />
                    <Text style={[styles.headerText, { color: textColor }]}>{element}</Text>
                  </View>
              )}
          />
        </View>
      </View>
  );
};

export default App;
