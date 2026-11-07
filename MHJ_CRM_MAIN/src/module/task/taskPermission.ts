import { computed } from "vue";
import { routes } from "@/router/routes";
import { useMenu } from "@/store/menu";
import { canAny } from "@/utils/permission";
import type { PermissionAction } from "@/types/menu";

const TASK_MENU_PATHS = [routes.App.Task, "/app/task"];

export function canTask(action: PermissionAction): boolean {
  return canAny(action, TASK_MENU_PATHS);
}

export function useTaskPermissions() {
  const menuStore = useMenu();

  function permission(action: PermissionAction) {
    return computed(() => {
      void menuStore.menuState.menu;
      return canTask(action);
    });
  }

  return {
    canAddTask: permission("tambah"),
    canEditTask: permission("koreksi"),
    canDeleteTask: permission("hapus"),
    canExportTask: permission("export"),
  };
}
