import { Button, ScrollView, View, Text } from "@tarojs/components";
import {
  useDidHide,
  useDidShow,
  useLoad,
  usePageScroll,
  usePullDownRefresh,
  useReady,
  useUnload,
} from "@tarojs/taro";
import { useEffect, useState } from "react";
import { getCurrentInstance } from "@tarojs/runtime";
import Taro from "@tarojs/taro";
import styles from "./index.module.scss";
import LazyFloor from "../../components/LazyFloor";

export default function Index() {
  // 页面初始化时获取并保存当前实例
  const instance = getCurrentInstance();
  const [counter, setCounter] = useState(0);
  const [isShow, setIsShow] = useState(false);

  useLoad(() => {
    console.log("Page loaded.");
  });

  // 可以使用所有的 React Hooks
  useEffect(() => {
    if (instance) {
      // 获取路由参数
      console.log(instance?.router?.params); // 输出 { id: 2, type: 'test' }
    }

    if (counter === 2) {
      // 模拟 JS 报错
      throw new Error("I crashed!");
    }
  });

  // 对应 onReady
  useReady(() => {
    // 初次渲染时，在小程序触发 onReady 后，才能获取小程序的渲染层节点
    Taro.createSelectorQuery()
      .select("#target")
      .boundingClientRect()
      .exec((res) => console.log(res));
  });

  // 对应 onShow
  useDidShow(() => {});

  // 对应 onHide
  useDidHide(() => {});

  // 对应 onUnload
  useUnload(() => {});

  // 对应 onUnload
  usePageScroll(() => {});

  // Taro 对所有小程序页面生命周期都实现了对应的自定义 React Hooks 进行支持
  // 详情可查阅：【Hooks】
  usePullDownRefresh(() => {});

  function clickHandler(e) {
    e.stopPropagation(); // 阻止冒泡
  }

  function scrollHandler() {}

  function handleClick() {
    setCounter(counter + 1);
  }

  return (
    <ScrollView id="target" onClick={clickHandler} onScroll={scrollHandler}>
      <Button onClick={handleClick}>{counter}</Button>
      <Button onClick={() => setIsShow(true)}>Load Component</Button>
      {isShow && <LazyFloor></LazyFloor>}
      <View className={styles.test}>
        <Text className={styles.txt}>Hello world!</Text>
      </View>
    </ScrollView>
  );
}
