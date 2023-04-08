import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const SignIn = ({ navigation, route }) => {
    const userType = route.params.userCategory
    return (
        <View style={styles.secContainer}>
            <Text style={styles.headerMain}>Create An Account</Text>

            <View style={styles.formContainer}>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput style={styles.input} placeholder='Enter Your Email' />
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput style={styles.input} placeholder='Enter Your Password' />
                </View>
            </View>
            <TouchableOpacity style={styles.signupBtn} onPress={() => {
                navigation.navigate("Index")
            }}>
                <Text style={styles.btnText}>Sign In</Text>
            </TouchableOpacity>
            <View style={styles.loginOption} >
                <Text style={styles.para}>Don't have an Account ? </Text>
                <TouchableOpacity onPress={
                    () => { navigation.navigate("Signup", { userCategory: userType }) }
                }>
                    <Text style={styles.link}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    secContainer: {
        height: "100%",
        padding: 11,
        paddingTop: 30

    },
    headerMain: {
        fontSize: 21,
        fontWeight: 800
    },
    headerSubMain: {
        fontSize: 18,
        fontWeight: 800
    },
    formContainer: {
        marginTop: 20,
        marginBottom: 30
    },
    inputGroup: {
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        marginBottom: 2
    },
    input: {
        borderWidth: 1,
        borderColor: "#000",
        paddingVertical: 7,
        paddingHorizontal: 6
    },
    signupBtn: {
        backgroundColor: "#5D9C59",
        paddingVertical: 15
    },
    btnText: {
        color: "#fff",
        textAlign: "center"
    },
    loginOption: {
        marginTop: 11,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    para: {
        color: "#656565",
        fontSize: 16
    },
    link: {
        fontSize: 18,
        color: "#007bff",
        marginLeft: 4
    }


})


export default SignIn
