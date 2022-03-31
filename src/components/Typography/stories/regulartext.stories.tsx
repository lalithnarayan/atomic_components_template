import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { withDesign } from "storybook-addon-designs";
import Typography from "..";

const { Text } = Typography;
export default {
  title: "Typography/Regular Text",
  component: Text,
  decorators: [withDesign],
  parameters: {
    componentSubtitle:
      "This component has the regular text used across the app",
    status: "released",
    design: {
      type: "figma",
      url: "https://www.figma.com/file/shwOWLheOBp1pRRoBzZpgH/Plivo?node-id=2%3A5",
    },
  },
  argTypes: {},
} as ComponentMeta<typeof Text>;

const Primary: ComponentStory<typeof Text> = (args) => (
  <>
    <Text {...args} as="p">
      Regular Text{" "}
    </Text>
    <Text {...args} as="p" fontWeight="semibold">
      Regular Text semibold
    </Text>
  </>
);

export const text = Primary.bind({});

const largetextCode = `
import { Typography  } from "coengage-style-guide";

const { Text } = Typography;
<Text>Regular Text </Text>
<Text fontWeight="semibold">Regular Text semibold</Text>
`;

text.parameters = {
  docs: {
    source: {
      code: largetextCode,
    },
  },
};
