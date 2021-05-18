(self.webpackChunksite=self.webpackChunksite||[]).push([[9078],{8442:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-38dadd7c",path:"/guide/basic/logger.html",title:"日志打印",lang:"zh-CN",frontmatter:{title:"日志打印",order:12},excerpt:"",headers:[{level:2,title:"日志分类",slug:"日志分类",children:[]},{level:2,title:"使用",slug:"使用",children:[]},{level:2,title:"配置",slug:"配置",children:[{level:3,title:"smartLoglevel",slug:"smartloglevel",children:[]},{level:3,title:"level",slug:"level",children:[]}]}],filePathRelative:"guide/basic/logger.md",git:{updatedTime:1621332393e3,contributors:[]}}},3996:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>r});var e=a(6252);const p=(0,e.uE)('<p>前端应用中常见的使用最多的毋庸置疑是 <code>console.log</code>，然而很多时候我们只希望在开发环境中打印日志，在生产环境中则不打印日志，或者设置日志的级别，避免生产环境的调试日志在生产环境中出现，这便是框架内置提供的日志功能的初衷。</p><h2 id="日志分类"><a class="header-anchor" href="#日志分类">#</a> 日志分类</h2><p>框架日志分为 TRACE、DEBUG、INFO、WARN、ERROR 和 SILENT 6 个级别，分别在不同的场景下使用：</p><ul><li><code>logger.trace(msg)</code>：输出一个堆栈跟踪</li><li><code>logger.debug(msg)</code>：输出一个调试日志</li><li><code>logger.info(msg)</code>：输出一个信息日志</li><li><code>logger.warn(msg)</code>：输出一个警告日志</li><li><code>logger.error(msg)</code>：输出一个错误日志</li></ul>',4),l=(0,e.Uk)("更多 API 详见："),o={href:"https://github.com/pimterry/loglevel",target:"_blank",rel:"noopener noreferrer"},t=(0,e.Uk)("loglevel"),c=(0,e.uE)('<h2 id="使用"><a class="header-anchor" href="#使用">#</a> 使用</h2><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> logger <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ice&#39;</span><span class="token punctuation">;</span>\n\nlogger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&#39;== info ==&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="配置"><a class="header-anchor" href="#配置">#</a> 配置</h2><h3 id="smartloglevel"><a class="header-anchor" href="#smartloglevel">#</a> smartLoglevel</h3><p>当开启 <code>smartLoglevel: true</code> 时，可通过在当前地址栏的 url 加上 <code>__loglevel__</code> 来动态设置日志级别，可以非常方便的进行调试。</p><p>app.js 配置如下:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> runApp<span class="token punctuation">,</span> config <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ice&#39;</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 用于配置</span>\n<span class="token keyword">const</span> appConfig <span class="token operator">=</span> <span class="token punctuation">{</span>\n  logger<span class="token operator">:</span> <span class="token punctuation">{</span>\n    smartLoglevel<span class="token operator">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token function">runApp</span><span class="token punctuation">(</span>appConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>设置 loglevel 为 info</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>http://localhost:3333/#/?<span class="token bold"><span class="token punctuation">__</span><span class="token content">loglevel</span><span class="token punctuation">__</span></span>=info\n\nor\n\nhttps://ice.work/?<span class="token bold"><span class="token punctuation">__</span><span class="token content">loglevel</span><span class="token punctuation">__</span></span>=info\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>当开启 <code>smartLoglevel: true</code> 但并未在地址栏的 url 上添加 <code>__loglevel__</code> 参数时，则默认值在开发环境下设置为 debug ，在生产环境下设置为 warn。 </p><h3 id="level"><a class="header-anchor" href="#level">#</a> level</h3><p>在某些场景下也可在 <code>src/config.ts</code> 中根据不同环境配置 loglevel:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    loglevel<span class="token operator">:</span> <span class="token string">&#39;warn&#39;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  production<span class="token operator">:</span> <span class="token punctuation">{</span>\n    loglevel<span class="token operator">:</span> <span class="token string">&#39;error&#39;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>在 <code>src/app.ts</code> 中将配置的 loglevel 传递给 logger：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> runApp<span class="token punctuation">,</span> config <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ice&#39;</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 用于配置</span>\n<span class="token keyword">const</span> appConfig <span class="token operator">=</span> <span class="token punctuation">{</span>\n  logger<span class="token operator">:</span> <span class="token punctuation">{</span>\n    level<span class="token operator">:</span> config<span class="token punctuation">.</span>loglevel\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token function">runApp</span><span class="token punctuation">(</span>appConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>',15),r={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[p,(0,e.Wm)("p",null,[l,(0,e.Wm)("a",o,[t,(0,e.Wm)(a)])]),c],64)}}}}]);