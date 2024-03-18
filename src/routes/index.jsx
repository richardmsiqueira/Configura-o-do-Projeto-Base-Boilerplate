import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import StackRoutes from "./stack.routes";
import TabsRoutes from "./tabs.routes";
import DrawerRoutes from "./drawer.routes";

export default function Routes() {
  return (
    <NavigationContainer>
     <StackRoutes />
     {/* <TabsRoutes /> */}
     {/* <DrawerRoutes /> */}
       
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}