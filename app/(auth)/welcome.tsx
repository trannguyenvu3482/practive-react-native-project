import { onboarding } from "@/constants";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";

const Welcome = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/sign-up");
        }}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="text-black text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0]" />}
        activeDot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full" />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item) => (
          <View className="flex flex-col items-center" key={item.id}>
            <Image
              source={item.image}
              className="w-[300px] h-[300px] mt-10"
              resizeMode="contain"
            />
            <Text className="text-black text-3xl font-JakartaBold text-center mx-10">
              {item.title}
            </Text>
            <Text className="text-slate-400 text-md font-JakartaRegular text-center mx-10 mt-3">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>
    </SafeAreaView>
  );
};

export default Welcome;
