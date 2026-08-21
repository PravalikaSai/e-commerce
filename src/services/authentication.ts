import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { catchError } from 'rxjs';
import { LoginModel, LoginResponse, SignupModel, SingupResponse } from '../models/global.model';
import { Router } from '@angular/router';

@Service()
export class Authentication {

    http = inject(HttpClient);

    router = inject(Router);

    private baseUrl = "http://localhost:5000/";



    signup(body: SignupModel) {
        this.http.post<SingupResponse>(`${this.baseUrl}api/v1/auth/signup`, body)
            .subscribe(
                {
                    next: (res: SingupResponse) => {
                        const result = res;
                        if (result.success) {
                            window.alert(result.message);
                            this.router.navigate(['/login']);
                        }
                    },
                    error: (error: any) => {
                        window.alert(error.error.message);
                    }
                }

            )
    }

    login(body: LoginModel) {
        this.http.post<LoginResponse>(`${this.baseUrl}api/v1/auth/login`, body)
            .subscribe(
                {
                    next: (res: LoginResponse) => {
                        const data = res;
                        if (data.success) {
                            window.alert(data.message);
                            localStorage.setItem("username", data.data.user.username);
                            localStorage.setItem("token", data.data.token);
                            this.router.navigate(['/dashboard']);
                        }
                    },
                    error: (error: any) => {
                        window.alert(error.error.message);
                    }
                }
            )

    }
    clearToken() {
        localStorage.removeItem("username");
        localStorage.removeItem("token");
    }
}
