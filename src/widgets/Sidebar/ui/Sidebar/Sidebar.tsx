import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';

import { type PropsWithChildren, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';

interface SidebarProps {
  className?: string
}

export const Sidebar = (props: PropsWithChildren<SidebarProps>) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <button onClick={onToggle}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher className={cls.lang}/>
      </div>
    </div>
  );
}
