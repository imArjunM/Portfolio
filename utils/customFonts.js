import localFont from 'next/font/local';

export const sfProText = localFont({
  src: [
    {
      path: '../assets/fonts/SF-Pro-Text-Thin.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../assets/fonts/SF-Pro-Text-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/SF-Pro-Text-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/SF-Pro-Text-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/SF-Pro-Text-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/SF-Pro-Text-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-sf-pro',
});
