import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
      title: "Tulips Garden", // 自定义标题，比生硬的 "Explorer" 更具花园质感
      folderDefaultState: "collapsed", // 默认折叠，只展开顶层，避免一进来就视觉爆炸
      folderClickBehavior: "collapse", // 点击文件夹名折叠/展开，而不是强行跳转
      useSavedState: true, // 记住用户的折叠状态
      // 自定义排序与过滤
      filterFn: (node) => {
        // 隐藏草稿、归档、或者特定附件/配置目录
        const hideList = ["templates", "attachments", "drafts", "private"]
        return !hideList.includes(node.name.toLowerCase())
      },
      mapFn: (node) => {
        // 可以把生硬的英文文件夹名映射为带图标的友好展示名
        if (node.depth === 1) {
          if (node.name.toLowerCase() === "tactics") node.displayName = "🎯 战术分析"
          if (node.name.toLowerCase() === "mathematics") node.displayName = "📐 数学与推导"
          if (node.name.toLowerCase() === "notes") node.displayName = "🌱 思考流"
      }
      },
      order: ["sort", "title"], // 允许在 Frontmatter 用 sort: 1, 2, 3 手动排顶层顺序
    })
  ],
  right: [
    Component.Graph({
     localGraph: {
       drag: true,
       zoom: true,
       depth: 1,
       scale: 1.1,
       repelForce: 0.5,
     },
     globalGraph: {
       drag: true,
       zoom: true,
       depth: -1,
       scale: 0.9,
       repelForce: 0.5,
     }
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "近期更新",
        limit: 5,
        showTags: false,
      })
    ),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
