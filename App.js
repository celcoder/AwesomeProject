import React, { Component } from "react";
import axios from "axios";
import { AppRegistry, Text, TextInput, View } from "react-native";

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = { user:  {}};
  }

  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }

  async componentDidMount() {
    const response = await axios({
      method: "get",
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTIxOGY5NDBlMGFiZDE3Mjg2YzNkYjAiLCJpYXQiOjE1MTQ5MTQ5NzYsImV4cCI6MTU0NjQ1MDk3Nn0.1ZZOP1w-EKUxE7pXLks7BbZ-BqKaF11JBomGLSlJZds`
      },
      url: `http://local.getkard.com:3000/users/oauth`,
      params: { from: "extension" }
    })
    this.setStateAsync({ user: response.data.user });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          padding: 10,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>{this.state.user.email}</Text> 
        {/* <TextInput
          style={{ height: 40 }}
          placeholder="Type here to translate!"
          onChangeText={text => this.setState({ text })}
        /> */}
        {/* <Text style={{ padding: 10, fontSize: 42 }}>
          {this.state.text
            .split(" ")
            .map(word => word && "🍕")
            .join(" ")}
        </Text> */}
      </View>
    );
  }
}
