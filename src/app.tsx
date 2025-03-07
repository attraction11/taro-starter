import { useEffect, PropsWithChildren } from "react";

// Taro 额外添加的 hooks 要从 '@tarojs/taro' 中引入
import {
  useDidShow,
  useDidHide,
  usePageNotFound,
  useError,
} from "@tarojs/taro";

// 假设我们要使用 Redux
import { Provider } from "react-redux";
import { useLaunch } from "@tarojs/taro";

import "./app.scss";

import configStore from "./store";
const appStore = configStore();

function App({ children }: PropsWithChildren<any>) {
  useLaunch((options) => {
    // 可以访问到程序初始化参数
    console.log("options: ", options);
    console.log("App launched.");
  });

  // 可以使用所有的 React Hooks
  useEffect(() => {});

  // 对应 onShow
  useDidShow(() => {});

  // 对应 onHide
  useDidHide(() => {});

  // 对应 onPageNotFound
  usePageNotFound(() => {});

  useError((error) => console.log(error));

  // children 是将要会渲染的页面
  return (
    <Provider store={appStore}>
      {children}
    </Provider>
  )
}

export default App;
