# 首屏画质与 SEO / GEO 提升

- [x] 制作原创高细节桌面与手机首屏视觉，替换低码率全屏视频
- [x] 优化首屏响应式图片、可访问名称、社交分享图与图片搜索元数据
- [x] 完善标题、摘要、canonical、Open Graph、robots、sitemap 与结构化数据
- [x] 增加可见的产品说明、使用流程与常见问题，提升搜索和 AI 引用质量
- [x] 补充 Bing IndexNow 与面向搜索引擎/AI 抓取器的明确抓取规则
- [x] 修复本次范围内发现的 SEO lint 问题并扩充自动化测试
- [x] 运行 lint、构建、端到端测试、Lighthouse 和本地视觉验收
- [ ] 推送 GitHub，确认线上部署与搜索资源可访问

## Review

- 首屏改为桌面 16:9、手机 9:16 两套原创宇宙宇航员主视觉，避免低码率视频在大屏和竖屏被强行放大。
- 新增即梦AI与Seedance产品说明、三步使用指南、4项FAQ、官方资料链接和独立站声明。
- 新增WebSite、WebPage、ImageObject、FAQPage结构化数据，以及动态robots、图片sitemap、manifest和IndexNow提交脚本。
- 下方演示视频改为进入可视范围后加载，页面首载传输量由约11.5MB降至约1.3MB。
- ESLint无错误；生产构建通过；Playwright 21项测试全部通过。
- Lighthouse：SEO 100、Accessibility 100、Best Practices 100；无网络节流的本地性能基准为100。
- 桌面1440×1000与手机390×844视口均完成视觉验收。
