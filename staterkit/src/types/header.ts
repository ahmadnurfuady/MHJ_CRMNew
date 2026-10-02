export interface NotificationItem {
  id: number;
  type: "cart" | "message";
  image: string;
  title?: string;
  price?: string;
  qty?: number;
  name?: string;
  text?: string;
  time?: string;
}

export interface NotificationTab {
  id: "all" | "messages";
  title: string;
  items: NotificationItem[];
}
