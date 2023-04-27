import { useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { RestaurantContext } from "../App";

export default function Random(){

    const { setSelectedRestaurant } = useContext(RestaurantContext)

    const chooseRandom = () => {
        const index = Math.Floor(Math.random() * foodList.length)
        setSelectedRestaurant(foodList[index])
        navigation.navigate('Details')
    }
    
    return (
        <TouchableOpacity onPress={chooseRandom}>
            <View style={styles.fab}>
                <Text style={styles.fabText}>🎲</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
 fabText:{
    fontSize: 35,
    marginLeft: 3,
    marginBottom: 2,
 },
 
    fab: {
    position: 'absolute',
    bottom: 30,
    left: 100,
    backgroundColor: '#15317E',
    padding: 5,
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'whitesmoke',
    shadowColor: 'black',
    elevation: 4,
 },

})