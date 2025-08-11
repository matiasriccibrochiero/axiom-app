
import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {} },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/line-clamp")],
};
export default config;
