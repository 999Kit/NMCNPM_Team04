import { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

const Home = () => {
    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: 'blue' },
                    headerShadowVisible: false,
                    
                }}
            />
        </SafeAreaView>
    )
}

export default Home;