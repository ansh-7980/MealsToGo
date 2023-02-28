import React ,{useRef ,useState , useEffect ,useContext} from "react";
import { Camera ,CameraType } from "expo-camera";
import styled from "styled-components/native";
import { View ,TouchableOpacity } from "react-native";
import { Text } from "../../../components/typography/text.component";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticationContext } from './../../../service/authentication/authentication.context';
import { Button } from 'react-native-paper';
const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
  flex: 1;
`;
const InnerSnap = styled.View`
  width: 100%;
  height: 100%;
  z-index: 999;`;

  const CameraContainer = styled.View`
  width: 100%;
  height: 100%;
`;
const CameraButton = styled(Button).attrs({
   mode: "contained",
   icon: "camera"
})`
   position: absolute;
   top: 525px;
   left: 140px;
`;


export const CameraScreen = ({navigation}) => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();
  const {user} =useContext(AuthenticationContext)

  const snap = async ()=>{
    if(cameraRef){
        const photo = await cameraRef.current.takePictureAsync();
        AsyncStorage.setItem(`${user.uid}-photo`,photo.uri);
        navigation.goBack();
    }
  }

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <CameraContainer>
    <ProfileCamera ref={(camera) => (cameraRef.current = camera)}
     type={CameraType.front} 
    
     onCameraReady={()=>{
        console.log("camera ready");
     }}
     ratio={"16:9"} 
     >
    

    <TouchableOpacity onPress={snap}>
        <InnerSnap />
    </TouchableOpacity>
    </ProfileCamera>
    <CameraButton
    onPress={snap}> Snap
    </CameraButton>
    </CameraContainer>
  );
};