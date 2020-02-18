import React from 'react';
import { asset, Pano, Text, View, AmbientLight, Sound, VrButton } from 'react-vr';
//import Primitives from './Primitives';
import Penholder from './Penholder';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: 'background.jpeg',
      sound: 'office.wav',
      visible: true,
    };
  }

  changeTitle(){
    if(this.state.background === 'outside.jpeg') {
      return 'Go back to work';
    } else {
      return 'Go outside';
    }
  }

  changeScene() {
    if(this.state.background === 'outside.jpeg') {
      this.setState({
        background: 'background.jpeg',
        sound: 'office.wav',
        visible: true,
      });
    } else {
      this.setState({
        background: 'outside.jpeg',
        sound: 'birds.wav',
        visible: false
      });
    }
  }

  renderItems(){
    if (this.state.visible === true) {
      return <Penholder />
    }
  }
  render() {
    return (
      <View>
        <AmbientLight intensity={ 2.5 } />
        <Pano source={asset(this.state.background)} />
        <Sound 
          loop={true}
          volume={0.7}
          source={{
            wav: asset(this.state.sound)
          }}
        />
        <VrButton onClick={this.changeScene.bind(this)}>
          <Text
            style={{
              backgroundColor: '#777879',
              fontSize: 0.8,
              fontWeight: '400',
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{translate: [0, 2, -6]}],
            }}>
            {this.changeTitle()}
          </Text>
        </VrButton>
        {this.renderItems()}
      </View>
    );
  }
};
