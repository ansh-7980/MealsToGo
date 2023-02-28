import React ,{useContext ,useCallback ,useState ,useEffect} from "react";
import { AuthenticationContext } from "../../../service/authentication/authentication.context";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { List ,Avatar} from "react-native-paper";
import  styled  from 'styled-components/native';
import { theme } from './../../../infrastructure/theme/index';
import { Spacer } from './../../../components/spacer/spacer.component';
import { Text } from './../../../components/typography/text.component';
import { fontSizes } from './../../../infrastructure/theme/fonts';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { TouchableOpacity } from 'react-native';


const SettingsItem =styled(List.Item)`
padding:${(props)=>props.theme.space[3]}
`;
const AvatarContainer = styled.View`
  align-items: center;
  font-size:${(props)=>props.theme.fontSizes.h5}
  
`;

export const SettingsScreen =({navigation})=>{
    const {onLogout ,user} =useContext(AuthenticationContext);
    const [photo, setPhoto] = useState(null);
  
    const getProfilePicture = async (currentUser) => {
      const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
      setPhoto(photoUri);
    };

    useFocusEffect(
      useCallback(() => {
        getProfilePicture(user);
      }, [user])
    );
    return(
      <SafeArea>
         <AvatarContainer>
          <TouchableOpacity onPress={()=> navigation.navigate("Camera")}>

       {!photo && (
            <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
          )}
          {photo && (
            <Avatar.Image
              size={180}
              source={{ uri: photo }}
              backgroundColor="#2182BD"
            />
          )}
        </TouchableOpacity>
        <Spacer position="top" size="large">
          <Text variant="caption" >{user.email}</Text>
        </Spacer>
      </AvatarContainer>
        <List.Section>
        <SettingsItem
          style={{ padding: 16 }}
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          style={{ padding: 16 }}
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
      </SafeArea>
    )
  }