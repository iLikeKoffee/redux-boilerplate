import BaseRestResource from '../rest-resource'

export default class NewsArticlesResource extends BaseRestResource {
  static baseUrl = 'http://0.0.0.0:3000/news_articles'
  static getAction = 'NEWS_ARTICLES_FETCHED'
  static showAction = 'NEWS_ARTICLES_FETCHED'
  static createAction = 'NEWS_ARTICLES_FETCHED'
  static updateAction = 'NEWS_ARTICLES_FETCHED'
  static destroyAction = 'NEWS_ARTICLES_FETCHED'
  static errorAction = 'NEWS_ARTICLES_FETCHED'
}
