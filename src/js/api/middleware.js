import BaseRestResource from './rest-resource'

export default function middleware ({dispatch}) {
  return next => resource => {
    if (resource instanceof BaseRestResource) {
      resource
        .getRequestOrThrow()
        .execute()
        .then(response => {
          dispatch({
            type: resource.getSuccessActionTypeOrThrow(),
            payload: response
          })
        })
        .catch(error => {
          dispatch({
            type: resource.getErrorActionTypeOrThrow(),
            payload: error
          })
        })
    } else {
      next(resource)
    }
  }
}
