import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, FlatList, Image,ActivityIndicator } from 'react-native';
import { useGetProductsByIdQuery, useGetProductsQuery } from './services/productsApi';


export default function Home() {
    const {data:productsData,error,isLoading,isFetching}=useGetProductsQuery()
    // const {data:dataById}=useGetProductsByIdQuery(1)
    console.log(productsData)


  return (
    
      <View style={{ flex: 1 }}>
        {isLoading?
         <View style={[styles.container, styles.horizontal]}>
         <ActivityIndicator size="large" color="#0000ff" />
       </View>
        :
        <FlatList
          data={productsData}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ width: '95%', height: 150, backgroundColor: '#FFFFFF', borderRadius: 8, alignSelf: 'center', 
            marginTop: '5%', flexDirection: 'row', }} >
              <View style={{ width: '45%', height: '100%' }} >
                <Image style={{ resizeMode: 'contain', width: '100%', height: '100%' }} source={{ uri: String(item.image) }} />
              </View>
              <View style={{ flexDirection: 'column', width: '55%' }} >
                <Text style={{color:'black',fontWeight:'bold', marginStart: '5%'}}>{item.title}</Text>
                <View style={{ marginTop: '5%' }} >
                  <Text style={{color:'black',fontWeight:'bold', marginStart: '5%'}} >Price :Rs {String(item.price)}/- </Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:"space-evenly",width:'90%'}} >
                <View style={{width:'40%',backgroundColor:'#FFA31B',borderRadius:8,marginTop:'5%',height:40,justifyContent:'center'}} >
                    <Text style={{textAlign:'center',fontWeight:'bold',color:'black'}} >Buy Now</Text>
                </View>
                <View style={{width:'40%',backgroundColor:'#FFD815',borderRadius:8,marginTop:'5%',height:40,justifyContent:'center'}} >
                    <Text style={{textAlign:'center',fontWeight:'bold',color:'black'}} >Add to cart</Text>
                </View>
                {/* <Text> {item.rating.rate} </Text>
                <Text> {item.rating.count} </Text> */}
                </View>
              </View>
            </View>
          )}
        />}
      </View>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});