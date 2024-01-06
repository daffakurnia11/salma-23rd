import type { Metadata } from "next";
import ParticleBg from "./ParticleBg";

import "bootstrap/dist/css/bootstrap.min.css";
import { ConfigProvider } from "antd";

export const metadata: Metadata = {
  title: "Happy 23rd Birthday, Salma!",
  description: "Let's celebrate your 23rd birthday, Salma Qotrunnada Hamidah!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ConfigProvider
          theme={{
            components: {
              Button: {
                defaultBorderColor: "pink",
              },
            },
          }}
        >
          <ParticleBg />
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}
