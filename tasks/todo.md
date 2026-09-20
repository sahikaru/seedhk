# 首屏画质与 SEO / GEO 提升

## 2026-09-20 修正：保留原视频与风格

- [x] 原宇航员素材本地保守降噪、锐化与高质量缩放，生成桌面及移动版本
- [x] 恢复原首屏布局、渐变和提示栏，保持当前SEO内容及站点声明
- [x] 同步原视频封面、分享图、结构化图片及sitemap，验证服务端可抓取正文
- [x] 验证播放、手机布局、构建与SEO审计，记录真实性能及限制
- [x] 推送并验证生产播放和搜索资源，提交IndexNow更新

### 本次验证

- 保留原片内容、运动、配色及原首屏布局；本地轻度降噪、锐化，桌面输出3840×2160，手机1920×1080。这是原片增强与放大，不是原生4K，也不能恢复源片已经丢失的细节。
- lint与生产构建通过；Playwright 23/23通过，包含桌面/手机实际播放、原布局及Googlebot/bingbot/Sogou请求的服务端正文检查。
- 最终本地Lighthouse默认模拟移动慢网：Performance 81、Accessibility 100、Best Practices 100、SEO 100，LCP约5.3秒。技术检查分不代表搜索排名或AI引用分。
- 桌面1440×900、手机390×844截图验收通过，未为分数改变首屏风格。
- GitHub提交 `73d2205` 已由Vercel成功部署。线上桌面/手机实际播放分别为3840×2160与1920×1080；视频分段请求206，robots、sitemap、封面、分享图和IndexNow密钥均200；三种爬虫请求可读取服务端正文及FAQ。
- IndexNow再次提交首页，返回HTTP 200。此为更新通知被接受，不代表已收录；Search Console/Bing后台验证及实际排名尚未确认。

## 历史记录（以下静态首屏方案已由本次修正替代）

- [x] 制作原创高细节桌面与手机首屏视觉，替换低码率全屏视频
- [x] 优化首屏响应式图片、可访问名称、社交分享图与图片搜索元数据
- [x] 完善标题、摘要、canonical、Open Graph、robots、sitemap 与结构化数据
- [x] 增加可见的产品说明、使用流程与常见问题，提升搜索和 AI 引用质量
- [x] 补充 Bing IndexNow 与面向搜索引擎/AI 抓取器的明确抓取规则
- [x] 修复本次范围内发现的 SEO lint 问题并扩充自动化测试
- [x] 运行 lint、构建、端到端测试、Lighthouse 和本地视觉验收
- [x] 推送 GitHub，确认线上部署与搜索资源可访问

## Review

- 首屏改为桌面 16:9、手机 9:16 两套原创宇宙宇航员主视觉，避免低码率视频在大屏和竖屏被强行放大。
- 新增即梦AI与Seedance产品说明、三步使用指南、4项FAQ、官方资料链接和独立站声明。
- 新增WebSite、WebPage、ImageObject、FAQPage结构化数据，以及动态robots、图片sitemap、manifest和IndexNow提交脚本。
- 下方演示视频改为进入可视范围后加载，页面首载传输量由约11.5MB降至约1.3MB。
- ESLint无错误；生产构建通过；Playwright 21项测试全部通过。
- Lighthouse：SEO 100、Accessibility 100、Best Practices 100；无网络节流的本地性能基准为100。
- 桌面1440×1000与手机390×844视口均完成视觉验收。
- GitHub提交 `054c826` 已由Vercel部署；线上标题、手机首屏、robots、sitemap、JSON-LD与IndexNow密钥均已验证。
- Bing IndexNow 已接受首页更新（HTTP 202）。Google Search Console 与 Bing Webmaster Tools 的后台注册仍需用户先登录对应账号。
