import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgTick(props) {
  return (
    <Svg viewBox="0 0 375.147 375.147" width={512} height={512} {...props}>
      <Path
        data-original="#000000"
        className="tick_svg__active-path"
        data-old_color="#000000"
        fill="#484848"
        d="M344.96 44.48L119.147 270.293l-88.96-88.96L0 211.52l119.147 119.147 256-256z"
      />
    </Svg>
  );
}

export default SvgTick;

