import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as t}from"./app-o23ze9Vn.js";const p="/assets/img-20220911144546-kxefPP6i.png",e="/assets/img-20220911144830-3EDWsbjb.png",c="/assets/img-20220911145244-Q55LPVul.png",i="/assets/img-20220911145438-YaaxalCW.png",o={},l=t('<h2 id="state的生命周期" tabindex="-1"><a class="header-anchor" href="#state的生命周期" aria-hidden="true">#</a> state的生命周期</h2><p>State 的生命周期可以分为 3 个阶段</p><ul><li><code>创建</code>（插入视图树）：State 初始化时会依次执行 ：构造方法 -&gt; initState -&gt; didChangeDependencies -&gt; build，随后完成页面渲染。</li><li><code>更新</code>（在视图树中存在）： Widget 的状态更新，主要由 3 个方法触发：setState、didchangeDependencies 与 didUpdateWidget。</li><li><code>销毁</code>（从视图树中移除）：组件被移除或是页面销毁的时候，系统会调用 deactivate 和 dispose 这两个方法，来移除或销毁组件</li></ul><figure><img src="'+p+'" alt="Img" tabindex="0" loading="lazy"><figcaption>Img</figcaption></figure><div style="text-align:center;"><p>State生命周期图</p></div><hr><figure><img src="'+e+'" alt="Img" tabindex="0" loading="lazy"><figcaption>Img</figcaption></figure><div style="text-align:center;"><p>几种常见场景下State生命周期图</p></div><hr><figure><img src="'+c+'" alt="Img" tabindex="0" loading="lazy"><figcaption>Img</figcaption></figure><div style="text-align:center;"><p>State生命周期中方法调用对比</p></div><h2 id="app的生命周期" tabindex="-1"><a class="header-anchor" href="#app的生命周期" aria-hidden="true">#</a> App的生命周期</h2><figure><img src="'+i+`" alt="Img" tabindex="0" loading="lazy"><figcaption>Img</figcaption></figure><ul><li>有时我们需要在对应的 App 生命周期事件中做相应处理，比如 App 从后台进入前台、从前台退到后台，或是在 UI 绘制完成后做一些处理。</li><li>原生：重写 Activity、ViewController 生命周期回调方法，或是注册应用程序的相关通知，来监听 App 的生命周期并做相应的处理</li><li>Flutter：可以使用 WidgetsBindingObserver 类 <ul><li>生命周期回调</li><li>帧绘制回调</li></ul></li></ul><h2 id="demo-监听state生命周期" tabindex="-1"><a class="header-anchor" href="#demo-监听state生命周期" aria-hidden="true">#</a> Demo 监听State生命周期</h2><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:flutter/material.dart&#39;</span></span><span class="token punctuation">;</span>
<span class="token comment">/// @Description  生命周期</span>
<span class="token keyword">class</span> <span class="token class-name">Page1</span> <span class="token keyword">extends</span> <span class="token class-name">StatefulWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token class-name">Page1</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">Key</span><span class="token operator">?</span> key<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Page1</span><span class="token punctuation">&gt;</span></span> <span class="token function">createState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token function">_Page1State</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> _Page1State <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Page1</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">with</span> <span class="token class-name">WidgetsBindingObserver</span> <span class="token punctuation">{</span>
  <span class="token comment">// 当 Widget第一次插入到 Widget 树时会被调用。对于每一个State对象，Flutter只会调用一次该回调</span>
  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;page1 initState......&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">WidgetsBinding</span><span class="token punctuation">.</span>instance<span class="token punctuation">.</span><span class="token function">addObserver</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//注册监听器</span>

    <span class="token class-name">WidgetsBinding</span><span class="token punctuation">.</span>instance<span class="token punctuation">.</span><span class="token function">addPostFrameCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span>_<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;单次Frame绘制回调&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//只回调一次</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">WidgetsBinding</span><span class="token punctuation">.</span>instance<span class="token punctuation">.</span><span class="token function">addPersistentFrameCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span>_<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;实时Frame绘制回调&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//每帧都回调</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">setState</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;page1 setState......&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/*
  *初始化时，在initState之后立刻调用
  *当State的依赖关系发生变化时，会触发此接口被调用
  */</span>
  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">didChangeDependencies</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">didChangeDependencies</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;page1 didChangeDependencies......&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;page1 build......&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token class-name">Scaffold</span><span class="token punctuation">(</span>
      appBar<span class="token punctuation">:</span> <span class="token class-name">AppBar</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Lifecycle demo&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      body<span class="token punctuation">:</span> <span class="token class-name">Center</span><span class="token punctuation">(</span>
        child<span class="token punctuation">:</span> <span class="token class-name">Column</span><span class="token punctuation">(</span>
          children<span class="token punctuation">:</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Widget</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span>
            <span class="token class-name">ElevatedButton</span><span class="token punctuation">(</span>
              child<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;打开/关闭新页面查看状态变化&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
              onPressed<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token class-name">Navigator</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
                context<span class="token punctuation">,</span>
                <span class="token class-name">MaterialPageRoute</span><span class="token punctuation">(</span>builder<span class="token punctuation">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token keyword">const</span> <span class="token class-name">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
              <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">//状态改变的时候会调用该方法,比如父类调用了setState</span>
  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">didUpdateWidget</span><span class="token punctuation">(</span><span class="token class-name">Page1</span> oldWidget<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">didUpdateWidget</span><span class="token punctuation">(</span>oldWidget<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;page1 didUpdateWidget......&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">//当State对象从树中被移除时，会调用此回调</span>
  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">deactivate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">deactivate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;page1 deactivate......&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">//当State对象从树中被永久移除时调用；通常在此回调中释放资源</span>
  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;page1 dispose......&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">WidgetsBinding</span><span class="token punctuation">.</span>instance<span class="token punctuation">.</span><span class="token function">removeObserver</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//移除监听器</span>
  <span class="token punctuation">}</span>

  <span class="token comment">//监听App生命周期回调</span>
  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">didChangeAppLifecycleState</span><span class="token punctuation">(</span><span class="token class-name">AppLifecycleState</span> state<span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; </span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">state</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>state <span class="token operator">==</span> <span class="token class-name">AppLifecycleState</span><span class="token punctuation">.</span>resumed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//do sth</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),u=[l];function d(k,r){return s(),a("div",null,u)}const g=n(o,[["render",d],["__file","life_cycle.html.vue"]]);export{g as default};