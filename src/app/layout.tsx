import type { Metadata } from "next";
import '@/app/assets/scss/common.scss'
import StyledComponentsRegistry from "@/app/lib/registry";

export const metadata: Metadata = {
  title: "Keisuke Sato Portfolio",
  description: "今まで作ったものや記事を掲載しているポートフォリオサイトです。",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
