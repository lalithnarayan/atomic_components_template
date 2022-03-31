import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Story } from "@storybook/react/types-6-0";
import { ClockIcon, XIcon } from "coengageicons-react/solid";
import { withDesign } from "storybook-addon-designs";

import Text from "../Text";
import Badge, { BadgeProps } from ".";
import React from "react";

const variants = ["success", "danger", "warning", "info", "neutral"];

export default {
  title: "UI Components/Badge",
  component: Badge,
  decorators: [withDesign],
  parameters: {
    componentSubtitle:
      "badge is used to label, categorize, or organize items using keywords that describe them.",
    status: "released",
    design: {
      type: "figma",
      url: "https://www.figma.com/file/shwOWLheOBp1pRRoBzZpgH/Plivo?node-id=190%3A3489",
    },
  },
  argTypes: {
    type: {
      options: variants,
      control: "radio",
    },
    rounded: {
      control: "boolean",
    },
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: "badge text",
  type: "neutral",
};

const Variations_Template: Story<BadgeProps> = (args) => (
  <div className="space-x-4">
    <Badge {...args} type="success">
      <Text>Badge</Text>
    </Badge>
    <Badge {...args} type="danger">
      <Text>Badge</Text>
    </Badge>
    <Badge {...args} type="warning">
      <Text>Badge</Text>
    </Badge>
    <Badge {...args} type="info">
      <Text>Badge</Text>
    </Badge>
    <Badge {...args} type="neutral">
      <Text>Badge</Text>
    </Badge>
  </div>
);

export const Variations = Variations_Template.bind({});

const Example_Template: Story<BadgeProps> = (args) => (
  <div className="space-y-6">
    <div>
      <Badge {...args}>
        <div className="flex items-center">
          <Text>Badge</Text>
        </div>
      </Badge>
    </div>
    <div>
      <Badge {...args}>
        <div className="flex items-center">
          <ClockIcon className="h-3 w-3 mr-1.5" />
          Badge
        </div>
      </Badge>
    </div>
    <div>
      <Badge {...args}>
        <div className="flex items-center">
          <ClockIcon className="h-3 w-3 mr-1.5" />
          <Text>Badge</Text>
        </div>
      </Badge>
    </div>
    <div>
      <Badge {...args}>
        <div className="flex items-center">
          Badge
          <XIcon className="h-3 w-3 ml-1.5" />
        </div>
      </Badge>
    </div>
    <div>
      <Badge {...args}>
        <div className="flex items-center">
          <Text>Badge</Text>
          <XIcon className="h-3 w-3 ml-1.5" />
        </div>
      </Badge>
    </div>
    <div>
      <Badge {...args} rounded>
        1
      </Badge>
    </div>
  </div>
);

export const examples = Example_Template.bind({});

Example_Template.args = {
  type: "info",
};
