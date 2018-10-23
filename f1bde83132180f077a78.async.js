webpackJsonp([34],{1853:function(t,a,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(a,"__esModule",{value:!0});var e=s(3164),l=n(e),v=s(3167),i=n(v),_=s(3170),r=n(_),c=s(3173),d=n(c),u=s(3176),o=n(u),p=s(3181),h=n(p),m=s(3184),g=n(m),C={cn:"# 数字输入框\n  通过鼠标或键盘，输入范围内的数值。\n  ## 何时使用\n  当需要获取标准数值时。\n        ## 代码演示",us:"# InputNumber\n  Enter a number within certain range with the mouse or keyboard.\n  ## When To Use\n  When a numeric value needs to be provided.\n  ## Examples\n  "};a.default={category:"Components",subtitle:"数字输入框",type:"Data Entry",title:"InputNumber",render:function(){var t=arguments[0];return t("div",[t("md",{attrs:{cn:C.cn,us:C.us}}),t("br"),t(l.default),t("br"),t(o.default),t("br"),t(i.default),t("br"),t(r.default),t("br"),t(d.default),t("br"),t("api",[t("template",{slot:"cn"},[t(h.default)]),t(g.default)])])}}},1854:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{value:3}},methods:{onChange:function(t){console.log("changed",t)}}}},1855:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{disabled:!0}},methods:{toggle:function(){this.disabled=!this.disabled}}}},1856:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={methods:{onChange:function(t){console.log("changed",t)}}}},1857:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={methods:{onChange:function(t){console.log("changed",t)}}}},1858:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={methods:{onChange:function(t){console.log("changed",t)}}}},3164:function(t,a,s){t.exports=s(3165)},3165:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=s(1854),e=s.n(n);for(var l in n)"default"!==l&&function(t){s.d(a,t,function(){return n[t]})}(l);var v=s(3166),i=s(58),_=i(e.a,v.a,!1,null,null,null);a.default=_.exports},3166:function(t,a,s){"use strict";var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[[s("demo-box",{attrs:{jsfiddle:{html:'\n  <div>\n    <a-input-number :min="1" :max="10" v-model="value" @change="onChange"/>\n    当前值：{{value}}\n  </div>\n',script:"\n  export default {\n    data() {\n      return {\n        value: 3\n      }\n    },\n    methods: {\n      onChange(value) {\n        console.log('changed', value);\n      },\n    },\n  }\n",style:null,us:"\n#### Basic\nNumeric-only input box.\n",cn:"\n#### 基本\n数字输入框。\n",sourceCode:'<template>\n  <div>\n    <a-input-number :min="1" :max="10" v-model="value" @change="onChange" />\n    当前值：{{value}}\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        value: 3\n      }\n    },\n    methods: {\n      onChange(value) {\n        console.log(\'changed\', value);\n      },\n    },\n  }\n<\/script>\n'}}},[s("template",{slot:"component"},[s("div",[s("a-input-number",{attrs:{min:1,max:10},on:{change:t.onChange},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}}),t._v("\n    当前值："+t._s(t.value)+"\n  ")],1)]),t._v(" "),s("template",{slot:"description"},[s("h4",{attrs:{id:"基本"}},[t._v("基本 "),s("a",{staticClass:"anchor",attrs:{href:"#基本","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),s("p",[t._v("数字输入框。")])]),t._v(" "),s("template",{slot:"us-description"},[s("h4",{attrs:{id:"Basic"}},[t._v("Basic "),s("a",{staticClass:"anchor",attrs:{href:"#Basic","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),s("p",[t._v("Numeric-only input box.")])]),t._v(" "),s("template",{slot:"code"},[s("pre",[s("code",{staticClass:"language-html"},[s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n    "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("a-input-number")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":min")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"1"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":max")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"10"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"value"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("@change")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"onChange"')]),t._v(" />")]),t._v("\n    当前值："),s("span",[t._v("{{")]),t._v("value"),s("span",[t._v("}}")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),s("span",{staticClass:"javascript"},[t._v("\n  "),s("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),s("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n    data() {\n      "),s("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n        "),s("span",{staticClass:"hljs-attr"},[t._v("value")]),t._v(": "),s("span",{staticClass:"hljs-number"},[t._v("3")]),t._v("\n      }\n    },\n    "),s("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n      onChange(value) {\n        "),s("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log("),s("span",{staticClass:"hljs-string"},[t._v("'changed'")]),t._v(", value);\n      },\n    },\n  }\n")]),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n")])])])],2)]],2)},e=[],l={render:n,staticRenderFns:e};a.a=l},3167:function(t,a,s){t.exports=s(3168)},3168:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=s(1855),e=s.n(n);for(var l in n)"default"!==l&&function(t){s.d(a,t,function(){return n[t]})}(l);var v=s(3169),i=s(58),_=i(e.a,v.a,!1,null,null,null);a.default=_.exports},3169:function(t,a,s){"use strict";var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[[s("demo-box",{attrs:{jsfiddle:{html:'\n  <div>\n    <a-input-number :min="1" :max="10" :disabled="disabled" :defaultValue="3"/>\n    <div style="marginTop:20px">\n      <a-button @click="toggle" type="primary">Toggle disabled</a-button>\n    </div>\n  </div>\n',script:"\n  export default {\n    data () {\n      return {\n        disabled: true,\n      }\n    },\n    methods: {\n      toggle() {\n        this.disabled = !this.disabled\n      }\n    },\n  }\n",style:null,us:"\n#### Disabled\nClick the button to toggle between available and disabled states.\n",cn:"\n#### 不可用\n点击按钮切换可用状态。\n",sourceCode:'<template>\n  <div>\n    <a-input-number :min="1" :max="10" :disabled="disabled" :defaultValue="3" />\n    <div style="marginTop:20px">\n      <a-button @click="toggle" type="primary">Toggle disabled</a-button>\n    </div>\n  </div>\n</template>\n<script>\n  export default {\n    data () {\n      return {\n        disabled: true,\n      }\n    },\n    methods: {\n      toggle() {\n        this.disabled = !this.disabled\n      }\n    },\n  }\n<\/script>\n'}}},[s("template",{slot:"component"},[s("div",[s("a-input-number",{attrs:{min:1,max:10,disabled:t.disabled,defaultValue:3}}),t._v(" "),s("div",{staticStyle:{marginTop:"20px"}},[s("a-button",{attrs:{type:"primary"},on:{click:t.toggle}},[t._v("Toggle disabled")])],1)],1)]),t._v(" "),s("template",{slot:"description"},[s("h4",{attrs:{id:"不可用"}},[t._v("不可用 "),s("a",{staticClass:"anchor",attrs:{href:"#不可用","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),s("p",[t._v("点击按钮切换可用状态。")])]),t._v(" "),s("template",{slot:"us-description"},[s("h4",{attrs:{id:"Disabled"}},[t._v("Disabled "),s("a",{staticClass:"anchor",attrs:{href:"#Disabled","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),s("p",[t._v("Click the button to toggle between available and disabled states.")])]),t._v(" "),s("template",{slot:"code"},[s("pre",[s("code",{staticClass:"language-html"},[s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n    "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("a-input-number")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":min")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"1"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":max")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"10"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":disabled")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"disabled"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":defaultValue")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"3"')]),t._v(" />")]),t._v("\n    "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("style")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"marginTop:20px"')]),t._v(">")]),t._v("\n      "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("a-button")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("@click")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"toggle"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"primary"')]),t._v(">")]),t._v("Toggle disabled"),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("a-button")]),t._v(">")]),t._v("\n    "),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),s("span",{staticClass:"javascript"},[t._v("\n  "),s("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),s("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n    data () {\n      "),s("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n        "),s("span",{staticClass:"hljs-attr"},[t._v("disabled")]),t._v(": "),s("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v(",\n      }\n    },\n    "),s("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n      toggle() {\n        "),s("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".disabled = !"),s("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".disabled\n      }\n    },\n  }\n")]),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n")])])])],2)]],2)},e=[],l={render:n,staticRenderFns:e};a.a=l},3170:function(t,a,s){t.exports=s(3171)},3171:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=s(1856),e=s.n(n);for(var l in n)"default"!==l&&function(t){s.d(a,t,function(){return n[t]})}(l);var v=s(3172),i=s(58),_=i(e.a,v.a,!1,null,null,null);a.default=_.exports},3172:function(t,a,s){"use strict";var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[[s("demo-box",{attrs:{jsfiddle:{html:'\n  <a-input-number :min="0" :max="10" :step="0.1" @change="onChange"/>\n',script:"\n  export default {\n    methods: {\n      onChange(value) {\n        console.log('changed', value);\n      },\n    },\n  }\n",style:null,us:"\n#### Decimals\nA numeric-only input box whose values can be increased or decreased using a decimal step. The number of decimals (also known as precision) is determined by the step prop.\n",cn:"\n#### 小数\n和原生的数字输入框一样，value 的精度由 step 的小数位数决定。\n",sourceCode:'<template>\n  <a-input-number :min="0" :max="10" :step="0.1" @change="onChange" />\n</template>\n<script>\n  export default {\n    methods: {\n      onChange(value) {\n        console.log(\'changed\', value);\n      },\n    },\n  }\n<\/script>\n'}}},[s("template",{slot:"component"},[s("a-input-number",{attrs:{min:0,max:10,step:.1},on:{change:t.onChange}})],1),t._v(" "),s("template",{slot:"description"},[s("h4",{attrs:{id:"小数"}},[t._v("小数 "),s("a",{staticClass:"anchor",attrs:{href:"#小数","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),s("p",[t._v("和原生的数字输入框一样，value 的精度由 step 的小数位数决定。")])]),t._v(" "),s("template",{slot:"us-description"},[s("h4",{attrs:{id:"Decimals"}},[t._v("Decimals "),s("a",{staticClass:"anchor",attrs:{href:"#Decimals","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),s("p",[t._v("A numeric-only input box whose values can be increased or decreased using a decimal step. The number of decimals (also known as precision) is determined by the step prop.")])]),t._v(" "),s("template",{slot:"code"},[s("pre",[s("code",{staticClass:"language-html"},[s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("a-input-number")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":min")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"0"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":max")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"10"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":step")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"0.1"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("@change")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"onChange"')]),t._v(" />")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),s("span",{staticClass:"javascript"},[t._v("\n  "),s("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),s("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n    "),s("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n      onChange(value) {\n        "),s("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log("),s("span",{staticClass:"hljs-string"},[t._v("'changed'")]),t._v(", value);\n      },\n    },\n  }\n")]),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n")])])])],2)]],2)},e=[],l={render:n,staticRenderFns:e};a.a=l},3173:function(t,a,s){t.exports=s(3174)},3174:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=s(1857),e=s.n(n);for(var l in n)"default"!==l&&function(t){s.d(a,t,function(){return n[t]})}(l);var v=s(3175),i=s(58),_=i(e.a,v.a,!1,null,null,null);a.default=_.exports},3175:function(t,a,s){"use strict";var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[[s("demo-box",{attrs:{jsfiddle:{html:'\n  <div>\n    <a-input-number :defaultValue="1000" :formatter="value => `$ ${value}`.replace(/\\B(?=(\\d{3})+(?!\\d))/g, \',\')" :parser="value => value.replace(/\\$\\s?|(,*)/g, \'\')" @change="onChange"/>\n    <a-input-number :defaultValue="100" :min="0" :max="100" :formatter="value => `${value}%`" :parser="value => value.replace(\'%\', \'\')" @change="onChange"/>\n  </div>\n',script:"\n  export default {\n    methods: {\n      onChange(value) {\n        console.log('changed', value);\n      },\n    },\n  }\n",style:null,us:"\n#### Formatter\nDisplay value within it's situation with `formatter`, and we usually use `parser` at the same time.\n",cn:"\n#### 格式化展示\n通过 `formatter` 格式化数字，以展示具有具体含义的数据，往往需要配合 `parser` 一起使用。\n",sourceCode:'<template>\n  <div>\n    <a-input-number\n      :defaultValue="1000"\n      :formatter="value => `$ ${value}`.replace(/\\B(?=(\\d{3})+(?!\\d))/g, \',\')"\n      :parser="value => value.replace(/\\$\\s?|(,*)/g, \'\')"\n      @change="onChange"\n    />\n    <a-input-number\n      :defaultValue="100"\n      :min="0"\n      :max="100"\n      :formatter="value => `${value}%`"\n      :parser="value => value.replace(\'%\', \'\')"\n      @change="onChange"\n    />\n  </div>\n</template>\n<script>\n  export default {\n    methods: {\n      onChange(value) {\n        console.log(\'changed\', value);\n      },\n    },\n  }\n<\/script>\n'}}},[s("template",{slot:"component"},[s("div",[s("a-input-number",{attrs:{defaultValue:1e3,formatter:function(t){return("$ "+t).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(t){return t.replace(/\$\s?|(,*)/g,"")}},on:{change:t.onChange}}),t._v(" "),s("a-input-number",{attrs:{defaultValue:100,min:0,max:100,formatter:function(t){return t+"%"},parser:function(t){return t.replace("%","")}},on:{change:t.onChange}})],1)]),t._v(" "),s("template",{slot:"description"},[s("h4",{attrs:{id:"格式化展示"}},[t._v("格式化展示 "),s("a",{staticClass:"anchor",attrs:{href:"#格式化展示","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),s("p",[t._v("通过 "),s("code",[t._v("formatter")]),t._v(" 格式化数字，以展示具有具体含义的数据，往往需要配合 "),s("code",[t._v("parser")]),t._v(" 一起使用。")])]),t._v(" "),s("template",{slot:"us-description"},[s("h4",{attrs:{id:"Formatter"}},[t._v("Formatter "),s("a",{staticClass:"anchor",attrs:{href:"#Formatter","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),s("p",[t._v("Display value within it's situation with "),s("code",[t._v("formatter")]),t._v(", and we usually use "),s("code",[t._v("parser")]),t._v(" at the same time.")])]),t._v(" "),s("template",{slot:"code"},[s("pre",[s("code",{staticClass:"language-html"},[s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n    "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("a-input-number")]),t._v("\n      "),s("span",{staticClass:"hljs-attr"},[t._v(":defaultValue")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"1000"')]),t._v("\n      "),s("span",{staticClass:"hljs-attr"},[t._v(":formatter")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v("\"value => `$ ${value}`.replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')\"")]),t._v("\n      "),s("span",{staticClass:"hljs-attr"},[t._v(":parser")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v("\"value => value.replace(/\\$\\s?|(,*)/g, '')\"")]),t._v("\n      "),s("span",{staticClass:"hljs-attr"},[t._v("@change")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"onChange"')]),t._v("\n    />")]),t._v("\n    "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("a-input-number")]),t._v("\n      "),s("span",{staticClass:"hljs-attr"},[t._v(":defaultValue")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"100"')]),t._v("\n      "),s("span",{staticClass:"hljs-attr"},[t._v(":min")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"0"')]),t._v("\n      "),s("span",{staticClass:"hljs-attr"},[t._v(":max")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"100"')]),t._v("\n      "),s("span",{staticClass:"hljs-attr"},[t._v(":formatter")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"value => `${value}%`"')]),t._v("\n      "),s("span",{staticClass:"hljs-attr"},[t._v(":parser")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v("\"value => value.replace('%', '')\"")]),t._v("\n      "),s("span",{staticClass:"hljs-attr"},[t._v("@change")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"onChange"')]),t._v("\n    />")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),s("span",{staticClass:"javascript"},[t._v("\n  "),s("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),s("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n    "),s("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n      onChange(value) {\n        "),s("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log("),s("span",{staticClass:"hljs-string"},[t._v("'changed'")]),t._v(", value);\n      },\n    },\n  }\n")]),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n")])])])],2)]],2)},e=[],l={render:n,staticRenderFns:e};a.a=l},3176:function(t,a,s){t.exports=s(3177)},3177:function(t,a,s){"use strict";function n(t){s(3178)}Object.defineProperty(a,"__esModule",{value:!0});var e=s(1858),l=s.n(e);for(var v in e)"default"!==v&&function(t){s.d(a,t,function(){return e[t]})}(v);var i=s(3180),_=s(58),r=n,c=_(l.a,i.a,!1,r,"data-v-4ba4a42e",null);a.default=c.exports},3178:function(t,a,s){var n=s(3179);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);s(598)("f45b1180",n,!0,{})},3179:function(t,a,s){a=t.exports=s(597)(!1),a.push([t.i,".ant-input-number[data-v-4ba4a42e]{margin-right:10px}",""])},3180:function(t,a,s){"use strict";var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[[s("demo-box",{attrs:{jsfiddle:{html:'\n  <div>\n    <a-input-number size="large" :min="1" :max="100000" :defaultValue="3" @change="onChange"/>\n    <a-input-number :min="1" :max="100000" :defaultValue="3" @change="onChange"/>\n    <a-input-number size="small" :min="1" :max="100000" :defaultValue="3" @change="onChange"/>\n  </div>\n',script:"\n  export default {\n    methods: {\n      onChange(value) {\n        console.log('changed', value);\n      },\n    },\n  }\n",style:null,us:"\n#### Sizes\nThere are three sizes available to a numeric input box. By default, the size is `32px`. The two additional sizes are `large` and `small` which means `40px` and `24px`, respectively.\n",cn:"\n#### 三种大小\n三种大小的数字输入框，当 size 分别为 `large` 和 `small` 时，输入框高度为 `40px` 和 `24px` ，默认高度为 `32px`。\n",sourceCode:'<template>\n  <div>\n    <a-input-number size="large" :min="1" :max="100000" :defaultValue="3" @change="onChange" />\n    <a-input-number :min="1" :max="100000" :defaultValue="3" @change="onChange" />\n    <a-input-number size="small" :min="1" :max="100000" :defaultValue="3" @change="onChange" />\n  </div>\n</template>\n<script>\n  export default {\n    methods: {\n      onChange(value) {\n        console.log(\'changed\', value);\n      },\n    },\n  }\n<\/script>\n<style scoped>\n  .ant-input-number {\n    margin-right: 10px;\n  }\n</style>\n'}}},[s("template",{slot:"component"},[s("div",[s("a-input-number",{attrs:{size:"large",min:1,max:1e5,defaultValue:3},on:{change:t.onChange}}),t._v(" "),s("a-input-number",{attrs:{min:1,max:1e5,defaultValue:3},on:{change:t.onChange}}),t._v(" "),s("a-input-number",{attrs:{size:"small",min:1,max:1e5,defaultValue:3},on:{change:t.onChange}})],1)]),t._v(" "),s("template",{slot:"description"},[s("h4",{attrs:{id:"三种大小"}},[t._v("三种大小 "),s("a",{staticClass:"anchor",attrs:{href:"#三种大小","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),s("p",[t._v("三种大小的数字输入框，当 size 分别为 "),s("code",[t._v("large")]),t._v(" 和 "),s("code",[t._v("small")]),t._v(" 时，输入框高度为 "),s("code",[t._v("40px")]),t._v(" 和 "),s("code",[t._v("24px")]),t._v(" ，默认高度为 "),s("code",[t._v("32px")]),t._v("。")])]),t._v(" "),s("template",{slot:"us-description"},[s("h4",{attrs:{id:"Sizes"}},[t._v("Sizes "),s("a",{staticClass:"anchor",attrs:{href:"#Sizes","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),s("p",[t._v("There are three sizes available to a numeric input box. By default, the size is "),s("code",[t._v("32px")]),t._v(". The two additional sizes are "),s("code",[t._v("large")]),t._v(" and "),s("code",[t._v("small")]),t._v(" which means "),s("code",[t._v("40px")]),t._v(" and "),s("code",[t._v("24px")]),t._v(", respectively.")])]),t._v(" "),s("template",{slot:"code"},[s("pre",[s("code",{staticClass:"language-html"},[s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n    "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("a-input-number")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("size")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"large"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":min")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"1"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":max")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"100000"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":defaultValue")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"3"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("@change")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"onChange"')]),t._v(" />")]),t._v("\n    "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("a-input-number")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":min")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"1"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":max")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"100000"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":defaultValue")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"3"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("@change")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"onChange"')]),t._v(" />")]),t._v("\n    "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("a-input-number")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("size")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"small"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":min")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"1"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":max")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"100000"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":defaultValue")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"3"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("@change")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"onChange"')]),t._v(" />")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),s("span",{staticClass:"javascript"},[t._v("\n  "),s("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),s("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n    "),s("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n      onChange(value) {\n        "),s("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log("),s("span",{staticClass:"hljs-string"},[t._v("'changed'")]),t._v(", value);\n      },\n    },\n  }\n")]),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("style")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("scoped")]),t._v(">")]),s("span",{staticClass:"css"},[t._v("\n  "),s("span",{staticClass:"hljs-selector-class"},[t._v(".ant-input-number")]),t._v(" {\n    "),s("span",{staticClass:"hljs-attribute"},[t._v("margin-right")]),t._v(": "),s("span",{staticClass:"hljs-number"},[t._v("10px")]),t._v(";\n  }\n")]),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("style")]),t._v(">")]),t._v("\n")])])])],2)]],2)},e=[],l={render:n,staticRenderFns:e};a.a=l},3181:function(t,a,s){t.exports=s(3182)},3182:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=s(3183),e=s(58),l=e(null,n.a,!1,null,null,null);a.default=l.exports},3183:function(t,a,s){"use strict";var n=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("h2",{attrs:{id:"API"}},[t._v("API "),s("a",{staticClass:"anchor",attrs:{href:"#API","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),s("p",[t._v("属性如下")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("成员")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("autoFocus")]),t._v(" "),s("td",[t._v("自动获取焦点")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("defaultValue")]),t._v(" "),s("td",[t._v("初始值")]),t._v(" "),s("td",[t._v("number")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("disabled")]),t._v(" "),s("td",[t._v("禁用")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("formatter")]),t._v(" "),s("td",[t._v("指定输入框展示值的格式")]),t._v(" "),s("td",[t._v("function(value: number | string): string")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("max")]),t._v(" "),s("td",[t._v("最大值")]),t._v(" "),s("td",[t._v("number")]),t._v(" "),s("td",[t._v("Infinity")])]),t._v(" "),s("tr",[s("td",[t._v("min")]),t._v(" "),s("td",[t._v("最小值")]),t._v(" "),s("td",[t._v("number")]),t._v(" "),s("td",[t._v("-Infinity")])]),t._v(" "),s("tr",[s("td",[t._v("parser")]),t._v(" "),s("td",[t._v("指定从 formatter 里转换回数字的方式，和 formatter 搭配使用")]),t._v(" "),s("td",[t._v("function( string): number")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("precision")]),t._v(" "),s("td",[t._v("数值精度")]),t._v(" "),s("td",[t._v("number")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("size")]),t._v(" "),s("td",[t._v("输入框大小")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("无")])]),t._v(" "),s("tr",[s("td",[t._v("step")]),t._v(" "),s("td",[t._v("每次改变步数，可以为小数")]),t._v(" "),s("td",[t._v("number|string")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("value(v-model)")]),t._v(" "),s("td",[t._v("当前值")]),t._v(" "),s("td",[t._v("number")]),t._v(" "),s("td")])])]),t._v(" "),s("h3",{attrs:{id:"事件"}},[t._v("事件 "),s("a",{staticClass:"anchor",attrs:{href:"#事件","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("事件名称")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("回调参数")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("change")]),t._v(" "),s("td",[t._v("变化回调")]),t._v(" "),s("td",[t._v("Function(value: number | string)")])])])]),t._v(" "),s("h2",{attrs:{id:"方法"}},[t._v("方法 "),s("a",{staticClass:"anchor",attrs:{href:"#方法","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("名称")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("blur()")]),t._v(" "),s("td",[t._v("移除焦点")])]),t._v(" "),s("tr",[s("td",[t._v("focus()")]),t._v(" "),s("td",[t._v("获取焦点")])])])])])}],l={render:n,staticRenderFns:e};a.a=l},3184:function(t,a,s){t.exports=s(3185)},3185:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=s(3186),e=s(58),l=e(null,n.a,!1,null,null,null);a.default=l.exports},3186:function(t,a,s){"use strict";var n=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("h2",{attrs:{id:"API"}},[t._v("API "),s("a",{staticClass:"anchor",attrs:{href:"#API","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("property")]),t._v(" "),s("th",[t._v("description")]),t._v(" "),s("th",[t._v("type")]),t._v(" "),s("th",[t._v("default")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("autoFocus")]),t._v(" "),s("td",[t._v("get focus when component mounted")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("defaultValue")]),t._v(" "),s("td",[t._v("initial value")]),t._v(" "),s("td",[t._v("number")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("disabled")]),t._v(" "),s("td",[t._v("disable the input")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("formatter")]),t._v(" "),s("td",[t._v("Specifies the format of the value presented")]),t._v(" "),s("td",[t._v("function(value: number | string): string")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("max")]),t._v(" "),s("td",[t._v("max value")]),t._v(" "),s("td",[t._v("number")]),t._v(" "),s("td",[t._v("Infinity")])]),t._v(" "),s("tr",[s("td",[t._v("min")]),t._v(" "),s("td",[t._v("min value")]),t._v(" "),s("td",[t._v("number")]),t._v(" "),s("td",[t._v("-Infinity")])]),t._v(" "),s("tr",[s("td",[t._v("parser")]),t._v(" "),s("td",[t._v("Specifies the value extracted from formatter")]),t._v(" "),s("td",[t._v("function( string): number")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("precision")]),t._v(" "),s("td",[t._v("precision of input value")]),t._v(" "),s("td",[t._v("number")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("size")]),t._v(" "),s("td",[t._v("width of input box")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("step")]),t._v(" "),s("td",[t._v("The number to which the current value is increased or decreased. It can be an integer or decimal.")]),t._v(" "),s("td",[t._v("number|string")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("value(v-model)")]),t._v(" "),s("td",[t._v("current value")]),t._v(" "),s("td",[t._v("number")]),t._v(" "),s("td")])])]),t._v(" "),s("h3",{attrs:{id:"events"}},[t._v("events "),s("a",{staticClass:"anchor",attrs:{href:"#events","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Events Name")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",[t._v("Arguments")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("change")]),t._v(" "),s("td",[t._v("The callback triggered when the value is changed.")]),t._v(" "),s("td",[t._v("function(value: number | string)")])])])]),t._v(" "),s("h2",{attrs:{id:"Methods"}},[t._v("Methods "),s("a",{staticClass:"anchor",attrs:{href:"#Methods","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("blur()")]),t._v(" "),s("td",[t._v("remove focus")])]),t._v(" "),s("tr",[s("td",[t._v("focus()")]),t._v(" "),s("td",[t._v("get focus")])])])])])}],l={render:n,staticRenderFns:e};a.a=l},644:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=s(1853),e=s.n(n);for(var l in n)"default"!==l&&function(t){s.d(a,t,function(){return n[t]})}(l);var v=s(58),i=v(e.a,null,!1,null,null,null);a.default=i.exports}});