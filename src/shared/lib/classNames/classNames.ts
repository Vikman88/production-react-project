type Mods = Record<string, boolean>

export const classNames = (cls: string, mods: Mods = {}, additional: string[] = []): string => {
  const selectableMods = Object.keys(mods).filter((name) => mods[name]);
  return [
    cls,
    ...additional.filter(Boolean),
    ...selectableMods
  ].join(' ');
}