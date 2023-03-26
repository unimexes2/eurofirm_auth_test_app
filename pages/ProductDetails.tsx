import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import  { useEffect,useState} from 'react';
import { fetchProduct, Product } from '../helpers/Api';
import { View, Text, Image, ScrollView,StyleSheet } from 'react-native';

type Props = {
    navigation: any;
    route: any;
}


const ProductDetails = ({ route, navigation }: Props): JSX.Element => {

const product  = route.params;
const [productDetail, setProductDetail] = useState<any>([]);
const [isLoad, setIsload] = useState(false);

  useEffect(() => {
    setProductDetail([]);
 
    const loadProduct = async () => {
        const productData = await fetchProduct(product);
        setProductDetail(productData);
      };
      loadProduct();
      setIsload(true);
      
    }, [route.params]);



return (
    
   <ScrollView style={styles.container}>
           {productDetail.title&&isLoad?
        <>
      <View style={styles.imageContainer}>
      <Image source={{ uri:productDetail.thumbnail }} style={styles.image} />
      </View>
    <View style={styles.detailsContainer}>
        <Text style={styles.title}>{productDetail.title}</Text>
        <Text style={styles.brand}>{productDetail.brand}</Text>
        <Text style={styles.category}>{productDetail.category}</Text>
        <Text style={styles.description}>{productDetail.description}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>{productDetail.rating.toFixed(1)}</Text>
            <MaterialIcons name="star" size={20} color="#FFC107" style={styles.starIcon} />
          </View>
    
        <Text style={styles.price}>{productDetail.discountPercentage > 0 ? productDetail.discountedPrice :productDetail.formattedPrice}</Text>
         {productDetail.discountPercentage > 0 && (
        <Text style={styles.discount}>Discount: {productDetail.discountPercentage}% off</Text>
        )}
        <Text style={styles.stock}>Stock: {productDetail.stock} units available</Text>
      </View>
      <View style={styles.imagesContainer}>
        {productDetail.images.map((image:string, index:string) => (
          <Image key={index} source={{ uri: image }} style={styles.imageThumb} />
        ))}
    </View></>:null}
   </ScrollView>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 16,
      paddingVertical: 8,
    },
    imageContainer: {
      alignItems: 'center',
      marginBottom: 16,
    },
    image: {
      width: '100%',
      height: 300,
      resizeMode: 'contain',
    },
    detailsContainer: {
      flex: 1,
      marginBottom: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    brand: {
      fontSize: 16,
      marginBottom: 8,
      color: '#999',
    },
    category: {
      fontSize: 16,
      marginBottom: 8,
      color: '#999',
    },
    description: {
      fontSize: 16,
      marginBottom: 16,
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
    rating: {
      fontSize: 16,
      marginRight: 8,
    },
    starIcon: {
      marginRight: 8,
    },
    price: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    discount: {
      fontSize: 16,
      marginBottom:8
    },
    stock: {
      fontSize: 16,
      marginBottom: 8,
    },
    imagesContainer: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginBottom: 16,
    },
    imageThumb: {
      width: '30%',
      height: 150,
      resizeMode: 'cover',
      margin:2
    },
    imageList: {
      width: '15%',
      height: 20,
      resizeMode: 'contain',
      margin:2
    },
  });


export default ProductDetails;
