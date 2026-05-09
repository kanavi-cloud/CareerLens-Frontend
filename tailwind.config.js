/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. 다크모드 설정
  darkMode: ["class"],

  // 2. 파일 감시 경로 (src 폴더를 사용하는 Next.js 13+ 프로젝트 기준)
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // src 폴더 밖 대비용
  ],

  theme: {
    extend: {
      colors: {
        // shadcn/ui가 사용하는 HSL 변수 연결
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        // 카드, 배지 등을 위해 아래 변수들도 추가하는 것이 좋습니다.
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },

  // 3. 플러그인 등록 (이 부분이 빠져있었습니다)
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};
