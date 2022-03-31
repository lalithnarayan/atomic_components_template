import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { withDesign } from "storybook-addon-designs";
import Typography from "..";

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

const { Heading, Subtitle, LargeText, Text, Smalltext } = Typography;

export const AllTextVariations: ComponentStory<typeof Typography> = (args) => (
  <>
    <Heading variant="h1">Title/Header 1</Heading>
    <Heading variant="h2">Header 2</Heading>
    <Heading>Header 3</Heading>
    <Subtitle>Subtitle</Subtitle>
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
    <Text {...args} as="p">
      Regular Text{" "}
    </Text>
    <Text {...args} as="p" fontWeight="semibold">
      Regular Text semibold
    </Text>
    <Smalltext>Small Text</Smalltext>
  </>
);
