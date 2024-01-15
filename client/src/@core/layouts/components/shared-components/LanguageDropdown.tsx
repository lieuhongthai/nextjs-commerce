// ** Icon Imports
import Icon from 'src/@core/components/icon';

// ** Third Party Import
import { useTranslation } from 'react-i18next';

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu';
import { Settings } from '@/@core/types/mui/type';
import themeConfig from '@/configs/themeConfig';

// ** Type Import

const LanguageDropdown = (props: { settings: Settings }) => {
  // ** Props
  const { settings } = props;

  // ** Hook
  const { i18n } = useTranslation();

  // ** Vars
  const { layout } = settings;

  const handleLangItemClick = (lang: 'en' | 'fr' | 'ar') => {
    i18n.changeLanguage(lang);
  };

  return (
    <OptionsMenu
      icon={<Icon icon='mdi:translate' />}
      menuProps={{ sx: { '& .MuiMenu-paper': { mt: 4, minWidth: 130 } } }}
      iconButtonProps={{ color: 'inherit', sx: { ...(layout === 'vertical' ? { mr: 0.75 } : { mx: 0.75 }) } }}
      options={[
        {
          text: 'English',
          menuItemProps: {
            sx: { py: 2 },
            selected: i18n.language === 'en',
            onClick: () => {
              handleLangItemClick('en');
            },
          },
        },
        {
          text: 'French',
          menuItemProps: {
            sx: { py: 2 },
            selected: i18n.language === 'fr',
            onClick: () => {
              handleLangItemClick('fr');
            },
          },
        },
        {
          text: 'Arabic',
          menuItemProps: {
            sx: { py: 2 },
            selected: i18n.language === 'ar',
            onClick: () => {
              handleLangItemClick('ar');
            },
          },
        },
      ]}
    />
  );
};

export default LanguageDropdown;
