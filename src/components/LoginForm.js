import React, { Component } from 'react'
import firebase from 'firebase'
import {Text, StyleSheet, TextInput} from 'react-native'
import {Button, Card, CardSection, Input, Spinner} from './reusable'


class LoginForm extends Component {
    state= {email: "", password: "", errorMessage: "", loading: false}

    onButtonPress(){
        const {email, password} = this.state

        this.setState({errorMessage: "", loading: true})

        // firebase method that signs user in with email and password, it takes two parameters, email and password
        // if the signIn fails, we then want to create new user by using firebase.auth().createUser....in the
        // catch of signIn.

        firebase.auth().signInWithEmailAndPassword(email, password).then(response => {
            this.setState({email: "", password: "", loading: false, errorMessage: ""})
            alert("succesfully logged in")
        })
        .catch(()=> {
            firebase.auth().createUserWithEmailAndPassword(email, password).then(response => {
                this.setState({email: "", password: "", loading: false, errorMessage: ""})
                alert("User Successfully created")
            })
            .catch(()=> {
                this.setState({errorMessage: "Authentication Failed.", loading: false}) // in the case where email is already used
            })
        })
        
    }

    render(){
        return(
            <Card>

                <CardSection>
                    <Input
                        value={this.state.email}
                        onChangeText={email => this.setState({email})} 
                        label="Email"
                        placeholder="example@gmail.com"
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={password => this.setState({password})} 
                        label="Password"
                        placeholder="******************"
                    />
                </CardSection>

                {this.state.errorMessage ? <Text style={styles.errorText}>{this.state.errorMessage}</Text>: null}

                <CardSection>
                    {!this.state.loading ?
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Log in
                    </Button>
                    : <Spinner size="large" />}
                </CardSection>
        
            </Card>
        )
    }
}

const styles = {
    errorText: {
        fontSize: 20,
        alignSelf: "center",
        color: "red",
        paddingVertical: 5
    }
}

export default LoginForm