// src/app/layout.tsx
import "./globals.css"; // 이 경로가 실제 globals.css 위치와 맞는지 확인하십시오.

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
