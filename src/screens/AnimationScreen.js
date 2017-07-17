import React, { Component } from 'react';
import { Animated, Image, Easing, AppRegistry, StyleSheet, View } from 'react-native';

export const ANIMATION_SCENE_NAME = 'ANIMATION_SCENE';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default class AnimationScreen extends Component {

  static navigationOptions = {
    title: 'Animation',
  };

  constructor () {
    super()
    this.animatedValue = new Animated.Value(0)
  }

  componentDidMount () {
    this.spin()
  }
  spin () {
    this.animatedValue.setValue(0)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 1000,
        easing: Easing.back
      },
    ).start(() => this.spin())
  }

  render() {
    const spin = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [150, 0]
    })
    return (
    //image et déplacer haut en bas
    <View style={styles.container}>
      <Animated.Image
        style={{
          width: 227,
          height: 200,
          transform: [{ translateY: spin }] }}
        source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}
      />
    </View>
    )
  }
}
