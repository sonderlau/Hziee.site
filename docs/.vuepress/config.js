const { config } = require("vuepress-theme-hope");
const CloudKeyString = "@cos"
const CloudFileAddress = "https://hzieefiles-1300064754.cos.ap-shanghai.myqcloud.com"

module.exports = config({
  title: "Hziee Survival Guide",
  description: "在线文档",
  head:[
    [
      "script", {
        src: "https://cdn.bootcdn.net/ajax/libs/vue/3.0.2/vue.cjs.prod.min.js"
      }
    ]
  ],
  markdown: {
    plugins: [["markdown-it-replace-link"], ["markdown-it-task-lists"]],
    extendMarkdown: (md) => {
      md.set({ breaks: true });
      md.use(require("markdown-it-task-lists"));
      md.use(require("markdown-it-replace-link"), {
        replaceLink: function (link, env) {
          //! 云端存储的替换
          if (link.toString().startsWith(CloudKeyString)) {
            return (
              CloudFileAddress +
              link.toString().substring(4)
            );
          } else {
            return link.toString();
          }
        },
      });
    },
  },
  themeConfig: {
    namedChunks: false,
    hostname: "https://hziee.site/",
    blog: false,
    logo: "https://hziee.site/atom.png",
    algolia: {
      apiKey: "6776e9b86b29ea2ab58076a7a5795832",
      indexName: "hziee",
    },
    comment: {
      type: "valine",
      appId: "7oHxvUSl3rx0vwXcDaHUwVFh-gzGzoHsz",
      appKey: "IchH7QBd1dwI6oXAUKlVhtmk",
    },
    mdEnhance: {
      enableAll: true,
    },
    encrypt: {
      "/Y2S1/DataStructure/": "imbaNOt3s",
    },
    sidebar: "auto",
    sidebarDepth: 3,
    footer: {
      display: true,
      copyright: "MIT Licensed | Copyright © 2021 SonderLau"
    },
    pwa: {
      favicon: "/atom_64x64.ico",
      themeColor: "#3eaf7c",
      cachePic: true,
      apple: {
        icon: "/icons/152x152_atom.png",
        color: "#fff"
      },
      msTile: {
        image: "/icons/144x144_atom.png",
        color: "#000"
      },
      manifest: {
        icons: [
          {
            "src": "/icons/48x48_atom.png",
            "sizes": "48x48",
            "type": "image/png"
          },
          {
            "src": "/icons/72x72_atom.png",
            "sizes": "72x72",
            "type": "image/png"
          },
          {
            "src": "/icons/96x96_atom.png",
            "sizes": "96x96",
            "type": "image/png"
          },
          {
            "src": "/icons/144x144_atom.png",
            "sizes": "144x144",
            "type": "image/png"
          },
          {
            "src": "/icons/168x168_atom.png",
            "sizes": "168x168",
            "type": "image/png"
          },
          {
            "src": "/icons/192x192_atom.png",
            "sizes": "192x192",
            "type": "image/png"
          }
        ]
      }
    },
    nav: [
      { text: "主页", link: "/" },
      {
        text: "杂项归档",
        items: [
          { text: "报道事项", link: "/MISC/SchoolRegister/" },
          { text: "网页设计比赛", link: "/MISC/WebDesignCompetitionWorks/" },
          {
            text: "实验班相关",
            prefix: "/MISC/",
            items: [
              {
                text: "实验班备战相关",
                link: "ExperimentalClassPreparation/",
              },
              {
                text: "实验班招生题解",
                link: "ExperimentalClassAnalysis/",
              },
            ],
          },
          {
            text: "2021 讲课",
            prefix: "/MISC/",
            items: [
              {
                text: "内容手稿",
                link: "Share/Main/",
              },
              {
                text: "资源索引",
                link: "Share/Resources/",
              },
            ],
          },
        ],
      },
      {
        text: "大一 第一学期",
        prefix: "/Y1S1/",
        items: [
          { text: "C语言基础", link: "LanguageC/" },
          { text: "Java基础", link: "LanguageJava/" },
          {
            text: "大学英语视听说",
            link: "UniversityEnglish_Audiovisual/",
          },
          { text: "Web前端基础", link: "WebFrontEndFundamentals/" },
        ],
      },
      {
        text: "大一 第二学期",
        prefix: "/Y1S2/",
        items: [
          { text: "Android基础", link: "AndroidFundamentals/" },
          { text: "编译原理", link: "CompilationPrinciple/" },
          { text: "数据库理论", link: "DatabaseTheory/" },
          { text: "数字电路", link: "DigitalCircuit/" },
          { text: "离散数学", link: "DiscreteMathematics/" },
          { text: "思想道德基础", link: "Ideology/" },
          { text: "jQuery", link: "jQuery/" },
          { text: "JSP", link: "JSP/" },
          { text: "军事理论", link: "MilitaryDoctrine/" },
          {
            text: "大学英语_视听说",
            link: "University_ListeningAndSpeaking/",
          },
          {
            text: "电子线路实习",
            link: "ElectronicCircuitPractice/",
          },
        ],
      },
      {
        text: "大二 第一学期",
        prefix: "/Y2S1/",
        items: [
          { text: "数据结构", link: "DataStructure/" },
          { text: "C++高级程序设计", link: "CPlusPlusAdvancedProgramming/" },
          { text: "大学英语-阅读", link: "UniversityEnglish/" },
          { text: "微信小程序", link: "MiniProgramme/" },
          { text: "JavaEE开发", link: "JavaEE/" },
          { text: "大作业开发文档合集", link: "docs/index" },
        ],
      },
      {
        text: "大二 第二学期",
        prefix: "/Y2S2/",
        items: [
          {text:"大学物理"},
          {text:"线性代数"},
          {text:"概率论"},
          {text:"操作系统"},
          {text:"PHP程序设计"}
        ]
      },
      {
        text: "项目源码",
        link: "https://github.com/sonderlau/Hziee.site",
      },
    ],
  },
});
