import {heightPercentageToDP} from './index';

const SMALL = 1;
const MEDIUM = 2;
const LARGE = 3;

const spacing = (size: number): number => heightPercentageToDP(size);

export {spacing, SMALL, MEDIUM, LARGE};
