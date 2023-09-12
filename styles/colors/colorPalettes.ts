import { colors } from './colors';
import { ColorIntentType, ColorModeType, ColorProminenceType, ColorUsageType, InteractionOptions } from "@/types/colors";

type ColorPaletteOptions = {
  color: string;
  hex: string;
  interaction: 'default' | InteractionOptions;
} & ColorProminenceType &
  ColorIntentType &
  ColorUsageType &
  ColorModeType;

export const colorPalettes: ColorPaletteOptions[] = [
  {
    intent: 'danger',
    usage: 'background',
    prominence: 'default',
    mode: 'default',
    interaction: 'default',
    color: 'error050',
    hex: colors['error050']
  },
  {
    intent: 'danger',
    usage: 'background',
    prominence: 'default',
    mode: 'default',
    interaction: 'hover',
    color: 'error075',
    hex: colors['error075']
  },
  {
    intent: 'danger',
    usage: 'border',
    prominence: 'default',
    mode: 'default',
    interaction: 'default',
    color: 'error400',
    hex: colors['error400']
  },
  {
    intent: 'danger',
    usage: 'border',
    prominence: 'default',
    mode: 'default',
    interaction: 'hover',
    color: 'error500',
    hex: colors['error500']
  },
  {
    intent: 'danger',
    usage: 'icon',
    prominence: 'default',
    mode: 'default',
    interaction: 'default',
    color: 'error600',
    hex: colors['error600']
  },
  {
    intent: 'danger',
    usage: 'icon',
    prominence: 'default',
    mode: 'default',
    interaction: 'hover',
    color: 'error700',
    hex: colors['error700']
  },
  {
    intent: 'danger',
    usage: 'text',
    prominence: 'default',
    mode: 'default',
    interaction: 'default',
    color: 'error600',
    hex: colors['error600']
  },
  {
    intent: 'danger',
    usage: 'text',
    prominence: 'default',
    mode: 'default',
    interaction: 'hover',
    color: 'error700',
    hex: colors['error700']
  },
  {
    intent: 'info',
    usage: 'background',
    prominence: 'default',
    mode: 'default',
    interaction: 'default',
    color: 'info050',
    hex: colors['info050']
  },
  {
    intent: 'info',
    usage: 'background',
    prominence: 'default',
    mode: 'default',
    interaction: 'hover',
    color: 'info075',
    hex: colors['info075']
  },
  {
    intent: 'info',
    usage: 'border',
    prominence: 'default',
    mode: 'default',
    interaction: 'default',
    color: 'info400',
    hex: colors['info400']
  },
  {
    intent: 'info',
    usage: 'border',
    prominence: 'default',
    mode: 'default',
    interaction: 'hover',
    color: 'info600',
    hex: colors['info600']
  },
  {
    intent: 'info',
    usage: 'icon',
    prominence: 'default',
    mode: 'default',
    interaction: 'default',
    color: 'info700',
    hex: colors['info700']
  },
  {
    intent: 'info',
    usage: 'icon',
    prominence: 'default',
    mode: 'default',
    interaction: 'hover',
    color: 'info600',
    hex: colors['info600']
  },
  {
    intent: 'info',
    usage: 'text',
    prominence: 'default',
    mode: 'default',
    interaction: 'default',
    color: 'info700',
    hex: colors['info700']
  },
  {
    intent: 'info',
    usage: 'text',
    prominence: 'default',
    mode: 'default',
    interaction: 'hover',
    color: 'info600',
    hex: colors['info600']
  },
  {
    intent: 'neutral',
    usage: 'background',
    prominence: 'default',
    mode: 'default',
    interaction: 'default',
    color: 'gray005',
    hex: colors['gray005']
  },
  {
    intent: 'neutral',
    usage: 'background',
    prominence: 'default',
    mode: 'default',
    interaction: 'hover',
    color: 'gray025',
    hex: colors['gray025']
  },
  {
    intent: 'neutral',
    usage: 'background',
    prominence: 'spicy',
    mode: 'default',
    interaction: 'default',
    color: 'gray040',
    hex: colors['gray040']
  },
  {
    intent: 'neutral',
    usage: 'background',
    prominence: 'mild',
    mode: 'default',
    interaction: 'default',
    color: 'gray001',
    hex: colors['gray001']
  },
  {
    intent: 'neutral',
    usage: 'border',
    prominence: 'default',
    mode: 'default',
    interaction: 'default',
    color: 'gray025',
    hex: colors['gray025']
  },
  {
    intent: 'neutral',
    usage: 'border',
    prominence: 'spicy',
    mode: 'default',
    interaction: 'default',
    color: 'gray035',
    hex: colors['gray035']
  },
  {
    intent: 'neutral',
    usage: 'icon',
    prominence: 'default',
    mode: 'default',
    interaction: 'default',
    color: 'gray800',
    hex: colors['gray800']
  },
  {
    intent: 'neutral',
    usage: 'icon',
    prominence: 'spicy',
    mode: 'default',
    interaction: 'default',
    color: 'blue400',
    hex: colors['blue400']
  },
  {
    intent: 'neutral',
    usage: 'icon',
    prominence: 'mild',
    mode: 'default',
    interaction: 'default',
    color: 'blue200',
    hex: colors['blue200']
  },
  {
    intent: 'neutral',
    usage: 'text',
    prominence: 'default',
    mode: 'dark',
    interaction: 'default',
    color: 'gray050',
    hex: colors['gray050']
  },
  {
    intent: 'neutral',
    usage: 'text',
    prominence: 'default',
    mode: 'default',
    interaction: 'default',
    color: 'paragraph600',
    hex: colors['paragraph600']
  },
  {
    intent: 'neutral',
    usage: 'text',
    prominence: 'spicy',
    mode: 'dark',
    interaction: 'default',
    color: 'blue050',
    hex: colors['blue050']
  },
  {
    intent: 'neutral',
    usage: 'text',
    prominence: 'spicy',
    mode: 'default',
    interaction: 'default',
    color: 'paragraph700',
    hex: colors['paragraph700']
  },
  {
    intent: 'primary',
    usage: 'background',
    prominence: 'default',
    mode: 'dark',
    interaction: 'active',
    color: 'gray400',
    hex: colors['gray400']
  },
  {
    intent: 'primary',
    usage: 'background',
    prominence: 'default',
    mode: 'dark',
    interaction: 'default',
    color: 'gray800',
    hex: colors['gray800']
  },
  {
    intent: 'primary',
    usage: 'background',
    prominence: 'default',
    mode: 'dark',
    interaction: 'disabled',
    color: 'gray600',
    hex: colors['gray600']
  },
  {
    intent: 'primary',
    usage: 'background',
    prominence: 'default',
    mode: 'dark',
    interaction: 'hover',
    color: 'gray600',
    hex: colors['gray600']
  },
  {
    intent: 'primary',
    usage: 'background',
    prominence: 'default',
    mode: 'default',
    interaction: 'active',
    color: 'blue005',
    hex: colors['blue005']
  },
  {
    intent: 'primary',
    usage: 'background',
    prominence: 'default',
    mode: 'default',
    interaction: 'default',
    color: 'white',
    hex: colors['white']
  },
  {
    intent: 'primary',
    usage: 'background',
    prominence: 'default',
    mode: 'default',
    interaction: 'disabled',
    color: 'gray001',
    hex: colors['gray001']
  },
  {
    intent: 'primary',
    usage: 'background',
    prominence: 'default',
    mode: 'default',
    interaction: 'hover',
    color: 'blue010',
    hex: colors['blue010']
  },
  {
    intent: 'primary',
    usage: 'border',
    prominence: 'default',
    mode: 'dark',
    interaction: 'active',
    color: 'blue200',
    hex: colors['blue200']
  },
  {
    intent: 'primary',
    usage: 'border',
    prominence: 'default',
    mode: 'dark',
    interaction: 'default',
    color: 'gray200',
    hex: colors['gray200']
  },
  {
    intent: 'primary',
    usage: 'border',
    prominence: 'default',
    mode: 'dark',
    interaction: 'disabled',
    color: 'gray100',
    hex: colors['gray100']
  },
  {
    intent: 'primary',
    usage: 'border',
    prominence: 'default',
    mode: 'dark',
    interaction: 'hover',
    color: 'gray400',
    hex: colors['gray400']
  },
  {
    intent: 'primary',
    usage: 'border',
    prominence: 'default',
    mode: 'default',
    interaction: 'active',
    color: 'blue800',
    hex: colors['blue800']
  },
  {
    intent: 'primary',
    usage: 'border',
    prominence: 'default',
    mode: 'default',
    interaction: 'default',
    color: 'gray050',
    hex: colors['gray050']
  },
  {
    intent: 'primary',
    usage: 'border',
    prominence: 'default',
    mode: 'default',
    interaction: 'disabled',
    color: 'gray035',
    hex: colors['gray035']
  },
  {
    intent: 'primary',
    usage: 'border',
    prominence: 'default',
    mode: 'default',
    interaction: 'hover',
    color: 'gray100',
    hex: colors['gray100']
  },
  {
    intent: 'primary',
    usage: 'icon',
    prominence: 'default',
    mode: 'dark',
    interaction: 'active',
    color: 'blue050',
    hex: colors['blue050']
  },
  {
    intent: 'primary',
    usage: 'icon',
    prominence: 'default',
    mode: 'dark',
    interaction: 'default',
    color: 'blue200',
    hex: colors['blue200']
  },
  {
    intent: 'primary',
    usage: 'icon',
    prominence: 'default',
    mode: 'dark',
    interaction: 'disabled',
    color: 'gray100',
    hex: colors['gray100']
  },
  {
    intent: 'primary',
    usage: 'icon',
    prominence: 'default',
    mode: 'dark',
    interaction: 'hover',
    color: 'blue050',
    hex: colors['blue050']
  },
  {
    intent: 'primary',
    usage: 'icon',
    prominence: 'default',
    mode: 'default',
    interaction: 'active',
    color: 'blue800',
    hex: colors['blue800']
  },
  {
    intent: 'primary',
    usage: 'icon',
    prominence: 'default',
    mode: 'default',
    interaction: 'default',
    color: 'gray400',
    hex: colors['gray400']
  },
  {
    intent: 'primary',
    usage: 'icon',
    prominence: 'default',
    mode: 'default',
    interaction: 'disabled',
    color: 'paragraph600',
    hex: colors['paragraph600']
  },
  {
    intent: 'primary',
    usage: 'icon',
    prominence: 'default',
    mode: 'default',
    interaction: 'hover',
    color: 'gray600',
    hex: colors['gray600']
  },
  {
    intent: 'primary',
    usage: 'text',
    prominence: 'default',
    mode: 'dark',
    interaction: 'active',
    color: 'blue100',
    hex: colors['blue100']
  },
  {
    intent: 'primary',
    usage: 'text',
    prominence: 'default',
    mode: 'dark',
    interaction: 'default',
    color: 'white',
    hex: colors['white']
  },
  {
    intent: 'primary',
    usage: 'text',
    prominence: 'default',
    mode: 'dark',
    interaction: 'disabled',
    color: 'gray200',
    hex: colors['gray200']
  },
  {
    intent: 'primary',
    usage: 'text',
    prominence: 'default',
    mode: 'dark',
    interaction: 'hover',
    color: 'blue100',
    hex: colors['blue100']
  },
  {
    intent: 'primary',
    usage: 'text',
    prominence: 'default',
    mode: 'default',
    interaction: 'active',
    color: 'blue800',
    hex: colors['blue800']
  },
  {
    intent: 'primary',
    usage: 'text',
    prominence: 'default',
    mode: 'default',
    interaction: 'default',
    color: 'gray800',
    hex: colors['gray800']
  },
  {
    intent: 'primary',
    usage: 'text',
    prominence: 'default',
    mode: 'default',
    interaction: 'disabled',
    color: 'blue600',
    hex: colors['blue600']
  },
  {
    intent: 'primary',
    usage: 'text',
    prominence: 'default',
    mode: 'default',
    interaction: 'hover',
    color: 'blue800',
    hex: colors['blue800']
  },
  {
    intent: 'secondary',
    usage: 'background',
    prominence: 'default',
    mode: 'dark',
    interaction: 'default',
    color: 'gray600',
    hex: colors['gray600']
  },
  {
    intent: 'secondary',
    usage: 'background',
    prominence: 'default',
    mode: 'default',
    interaction: 'active',
    color: 'blue025',
    hex: colors['blue025']
  },
  {
    intent: 'secondary',
    usage: 'background',
    prominence: 'default',
    mode: 'default',
    interaction: 'default',
    color: 'gray025',
    hex: colors['gray025']
  },
  {
    intent: 'secondary',
    usage: 'background',
    prominence: 'default',
    mode: 'default',
    interaction: 'disabled',
    color: 'gray040',
    hex: colors['gray040']
  },
  {
    intent: 'secondary',
    usage: 'background',
    prominence: 'default',
    mode: 'default',
    interaction: 'hover',
    color: 'gray035',
    hex: colors['gray035']
  },
  {
    intent: 'secondary',
    usage: 'border',
    prominence: 'default',
    mode: 'default',
    interaction: 'active',
    color: 'gray050',
    hex: colors['gray050']
  },
  {
    intent: 'secondary',
    usage: 'border',
    prominence: 'default',
    mode: 'default',
    interaction: 'default',
    color: 'gray040',
    hex: colors['gray040']
  },
  {
    intent: 'secondary',
    usage: 'border',
    prominence: 'default',
    mode: 'default',
    interaction: 'disabled',
    color: 'gray025',
    hex: colors['gray025']
  },
  {
    intent: 'secondary',
    usage: 'border',
    prominence: 'default',
    mode: 'default',
    interaction: 'hover',
    color: 'gray100',
    hex: colors['gray100']
  },
  {
    intent: 'secondary',
    usage: 'icon',
    prominence: 'default',
    mode: 'dark',
    interaction: 'active',
    color: 'blue050',
    hex: colors['blue050']
  },
  {
    intent: 'secondary',
    usage: 'icon',
    prominence: 'default',
    mode: 'dark',
    interaction: 'default',
    color: 'white',
    hex: colors['white']
  },
  {
    intent: 'secondary',
    usage: 'icon',
    prominence: 'default',
    mode: 'dark',
    interaction: 'disabled',
    color: 'gray100',
    hex: colors['gray100']
  },
  {
    intent: 'secondary',
    usage: 'icon',
    prominence: 'default',
    mode: 'dark',
    interaction: 'hover',
    color: 'gray050',
    hex: colors['gray050']
  },
  {
    intent: 'secondary',
    usage: 'icon',
    prominence: 'default',
    mode: 'default',
    interaction: 'active',
    color: 'gray100',
    hex: colors['gray100']
  },
  {
    intent: 'secondary',
    usage: 'icon',
    prominence: 'default',
    mode: 'default',
    interaction: 'default',
    color: 'paragraph600',
    hex: colors['paragraph600']
  },
  {
    intent: 'secondary',
    usage: 'icon',
    prominence: 'default',
    mode: 'default',
    interaction: 'disabled',
    color: 'paragraph600',
    hex: colors['paragraph600']
  },
  {
    intent: 'secondary',
    usage: 'icon',
    prominence: 'default',
    mode: 'default',
    interaction: 'hover',
    color: 'gray100',
    hex: colors['gray100']
  },
  {
    intent: 'secondary',
    usage: 'text',
    prominence: 'default',
    mode: 'dark',
    interaction: 'active',
    color: 'white',
    hex: colors['white']
  },
  {
    intent: 'secondary',
    usage: 'text',
    prominence: 'default',
    mode: 'dark',
    interaction: 'default',
    color: 'gray100',
    hex: colors['gray100']
  },
  {
    intent: 'secondary',
    usage: 'text',
    prominence: 'default',
    mode: 'dark',
    interaction: 'disabled',
    color: 'gray200',
    hex: colors['gray200']
  },
  {
    intent: 'secondary',
    usage: 'text',
    prominence: 'default',
    mode: 'dark',
    interaction: 'hover',
    color: 'white',
    hex: colors['white']
  },
  {
    intent: 'secondary',
    usage: 'text',
    prominence: 'default',
    mode: 'default',
    interaction: 'active',
    color: 'blue900',
    hex: colors['blue900']
  },
  {
    intent: 'secondary',
    usage: 'text',
    prominence: 'default',
    mode: 'default',
    interaction: 'default',
    color: 'paragraph800',
    hex: colors['paragraph800']
  },
  {
    intent: 'secondary',
    usage: 'text',
    prominence: 'default',
    mode: 'default',
    interaction: 'disabled',
    color: 'paragraph700',
    hex: colors['paragraph700']
  },
  {
    intent: 'secondary',
    usage: 'text',
    prominence: 'default',
    mode: 'default',
    interaction: 'hover',
    color: 'blue900',
    hex: colors['blue900']
  },
  {
    intent: 'success',
    usage: 'background',
    prominence: 'default',
    mode: 'default',
    interaction: 'default',
    color: 'success050',
    hex: colors['success050']
  },
  {
    intent: 'success',
    usage: 'background',
    prominence: 'default',
    mode: 'default',
    interaction: 'hover',
    color: 'success075',
    hex: colors['success075']
  },
  {
    intent: 'success',
    usage: 'background',
    prominence: 'spicy',
    mode: 'default',
    interaction: 'default',
    color: 'success500',
    hex: colors['success500']
  },
  {
    intent: 'success',
    usage: 'background',
    prominence: 'spicy',
    mode: 'default',
    interaction: 'hover',
    color: 'success550',
    hex: colors['success550']
  },
  {
    intent: 'success',
    usage: 'border',
    prominence: 'default',
    mode: 'default',
    interaction: 'default',
    color: 'success500',
    hex: colors['success500']
  },
  {
    intent: 'success',
    usage: 'border',
    prominence: 'default',
    mode: 'default',
    interaction: 'hover',
    color: 'success600',
    hex: colors['success600']
  },
  {
    intent: 'success',
    usage: 'icon',
    prominence: 'default',
    mode: 'default',
    interaction: 'default',
    color: 'success600',
    hex: colors['success600']
  },
  {
    intent: 'success',
    usage: 'icon',
    prominence: 'default',
    mode: 'default',
    interaction: 'hover',
    color: 'success700',
    hex: colors['success700']
  },
  {
    intent: 'success',
    usage: 'text',
    prominence: 'default',
    mode: 'default',
    interaction: 'default',
    color: 'success600',
    hex: colors['success600']
  },
  {
    intent: 'success',
    usage: 'text',
    prominence: 'default',
    mode: 'default',
    interaction: 'hover',
    color: 'success700',
    hex: colors['success700']
  }
];
