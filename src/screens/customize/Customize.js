import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { React, useState, useEffect } from 'react';
import Slider from '@react-native-community/slider';

const Customize = ({navigation}) => {
    const [value, setValue] = useState(5);
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(16.49);

    useEffect(() => {
        // Logic to update total price if needed
    }, [quantity]);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const renderItemHorizontal = ({ item }) => {
        return (
            <TouchableOpacity style={styles.horizontalItem}>
                <View>
                    <Image source={item.image} style={styles.itemImage} />
                    <Text style={styles.categoryText}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            {/* Top Section with Burger Image and Slider */}
            <View style={styles.topSection}>
                <Image source={require("../../assets/customize.png")} style={styles.burgerImage} />
                <View style={styles.sliderContainer}>
                    <Text style={styles.customizeText}>Customize Your Burger to Your Tastes. Ultimate Experience</Text>
                    <Text style={styles.sliderLabel}>Spicy</Text>
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
                    <View style={styles.sliderLabelsContainer}>
                        <Text style={styles.mildLabel}>Mild</Text>
                        <Text style={styles.hotLabel}>Hot</Text>
                    </View>

                    <View style={styles.quantityContainer}>
                        <Text style={styles.portionText}>Portion</Text>
                        <TouchableOpacity onPress={decreaseQuantity} style={styles.button}>
                            <Text style={styles.buttonText}>–</Text>
                        </TouchableOpacity>
                        <Text style={styles.quantityText}>{quantity}</Text>
                        <TouchableOpacity onPress={increaseQuantity} style={styles.button}>
                            <Text style={styles.buttonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Toppings Section */}
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Toppings</Text>
                <FlatList
                    horizontal
                    data={[{ name: 'Tomato' }, { name: 'Onions', }]} // Example data
                    renderItem={renderItemHorizontal}
                    keyExtractor={(item, index) => index.toString()}
                    showsHorizontalScrollIndicator={false}
                    style={styles.horizontalList}
                />
            </View>

            {/* Side Options Section */}
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Side options</Text>
                <FlatList
                    horizontal
                    data={[{ name: 'Fries' }, { name: 'Salad' }]} // Example data
                    renderItem={renderItemHorizontal}
                    keyExtractor={(item, index) => index.toString()}
                    showsHorizontalScrollIndicator={false}
                    style={styles.horizontalList}
                />
            </View>

            {/* Bottom Section with Price and Order Button */}
            <View style={styles.bottomSection}>
                <Text style={styles.totalText}>Total</Text>
                <Text style={styles.priceText}>${totalPrice.toFixed(2)}</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Order', { totalPrice })}
                    style={styles.orderButton}>
                    <Text style={styles.orderButtonText}>ORDER NOW</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Customize;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    topSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    burgerImage: {
        width: 217,
        height: 297,
    },
    sliderContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 10,
    },
    customizeText: {
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 10,
        color: '#333',
    },
    sliderLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    slider: {
        width: 220,
        height: 40,
    },
    sliderLabelsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 220,
        paddingHorizontal: 5,
    },
    mildLabel: {
        fontSize: 12,
        color: 'green',
    },
    hotLabel: {
        fontSize: 12,
        color: 'red',
    },
    portionText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    button: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 10,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    quantityText: {
        fontSize: 18,
        color: '#333',
    },
    sectionContainer: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    horizontalList: {
        paddingVertical: 10,
    },
    horizontalItem: {
        backgroundColor: '#f8f8f8',
        borderRadius: 10,
        padding: 10,
        marginRight: 10,
        alignItems: 'center',
        width: 80,
        height: 80,
    },
    itemImage: {
        width: 40,
        height: 40,
        marginBottom: 5,
    },
    categoryText: {
        fontSize: 14,
        color: '#333',
        textAlign: 'center',
    },
    bottomSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
    },
    totalText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    priceText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'red',
    },
    orderButton: {
        backgroundColor: 'red',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 10,
    },
    orderButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
