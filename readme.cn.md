# 兼容Vue3和Webpack的用户脚本（userscript）模板

这个模板能让你更快更轻松的构建你的用户脚本。

1. 这个版本是个人“特别加强"版，如果你不想用Vue3来构建你的脚本UI，你可以在这里找到原版模板 [trim21/webpack-userscript-template](https://github.com/trim21/webpack-userscript-template)。
2. 特别感谢[Trim21](https://github.com/trim21)做出这么好用的模板。
3. 由于此版本仅在原版基础上增加了对Vue3的支持，所以具体操作步骤请参考原版仓库的readme。

## 特点✨

* 支持Vue3
* 支持Sass
* 降级@types/greasemonkey到V3以支持更多的GM_*函数

## 特别说明📝

livereload好像只在tampermonkey插件下有用，如果你是用的是除tampermonkey之外的“monkey”，比如violent monkey，请换成tampermonkey来开发你的脚本

## 下面是来自原版仓库的readme副本:

> # 使用 WebPack 来构件 UserScript
>
> [使用这个 repo 作为模板](https://github.com/Trim21/webpack-userscript-template/generate).
>
> ## 开发
>
> 1. 允许 Tampermonkey 访问文件网址 `右键插件图标`-`插件管理页面`-`访问文件网址` 或者参照[官方 faq](https://tampermonkey.net/faq.php?ext=dhdg#Q204)
> 2. 使用 `npm ci` or `npm i` 安装依赖。
> 3. `npm run dev` 来进行自动编译。
>
> 在 `dist/` 文件夹会生成两个文件
>
> -   `dist/index.dev.user.js`: **请在浏览器中安装这个油猴脚本** 这个文件不包含有意义的 js 脚本，但是包含了全部的元数据和额外的 `@require file://.../dist/index.debug.js`。
> -   `dist/index.debug.js`: 这是在 webpack 中启用了 `eval-source-map` 选项之后的打包产物。**不要在浏览器中安装这个脚本**。
>
> 4. 修改 [src/index.ts](./src/index.ts) 。如果你需要的话你可以引入 css 或者 less 文件。你也可以通过设置 webpack 来引入 scss。
> 5. 在 <https://www.example.com/> 并且打开控制台，你可以看到用户脚本被运行。
>
> livereload 默认启用。在浏览器中进行自动刷新需要 [这个 chrome 插件](https://chrome.google.com/webstore/detail/jnihajbhpnppcggbcgedagnkighmdlei)
>
> ### 注意
>
> 每次你修改了你的[metadata](./config/metadata.cjs)，你需要重新安装`index.dev.user.js`。
>
> ## TypeScript
>
> 已经设置好了`ts-loader`，可以直接 typescript。[example](src/index.ts)
>
> ## 跨域请求
>
> https://github.com/trim21/webpack-userscript-template/blob/master/src/index.ts
>
> ## 使用依赖
>
> 有两个办法引入依赖。
>
> ### 像以往的 UserScript 一样
>
> 在 [metadata 的 require 部分](./config/metadata.cjs#L13-L17) 中修改你引入的依赖。然后在 [config/webpack.config.base.cjs](./config/webpack.config.base.cjs#L21-L25) 的`exclude`配置中里面把他们排除。
>
> ### 跟以往的 webpack 一样
>
> 直接使用 npm 安装，webpack 会自动打包依赖。
>
> ## build
>
> ```bash
> npm run build
> ```
>
> `dist/index.prod.user.js` 就是最终打包出来的 UserScript。
>
> ## deploy
>
> [github actions](./.github/workflows/nodejs.yml#L68) 会自动在每个 tag 把`dist/index.prod.user.js`部属到`gh-pages`分支的根目录去。
>
> [example](https://github.com/Trim21/webpack-userscript-template/tree/gh-pages)
>
> [deployed](https://trim21.github.io/webpack-userscript-template/)
>
> 也可以使用 greasyfork 的自动同步功能来自动同步此链接。（greasyfork 的代码规则禁止代码混淆或最小化）
