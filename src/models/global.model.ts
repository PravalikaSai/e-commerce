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

export class ProductModel {
    "page": number;
    "limit": number
}
export class ProductResponse {
    "success": boolean;
    "data":
        {
            "id": number;
            "name": string;
            "slug": string;
            "category": string;
            "price": number;
            "currency": string;
            "stock": number;
            "rating": number;
            "brand": string;
            "description": string;
            "imageUrl": string;
        };
        "pagination":PageConfigModel;
}
export class PageConfigModel {
    "hasNextPage": boolean;
    "hasPreviousPage": boolean;
    "limit": number;
    "page": number;
    "totalItems": number;
    "totalPages": number
}
