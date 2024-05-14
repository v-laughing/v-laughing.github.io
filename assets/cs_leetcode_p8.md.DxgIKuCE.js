import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.CBsUJNCA.js";const g=JSON.parse('{"title":"15. 二进制中 1 的个数","description":"","frontmatter":{},"headers":[],"relativePath":"cs/leetcode/p8.md","filePath":"cs/leetcode/p8.md"}'),t={name:"cs/leetcode/p8.md"},e=n(`<h1 id="_15-二进制中-1-的个数" tabindex="-1">15. 二进制中 1 的个数 <a class="header-anchor" href="#_15-二进制中-1-的个数" aria-label="Permalink to &quot;15. 二进制中 1 的个数&quot;">​</a></h1><p><a href="https://www.nowcoder.com/practice/8ee967e43c2c4ec193b040ea7fbb10b8?tpId=13&amp;tqId=11164&amp;tPage=1&amp;rp=1&amp;ru=/ta/coding-interviews&amp;qru=/ta/coding-interviews/question-ranking&amp;from=cyc_github" target="_blank" rel="noreferrer">NowCoder</a></p><h2 id="题目描述" tabindex="-1">题目描述 <a class="header-anchor" href="#题目描述" aria-label="Permalink to &quot;题目描述&quot;">​</a></h2><p>输入一个整数，输出该数二进制表示中 1 的个数。</p><h3 id="n-n-1" tabindex="-1">n&amp;(n-1) <a class="header-anchor" href="#n-n-1" aria-label="Permalink to &quot;n&amp;(n-1)&quot;">​</a></h3><p>该位运算去除 n 的位级表示中最低的那一位。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>n       : 10110100</span></span>
<span class="line"><span>n-1     : 10110011</span></span>
<span class="line"><span>n&amp;(n-1) : 10110000</span></span></code></pre></div><p>时间复杂度：O(M)，其中 M 表示 1 的个数。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> NumberOf1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cnt </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        cnt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cnt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="integer-bitcount" tabindex="-1">Integer.bitCount() <a class="header-anchor" href="#integer-bitcount" aria-label="Permalink to &quot;Integer.bitCount()&quot;">​</a></h3><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> NumberOf1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Integer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bitCount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(n);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,11),p=[e];function h(l,k,r,d,c,o){return a(),i("div",null,p)}const y=s(t,[["render",h]]);export{g as __pageData,y as default};
