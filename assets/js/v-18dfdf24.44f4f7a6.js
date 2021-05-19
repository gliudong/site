(self.webpackChunksite=self.webpackChunksite||[]).push([[1933],{9122:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-18dfdf24",path:"/plugin/list/antd.html",title:"antd",lang:"zh-CN",frontmatter:{title:"antd",order:4},excerpt:"",headers:[{level:2,title:"Install",slug:"install",children:[]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Usage",slug:"usage",children:[]},{level:2,title:"使用 antd-mobile",slug:"使用-antd-mobile",children:[]}],filePathRelative:"plugin/list/antd.md",git:{updatedTime:1621416862e3,contributors:[]}}},129:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>p});const e=(0,a(6252).uE)('<h2 id="install"><a class="header-anchor" href="#install">#</a> Install</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> build-plugin-antd --save-dev\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="options"><a class="header-anchor" href="#options">#</a> Options</h2><p>插件提供了按需加载和主题定制相关的配置参数：</p><ul><li><code>themeConfig</code> 设置替换主题颜色</li><li><code>importOptions</code> 同 <code>babel-plugin-import</code> 按需加载配置，默认参数 <code>{ libraryDirectory: &#39;es&#39;, style: true}</code>，根据用户设置进行合并</li></ul><h2 id="usage"><a class="header-anchor" href="#usage">#</a> Usage</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span>\n      <span class="token string">&quot;build-plugin-antd&quot;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">&quot;themeConfig&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token property">&quot;primary-color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#1DA57A&quot;</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="使用-antd-mobile"><a class="header-anchor" href="#使用-antd-mobile">#</a> 使用 antd-mobile</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span>\n      <span class="token string">&quot;build-plugin-antd&quot;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">&quot;themeConfig&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token property">&quot;brand-primary&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#1DA57A&quot;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;importOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token property">&quot;libraryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;antd-mobile&quot;</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;libraryDirectory&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es&quot;</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>',9),p={render:function(n,s){return e}}}}]);