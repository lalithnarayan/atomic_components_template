import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { withDesign } from "storybook-addon-designs";
import Typography, { TEXT_COLORS } from "..";

const { Smalltext } = Typography;

export default {
  title: "Typography/Small Text",
  component: Typography.Smalltext,
  decorators: [withDesign],
  parameters: {
    componentSubtitle:
      "Small text can be used whenever it is needed to show a label detached from a regular input, captions, form input errors",
    status: "released",
    design: {
      type: "figma",
      url: "https://www.figma.com/file/shwOWLheOBp1pRRoBzZpgH/Plivo?node-id=2%3A5",
    },
  },
  argTypes: {
    color: {
      name: "color",
      type: { name: "string", required: false },
      defaultValue: "span",
      description: "Specifies the color of the text",
      options: Object.values(TEXT_COLORS),
      control: {
        type: "select",
      },
      table: {
        type: {
          summary: Object.keys(TEXT_COLORS),
        },
      },
    },
  },
} as ComponentMeta<typeof Typography>;

const Primary: ComponentStory<typeof Typography> = (args) => (
  <Smalltext {...args} />
);

export const smalltext = Primary.bind({});

smalltext.args = {
  children: "small text for labels",
};

const largetextCode = `
import { Typography  } from "coengage-style-guide";

const { Smalltext } = Typography;
<Smalltext>Caption / Label </Smalltext>
`;

smalltext.parameters = {
  docs: {
    source: {
      code: largetextCode,
    },
  },
};
