import { RunTimeLayoutConfig } from '@umijs/max';
import logo from '@/assets/images/logo.svg';
export async function getInitialState(): Promise<{ name: string; avatar?: string; }> {
  return {
    name: 'Yi',
    avatar:
      'https://p26-passport.byteacctimg.com/img/user-avatar/312989b46037c16843b1eb44aea82fa2~180x180.awebp?',
  };
}

export const layout: RunTimeLayoutConfig = () => {
  return {
    logo,
    menu: { locale: false },
    title: 'Umi Admin',
    layout: 'mix'
  }
}
