import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { withDesign } from "storybook-addon-designs";
import Typography from "..";

const { Subtitle } = Typography;
export default {
  title: "Typography/Subtitle",
  component: Subtitle,
  decorators: [withDesign],
  parameters: {
    componentSubtitle:
      "This is the text which can be used in the application as Subtitles",
    status: "released",
    design: {
      type: "figma",
      url: "https://www.figma.com/file/shwOWLheOBp1pRRoBzZpgH/Plivo?node-id=2%3A5",
    },
  },
  argTypes: {},
} as ComponentMeta<typeof Subtitle>;

const Primary: ComponentStory<typeof Subtitle> = (args) => (
  <Subtitle {...args} />
);

export const subtitle = Primary.bind({});

subtitle.args = {
  children: "Subtitle",
};

const largetextCode = `
import { Typography  } from "coengage-style-guide";

const { Subtitle } = Typography;
<Subtitle>Subtitle</Subtitle>
`;

subtitle.parameters = {
  docs: {
    source: {
      code: largetextCode,
    },
  },
};
