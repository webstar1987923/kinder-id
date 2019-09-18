import React from "react";
import { View, Image, Text, TouchableOpacity} from "react-native";
import { Images } from "../../themes";
import styles from './styles';

const ListItem = (props) => (
            <View >
                <TouchableOpacity
                    style={styles.marginSecondView}
                    onPress={() => props.setID(props.child._id)}
                >
                    <View>
                        <Text style={styles.nameText}>{props.child.childrenName}</Text>
                        <View style={styles.textWrapper}>
                            <Text style={styles.commonText}>{props.child.days_left} Days Left</Text>
                            <Text style={styles.commonText}>{props.child.wristband}</Text>
                        </View>
                    </View>
                    <Image source={Images.arrow_forward} style={styles.arrow_forward} />
                </TouchableOpacity>
            </View>
        );

export default ListItem;
