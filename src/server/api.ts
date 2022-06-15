import axios from './index';

const baseUrl = () => {
  return import.meta.env.MODE === 'development' ? '/api' : process.env.VITE_REQUEST_URL;
}

export class api {

  public static banner = {
    selectShowList: (param?:object):Promise<ResultData<bannerData>> => axios.post(`${baseUrl()}/banner/selectShowList`, param) // 首页轮播
  }

  public static alumnus = {
    detail: (param?:object) => axios.get(`${baseUrl()}/alumnus/detail`, param) // 校友风采详情
  }

}