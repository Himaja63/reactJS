import React from 'react';
import {
   View, 
   Text, 
   StyleSheet,
   TextInput,
   ScrollView,
   TouchableOpacity
  } from 'react-native';
  import DatePicker from 'react-native-datepicker';

  import Note from './Note';

export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            noteArray: [],
            noteText: '',
            check: false,
            duedate: '',
        }
    }


  render() {

    let notes = this.state.noteArray.map((val, key) => {
        return <Note key = {key} keyval={key} val={val}
            deleteMethod={() => this.deleteNote(key)} />
    });

    return (
      <View style = {styles.container}>        

          <View style = {styles.header}>
              <Text style = {styles.headerText}>- To Do List -</Text>
          </View>

          <ScrollView style = {styles.scrollContainer}>
              {notes}
          </ScrollView>

          <View style = {styles.footer}>
            <TextInput 
                style = {styles.textInput}
                onChangeText = {(noteText) => this.setState({noteText})}
                value = {this.state.noteText}
                placeholder = '>note'
                placeholderTextColor = 'white'
                underlineColorAndroid='transparent'>
            </TextInput>
            <DatePicker
                style={{width: 200}}
                duedate={this.state.duedate}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate="2020-05-18"
                maxDate="2021-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36
                  }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(duedate) => {this.setState({duedate: duedate})}}
      />
               
          </View>

          <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
              <Text style = {styles.addButtonText}>+</Text>

          </TouchableOpacity>
          
      </View>
    );
  }

  addNote() {
      if (this.state.noteText) {
          var d = new Date();
          this.state.noteArray.push({
              'date' : d.getFullYear() +
              "/" + (d.getMonth() + 1) +
              "/" + d.getDate(),
              'duedate':this.state.duedate,
              'note' : this.state.noteText              
          });
          this.setState({noteArray : this.state.noteArray})
          this.setState({noteText:''});
          this.setState({duedate: ''});
      }
  }

  deleteNote(key) {
      this.state.noteArray.splice(key, 1);
      this.setState({ noteArray: this.state.noteArray })
  }

}

const styles = StyleSheet.create ({
  container: {
      flex: 1,
  },
  header: {
      backgroundColor : '#E91E63',
      alignItems:'center',
      justifyContent:'center',
      borderBottomWidth:10,
      borderBottomColor:"#ddd",
  },
  headerText:{
      color:'white',
      fontSize:18,
      padding:26,
  },
  scrollContainer:{
      flex:1,
      marginBottom:100,
  },
  footer:{
      position:'absolute',
      bottom:0,
      left:0,
      right:0,
      zIndex:10,
  },
  textInput:{
      alignSelf:'stretch',
      color:'#fff',
      padding:20,
      backgroundColor:'#252525',
      borderTopWidth:2,
      borderTopColor:'#ededed'
  },
  addButton: {
      position:'absolute',
      zIndex:11,
      right:20,
      bottom:90,
      backgroundColor:'#E91E63',
      width:90,
      height:90,
      borderRadius:50,
      alignItems:'center',
      justifyContent:'center',
      elevation:8
  },
  addButtonText:{
      color:'#fff',
      fontSize:24,
  },
});



