import HttpRequest from './http-request'
import {resolve} from 'url'

export default class BaseRestResource {

  static _getBaseUrlOrThrow () {
    if (this.baseUrl) {
      return this.baseUrl
    }
    throw new Error('baseUrl must be provided')
  }

  _parseItem (response) {
    if (typeof this.parseItem === 'function') {
      return this.parseItem(response)
    }
    return response
  }

  _parseCollection (response) {
    if (typeof this.parseCollection === 'function') {
      return this.parseCollection(response)
    }
    return response
  }

  static get () {
    return new this(
      HttpRequest
        .get(this._getBaseUrlOrThrow())
        .setHeader('Accept', 'application/json'),
      this.getAction,
      this.errorAction
    )
  }

  static show (pk) {
    return new this(
      HttpRequest
        .get(resolve(this._getBaseUrlOrThrow(), pk.toString()))
        .setHeader('Accept', 'application/json'),
      this.showAction,
      this.errorAction
    )
  }

  static create (data) {
    return new this(
      HttpRequest
        .post(this._getBaseUrlOrThrow())
        .setHeader('Accept', 'application/json')
        .setHeader('Content-Type', 'application/json')
        .data(data),
      this.createAction,
      this.errorAction
    )
  }

  static update (pk, data) {
    return new this(
      HttpRequest
        .put(resolve(this._getBaseUrlOrThrow(), pk.toString()))
        .setHeader('Accept', 'application/json')
        .setHeader('Content-Type', 'application/json')
        .data(data),
      this.updateAction,
      this.errorAction
    )
  }

  static destroy (pk) {
    return new this(
      HttpRequest.delete(resolve(this._getBaseUrlOrThrow(), pk.toString())),
      this.destroyAction,
      this.errorAction
    )
  }


  constructor (httpRequest, successActionType, errorActionType) {
    this._request = httpRequest
    this._successActionType = successActionType
    this._errorActionType = errorActionType
  }

  getRequestOrThrow () {
    if (this._request) {
      return this._request
    }
    throw new Error('Request object is not provided')
  }

  getSuccessActionTypeOrThrow () {
    if (this._successActionType) {
      return this._successActionType
    }
    throw new Error('Success action type is not provided')
  }

  getErrorActionTypeOrThrow () {
    if (this._errorActionType) {
      return this._errorActionType
    }
    throw new Error('Error action type is not provided')
  }
}
