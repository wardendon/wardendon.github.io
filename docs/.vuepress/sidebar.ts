import { sidebar } from "vuepress-theme-hope";

export default sidebar(
  {
    "/guide/": "structure",
    "/code/vue/": "structure",
    "/code/js/": "structure",
    "/code/ts/": "structure",
    "/code/nodejs/": "structure",
    "/literary/":[
      "",
      "/literary/light",
      "/literary/swift",
      {
        text: "无端太息",
        icon: "creative",
        prefix: "sigh/",
        collapsable: true,
        children: "structure",
      }],
    "/knowledge/":[
      "",
      {
        text: "当代精神文明建设考",
        icon: "creative",
        prefix: "spiritual/",
        collapsable: true,
        children: "structure",
      }],
    "/black/": [
      "",
      {
        text: "告别",
        icon: "creative",
        prefix: "farewell/",
        collapsable: true,
        children: "structure",
      }],
  }
);