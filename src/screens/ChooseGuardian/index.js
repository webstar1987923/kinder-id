import _ from 'lodash';
import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity, TextInput, ImageBackground, StatusBar,ScrollView, ListView} from "react-native"
import { connect } from 'react-redux';
import { Images } from "../../themes";
import globalStyle from '../globalStyle';
import styles from './styles';
import ListItem from './ListItem';
import MyStatusBar from '../../components/MyStatusBar';
class ChooseGuardian extends Component {
    constructor(props){
        super(props);
        this.state = ({
            guardians:[
                {_id: 0, guardianName: 'Lisa Smith'},
                {_id: 1, guardianName: 'Hussein Dib'},
                {_id: 2, guardianName: 'Ole Vegge'},
            ],
            guardianIdArray: [] 
        });
    }
    
    static navigationOptions = {
        header: false,
        gesturesEnabled: false,
    };

    removeGuardianId = (guardianId) => {
        let guardianIdArray = this.state.guardianIdArray;
        _.pull(guardianIdArray, guardianId);
        this.setState({guardianIdArray});
    }

    setGuardianId = (guardianId) => {
        let guardianIdArray = this.state.guardianIdArray;
        guardianIdArray.push(guardianId);
        this.setState({guardianIdArray});    
    }

    goBack() {
        this.props.navigation.goBack();
    }
    
    render(){
        return(
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
                <View style={styles.marginSecondView}>
                    <Text style={styles.titleText}>Choose guardians</Text> 
                </View>
                <View style={styles.listContainer}>
                    {
                        this.state.guardians.map((guardian, index)=>{
                            return <ListItem 
                                key={index}
                                guardian={guardian}
                                setGuardian = {this.setGuardianId}
                                removeGuardian = {this.removeGuardianId}
                            />
                        })
                    }
                </View>
            </View>
        )
    }
}

export default ChooseGuardian; 
