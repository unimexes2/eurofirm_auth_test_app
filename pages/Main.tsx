/// <reference types="nativewind/types" />
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import  { useEffect} from 'react';
import { FlatList} from 'react-native';
import { fetchProducts, Product } from '../helpers/Api';


type Props = {
    navigation: any;
    route: any;
}


const MainScreen = ({ navigation }: Props) => {

    const [products, setProducts] = useState<Product[]>([]);
    const [isLoad, setIsload] = useState(false);
  
    useEffect(() => {
        const loadProducts = async () => {
          const productsData = await fetchProducts();
          setProducts(productsData);
        };
        loadProducts();
        
      }, []);
      console.log(products, "api result in main screen")
  
    return (<FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => {setIsload(true);
           navigation.navigate('ProductDetails', { productId: item.id })}}>
            <View style={styles.productContainer}>
              <Image source={{ uri: item.thumbnail }} style={styles.productImage} />
              <View style={styles.productTextContainer}>
                <Text style={styles.productName}>{item.title}</Text>
                <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
                <Text style={styles.productDescription}>{item.description}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    );
  };
  
  const styles = StyleSheet.create({
    productContainer: {
      flexDirection: 'row',
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    productImage: {
      width: 80,
      height: 80,
      marginRight: 16,
    },
    productTextContainer: {
      flex: 1,
    },
    productName: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    productPrice: {
      fontSize: 14,
      color: '#888',
    },
    productDescription: {
        fontSize: 10,
        color: '#888',
      },
  }
  );



export default MainScreen;

