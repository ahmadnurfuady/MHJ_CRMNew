import { defineStore } from "pinia";
import { onMounted, watch, reactive } from "vue";
import { menu } from "@/core/data/menu";
import { useRoute } from "vue-router";
import { MenuItem } from "@/types/menu";

export interface SearchItem {
  icon?: string;
  path?: string;
  title?: string;
  iconForDisplay?: string;
}

export const useMenu = defineStore("menu", () => {
  const route = useRoute();

  const menuState = reactive({
    menu: menu,
    searchData: [] as SearchItem[],
    pinedArray: [] as string[],
  });

  const uiState = reactive({
    show: true,
    activeOverlay: true,
    toggleSidebar: true,
    hideRightArrowRTL: false,
    hideLeftArrowRTL: true,
    hideRightArrow: true,
    hideLeftArrow: true,
    margin: 0,
    menuWidth: 0,
  });

  function toggleMenu(item: MenuItem) {
    if (!item.active) {
      menuState.menu.forEach((menu) => {
        // If the clicked item exists in the menu, deactivate all top-level items
        if (menuState.menu.includes(item)) {
          menu.active = false;
        }
        // Check if the menu has children (submenus)
        if (menu.children) {
          menu.children.forEach((subMenu) => {
            subMenu.active = false;
            // Check if subMenu has further children
            if (subMenu.children) {
              subMenu.children.forEach((child) => {
                child.active = false;
                // Check if child has another level of children
                if (child.children) {
                  child.children.forEach((subChild) => {
                    subChild.active = false;
                  });
                }
              });
            }
          });
        }
      });
    }
    item.active = !item.active;
  }

  function setNavActive(items: MenuItem) {
    menuState.menu.forEach((menuItem) => {
      // all menu items to inactive
      menuItem.active = false;
      // If the selected item matches the current menu item, activate it
      if (menuItem === items) {
        menuItem.active = true;
      }
      // Check if the current menu item has children (submenus)
      if (menuItem.children) {
        menuItem.children.forEach((subMenuItem) => {
          subMenuItem.active = false;
          // If the selected item matches this sub-menu, activate it and its parent
          if (subMenuItem === items) {
            menuItem.active = true;
            subMenuItem.active = true;
          }
          // Check if the sub-menu has further nested children
          if (subMenuItem.children) {
            subMenuItem.children.forEach((subSubMenuItem) => {
              subSubMenuItem.active = false;
              // If the selected item matches this sub-sub-menu, activate its hierarchy
              if (subSubMenuItem === items) {
                menuItem.active = true;
                subMenuItem.active = true;
                subSubMenuItem.active = true;
              }
            });
          }
        });
      }
    });
  }

  function getPined(item: { title?: string }) {
    if (!item.title) return;
    const index = menuState.pinedArray.findIndex((p) => p === item.title);
    if (index !== -1) {
      menuState.pinedArray.splice(index, 1);
    } else {
      menuState.pinedArray.push(item.title);
    }
    localStorage.setItem("pinnedItems", JSON.stringify(menuState.pinedArray));
  }

  function toggleSidebar() {
    uiState.show = !uiState.show;
    if (window.innerWidth < 991) {
      uiState.activeOverlay = true;
    } else {
      uiState.activeOverlay = false;
    }
    uiState.activeOverlay = false;
  }

  function searchTerm(term: string) {
    const items: SearchItem[] = [];
    const searchValue = term.toLowerCase();

    menuState.menu.forEach((menuItems) => {
      if (
        menuItems.title?.toLowerCase().includes(searchValue) &&
        menuItems.type === "link"
      ) {
        items.push({ ...menuItems, iconForDisplay: menuItems.icon });
      }

      menuItems.children?.forEach((subItems) => {
        if (
          subItems.title?.toLowerCase().includes(searchValue) &&
          subItems.type === "link"
        ) {
          items.push({ ...subItems, iconForDisplay: menuItems.icon });
        }

        subItems.children?.forEach((suSubItems) => {
          if (suSubItems.title?.toLowerCase().includes(searchValue)) {
            items.push({ ...suSubItems, iconForDisplay: menuItems.icon });
          }
        });
      });
    });
    menuState.searchData = items;
  }

  watch(
    () => route.path,
    (newPath) => {
      menuState.menu.forEach((items) => {
        if (items.path === newPath) {
          setNavActive(items);
        }
        if (items.children) {
          items.children.forEach((subItems) => {
            if (subItems.path === newPath) {
              setNavActive(subItems);
            }
            if (subItems.children) {
              subItems.children.forEach((subSubItems) => {
                if (subSubItems.path === newPath) {
                  setNavActive(subSubItems);
                }
              });
            }
          });
        }
      });
    },
    { immediate: true },
  );

  onMounted(() => {
    if (window.innerWidth < 991) {
      uiState.show = false;
    }
    const pinnedItems = localStorage.getItem("pinnedItems");
    if (pinnedItems) {
      menuState.pinedArray = JSON.parse(pinnedItems || "[]");
    }
    const updateActiveState = (items: MenuItem[], currentPath: string) => {
      items.filter((item: MenuItem) => {
        if (item.path) {
          item.active = item.path === currentPath;
        } else if (item.children) {
          item.active = item.children.some((subItem: MenuItem) => {
            if (subItem.path) {
              return subItem.path === currentPath;
            } else if (subItem.children) {
              return subItem.children.some(
                (childItem: MenuItem) => childItem.path === currentPath,
              );
            }
            return false;
          });
          updateActiveState(item.children, currentPath);
        }
      });
    };
    // Initialize the active menu state based on the current route
    updateActiveState(menuState.menu, useRoute().path);
  });

  return {
    menuState,
    uiState,
    toggleMenu,
    getPined,
    toggleSidebar,
    searchTerm,
  };
});
