import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: false,
  devIndicators: false,
  allowedDevOrigins: [
    "http://localhost:3000",
    "dadikwahyuchang.id",
    "http://dadikwahyuchang.id",
    "https://dadikwahyuchang.id",
    "*.carubra.com",
    "http://20.20.20.26"
  ]
    
};

export default nextConfig;
