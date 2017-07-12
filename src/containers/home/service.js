import request from '../../utils/request';

export async function queryIdlist() {
  return request('/api/onelist/idlist/?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android');
}

export async function queryOnelist(id) {
  return request(`/api/onelist/${id}/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android`);
}
