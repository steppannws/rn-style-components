/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

const StyledButton = styled.View`
  padding: 10px;
  margin: 10px;
  border-radius: ${props => (props.rounded ? '10px' : '0px')};
  background-color: ${props => (props.primary ? 'blue' : 'green')};
`;
const StyledView = styled.View`
  width: 100;
  height: 100;
  background-color: #000000;
  transform: rotate(${props => props.rotation}deg);
  margin: 50px 7px 50px;
`;

const StyledText = styled.Text`color: white;`;

export default class App extends Component<{}> {
  constructor(props) {
    super(props);

    this.state = {
      rounded: false,
      rotate: false,
      rotation: 0,
    };

    this.interval;
  }

  loop = () => {
    this.setState({ rotation: this.state.rotation + 5 });
  };

  rotate = () => {
    if (!this.state.rotate) {
      this.setState({ rotate: true });
      this.interval = setInterval(this.loop, 30);
    } else {
      this.setState({ rotate: false });
      clearInterval(this.interval);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => {
            this.setState({ rotation: this.state.rotation + 5 });
          }}
        >
          <StyledButton rounded={this.state.rounded}>
            <StyledText>{'-->'}</StyledText>
          </StyledButton>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => {
            this.rotate();
          }}
        >
          <StyledButton primary>
            <StyledText>Rollllll</StyledText>
          </StyledButton>
        </TouchableWithoutFeedback>

        <StyledView rotation={this.state.rotation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
