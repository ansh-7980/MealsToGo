import SafeAreaView from 'react-native-safe-area-view';
import styled from 'styled-components/native';
import { Text, View, StatusBar } from 'react-native';
import { color } from './../../infrastructure/theme/colors';
export const SafeArea = styled(SafeAreaView)`

    flex: 1;
    background-color: ${(props)=>{
        props.theme.color.bg.primary
    }}
   
`;