import React, {FC} from 'react';
import {
  Container,
  DataContainer,
  ImageContainer,
  MainContainer,
} from './userProfileStyles';

interface IProps {
  header: React.ReactNode;
  children: React.ReactNode;
}
const UserProfile: FC<IProps> = ({children, header}) => {
  return (
    <Container contentContainerStyle={{flex: 1}}>
      <MainContainer>
        <ImageContainer>{header}</ImageContainer>
        <DataContainer>{children}</DataContainer>
      </MainContainer>
    </Container>
  );
};

export default UserProfile;
