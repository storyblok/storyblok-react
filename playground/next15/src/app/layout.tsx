import StoryblokProvider from '@/components/StoryblokProvider';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};
interface RootLayoutType {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutType) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </StoryblokProvider>
  );
}