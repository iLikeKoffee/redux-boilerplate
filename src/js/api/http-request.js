/**
 * Wraps logic of HTTP request
 * Written for using with chain-call style
 */
export default class HTTPRequest {
  /**
   * Factory method.
   * @param url
   * @returns {HTTPRequest}
   */
  static get (url) {
    return new HTTPRequest(url, 'GET')
  }

  /**
   * Factory method
   * @param url
   * @param [data]
   * @returns {HTTPRequest}
   */
  static post (url, data = null) {
    return new HTTPRequest(url, 'POST', data)
  }

  /**
   * Factory method
   * @param url
   * @param [data]
   * @returns {HTTPRequest}
   */
  static put (url, data = null) {
    return new HTTPRequest(url, 'PUT', data)
  }

  /**
   * Factory method
   * @param url
   * @param [data]
   * @returns {HTTPRequest}
   */
  static patch (url, data = null) {
    return new HTTPRequest(url, 'PATCH', data)
  }

  /**
   * Factory method
   * @param url
   * @returns {HTTPRequest}
   */
  static delete (url) {
    return new HTTPRequest(url, 'DELETE')
  }

  constructor (url, method = 'GET', data = null, params = {}, headers = {}) {
    this._url = url
    this._method = method
    this._params = params
    this._data = data
    this._headers = new Headers()
    this._prepareRequest = request => request
    this._prepareResponse = response => response
  }

  /**
   *
   * @param {String} key
   * @param {String} value
   * @returns {HTTPRequest}
   */
  setHeader (key, value) {
    this._headers.set(key, value)
    return this
  }

  /**
   *
   * @param {String} key
   * @param {String} value
   * @returns {HTTPRequest}
   */
  setParam (key, value) {
    this._params[key] = value
    return this
  }

  /**
   *
   * @param {Object|String} data
   */
  data (data) {
    this._data = data
  }

  setResponsePreprocessor (fn) {
    this._prepareResponse = fn
    return this
  }

  setRequestPreprocessor (fn) {
    this._prepareRequest = fn
    return this
  }


  /**
   * Executes request and returns promise
   * @returns {Promise}
   */
  execute () {
    const request = new Request(this._url, {
      method: this._method,
      mode: 'cors',
      redirect: 'follow',
      headers: this._headers
    })

    return fetch(this._prepareRequest(request)).then(this._prepareResponse)
  }
}
