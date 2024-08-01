import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { Link, router } from 'expo-router';

const HomePage = () => {
  return (
    <View style={style.container}>
      <Text
        className="font-bold text-3xl bg-slate-800 active:bg-cyan-200
       active:border-cyan-200 active:text-cyan-600 text-cyan-600 border-2 rounded-md p-2 mb-2 w-full
        border-slate-800"
      >
        Home Page
      </Text>
      <Link style={style.text} href="/users/anything">
        Go to user 1
      </Link>
      {/* <Pressable onPress={() => {
        router.push('/users/2')
      }}>
        <Text>Go to user 2</Text>
      </Pressable> */}
      <Pressable
        onPress={() => {
          router.push({
            pathname: '/users/[id]',
            params: { id: 2 },
          });
        }}
      >
        <Text style={style.text}>Go to user 2</Text>
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'baseline',
  },
  text: {
    marginBottom: 10,
    fontSize: 20,
    borderColor: '#f4511e',
    borderWidth: 1,
    borderEndWidth: 205,
    padding: 10,
    color: '#f4511e',
    borderRadius: 5,
    width: '100%',
  },
});

export default HomePage;
