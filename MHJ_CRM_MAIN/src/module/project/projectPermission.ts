import { computed } from "vue";
import { routes } from "@/router/routes";
import { useMenu } from "@/store/menu";
import { canAny } from "@/utils/permission";
import type { PermissionAction } from "@/types/menu";

const PROJECT_MENU_PATHS = [
  routes.Project.ProjectList,
  "/crmAdmin/Projects",
  "/crmAdmin/projects",
];

export function canProject(action: PermissionAction): boolean {
  return canAny(action, PROJECT_MENU_PATHS);
}

export function useProjectPermissions() {
  const menuStore = useMenu();

  function permission(action: PermissionAction) {
    return computed(() => {
      void menuStore.menuState.menu;
      return canProject(action);
    });
  }

  return {
    canAddProject: permission("tambah"),
    canEditProject: permission("koreksi"),
    canDeleteProject: permission("hapus"),
    canExportProject: permission("export"),
  };
}
