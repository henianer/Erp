import { userStore } from "@/store/user";
import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse, type InternalAxiosRequestConfig } from "axios";
import { ElMessage } from "element-plus";

const httpConfig = {
    baseURL: 'http://159.75.174.131:8080', // 请求接口的地址
    timeout: 10000, // 请求超时时间
    // withCredentials: true, // 是否允许携带凭证
}

export interface IHttpResult<T = any> {
    code: number; // 返回码
    message: string; // 返回信息
    data: T; // 返回数据
}

/** Http工具类 */
class Http {

    private instance: AxiosInstance;

    constructor(config: AxiosRequestConfig) {
        // 创建axios实例
        this.instance = axios.create(config);
        // 设置请求拦截器
        this.setInterceptors();
    }

    /** 拦截器 */
    private setInterceptors() {
        // 请求拦截器
        this.instance.interceptors.request.use(
            (config: InternalAxiosRequestConfig) => {
                // 请求头携带token
                const store = userStore();
                let token = store.getUserData.token || '';
                // console.log(config);
                if (token && config && token.length > 0) {
                    config.headers.Authorization = token;
                    // config.data.token = token;
                }
                return config;
            },
            (error) => {
                // 处理请求错误
                return error;
            }
        );

        // 响应拦截器
        this.instance.interceptors.response.use(
            (response: AxiosResponse) => {
                // 处理响应数据
                let code = response.data.code;
                if (code === 200) {
                    ElMessage.success(response.data.message);
                    return response.data;
                } else {
                    let message = response.data.message || '服务器异常';
                    ElMessage.error(message);
                    return Promise.reject(response.data);
                }
            },
            (error: IHttpResult) => {
                // 处理响应错误
                let code = error.code;
                let message = error.message || '服务器异常';
                ElMessage.error(code + ' ' + message);
                return Promise.reject(error);
            }
        );
    }

    /** POST */
    public post<T = IHttpResult>(url: string, params?: any): Promise<T> {
        return this.instance.post(url, params);
    }

    /** PUT */
    public put<T = IHttpResult>(url: string, params?: any): Promise<T> {
        return this.instance.put(url, params);
    }

    /** GET */
    public get<T = IHttpResult>(url: string, params?: any): Promise<T> {
        return this.instance.get(url, { params });
    }

    /** DELETE */
    public delete<T = IHttpResult>(url: string): Promise<T> {
        return this.instance.delete(url);
    }

    public uploadImg<T = IHttpResult>(url: string, params?: any): Promise<T> {
        return this.instance.post(url, params, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }

}

export default new Http(httpConfig);