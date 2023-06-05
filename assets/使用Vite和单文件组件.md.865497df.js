import{_ as s,o as a,c as n,O as l}from"./chunks/framework.71fc771a.js";const d=JSON.parse('{"title":"使用Vite和单文件组件","description":"","frontmatter":{},"headers":[],"relativePath":"使用Vite和单文件组件.md","filePath":"使用Vite和单文件组件.md"}'),p={name:"使用Vite和单文件组件.md"},e=l(`<h1 id="使用vite和单文件组件" tabindex="-1">使用Vite和单文件组件 <a class="header-anchor" href="#使用vite和单文件组件" aria-label="Permalink to &quot;使用Vite和单文件组件&quot;">​</a></h1><h2 id="使用vite作为vue编译工具" tabindex="-1">使用Vite作为Vue编译工具 <a class="header-anchor" href="#使用vite作为vue编译工具" aria-label="Permalink to &quot;使用Vite作为Vue编译工具&quot;">​</a></h2><p>使用Vite基本上就是使用下面这一行命令，所以只要记住这行命令即可：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vite</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">NewProject</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">--</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">--template</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vue</span></span></code></pre></div><p>终端会提示回答一些问题，根据实际情况回答即可。</p><p>然后依次运行：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">NewProject</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span></span></code></pre></div><p>此时Vite已经运行，会在终端输出一个地址，默认为<code>http://localhost:5173/</code>，在浏览器打开即可看到默认的起始页。</p><h2 id="单文件组件" tabindex="-1">单文件组件 <a class="header-anchor" href="#单文件组件" aria-label="Permalink to &quot;单文件组件&quot;">​</a></h2><p>为了提高开发和协作效率，需要更好的模块化、组件化，Vue提出了单文件组件的概念，就是将一些紧密相关的HTML元素写在一个.vue文件里面，定义好JavaScript逻辑、元素内容、局部样式。</p><p>单文件的大致架构如下：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 这里写JavaScript逻辑</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!--这里写HTML内容--&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">scoped</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 这里写局部样式 */</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>将组件写好之后，需要在根组件App.vue中导入及使用：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> HelloWorld.vue </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./components/HelloWorld.vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">HelloWorld</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">scoped</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>作为最佳实践，推荐以下几点：</p><ul><li>组件始终放在components文件夹中。</li><li>在命名、导入、使用组件时均使用大驼峰命名法。</li><li>在VSCode中安装Volar插件以完善对Vue文件的支持：代码高亮和自动补全。</li></ul>`,16),o=[e];function t(c,r,i,y,D,F){return a(),n("div",null,o)}const A=s(p,[["render",t]]);export{d as __pageData,A as default};
