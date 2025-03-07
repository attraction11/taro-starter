import { createRef, useEffect } from "react";
import { View, Canvas, CustomWrapper } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default function LazyFloor() {
  // 在小程序平台，每个 CustomWrapper 实例对应一个原生自定义组件。
  // 小程序规定，如果要获取自定义组件内的节点，必须调用 .in 方法，
  // 其中 scope 是对应的自定义组件实例：Taro.createSelectorQuery().in(scope)
  const wrapperRef = createRef() as any;

  useEffect(() => {
    Taro.nextTick(() => {
      Taro.createSelectorQuery()
        .in(wrapperRef.current.ctx)
        .select(`.ec-canvas`)
        .fields({ node: true, size: true })
        .exec((res) => console.log("res: ", res));
    });
  }, []);

  return (
    <View>
      <CustomWrapper ref={wrapperRef}>
        <Canvas canvasId="canvas" className="ec-canvas"></Canvas>
      </CustomWrapper>
    </View>
  );
}
