import React from "react";
import {
  View,
  Text,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData
} from "react-native";

export default class Hello extends React.Component {
  state = {
    name: ""
  };

  changeName = (name: string) => {
    this.setState({ name });
  };

  render() {
    const { name } = this.state;
    return (
      <View>
        <TextInput
          placeholder="Enter your name"
          value={name}
          onChangeText={this.changeName}
        />
        <Text style={{ textAlign: "center" }}>Hi! {this.state.name}</Text>
      </View>
    );
  }
}
