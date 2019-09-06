import React from "react"
import { View, Text, Dimensions, TextInput, FlatList, ImageBackground, StyleSheet } from 'react-native'
import _ from 'lodash'

const {width:WIDTH}=Dimensions.get('window')

class Lodas extends React.Component {
   state = {
       text: [],
       data: [
           {
               nama: 'Hafif.'
           },
           {
               nama: 'Rifki.'
           },
           {
               nama: 'Dayat.'
           },
           {
               nama: 'Miko.'
           },
           {
               nama: 'Yusup.'
           }]
   }
   test = () => {
       if (_.isEmpty(this.state.data)) {
           alert('data ini kosong')
       }
       else {
           alert('data ini ada')
       }
   }
   renderItems = ({ item, index }) => {
       const {nama}=item
       return(
           <Text style={Styles.TextFlatList}>{nama}</Text>
       )
   }
   render() {
       return (
        <ImageBackground style={Styles.ImageBackground} source={require('../image/images.jpeg')}>
           <View style={Styles.ViewOne}>
                <View style={Styles.ViewTuo}>
                    <Text style={Styles.TextViewTuo}>DATA SANTRI PONDOK PROGRAMMER.</Text>

                    <FlatList style={Styles.FlatList}
                        data={_.take(this.state.data,3)}
                        keyExtractor={item => item.toString()}
                        renderItem={this.renderItems} 
                    />
                    <TextInput style={Styles.TextInput}
                        onChangeText={() => this.state.data}
                        placeholder="Username"
                        backgroundColor="white"

                    />
                    <View style={Styles.ViewTri}>
                        <Text onPress={() => this.test()} style={Styles.TextViewTri}>Next</Text>
                    </View>
                </View>
                
           </View>
           <Text style={Styles.TextPembuat}>@rizqan_23</Text>
        </ImageBackground>
      )
   }
}
export default Lodas;


const Styles = StyleSheet.create({
    ImageBackground:{
        width:'100%', 
        height:'100%'
    },
    ViewOne:{
        flex:1, 
        justifyContent:'center'
    },
    ViewTuo:{
        alignItems:'center'
    },
    TextViewTuo:{
        fontSize:20, 
        width:WIDTH - 50, 
        marginBottom:40, 
        color:'white'
    },
    FlatList:{
        marginBottom:80, 
        width:WIDTH - 100,
    },
    TextFlatList:{
        fontSize:18, 
        color:'white'
    },
    TextInput:{
        paddingLeft:10, 
        fontSize:18, 
        borderBottomWidth:1, 
        height:40, 
        marginBottom:10, 
        width:WIDTH - 50,
    },
    ViewTri:{
        backgroundColor:'green', 
        width:100, 
        height:40, 
        justifyContent:'center', 
        alignItems:'center', 
        marginTop:20
    },
    TextViewTri:{
        fontSize:18, 
        color:'white', 
        fontWeight:'bold'
    },
    TextPembuat:{
        fontSize:12, 
        fontStyle:'italic', 
        color:'white', 
        alignItems:'center', 
        marginBottom:10, 
        paddingLeft:20
    }



})