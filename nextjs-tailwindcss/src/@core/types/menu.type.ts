export type TMenu = {};

export type TNavLink = {
  icon?: string;
  path?: string;
  title: string;
};

export type TNavGroup = {
  icon?: string;
  title: string;

  children?: (TNavGroup | TNavLink)[];
};
