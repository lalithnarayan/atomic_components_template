import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import { Button } from "..";
import Tooltip from ".";
import React from "react";

const placements = [
  "top",
  "top-start",
  "top-end",
  "right",
  "right-start",
  "right-end",
  "bottom",
  "bottom-start",
  "bottom-end",
  "left",
  "left-start",
  "left-end",
];

export default {
  title: "UI Components/Tooltips",
  component: Tooltip,
  decorators: [withDesign],
  parameters: {
    componentSubtitle:
      "Tooltips display additional information hover. The information should be contextual, useful, and nonessential.",
    status: "released",
    design: {
      type: "figma",
      url: "https://www.figma.com/file/shwOWLheOBp1pRRoBzZpgH/Plivo?node-id=190%3A3489",
    },
  },
  argTypes: {
    placements: {
      options: placements,
      control: "select",
    },
    visible: {
      control: "boolean",
    },
    theme: {
      control: "radio",
      options: ["light", undefined],
    },
  },
} as ComponentMeta<typeof Tooltip>;

export const template: ComponentStory<typeof Tooltip> = (args) => (
  <div className="space-x-4">
    <Tooltip content="Hovered on me" {...args}>
      <Button>Click me</Button>
    </Tooltip>
    <Tooltip content="Hovered on me" theme="light" placement="right">
      <Button variant="outline">Light theme Tooltip</Button>
    </Tooltip>
  </div>
);

template.storyName = "Basic";

export const placement: ComponentStory<typeof Tooltip> = (args) => (
  <div className="grid grid-cols-3 gap-4 px-20 py-10">
    <Tooltip content="top" placement="top" {...args}>
      <Button className="m-0" variant="outline">
        top
      </Button>
    </Tooltip>
    <Tooltip content="top-start" placement="top-start" {...args}>
      <Button className="m-0" variant="outline">
        top-start
      </Button>
    </Tooltip>
    <Tooltip content="top-end" placement="top-end" {...args}>
      <Button className="m-0" variant="outline">
        top-end
      </Button>
    </Tooltip>
    <Tooltip content="right" placement="right" {...args}>
      <Button className="m-0" variant="outline">
        right
      </Button>
    </Tooltip>
    <Tooltip content="right-start" placement="right-start" {...args}>
      <Button className="m-0" variant="outline">
        right-start
      </Button>
    </Tooltip>
    <Tooltip content="right-end" placement="right-end" {...args}>
      <Button className="m-0" variant="outline">
        right-end
      </Button>
    </Tooltip>
    <Tooltip content="bottom" placement="bottom" {...args}>
      <Button className="m-0" variant="outline">
        bottom
      </Button>
    </Tooltip>
    <Tooltip content="bottom-start" placement="bottom-start" {...args}>
      <Button className="m-0" variant="outline">
        bottom-start
      </Button>
    </Tooltip>
    <Tooltip content="bottom-end" placement="bottom-end" {...args}>
      <Button className="m-0" variant="outline">
        bottom-end
      </Button>
    </Tooltip>
    <Tooltip content="left" placement="left" {...args}>
      <Button className="m-0" variant="outline">
        left
      </Button>
    </Tooltip>
    <Tooltip content="left-start" placement="left-start" {...args}>
      <Button className="m-0" variant="outline">
        left-start
      </Button>
    </Tooltip>
    <Tooltip content="left-end" placement="left-end" {...args}>
      <Button className="m-0" variant="outline">
        left-end
      </Button>
    </Tooltip>
  </div>
);
