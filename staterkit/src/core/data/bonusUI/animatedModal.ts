import type { Select } from '@/types/common'

export const modalInValues: Select[] = [
  {
    label: 'Attention Seekers',
    value: 'attention_seekers',
    data: [
      { value: 'bounce', label: 'bounce' },
      { value: 'flash', label: 'flash' },
      { value: 'pulse', label: 'pulse' },
      { value: 'rubberBand', label: 'rubberBand' },
      { value: 'shake', label: 'shake' },
      { value: 'swing', label: 'swing' },
      { value: 'tada', label: 'tada' },
      { value: 'wobble', label: 'wobble' },
      { value: 'jello', label: 'jello' },
    ],
  },
  {
    label: 'Bouncing Entrances',
    value: 'bouncing_entrances',
    data: [
      { value: 'bounceIn', label: 'bounceIn' },
      { value: 'bounceInDown', label: 'bounceInDown' },
      { value: 'bounceInLeft', label: 'bounceInLeft' },
      { value: 'bounceInRight', label: 'bounceInRight' },
      { value: 'bounceInUp', label: 'bounceInUp' },
    ],
  },
  {
    label: 'Fading Entrances',
    value: 'fading_entrances',
    data: [
      { value: 'fadeIn', label: 'fadeIn' },
      { value: 'fadeInDown', label: 'fadeInDown' },
      { value: 'fadeInDownBig', label: 'fadeInDownBig' },
      { value: 'fadeInLeft', label: 'fadeInLeft' },
      { value: 'fadeInLeftBig', label: 'fadeInLeftBig' },
      { value: 'fadeInRight', label: 'fadeInRight' },
      { value: 'fadeInRightBig', label: 'fadeInRightBig' },
      { value: 'fadeInUp', label: 'fadeInUp' },
      { value: 'fadeInUpBig', label: 'fadeInUpBig' },
    ],
  },
  {
    label: 'Flippers',
    value: 'flippers',
    data: [
      { value: 'flipInX', label: 'flipInX' },
      { value: 'flipInY', label: 'flipInY' },
    ],
  },
  {
    label: 'Lightspeed',
    value: 'lightspeed',
    data: [{ value: 'lightSpeedIn', label: 'lightSpeedIn' }],
  },
  {
    label: 'Rotating Entrances',
    value: 'rotating_entrances',
    data: [
      { value: 'rotateIn', label: 'rotateIn' },
      { value: 'rotateInDownLeft', label: 'rotateInDownLeft' },
      { value: 'rotateInDownRight', label: 'rotateInDownRight' },
      { value: 'rotateInUpLeft', label: 'rotateInUpLeft' },
      { value: 'rotateInUpRight', label: 'rotateInUpRight' },
    ],
  },
  {
    label: 'Sliding Entrances',
    value: 'sliding_entrances',
    data: [
      { value: 'slideInUp', label: 'slideInUp' },
      { value: 'slideInDown', label: 'slideInDown' },
      { value: 'slideInLeft', label: 'slideInLeft' },
      { value: 'slideInRight', label: 'slideInRight' },
    ],
  },
  {
    label: 'Zoom Entrances',
    value: 'zoom_entrances',
    data: [
      { value: 'zoomIn', label: 'zoomIn' },
      { value: 'zoomInDown', label: 'zoomInDown' },
      { value: 'zoomInLeft', label: 'zoomInLeft' },
      { value: 'zoomInRight', label: 'zoomInRight' },
      { value: 'zoomInUp', label: 'zoomInUp' },
    ],
  },
  {
    label: 'Specials',
    value: 'specials',
    data: [{ value: 'rollIn', label: 'rollIn' }],
  },
]

export const modalOutValues: Select[] = [
  {
    label: 'Attention Seekers',
    value: 'attention_seekers',
    data: [
      { value: 'bounce', label: 'bounce' },
      { value: 'flash', label: 'flash' },
      { value: 'pulse', label: 'pulse' },
      { value: 'rubberBand', label: 'rubberBand' },
      { value: 'shake', label: 'shake' },
      { value: 'swing', label: 'swing' },
      { value: 'tada', label: 'tada' },
      { value: 'wobble', label: 'wobble' },
      { value: 'jello', label: 'jello' },
    ],
  },
  {
    label: 'Bouncing Exits',
    value: 'bouncing_exits',
    data: [
      { value: 'bounceOut', label: 'bounceOut' },
      { value: 'bounceOutDown', label: 'bounceOutDown' },
      { value: 'bounceOutLeft', label: 'bounceOutLeft' },
      { value: 'bounceOutRight', label: 'bounceOutRight' },
      { value: 'bounceOutUp', label: 'bounceOutUp' },
    ],
  },
  {
    label: 'Fading Exits',
    value: 'fading_exits',
    data: [
      { value: 'fadeOut', label: 'fadeOut' },
      { value: 'fadeOutDown', label: 'fadeOutDown' },
      { value: 'fadeOutDownBig', label: 'fadeOutDownBig' },
      { value: 'fadeOutLeft', label: 'fadeOutLeft' },
      { value: 'fadeOutLeftBig', label: 'fadeOutLeftBig' },
      { value: 'fadeOutRight', label: 'fadeOutRight' },
      { value: 'fadeOutRightBig', label: 'fadeOutRightBig' },
      { value: 'fadeOutUp', label: 'fadeOutUp' },
      { value: 'fadeOutUpBig', label: 'fadeOutUpBig' },
    ],
  },
  {
    label: 'Flippers',
    value: 'flippers',
    data: [
      { value: 'flipOutX', label: 'flipOutX' },
      { value: 'flipOutY', label: 'flipOutY' },
    ],
  },
  {
    label: 'Lightspeed',
    value: 'lightspeed',
    data: [{ value: 'lightSpeedOut', label: 'lightSpeedOut' }],
  },
  {
    label: 'Rotating Exits',
    value: 'rotating_exits',
    data: [
      { value: 'rotateOut', label: 'rotateOut' },
      { value: 'rotateOutDownLeft', label: 'rotateOutDownLeft' },
      { value: 'rotateOutDownRight', label: 'rotateOutDownRight' },
      { value: 'rotateOutUpLeft', label: 'rotateOutUpLeft' },
      { value: 'rotateOutUpRight', label: 'rotateOutUpRight' },
    ],
  },
  {
    label: 'Sliding Exits',
    value: 'sliding_exits',
    data: [
      { value: 'slideOutUp', label: 'slideOutUp' },
      { value: 'slideOutDown', label: 'slideOutDown' },
      { value: 'slideOutLeft', label: 'slideOutLeft' },
      { value: 'slideOutRight', label: 'slideOutRight' },
    ],
  },
  {
    label: 'Zoom Exits',
    value: 'zoom_exits',
    data: [
      { value: 'zoomOut', label: 'zoomOut' },
      { value: 'zoomOutDown', label: 'zoomOutDown' },
      { value: 'zoomOutLeft', label: 'zoomOutLeft' },
      { value: 'zoomOutRight', label: 'zoomOutRight' },
      { value: 'zoomOutUp', label: 'zoomOutUp' },
    ],
  },
  {
    label: 'Specials',
    value: 'specials',
    data: [{ value: 'rollOut', label: 'rollOut' }],
  },
]
