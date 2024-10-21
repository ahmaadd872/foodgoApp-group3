import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';

const Order = ({ route, navigation }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [Taxvalue, settaxvalue] = useState(0.3);
  const [Deliveryfees, setdeliveryfees] = useState(1.5);
  const [totalPrice, settotalPrice] = useState(0);
  const [time, settime] = useState("15-30");
  const [selectedCard, setSelectedCard] = useState(null); // State to track the selected card
  const { total } = route.params;

  useEffect(() => {
    settotalPrice(total + Taxvalue + Deliveryfees);
  }, [total, Taxvalue, Deliveryfees]);

  const payment = () => {
    // Payment logic here
  };

  // Function to handle card selection
  const handleCardSelect = (card) => {
    setSelectedCard(card);
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

      <View style={styles.orderSummary}>
        <Text style={styles.title}>Order Summary</Text>
        <View style={styles.orderDetails}>
          <Text style={styles.orderText}>Order: ${total.toFixed(2)}</Text>
          <Text style={styles.orderText}>Taxes: ${Taxvalue}</Text>
          <Text style={styles.orderText}>Delivery fees: ${Deliveryfees}</Text>
        </View>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total:</Text>
          <Text style={styles.totalPrice}>${totalPrice.toFixed(2)}</Text>
        </View>
        <Text style={styles.estimatedTime}>Estimated delivery time: {time} mins</Text>
      </View>

      <View style={styles.paymentMethods}>
        <Text style={styles.paymentTitle}>Payment methods</Text>
        <View style={styles.cardContainer}>
          {/* Credit Card */}
          <TouchableOpacity onPress={() => handleCardSelect('credit')}>
            <View
              style={[
                styles.card,
                selectedCard === 'credit' ? styles.selectedCard : null, // Conditional styling
              ]}
            >
              <Image source={require('../../assets/masterlogo.png')} style={styles.cardLogo} />
              <View>
                <Text style={styles.cardText}>Credit card</Text>
                <Text style={styles.cardNumber}>5105 **** **** 0505</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* Debit Card */}
          <TouchableOpacity onPress={() => handleCardSelect('debit')}>
            <View
              style={[
                styles.card,
                selectedCard === 'debit' ? styles.selectedCard : null, // Conditional styling
              ]}
            >
              <Image source={require('../../assets/visalogo.png')} style={styles.cardLogo} />
              <View>
                <Text style={styles.cardText}>Debit card</Text>
                <Text style={styles.cardNumber}>3566 **** **** 0505</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.checkboxContainer}>
          <Text style={styles.checkboxLabel}>Save card details for future payments</Text>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.finalPrice}>Total price: ${totalPrice.toFixed(2)}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Success')} style={styles.payButton}>
          <Text style={styles.buttonText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  backIcon: {
    fontSize: 20,
    color: '#333',
  },
  searchIcon: {
    fontSize: 20,
    color: '#333',
  },
  orderSummary: {
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingVertical: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  orderDetails: {
    marginBottom: 10,
  },
  orderText: {
    fontSize: 16,
    color: '#707070',
    marginBottom: 5,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#EF2A39',
  },
  estimatedTime: {
    fontSize: 14,
    color: '#707070',
    marginTop: 10,
  },
  paymentMethods: {
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingVertical: 30,
    marginBottom: 60,
  },
  paymentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  cardContainer: {
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  selectedCard: {
    backgroundColor: 'brown', 
   
  },
  cardLogo: {
    height: 42,
    width: 70,
    marginRight: 15,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  cardNumber: {
    fontSize: 14,
    color: '#707070',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: 10,
    fontSize: 14,
    color: '#707070',
  },
  bottomContainer: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  finalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#EF2A39',
  },
  payButton: {
    backgroundColor: '#EF2A39',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
