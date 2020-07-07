import React, {FC, useRef, useState} from 'react';
import {FlatList, StatusBar} from 'react-native';
import Slide from './slide';
import {Container} from './onboardingStyles';

interface IProps {
  data: [
    {
      heading?: string;
      text?: string;
    },
  ];
  statusBar?: boolean;
  slideButtons: boolean;
  _getStarted: () => void;
}

const Onboarding: FC<IProps> = ({
  data = [{heading: 'Heading'}],
  slideButtons = true,
  statusBar = true,
    _getStarted
}) => {
  const [activeItem, setActiveItem] = useState<number>(0);
  const refFlatList = useRef<any>();
  const _getActiveSlide = (e) => {
    let contentOffset = e.nativeEvent.contentOffset;
    let viewSize = e.nativeEvent.layoutMeasurement;

    // Divide the horizontal offset by the width of the view to see which page is visible
    let pageNum = Math.floor(contentOffset.x / viewSize.width);
    setActiveItem(pageNum);
  };

  const _scrollToIndex = (e) => {
    console.log(activeItem + 1);
    return refFlatList.current.scrollToIndex({
      animated: true,
      index: e === '-' ? activeItem - 1 : activeItem + 1,
    });
  };

  return (
    <Container>
      <StatusBar hidden={statusBar} />
      <FlatList
        keyExtractor={(_item, index) => index.toString()}
        horizontal={true}
        onMomentumScrollEnd={_getActiveSlide}
        showsHorizontalScrollIndicator={false}
        ref={refFlatList}
        renderItem={({item}) => (
          <Slide
            _navigateToPage={_scrollToIndex}
            activeSlide={activeItem}
            numberOfSlides={data.length}
            item={item}
            showButtons={slideButtons}
            _getStarted={_getStarted}
          />
        )}
        pagingEnabled={true}
        data={data}
      />
    </Container>
  );
};

export default Onboarding;
