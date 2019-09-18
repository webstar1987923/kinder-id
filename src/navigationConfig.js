import { Platform, StatusBar } from "react-native";
import { TabNavigator, StackNavigator } from "react-navigation";

import Splash from "./screens/Splash";
import Login from "./screens/Login";
import Verify from "./screens/Verify";
import AddPicture from "./screens/AddPicture";
import AddGuardian from "./screens/AddGuardian";
import Payment from "./screens/Payment";
import Complete from "./screens/Complete";
import Register from "./screens/Register";
import Password from "./screens/Password";
import MainScreen from "./screens/MainScreen";
import LiAddPicture from "./screens/LiAddPicture";
import LiAddGaurdian from "./screens/LiAddGaurdian";
import LiComplete from "./screens/LiComplete";
import Profile from "./screens/Profile";
import LostBracelet from "./screens/LostBracelet";
import MapScreen from "./screens/FinderMap";
import EditChild from "./screens/EditChild";
import VerifyAction from "./screens/VerifyAction";
import NewOrder from "./screens/NewOrder";
import NewOrderDetails from "./screens/NewOrderDetails";
import MichaelMissingScreen from "./screens/MichaelMissing";
import Reunited from "./screens/Reunited";
import Menu from "./screens/Menu";
import DeleteId from './screens/DeleteId';
import Confirm from './screens/Confirm';
import Subscription from './screens/Subscription';
import Pay from './screens/Pay';
import Visa from './screens/Visa';
import Receipt from './screens/Receipt';
import ReNewSubscription from './screens/ReNewSubscription';
import ChooseSubscription from './screens/ChooseSubscription';
import ChooseGuardian from './screens/ChooseGuardian';
import ChooseCurrency from './screens/ChooseCurrency';
import Connect from './screens/Connect';
import WebView from './screens/WebView';
import Guardian from './screens/Guardian';
import GuardianEdit from './screens/GuardianEdit';
import ColorPicker from './screens/ColorPicker';
import ChooseCard from './screens/ChooseCard';
import SomeoneConnected from './screens/SomeoneConnected';
import SavedCards from './screens/SavedCards';

const AppNavigator = StackNavigator(
    {
        Splash: { screen: Splash },
        Payment: { screen: Payment },
        Login: { screen: Login },
        Verify: { screen: Verify },
        Register: { screen: Register },
        AddPicture: { screen: AddPicture },
        AddGuardian: { screen: AddGuardian },
        Complete: { screen: Complete },
        Password: { screen: Password },
        MainScreen: { screen: MainScreen },
        LiAddPicture: { screen: LiAddPicture },
        LiAddGaurdian: { screen: LiAddGaurdian },
        LiComplete: { screen: LiComplete },
        Profile: { screen: Profile },
        LostBracelet: { screen: LostBracelet },
        EditChild: { screen: EditChild },
        VerifyAction: { screen: VerifyAction },
        NewOrder: { screen: NewOrder },
        NewOrderDetails: { screen: NewOrderDetails },
        MichaelMissingScreen: { screen: MichaelMissingScreen },
        MapScreen: { screen: MapScreen },
        Reunited: { screen: Reunited },
        Menu: { screen: Menu },
        DeleteId: {screen: DeleteId },
        Confirm: { screen: Confirm },
        Subscription: { screen: Subscription },
        Pay: { screen: Pay },
        Visa: { screen: Visa },
        Receipt: { screen: Receipt },
        ReNewSubscription: { screen: ReNewSubscription },
        ChooseSubscription: { screen: ChooseSubscription },
        ChooseGuardian: { screen: ChooseGuardian },
        ChooseCurrency: { screen: ChooseCurrency },
        Connect: { screen: Connect },
        WebView: { screen: WebView },
        Guardian: { screen: Guardian },
        GuardianEdit: { screen: GuardianEdit },
        ColorPicker: { screen: ColorPicker },
        ChooseCard: { screen: ChooseCard },
        SomeoneConnected: { screen: SomeoneConnected },
        SavedCards: { screen: SavedCards },
    },
    {
        swipeEnabled: false,
        lazy: true,
        animationEnabled: true,
        tabBarOptions: {
            style: {
                paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight
            }
        }
        // navigationOptions: {

        //   tabBarVisible: false,
        // }
    }
);

export { AppNavigator };
