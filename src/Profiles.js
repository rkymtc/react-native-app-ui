import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import { Ionicons } from "@expo/vector-icons";

export default function Profiles() {
  let [fontsLoaded] = useFonts({
    'heebo': 'https://fonts.googleapis.com/css2?family=Heebo:wght@600;600&display=swap',
    'heebo-thin': 'https://fonts.googleapis.com/css2?family=Heebo:wght@100&display=swap'
  });
  return (
    <View style={styles.container}>


      <View style={styles.imgcontainer}>
        <View style={styles.circle}></View>
        <Image style={styles.profile} source={require('../assets/image/man.png')}
        />
        <View style={styles.ycircle}></View>
        <View style={styles.xcircle}></View>
      </View>


      <View style={styles.boxName}>
        <Text style={styles.name}>James</Text>
        <Text style={styles.name}>Martinia Junior</Text>
      </View>


      <View style={styles.info}>
        <Text style={styles.infoText}>Actively Looking</Text>
        <Ionicons name="checkmark-circle-sharp" size={24} color="#B5ADFF"></Ionicons >
      </View>


      <View style={styles.aContainer}>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}> Applied </Text>
            <Text style={styles.cardDesc}> 98 </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}> Reviewed </Text>
            <Text style={styles.cardDesc}> 73</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}> Contacted </Text>
            <Text style={styles.cardDesc}> 19</Text>
          </View>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxTitle}> Complete Profile </Text>
          <View style={styles.boxinfo}>
            <Text style={styles.boxText}> Personel | Job experience | Certifcation </Text>
            <View style={styles.boxIon}><Ionicons name="arrow-forward" size={24} color="#000000"></Ionicons ></View>
          </View>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#F6F6F6',

  },

  imgcontainer: {
    flex: 4,
    backgroundColor: "#F6F6F6",
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  profile: {
    position: 'relative',
    display: "flex",
    width: 220,
    height: 350,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    bottom: 0,

  },
  circle: {
    backgroundColor: '#48E8CC',
    borderBottomLeftRadius: 350,
    borderBottomRightRadius: 350,
    width: 300,
    height: 160,
    margin: 0,
    position: 'absolute',

  },

  ycircle: {
    backgroundColor: '#B5ADFF',
    display: "flex",
    borderBottomLeftRadius: 70,
    borderTopLeftRadius: 70,
    width: 55,
    height: 110,
    position: 'absolute',
    transform: [{ translateX: -100 }, { translateY: -80 }],
    opacity: 0.91,

  },

  xcircle: {
    backgroundColor: '#FBE115',
    display: "flex",
    borderTopRightRadius: 70,
    borderTopLeftRadius: 70,
    width: 150,
    height: 75,
    position: 'absolute',
    opacity: 0.91,
    transform: [{ translateX: 60 }, { translateY: 0 }],
  },

  boxName: {
    padding: 20,
    backgroundColor: "#ffffff",
    flex: 0.75,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

  },
  boxIon: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  name: {
    fontFamily: 'heebo',
    paddingBottom: 5,
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 36

  },

  info: {
    flex: 0.5,
    flexDirection: 'row',
    backgroundColor: "#ffffff",
    paddingLeft: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  infoText: {
    color: "#9e9ea7",
    fontFamily: 'heebo-thin',
    fontSize: 16,
    lineHeight: 16,
    paddingTop: 4,
    paddingRight: 15,
  },
  aContainer: {
    flex: 2,
    backgroundColor: "#ffffff",
  },
  cardContainer: {
    flex: 1,
    padding: 20,
    flexDirection: 'row',
    justifyContent: "space-between",

  },
  cardTitle: {
    fontSize: 16,
    paddingTop: 10,
    color: "#9e9ea7",
    fontFamily: 'heebo-thin',
    fontSize: 16,
    lineHeight: 16,

  },
  cardDesc: {
    fontSize: 16,
    paddingTop: 10,
    color: "#000000",
    fontFamily: 'heebo',
    textAlign: "center",
    fontSize: 20,
    lineHeight: 16,
    fontWeight: "bold",
    marginTop: 4,
  },

  box: {
    flex: 1.25,
    backgroundColor: "#48E8CC",
    width: '100%',
    height: '48%',
    borderRadius: 30,
    padding: 20,

  },

  boxTitle: {
    fontSize: 24,
    paddingTop: 10,
    paddingBottom: 5,
    color: "#000000",
    fontFamily: 'heebo',
    fontWeight: "bold",
    lineHeight: 24,
  },

  boxText: {
    fontSize: 16,
    paddingTop: 10,
    color: "#000000",
    fontFamily: 'heebo',
    fontWeight: "bold",
    lineHeight: 16,

  },

  boxinfo: {
    flex: 0.75,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',

  },
});
