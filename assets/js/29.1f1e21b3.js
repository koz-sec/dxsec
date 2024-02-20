(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{342:function(t,e,a){t.exports=a.p+"assets/img/02_001.25753cc6.png"},343:function(t,e,a){t.exports=a.p+"assets/img/02_003.ad7a46a1.png"},344:function(t,e,a){t.exports=a.p+"assets/img/02_004.b35f0ecd.png"},404:function(t,e,a){"use strict";a.r(e);var s=a(14),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("Publish: 2023/10/9"),e("br"),e("br"),t._v("\nLast update: 2023/10/9")]),t._v(" "),e("h1",{attrs:{id:"vuepress-02-初期設定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-02-初期設定"}},[t._v("#")]),t._v(" VuePress - 02: 初期設定")]),t._v(" "),e("h2",{attrs:{id:"基本設定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本設定"}},[t._v("#")]),t._v(" 基本設定")]),t._v(" "),e("ul",[e("li",[t._v("サイト全体の設定は、docs/.vuepress/config.js に記述します。")]),t._v(" "),e("li",[t._v("ファイルがない場合は新規作成します。")]),t._v(" "),e("li",[t._v("config.js を下記のように編集します。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("module.exports = {\n    title: 'こざえもんの日常',\n    description: 'テクノロジー & 資格 & フリー素材',\n    locales: {\n      '/': {\n        lang: 'ja'\n      }\n    },\n    meta: [\n      { charset: 'utf-8' },\n      { name: 'viewport', content: 'width=device-width, initial-scale=1' }\n    ]\n  }\n")])])]),e("h2",{attrs:{id:"readmeの変更"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#readmeの変更"}},[t._v("#")]),t._v(" READMEの変更")]),t._v(" "),e("ul",[e("li",[t._v("トップページに表示される内容は "),e("a",{attrs:{href:"http://README.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("README.md"),e("OutboundLink")],1),t._v(" に記載されています。")]),t._v(" "),e("li",[t._v("README.mdファイルの中身を削除して、以下の内容に書き換えます。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("---\nhome: true\nheroImage: /hero.png\nheroText: Hero Title\ntagline: Hero subtitle\nactionText: Get Started →\nactionLink: /guide/\nfeatures:\n- title: Simplicity First\n  details: Minimal setup with markdown-centered project structure helps you focus on writing.\n- title: Vue-Powered\n  details: Enjoy the dev experience of Vue + webpack, use Vue components in markdown, and develop custom themes with Vue.\n- title: Performant\n  details: VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.\nfooter: MIT Licensed | Copyright © 2018-present Evan You\n---\n")])])]),e("ul",[e("li",[t._v("次のようなページになります。")]),t._v(" "),e("li",[t._v("シンプルでカッコいい！でも画像がリンク切れだ.."),e("br"),t._v(" "),e("img",{attrs:{src:a(342),alt:"Alt text"}})]),t._v(" "),e("li",[t._v("必要に応じてアレンジすると良いでしょう。私はブログの名前や説明文を変えました。")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("うーん？？")]),t._v(" "),e("ul",[e("li",[t._v("/.vuepress/public フォルダを作って画像を置くとリンク切れが解消するような記事を見ましたが、なぜかうまくできませんでした。この後、画像の設置は諦めて、heroImage部分は削除しました。")])])]),t._v(" "),e("h2",{attrs:{id:"ナビバー-上のバー-表示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ナビバー-上のバー-表示"}},[t._v("#")]),t._v(" ナビバー(上のバー)表示")]),t._v(" "),e("ul",[e("li",[t._v("ナビバー(Navigation bar)は画面上のリンク集のことです。")]),t._v(" "),e("li",[t._v("config.js を編集すると表示されるようになります。themeConfig あたりを確認ください。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("themeConfig: {\n    nav: [\n      { text: 'Home', link: '/' },\n      { text: 'About', link: '/about.html' },\n      { text: 'Technology', link: '/tech/' },\n      { text: 'Certification', link: '/certification/' },\n      { text: 'Material', link: '/Material/' },\n    ]\n  }\n")])])]),e("ul",[e("li",[t._v("やった！画面上にメニューが表示されました！"),e("br"),t._v(" "),e("img",{attrs:{src:a(343),alt:"Alt text"}})])]),t._v(" "),e("h2",{attrs:{id:"サイドバーの表示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#サイドバーの表示"}},[t._v("#")]),t._v(" サイドバーの表示")]),t._v(" "),e("ul",[e("li",[t._v("サイドバーは画面左に表示されるひとっ飛びリンクのことです。")]),t._v(" "),e("li",[t._v('sidebat: "auto" を追加すると表示されるようになります。')]),t._v(" "),e("li",[t._v("config.js を編集すると表示されるようになります。themeConfig あたりを確認ください。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('module.exports = {\n  ...\n  themeConfig: {\n    ...\n    sidebar: "auto",\n    sidebarDepth: 2,\n    ...\n  },\n  ...\n}\n')])])]),e("ul",[e("li",[t._v("画面左にメニューが出てきました！クリックすると、記事内のその部分へ飛びます。ハイパーリンクは偉大な発明です。"),e("br"),t._v(" "),e("img",{attrs:{src:a(344),alt:"Alt text"}})])]),t._v(" "),e("h2",{attrs:{id:"まとめ"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#まとめ"}},[t._v("#")]),t._v(" まとめ")]),t._v(" "),e("ul",[e("li",[t._v("ここまでできれば、VuePressで作ったブログっぽくなりますね。")]),t._v(" "),e("li",[t._v("これからカラー設定等をアレンジすることで、独自性を発揮し、満足のいくブログライフを送れますね。")])]),t._v(" "),e("p",[t._v("以上")])])}),[],!1,null,null,null);e.default=n.exports}}]);