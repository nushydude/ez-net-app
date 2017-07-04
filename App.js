import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  TextInput,
  View,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import { Container, Header, Title, Content, Card, CardItem, Left, Right, Thumbnail, Body, Text, Button, Icon } from 'native-base';
import MainDrawer from './components/Drawer';
import ResponsiveImage from 'react-native-responsive-image';
import { StackNavigator } from 'react-navigation';

export default class ReactNativeProject extends Component {

    state = {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }

    static navigationOptions = {
        title: 'අන්තර්ජාල නැබ',
    };

    render() {

        const {flexDirection, alignItems, justifyContent} = this.state
        const layoutStyle = {flexDirection, justifyContent, alignItems}
        const {navigate} = this.props.navigation;
        return (
          <Container>
              {/*<Header>
                  <Left>
                      <Button transparent onPress={()=> console.log(MainDrawer)}>
                          <Icon name='menu' />
                      </Button>
                  </Left>
                  <Body>
                      <Title>අන්තර්ජාල නැබ</Title>
                  </Body>
                  <Right />
              </Header>*/}

              <Content>

                <View style={[styles.layout, layoutStyle]}>
                    <TouchableHighlight onPress={() => navigate('Detail', { title: 'පුවත් පත්' })}>
                        <View style={styles.box} >
                            <ResponsiveImage source={require('./img/news-papers.png')} initWidth="138" initHeight="138"/>
                        </View>
                    </TouchableHighlight>
                    <View style={styles.box} >
                        <ResponsiveImage source={require('./img/unknown.png')} initWidth="138" initHeight="138"/>
                    </View>
                </View>

                <View style={[styles.layout, layoutStyle]}>
                    <View style={styles.box} >
                        <ResponsiveImage source={require('./img/unknown.png')} initWidth="138" initHeight="138"/>
                    </View>
                    <View style={styles.box} >
                        <ResponsiveImage source={require('./img/unknown.png')} initWidth="138" initHeight="138"/>
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
  },
  box: {
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.05)',
    margin: 10,
  },
})