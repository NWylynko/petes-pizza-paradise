import type { PropsWithChildren } from "react";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import "./globals.css";

export default function RootLayout({
  children,
}: PropsWithChildren) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="antialiased p-4">
          <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
