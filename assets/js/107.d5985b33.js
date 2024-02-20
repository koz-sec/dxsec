(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{406:function(a,t,e){"use strict";e.r(t);var s=e(14),r=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("Publish: 2024/2/4"),t("br"),a._v("\nLast update: -")]),a._v(" "),t("h1",{attrs:{id:"vuepress-04-チャート使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-04-チャート使用"}},[a._v("#")]),a._v(" VuePress - 04: チャート使用")]),a._v(" "),t("h2",{attrs:{id:"mermaidを使う"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mermaidを使う"}},[a._v("#")]),a._v(" mermaidを使う")]),a._v(" "),t("ul",[t("li",[a._v("mermaidを使うとテキスト表記だけで様々なチャート図を描けるようになります。")]),a._v(" "),t("li",[a._v("使いこなせば、記事をグラフィカルに表現できる上、パワーポイントで作るより手早く書けそうです。")])]),a._v(" "),t("h3",{attrs:{id:"インストール"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#インストール"}},[a._v("#")]),a._v(" インストール")]),a._v(" "),t("ul",[t("li",[a._v("以下のコマンドでインストールします。")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npm install -D mermaid\n")])])]),t("h3",{attrs:{id:"コンポーネントの設定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#コンポーネントの設定"}},[a._v("#")]),a._v(" コンポーネントの設定")]),a._v(" "),t("ul",[t("li",[a._v("(テーマ設定ファイルがない場合、)以下のコマンドで設定ファイルを書き出します。")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("vuepress eject docs\n")])])]),t("ul",[t("li",[a._v("docs/.vuepress/theme/components/ を開きます。")]),a._v(" "),t("li",[a._v("Page.vue を編集します。")]),a._v(" "),t("li",[a._v("以下の要領で、mounted() と updated() を追加します。")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('export default {\n  props: [\'sidebarItems\'],\n\n  mounted() {\n  \n    import("mermaid/dist/mermaid").then(m => {\n      m.initialize({\n        startOnLoad: true\n      });\n      m.init();\n    });\n  },\n  updated () {\n      \n    import("mermaid/dist/mermaid").then(m => {\n      m.initialize({\n        startOnLoad: true\n      });\n      m.init();\n    });\n  },\n\n  computed: {\n')])])]),t("h3",{attrs:{id:"使ってみる"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使ってみる"}},[a._v("#")]),a._v(" 使ってみる")]),a._v(" "),t("p",[a._v("以下のように記述すると、フローチャートが表示されます。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('<mermaid/>\n<div class="mermaid">\ngraph LR\n    A[溝の口] --- B[二子玉川]\n    B--\x3e|田園都市線|C[渋谷]\n    B--\x3e|大井町線|D(大井町);\n</div>\n')])])]),t("p",[a._v("結果")]),a._v(" "),t("p",[a._v("以上")])])}),[],!1,null,null,null);t.default=r.exports}}]);