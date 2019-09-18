import React, { Component } from "react"
import { View, Image, Text, TouchableOpacity, TextInput, ScrollView, StatusBar, KeyboardAvoidingView } from "react-native"
import { connect } from 'react-redux';
import { Images } from "../../themes";
import styles from './styles';
import globalStyle from '../globalStyle';
import Spinner from '../../components/spinner';
import { userUpdate } from '../../actions/regActions';
import MyStatusBar from '../../components/MyStatusBar';

class Register extends Component {
    constructor(props){
        super(props);

        this.state = { showError: "", loading: false }
    }
    
    static navigationOptions = {
        header: false,
        gesturesEnabled: false,
    };
    goBack(){
        this.props.navigation.goBack()
    }

    handleSubmit = async() => {
        const { parentName, parentTel, parentPassword, parentRPassword } = this.props;
        if (parentName=='' || parentTel=='' || parentPassword=='' || parentRPassword==''){
            return this.setState({showError: "All fields are required!"});
        }
        if (parentPassword.length < 6)  {
            return this.setState({showError: "Password must be 6 digits!"});
        }
        if (parentPassword != parentRPassword) {
            return this.setState({showError: "Password does not match!"});
        }
        return this.props.navigation.navigate('AddPicture');
    }

    renderButton = () => {
        if (this.state.loading)
            return <Spinner />;
        return (
            <TouchableOpacity onPress={this.handleSubmit} style={globalStyle.shadowButton}>
                <Text style={globalStyle.buttonText}>Next</Text> 
            </TouchableOpacity>
        );
    }

    render(){
        return(
            <KeyboardAvoidingView style={globalStyle.container} behavior="padding">
                <View style = {globalStyle.container}>
                    <MyStatusBar backgroundColor="white"/>
                    <View style={globalStyle.headerView}>
                        <TouchableOpacity onPress={this.goBack.bind(this)}>
                            <Image source={Images.arrow_back} style={globalStyle.arrow_back} />                 
                        </TouchableOpacity>
                        <View>
                            <Image source={Images.kmark} style={globalStyle.kmark}/>
                        </View>
                        <View />
                    </View>
                    <ScrollView>
                        <View style={styles.marginFirstView}>
                            <Text style={styles.codeText}>Please fill in your contact information</Text> 
                        </View>
                        <View style={globalStyle.formGroup}>
                            <Text style={globalStyle.labelText}>Full name</Text> 
                            <TextInput  style={globalStyle.shadowTextInput}
                                underlineColorAndroid='transparent'
                                placeholder='Lisa Smith'
                                value={this.props.parentName}
                                onChangeText={value => this.props.userUpdate({ prop: 'parentName', value })}
                                autoCorrect={false}
                            /> 
                        </View>
                        <View style={globalStyle.formGroup}>
                            <Text style={globalStyle.labelText}>Tlf. with countrycode</Text> 
                            <TextInput   style={globalStyle.shadowTextInput} 
                                underlineColorAndroid='transparent'
                                placeholder='(+47) 000 00 000'
                                value={this.props.parentTel}
                                onChangeText={value => this.props.userUpdate({ prop: 'parentTel', value })}
                                autoCorrect={false}
                                keyboardType='numeric'
                            />  
                        </View>
                        <View style={globalStyle.formGroup}>
                            <Text style={globalStyle.labelText}>Password</Text> 
                            <TextInput   style={globalStyle.shadowTextInput} 
                                secureTextEntry={true}
                                underlineColorAndroid='transparent'
                                placeholder='******'
                                maxLength={6}
                                value={this.props.parentPassword}
                                onChangeText={value => this.props.userUpdate({ prop: 'parentPassword', value })}
                                autoCorrect={false}                            
                                keyboardType="numeric"
                            />  
                        </View>
                        <View style={globalStyle.formGroup}>
                            <Text style={globalStyle.labelText}>Repeat Password</Text> 
                            <TextInput   style={globalStyle.shadowTextInput} 
                                secureTextEntry={true}
                                underlineColorAndroid='transparent'
                                placeholder='******'
                                maxLength={6}
                                value={this.props.parentRPassword}
                                onChangeText={value => this.props.userUpdate({ prop: 'parentRPassword', value })}
                                autoCorrect={false}                            
                                keyboardType="numeric"
                            />  
                        </View>
                        {
                            this.state.showError?
                            <View style={styles.marginView2} >
                                <Text style={styles.errorText}>{this.state.showError}</Text>
                            </View>
                            :null
                        }
                        
                        <View style={styles.footerView}>
                                {this.renderButton()}
                        </View>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        )
    }
}
const mapStateToProps = ({ reg }) => {
    const { parentName, parentTel, parentPassword, parentRPassword } = reg;
    return { parentName, parentTel, parentPassword, parentRPassword };
};
export default connect(mapStateToProps, {userUpdate})(Register);
