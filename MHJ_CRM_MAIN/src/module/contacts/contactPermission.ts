import { computed } from "vue";
import { routes } from "@/router/routes";
import { useMenu } from "@/store/menu";
import { canAny } from "@/utils/permission";
import type { PermissionAction } from "@/types/menu";

const CONTACT_MENU_PATHS = [routes.App.Contacts, "/app/contacts"];

export function canContact(action: PermissionAction): boolean {
  return canAny(action, CONTACT_MENU_PATHS);
}

export function useContactPermissions() {
  const menuStore = useMenu();

  function permission(action: PermissionAction) {
    return computed(() => {
      // Permission watcher mengganti menu ini saat hak akses backend berubah.
      void menuStore.menuState.menu;
      return canContact(action);
    });
  }

  return {
    canAddContact: permission("tambah"),
    canEditContact: permission("koreksi"),
    canDeleteContact: permission("hapus"),
    canExportContact: permission("export"),
  };
}
