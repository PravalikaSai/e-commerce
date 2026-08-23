24/08/2026
Todo:

Get Product API Integration:

- Request: POST
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
