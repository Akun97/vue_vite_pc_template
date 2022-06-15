export class BannerDataModel {

  list: BannerListModel[] = [];
  pageNo?: number;
  pageSize?: number;
  pages?: number;
  total?: number;

  constructor(data: bannerData) {
    this.total = data.total;
    this.pageNo = data.pageNo;
    this.pageSize = data.pageSize;
    this.pages = data.pages;
    for (let i = 0; i < data.list.length; i++) {
      let item = new BannerListModel(data.list[i]);
      this.list.push(item);
    }
  }

}

export class BannerListModel {

  bannerLink?: string; //跳转链接
  bannerName?: string; // banner名称
  bannerUrl?: string; // banner链接地址
  createTime?: string; // 创建时间
  delFlag?: string; // 未删除标记 默认 0 删除1
  id?: number;
  isHot?: string; // 是否设置在首页 0 否 1是
  sort_order?: number; // 排序：倒序 数字越大 越靠前
  sortOrder?: number; // 排序：倒序 数字越大 越靠前
  state?: string; // 状态 0显示 1隐藏
  updateTime?: string; // 	修改时间

  constructor(item: bannerList) {
    this.bannerLink = item.bannerLink;
    this.bannerName = item.bannerName;
    this.bannerUrl = item.bannerUrl;
    this.createTime = item.createTime;
    this.delFlag = item.delFlag;
    this.id = item.id;
    this.isHot = item.isHot;
    this.sort_order = item.sort_order;
    this.sortOrder = item.sortOrder;
    this.state = item.state;
    this.updateTime = item.updateTime;
  }

}

export class BannerResultModel {

  code: string | number;
  msg: string;
  data: BannerDataModel;

  constructor(result: ResultData<bannerData>) {
    this.code = result.code;
    this.msg = result.msg;
    this.data = new BannerDataModel(result.data as bannerData);
  }

}