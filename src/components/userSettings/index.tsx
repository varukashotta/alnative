import * as React from 'react';
import {FC, useEffect, useState} from 'react';
import {View} from 'react-native';
import Font, {h4, h5, p} from '../utils/generic/fonts';
import {
  Heading,
  ProfileButton,
  ProfileIcon,
  ProfileText,
  SectionContainer,
  SettingsItem,
} from './userSettingsStyles';
import {green} from '../utils/generic/colors';
import {SvgXml} from 'react-native-svg';
// @ts-ignore
import userIcon from './icons/user.svg';
import {Layout} from '../utils';


const defaultData = [
  {
    title: 'Account Settings',
    data: [{title: 'Personal Information'}, {title: 'Notifications'}],
  },
  {
    title: 'Auth',
    data: [{title: 'Change Password'}, {title: 'Logout'}],
  },
];

interface ItemProps {
  title: string;
  icon?: string;
  _itemPressed: (title) => void;
}

const Item = ({title, icon, _itemPressed}: ItemProps) => (
  <SettingsItem onPress={() => _itemPressed(title)}>
    <Font size={h5}>{title}</Font>
    {icon && (
      <SvgXml
        width={Layout.widthPercentageToDP(5)}
        height={Layout.widthPercentageToDP(5)}
        xml={icon}
      />
    )}
  </SettingsItem>
);

interface SectionProps {
  firstName: string;
  _profileLink: () => void;

  sectionsData?: any[];
  _itemPressed: (e) => void;
}

const UserSettings: FC<SectionProps> = ({
  firstName = 'FirstName',
  sectionsData,
  _profileLink,
  _itemPressed,
}) => {
  const [updatedData, setUpdatedData] = useState(defaultData);

  const updateData = () => {
    if (sectionsData) {
      sectionsData.map((item) => {
        return defaultData.splice(1, 0, item);
      });
      setUpdatedData(defaultData);
    }
  };

  useEffect(() => {
    updateData();
  }, []);

  return (
    <View style={{flex: 1}}>
      <ProfileButton onPress={_profileLink}>
        <ProfileIcon>
          <SvgXml
            width={Layout.widthPercentageToDP(12)}
            height={Layout.widthPercentageToDP(12)}
            xml={userIcon}
          />
        </ProfileIcon>
        <ProfileText>
          <Font size={h4}>{firstName}</Font>
          <Font size={p} color={green}>
            Show Profile
          </Font>
        </ProfileText>
      </ProfileButton>
      <SectionContainer
        sections={updatedData}
        keyExtractor={(item: any, index) => item + index}
        renderItem={({item}: {item: any}) => (
          <Item _itemPressed={(e) => _itemPressed(e)} title={item.title} />
        )}
        renderSectionHeader={({section: {title}}) => (
          <Heading>
            <Font size={p}>{title} </Font>
          </Heading>
        )}
      />
    </View>
  );
};

export default UserSettings;
