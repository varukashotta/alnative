import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgDownArrow(props) {
  return (
    <Svg viewBox="0 0 256 256" {...props}>
      <Path
        data-original="#000000"
        className="down-arrow_svg__active-path"
        data-old_color="#000000"
        fill="#484848"
        d="M225.813 48.907L128 146.72 30.187 48.907 0 79.093l128 128 128-128z"
      />
    </Svg>
  );
}

export default SvgDownArrow;

