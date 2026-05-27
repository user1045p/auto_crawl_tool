// src/service/common/utils/page-control.util.ts

export class PageControlUtil {
  private static instance: PageControlUtil;

  private shouldCloseNewPages: boolean = true;

  // 获取单例实例
  public static getInstance(): PageControlUtil {
    if (!PageControlUtil.instance) {
      PageControlUtil.instance = new PageControlUtil();
    }
    return PageControlUtil.instance;
  }

  // 获取当前状态
  public getShouldCloseNewPages(): boolean {
    return this.shouldCloseNewPages;
  }

  // 设置状态
  public setShouldCloseNewPages(value: boolean): void {
    this.shouldCloseNewPages = value;
  }
}

  // /**
  //  * 使用方式：
  //  *   控制自动关闭新页面
  //  * @param enable 
  //  */
  // private async enableAutoCloseNewPages(enable: boolean) {
  //   PageControlUtil.getInstance().setShouldCloseNewPages(enable);
  // }