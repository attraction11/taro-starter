import { View, Swiper, SwiperItem, Button } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";
import Taro from "@tarojs/taro";

export default function NewPage() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  function goRedirectTo() {
    // 跳转到目的页面，在当前页面打开
    Taro.redirectTo({
      url: "pages/newPage/index",
    });
  }

  function goNavigateTo() {
    // 跳转到目的页面，打开新页面
    Taro.navigateTo({
      url: "pages/index/index?id=2&type=test",
    });
  }

  return (
    <View className="newPage">
      <Swiper
        className="box"
        autoplay
        interval={1000}
        indicatorColor="#999"
        onClick={() => {}}
        onAnimationFinish={() => {}}
      >
        <SwiperItem>
          <View className="text">
            <Button onClick={goRedirectTo}>Redirect</Button>
          </View>
        </SwiperItem>
        <SwiperItem>
          <View className="text">
            <Button onClick={goNavigateTo}>Navigate</Button>
          </View>
        </SwiperItem>
        <SwiperItem>
          <View className="text">3</View>
        </SwiperItem>
      </Swiper>
    </View>
  );
}
