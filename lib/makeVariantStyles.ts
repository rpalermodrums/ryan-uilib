import { cva } from 'class-variance-authority';
import {CompoundVariantsType, InteractionProps} from "@/types/colors";

export const defaultVariantStyles = {
  variants: {
    intent: {
      primary: [''],
      secondary: [''],
      neutral: [''],
      success: [''],
      danger: [''],
      info: ['']
    },
    mode: {
      default: [''],
      dark: ['']
    },
    interaction: {
      hover: [''],
      active: [''],
      disabled: ['']
    },
    prominence: {
      default: [''],
      spicy: [''],
      mild: ['']
    }
  }
};

export const getInteraction = ({ active, disabled }: InteractionProps) =>
  active ? 'active' : disabled ? 'disabled' : 'hover';

// warning: additional parameters could break existing styles
export const defaultVariants = {
  intent: 'primary',
  mode: 'default',
  interaction: 'hover'
};

export const makeVariantStyles = (
  compoundVariantStyles: CompoundVariantsType,
  baseVariantStyles = [''],
  defaultVariantStylesParam = defaultVariantStyles,
  defaultVariantsParam = defaultVariants
) =>
  cva(baseVariantStyles, {
    ...defaultVariantStylesParam,
    ...compoundVariantStyles,
    ...defaultVariantsParam
  });
