import{_ as s,c as t,o as i,a5 as a,ad as n,ae as e}from"./chunks/framework.ClVbL6ic.js";const u=JSON.parse('{"title":"base","description":"","frontmatter":{},"headers":[],"relativePath":"src/guide/modules/base.md","filePath":"src/guide/modules/base.md","lastUpdated":1721064544000}'),h={name:"src/guide/modules/base.md"},d=a(`<h1 id="base" tabindex="-1">base <a class="header-anchor" href="#base" aria-label="Permalink to &quot;base&quot;">​</a></h1><p>基础模块</p><h2 id="usestore" tabindex="-1">useStore <a class="header-anchor" href="#usestore" aria-label="Permalink to &quot;useStore&quot;">​</a></h2><p>数据缓存</p><ul><li><p>app 应用信息，应用名称，配置参数</p></li><li><p>user 用户信息，用户设置，退出等</p></li><li><p>menu 菜单信息，路由列表，菜单组</p></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { useStore } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/$/base&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">app</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">menu</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useStore</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h2 id="checkperm" tabindex="-1">checkPerm <a class="header-anchor" href="#checkperm" aria-label="Permalink to &quot;checkPerm&quot;">​</a></h2><p>检测是否有权限</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { checkPerm } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/$/base&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { useCool } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/@/cool&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">service</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useCool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 单个</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">checkPerm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(service.base.sys.user.permission.add);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 或者</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">checkPerm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  or: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    service.base.sys.user.permission.add,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    service.base.sys.user.permission.update,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 并且</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">checkPerm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  and: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    service.base.sys.user.permission.add,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    service.base.sys.user.permission.update,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h2 id="cl-avatar" tabindex="-1">cl-avatar <a class="header-anchor" href="#cl-avatar" aria-label="Permalink to &quot;cl-avatar&quot;">​</a></h2><p>头像</p><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>modelValue</td><td>绑定值</td><td>string</td><td></td><td></td></tr><tr><td>src</td><td>资源链接</td><td>string</td><td></td><td></td></tr><tr><td>size</td><td>尺寸</td><td>string | number</td><td></td><td>36</td></tr><tr><td>shape</td><td>模式</td><td>string</td><td>&#39;square&#39; | &#39;circle&#39;</td><td>&#39;square&#39;</td></tr><tr><td>background-color</td><td>背景颜色</td><td>string</td><td>颜色值</td><td>#f7f7f7</td></tr><tr><td>color</td><td>字体颜色</td><td>string</td><td>颜色值</td><td>#cccccc</td></tr></tbody></table><h2 id="cl-code-json" tabindex="-1">cl-code-json <a class="header-anchor" href="#cl-code-json" aria-label="Permalink to &quot;cl-code-json&quot;">​</a></h2><p>json 格式预览</p><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>modelValue</td><td>绑定值</td><td>string | object</td><td></td><td></td></tr><tr><td>popover</td><td>是否弹出框模式</td><td>boolean</td><td></td><td>false</td></tr><tr><td>height</td><td>高度</td><td>string | number</td><td></td><td>100%</td></tr><tr><td>maxHeight</td><td>最大高度</td><td>string | number</td><td></td><td>300</td></tr></tbody></table><p>默认：</p><img src="`+n+'"><p>弹出框模式：</p><img src="'+e+`"><h2 id="cl-svg" tabindex="-1">cl-svg <a class="header-anchor" href="#cl-svg" aria-label="Permalink to &quot;cl-svg&quot;">​</a></h2><p>svg 图标，加载所有模块下 <code>static</code> 下 <code>icon-*.svg</code> 的文件</p><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>name</td><td>图标名称，对应文件名</td><td>string</td><td></td><td></td></tr><tr><td>className</td><td>样式名称</td><td>string</td><td></td><td></td></tr><tr><td>size</td><td>图标大小</td><td>string / number</td><td></td><td></td></tr></tbody></table><h2 id="cl-image" tabindex="-1">cl-image <a class="header-anchor" href="#cl-image" aria-label="Permalink to &quot;cl-image&quot;">​</a></h2><p>图片，已配置点击预览</p><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>modelValue</td><td>资源链接</td><td>string / array</td><td></td><td></td></tr><tr><td>src</td><td>资源链接</td><td>string / array</td><td></td><td></td></tr><tr><td>size</td><td>图片大小</td><td>number / array</td><td></td><td>100</td></tr><tr><td>fit</td><td>裁剪方式</td><td>string</td><td>fill / contain / cover / none / scale-down</td><td>cover</td></tr></tbody></table><h2 id="cl-editor" tabindex="-1">cl-editor <a class="header-anchor" href="#cl-editor" aria-label="Permalink to &quot;cl-editor&quot;">​</a></h2><p>由于第三方编辑器资源过大，不一定每个人都需要，so 使用该组件去渲染不确定的第三方编辑器，当第三方编辑器未注册的时候显示文本域 textarea。</p><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>name</td><td>组件标签名</td><td>string</td></tr></tbody></table><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>由于是完全继承，所以该组件可以调用 <code>name</code> 指定组件的所有方法和 支持所有的 <code>prop</code> 参数</p></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">cl-editor</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;setRefs(&#39;editor&#39;)&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cl-editor-monaco&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ts&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">refs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">setRefs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useCool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 调用格式化代码方法</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  refs.editor.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">formatCode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,30),l=[d];function p(r,k,E,c,o,g){return i(),t("div",null,l)}const b=s(h,[["render",p]]);export{u as __pageData,b as default};
