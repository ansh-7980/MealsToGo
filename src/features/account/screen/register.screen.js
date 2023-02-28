import React ,{useState,useEffect ,useContext} from "react";
import { AccountBackground ,AuthButton,AccountCover,AccountContainer,AuthInput ,Title ,ErrorContainer} from "../components/account.style";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../service/authentication/authentication.context";
import { Icon } from './../../restraunts/components/restraunt-info-card.styles';
import { Text } from "../../../components/typography/text.component";
import { isLoading } from "expo-font";
import { ActivityIndicator ,Colors } from "react-native-paper";
export const RegisterScreen =({navigation})=>{
    const [email,setEmail] =useState("")
    const [password,setPassword] =useState("")
    const [repeatedPassword,setRepeatedPassword] =useState("")
    const {onRegister,error ,isLoading} = useContext(AuthenticationContext)
    return (
    
    <AccountBackground>
        <AccountCover />
        <Title>Meals to Go</Title>
        <AccountContainer>

            <AuthInput 
            label="E-mail"
            value={email}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapatilize="none"
            onChangeText ={(u)=>setEmail(u)}
            />
            <Spacer>
            <AuthInput 
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapatilize="none"
            onChangeText ={(p)=>setPassword(p)}
            />  
            </Spacer>
            <Spacer>
            <AuthInput 
            label="RepeatPassword"
            value={repeatedPassword}
            textContentType="password"
            secureTextEntry
            autoCapatilize="none"
            onChangeText ={(p)=>setRepeatedPassword(p)}
            />  
            </Spacer>
            <ErrorContainer size="large">
                <Text variant="caption">{error}</Text>

            </ErrorContainer>
            <Spacer size="large">
              {!isLoading ?(<AuthButton 
              icon="email"
              mode="contained"
              onPress={()=> onRegister(email,password ,repeatedPassword)}
              >Register
                </AuthButton>):(
                 <ActivityIndicator animating={true} color="red" />
                )}
            </Spacer>
            

        </AccountContainer>
        <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
    )
}