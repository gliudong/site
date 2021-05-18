(self.webpackChunksite=self.webpackChunksite||[]).push([[8685],{4933:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-056f5a30",path:"/guide/advanced/code-splitting.html",title:"代码分割 Code Splitting",lang:"zh-CN",frontmatter:{title:"代码分割 Code Splitting",order:6},excerpt:"",headers:[{level:2,title:"基于路由代码分割",slug:"基于路由代码分割",children:[{level:3,title:"配置式路由",slug:"配置式路由",children:[]},{level:3,title:"约定式路由",slug:"约定式路由",children:[]},{level:3,title:"fallback",slug:"fallback",children:[]}]},{level:2,title:"非路由代码分割",slug:"非路由代码分割",children:[]}],filePathRelative:"guide/advanced/code-splitting.md",git:{updatedTime:1621332393e3,contributors:[]}}},6587:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>p});const e=(0,a(6252).uE)('<p>随着应用的增长，代码 bundle 的大小也将随之增长。为了避免因体积过大而导致加载时间过长，我们可以按照路由对代码进行分割成不同的代码块，然后当路由被访问的时候才加载对应的代码，能够显著地提高应用性能。</p><h2 id="基于路由代码分割"><a class="header-anchor" href="#基于路由代码分割">#</a> 基于路由代码分割</h2><p>推荐以路由维度分割代码，每个路由对应的代码会生成一个独立的 js 和 css。</p><h3 id="配置式路由"><a class="header-anchor" href="#配置式路由">#</a> 配置式路由</h3><p>在配置式路由中如果需要开启按需加载，只需要在路由文件中通过 <code>lazy</code> 方法引入组件即可：</p><div class="language-diff ext-diff line-numbers-mode"><pre class="language-diff"><code>// src/routes.ts\n<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> import { lazy } from &#39;ice&#39;;\n</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> import UserLogin from &#39;@/pages/UserLogin&#39;;\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> const UserLogin = lazy(() =&gt; import(&#39;@/pages/UserLogin&#39;));\n</span></span>\nconst routerConfig = [\n<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> {\n</span><span class="token prefix unchanged"> </span><span class="token line">   path: &#39;/login&#39;,\n</span><span class="token prefix unchanged"> </span><span class="token line">   component: UserLogin,\n</span><span class="token prefix unchanged"> </span><span class="token line"> },\n</span></span>]\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>默认生成的 chunk 是按照 <code>[index]</code> 作为 chunk 名称，但我们可以通过 webpackChunkName 指定每个 chunk 来自哪个文件，以便于查看和调试：</p><div class="language-diff ext-diff line-numbers-mode"><pre class="language-diff"><code>const UserLogin = lazy(() =&gt; import(&#39;@/pages/UserLogin&#39;));\n<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> const UserLogin = lazy(() =&gt; import(/* webpackChunkName: &#39;user-login&#39; */&#39;@/pages/UserLogin&#39;));\n</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="约定式路由"><a class="header-anchor" href="#约定式路由">#</a> 约定式路由</h3><p>在约定式路由中如果需要开启按需加载，只需要在 <code>build.json</code> 中的 router 选项配置 lazy 属性即可：</p><div class="language-diff ext-diff line-numbers-mode"><pre class="language-diff"><code>// build.json\n{\n<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> &quot;router&quot;: {\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">    &quot;lazy&quot;: true\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> }\n</span></span>}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="fallback"><a class="header-anchor" href="#fallback">#</a> fallback</h3><p>当组件动态加载过程中或者组件渲染失败时，可以通过 fallback 属性设置提示：</p><div class="language-diff ext-diff line-numbers-mode"><pre class="language-diff"><code>import { runApp } from &#39;ice&#39;;\n\nconst appConfig = {\n<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> router: {\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">    fallback: &lt;div&gt;loading...&lt;/div&gt;\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> }\n</span></span>}\n\nrunApp(appConfig);\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="非路由代码分割"><a class="header-anchor" href="#非路由代码分割">#</a> 非路由代码分割</h2><p>除了路由维度，我们也可以做一些更小粒度比如组件级别的代码分割：</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> lazy <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ice&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Suspense <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> OtherComponent <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/components/RichEditor&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>\n      <span class="token operator">&lt;</span>Suspense fallback<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>Loading<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>\n        <span class="token operator">&lt;</span>OtherComponent <span class="token operator">/</span><span class="token operator">&gt;</span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>Suspense<span class="token operator">&gt;</span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>对应用进行代码分割可以避免加载用户永远不需要的代码，并在初始加载的时候减少所需加载的代码量，在大多数时候我们推荐使用代码分割来提升应用的加载速度和性能。</p>',18),p={render:function(n,s){return e}}}}]);