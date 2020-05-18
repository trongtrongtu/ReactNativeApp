import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { CartContexts } from '../contexts/Cart';

export default class Profile extends Component {
    static navigationOptions = {
        title: 'My Account'
    };
    render() {
        
        return (
            <CartContexts.Consumer>
                {({ username }) => (
                    <ScrollView>
                        <View style={styles.container}>
                            <View style={styles.header}></View>
                            <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
                            <View style={styles.body}>
                                <View style={styles.bodyContent}>
                                    <Text style={styles.name}>{username}</Text>
                                    <Text style={styles.info}>UX Designer / Mobile developer</Text>
                                    <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
                                    <TouchableOpacity style={styles.buttonContainer}>
                                        <Text>Opcion 1</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.buttonContainer}>
                                        <Text>Opcion 2</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.buttonContainer}>
                                        <Text>Opcion 2</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.buttonContainer}>
                                        <Text>Opcion 2</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                )}
            </CartContexts.Consumer>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#00BFFF",
        height: 200,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 130
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    body: {
        marginTop: 40,
    },
    bodyContent: {

        alignItems: 'center',
        padding: 30,
    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: "600"
    },
    info: {
        fontSize: 16,
        color: "#00BFFF",
        marginTop: 10
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 10,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        backgroundColor: "#00BFFF",
    },
});