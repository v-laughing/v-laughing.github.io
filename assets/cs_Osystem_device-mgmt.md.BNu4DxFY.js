import{_ as a,c as e,o as t,a4 as l}from"./chunks/framework.CBsUJNCA.js";const i="/assets/014fbc4d-d873-4a12-b160-867ddaed9807.DxrE2Vox.jpg",r="/assets/4e2485e4-34bd-4967-9f02-0c093b797aaa.CMfD09l0.png",o="/assets/271ce08f-c124-475f-b490-be44fedc6d2e.C4U_1H48.png",k=JSON.parse('{"title":"磁盘结构","description":"","frontmatter":{},"headers":[],"relativePath":"cs/Osystem/device-mgmt.md","filePath":"cs/Osystem/device-mgmt.md"}'),s={name:"cs/Osystem/device-mgmt.md"},c=l('<nav class="table-of-contents"><ul><li><a href="#_1-先来先服务">1. 先来先服务</a></li><li><a href="#_2-最短寻道时间优先">2. 最短寻道时间优先</a></li><li><a href="#_3-电梯算法">3. 电梯算法</a></li></ul></nav><h1 id="磁盘结构" tabindex="-1">磁盘结构 <a class="header-anchor" href="#磁盘结构" aria-label="Permalink to &quot;磁盘结构&quot;">​</a></h1><ul><li>盘面（Platter）：一个磁盘有多个盘面；</li><li>磁道（Track）：盘面上的圆形带状区域，一个盘面可以有多个磁道；</li><li>扇区（Track Sector）：磁道上的一个弧段，一个磁道可以有多个扇区，它是最小的物理储存单位，目前主要有 512 bytes 与 4 K 两种大小；</li><li>磁头（Head）：与盘面非常接近，能够将盘面上的磁场转换为电信号（读），或者将电信号转换为盘面的磁场（写）；</li><li>制动手臂（Actuator arm）：用于在磁道之间移动磁头；</li><li>主轴（Spindle）：使整个盘面转动。</li></ul><p><img src="'+i+'" alt="avatar"><br></p><h1 id="磁盘调度算法" tabindex="-1">磁盘调度算法 <a class="header-anchor" href="#磁盘调度算法" aria-label="Permalink to &quot;磁盘调度算法&quot;">​</a></h1><p>读写一个磁盘块的时间的影响因素有：</p><ul><li>旋转时间（主轴转动盘面，使得磁头移动到适当的扇区上）</li><li>寻道时间（制动手臂移动，使得磁头移动到适当的磁道上）</li><li>实际的数据传输时间</li></ul><p>其中，寻道时间最长，因此磁盘调度的主要目标是使磁盘的平均寻道时间最短。</p><h2 id="_1-先来先服务" tabindex="-1">1. 先来先服务 <a class="header-anchor" href="#_1-先来先服务" aria-label="Permalink to &quot;1. 先来先服务&quot;">​</a></h2><blockquote><p>FCFS, First Come First Served</p></blockquote><p>按照磁盘请求的顺序进行调度。</p><p>优点是公平和简单。缺点也很明显，因为未对寻道做任何优化，使平均寻道时间可能较长。</p><h2 id="_2-最短寻道时间优先" tabindex="-1">2. 最短寻道时间优先 <a class="header-anchor" href="#_2-最短寻道时间优先" aria-label="Permalink to &quot;2. 最短寻道时间优先&quot;">​</a></h2><blockquote><p>SSTF, Shortest Seek Time First</p></blockquote><p>优先调度与当前磁头所在磁道距离最近的磁道。</p><p>虽然平均寻道时间比较低，但是不够公平。如果新到达的磁道请求总是比一个在等待的磁道请求近，那么在等待的磁道请求会一直等待下去，也就是出现饥饿现象。具体来说，两端的磁道请求更容易出现饥饿现象。</p><p><img src="'+r+'" alt="avatar"><br></p><h2 id="_3-电梯算法" tabindex="-1">3. 电梯算法 <a class="header-anchor" href="#_3-电梯算法" aria-label="Permalink to &quot;3. 电梯算法&quot;">​</a></h2><blockquote><p>SCAN</p></blockquote><p>电梯总是保持一个方向运行，直到该方向没有请求为止，然后改变运行方向。</p><p>电梯算法（扫描算法）和电梯的运行过程类似，总是按一个方向来进行磁盘调度，直到该方向上没有未完成的磁盘请求，然后改变方向。</p><p>因为考虑了移动方向，因此所有的磁盘请求都会被满足，解决了 SSTF 的饥饿问题。</p><p><img src="'+o+'" alt="avatar"><br></p>',23),p=[c];function d(n,_,h,m,u,b){return t(),e("div",null,p)}const q=a(s,[["render",d]]);export{k as __pageData,q as default};
