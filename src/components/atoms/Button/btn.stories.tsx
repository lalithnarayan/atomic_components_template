import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { PlusIcon, CubeIcon } from "coengageicons-react/solid";
import { Button } from "..";
import React from "react";

export default {
  title: "UI Components/Button",
  component: Button,
  decorators: [withDesign],
  parameters: {
    componentSubtitle:
      "Buttons express what action will occur when the user clicks or touches it. Buttons are used to initialize an action, either in the background or foreground of an experience.",
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
} as ComponentMeta<typeof Button>;

const Primary: ComponentStory<typeof Button> = (args) => (
  <div className="space-y-3">
    <div className="space-x-3">
      <Button {...args} />
      <Button {...args} disabled />
      <Button {...args} loading />
    </div>
    <div className="space-x-3">
      <Button {...args} variant="danger" />
      <Button {...args} disabled variant="danger" />
      <Button {...args} loading variant="danger" />
    </div>
    <div className="space-x-3">
      <Button {...args} variant="link" />
      <Button {...args} disabled variant="link" />
    </div>
    <div className="space-x-3">
      <Button {...args} variant="outline" />
      <Button {...args} disabled variant="outline" />
    </div>
  </div>
);

export const button = Primary.bind({});

button.args = {
  children: "Button text",
  type: "primary",
};

const Sizes: ComponentStory<typeof Button> = (args) => (
  <div className="space-y-3">
    <div className="space-x-3">
      <Button {...args} size="large" />
      <Button {...args} />
      <Button {...args} size="small" />
    </div>
  </div>
);
export const sizes = Sizes.bind({});

sizes.args = {
  children: "Button text",
};

const ButtonWithIcon: ComponentStory<typeof Button> = (args) => (
  <div className="space-y-3">
    <div className="space-x-3">
      <Button {...args} size="larger" icon={PlusIcon} />
      <Button {...args} size="large" icon={PlusIcon} />
      <Button {...args} icon={PlusIcon} />
      <Button {...args} size="small" icon={PlusIcon} />
    </div>
    <div className="space-x-3">
      <Button {...args} size="larger" iconRight={CubeIcon} disabled />
      <Button {...args} size="large" iconRight={CubeIcon} disabled />
      <Button {...args} iconRight={CubeIcon} disabled />
      <Button {...args} size="small" iconRight={CubeIcon} disabled />
    </div>
    <div className="space-x-3">
      <Button {...args} size="larger" iconRight={CubeIcon} />
      <Button {...args} size="large" iconRight={CubeIcon} />
      <Button {...args} iconRight={CubeIcon} />
      <Button {...args} size="small" iconRight={CubeIcon} />
    </div>
    <div className="space-x-3">
      <Button {...args} size="larger" iconRight={CubeIcon} variant="outline" />
      <Button {...args} size="large" iconRight={CubeIcon} variant="outline" />
      <Button {...args} iconRight={CubeIcon} variant="outline" />
      <Button {...args} size="small" iconRight={CubeIcon} variant="outline" />
    </div>
    <div className="space-x-3">
      <Button {...args} size="larger" iconRight={CubeIcon} variant="link" />
      <Button {...args} size="large" iconRight={CubeIcon} variant="link" />
      <Button {...args} iconRight={CubeIcon} variant="link" />
      <Button {...args} size="small" iconRight={CubeIcon} variant="link" />
    </div>
  </div>
);
export const buttonWithIcon = ButtonWithIcon.bind({});

buttonWithIcon.args = {
  children: "Button text",
};
