module.exports =
{
    // -- 个人信息 start --
    "type": "blog",
    "author": "Rookie",
    // "authorAvatar": "/avatar.png",
    // "authorAvatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
    "authorAvatar": "https://tva1.sinaimg.cn/large/e6c9d24ely1go6gkxv8keg2050050mx9.gif",
    // "logo": "/logo.png",
    "logo": "https://tva1.sinaimg.cn/large/e6c9d24ely1go6gkxv8keg2050050mx9.gif",
    "startYear": "2017",
    // "record": "你的备案号 ", //icp备案
    // -- 个人信息 end --


    // -- 博客设置 start --
    "title": "yqMac",
    "description": "好好赚钱，努力奋斗，天天吃肉 Go Go Go!",
    "dest": "dist",
    "head" : [
        ["link", {"rel": "icon", "href": "/favicon.ico"}],
        ["meta", {"name": "viewport", "content": "width=device-width,initial-scale=1,user-scalable=no"}],
        ['script', {}, `var _hmt = _hmt || [];(function() {var hm = document.createElement("script");hm.src = "https://hm.baidu.com/hm.js?a46ad829404b742959db51bb648db536";var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(hm, s);})();`]
    ],
    'subSidebar': 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    'sidebar': 'auto',
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "最后更新时间",
    // "huawei": true, //首页出现华为文案
    "codeTheme": "tomorrow",
    // -- 博客设置 end --

    // 自我介绍 start
    "info": "这家伙不懒，也只留下了一句话。",
    "socials": {
        "github": "https://github.com/yqMac", //github
        "gitlub": false, //gitlub
        "gitee": false, //gitee
        "jianshu": false, //简书
        "zhihu": false, //知乎
        "toutiao": false, //头条
        "juejin": false, //掘金
        "segmentfault": false, //思否
        "csdn": false, //CSDN
        "wechat":false,
        "qq":false,
        
        // "wechat": "https://tva1.sinaimg.cn/large/008eGmZEly1goaqpuypj6j30tc12l0wx.jpg", //微信
        // "qq": "https://tva1.sinaimg.cn/large/008eGmZEly1goaqpkhqyjj30u01hddlt.jpg" //QQ
    },
    // 自我介绍 end

    // 评论
    "valineConfig": {
    "appId": "wgEUiRwd4OAiXfjWiDn2wWx5-gzGzoHsz",// your appId
        "appKey": "ATwS4DHrKf3WHv7vo1P3VgIx", // your appKey
        "avatar": "", //
        "enableQQ": true, //启用昵称框自动获取QQ昵称和QQ头像
        "requiredFields": ['nick', 'mail'], //设置必填项
    },
    // 密钥
    // "keyPage": {
    //     keys: ['e10adc3949ba59abbe56e057f20f883e'], // 1.3.0 版本后需要设置为密文
    //     color: '#42b983', // 登录页动画球的颜色
    //     lineColor: '#42b983' // 登录页动画线的颜色
    // }

};
