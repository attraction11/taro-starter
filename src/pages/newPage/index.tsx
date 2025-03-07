import { View, Text, Image, Input, Button } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import arrowPng from "../../images/arrow.png";
import "./index.scss";
import { useRef } from "react";

export default function NewPage() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    inputRef.current?.focus();
  }

  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className="newPage">
      <Text>11111111</Text>
      <Image className="arrowImg" src={arrowPng} />
      <Input ref={inputRef} />
      <Button onClick={handleClick}>Focus the input</Button>
    </View>
  );
}
