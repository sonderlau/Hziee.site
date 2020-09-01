module.exports = {
  title: "Hziee Survival Guide",
  description: "在线文档",
  head: [
    ["link", { rel: "icon", href: "/atom.png" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    ["link", { rel: "apple-touch-icon", href: "/icons/152x152_atom.png" }],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/icons/144x144_atom.png",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
  ],
  markdown: {
    plugins: [
      ["markdown-it-replace-link"],
      ["markdown-it-sub"],
      ["markdown-it-sup"],
    ],
    extendMarkdown: (md) => {
      md.set({ breaks: true });
      md.use(require("markdown-it-sub"));
      md.use(require("markdown-it-sup"));
      md.use(require("markdown-it-task-lists"));
      md.use(require("markdown-it-replace-link"), {
        replaceLink: function(link, env) {
          // 云端存储的替换
          if (link.toString().startsWith("@cos")) {
            return (
              "https://hzieefiles-1300064754.cos.ap-shanghai.myqcloud.com" +
              link.toString().substring(4)
            );
          } else {
            return link.toString();
          }
        },
      });
    },
  },
  plugins: [
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePop: {
          message: "文档内容已经更新",
          buttonText: "刷新页面",
        },
      },
    ],
    "img-lazy",
    "vuepress-plugin-baidu-autopush",
    [
      "vuepress-plugin-zooming",
      {
        delay: 650,
        options: {
          bgColor: "black",
          zIndex: 10000,
        },
      },
    ],
    [
      "graysite",
      {
        // Nanking Rip
        startDate: "2020-12-13 00:00:00",
        endDate: "2020-12-13 23:59:59",
      },
    ],
    [
      "vuepress-plugin-code-copy",
      {
        successText: "复制成功 !",
      },
    ],
    ["vuepress-plugin-smooth-scroll"],
    ["@vuepress/back-to-top"],
    [
      "copyright",
      {
        noCopy: true, // 选c中的文字将无法被复制
        minLength: 100, // 如果长度超过 100 个字符
      },
    ],
    [
      "@maginapp/vuepress-plugin-katex",
      {
        delimiters: "dollars"
      },
    ],
  ],
  themeConfig: {
    algolia:{
      apiKey:'6776e9b86b29ea2ab58076a7a5795832',
      indexName:'hziee'
    },
    lastUpdated: "Last Updated",
    sidebar: "auto",
    nav: [
      { text: "主页", link: "/" },
      {
        text: "杂项归档",
        items: [
          { text: "报道事项", link: "/MISC/SchoolRegister.md" },
          { text: "网页设计比赛", link: "/MISC/WebDesignCompetitionWorks.md" },
          {
            text: "实验班相关",
            items: [
              {
                text: "实验班备战相关",
                link: "/MISC/ExperimentalClassPreparation.md",
              },
              {
                text: "实验班招生题解",
                link: "/MISC/ExperimentalClassAnalysis.md",
              },
            ],
          },
        ],
      },
      {
        text: "大一 第一学期",
        items: [
          { text: "C语言基础", link: "/Y1S1/LanguageC/" },
          { text: "Java基础", link: "/Y1S1/LanguageJava/" },
          {
            text: "大学英语视听说",
            link: "/Y1S1/UniversityEnglish_Audiovisual/",
          },
          { text: "Web前端基础", link: "/Y1S1/WebFrontEndFundamentals/" },
        ],
      },
      {
        text: "大一 第二学期",
        items: [
          { text: "Android基础", link: "/Y1S2/AndroidFundamentals/" },
          { text: "编译原理", link: "/Y1S2/CompilationPrinciple/" },
          { text: "数据库理论", link: "/Y1S2/DatabaseTheory/" },
          { text: "数字电路", link: "/Y1S2/DigitalCircuit/" },
          { text: "离散数学", link: "/Y1S2/DiscreteMathematics/" },
          { text: "思想道德基础", link: "/Y1S2/Ideology/" },
          { text: "jQuery", link: "/Y1S2/jQuery/" },
          { text: "JSP", link: "/Y1S2/JSP/" },
          { text: "军事理论", link: "/Y1S2/MilitaryDoctrine/" },
          {
            text: "大学英语_视听说",
            link: "/Y1S2/University_ListeningAndSpeaking/",
          },
        ],
      },
      {
        text: "大二 第一学期",
        items: [{ text: "TBD", link: "/" }],
      },
      {
        text: "文档项目",
        link: "https://github.com/sonderlau/HzieeSurvivalGuide",
      },
    ],
  },
};
