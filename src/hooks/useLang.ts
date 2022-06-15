import zhCN from 'element-plus/lib/locale/lang/zh-cn';
import zhTW from 'element-plus/lib/locale/lang/zh-tw';

const currentLocale = ref<any>(null);
const langList = {
  'zhCN': zhCN,
  'zhTW': zhTW
}

export const initLang = () => {
  
  const lang = localStorage.getItem('lang') || (navigator.language&&navigator.language.replace(new RegExp('-', 'g'), '') || 'zhCN');

  currentLocale.value = langList[`${lang as 'zhCN' | 'zhTW'}`];

  return {
    currentLocale
  }

}

export const changeLang = (lang:'zhCN' | 'zhTW', callback:(lang:'zhCN' | 'zhTW') => void) => {

  callback(lang);
  currentLocale.value = langList[`${lang as 'zhCN' | 'zhTW'}`];
  localStorage.setItem('lang', lang);

}