import{_ as e,c as o,o as a,a4 as r}from"./chunks/framework.CBsUJNCA.js";const _=JSON.parse('{"title":"vue应用","description":"","frontmatter":{"title":"vue应用","sidebar":"auto","publish":true},"headers":[],"relativePath":"cs/framework/vue-c.md","filePath":"cs/framework/vue-c.md"}'),c={name:"cs/framework/vue-c.md"},t=r('<h1 id="风格指南" tabindex="-1">风格指南 <a class="header-anchor" href="#风格指南" aria-label="Permalink to &quot;风格指南&quot;">​</a></h1><h2 id="命名" tabindex="-1">命名 <a class="header-anchor" href="#命名" aria-label="Permalink to &quot;命名&quot;">​</a></h2><h3 id="单文件组件" tabindex="-1">单文件组件 <a class="header-anchor" href="#单文件组件" aria-label="Permalink to &quot;单文件组件&quot;">​</a></h3><p>文件名命名规则。</p><p><code>MyComponent</code>或<code>my-component</code>，应始终保持一致。</p><p><strong>基础组件</strong>：即展示类，业务无关的组件，放在<mark>全局</mark>位置。以<mark>特定前缀</mark>开口，如<code>Base</code>，<code>V</code>。</p><p><strong>单例组件</strong>：每个页面只使用一次，不接受<code>props</code>。以<code>The</code>前缀命名。</p><p><strong>单纯子组件</strong>：仅是从主页面中抽出的一部分。以<code>父组件名</code>作为前缀命名，并放置在<mark>同一目录</mark>下。如<code>TodoList(主)</code>，<code>TodoListItem(子)</code>。</p><p><strong>单词顺序</strong>：一般性的描述在前，具体的在后。如<code>SearchButtonClear</code>，<code>SearchInputQuery</code>。</p><p><strong>单词</strong>：尽量采用<mark>多个单词</mark>，与HTML元素相区分；每个单词写<mark>完整</mark>，而不采用缩写。</p><hr><h3 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h3><ul><li><strong>prop</strong>声明时采用<code>CamelCase</code>，模板中采用<code>kebab-case</code>。</li><li>插件，混入等的自定义私有方法可采用<code>$_namespace_fun</code>。</li></ul><h2 id="其他-1" tabindex="-1">其他 <a class="header-anchor" href="#其他-1" aria-label="Permalink to &quot;其他&quot;">​</a></h2><ul><li>在 <code>v-if</code>/<code>v-else-if</code>/<code>v-else</code> 中使用 <code>key</code>。</li><li>元素的<code>attribute</code>分行写。</li><li>模板中应该只包含<mark>简单的表达式</mark>。</li><li><strong>计算属性</strong>应尽可能<mark>简单</mark>，单一。复杂的可拆分为多个简单的。</li><li>避免隐性的父子组件通信，尽量做到<code>父-&gt;子</code>采用<code>prop</code>，<code>子-&gt;父</code>采用<code>emit</code>。边缘情况才考虑<code>this.$parent</code>。</li></ul>',15),d=[t];function s(i,n,l,m,h,p){return a(),o("div",null,d)}const k=e(c,[["render",s]]);export{_ as __pageData,k as default};