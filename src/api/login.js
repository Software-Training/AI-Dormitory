import HttpRequest from '@/axios/api.request'


export const loginAction = (parameter) => {
  return HttpRequest.request({
    url: 'users/login/',
    method: 'post',
    params: parameter
  })
}
export const loginOut = (parameter) => {
  return HttpRequest.request({
    url: 'users/loginOut/',
    method: 'post',
    params: parameter
  })
}
export const getId = (userAccount) => {
  return HttpRequest.request({
    url: `users/${userAccount}`,
    method: 'get',
  })
}
export const update = (telephone,email,numberId) => {
  return HttpRequest.request({
    url: `userinfo/update`,
    method: 'put',
    params:{
      numberId:numberId,
      telephone:telephone,
      email:email
      
    }
  })
}



