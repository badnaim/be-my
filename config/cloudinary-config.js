import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: "djcuhluuo",
  api_key: "611424668212472",
  api_secret: "zT4zKHaTbkmJgg4rNMBqbzwFgT4",
  // secure: true,
});

export default cloudinary.v2;
