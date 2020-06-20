import HttpRequest from '@/axios/api.request'


export const faceLoginAction = (data) => {
  return HttpRequest.request({
    url: 'users/faceLogin/',
    method: 'post',
     data
  })
}
export const faceRegisterAction = (data) => {
    return HttpRequest.request({
      url: 'users/faceRegister/',
      method: 'post',
      data
    })
  }


