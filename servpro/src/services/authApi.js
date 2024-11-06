import { AxiosResponse } from 'axios';
import { api } from './base/api';

export class AuthApi {
    async login(credentials) {
        return await api.post('/Conta', credentials);
    }
}
