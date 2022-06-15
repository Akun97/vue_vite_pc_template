/**
 * @Description: 首页顶部轮播
 */

interface bannerData {
  list: bannerList[];
  pageNo?: number;
  pageSize?: number;
  pages?: number;
  total?: number;
}

/**
 * @description: bannerLink?: string; //跳转链接
 * @description: bannerName?: string; // banner名称
 * @description: bannerUrl?: string; // banner链接地址
 * @description: createTime?: string; // 创建时间
 * @description: delFlag?: string; // 未删除标记 默认 0 删除1
 * @description: id?: number;
 * @description: isHot?: string; // 是否设置在首页 0 否 1是
 * @description: sortOrder?: number; // 排序：倒序 数字越大 越靠前
 * @description: state?: string; // 状态 0显示 1隐藏
 * @description: updateTime?: string // 	修改时间
 */
interface bannerList {
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
}