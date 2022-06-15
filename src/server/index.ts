import axios, { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ElMessage } from 'element-plus';

const config = {
  // 默认地址
  baseUrl: '',
  // 设置超时时间
  timeout: 20000,
  // 跨域时候允许携带凭证
  withCredentials: true
}

class RequestHttp {
  // 定义成员变量并指定类型
  service: AxiosInstance;
  public constructor(config: AxiosRequestConfig) {
    // 实例化axios
    this.service = axios.create(config);
    /**
     * 请求拦截器
     * 客户端发送请求 -> [请求拦截器] -> 服务器
     * token校验(JWT) : 接受服务器返回的token,存储到vuex/pinia/本地储存当中
     */
    this.service.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        const token = localStorage.getItem('token') || '';
        return {
          ...config,
          headers: {
            "Accept": "application/json,text/x-json,application/jsonrequest,text/json",
            "'Authorization": token
          }
        }
      },  
      (error: AxiosError) => {
        // 请求报错
        Promise.reject(error)
      }
    );
    /**
     * 响应拦截器
     * 服务器换返回信息 -> [拦截统一处理] -> 客户端JS获取到信息
     */
    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        const { data, config } = response;
        switch (data.code) {
          case 200:
          case 'C00000':
            return data;
          case 401:
            if (localStorage.getItem('token')) {
              localStorage.setItem('token', '');
              ElMessage.error('暂未登录或登录过期，请重新登录');
            }
            return Promise.reject(data);
          default:
            ElMessage.error(data.msg??'请求出错');
            return Promise.reject(data);
        }
      },
      (error: AxiosError) => {
        const { response } = error;
        if (response) {
          this.handleCode(response.status);
        }
        if (!window.navigator.onLine) {
          ElMessage.error()
        }
      }
    );
  }
  handleCode(code: number):void {
    switch(code) {
      default:
        ElMessage.error('请求失败');
        break;
    }
  }
  // 常用方法封装
  get<T>(url: string, params?:object): Promise<ResultData<T>> {
    return this.service.get(url, {params});
  }
  post<T>(url: string, params?: object): Promise<ResultData<T>> {
    return this.service.post(url, params);
  }
  put<T>(url: string, params?: object): Promise<ResultData<T>> {
    return this.service.put(url, params);
  }
  delete<T>(url: string, params?: object): Promise<ResultData<T>> {
    return this.service.delete(url, {params});
  }
}

export default new RequestHttp(config)