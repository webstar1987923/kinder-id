import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  StatusBar,
  Switch,
  KeyboardAvoidingView,
  Keyboard
} from "react-native";
import { connect } from "react-redux";
import { Images, Constants } from "../../themes";
import styles from "./styles";
import Spinner from "../../components/spinner";
import { payNewStripe } from "../../actions/paymentActions";
import MyStatusBar from '../../components/MyStatusBar';

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      email: "",
      card: "",
      expiry: "",
      cvc: "",
      switch: false,
      error: ""
    };
  }

  static navigationOptions = {
    header: false,
    gesturesEnabled: false,
  };

  renderButton = () => {
    if (this.state.loading) return <Spinner />;
    return (
      <TouchableOpacity onPress={this.handleSubmit} style={styles.bottomButton}>
        <Text style={styles.buttonText}>Pay $12</Text>
      </TouchableOpacity>
    );
  };

  resetFields = () => {
    this.setState({ error: "" });
    // this.setState({ iconColor: 'green'});
    // this.setState({textColor: '#000'});
  };

  handleSubmit = async () => {
    this.resetFields();
    const { email, card, expiry, cvc } = this.state;
    const number = card.replace(/\s/g, "");
    const expMonth = Number(expiry.substring(0, 2));
    const expYear = Number(expiry.substring(3, 5));
    // if (
    //   email == "" ||
    //   card == "" ||
    //   expiry == "" ||
    //   expiry == "" ||
    //   cvc == ""
    // ) {
    //   this.setState({ error: "All fields are required!" });
    //   // this.setState({iconColor: '#F44336'});
    //   // this.setState({textColor: '#F44336'});
    //   return;
    // }

    const params = {
      number,
      expMonth,
      expYear,
      cvc
    };

    this.props.payNewStripe(params);
  };

  handleCard = card => {
    const v = card.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
    for (i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      this.setState({ card: parts.join(" ") });
    } else {
      this.setState({ card });
    }
  };
  handleExpiry = expiry => {
    const v = expiry.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{2,5}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
    for (i = 0, len = match.length; i < len; i += 2) {
      parts.push(match.substring(i, i + 2));
    }
    if (parts.length) {
      this.setState({ expiry: parts.join("/") });
    } else {
      this.setState({ expiry });
    }
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground source={Images.background} style={styles.container}>
        <MyStatusBar backgroundColor="transparent" barStyle="light-content" />
        <View style={styles.headerView}>
          <View style={{ flex: 1 }} />
          <View style={{ flex: 1, alignItems: "center" }}>
            <Image source={Images.whitemark} style={styles.kmark} />
          </View>
          <View style={{ flex: 1 }} />
        </View>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <Text style={styles.whiteText}>
            Please pay the $12 annual{"\n"}administration fee
          </Text>
          <View style={styles.spaceView}>
            <View style={styles.spaceView}>
              <View style={styles.rowView}>
                <Image source={Images.mail} style={styles.mail} />
                <View style={styles.underLineView}>
                  <Text style={styles.blackText}>Email</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholder="user@email.com"
                    autoCorrect={false}
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                    underlineColorAndroid="transparent"
                    keyboardType="email-address"
                  />
                </View>
              </View>
              <View style={styles.rowView}>
                <Image source={Images.card} style={styles.mail} />
                <View style={styles.underLineView}>
                  <Text style={styles.blackText}>Card</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholder="•••• •••• •••• ••••"
                    autoCorrect={false}
                    value={this.state.card}
                    onChangeText={card => this.handleCard(card)}
                    underlineColorAndroid="transparent"
                    keyboardType="number-pad"
                    maxLength={19}
                  />
                </View>
              </View>
              <View style={styles.rowView}>
                <Image source={Images.calendar} style={styles.mail} />
                <View style={styles.underLineView}>
                  <Text style={styles.blackText}>Expiry</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholder="MM/YY"
                    autoCorrect={false}
                    value={this.state.expiry}
                    onChangeText={expiry => this.handleExpiry(expiry)}
                    underlineColorAndroid="transparent"
                    keyboardType="number-pad"
                    maxLength={5}
                  />
                </View>
                <View style={styles.leftLineView}>
                  <Image source={Images.cvs} style={styles.cvs} />
                  <Text style={styles.blackcvsText}>csv</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholder="123"
                    autoCorrect={false}
                    value={this.state.cvc}
                    onChangeText={cvc => this.setState({ cvc })}
                    underlineColorAndroid="transparent"
                    style={{ fontSize: 14, fontWeight: "bold" }}
                    keyboardType="number-pad"
                    maxLength={3}
                  />
                </View>
              </View>
              <View style={styles.rowView}>
                <Image source={Images.account} style={styles.mail} />
                <View style={styles.underLineView}>
                  <Text style={styles.rememberText}>Remember me</Text>
                  <View style={styles.switchView}>
                    <Switch
                      style={styles.sss}
                      onValueChange={value => this.setState({ switch: value })}
                      value={this.state.switch}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.errorView}>
              <Text style={styles.errorText}>{this.state.error}</Text>
            </View>
          </View>
        </KeyboardAvoidingView>
        {this.renderButton()}
      </ImageBackground>
    );
  }
}
export default connect(null, { payNewStripe })(Payment);
