import { Image, StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';

const sliderImages = [
  require('./images/7.jpg'),
  require('./images/5.jpg'),
  require('./images/6.jpg'),
  require('./images/8.jpg'),
];

const OfferSlider = () => {
  return (
    <View style={styles.sliderContainer}>
      <Swiper autoplay={true} showsPagination={true} dotColor="#ccc" activeDotColor="#FF914D">
        {sliderImages.map((img, idx) => (
          <View key={idx} style={styles.slide}>
            <Image source={img} style={styles.slideImage} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default OfferSlider;

const styles = StyleSheet.create({
  sliderContainer: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
