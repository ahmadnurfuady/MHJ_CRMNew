export interface MenuItem {
  headTitle?: string;
  title?: string;
  icon?: string;
  type?: string;
  badgeType?: string;
  badge?: string;
  active?: boolean;
  menu?: boolean;
  isPinned?: boolean | undefined;
  path?: string;
  children?: MenuItem[];
  bookmark?: boolean;
  iconForDisplay?: string;
}
