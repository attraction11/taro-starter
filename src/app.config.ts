// app.config.js 对应小程序规范的全局配置文件 app.json
// 优势在于它是 JS 文件可以编写逻辑。配置以微信小程序的全局配置为规范。
// 多端差异化逻辑可以使用 process.env.TARO_ENV 变量作条件判断来实现

export default defineAppConfig({
  pages: ["pages/index/index", "pages/newPage/index", "pages/todo/index"], // 页面路径列表
  window: {
    // 全局的默认窗口表现
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    // 底部 tab 栏的表现
    list: [
      { pagePath: "subpages/index", text: "subpages" },
      { pagePath: "pages/newPage/index", text: "newPage" },
      { pagePath: "pages/todo/index", text: "todo" },
    ],
  },
  subPackages: [{ root: "subpages/", pages: ["index"] }], // 分包结构配置
  permission: {
    "scope.userLocation": {
      desc: "你的位置信息将用于小程序位置接口的效果展示",
    },
  },
  requiredBackgroundModes: ["audio", "location"],
});
