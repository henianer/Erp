import http from "@/http"

/** 登陆 */
export const login = (params: { username: string, password: string }) => {
    return http.post('/erp/api/auth/login', params);
}

/** 修改密码 */
export const changePassword = (params: { password: string }) => {
    return http.post('/erp/api/myself/reset-password/', params);
}

/** 获取用户信息 */
export const getUserList = () => {
    return http.get('/erp/api/user/list');
}

/** 创建用户 */
export const createUser = (params: {
    username: string,
    name: string,
    phone: string,
    password: string,
}) => {
    return http.post('/erp/api/user/create', params);
}
