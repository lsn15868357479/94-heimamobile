// 处理文章模块的请求数据
import request from '@/utils/request'

// 获取文章数据
export function getArticles (params) {
  return request({
    // 这里必须用完整地址 因为 之前设置的baseURL是 v1_0
    url: 'http://ttapi.research.itcast.cn/app/v1_1/articles',
    params: { with_top: 1, ...params } // 合并 数据
  })
}

// 不感兴趣的文章接口
export function dislikeArticle (data) {
  return request({
    url: '/article/dislikes',
    method: 'post',
    data
  })
}
// 举报文章接口
export function reportArticle (data) {
  return request({
    url: '/article/reports',
    data,
    method: 'post'
  })
}
// 联想搜索
export function getSuggestion (params) {
  return request({
    url: '/suggestion', // 搜搜建议地址
    params // query参数放置在 params中s
  })
}
// 获取文章搜索的结果
//   params是get参数
//   data是body参数
export function searchArticle (params) {
  return request({
    url: '/search',
    params // 关键词 及分页信息
  })
}
