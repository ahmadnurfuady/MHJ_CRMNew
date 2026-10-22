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
import { AddIcon } from "@solar-icons/vue/bold-duotone/add";
import { AddCircleIcon } from "@solar-icons/vue/bold-duotone/add-circle";
import { AltArrowDownIcon } from "@solar-icons/vue/bold-duotone/alt-arrow-down";
import { AltArrowLeftIcon } from "@solar-icons/vue/bold-duotone/alt-arrow-left";
import { AltArrowRightIcon } from "@solar-icons/vue/bold-duotone/alt-arrow-right";
import { AltArrowUpIcon } from "@solar-icons/vue/bold-duotone/alt-arrow-up";
import { ArrowLeftIcon } from "@solar-icons/vue/bold-duotone/arrow-left";
import { ArrowLeftIcon as ArrowLeftLinearIcon } from "@solar-icons/vue/linear/arrow-left";
import { ArrowRightIcon } from "@solar-icons/vue/bold-duotone/arrow-right";
import { ArrowRightUpIcon } from "@solar-icons/vue/bold-duotone/arrow-right-up";
import { BellIcon } from "@solar-icons/vue/bold-duotone/bell";
import { BoltIcon } from "@solar-icons/vue/bold-duotone/bolt";
import { BoxIcon } from "@solar-icons/vue/bold-duotone/box";
import { BuildingsIcon } from "@solar-icons/vue/bold-duotone/buildings";
import { CalendarIcon } from "@solar-icons/vue/bold-duotone/calendar";
import { CameraIcon } from "@solar-icons/vue/bold-duotone/camera";
import { CartLargeIcon } from "@solar-icons/vue/bold-duotone/cart-large";
import { CaseRoundIcon } from "@solar-icons/vue/bold-duotone/case-round";
import { ChartSquareIcon } from "@solar-icons/vue/bold-duotone/chart-square";
import { ChatRoundDotsIcon } from "@solar-icons/vue/bold-duotone/chat-round-dots";
import { CheckCircleIcon } from "@solar-icons/vue/bold-duotone/check-circle";
import { CheckReadIcon } from "@solar-icons/vue/bold-duotone/check-read";
import { CheckSquareIcon } from "@solar-icons/vue/bold-duotone/check-square";
import { ClipboardIcon } from "@solar-icons/vue/bold-duotone/clipboard";
import { ClockCircleIcon } from "@solar-icons/vue/bold-duotone/clock-circle";
import { CloseCircleIcon } from "@solar-icons/vue/bold-duotone/close-circle";
import { CloseIcon } from "@solar-icons/vue/bold-duotone/close";
import { CloudUploadIcon } from "@solar-icons/vue/bold-duotone/cloud-upload";
import { CopyIcon } from "@solar-icons/vue/bold-duotone/copy";
import { DangerCircleIcon } from "@solar-icons/vue/bold-duotone/danger-circle";
import { DangerTriangleIcon } from "@solar-icons/vue/bold-duotone/danger-triangle";
import { DeliveryIcon } from "@solar-icons/vue/bold-duotone/delivery";
import { DisketteIcon } from "@solar-icons/vue/bold-duotone/diskette";
import { DocumentAddIcon } from "@solar-icons/vue/bold-duotone/document-add";
import { DocumentTextIcon } from "@solar-icons/vue/bold-duotone/document-text";
import { DollarIcon } from "@solar-icons/vue/bold-duotone/dollar";
import { DoubleAltArrowDownIcon } from "@solar-icons/vue/bold-duotone/double-alt-arrow-down";
import { DoubleAltArrowUpIcon } from "@solar-icons/vue/bold-duotone/double-alt-arrow-up";
import { DownloadIcon } from "@solar-icons/vue/bold-duotone/download";
import { EyeIcon } from "@solar-icons/vue/bold-duotone/eye";
import { FileTextIcon } from "@solar-icons/vue/bold-duotone/file-text";
import { FilterIcon } from "@solar-icons/vue/bold-duotone/filter";
import { FolderIcon } from "@solar-icons/vue/bold-duotone/folder";
import { FolderOpenIcon } from "@solar-icons/vue/bold-duotone/folder-open";
import { ForbiddenCircleIcon } from "@solar-icons/vue/bold-duotone/forbidden-circle";
import { ForwardIcon } from "@solar-icons/vue/bold-duotone/forward";
import { GalleryIcon } from "@solar-icons/vue/bold-duotone/gallery";
import { GiftIcon } from "@solar-icons/vue/bold-duotone/gift";
import { GlobalIcon } from "@solar-icons/vue/bold-duotone/global";
import { GraphUpIcon } from "@solar-icons/vue/bold-duotone/graph-up";
import { HamburgerMenuIcon } from "@solar-icons/vue/bold-duotone/hamburger-menu";
import { HashtagIcon } from "@solar-icons/vue/bold-duotone/hashtag";
import { HeartIcon } from "@solar-icons/vue/bold-duotone/heart";
import { HistoryIcon } from "@solar-icons/vue/bold-duotone/history";
import { HomeIcon } from "@solar-icons/vue/bold-duotone/home";
import { HospitalIcon } from "@solar-icons/vue/bold-duotone/hospital";
import { InfoCircleIcon } from "@solar-icons/vue/bold-duotone/info-circle";
import { LayersIcon } from "@solar-icons/vue/bold-duotone/layers";
import { MapIcon } from "@solar-icons/vue/bold-duotone/map";
import { LetterIcon } from "@solar-icons/vue/bold-duotone/letter";
import { LinkIcon } from "@solar-icons/vue/bold-duotone/link";
import { ListIcon } from "@solar-icons/vue/bold-duotone/list";
import { LockIcon } from "@solar-icons/vue/bold-duotone/lock";
import { LoginIcon } from "@solar-icons/vue/bold-duotone/login";
import { LogoutIcon } from "@solar-icons/vue/bold-duotone/logout";
import { MagnifierIcon } from "@solar-icons/vue/linear/magnifier";
import { MagnifierZoomInIcon } from "@solar-icons/vue/bold-duotone/magnifier-zoom-in";
import { MagnifierZoomOutIcon } from "@solar-icons/vue/bold-duotone/magnifier-zoom-out";
import { MapPointIcon } from "@solar-icons/vue/bold-duotone/map-point";
import { MaximizeIcon } from "@solar-icons/vue/bold-duotone/maximize";
import { MinimizeIcon } from "@solar-icons/vue/bold-duotone/minimize";
import { MedicalKitIcon } from "@solar-icons/vue/bold-duotone/medical-kit";
import { MenuDotsIcon } from "@solar-icons/vue/bold-duotone/menu-dots";
import { MicrophoneIcon } from "@solar-icons/vue/bold-duotone/microphone";
import { MinusIcon } from "@solar-icons/vue/bold-duotone/minus";
import { NotesIcon } from "@solar-icons/vue/bold-duotone/notes";
import { PaperclipIcon } from "@solar-icons/vue/bold-duotone/paperclip";
import { Pen2Icon } from "@solar-icons/vue/bold-duotone/pen-2";
import { PhoneIcon } from "@solar-icons/vue/bold-duotone/phone";
import { PinIcon } from "@solar-icons/vue/bold-duotone/pin";
import { PrinterIcon } from "@solar-icons/vue/bold-duotone/printer";
import { QuestionCircleIcon } from "@solar-icons/vue/bold-duotone/question-circle";
import { RefreshIcon } from "@solar-icons/vue/bold-duotone/refresh";
import { ReplyIcon } from "@solar-icons/vue/bold-duotone/reply";
import { RocketIcon } from "@solar-icons/vue/bold-duotone/rocket";
import { SendSquareIcon } from "@solar-icons/vue/bold-duotone/send-square";
import { SettingsIcon } from "@solar-icons/vue/bold-duotone/settings";
import { SatelliteIcon } from "@solar-icons/vue/bold-duotone/satellite";
import { ShareIcon } from "@solar-icons/vue/bold-duotone/share";
import { ShieldCheckIcon } from "@solar-icons/vue/bold-duotone/shield-check";
import { ShieldWarningIcon } from "@solar-icons/vue/bold-duotone/shield-warning";
import { SmileCircleIcon } from "@solar-icons/vue/bold-duotone/smile-circle";
import { SortIcon } from "@solar-icons/vue/bold-duotone/sort";
import { SquareArrowLeftIcon } from "@solar-icons/vue/bold-duotone/square-arrow-left";
import { SquareArrowRightUpIcon } from "@solar-icons/vue/bold-duotone/square-arrow-right-up";
import { StarIcon } from "@solar-icons/vue/bold-duotone/star";
import { TagIcon } from "@solar-icons/vue/bold-duotone/tag";
import { TrashBinTrashIcon } from "@solar-icons/vue/bold-duotone/trash-bin-trash";
import { TuningIcon } from "@solar-icons/vue/bold-duotone/tuning";
import { UploadIcon } from "@solar-icons/vue/bold-duotone/upload";
import { UserBlockIcon } from "@solar-icons/vue/bold-duotone/user-block";
import { UserCheckIcon } from "@solar-icons/vue/bold-duotone/user-check";
import { UserIcon } from "@solar-icons/vue/bold-duotone/user";
import { UserPlusIcon } from "@solar-icons/vue/bold-duotone/user-plus";
import { UsersGroupRoundedIcon } from "@solar-icons/vue/bold-duotone/users-group-rounded";
import { WalletIcon } from "@solar-icons/vue/bold-duotone/wallet";
import { WidgetIcon } from "@solar-icons/vue/bold-duotone/widget";
import { GpsIcon } from "@solar-icons/vue/line-duotone/gps";

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
    secondaryColor: "#18A6E4",
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
  camera: CameraIcon,
  cart: CartLargeIcon,
  case: CaseRoundIcon,
  chart: ChartSquareIcon,
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
  filter: FilterIcon,
  folder: FolderIcon,
  "folder-open": FolderOpenIcon,
  forbidden: ForbiddenCircleIcon,
  forward: ForwardIcon,
  gallery: GalleryIcon,
  gift: GiftIcon,
  global: GlobalIcon,
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
  paperclip: PaperclipIcon,
  pen: Pen2Icon,
  phone: PhoneIcon,
  pin: PinIcon,
  printer: PrinterIcon,
  question: QuestionCircleIcon,
  refresh: RefreshIcon,
  reply: ReplyIcon,
  rocket: RocketIcon,
  send: SendSquareIcon,
  settings: SettingsIcon,
  satellite: SatelliteIcon,
  share: ShareIcon,
  "shield-check": ShieldCheckIcon,
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
  color: #032a4e;
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
