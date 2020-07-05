import React, {FC, useState} from 'react';
import {FlatList} from 'react-native';
import Slide from './slide';
import {Container} from './onboardingStyles';

interface IProps {
  data: [
    {
      heading?: string;
      text?: string;
    },
  ];
  slideButtons: boolean;
}

const Onboarding: FC<IProps> = ({
  data = [{heading: 'Heading'}],
  slideButtons = true,
}) => {

  const [activeItem, setActiveItem] = useState<number>(0);

  const _getActiveSlide = (e) => {
    let contentOffset = e.nativeEvent.contentOffset;
    let viewSize = e.nativeEvent.layoutMeasurement;

    // Divide the horizontal offset by the width of the view to see which page is visible
    let pageNum = Math.floor(contentOffset.x / viewSize.width);
    setActiveItem(pageNum);
    console.log('scrolled to page ', pageNum);
  }

  return (
    <Container>
      <FlatList
        keyExtractor={(_item, index) => index.toString()}
        horizontal={true}
        onMomentumScrollEnd={_getActiveSlide}
        renderItem={({item}) => (
          <Slide activeSlide={activeItem} numberOfSlides={data.length} item={item} showButtons={slideButtons} />
        )}
        data={data}
      />
    </Container>
  );
};

export default Onboarding;
