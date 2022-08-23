import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{o,c,b as n,a,e as t,d as e,r as l}from"./app.9f8cae59.js";const i={},u=t(`<h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>pnpm add --save mysql2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">mysql2\u76F8\u6BD4mysqls\u7684\u4F18\u52BF</p><p>mysql2\u7684\u6027\u80FD\u66F4\u9AD8\uFF0C\u652F\u6301PreparedStatement\uFF0C\u591A\u6B21\u67E5\u8BE2\u6027\u80FD\u66F4\u9AD8\uFF0C\u4E66\u5199SQL\u66F4\u7B80\u5355\uFF1B\u81EA\u5E26Promise\u5305\u88C5\u5668\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528async/await\u8BED\u6CD5\uFF1B\u548C\u5927\u90E8\u5206\u7684mysqls\u5E93\u517C\u5BB9\u3002\u4E14\u88ABsequlize\u652F\u6301\u3002</p></div><h2 id="\u8FDE\u63A5\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u8FDE\u63A5\u6570\u636E\u5E93" aria-hidden="true">#</a> \u8FDE\u63A5\u6570\u636E\u5E93</h2>`,4),r={href:"https://blog.csdn.net/qq_45040919/article/details/110139354",target:"_blank",rel:"noopener noreferrer"},k=e("\u5728Node.js\u4E2D\u5982\u4F55\u4F7F\u7528mysql2"),d=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> mysql <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;mysql2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u521B\u5EFA\u8FDE\u63A5\u5BF9\u8C61</span>
<span class="token keyword">const</span> connection <span class="token operator">=</span> mysql<span class="token punctuation">.</span><span class="token function">createConnection</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u8FDE\u63A5\u7684\u6570\u636E\u5E93\u5730\u5740\u3002\uFF08\u9ED8\u8BA4:localhost\uFF09</span>
  <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span> <span class="token comment">//mysql\u7684\u8FDE\u63A5\u7528\u6237\u540D</span>
  <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5BF9\u5E94\u7528\u6237\u7684\u5BC6\u7801</span>
  <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3306</span><span class="token punctuation">,</span> <span class="token comment">// \u7AEF\u53E3</span>
  <span class="token literal-property property">database</span><span class="token operator">:</span> <span class="token string">&quot;db_soft&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u6240\u9700\u8981\u8FDE\u63A5\u7684\u6570\u636E\u5E93\u7684\u540D\u79F0</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u5F00\u59CB\u8FDE\u63A5</span>
connection<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u6267\u884Csql</span>
<span class="token keyword">const</span> sql <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">SELECT * FROM t_student WHERE student_name like &#39;_\u667A\u5EB7&#39;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token comment">// const sql2 = \`DELETE from t_student WHERE student_name like &#39;\u6D4B\u8BD5%&#39;\`;</span>
<span class="token comment">// const sql3 = \`insert into t_student values (4312,2,&#39;\u738B\u6771&#39;,&#39;\u6C5F\u897F\u8D63\u5DDE&#39;,&#39;1999-07-10&#39;);\`;</span>
connection<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> result</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;result:&quot;</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u8FDE\u63A5\u5173\u95ED</span>
connection<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u6253\u5370\u7ED3\u679C</span>
<span class="token comment">// result: [</span>
<span class="token comment">//   RowDataPacket {</span>
<span class="token comment">//     student_id: 1001,</span>
<span class="token comment">//     clazz_id: 1,</span>
<span class="token comment">//     student_name: &#39;\u94B1\u667A\u5EB7&#39;,</span>
<span class="token comment">//     hometown: &#39;\u6C5F\u82CF\u82CF\u5DDE&#39;,</span>
<span class="token comment">//     birthday: 2000-01-17T16:00:00.000Z</span>
<span class="token comment">//   },</span>
<span class="token comment">// ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>connection.query</code>\u65B9\u6CD5\u53EF\u4EE5\u7528\u6765\u67E5\u8BE2\uFF0C\u5E76\u4E14\u6267\u884C\u4EFB\u610F\u6B63\u786E\u7684sql\u8BED\u53E5\u3002\u63A5\u53D7\u7B2C\u4E00\u4E2A\u53C2\u6570\u5C31\u662F\u4E00\u4E2Asql\u8BED\u53E5\u5B57\u7B26\u4E32\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u6267\u884Csql\u8BED\u53E5\u540E\u7684\u56DE\u8C03\u51FD\u6570\u3002</p><h2 id="orm-\u548Csequelize" tabindex="-1"><a class="header-anchor" href="#orm-\u548Csequelize" aria-hidden="true">#</a> ORM \u548CSequelize</h2><p>\u5982\u679C\u76F4\u63A5\u4F7F\u7528\u8FD9\u4E2Amysql\u5305\u63D0\u4F9B\u7684\u63A5\u53E3\u8BBF\u95EE\u6570\u636E\u5E93\uFF0C\u6211\u4EEC\u7F16\u5199\u7684\u4EE3\u7801\u5C31\u6BD4\u8F83\u5E95\u5C42\uFF0C\u56E0\u4E3A\u662F\u76F4\u63A5\u5199SQL\u547D\u4EE4\u6765\u8BBF\u95EE\u7684\u3002</p><p>\u5176\u5B9E\u6570\u636E\u5E93\u7684\u8868\u662F\u4E00\u4E2A\u4E8C\u7EF4\u8868\uFF0C\u53EF\u4EE5\u6709\u591A\u884C\u591A\u5217\u3002\u8FD9\u4E2A\u8868\u7684\u7ED3\u6784\u53EF\u4EE5\u6620\u5C04\u6210\u4E00\u4E2AJS\u5BF9\u8C61\uFF0C\u6BCF\u4E00\u884C\u90FD\u53EF\u4EE5\u7528\u4E00\u4E2A\u5BF9\u8C61\u6765\u8868\u793A\u3002\u6BCF\u4E2A\u5217\u7684\u5B57\u6BB5\u5C31\u662F\u5BF9\u8C61\u91CC\u7684\u6BCF\u4E2A\u5C5E\u6027\u3002\u8FD9\u4E2A\u5C31\u662FORM\u6280\u672F\uFF1AObject-Relational Mapping \u5C31\u662F\u628A\u5173\u7CFB\u6570\u636E\u5E93\u7684\u8868\u7ED3\u6784\u6620\u5C04\u5230\u5BF9\u8C61\u4E0A\u3002</p><p>\u90A3\u7531\u8C01\u6765\u505A\u8FD9\u4E2A\u8F6C\u6362\u5462\uFF1F\u5C31\u662FORM\u6846\u67B6\uFF0CSequelize\u5C31\u662F\u8FD9\u79CDORM\u6846\u67B6\uFF0C\u53EF\u4EE5\u8BA9\u6211\u4EEC\u8BFB\u5199JS\u5BF9\u8C61\uFF0C\u5B83\u5E2E\u6211\u4EEC\u628A\u5BF9\u8C61\u53D8\u6210\u8868\u4E2D\u7684\u6BCF\u884C\u3002</p>`,6),m={href:"https://github.com/demopark/sequelize-docs-Zh-CN",target:"_blank",rel:"noopener noreferrer"},v=e("Sequelize Docs \u4E2D\u6587\u7248"),b=t(`<h3 id="demo-crud" tabindex="-1"><a class="header-anchor" href="#demo-crud" aria-hidden="true">#</a> demo CRUD</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> Sequelize<span class="token punctuation">,</span> Model<span class="token punctuation">,</span> DataTypes <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;sequelize&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> sequelize <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sequelize</span><span class="token punctuation">(</span><span class="token string">&quot;db_soft&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">dialect</span><span class="token operator">:</span> <span class="token string">&quot;mysql&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Book</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

Book<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> DataTypes<span class="token punctuation">.</span><span class="token constant">INTEGER</span><span class="token punctuation">,</span>
      <span class="token literal-property property">autoIncrement</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">primaryKey</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> DataTypes<span class="token punctuation">.</span><span class="token constant">STRING</span><span class="token punctuation">,</span>
      <span class="token literal-property property">allowNull</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">author</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> DataTypes<span class="token punctuation">.</span><span class="token constant">STRING</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> sequelize <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> sequelize<span class="token punctuation">.</span><span class="token function">sync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6A21\u578B\u540C\u6B65</span>
  <span class="token comment">// \u589E\uFF1Acreate \u521B\u5EFA\u5B9E\u4F8B\u5E76\u6301\u4E45\u4FDD\u5B58</span>
  <span class="token keyword">const</span> yy <span class="token operator">=</span> <span class="token keyword">await</span> Book<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u7EA2\u62C2\u591C\u5954&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">author</span><span class="token operator">:</span> <span class="token string">&quot;\u738B\u4E8C&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>yy<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u6539\uFF1Aupdate</span>
  <span class="token keyword">await</span> Book<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Store of O&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u67E5\uFF1AfindAll</span>
  <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token keyword">await</span> Book<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">author</span><span class="token operator">:</span> <span class="token string">&quot;\u738B\u4E8C&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;BookList:&quot;</span><span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u5220\uFF1Adestroy</span>
  <span class="token keyword">await</span> Book<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u6211\u7684\u9634\u9633\u4E24\u754C&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u5173\u95ED\u8FDE\u63A5</span>
  <span class="token keyword">await</span> sequelize<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Sequelize\u7684\u6838\u5FC3\u6982\u5FF5\u5C31\u662F\u6A21\u578B\u3002\u5728Sequelize\u91CC\uFF0C\u6A21\u578B\u5C31\u662F\u4E00\u4E2A\u7EE7\u627F\u4E86<code>Model</code>\u7684\u7C7B\uFF0C\u5B83\u76F8\u5F53\u4E8E\u6570\u636E\u5E93\u91CC\u7684\u4E00\u5F20\u8868\u7684\u7ED3\u6784\u3002\u7531\u8FD9\u4E2A\u7C7B\u521B\u5EFA\u51FA\u6765\u7684\u4E00\u4E2A\u5B9E\u4F8B\u5BF9\u8C61\uFF0C\u76F8\u5F53\u4E8E\u8868\u91CC\u7684\u4E00\u884C\u3002<br> \u9996\u5148<code>new Sequelize</code>\u521B\u5EFA\u4E00\u4E2A<code>sequelize</code>\u8FDE\u63A5\u5BF9\u8C61\uFF0C\u5305\u542B\u4E86\u8FDE\u63A5\u5230\u7684mysql\u6570\u636E\u5E93\u7684\u4FE1\u606F\u3002\u7136\u540E\u58F0\u660E\u4E00\u4E2A\u6A21\u578B\u53EBBook\u3002</p><ul><li>\u7528<code>Book.init</code>\u5BF9\u8FD9\u4E2A\u6A21\u578B\u521D\u59CB\u5316\uFF0C\u5C31\u662F\u5BF9\u8868\u521D\u59CB\u5316\uFF0C\u6709\u54EA\u4E9B\u5C5E\u6027\uFF08\u5217\uFF09\u53CA\u5176\u6570\u636E\u7C7B\u578B\u3002\u7B2C\u4E8C\u4E2A\u53C2\u6570\u5C31\u662F\u8981\u8FDE\u63A5\u7684\u5BF9\u8C61\u3002</li><li><code>sequelize.sync()</code>\u7528\u6765\u540C\u6B65\u6211\u4EEC\u8FD9\u4E2A\u6A21\u578B\u548C\u8868\uFF0C\u56E0\u4E3A\u53EF\u80FD\u8868\u5DF2\u7ECF\u5B58\u5728\uFF0C\u6216\u8005\u6709\u4E0D\u540C\u7684\u5217\uFF0C\u6240\u4EE5\u8981\u5148\u540C\u6B65\u4E00\u4E0B\u3002</li><li><code>Book.create</code>\u7528\u6A21\u578B\u521B\u5EFA\u4E00\u4E2A\u5B9E\u4F8B\u5BF9\u8C61\uFF0C\u5C31\u662F\u5728\u8868\u4E2D\u6DFB\u52A0\u4E00\u884C\u6570\u636E\u3002\u8FD9\u4E2A\u90FD\u662F\u5F02\u6B65\u7684\uFF0C\u76F8\u5F53\u4E8E\u4E00\u4E2Apromise\uFF0C\u6240\u4EE5\u7528await\u975E\u5E38\u7B80\u6D01\u3002</li><li><code>Book.findAll</code> \u7528\u4E8E\u67E5\u8BE2</li></ul><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,5),y={href:"https://juejin.cn/post/6920948406055616526#heading-5",target:"_blank",rel:"noopener noreferrer"},q=e("\u300A\u4F7F\u7528nodejs\u8FDE\u63A5mysql\u6570\u636E\u5E93\u300B");function h(_,g){const s=l("ExternalLinkIcon");return o(),c("div",null,[u,n("p",null,[n("a",r,[k,a(s)])]),d,n("p",null,[n("a",m,[v,a(s)])]),b,n("ul",null,[n("li",null,[n("a",y,[q,a(s)])])])])}var z=p(i,[["render",h],["__file","connect_mysql.html.vue"]]);export{z as default};
