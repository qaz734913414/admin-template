const SERVER_PREFIX = 'http://127.0.0.1:3003/api'
export default {
  urls: {
    song: {
      list: `${SERVER_PREFIX}/song/fetchList`,
      detail: `${SERVER_PREFIX}/song/fetchDetail`
    }
  },
  language: {
    default: 'Ch', // 默认语言
    others: ['En'] // 其他语言
  },
}
