import request from '../../utils/request';

export async function essayDetail() {
  return request('http://v3.wufazhuce.com:8000/api/essay/1701?channel=wdj&source=summary&source_id=9245&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android');
}

