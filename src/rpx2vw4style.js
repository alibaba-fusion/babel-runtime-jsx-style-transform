import rpx2vw from './rpx2vw';
import { RPX_PROPERTY_JSX } from './constants';

function rpx2vw4style(input) {
  const inputType = toString.call(input);
  if (inputType === '[object Object]') {
    for (const cssProperty in input) {
      if (input.hasOwnProperty(cssProperty)) {
        const value = input[cssProperty];
        if (RPX_PROPERTY_JSX.indexOf(cssProperty) !== -1) {
          input[cssProperty] = rpx2vw(value);
        }
      }
    }
  } else if (inputType === '[object String]') {
    const styles = input.split(';');
    const newStyles = styles.map((style) => {
      if (!style) return;
      const [key, value] = style.split(':');
      console.log('value', value)
      return `${key.trim()}: ${rpx2vw(value.trim())}`;
    });
    return newStyles.join(';');
  }
  return input;
}

export default rpx2vw4style;
