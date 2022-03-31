import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { withDesign } from "storybook-addon-designs";
import Typography from "..";

const { Heading } = Typography;

export default {
  title: "Typography/Heading",
  component: Heading,
  decorators: [withDesign],
  parameters: {
    componentSubtitle:
      "Headings help to add a hierarchy to a page, and they are key identifiers for users reading a page. They should be used in an order that is relevant to the content of a page.",
    status: "released",
    design: {
      type: "figma",
      url: "https://www.figma.com/file/shwOWLheOBp1pRRoBzZpgH/Plivo?node-id=2%3A5",
    },
  },
  argTypes: {
  },
} as ComponentMeta<typeof Typography>;

const Primary: ComponentStory<typeof Typography> = () => (
  <>
    <Heading variant="h1">Title/Header 1</Heading>
    <Heading variant="h2">Header 2</Heading>
    <Heading>Header 3</Heading>
  </>
);

export const heading = Primary.bind({});

const HeadingSourceCode = `
import { Typography  } from "coengage-style-guide";

const { Heading } = Typography;
<Heading variant='h1'>Title/Header 1</Heading>
<Heading variant='h2'>Header 2</Heading>
<Heading>Header 3</Heading>
`;

heading.parameters = {
  docs: {
    source: {
      code: HeadingSourceCode,
    },
  },
};
