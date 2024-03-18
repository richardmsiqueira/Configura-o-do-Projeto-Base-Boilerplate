import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import { user } from "../data/Profile";

const Tab = createBottomTabNavigator();

const TabsRoutes = () => {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} initialParams={user}/>
    </Tab.Navigator>
  );
};

export default TabsRoutes;