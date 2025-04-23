import http from "@/http"

export const login = (params: { username: string, password: string }) => {
    return http.post('/erp/api/auth/login', params);
}

export const changePassword = (params: { password: string }) => {
    return http.post('/erp/api/myself/reset-password/', params);
}