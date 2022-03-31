import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { withDesign } from "storybook-addon-designs";
import Typography from "..";

const { LargeText } = Typography;
export default {
  title: "Typography/Large text",
  component: LargeText,
  decorators: [withDesign],
  parameters: {
    componentSubtitle: "Typographic scale for Large text",
    status: "released",
    design: {
      type: "figma",
      url: "https://www.figma.com/file/shwOWLheOBp1pRRoBzZpgH/Plivo?node-id=2%3A5",
    },
  },
  argTypes: {},
} as ComponentMeta<typeof LargeText>;

const Primary: ComponentStory<typeof LargeText> = (args) => (
  <>
    <LargeText {...args} xl>
      Xtra Large Text
    </LargeText>
    <LargeText {...args} fontWeight="regular">
      Large text Regular
    </LargeText>
    <LargeText {...args} fontWeight="medium">
      Large text Medium
    </LargeText>
    <LargeText {...args} fontWeight="bold">
      Large text Bold
    </LargeText>
  </>
);

export const largetext = Primary.bind({});

const largetextCode = `
import { Typography  } from "coengage-style-guide";

const { LargeText } = Typography;
<LargeText xl>Xtra Large Text</LargeText>
<LargeText fontWeight="regular">Large text Regular</LargeText>
<LargeText fontWeight="medium">Large text Medium</LargeText>
<LargeText fontWeight="bold">Large text Bold</LargeText>
`;

largetext.parameters = {
  docs: {
    source: {
      code: largetextCode,
    },
  },
};
