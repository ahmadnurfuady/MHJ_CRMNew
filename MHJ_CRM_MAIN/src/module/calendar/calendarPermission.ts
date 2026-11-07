import { computed } from "vue";
import { routes } from "@/router/routes";
import { useMenu } from "@/store/menu";
import { canAny } from "@/utils/permission";
import type { PermissionAction } from "@/types/menu";

const CALENDAR_MENU_PATHS = [routes.CrmAdmin.Kalender, "/crmAdmin/kalender"];

export function canCalendar(action: PermissionAction): boolean {
  return canAny(action, CALENDAR_MENU_PATHS);
}

export function useCalendarPermissions() {
  const menuStore = useMenu();

  function permission(action: PermissionAction) {
    return computed(() => {
      void menuStore.menuState.menu;
      return canCalendar(action);
    });
  }

  return {
    canAddCalendar: permission("tambah"),
    canEditCalendar: permission("koreksi"),
    canDeleteCalendar: permission("hapus"),
    canExportCalendar: permission("export"),
  };
}
