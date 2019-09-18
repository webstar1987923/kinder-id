import { AsyncStorage } from "react-native";
import OneSignal from "react-native-onesignal";
import axios from "axios";

const PUSH_ENDPOINT =
  "https://api.kinder-id.com/mobile/registerpushnotification";

export default async token => {
  const previosPNID = await AsyncStorage.getItem("KinderID_Push_Notification");
  // if (previosPNID) {
  //   return;
  // } else {
    OneSignal.addEventListener("ids", async pushNotificationID => {
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      const response = await axios.post(
        PUSH_ENDPOINT,
        { pushNotificationID: pushNotificationID.userId },
        config
      );

      AsyncStorage.setItem(
        "KinderID_Push_Notification",
        pushNotificationID.userId
      );
    });
  // }
};
