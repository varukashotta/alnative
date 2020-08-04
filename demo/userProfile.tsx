import React from 'react';
import UserProfile from '../src/components/userProfile';
import {Text} from 'react-native';

const UserProfileDemo = () => <UserProfile header={<Text>Header</Text>} children={<Text>Body</Text>}/>

export default UserProfileDemo
