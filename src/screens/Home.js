import React, {Component} from "react";
import { Text, StyleSheet, TextInput, View } from "react-native";
import {SafeAreaView} from 'react-navigation'
import firebase from 'firebase'  // ensure you import this before any other components you created in your app 
import {Header, Button, Spinner} from '../components/reusable'
import LoginForm from '../components/LoginForm'



class Home extends Component{

  state = { loggedIn: null }

  // UNSAFE_ fixes the warning gotten for using the life cycle
  UNSAFE_componentWillMount(){ 
    const firebaseConfig = {
      apiKey: "AIzaSyDl4ti8WUQg4G_DJR9TnKt3zoaKuv7JKB4",
      authDomain: "authentication-4da3e.firebaseapp.com",
      databaseURL: "https://authentication-4da3e.firebaseio.com",
      storageBucket: "authentication-4da3e.appspot.com",
      messagingSenderId: "597432210970",
    }

    // to prevent duplicate instance of the firebase service since componentWillMount get called everytime the 
    // refreshes.
    if(!firebase.apps.length){  
      firebase.initializeApp(firebaseConfig) // initializing firebase
    }

    //it checks if a user is logged in or not. if a user is logged in, the parameter user will have a value else 
    // it wont. 
    firebase.auth().onAuthStateChanged((user) => { 
      if(user){
        this.setState({loggedIn: true})
      }
      else{
        this.setState({loggedIn: false})
      }
    })
    
  }
  renderContent(){
    switch (this.state.loggedIn) {
      case true: 
      return <Button>Log Out</Button>
      case false:
        return <LoginForm/>
      default:
        return (
          <View style={{marginTop: 100}}>
            <Spinner size="large" />
          </View>
        )

    }
  }

  render(){
    return (
      <SafeAreaView forceInset={{top: "always"}}>
        <Header headerText="Authentication"/>
       {this.renderContent()}
      </SafeAreaView>
    )
  }
  
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

Home.navigationOptions = () => {
  return {
    headerShown: false
  }
}

export default Home;
