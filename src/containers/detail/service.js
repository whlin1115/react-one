import request from '../../utils/request';

export async function readDetail(id) {
  return request(`/api/essay/${id}?channel=wdj&source=channel_reading&source_id=9264&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android`);
}

export async function musicDetail(id) {
  return request(`/api/music/detail/${id}?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android`);
}

export async function movieDetail(id) {
  return request(`/api/movie/${id}/story/1/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android`);
}

export async function issueDetail(id) {
  return request(`/api/question/${id}?channel=wdj&source=channel_reading&source_id=9254&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android`);
}

export async function essayDetail(id) {
  return request(`/api/essay/${id}?channel=wdj&source=summary&source_id=9245&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android`);
}
