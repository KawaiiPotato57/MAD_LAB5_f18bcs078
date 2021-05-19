import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  ImageBackground,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const image = {
  uri: 'https://www.tactical-russia.com/image/cache/data/MVD-178-800x800.jpg',
};

function Product_List({ navigation }) {
  return (
    <View style={styles.containerMenu}>
      <ImageBackground source={image} style={styles.image}>
        <View style={{ margin: 15 }}>
          <View style={{ flexDirection: 'row' }}>

            <View style={{ width: '60%' }}>
              <Text style={styles.productName}>Entry Denial Device</Text>
              <Text style={styles.productPrice}>10,000 Rubles</Text>
            </View>

            <View style={{ width: '20%' }}>
              <Image
                source={{
                  uri:
                    'https://www.cosplayinspire.com/pub/media/catalog/product/cache/dd9b268b29f92e71b2b8e02fe4de042c/r/a/rainbow-six-siege-kapkan-elite-set-entry-denial-device-cosplay-replica-prop-for-sale.jpg',
                }}
                style={styles.productImage}
              />
            </View>

            <View style={{ marginLeft: 10, marginVertical: 30, width: '20%' }}>
              <Button
                title="View"
                color="brown"
                onPress={() => {
                  navigation.navigate('Product_Details', {
                    item: 'EDD',
                  });
                }}
              />
            </View>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: '60%' }}>
              <Text style={styles.productName}>Cluster Charge</Text>
              <Text style={styles.productPrice}>12,000 Rubles</Text>
            </View>

            <View style={{ width: '20%' }}>
              <Image
                source={{
                  uri:
                    'https://i.pinimg.com/originals/d8/bf/3d/d8bf3d6952475d18c824f6b563a3517a.jpg',
                }}
                style={styles.productImage}
              />
            </View>

            <View style={{ marginLeft: 10, marginVertical: 30, width: '20%' }}>
              <Button
                title="View"
                color="brown"
                onPress={() => {
                  navigation.navigate('Product_Details', {
                    item: 'Charge',
                  });
                }}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

function Product_Details({ route }) {
  const { item } = route.params;
  if (item == 'EDD') {
    return (
      <View style={{ margin: 15 }}>
        <View style={{ width: '20%' }}>
          <Image
            source={{
              uri:
                'https://www.cosplayinspire.com/pub/media/catalog/product/cache/dd9b268b29f92e71b2b8e02fe4de042c/r/a/rainbow-six-siege-kapkan-elite-set-entry-denial-device-cosplay-replica-prop-for-sale.jpg',
            }}
            style={{ marginHorizontal: 10, width: 250, height: 250 }}
          />
        </View>

        <View>
          <Text style={styles.productName}>Entry Denial Device</Text>
          <Text
            style={{
              color: 'blue',
              marginHorizontal: 10,
              marginBottom: 10,
              borderBottomWidth: 1,
              borderBottomEndRadius: 20,
            }}>
            10,000 Rubles
          </Text>
          <Text style={{ marginHorizontal: 10, color: 'brown' }}>
            Entry Denial Device (EDD-MK II). This trap is a packed C4 charge
            activated when motion is detected. It can be placed on door and
            window frames -- denying key entry points for attackers.
          </Text>
        </View>
      </View>
    );
  } else if (item == 'Charge') {
    return (
      <View style={{ margin: 15 }}>
        <View style={{ width: '20%' }}>
          <Image
            source={{
              uri:
                'https://i.pinimg.com/originals/d8/bf/3d/d8bf3d6952475d18c824f6b563a3517a.jpg',
            }}
            style={{ marginHorizontal: 10, width: 250, height: 250 }}
          />
        </View>

        <View>
          <Text style={styles.productName}>Cluster Charge</Text>
          <Text
            style={{
              color: 'blue',
              marginHorizontal: 10,
              marginBottom: 10,
              borderBottomWidth: 1,
              borderBottomEndRadius: 20,
            }}>
            12,000 Rubles
          </Text>
          <Text style={{ marginHorizontal: 10, color: 'brown' }}>
            The “Matryoshka” cluster charge is a breaching charge that is
            designed to inflict significant damage to hostiles within the room
            that is being breached. When detonated, the device propels multiple
            black puck shaped explosive grenades into the room from where it was
            mounted.
          </Text>
        </View>
      </View>
    );
  }
}

function Employees_List({ navigation }) {
  return (
    <View style={styles.containerMenu}>
      <ImageBackground source={image} style={styles.image}>
        <View style={{ margin: 15 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: '60%' }}>
              <Text style={styles.employeeName}>VLADAMIR PUTIN</Text>
            </View>

            <View style={{ width: '20%' }}>
              <Image
                source={{
                  uri: 'https://bit.ly/33TLgdh',
                }}
                style={styles.productImage}
              />
            </View>

            <View style={{ marginLeft: 10, marginVertical: 30, width: '20%' }}>
              <Button
                title="View"
                color="brown"
                onPress={() => {
                  navigation.navigate('Employees_Details', {
                    item: 'putin',
                  });
                }}
              />
            </View>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: '60%' }}>
              <Text style={styles.employeeName}>MOTHAR RUSSIA</Text>
            </View>

            <View style={{ width: '20%' }}>
              <Image
                source={{
                  uri: 'https://bit.ly/3bzlOxV',
                }}
                style={styles.productImage}
              />
            </View>

            <View style={{ marginLeft: 10, marginVertical: 30, width: '20%' }}>
              <Button
                title="View"
                color="brown"
                onPress={() => {
                  navigation.navigate('Employees_Details', {
                    item: 'russia',
                  });
                }}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

function Employees_Details({ route }) {
  const { item } = route.params;
  if (item == 'putin') {
    return (
      <View style={{ margin: 15 }}>
        <View style={{ width: '20%' }}>
          <Image
            source={{ uri: 'https://bit.ly/2Qwd04J' }}
            style={{ marginHorizontal: 10, width: 250, height: 250 }}
          />
        </View>

        <View>
          <Text style={styles.productName}>PUTIN-SAMA</Text>
          <Text
            style={{
              color: 'blue',
              marginHorizontal: 10,
              marginBottom: 10,
              borderBottomWidth: 1,
              borderBottomEndRadius: 20,
            }}>
            UwU
          </Text>
          <Text style={{ marginHorizontal: 10, color: 'brown' }}>
            Vladimir Vladimirovich Putin
          </Text>
        </View>
      </View>
    );
  } else if (item == 'russia') {
    return (
      <View style={{ margin: 15 }}>
        <View style={{ width: '20%' }}>
          <Image
            source={{ uri: 'https://bit.ly/3hBo0sI' }}
            style={{ marginHorizontal: 10, width: 250, height: 250 }}
          />
        </View>

        <View>
          <Text style={styles.productName}>It is Also Putin</Text>
          <Text
            style={{
              color: 'blue',
              marginHorizontal: 10,
              marginBottom: 10,
              borderBottomWidth: 1,
              borderBottomEndRadius: 20,
            }}>
            I AM RUSSIA
          </Text>
          <Text style={{ marginHorizontal: 10, color: 'brown' }}>
            All Hail Russia(Putin).
          </Text>
        </View>
      </View>
    );
  }
}

function Orders_List({ navigation }) {
  return (
    <View style={styles.containerMenu}>
      <ImageBackground source={image} style={styles.image}>
        <View style={{ margin: 15 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: '50%' }}>
              <Text style={styles.productName}> 5 EDD's</Text>
            </View>

            <View style={{ width: '20%' }}>
              <Image
                source={{
                  uri:
                    'https://www.cosplayinspire.com/pub/media/catalog/product/cache/dd9b268b29f92e71b2b8e02fe4de042c/r/a/rainbow-six-siege-kapkan-elite-set-entry-denial-device-cosplay-replica-prop-for-sale.jpg',
                }}
                style={styles.productImage}
              />
            </View>

            <View style={{ marginLeft: 10, marginVertical: 30, width: '30%' }}>
              <Button
                title="View Order"
                color="brown"
                onPress={() => {
                  navigation.navigate('Order_Details', {
                    item: 'EDD',
                  });
                }}
              />
            </View>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: '50%' }}>
              <Text style={styles.productName}>3 Cluster Charges</Text>
            </View>

            <View style={{ width: '20%' }}>
              <Image
                source={{
                  uri:
                    'https://i.pinimg.com/originals/d8/bf/3d/d8bf3d6952475d18c824f6b563a3517a.jpg',
                }}
                style={styles.productImage}
              />
            </View>

            <View style={{ marginLeft: 10, marginVertical: 30, width: '30%' }}>
              <Button
                title="View Order"
                color="brown"
                onPress={() => {
                  navigation.navigate('Order_Details', {
                    item: 'Charge',
                  });
                }}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

function Order_Details({ route }) {
  const { item } = route.params;
  if (item == 'EDD') {
    return (
      <View style={styles.containerMenu}>
        <View style={{ margin: 15 }}>

          <Text style={styles.productName}>5 EDD's </Text>

          <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
            <View style={{ width: '50%' }}>
              <Text style={styles.productPrice}>Agent Id:</Text>
              <Text style={styles.productPrice}>Issued Date:</Text>
              <Text style={styles.productPrice}>Approval By:</Text>
              <Text style={styles.productPrice}>Total Spend Amount:</Text>
            </View>
            <View style={{ width: '50%' }}>
              <Text style={styles.orderList}>KAPKAN </Text>
              <Text style={styles.orderList}>July 4th,2021</Text>
              <Text style={styles.orderList}>Lord Putin</Text>
              <Text style={styles.orderList}>50,000 Rubles</Text>
            </View>
            <View></View>
          </View>

        </View>
      </View>
    );
  } else if (item == 'Charge') {
    return (
      <View style={styles.containerMenu}>
        <View style={{ margin: 15 }}>

          <Text style={styles.productName}>3 Cluster Charges </Text>

          <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
            <View style={{ width: '50%' }}>
              <Text style={styles.productPrice}>Agent Id:</Text>
              <Text style={styles.productPrice}>Issued Date:</Text>
              <Text style={styles.productPrice}>Approval By:</Text>
              <Text style={styles.productPrice}>Total Spend Amount:</Text>
            </View>
            <View style={{ width: '50%' }}>
              <Text style={styles.orderList}>FUZE </Text>
              <Text style={styles.orderList}>July 4th,2021</Text>
              <Text style={styles.orderList}>VLADAMIR-SAMA</Text>
              <Text style={styles.orderList}>36,000 Rubles</Text>

            </View>
          </View>
        </View>
      </View>
    );
  }
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.containerMenu}>
      <ImageBackground source={image} style={styles.image}>

        <TouchableOpacity
          onPress={() => navigation.navigate('Products_List')}
          style={styles.menuButtons}>
          <Text style={styles.buttonText}>Manage Products</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Employees_List')}
          style={styles.menuButtons}>
          <Text style={styles.buttonText}>Manage Employees</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Orders_List')}
          style={styles.menuButtons}>
          <Text style={styles.buttonText}>Manage Orders</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />

      </ImageBackground>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: true }}
          name="спецназхранить(Miniso for spetsnaz)"
          component={HomeScreen}
        />
        <Stack.Screen name="Products_List" component={Product_List} />
        <Stack.Screen name="Product_Details" component={Product_Details} />
        <Stack.Screen name="Employees_List" component={Employees_List} />
        <Stack.Screen name="Employees_Details" component={Employees_Details} />
        <Stack.Screen name="Orders_List" component={Orders_List} />
        <Stack.Screen name="Order_Details" component={Order_Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  containerMenu: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuButtons: {
    backgroundColor: 'brown',
    width: 220,
    paddingVertical: 18,
    margin: 10,
    borderColor: 'lavender',
    borderRadius: 10,
    borderLeftWidth: 2,
    borderBottomWidth: 3,
    borderBottomColor: 'lavender',
  },

  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },

  productImage: {
    marginTop: 20,
    width: 65,
    height: 65,
    borderColor: 'white',
    borderWidth: 3,
    marginBottom: 20,
  },
  productName: {
    marginTop: 20,
    color: 'brown',
    backgroundColor: '#f0e68c',
    borderRadius: 5,
    fontWeight: 'bold',
    fontSize: 24,
    marginHorizontal: 10,
    marginBottom: 2,
  },
  employeeName: {
    marginTop: 20,
    color: 'blue',
    backgroundColor: '#f0e68c',
    borderRadius: 5,

    fontWeight: 'bold',
    fontSize: 24,
    marginHorizontal: 10,
    marginBottom: 2,
  },

  productPrice: {
    color: 'brown',
    backgroundColor: '#f0e68c',
    borderRadius: 5,
    fontSize: 16,
    marginTop: 5,
    marginHorizontal: 10,
    marginBottom: 10,
  },

  orderList: {
    color: 'blue',
    fontSize: 16,
    marginTop: 5,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    opacity: 1,
  },
});
