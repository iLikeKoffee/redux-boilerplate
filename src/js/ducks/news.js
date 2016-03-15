import Resource from '../api/resources/news-articles'

export function fetchNews (page = 1) {
  return Resource.get()
}

export function createArticle (data) {
  return Resource.post(data)
}
