declare module 'facepaint' {
  type BaseArg = object | Array<object>
  type Arg = BaseArg | Array<BaseArg>

  export type Selector = string

  export interface DynamicStyle {
    [key: string]: {
      [key: string]: string | number
    }
  }

  export interface DynamicStyleFunction {
    (...args: Array<Arg>): DynamicStyle
  }

  export interface FacepaintOptions {
    literal?: boolean
    overlap?: boolean
  }

  function facepaint(
    breakpoints: Array<Selector>,
    options?: FacepaintOptions
  ): DynamicStyleFunction

  export default facepaint
}
