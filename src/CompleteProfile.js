import * as React from 'react';
import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  
} from 'react-native';

import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import Tabs from '@mui/material/Tabs';
import { Button } from 'react-native-elements';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
export default function CompleteProfile() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text> Complete the profile to explore job </Text>
      </View>

      <View style={styles.menuContainer}>
        <Box >
          <Tabs
            onChange={handleChange}
            value={value}
            textColor="inherit"
            indicatorColor="primary"
          >
            <Tab label="Personel" style={{ textTransform: "none" }} />
            <Tab label="Job Experience" style={{ textTransform: "none" }} />
            <Tab label="Certifiacation" style={{ textTransform: "none" }} />
          </Tabs>
        </Box>
      </View>

      <View style={styles.boxContainer}>
        <View style={styles.boxItem}>
          <View style={styles.boxIcon}>
            <Ionicons name="logo-dropbox" style={styles.boxTextIcon} size={18} />
            <View style={{ right: '12%' }}>
              <Text style={styles.boxText}>UX.UI Design </Text>
              <Text style={styles.boxDetail}>Dropbox Fulltime</Text>
              <Text style={styles.boxDate}>April 2020 - June 2021</Text>
            </View>
            <View>
              <Button

                icon={{
                  name: 'pencil',
                  type: 'font-awesome',
                  size: 20,
                  color: 'black',
                }}

                buttonStyle={{
                  backgroundColor: 'white',
                  borderRadius: 15,

                }}

              />
            </View>
          </View>
        </View>

        <View style={styles.boxItem}>
          <View style={styles.boxIcon}>
            <Ionicons name="logo-chrome" style={styles.boxTextIcon} size={18} />
            <View style={{ right: '12%' }}>
              <Text style={styles.boxText}>Visual Design </Text>
              <Text style={styles.boxDetail}>Dropbox Fulltime</Text>
              <Text style={styles.boxDate}>May 2019 - April 2020</Text>
            </View>
            <View>
              <Button

                icon={{
                  name: 'pencil',
                  type: 'font-awesome',
                  size: 20,
                  color: 'black',
                }}

                buttonStyle={{
                  backgroundColor: 'white',
                  borderColor: 'transparent',
                  borderWidth: 0,
                  borderRadius: 15,

                }}
               

              />
            </View>
          </View>
        </View>

        <View style={[styles.boxItem, { backgroundColor: "#1C222C" }]}>
          <View style={styles.boxIcon}>
            <Ionicons name="logo-chrome" style={styles.boxTextIcon} size={18} color={"#f2f2f2"} />
            <View style={{ right: '12%' }}>
              <Text style={[styles.boxText, { color: "#f7f7f7" }]}>Graphic Design </Text>
              <Text style={[styles.boxDetail, { color: "#f2f2f2" }]}>Dropbox Fulltime</Text>
              <Text style={[styles.boxDate, { color: "#f2f2f2" }]}>May 2018 - April 2019</Text>
            </View>
            <View>
            <Button
               
               icon={{
                 name: 'check',
                 type: 'font-awesome',
                 size: 15,
                 color: 'black',
               }}
              
               
               buttonStyle={{
                 backgroundColor: 'white',
                 borderColor: 'transparent',
                 borderWidth: 0,
                 borderRadius: 30,
               }}
               containerStyle={{
                 width: 30,
                 justifyContent:"flex-start"
               
                
               }}
             />
            </View>
          </View>
        </View>
      </View>


      <View style={styles.bottomContainer}>
        <View style={styles.bottomFirstBox}>

          <View>
            <Text style={styles.bottomTitle}>Add More Business</Text>
            <Text style={styles.bottomText}>Product Designer, Typography, Google LLC</Text>
          </View>
          <View>

            <Button
              icon={{
                name: 'plus',
                type: 'font-awesome',
                size: 15,
                color: 'black',
              }}

              buttonStyle={{
                backgroundColor: 'white',
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 15,

              }}

            />
          </View>
        </View>



        <View style={[styles.bottomSecondBox, { paddingBottom: '5%' }]}>
          <View>
            <Text style={styles.bottomTitle}>Next Step</Text>
            <Text style={[styles.bottomText]}>Go to Home Screen</Text>
          </View>
          <View>
            <Button

              icon={{
                name: 'home',
                type: 'font-awesome',
                size: 15,
                color: 'black',
              }}

              buttonStyle={{
                backgroundColor: 'white',
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 15,

              }}

            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    height: '100%',
  },

  header: {
    flex: 0.5,

    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },

  menuContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  boxContainer: {
    flex: 5,
    alignItems: 'center',
    paddingVertical: '4%',
  },

  boxItem: {
    width: '90%',
    height: '33%',
    borderWidth: 1,
    borderColor: 'black',
    margin: 5,
    justifyContent: 'center',
    borderRadius: 20,
    fontSize: 8,
  },

  boxText: {
    fontWeight: 'bold',
  },

  boxDate: {
    fontSize: 10,
    fontWeight: 'normal',
  },

  boxDetail: {
    fontSize: 10,
    color: 'gray',
  },

  boxIcon: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    width: '100%',
    
  },

  boxTextIcon: {
    marginRight: 5,
  },


  bottomContainer: {
    flex: 3,
    height: '100%',
    width: '100%',
    backgroundColor: '#B5ADFF',
    marginTop: 30,
    position: 'relative',
    borderRadius: 30,


  },
  bottomFirstBox: {

    backgroundColor: '#B5ADFF',
    paddingHorizontal: 20,
    flex: 1,
    width: '100%',
    height: '48%',
    bottom: 0,
    paddingTop: 20,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',


  },
  bottomSecondBox: {
    paddingHorizontal: 20,
    flex: 1,
    width: '100%',
    height: '48%',
    left: 0,
    bottom: 0,
    paddingTop: 20,
    backgroundColor: '#48E8CC',
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },

  bottomTitle: {
    fontFamily: "heebo",
    fontSize: 20,
    marginBottom: 10,
  },


})