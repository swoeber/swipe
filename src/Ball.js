import React, {Component} from 'react';
import {View, Animated, Button} from 'react-native';

class Ball extends Component {

  componentWillMount() {
    this.position = new Animated.ValueXY(0, 0);
    Animated.spring(this.position, {
      toValue: { x: 200, y: 500 }
    }).start();

  }

  render() {
    return (
        <View style={{flex: 1}}>
            <Animated.View style={this.position.getLayout()}>
              <View style={styles.ball} ></View>
            </Animated.View>
        </View>
    );
  }
}

const styles = {
  ball: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: 'black'
  }
}

export default Ball;