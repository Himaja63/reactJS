import React from 'react';
import {
   View, 
   Text, 
   StyleSheet,   
   TouchableOpacity,
   CheckBox,
  } from 'react-native';

export default class Main extends React.Component {
    constructor() {
        super();
        this.state = {
          check: false
          // date1: new Date()
        }
      }

    checkBoxTest() {
        this.setState ({
          check:!this.state.check
        })
      }
  render() {
    return (
        <View key = {this.props.keyval} style = {styles.note}>
            <Text style = {styles.noteText}>{this.props.val.date}</Text>
            <Text style={styles.noteText}>Due date: {this.props.val.duedate } </Text>
            <Text style = {styles.noteText}>{this.props.val.note}</Text>
            <CheckBox value ={this.state.check} onChange={() =>this.checkBoxTest()}/>
            < TouchableOpacity onPress = {this.props.deleteMethod} style = {styles.noteDelete}>                
                <Text style = {styles.noteDeleteText}>D</Text>
            </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create ({
    note:{
        position:'relative',
        padding:20,
        paddingRight:100,
        borderBottomWidth:2,
        borderBottomColor:'#ededed',
    },
    noteText:{
        paddingLeft:20,
        borderLeftWidth:10,
        borderLeftColor:'#E91E63',
    },
   
    noteDelete:{
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#2980b9',
        padding:10,
        top:10,
        bottom:10,
        right:10,
    },
    noteDeleteText:{
        color:'white',
    }
  
});



