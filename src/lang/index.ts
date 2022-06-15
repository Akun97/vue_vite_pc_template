import { createI18n } from 'vue-i18n';
import zhCN from './zh-cn';
import zhTW from './zh-tw';

const langList = {
  'zhCN': zhCN,
  'zhTW': zhTW
}

const lang = (navigator.language&&navigator.language.replace(new RegExp('-', 'g'), '') || 'zhCN');

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || lang,
  messages: langList
});

export default i18n