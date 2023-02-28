import React from "react";
import { AccountBackground ,AccountContainer,AccountCover,AuthButton ,Title ,AnimationWrapper} from "../components/account.style";
import { View, Text } from 'react-native';
import { Spacer } from "../../../components/spacer/spacer.component";
import LottieView from "lottie-react-native"
export const AccountScreen =({navigation})=>{
    return (
        <>
    <AccountBackground >
        <AccountCover />
        <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/82624-foodies.json")}
        />
      </AnimationWrapper>
        <Title>Meals to Go</Title>
        <AccountContainer>
        <AuthButton
        icon="email"
        mode="contained"
        onPress={()=> navigation.navigate("Login")}

        >
        Login
        </AuthButton>
        <Spacer size="large">
        <AuthButton
        icon="email"
        mode="contained"
        onPress={()=>navigation.navigate("Register")}

        >
        Register
        </AuthButton>
        </Spacer >
        </AccountContainer>
        </AccountBackground>
    </>
    
    );

}