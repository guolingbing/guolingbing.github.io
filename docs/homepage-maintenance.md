# 主页维护

- `_pages/about.md`：Biography、研究方向、News 与论文列表模板、Office Hours、学术服务和报告。
- `_data/publications.yml`：已发表及已录用论文，按年份自动分组，最新一年默认展开。
- `_data/preprints.yml`：尚未确认正式录用的 arXiv 工作，独立展示。录用后将条目移到 `publications.yml`，更新会议与年份，避免两处重复。
- `_data/news.yml`：近期动态，按新到旧排列；日期只写已确认的精度。招生信息设置 `pinned: true` 自动置顶，`anchor: "join-us"` 保留原链接，`lang: "zh-CN"` 标记中文。
- `_data/navigation.yml`：顶部导航。
- `_sass/_homepage.scss`：版式、Times New Roman、中文回退字体和移动端样式。

## 添加论文

```yaml
- year: 2026
  title: "Paper title"
  authors: "First Author, Lingbing Guo, Last Author"
  venue: "Findings of EMNLP"
  url: "https://..."
  # 可选：award: "Oral" / note: "To appear" / lang: "zh-CN"
```

作者名单保持完整，模板自动加粗 Lingbing Guo / 郭凌冰。没有正式链接时省略 `url`，标题暂时链接到本页对应年份，悬停提示论文链接待补，保持标题样式一致。已录用论文即使链接仍指向 arXiv，也属于 Publications；分类以录用状态为准。

## 本轮内容记录（2026-10-04）

原主页 30 篇论文已全部迁移，并修复 MKGL 作者列表中的分隔符与 Yarong Lan 姓名次序。

用户补充的两篇论文已加入 2026 年：

- SeeKG: Multi-modal LLMs Understand Knowledge Graphs as Images，Findings of EMNLP 2026，To appear；通讯作者 Zequn Sun。当前未提供论文直达链接，原消息所附地址是合作者主页，故暂不将其作为论文链接。
- 多域知识图谱的协同建模与下游任务适配，计算机工程与应用，2026-03-19。作者与日期按用户提供的信息保留，标题已添加用户提供的知网链接；日期仅留在数据注释中，页面统一显示期刊名与年份。

补充的正式页面：

- [Know the Known and the Unknown](https://aclanthology.org/2026.acl-long.867/)
- [Structured and Abstractive Reasoning](https://aclanthology.org/2026.findings-acl.761/)

依据 arXiv 作者列表与元数据，另列四篇近期预印本：

- [Toward Effective and Reliable LLM Agents via Dynamic Ontology](https://arxiv.org/abs/2608.22974)
- [When Entropy Is Not Enough](https://arxiv.org/abs/2608.15592)
- [Symbolic and Abstractive Reasoning with Complex Visual Queries](https://arxiv.org/abs/2606.09195)
- [Every Little Helps](https://arxiv.org/abs/2602.15896)

这是已确认条目的整理，不将其声明为完整书目。Biography 中的研究概括与中文招生措辞是本轮编辑稿；学位、导师、工作单位源自原主页，办公室与时间源自用户提供的信息。

后续调整：招生精简为 News 中的置顶条目，移除独立招生区、介绍中的招生邀请和招生导航；Office Hours 保持独立。根据用户提供的两篇在投稿件及研究规划，以知识驱动 AI 为主线介绍 LLM 与智能体、知识引导的推理及多智能体协作，并保留知识图谱和多模态研究基础。按用户偏好，简介只概括知识驱动 AI，动态本体放在 Research Interests 的具体说明中，天津大学经历省略起止年份。未来方向以研究兴趣表述；稿件内容未加入 Publications，原始材料不进入站点。

Biography 保持简洁的两段结构：第一段为当前职位及研究概括，第二段为学术经历。具体研究机制放在 Research Interests，避免简介重复铺陈研究方向。

视觉微调：招生置顶条目采用浅蓝背景和蓝色左边线，补充友好的交流邀请；保留在 News 内。左侧 Office Hours 的时间与地点以中英文展示。Research Interests 小标题采用英文标题大小写、独立一行且不加末尾句点。

页面末尾依次为 Professional Service、Talks、Office Hours。Professional Service 与 Talks 共用 `.detail-list` 的标签与内容两列布局、字号及间距。Office Hours 保留浅色背景与细边框的卡片式，时间和地点在桌面并排、手机端上下排列，联系方式置于卡片底部。

混排字号：通过本地中文字体的 `size-adjust: 92%` 统一略缩小汉字及中文标点，英文仍为 Times New Roman。招生条目合并为一段，字号为 16px（中文字符再按上述比例显示），置顶标记与正文首行按基线对齐。

News 日期补齐：SeeKG 按用户指定写作 `2026.08`；ReaLM 和 rMMEA 按论文发表月份拆分为 `2026.04` 与 `2026.03`，按时间倒序排列。ReaLM 的发表日期为 2026-04-12，来源为[曼彻斯特大学论文记录](https://research.manchester.ac.uk/en/publications/realm-residual-quantization-bridging-knowledge-graph-embeddings-a/)；rMMEA 的发表日期为 2026-03-14，来源为[AAAI 论文页面](https://ojs.aaai.org/index.php/AAAI/article/view/39293)，采用发表日期而非会议举办日期。

## 构建与预览

标准环境仍使用 `bundle exec jekyll serve`。本轮 Windows 验证使用项目临时目录 `tmp/gems` 内的 Jekyll 3.10.0 和现有站点插件，未修改 Gemfile / Gemfile.lock。若继续使用该临时环境：

```powershell
$env:GEM_HOME = (Resolve-Path tmp/gems).Path
$env:GEM_PATH = $env:GEM_HOME
$env:JEKYLL_NO_BUNDLER_REQUIRE = 'true'
ruby tmp/gems/bin/jekyll build
python -m http.server 4000 --bind 127.0.0.1 --directory _site
```

静态服务器不会自动构建；编辑后重新运行 build 并刷新浏览器。`tmp/` 与 `_site/` 不提交。推送到 `master` 后，由仓库现有的 GitHub Pages 构建流程发布。

页脚保留原有 Flag Counter，沿用统计 ID `r4RW` 与原图片地址，显示在 “Lingbing Guo · Nanjing University” 右侧。
