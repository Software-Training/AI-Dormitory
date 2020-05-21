import HttpRequest from '@/axios/api.request'


export const loginAction = (parameter) => {
  return HttpRequest.request({
    url: 'user/login/',
    method: 'post',
    params: parameter
  })
}


