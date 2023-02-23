import styled from "styled-components/native";
import { theme } from './../../infrastructure/theme/index';

const defaultTextStyles = (theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.color.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme) => `
    color: ${theme.color.text.quaternary};
    font-size: ${theme.fontSizes.button};
`;

const hint = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme) => `
    color: ${theme.color.text.quaternary};
`;

const caption = (theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
    color:${theme.color.text.error};
`;

const label = (theme) => `
    font-family: ${theme.fonts.myfont};
    font-size: ${theme.fontSizes.body};
    // font-weight: ${theme.fontWeights.medium};
    padding:${theme.space[3]};
    color:${theme.color.text.quaternary};
`;

const variants = {
  body,
  label,
  caption,
  error,
  hint,
};

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};