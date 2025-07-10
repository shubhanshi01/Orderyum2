import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductPage from '../Component/ProductPage';
import Cart from '../MainScreen/Cart';
import Home from '../MainScreen/Home';
import Meals from '../MainScreen/Meals';
import EditProfile from '../MainScreen/Profile/EditProfile';
import MyOrders from '../MainScreen/Profile/MyOrdersScreen/MyOrders';
import TrackOrder from '../MainScreen/Profile/MyOrdersScreen/TrackOrder';
import Profile from '../MainScreen/Profile/Profile';
import AboutApp from '../MainScreen/Profile/Settings/AboutApp/AboutApp';
import ChangePassword from '../MainScreen/Profile/Settings/ChangePassword/ChangePassword';
import Notification from '../MainScreen/Profile/Settings/Notification/Notification';
import Settings from '../MainScreen/Profile/Settings/Settings';
import OrderDemo from '../MainScreen/OrderDemo';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === 'Home') iconName = 'home';
        else if (route.name==='Meals') iconName = 'pizza'
        else if (route.name === 'Cart') iconName = 'cart';
        else if (route.name === 'Profile') iconName = 'person';
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#FA812F',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Meals" component={Meals} />
    <Tab.Screen name="Cart" component={Cart} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

const Appstack = () => {
    return (
        <Stack.Navigator initialRouteName="MainTabs">
          <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
          <Stack.Screen name="EditProfile" component={EditProfile} options={{ title: 'Edit Profile', headerShown: true, headerTintColor: '#FA812F' }} />
          <Stack.Screen name="Settings" component={Settings} options={{ title: 'Settings', headerShown: true, headerTintColor: '#FA812F' }} />
          <Stack.Screen name="MyOrders" component={MyOrders} options={{ title: 'My Orders', headerShown: true, headerTintColor: '#FA812F' }} />
          <Stack.Screen name="TrackOrder" component={TrackOrder} options={{ title: 'Track Order', headerShown: true, headerTintColor: '#FA812F' }} />
          <Stack.Screen name="Cart" component={Cart} options={{ title: 'Cart', headerShown: true, headerTintColor: '#FA812F' }} />
          <Stack.Screen name="AboutApp" component={AboutApp} options={{ title: 'About App', headerShown: true, headerTintColor: '#FA812F' }} />
          <Stack.Screen name="ChangePassword" component={ChangePassword} options={{ title: 'Change Password', headerShown: true, headerTintColor: '#FA812F' }} />
          <Stack.Screen name="Notification" component={Notification} options={{ title: 'notification', headerShown: true, headerTintColor: '#FA812F' }} />
          <Stack.Screen name="ProductPage" component={ProductPage} options={{ title: 'Product Details', headerShown: true, headerTintColor: '#FA812F' }} />
          <Stack.Screen name="OrderDemo" component={OrderDemo} options={{ title: 'Order', headerShown: true, headerTintColor: '#FA812F' }} />
        </Stack.Navigator>

  );
}

export default Appstack;
