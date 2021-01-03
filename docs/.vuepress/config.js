const {config} = require("vuepress-theme-hope");

module.exports = config({
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
        ["markdown-it-task-lists"]
      ],
      extendMarkdown: (md) => {
        md.set({ breaks: true });
        md.use(require('markdown-it-task-lists'))
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
      ['@vuepress/pwa',{
        serviceWorker:true,
        updatePop: {
          message:"有新内容可用",
          buttonText:"更新"
        }
      }]
    ],
    themeConfig: {
      blog:false,
      logo:'https://hziee.site/atom.png',
      algolia:{
        apiKey:'6776e9b86b29ea2ab58076a7a5795832',
        indexName:'hziee'
      },
      comment:{
        type:'valine',
        appId:'7oHxvUSl3rx0vwXcDaHUwVFh-gzGzoHsz',
        appKey:'IchH7QBd1dwI6oXAUKlVhtmk'
      },
      markdown:{
        align:true,
        tex:true,
        footnote: true,
        sub: true,
        sup: true
      },
      pwa:false,
      smoothScroll: true,
      lastUpdated: "Last Updated",
      sidebar: "auto",
      sidebarDepth: 3,
      nav: [
        { text: "主页", link: "/" }, 
        {
          text: "杂项归档",
          items: [
            { text: "报道事项", link: "/MISC/SchoolRegister" },
            { text: "网页设计比赛", link: "/MISC/WebDesignCompetitionWorks" },
            {
              text: "实验班相关",
              prefix:"/MISC/",
              items: [
                {
                  text: "实验班备战相关",
                  link: "ExperimentalClassPreparation",
                },
                {
                  text: "实验班招生题解",
                  link: "ExperimentalClassAnalysis",
                },
              ],
            },
            {
              text: "2021 讲课",
              prefix: "/MISC/",
              items: [
                {
                  text: "内容手稿",
                  link: "Share/Main"
                },
                {
                  text: "资源索引",
                  link: "Share/Resources"
                }
              ]
            }
          ],
        },
        {
          text: "大一 第一学期",
          prefix:'/Y1S1/',
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
          prefix:'/Y1S2/',
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
              text: '电子线路实习',
              link: 'ElectronicCircuitPractice/'
            }
          ],
        },
        {
          text: "大二 第一学期",
          prefix:"/M2S1/",
          items: [{ text: "数据结构", link: "DataScrutcure/" },{ text:'C++高级程序设计', link:'CPP'}],
        },
        {
          text: "项目地址",
          link: "https://github.com/sonderlau/Hziee.site",
        },
      ],
    },
});