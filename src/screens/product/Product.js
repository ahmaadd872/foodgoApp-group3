import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Slider from '@react-native-community/slider';

const Product = ({ route, navigation }) => {
  const [value, setValue] = useState(5);
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(1);

  const { Product } = route.params;

  useEffect(() => {
    const productPrice = parseFloat(Product.price);
    setTotal(quantity * productPrice);
  }, [quantity]);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.searchIcon}>🔍</Text>
        </TouchableOpacity>
      </View>
      <View style={{backgroundColor:"white"}}>
      <Image source={{ uri: Product.img }} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{Product.item_name}</Text>
        <Text style={styles.subText}>★ 4.9 - 26 mins</Text>
        <Text style={styles.description}>{Product.item_description}</Text>

        {/* Spicy and Portion Section */}
        <View style={styles.controlContainer}>
          {/* Spicy Slider */}
          <View style={styles.spicyContainer}>
            <Text style={styles.spicyText}>Spicy</Text>
            <Slider
              style={styles.slider}
              onValueChange={(sliderValue) => setValue(sliderValue)}
              minimumValue={0}
              maximumValue={10}
              value={value}
              minimumTrackTintColor="red"
              maximumTrackTintColor="lightgray"
              thumbTintColor="red"
            />
            {/* Mild and Hot labels below the slider */}
            <View style={styles.sliderLabelsContainer}>
              <Text style={styles.mildLabel}>Mild</Text>
              <Text style={styles.hotLabel}>Hot</Text>
            </View>
          </View>

          {/* Portion Control */}
          <View style={styles.quantityContainer}>
            <Text style={styles.spicyText}>Portion</Text>
            <TouchableOpacity onPress={decreaseQuantity} style={styles.circleButton}>
              <Text style={styles.circleButtonText}>−</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity onPress={increaseQuantity} style={styles.circleButton}>
              <Text style={styles.circleButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.priceButton}>
            <Text style={styles.priceText}>${total.toFixed(2)}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Order', { total })}
            style={styles.orderButton}
          >
            <Text style={styles.buttonText}>Order Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  backIcon: {
    fontSize: 20,
    color: 'black',
  },
  searchIcon: {
    fontSize: 20,
    color: '#fff',
  },
  image: {
    height: 250,
    width: 250,
    alignSelf: 'center',
    marginVertical: 20,
   
   
  },
  detailsContainer: {
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subText: {
    color: '#707070',
    fontSize: 14,
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  controlContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  spicyContainer: {
    flex: 1,
    marginRight: 10, // Adds space between the slider and the portion control
  },
  slider: {
    width: '100%',
    marginVertical: 5,
  },
  sliderLabelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  spicyText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
    paddingHorizontal:5,
  },
  mildLabel: {
    fontSize: 12,
    color: 'green',
  },
  hotLabel: {
    fontSize: 12,
    color: 'red',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal:5,
  },
  circleButton: {
    backgroundColor: '#EF2A39',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal:5
  },
  circleButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  quantityText: {
    fontSize: 18,
    color: '#333',
    marginHorizontal: 10,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 100,
  },
  priceButton: {
    backgroundColor: '#EF2A39',
    borderRadius: 10,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  orderButton: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
