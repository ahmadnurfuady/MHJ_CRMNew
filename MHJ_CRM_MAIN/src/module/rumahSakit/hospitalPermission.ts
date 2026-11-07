import { computed } from "vue";
import { routes } from "@/router/routes";
import { useMenu } from "@/store/menu";
import { canAny } from "@/utils/permission";
import type { PermissionAction } from "@/types/menu";

const HOSPITAL_MENU_PATHS = [
  routes.App.RumahSakit,
  "/crmAdmin/companies",
  "/crmAdmin/hospital",
  "/crmAdmin/peluang",
  "/app/rumah_sakit",
];

export function canHospital(action: PermissionAction): boolean {
  return canAny(action, HOSPITAL_MENU_PATHS);
}

export function useHospitalPermissions() {
  const menuStore = useMenu();

  function permission(action: PermissionAction) {
    return computed(() => {
      void menuStore.menuState.menu;
      return canHospital(action);
    });
  }

  return {
    canAddHospital: permission("tambah"),
    canEditHospital: permission("koreksi"),
    canDeleteHospital: permission("hapus"),
    canExportHospital: permission("export"),
  };
}
