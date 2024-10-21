import { FlatList, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { MENU_DATA } from '../../utils/menu_data';

const Home = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");  // State to track search input

  const categories = ["All", ...new Set(MENU_DATA.map((item) => item.item_category))];

  const filterdatamenu = MENU_DATA.filter(item =>
    (selectedCategory === "All" || item.item_category === selectedCategory) &&
    item.item_name.toLowerCase().includes(searchTerm.toLowerCase())  // Filter by search term
  );

  const renderItemVertical = ({ index, item }) => {
    return (
      <TouchableOpacity
        style={styles.verticalItem}
        onPress={() => { navigation.navigate('Product', { Product: item }) }}>
        <View>
          <Image source={{ uri: item.img }} style={styles.foodImage} />
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.foodName}>
            {item.item_name}
          </Text>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.foodRating}>
            ★{item.rating}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderItemHorizontal = ({ index, item }) => {
    return (
      <TouchableOpacity
        onPress={() => setSelectedCategory(item)}
        style={[
          styles.horizontalItem,
          selectedCategory === item && styles.selectedCategory,
        ]}>
        <View>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={[
              styles.categoryText,
              selectedCategory === item && styles.selectedCategoryText,
            ]}>
            {item}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>

      {/* Top section with brand name, image, and search bar */}
      <View style={styles.topSection}>
        <View>
          <Text style={styles.brandName}>Foodgo</Text>
          <Text style={styles.brandtext}>Order your favourite food!</Text>
        </View>
        <Image
          source={require("../../assets/profilepic.jpeg")}  // Profile image
          style={styles.profileImage}
        />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
        />
      </View>

      {/* Horizontal Category List */}
      <View style={styles.horizontalListContainer}>
        <FlatList
          horizontal
          data={categories}
          renderItem={renderItemHorizontal}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      {/* Vertical Food List */}
      <View style={styles.verticalListContainer}>
        <FlatList
          data={filterdatamenu}
          renderItem={renderItemVertical}
          keyExtractor={(item) => item?.id.toString()}
          numColumns={2}
        />
      </View>

    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 5,
    paddingTop: 40
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
    elevation: 4,  // Add shadow to the top section
  },
  brandName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',  // Darker text for brand name
  },
  brandtext: {
    fontSize: 18,
    paddingVertical: 0,
    paddingHorizontal: 0,
    color: '#6A6A6A',  // Darker text for brand name
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 20,  // Circular profile image
  },
  searchContainer: {
    padding: 10,
  },
  searchInput: {
    backgroundColor: "#E0E0E0",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
    fontSize: 16,


  },
  horizontalListContainer: {
    marginTop: 16,
  },
  verticalListContainer: {
    flex: 1,
    marginTop: 10,
  },
  verticalItem: {
    marginVertical: 8,
    marginHorizontal: 6,
    paddingHorizontal: 6,
    paddingVertical: 10,
    borderRadius: 12,
    width: "47%",
    backgroundColor: "white",
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  horizontalItem: {
    marginVertical: 8,
    marginHorizontal: 8,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    backgroundColor: "#E0E0E0",
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  selectedCategory: {
    backgroundColor: "#FF3D00",
  },
  foodImage: {
    height: 120,
    width: 120,
    borderRadius: 8,
  },
  foodName: {
    fontSize: 16,
    color: "#333",
    fontWeight: '500',
    marginTop: 6,
    textAlign: 'center',
  },
  foodRating: {
    fontSize: 14,
    color: "#FFB400",
    fontWeight: '500',
    textAlign: 'center',
  },
  categoryText: {
    fontSize: 14,
    color: "#333",
    fontWeight: '500',
    textAlign: 'center',
  },
  selectedCategoryText: {
    color: "white",
  },
});
