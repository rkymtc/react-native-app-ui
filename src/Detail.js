import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import Constants from 'expo-constants';
import { useFonts } from 'expo-font';
import { Ionicons } from "@expo/vector-icons";
const Detail = () => {

    let [fontsLoaded] = useFonts({
        'heebo': 'https://fonts.googleapis.com/css2?family=Heebo:wght@600;600&display=swap',
        'heebo-thin': 'https://fonts.googleapis.com/css2?family=Heebo:wght@100&display=swap'
    });

    return (
        <View style={styles.container}>

            <View style={styles.topBar}>
                <Icon
                    name='ios-reorder-two-outline'
                    type='ionicon'
                    color="black"
                />
            </View>
            <View style={styles.mainBox}>


                <View style={styles.mainIcon}><Icon
                    name='paypal'
                    type='font-awesome-5'
                    color='#fff'
                    size={28} />
                </View>
                <View style={styles.mainTextBox}>
                    <Text style={styles.mainTitle}>Product Designer</Text>
                    <Text style={styles.mainTag}>PayPal Inc.</Text>
                    <Text style={styles.mainAddress}>1600 Amphitheatre Parkway, Mountain View</Text>
                </View>
            </View>

            <View style={styles.detailBox}>
                <Text style={styles.detailTitle}>Job Descriptions</Text>
                <Text style={styles.detailFirstText}>We're a team of youthful, intelligent and dedicated creatives who have an unrivaled energy and passion for crafting beautiful and meaningful products.</Text>
                <Text style={styles.detailSecondText}>We strive to follow all UX processes of ideation, research and MVP for our product designs to enable output that is both aesthetic and strategic.</Text>
                <Text style={styles.detailTitle}>Responsibilities</Text>
                <Text style={styles.detailSecondText}>Keep the interface beautiful and easy to use.</Text>
            </View>

            <View style={styles.bottomContainer}>
                <View style={styles.bottomFirstBox}>
                    <View>
                        <Text style={styles.bottomTitle}>Earn Skill Badge</Text>
                        <Text style={styles.bottomText}>Skill assessments help you to stand</Text>
                        <Text style={styles.bottomText}>Out to recruiters</Text>
                    </View>
                    <View>
                        <View style={styles.boxIon}><Ionicons name="arrow-forward" size={24} color="#000000"></Ionicons ></View>
                    </View>
                </View>
                <View style={styles.bottomSecondBox}>
                    <View>
                        <Text style={styles.bottomTitle}>Similar Job Alert</Text>
                        <Text style={styles.bottomText}>Product Designer, Typography, Google LLC</Text>
                    </View>
                    <View style={styles.toggleIcon}>
                        <Icon
                            name='toggle-on'
                            type='font-awesome'
                            color='#fff'

                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 2,
        height: '100%',
        paddingTop: Constants.statusBarHeight
    },
    topBar: {
        flex: 0.5,
        height: '100%',
        paddingHorizontal: 20,
        paddingTop:10,
        alignItems: 'flex-start'
    },
    mainBox: {
        flex: 3,
        height: '100%',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    mainIcon: {
        width: 50,
        height: 50,
        padding: 10,
        backgroundColor: '#359AFF',
        alignContent: 'center',
        borderRadius: 15,
        marginBottom: 15,
    },
    mainTextBox: {
        height: '50%',
        alignItems: 'center'
    },
    mainTitle: {
        fontFamily: 'heebo',
        fontSize: 24,
        marginBottom: 10
    },
    mainTag: {
        fontFamily: 'heebo',
        fontSize: 20,
        color: '#9e9ea7',
        marginBottom: 10
    },
    mainAddress: {
        fontFamily: 'heebo',
        fontSize: 16,
        marginBottom: 10
    },
    detailBox: {
        flex: 4,
        height: '100%',
        paddingHorizontal: 20,
        marginBottom: 10
    },


    detailTitle: {
        fontFamily: 'heebo',
        fontSize: 20,
    },

    detailFirstText: {
        fontFamily: 'heebo',
        fontSize: 16,
        color: '#9e9ea7',
        marginTop: 10,
        marginBottom: 30
    },

    detailSecondText: {
        fontFamily: 'heebo',
        fontSize: 16,
        color: '#9e9ea7',
        marginTop: 10,
        marginBottom: 20
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
        flex: 1,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#B5ADFF',
        height: '48%',
        borderRadius: 30,
        paddingTop: 20,
        marginBottom: 10
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
        justifyContent: 'space-between'
    },

    bottomTitle: {
        fontFamily: "heebo",
        fontSize: 20,
        marginBottom: 10,
    },

    boxIon: {
        backgroundColor: "#ffffff",
        borderRadius: 10,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    toggleIcon: {
        backgroundColor: "#000",
        width: 25,
        height: 12,
        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: 15,
    }


})

export default Detail