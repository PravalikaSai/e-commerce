class UserDataModal {
    "username": string;
    "age": number;
    "gender": string;
    "email": string;
    "createdAt": string
}

export class SignupModel {
    "username": string;
    "age": number;
    "gender": string;
    "email": string;
    "password": string
}

export class SingupResponse {
    "success": boolean;
    "message": string;
    "data": {
        "user": UserDataModal;
    };
}


export class LoginModel {

    "username": string;
    "password": string;

}

export class LoginResponse {
    "success": boolean;
    "message": string;
    "data": {
        "token": string;
        "tokenType": string;
        "expiresIn": string;
        "user": UserDataModal
    };
}
