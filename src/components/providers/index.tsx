import { NextIntlClientProvider } from 'next-intl';

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return <NextIntlClientProvider>{children}</NextIntlClientProvider>;
}
