import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';

const Register = () => {
    const [email,setEmail] = useState('');
    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const [company,setCompany] = useState('');
    const [phone,setPhone] = useState('');
    const [country,setCountry] = useState('');
    const [user,setUser] = useState('');
    const [password,setPassword] = useState('');
    const [rePassword,setRePassword] = useState('');

    return (
        <View style={styles.home}>
            <ScrollView style={styles.view}>

                <Text style={styles.textHeader}>Create your free account</Text>

                <View style={styles.viewInsert}/>

                <View style={styles.viewBorder}>
                    <Text style={styles.text}>Email *</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={email => setEmail(email)}
                        value={email}
                    />
                </View>

                <View style={styles.viewInsert}/>

                <View style={styles.viewBorder}>
                    <Text style={styles.text}>Firstname *</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={firstname => setFirstname(firstname)}
                        value={firstname}
                    >
                    </TextInput>
                </View>

                <View style={styles.viewInsert}/>

                <View style={styles.viewBorder}>
                    <Text style={styles.text}>Lastname *</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={lastname => setLastname(lastname)}
                        value={lastname}
                    />
                </View>

                <View style={styles.viewInsert}/>

                <View style={styles.viewBorder}>
                    <Text style={styles.text}>Company *</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={company => setCompany(company)}
                        value={company}
                    />
                </View>

                <View style={styles.viewInsert}/>

                <View style={styles.viewBorder}>
                    <Text style={styles.text}>Phone</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={phone => setPhone(phone)}
                        value={phone}
                    />
                </View>

                <View style={styles.viewInsert}/>

                <View style={styles.viewBorder}>
                    <Text style={styles.text}>Country *</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={country => setCountry(country)}
                        value={country}
                    />
                </View>

                <View style={styles.viewInsert}/>

                <View style={styles.viewBorder}>
                    <Text style={styles.text}>Username *</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={user => setUser(user)}
                        value={user}
                    />
                </View>

                <View style={styles.viewInsert}/>

                <View style={styles.viewBorder}>
                    <Text style={styles.text}>Password *</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={password => setPassword(password)}
                    >
                        {password.split('').map(c => c === ' ' ? ' ' : '*')}
                    </TextInput>
                </View>

                <View style={styles.viewInsert}/>


                <View style={styles.viewBorder}>
                    <Text style={styles.text}>RePassword *</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={rePassword => setRePassword(rePassword)}
                    >
                        {rePassword.split('').map(c => c === ' ' ? ' ' : '*')}
                    </TextInput>
                </View>

                <View style={styles.viewInsert}/>

                <Text style={styles.textFooter}>* Required field</Text>

                <View style={styles.viewInsert2}/>

                <TouchableOpacity style={styles.buttonSignIn}>
                    <Text style={styles.textSignIn}>REGISTER</Text>
                </TouchableOpacity>

                <View style={styles.viewInsert2}/>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    home: {
        flexDirection:'column',
        flex:1,
        backgroundColor: 'black'
    },
    view: {
        backgroundColor: 'black',
        marginTop: 30,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 5,
    },
    viewBorder: {
        backgroundColor: '#222222',
        borderRadius: 5,
    },
    viewInsert: {
        backgroundColor: 'black',
        height: 10,
    },
    viewInsert2: {
        backgroundColor: 'black',
        height: 50,
    },
    text: {
        color: '#3399FF',
        marginLeft: 10,
    },
    textHeader: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
        alignSelf: 'center'
    },
    textFooter: {
        color: 'white',
        fontSize: 12,
        alignSelf: 'flex-start'
    },
    textSignIn: {
        color: 'white',
        fontSize: 17,
        textAlign: 'center',
    },
    textOrther: {
        color: '#3399FF',
        fontSize: 14,
        textAlign: 'center',
    },
    input: {
        height: 30,
        margin:10,
        color:'white',
        borderBottomColor:'#3399FF',
        borderBottomWidth: 2,
        fontSize: 21,
    },
    buttonSignIn: {
        backgroundColor: '#3399FF',
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
    },


});

export default Register;
