import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import ButtonIcon from ".";
import { PlusIcon } from "coengageicons-react/solid";
import React from "react";

export default {
  title: "UI Components/ButtonIcon",
  component: ButtonIcon,
  decorators: [withDesign],
  parameters: {
    componentSubtitle:
      "ButtonIcon express what action will occur when the user clicks or touches it. Buttons are used to initialize an action, either in the background or foreground of an experience.onent",
    status: "released",
    design: {
      type: "figma",
      url: "https://www.figma.com/file/shwOWLheOBp1pRRoBzZpgH/Plivo?node-id=126%3A2388",
    },
  },
  argTypes: {
    loading: {
      control: "boolean",
    },
    size: {
      options: ["larger", "large", "regular", "small"],
      control: "radio",
    },
  },
} as ComponentMeta<typeof ButtonIcon>;

const Sizes: ComponentStory<typeof ButtonIcon> = (args) => (
  <div className="space-y-3">
    <div className="space-x-3">
      <ButtonIcon {...args} size="large" icon={PlusIcon} />
      <ButtonIcon {...args} icon={PlusIcon} />
      <ButtonIcon {...args} size="small" icon={PlusIcon} />
    </div>
    <div className="space-x-3">
      <ButtonIcon {...args} size="large" icon={PlusIcon} disabled />
      <ButtonIcon {...args} icon={PlusIcon} disabled />
      <ButtonIcon {...args} size="small" icon={PlusIcon} disabled />
    </div>
    <div className="space-x-3">
      <ButtonIcon {...args} size="large" icon={PlusIcon} variant="outline" />
      <ButtonIcon {...args} icon={PlusIcon} variant="outline" />
      <ButtonIcon {...args} size="small" icon={PlusIcon} variant="outline" />
    </div>
  </div>
);
export const sizes = Sizes.bind({});
