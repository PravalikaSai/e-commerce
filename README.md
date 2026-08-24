24/08/2026
Todo:

# Get Product API Integration:

- Request: GET
- API: http://localhost:5000/api/v1/products/1
- ExpectedOutput: 
    {
        "success": true,
        "data": {
            "id": 1,
            "name": "Premium Wireless Headphones",
            "slug": "premium-wireless-headphones",
            "category": "electronics",
            "price": 14999,
            "currency": "INR",
            "stock": 42,
            "rating": 4.7,
            "brand": "NovaSound",
            "description": "High-fidelity wireless headphones with active noise cancellation.",
            "imageUrl": "https://images.pexels.com/photos/8038326/pexels-photo-8038326.jpeg"
        }
    }


25/08/2025

# Add To Cart API Integration:

- Request: POST
- API: http://localhost:5000/api/v1/cart
- Paylaod:
    {
        "productId": 5,
        "quantity": 2
    }

- ExpectedOutput: 

    {
        "success": true,
        "message": "Product added to cart successfully",
        "data": {
            "userId": 1,
            "items": [
                {
                    "productId": 5,
                    "quantity": 2,
                    "addedAt": "2026-08-24T06:06:14.054Z"
                }
            ]
        }
    }

# Add To Favourite API Integration:

- Request: POST
- API: http://localhost:5000/api/v1/favourites
- Payload:
    {

    "productId": 5
    }
- ExpectedOutput: 
    {
        "success": true,
        "message": "Product added to favourites successfully",
        "data": {
            "userId": 1,
            "productIds": [
                5
            ]
        }
    }

# Delete from Cart API Integration:

- Request: DELETE
- API: http://localhost:5000/api/v1/cart/5
- ExpectedOutput: 
    {
        "success": true,
        "message": "Product removed from cart successfully",
        "data": {
            "userId": 1,
            "items": []
        }
    }

# Delete from Favourite API Integration:

- Request: DELETE
- API: http://localhost:5000/api/v1/favourites/5
- ExpectedOutput: 

    {
        "success": true,
        "message": "Product removed from favourites successfully",
        "data": {
            "userId": 1,
            "productIds": []
        }
    }

# Get Cart API Intergation

Request: GET
API: http://localhost:5000/api/v1/cart
ExpectedOutput: 

    {
        "success": true,
        "data": {
            "userId": 1,
            "items": [
                {
                    "productId": 5,
                    "quantity": 2,
                    "addedAt": "2026-08-24T07:08:51.992Z"
                },
                {
                    "productId": 1,
                    "quantity": 2,
                    "addedAt": "2026-08-24T07:09:22.912Z"
                }
            ]
        }
    }

# Get Favourites API Integration

- Request: GET
- Payload: http://localhost:5000/api/v1/favourites
- ExpectedOutput:
    {
        "success": true,
        "data": {
            "userId": 1,
            "productIds": [
                5,
                1
            ]
        }
    }