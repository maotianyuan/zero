import{_ as e,c as a,a as s,a4 as i,m as t,o as n}from"./chunks/framework.C_gexpgy.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"packages/pocket/doc/pocket.substringbytes.md","filePath":"packages/pocket/doc/pocket.substringbytes.md"}'),p={name:"packages/pocket/doc/pocket.substringbytes.md"},r=i('<p><a href="./">Home</a> &gt; <a href="./pocket.html">@ailer/pocket</a> &gt; <a href="./pocket.substringbytes.html">substringBytes</a></p><h2 id="substringbytes-function" tabindex="-1">substringBytes() function <a class="header-anchor" href="#substringbytes-function" aria-label="Permalink to &quot;substringBytes() function&quot;">​</a></h2><p>根据字节数，截取字符串</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes light-plus github-dark vp-code"><code><span class="line"><span style="--shiki-light:#000000;--shiki-dark:#B392F0;">substringBytes</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#001080;--shiki-dark:#FFAB70;">str</span><span style="--shiki-light:#000000;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#267F99;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#000000;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#267F99;--shiki-dark:#79B8FF;"> undefined</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#001080;--shiki-dark:#FFAB70;">start</span><span style="--shiki-light:#000000;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#267F99;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#001080;--shiki-dark:#FFAB70;">end</span><span style="--shiki-light:#000000;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#267F99;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;"> string</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th><p>Parameter</p></th><th><p>Type</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>str</p></td><td><p>string | undefined</p></td><td><p>目标字符串</p></td></tr><tr><td><p>start</p></td><td><p>number</p></td><td><p>开始位置</p></td></tr><tr><td><p>end</p></td><td><p>number</p></td><td><p><em>(Optional)</em> 结束位置，默认为字符串的字节数</p></td></tr></tbody></table>',7),h=t("p",null,"string",-1),l=t("h2",{id:"example-1",tabindex:"-1"},[s("Example 1 "),t("a",{class:"header-anchor",href:"#example-1","aria-label":'Permalink to "Example 1"'},"​")],-1),d=t("p",null,"// Returns 'hell' substringBytes('hello, 世界!', 0, 4);",-1),o=t("h2",{id:"example-2",tabindex:"-1"},[s("Example 2 "),t("a",{class:"header-anchor",href:"#example-2","aria-label":'Permalink to "Example 2"'},"​")],-1),k=t("p",null,"// Returns 'hello, 世界!' substringBytes('hello, 世界!', 0);",-1);function c(g,u,b,m,y,_){return n(),a("div",null,[r,s(" **Returns:** "),h,l,d,o,k])}const E=e(p,[["render",c]]);export{f as __pageData,E as default};