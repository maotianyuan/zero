import{_ as s,c as e,a,a4 as o,m as t,o as i}from"./chunks/framework.C_gexpgy.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"packages/pocket/doc/pocket.isrgbcolor.md","filePath":"packages/pocket/doc/pocket.isrgbcolor.md"}'),r={name:"packages/pocket/doc/pocket.isrgbcolor.md"},p=o('<p><a href="./">Home</a> &gt; <a href="./pocket.html">@ailer/pocket</a> &gt; <a href="./pocket.isrgbcolor.html">isRgbColor</a></p><h2 id="isrgbcolor-function" tabindex="-1">isRgbColor() function <a class="header-anchor" href="#isrgbcolor-function" aria-label="Permalink to &quot;isRgbColor() function&quot;">​</a></h2><p>TypeScript 中的“isRgbColor”函数通过验证数组结构和通道值来检查给定颜色是否为 RGB 格式。</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes light-plus github-dark vp-code"><code><span class="line"><span style="--shiki-light:#000000;--shiki-dark:#B392F0;">isRgbColor</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#001080;--shiki-dark:#FFAB70;">color</span><span style="--shiki-light:#000000;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#267F99;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#000000;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;"> color</span><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;"> is</span><span style="--shiki-light:#001080;--shiki-dark:#E1E4E8;"> RgbColor</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th><p>Parameter</p></th><th><p>Type</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>color</p></td><td><p>any</p></td><td><p>“isRgbColor”函数中的“color”参数表示一个值，通过检查该值来确定它是否是 RGB 颜色。它应该是一个包含 3 或 4 个数值的数组，分别代表红色、绿色、蓝色通道（以及可选的 alpha 通道）</p></td></tr></tbody></table>',7),l=t("p",null,"color is RgbColor",-1),c=t("p",null,[t("code",null,"isRgbColor"),a(" 函数返回一个布尔值，指示输入的 "),t("code",null,"color"),a(" 是否是有效的 RGB 颜色。该函数检查“color”是否是一个数组，然后根据特定条件验证数组中的每个通道值。如果所有通道值都通过验证，且数组长度为 3 或 4，则函数返回 true，表示输入")],-1);function n(h,d,k,g,_,b){return i(),e("div",null,[p,a(" **Returns:** "),l,c])}const y=s(r,[["render",n]]);export{m as __pageData,y as default};
