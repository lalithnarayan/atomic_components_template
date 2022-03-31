import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { withDesign } from "storybook-addon-designs";
import Typography from ".";

export default {
  title: "Typography",
  component: Typography,
  decorators: [withDesign],
  parameters: {
    componentSubtitle:
      "This component is the base component on which all texts used in the app are built on",
    status: "released",
    design: {
      type: "figma",
      url: "https://www.figma.com/file/shwOWLheOBp1pRRoBzZpgH/Plivo?node-id=2%3A5",
    },
  },
} as ComponentMeta<typeof Typography>;

export const BaseText: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

BaseText.args = {
  children: "Lorem ipsum",
};
