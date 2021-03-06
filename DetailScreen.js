import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  TextInput,
  View,
  TouchableOpacity,
  WebView,
  Linking,
  TouchableHighlight,
  Alert
} from 'react-native';
import { Container, Header, Title, Content, Card, CardItem, Left, Right, Thumbnail, Body, Text, Button, Icon } from 'native-base';
import MainDrawer from './components/Drawer';
import ResponsiveImage from 'react-native-responsive-image';
import { StackNavigator } from 'react-navigation';

export default class DetailScreen extends Component {
    
    // Function onButtonPress
    _onPressButton(url){
            //Alert.alert("Lol");
            const uri = url;
            Linking.openURL(uri).catch(err => console.error('An error occurred', err));
        }

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.title}`,
    });

    render() {
        const { params } = this.props.navigation.state;
        
        return (
          <Container>

              <Content>
                <View style={[styles.layout]}>
                    <TouchableHighlight onPress={() => this._onPressButton('http://www.divaina.com')}>
                        <View style={styles.box} >
                            <ResponsiveImage source={require('./img/divaina.png')} initWidth="138" initHeight="138"/>
                        </View>
                    </TouchableHighlight>
                    
                    <View style={styles.box} >
                        <ResponsiveImage source={require('./img/lankadeepa.png')} initWidth="138" initHeight="138"/>
                    </View>
                </View>

                <View style={[styles.layout]}>
                    <View style={styles.box} >
                        <ResponsiveImage source={require('./img/rivira.png')} initWidth="138" initHeight="138"/>
                    </View>
                    <View style={styles.box} >
                        <ResponsiveImage source={require('./img/derana.png')} initWidth="138" initHeight="138"/>
                    </View>
                </View>
              </Content>
          </Container>
        );

        
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.05)',
    margin: 10,
  },
})
