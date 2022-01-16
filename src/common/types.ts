export interface IDividerProps {
  width?: string | number;
  height?: string | number;
}

export interface IFlexWrapperProps {
  direction?: 'row' | 'column';
  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  align?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
  wrap?: 'wrap' | 'no-wrap' | 'wrap-reverse';
}

export interface IOuterWrapperProps {
  padding?: string | number;
  margin?: string | number;
  borderColor?: string;
  borderThickness?: string | number;
  borderRadius?: string | number;
  background?: string;
  text?: string;
}

export interface IColorWrapperProps {
  background?: string;
  text?: string;
}
