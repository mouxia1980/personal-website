大家好，我是超哥。今天给大家分享 **OpenCodex** 配置教程，它可以让 **Codex** 接入 **任意第三方 AI API** 和 **本地 AI 模型** ，支持 DeepSeek、Claude、Grok、Kimi、Ollama 等几乎 **所有主流 AI** ，彻底摆脱官方 **Token 限制** 。下面我们开始教程。

![](https://www.xgdn.com/d/file/efpub/2026/07-23/c0fe5951d86fdcc04b920ed08c3495be.png)

<iframe sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" width="916" height="280" frameborder="0" allow="attribution-reporting; run-ad-auction" src="https://googleads.g.doubleclick.net/pagead/ads?client=ca-pub-5432734503034721&amp;output=html&amp;h=280&amp;slotname=5434324927&amp;adk=250271443&amp;adf=3880932764&amp;pi=t.ma~as.5434324927&amp;abgtt=6&amp;w=916&amp;fwrn=4&amp;fwrnh=100&amp;lmt=1784873931&amp;rafmt=1&amp;format=916x280&amp;url=https%3A%2F%2Fwww.xgdn.com%2F62.html&amp;fwr=0&amp;fwrattr=true&amp;rpe=1&amp;resp_fmts=3&amp;aiof=10&amp;asro=0&amp;aimartd=4&amp;aieuf=1&amp;aicrs=1&amp;uach=WyJXaW5kb3dzIiwiMTkuMC4wIiwieDg2IiwiIiwiMTUwLjAuNDA3OC44MyIsbnVsbCwwLG51bGwsIjY0IixbWyJOb3Q7QT1CcmFuZCIsIjguMC4wLjAiXSxbIkNocm9taXVtIiwiMTUwLjAuNzg3MS4xMjkiXSxbIk1pY3Jvc29mdCBFZGdlIiwiMTUwLjAuNDA3OC44MyJdXSwwXQ..&amp;dt=1784901545644&amp;bpp=1&amp;bdt=2985&amp;idt=1&amp;shv=r20260723&amp;mjsv=m202607200101&amp;ptt=9&amp;saldr=aa&amp;abxe=1&amp;cookie=ID%3D9c9b62cbfbd5b3cc%3AT%3D1784901361%3ART%3D1784901361%3AS%3DALNI_MZP0y0AkRz7PTbk9dfGlLIR702g0w&amp;gpic=UID%3D0000147295a2db43%3AT%3D1784901361%3ART%3D1784901361%3AS%3DALNI_MZtcvEMOIOlxyF7Z78UU-bM0sa74w&amp;eo_id_str=ID%3De8826379ca3eb931%3AT%3D1784901361%3ART%3D1784901361%3AS%3DAA-AfjZJye2iq_cs1H1eb_S-uU3z&amp;prev_fmts=0x0%2C270x600&amp;nras=1&amp;correlator=7888986726017&amp;frm=20&amp;pv=1&amp;u_tz=480&amp;u_his=4&amp;u_h=1221&amp;u_w=2170&amp;u_ah=1180&amp;u_aw=2170&amp;u_cd=24&amp;u_sd=1.18&amp;dmc=32&amp;adx=452&amp;ady=797&amp;biw=2147&amp;bih=1097&amp;scr_x=0&amp;scr_y=0&amp;eid=95396139%2C95396922%2C95397133%2C31099470%2C95396251%2C95340252%2C95340254&amp;oid=2&amp;pvsid=4952219417226802&amp;tmod=1398052817&amp;uas=0&amp;nvt=1&amp;fc=1920&amp;brdim=0%2C0%2C0%2C0%2C2170%2C0%2C2170%2C1180%2C2163%2C1097&amp;vis=1&amp;rsz=%7C%7Ce%7C&amp;abl=CS&amp;pfx=0&amp;fu=128&amp;bc=31&amp;bz=1&amp;ifi=3&amp;uci=a!3&amp;fsb=1&amp;dtd=3" title="Advertisement" aria-label="Advertisement"></iframe>

### 一、配置安装 OpenCodex

**Github 项目地址** ： [https://github.com/lidge-jun/opencodex](https://github.com/lidge-jun/opencodex)

#### 1\. 安装 node.js 环境

**node.js 下载地址：** [https://nodejs.org/zh-cn/download](https://nodejs.org/zh-cn/download)

打开电脑的 **cmd** ，执行安装成功检测命令：

```
node -v
npm -v
```

1.

node -v

2.

npm -v

#### 2\. 安装 OpenCodex

打开电脑的 **cmd** ，执行下面命令进行安装：

```
npm install -g @bitkyc08/opencodex
```

1.

npm install -g @bitkyc08/opencodex

![[Pasted image 20260724232533.png]]

遇到 " **bundled Bun runtime is missing** " 错误 / npm 拦截了 Bun 安装脚本？执行下面命令进行安装：

```
npm install -g --allow-scripts=bun @bitkyc08/opencodex
```

1.

npm install -g --allow-scripts=bun @bitkyc08/opencodex

#### 3\. 启动 OpenCodex

在cmd里执行下面命令启动：

```
ocx start
```

1.

ocx start
![[Pasted image 20260724232506.png]]

启动完成后，浏览器里打开控制面板URL： [http://localhost:10100](http://localhost:10100/)

![[Pasted image 20260724232653.png]]

#### 4\. 卸载 OpenCodex

在cmd里执行下面命令卸载：

```
ocx uninstall
npm uninstall -g @bitkyc08/opencodex
```

1.

ocx uninstall

2.

npm uninstall -g @bitkyc08/opencodex

### 二、接入第三方 AI API

Deepseek 官网： [https://www.deepseek.com](https://www.deepseek.com/)

![](https://www.xgdn.com/d/file/efpub/2026/07-23/dea98ee476af5192e978e97bd306c557.png)

### 三、接入本地 AI 模型

#### 1\. 安装ollama

下载 **Windows 版** ollama地址： [https://ollama.com/download/windows](https://ollama.com/download/windows)

![](https://www.xgdn.com/d/file/efpub/2026/03-26/37bfd39ec8c214436d3f847b8d03e722.png)

#### 2\. 下载本地 AI 模型

**ollama 模型列表** ： [https://ollama.com/search](https://ollama.com/search)

下载 ollama 模型到本地命令：

```
ollama pull 模型名称
```

1.

ollama pull 模型名称

![](https://www.xgdn.com/d/file/efpub/2026/07-23/e0a75a8c2e5a42202989be9397c2e11e.png)

![](https://www.youtube.com/watch?v=8xK4LWJoHLc)