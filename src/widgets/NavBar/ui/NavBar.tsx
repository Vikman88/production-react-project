import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import cls from './Navbar.module.scss'


interface NavBarProps {
  className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
  return (
    <div className={classNames(cls.NavBar, {}, [className])}>
      <div className={classNames(cls.links)}>
        <AppLink theme={AppLinkTheme.PRIMARY} to={'/'} className={classNames(cls.mainLink)}>Главная</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>О сайте</AppLink>
      </div>
    </div>
  );
};