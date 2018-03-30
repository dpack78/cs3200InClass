import { StyleSheet } from 'react-native';

//Main styles for the project
export default StyleSheet.create({
    //Centers everything
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    //Styles the text of the button
    ButtonInner: {
        fontSize: 50,
        margin: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#aecbf9',
    },
    //Styles the button
    ButtonOuter: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#aecbf9',
        borderRadius: 10,
        width: 200,
        margin: 5,
    },
    Link:{

    },
    TextOnImage:{
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        borderRadius:10,
        margin: 3,
        padding:5,
    },
    whiteText:{
        color: '#ffffff'
    },
    imageBack:{
        width: "100%",
        height: "100%"
    },
    headerText:{
        backgroundColor: '#ffffff',
        padding:8,
        paddingTop: 23,
        color: '#000000',
        fontSize: 20,
    }

});