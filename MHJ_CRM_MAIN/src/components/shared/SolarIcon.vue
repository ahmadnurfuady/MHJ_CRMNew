<template>
  <component
    :is="resolvedIcon"
    class="solar-icon"
    :class="legacyClasses"
    :size="size"
    :color="color"
    :secondary-color="secondaryColor"
    :secondary-opacity="secondaryOpacity"
    :stroke-width="strokeWidth"
    :alt="alt"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import { computed, normalizeClass, type Component } from "vue";
import { AddIcon } from "@solar-icons/vue/bold/add";
import { AddCircleIcon } from "@solar-icons/vue/bold/add-circle";
import { AltArrowDownIcon } from "@solar-icons/vue/bold/alt-arrow-down";
import { AltArrowLeftIcon } from "@solar-icons/vue/bold/alt-arrow-left";
import { AltArrowRightIcon } from "@solar-icons/vue/bold/alt-arrow-right";
import { AltArrowUpIcon } from "@solar-icons/vue/bold/alt-arrow-up";
import { ArrowLeftIcon } from "@solar-icons/vue/bold/arrow-left";
import { ArrowLeftIcon as ArrowLeftLinearIcon } from "@solar-icons/vue/bold/arrow-left";
import { ArrowRightIcon } from "@solar-icons/vue/bold/arrow-right";
import { ArrowRightUpIcon } from "@solar-icons/vue/bold/arrow-right-up";
import { BellIcon } from "@solar-icons/vue/bold/bell";
import { BoltIcon } from "@solar-icons/vue/bold/bolt";
import { BoxIcon } from "@solar-icons/vue/bold/box";
import { BuildingsIcon } from "@solar-icons/vue/bold/buildings";
import { CalendarIcon } from "@solar-icons/vue/bold/calendar";
import { CalendarIcon as CalendarLinearIcon } from "@solar-icons/vue/bold/calendar";
import { CameraIcon } from "@solar-icons/vue/bold/camera";
import { CartLargeIcon } from "@solar-icons/vue/bold/cart-large";
import { CaseRoundIcon } from "@solar-icons/vue/bold/case-round";
import { Chart2Icon } from "@solar-icons/vue/bold/chart-2";
import { ChartSquareIcon as ChartSquareLinearIcon } from "@solar-icons/vue/bold/chart-square";
import { ChatRoundDotsIcon } from "@solar-icons/vue/bold/chat-round-dots";
import { CheckCircleIcon } from "@solar-icons/vue/bold/check-circle";
import { CheckReadIcon } from "@solar-icons/vue/bold/check-read";
import { CheckSquareIcon } from "@solar-icons/vue/bold/check-square";
import { ClipboardIcon } from "@solar-icons/vue/bold/clipboard";
import { ClockCircleIcon } from "@solar-icons/vue/bold/clock-circle";
import { CloseCircleIcon } from "@solar-icons/vue/bold/close-circle";
import { CloseIcon } from "@solar-icons/vue/bold/close";
import { CloudUploadIcon } from "@solar-icons/vue/bold/cloud-upload";
import { CopyIcon } from "@solar-icons/vue/bold/copy";
import { DangerCircleIcon } from "@solar-icons/vue/bold/danger-circle";
import { DangerTriangleIcon } from "@solar-icons/vue/bold/danger-triangle";
import { DeliveryIcon } from "@solar-icons/vue/bold/delivery";
import { DisketteIcon } from "@solar-icons/vue/bold/diskette";
import { DocumentAddIcon } from "@solar-icons/vue/bold/document-add";
import { DocumentTextIcon } from "@solar-icons/vue/bold/document-text";
import { DollarIcon } from "@solar-icons/vue/bold/dollar";
import { DoubleAltArrowDownIcon } from "@solar-icons/vue/bold/double-alt-arrow-down";
import { DoubleAltArrowUpIcon } from "@solar-icons/vue/bold/double-alt-arrow-up";
import { DownloadIcon } from "@solar-icons/vue/bold/download";
import { EyeIcon } from "@solar-icons/vue/bold/eye";
import { FileTextIcon } from "@solar-icons/vue/bold/file-text";
import { FileTextIcon as FileTextLinearIcon } from "@solar-icons/vue/bold/file-text";
import { FilterIcon } from "@solar-icons/vue/bold/filter";
import { FolderIcon } from "@solar-icons/vue/bold/folder";
import { FolderOpenIcon } from "@solar-icons/vue/bold/folder-open";
import { ForbiddenCircleIcon } from "@solar-icons/vue/bold/forbidden-circle";
import { ForwardIcon } from "@solar-icons/vue/bold/forward";
import { GalleryIcon } from "@solar-icons/vue/bold/gallery";
import { GiftIcon } from "@solar-icons/vue/bold/gift";
import { GitForkIcon } from "@solar-icons/vue/bold/git-fork";
import { GlobalIcon } from "@solar-icons/vue/bold/global";
import { GlobalIcon as GlobalLinearIcon } from "@solar-icons/vue/bold/global";
import { GraphUpIcon } from "@solar-icons/vue/bold/graph-up";
import { HamburgerMenuIcon } from "@solar-icons/vue/bold/hamburger-menu";
import { HashtagIcon } from "@solar-icons/vue/bold/hashtag";
import { HeartIcon } from "@solar-icons/vue/bold/heart";
import { HistoryIcon } from "@solar-icons/vue/bold/history";
import { HomeIcon } from "@solar-icons/vue/bold/home";
import { HospitalIcon } from "@solar-icons/vue/bold/hospital";
import { InfoCircleIcon } from "@solar-icons/vue/bold/info-circle";
import { LayersIcon } from "@solar-icons/vue/bold/layers";
import { MapIcon } from "@solar-icons/vue/bold/map";
import { LetterIcon } from "@solar-icons/vue/bold/letter";
import { LinkIcon } from "@solar-icons/vue/bold/link";
import { ListIcon } from "@solar-icons/vue/bold/list";
import { LockIcon } from "@solar-icons/vue/bold/lock";
import { LoginIcon } from "@solar-icons/vue/bold/login";
import { LogoutIcon } from "@solar-icons/vue/bold/logout";
import { MagnifierIcon } from "@solar-icons/vue/linear/magnifier";
import { MagnifierZoomInIcon } from "@solar-icons/vue/bold/magnifier-zoom-in";
import { MagnifierZoomOutIcon } from "@solar-icons/vue/bold/magnifier-zoom-out";
import { MapPointIcon } from "@solar-icons/vue/bold/map-point";
import { MaximizeIcon } from "@solar-icons/vue/bold/maximize";
import { MinimizeIcon } from "@solar-icons/vue/bold/minimize";
import { MedicalKitIcon } from "@solar-icons/vue/bold/medical-kit";
import { MenuDotsIcon } from "@solar-icons/vue/bold/menu-dots";
import { MicrophoneIcon } from "@solar-icons/vue/bold/microphone";
import { MinusIcon } from "@solar-icons/vue/bold/minus";
import { NotesIcon } from "@solar-icons/vue/bold/notes";
import { Palette2Icon } from "@solar-icons/vue/bold/palette-2";
import { PaperclipIcon } from "@solar-icons/vue/bold/paperclip";
import { PenIcon } from "@solar-icons/vue/bold/pen";
import { PhoneIcon } from "@solar-icons/vue/bold/phone";
import { PinIcon } from "@solar-icons/vue/bold/pin";
import { PrinterIcon } from "@solar-icons/vue/bold/printer";
import { QuestionCircleIcon } from "@solar-icons/vue/bold/question-circle";
import { RefreshIcon } from "@solar-icons/vue/bold/refresh";
import { ReplyIcon } from "@solar-icons/vue/bold/reply";
import { RocketIcon } from "@solar-icons/vue/bold/rocket";
import { SendSquareIcon } from "@solar-icons/vue/bold/send-square";
import { SettingsIcon } from "@solar-icons/vue/bold/settings";
import { SettingsIcon as SettingsLinearIcon } from "@solar-icons/vue/bold/settings";
import { SatelliteIcon } from "@solar-icons/vue/bold/satellite";
import { ShareIcon } from "@solar-icons/vue/bold/share";
import { ShieldCheckIcon } from "@solar-icons/vue/bold/shield-check";
import { ShieldUserIcon } from "@solar-icons/vue/bold/shield-user";
import { ShieldWarningIcon } from "@solar-icons/vue/bold/shield-warning";
import { SmileCircleIcon } from "@solar-icons/vue/bold/smile-circle";
import { SortIcon } from "@solar-icons/vue/bold/sort";
import { SquareArrowLeftIcon } from "@solar-icons/vue/bold/square-arrow-left";
import { SquareArrowRightUpIcon } from "@solar-icons/vue/bold/square-arrow-right-up";
import { StarIcon } from "@solar-icons/vue/bold/star";
import { TagIcon } from "@solar-icons/vue/bold/tag";
import { TrashBinTrashIcon } from "@solar-icons/vue/bold/trash-bin-trash";
import { TuningIcon } from "@solar-icons/vue/bold/tuning";
import { UploadIcon } from "@solar-icons/vue/bold/upload";
import { UserBlockIcon } from "@solar-icons/vue/bold/user-block";
import { UserCheckIcon } from "@solar-icons/vue/bold/user-check";
import { UserIcon } from "@solar-icons/vue/bold/user";
import { UserPlusIcon } from "@solar-icons/vue/bold/user-plus";
import { UsersGroupRoundedIcon } from "@solar-icons/vue/bold/users-group-rounded";
import { WalletIcon } from "@solar-icons/vue/bold/wallet";
import { WidgetIcon } from "@solar-icons/vue/bold/widget";
import { GpsIcon } from "@solar-icons/vue/bold/gps";

defineOptions({ inheritAttrs: false });

const props = withDefaults(
  defineProps<{
    name?: unknown;
    icon?: unknown;
    type?: string;
    size?: string | number;
    color?: string;
    secondaryColor?: string;
    secondaryOpacity?: number;
    strokeWidth?: string | number;
    alt?: string;
  }>(),
  {
    secondaryColor: "var(--app-secondary, #18A6E4)",
    secondaryOpacity: 1,
    strokeWidth: 1.5,
  },
);

const icons: Record<string, Component> = {
  add: AddIcon,
  "add-circle": AddCircleIcon,
  "alt-arrow-down": AltArrowDownIcon,
  "alt-arrow-left": AltArrowLeftIcon,
  "alt-arrow-right": AltArrowRightIcon,
  "alt-arrow-up": AltArrowUpIcon,
  "arrow-left": ArrowLeftIcon,
  "arrow-left-linear": ArrowLeftLinearIcon,
  "arrow-right": ArrowRightIcon,
  "arrow-right-up": ArrowRightUpIcon,
  bell: BellIcon,
  bolt: BoltIcon,
  box: BoxIcon,
  buildings: BuildingsIcon,
  calendar: CalendarIcon,
  "calendar-linear": CalendarLinearIcon,
  camera: CameraIcon,
  cart: CartLargeIcon,
  case: CaseRoundIcon,
  chart: Chart2Icon,
  "chart-linear": ChartSquareLinearIcon,
  chat: ChatRoundDotsIcon,
  check: CheckReadIcon,
  "check-circle": CheckCircleIcon,
  "check-square": CheckSquareIcon,
  clipboard: ClipboardIcon,
  clock: ClockCircleIcon,
  close: CloseIcon,
  "close-circle": CloseCircleIcon,
  "cloud-upload": CloudUploadIcon,
  copy: CopyIcon,
  danger: DangerCircleIcon,
  "danger-triangle": DangerTriangleIcon,
  delivery: DeliveryIcon,
  diskette: DisketteIcon,
  "document-add": DocumentAddIcon,
  "document-text": DocumentTextIcon,
  dollar: DollarIcon,
  "double-arrow-down": DoubleAltArrowDownIcon,
  "double-arrow-up": DoubleAltArrowUpIcon,
  download: DownloadIcon,
  eye: EyeIcon,
  file: FileTextIcon,
  "file-text-linear": FileTextLinearIcon,
  filter: FilterIcon,
  folder: FolderIcon,
  "folder-open": FolderOpenIcon,
  forbidden: ForbiddenCircleIcon,
  forward: ForwardIcon,
  gallery: GalleryIcon,
  gift: GiftIcon,
  "git-fork": GitForkIcon,
  global: GlobalIcon,
  "global-linear": GlobalLinearIcon,
  graph: GraphUpIcon,
  menu: HamburgerMenuIcon,
  hashtag: HashtagIcon,
  heart: HeartIcon,
  history: HistoryIcon,
  home: HomeIcon,
  hospital: HospitalIcon,
  info: InfoCircleIcon,
  layers: LayersIcon,
  map: MapIcon,
  letter: LetterIcon,
  link: LinkIcon,
  list: ListIcon,
  lock: LockIcon,
  login: LoginIcon,
  logout: LogoutIcon,
  magnifier: MagnifierIcon,
  "magnifier-zoom-in": MagnifierZoomInIcon,
  "magnifier-zoom-out": MagnifierZoomOutIcon,
  "map-point": MapPointIcon,
  maximize: MaximizeIcon,
  minimize: MinimizeIcon,
  medical: MedicalKitIcon,
  more: MenuDotsIcon,
  microphone: MicrophoneIcon,
  minus: MinusIcon,
  notes: NotesIcon,
  "palette-2": Palette2Icon,
  paperclip: PaperclipIcon,
  pen: PenIcon,
  "pen-new-square": PenIcon,
  phone: PhoneIcon,
  pin: PinIcon,
  printer: PrinterIcon,
  question: QuestionCircleIcon,
  refresh: RefreshIcon,
  reply: ReplyIcon,
  rocket: RocketIcon,
  send: SendSquareIcon,
  settings: SettingsIcon,
  "settings-linear": SettingsLinearIcon,
  satellite: SatelliteIcon,
  share: ShareIcon,
  "shield-check": ShieldCheckIcon,
  "shield-user": ShieldUserIcon,
  "shield-warning": ShieldWarningIcon,
  smile: SmileCircleIcon,
  sort: SortIcon,
  "square-arrow-left": SquareArrowLeftIcon,
  "square-arrow-right-up": SquareArrowRightUpIcon,
  star: StarIcon,
  tag: TagIcon,
  trash: TrashBinTrashIcon,
  tuning: TuningIcon,
  upload: UploadIcon,
  "user-block": UserBlockIcon,
  "user-check": UserCheckIcon,
  user: UserIcon,
  "user-plus": UserPlusIcon,
  users: UsersGroupRoundedIcon,
  wallet: WalletIcon,
  widget: WidgetIcon,
  gps: GpsIcon,
};

const aliases: Record<string, string> = {
  "address-book": "users",
  "address-card": "user",
  "angle-down": "alt-arrow-down",
  "angle-left": "alt-arrow-left",
  "angle-right": "alt-arrow-right",
  "angle-up": "alt-arrow-up",
  "angles-down": "double-arrow-down",
  "angles-up": "double-arrow-up",
  "arrow-down": "alt-arrow-down",
  "arrow-down-a-z": "sort",
  "arrow-down-z-a": "sort",
  "arrow-up": "alt-arrow-up",
  "arrow-up-from-bracket": "upload",
  "arrow-up-right": "arrow-right-up",
  "arrows-rotate": "refresh",
  "arrows-up-down-left-right": "sort",
  ban: "forbidden",
  bars: "menu",
  board: "widget",
  bookmark: "star",
  briefcase: "case",
  building: "buildings",
  builders: "buildings",
  button: "add-circle",
  "caret-left": "alt-arrow-left",
  "cart-shopping": "cart",
  "chart-line": "graph",
  "chevron-down": "alt-arrow-down",
  "chevron-left": "alt-arrow-left",
  "chevron-right": "alt-arrow-right",
  "chevron-up": "alt-arrow-up",
  "chevrons-down": "double-arrow-down",
  "chevrons-up": "double-arrow-up",
  "circle-arrow-right": "alt-arrow-right",
  "circle-check": "check-circle",
  "circle-exclamation": "danger",
  "circle-info": "info",
  "circle-nodes": "share",
  circle: "more",
  "clock-rotate-left": "history",
  comment: "chat",
  comments: "chat",
  contact: "users",
  "code-compare": "sort",
  "credit-card": "wallet",
  cut: "settings",
  edit: "pen",
  "edit-2": "pen",
  "edit-3": "pen",
  editors: "pen",
  ecommerce: "cart",
  ellipsis: "more",
  "ellipsis-vertical": "more",
  email: "letter",
  envelope: "letter",
  error: "danger",
  "exclamation-triangle": "danger-triangle",
  "external-link": "square-arrow-right-up",
  "face-smile": "smile",
  facebook: "global",
  "facebook-f": "global",
  faq: "question",
  "file-circle-plus": "document-add",
  "file-invoice-dollar": "dollar",
  "file-lines": "document-text",
  "file-pdf": "file",
  "file-text": "document-text",
  "file-word": "file",
  flask: "settings",
  "full-screen": "maximize",
  gear: "settings",
  gem: "star",
  google: "global",
  "google-plus-g": "global",
  grid: "widget",
  image: "gallery",
  import: "download",
  instagram: "global",
  "kit-medical": "medical",
  "layer-group": "layers",
  "linkedin-in": "global",
  library: "folder",
  "location-arrow": "send",
  "location-dot": "map-point",
  "log-in": "login",
  "log-out": "logout",
  love: "heart",
  mail: "letter",
  "mail-forward": "forward",
  "mail-reply": "reply",
  "magnifying-glass": "magnifier",
  "maximize-2": "maximize",
  "message-square": "chat",
  messages: "chat",
  "messages-2": "chat",
  "messages-3": "chat",
  mic: "microphone",
  "more-alt": "more",
  "more-horizontal": "more",
  "more-vertical": "more",
  moon: "settings",
  "note-sticky": "notes",
  notification: "bell",
  "notification-header": "bell",
  others: "settings",
  pencil: "pen",
  "pencil-alt-5": "pen",
  "pen-to-square": "pen",
  "pie-chart": "chart",
  plus: "add",
  "plus-circle": "add-circle",
  project: "case",
  reports: "chart",
  rss: "global",
  "refresh-cw": "refresh",
  "search-header": "magnifier",
  search: "magnifier",
  "share-alt": "share",
  "share-nodes": "share",
  "shopping-basket": "cart",
  "shield-off": "shield-warning",
  sliders: "tuning",
  spam: "shield-warning",
  spinner: "refresh",
  "square-plus": "add-circle",
  "stock-search": "magnifier",
  task: "check-square",
  "thumb-tack": "pin",
  "thumbs-down": "close",
  "thumbs-o-up": "check",
  "thumbs-up": "check",
  timer: "clock",
  "to-do": "check-square",
  toolbox: "settings",
  "trash-2": "trash",
  "trash-can": "trash",
  "triangle-exclamation": "danger-triangle",
  truck: "delivery",
  unlink: "link",
  "upload-cloud": "cloud-upload",
  "user-group": "users",
  "user-x": "user-block",
  "ui-chat": "chat",
  "ui-copy": "copy",
  "ui-delete": "trash",
  "ui-dial-phone": "phone",
  "ui-edit": "pen",
  "ui-text-loading": "refresh",
  "ui-zoom-in": "magnifier-zoom-in",
  "ui-zoom-out": "magnifier-zoom-out",
  category: "widget",
  telegram: "send",
  twitter: "global",
  "twitter-alt": "global",
  weixin: "chat",
  whatsapp: "chat",
  x: "close",
  "x-twitter": "global",
  xmark: "close",
  youtube: "global",
};

function normalizedTokens(value?: unknown): string[] {
  if (!value) return [];

  return normalizeClass(value)
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/brandsfa-/gi, "fa-")
    .toLowerCase()
    .split(/\s+/)
    .map((token) =>
      token
        .replace(/^fa-(?:solid|regular|light|brands)$/i, "")
        .replace(/^fa-/, "")
        .replace(/^icofont-/, "")
        .replace(/^iconly-/, "")
        .replace(/^icon-/, ""),
    )
    .filter(
      (token) =>
        token &&
        ![
          "solid",
          "regular",
          "light",
          "brands",
          "feather",
          "icli",
          "fa",
          "fas",
          "far",
        ].includes(token),
    );
}

function normalizeName(value?: unknown): string {
  const tokens = normalizedTokens(value);
  for (const token of tokens.reverse()) {
    const candidate = token.replace(/-header$/, "");
    const resolved = aliases[candidate] || candidate;
    if (icons[resolved]) return resolved;
  }
  return "question";
}

const resolvedIcon = computed(
  () => icons[normalizeName(props.name || props.icon || props.type)] || QuestionCircleIcon,
);
const legacyClasses = computed(() =>
  normalizedTokens(props.name || props.icon || props.type).filter((token) => {
    const candidate = token.replace(/-header$/, "");
    return !icons[aliases[candidate] || candidate];
  }),
);
</script>

<style scoped>
.solar-icon {
  color: var(--app-primary, #18a6e4);
  display: inline-block;
  flex: 0 0 auto;
  line-height: 1;
  vertical-align: -0.125em;
}

:global(.btn) .solar-icon,
:global(a) .solar-icon,
:global([class*="bg-"]) .solar-icon {
  color: currentColor;
}
</style>
