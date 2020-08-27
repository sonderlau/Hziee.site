module.exports = {
  title: "Hziee Survival Guide",
  description: "在线文档",
  head: [["link", { rel: "icon", href: "/atom_64x64.ico" }]],
  themeConfig: {
    lastUpdated: "Last Updated",
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
              { text: "实验班备战相关", link: "/MISC/ExperimentalClassPreparation.md" },
              { text: "实验班招生题解", link: "/MISC/ExperimentalClassAnalysis.md" },
            ],
          }
        ],
      },
      {
        text: '大一 第一学期',
        items: [
          { text: 'C语言基础', link: '/Y1S1/LanguageC/'},
          { text: 'Java基础', link: '/Y1S1/LanguageJava/'},
          { text: '大学英语视听说', link:'/Y1S1/UniversityEnglish_Audiovisual/'},
          { text: 'Web前端基础', link: '/Y1S1/WebFrontEndFundamentals/'}
        ]
      },
      { 
        text:'大一 第二学期',
        items: [
          { text: 'Android基础', link:'/Y1S2/AndroidFundamentals/'},
          { text: '编译原理', link:'/Y1S2/CompilationPrinciple/'},
          { text: '数据库理论', link:'/Y1S2/DatabaseTheory/'},
          { text: '数字电路', link:'/Y1S2/DigitalCircuit/'},
          { text:'离散数学', link:'/Y1S2/DiscreteMathematics/'},
          { text:'思想道德基础', link:'/Y1S2/Ideology/'},
          { text:'jQuery', link:'/Y1S2/jQuery/'},
          { text:'JSP', link:'/Y1S2/JSP/'},
          { text:'军事理论', link:'/Y1S2/MilitaryDoctrine/'},
          { text:'大学英语_视听说', link:'/Y1S2/University_ListeningAndSpeaking/'},
        ]
      },
      {
        text: '大二 第一学期',
        items: [
          { text: 'TBD',link:'/' }
        ]
      },
      {
        text: "文档项目",
        link: "https://github.com/sonderlau/HzieeSurvivalGuide",
      },
    ],
  },
};
