import HttpRequest from '@/axios/api.request'


export const registerAction = (parameter) => {
  return HttpRequest.request({
    url: 'users/regist/',
    method: 'post',
    params: parameter
  })
}


