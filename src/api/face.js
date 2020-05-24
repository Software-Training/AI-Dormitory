import HttpRequest from '@/axios/api.request'


export const faceLoginAction = (data) => {
  return HttpRequest.request({
    url: 'user/faceLogin/',
    method: 'post',
     data
  })
}
export const faceRegisterAction = (data) => {
    return HttpRequest.request({
      url: 'user/faceRegister/',
      method: 'post',
      data
    })
  }


