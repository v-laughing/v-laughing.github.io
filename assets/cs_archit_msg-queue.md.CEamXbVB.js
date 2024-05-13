import{_ as a,c as e,o as r,a4 as t}from"./chunks/framework.CBsUJNCA.js";const l="/assets/image-20191212011250613.BNWx9i1K.png",i="/assets/image-20191212011410374.Bl4OSw-G.png",o="/assets/image-20191212011747967.9DSUbI85.png",q=JSON.parse('{"title":"一、消息模型","description":"","frontmatter":{},"headers":[],"relativePath":"cs/archit/msg-queue.md","filePath":"cs/archit/msg-queue.md"}'),s={name:"cs/archit/msg-queue.md"},h=t('<nav class="table-of-contents"><ul><li><a href="#点对点">点对点</a></li><li><a href="#发布-订阅">发布/订阅</a></li><li><a href="#异步处理">异步处理</a></li><li><a href="#流量削锋">流量削锋</a></li><li><a href="#应用解耦">应用解耦</a></li><li><a href="#发送端的可靠性">发送端的可靠性</a></li><li><a href="#接收端的可靠性">接收端的可靠性</a></li></ul></nav><h1 id="一、消息模型" tabindex="-1">一、消息模型 <a class="header-anchor" href="#一、消息模型" aria-label="Permalink to &quot;一、消息模型&quot;">​</a></h1><p>请求不需要立即获得结果。</p><h2 id="点对点" tabindex="-1">点对点 <a class="header-anchor" href="#点对点" aria-label="Permalink to &quot;点对点&quot;">​</a></h2><p>消息生产者向消息队列中发送了一个消息之后，只能被一个消费者消费一次。</p><p><img src="'+l+'" alt="avatar"><br></p><h2 id="发布-订阅" tabindex="-1">发布/订阅 <a class="header-anchor" href="#发布-订阅" aria-label="Permalink to &quot;发布/订阅&quot;">​</a></h2><p>消息生产者向频道发送一个消息之后，多个消费者可以从该频道订阅到这条消息并消费。</p><p><img src="'+i+'" alt="avatar"><br></p><p>发布与订阅模式和观察者模式有以下不同：</p><ul><li>观察者模式中，观察者和主题都知道对方的存在；而在发布与订阅模式中，生产者与消费者不知道对方的存在，它们之间通过频道进行通信。</li><li>观察者模式是同步的，当事件触发时，主题会调用观察者的方法，然后等待方法返回；而发布与订阅模式是异步的，生产者向频道发送一个消息之后，就不需要关心消费者何时去订阅这个消息，可以立即返回。</li></ul><p><img src="'+o+'" alt="avatar"><br></p><h1 id="二、使用场景" tabindex="-1">二、使用场景 <a class="header-anchor" href="#二、使用场景" aria-label="Permalink to &quot;二、使用场景&quot;">​</a></h1><h2 id="异步处理" tabindex="-1">异步处理 <a class="header-anchor" href="#异步处理" aria-label="Permalink to &quot;异步处理&quot;">​</a></h2><p>发送者将消息发送给消息队列之后，不需要同步等待消息接收者处理完毕，而是立即返回进行其它操作。消息接收者从消息队列中订阅消息之后异步处理。</p><p>例如在注册流程中通常需要<mark>发送验证邮件</mark>来确保注册用户身份的合法性，可以使用消息队列使发送验证邮件的操作异步处理，用户在填写完注册信息之后就可以完成注册，而将发送验证邮件这一消息发送到消息队列中。</p><p>只有在业务流程允许异步处理的情况下才能这么做，例如上面的注册流程中，如果要求用户对验证邮件进行点击之后才能完成注册的话，就不能再使用消息队列。</p><h2 id="流量削锋" tabindex="-1">流量削锋 <a class="header-anchor" href="#流量削锋" aria-label="Permalink to &quot;流量削锋&quot;">​</a></h2><p>在高并发的场景下，如果短时间有大量的请求到达会压垮服务器。</p><p>可以将请求发送到消息队列中，服务器按照其处理能力从消息队列中订阅消息进行处理。</p><h2 id="应用解耦" tabindex="-1">应用解耦 <a class="header-anchor" href="#应用解耦" aria-label="Permalink to &quot;应用解耦&quot;">​</a></h2><p>如果模块之间不直接进行调用，模块之间耦合度就会很低，那么修改一个模块或者新增一个模块对其它模块的影响会很小，从而实现可扩展性。</p><p>通过使用消息队列，一个模块只需要向消息队列中发送消息，其它模块可以选择性地从消息队列中订阅消息从而完成调用。</p><h1 id="三、可靠性" tabindex="-1">三、可靠性 <a class="header-anchor" href="#三、可靠性" aria-label="Permalink to &quot;三、可靠性&quot;">​</a></h1><h2 id="发送端的可靠性" tabindex="-1">发送端的可靠性 <a class="header-anchor" href="#发送端的可靠性" aria-label="Permalink to &quot;发送端的可靠性&quot;">​</a></h2><p>发送端完成操作后一定能将消息成功发送到消息队列中。</p><p>实现方法：在本地数据库建一张消息表，将消息数据与业务数据保存在同一数据库实例里，这样就可以利用本地数据库的事务机制。事务提交成功后，将消息表中的消息转移到消息队列中，若转移消息成功则删除消息表中的数据，否则继续重传。</p><h2 id="接收端的可靠性" tabindex="-1">接收端的可靠性 <a class="header-anchor" href="#接收端的可靠性" aria-label="Permalink to &quot;接收端的可靠性&quot;">​</a></h2><p>接收端能够从消息队列成功消费一次消息。</p><p>两种实现方法：</p><ul><li>保证接收端处理消息的业务逻辑具有幂等性：只要具有幂等性，那么消费多少次消息，最后处理的结果都是一样的。</li><li>保证消息具有唯一编号，并使用一张日志表来记录已经消费的消息编号。</li></ul><h1 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h1><ul><li><a href="http://developers-club.com/posts/270339/" target="_blank" rel="noreferrer">Observer vs Pub-Sub</a></li><li><a href="https://blog.csdn.net/lizhitao/article/details/47723105" target="_blank" rel="noreferrer">消息队列中点对点与发布订阅区别</a></li></ul>',33),n=[h];function c(p,d,u,m,_,b){return r(),e("div",null,n)}const g=a(s,[["render",c]]);export{q as __pageData,g as default};