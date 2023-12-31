import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LanguageSwitcher.module.scss';

import type { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button';

interface LanguageSwitcherProps {
  className?: string
}

export const LanguageSwitcher = (props: PropsWithChildren<LanguageSwitcherProps>) => {
  const { className } = props;
  const { t, i18n } = useTranslation();

  const toggle = () => {
    void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
      <Button
        className={classNames(cls.LanguageSwitcher, {}, [className])}
        theme={ThemeButton.CLEAR}
        onClick={toggle}
      >
        {t('Язык')}
      </Button>
  )
}
