import styled from 'styled-components';
import { Button, ButtonProps } from '@mui/material';
import {
  IColorWrapperProps,
  IDividerProps,
  IFlexWrapperProps,
  IOuterWrapperProps,
} from './types';

export const StyledDivider = styled.div<IDividerProps>`
  width: ${({ width }) => (Number.isInteger(width) ? `${width}px` : width)};
  height: ${({ height }) => (Number.isInteger(height) ? `${height}px` : height)};
`;

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ColorWrapper = styled.div<IColorWrapperProps>`
  background: ${({ background = '#fff' }) => background};
  color: ${({ text = '#000' }) => text};
`;

export const FlexWrapper = styled.div<IFlexWrapperProps>`
  display: flex;
  flex-direction: ${({ direction = 'row' }) => direction};
  justify-content: ${({ justify = 'flex-start' }) => justify};
  align-items: ${({ align = 'flex-start' }) => align};
  flex-wrap: ${({ wrap = 'wrap' }) => wrap};
`;

export const OuterWrapper = styled.div<IOuterWrapperProps>`
  padding: ${({ padding }) => (Number.isInteger(padding) ? `${padding}px` : padding)};
  margin: ${({ margin }) => (Number.isInteger(margin) ? `${margin}px` : margin)};
  border: ${({ borderThickness = '1px', borderColor }) =>
    `${borderColor} ${
      Number.isInteger(borderThickness) ? `${borderThickness}px` : borderThickness
    } solid`};
  border-radius: ${({ borderRadius }) =>
    Number.isInteger(borderRadius) ? `${borderRadius}px` : borderRadius};
  background: ${({ background = '#fff' }) => background};
  color: ${({ text = '#000' }) => text};
`;

export const StyledButton = styled(Button)<ButtonProps>`
  /* border-color: gray;
  color: gray; */
`;
