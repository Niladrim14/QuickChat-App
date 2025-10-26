import "dotenv/config";

export const ENV ={

MONGO_URI : process.env.MONGO_URI,

JWT_SECRET : process.env.JWT_SECRET,

PORT : process.env.PORT || 5000,

CLIENT_URL : process.env.CLIENT_URL, 

NODE_ENV : process.env.NODE_ENV || "development",

RESEND_API_KEY : process.env.RESEND_API_KEY,

EMAIL_FROM : process.env.EMAIL_FROM,

EMAIL_FROM_NAME : process.env.EMAIL_FROM_NAME,

CLOUDINARY_CLOUD_NAME : process.env.CLOUDINARY_CLOUD_NAME,

CLOUDINARY_API_KEY : process.env.CLOUDINARY_API_KEY,
CLOUDINARY_API_SECRET : process.env.CLOUDINARY_API_SECRET,

ARCJET_KEY : process.env.ARCJET_KEY,
ARCJET_ENV : process.env.ARCJET_ENV,

};