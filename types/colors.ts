type IntentOptions = 'primary' | 'secondary' | 'neutral' | 'success' | 'danger' | 'info';
type ModeOptions = 'default' | 'dark';
type ProminenceOptions = 'default' | 'spicy' | 'mild';
type UsageOptions = 'background' | 'border' | 'icon' | 'text';
export type InteractionOptions = 'hover' | 'active' | 'disabled';

export type ColorInteractionType = { interaction: InteractionOptions };
export type ColorProminenceType = { prominence: ProminenceOptions };
export type ColorUsageType = { usage: UsageOptions };
export type ColorModeType = { mode: ModeOptions };
export type ColorIntentType = { intent: IntentOptions };

export type CompoundVariantType = {
  intent: ColorIntentType;
  mode: ColorModeType;
  interaction: ColorInteractionType;
  prominence?: ColorProminenceType;
  class: string[];
};

export type CompoundVariantsType = {
  compoundVariants: Array<CompoundVariantType>;
};

export type VariantStyleProps = {
  variantStyles?: string;
  disableVariantStyles?: boolean;
};

export type InteractionProps = { active: boolean; disabled: boolean };
