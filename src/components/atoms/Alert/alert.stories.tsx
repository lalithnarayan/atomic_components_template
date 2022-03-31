import { Meta, Story } from "@storybook/react/types-6-0";
import { XCircleIcon } from "coengageicons-react/solid";
import { withDesign } from "storybook-addon-designs";

import Text from "../Text";
import Alert, { AlertProps } from ".";
import React from "react";

const variants = ["success", "danger", "warning", "info", "neutral"];

export default {
  title: "UI Components/Alert",
  component: Alert,
  decorators: [withDesign],
  parameters: {
    componentSubtitle:
      "Notifications are messages that communicate information to the user. The two main types of notifications are toast notifications and inline notifications.",
    status: "released",
    design: {
      type: "figma",
      url: "https://www.figma.com/file/shwOWLheOBp1pRRoBzZpgH/Plivo?node-id=190%3A3584",
    },
  },

  argTypes: {
    type: {
      options: variants,
      control: "radio",
    },
  },
} as Meta;

const Template: Story<AlertProps> = (args) => <Alert {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: "This is a neutral alert.",
  type: "neutral",
};

const largetextCode = `
import { Alert  } from "coengage-style-guide";

<Alert>This is a neutral alert.</Alert>
<Alert type="success">This is a Sucess alert.</Alert>
`;

Basic.parameters = {
  docs: {
    source: {
      code: largetextCode,
    },
  },
};
// export const WithoutClose = Template.bind({});
// WithoutClose.args = {
//   type: 'success',
//   children: "This alert doesn't have a close button.",
// };

const Variations_Template: Story<AlertProps> = (args) => (
  <div className="space-y-4">
    <Alert {...args} type="success">
      {" "}
      <Text boldness="semibold">Important Note!</Text>{" "}
      <Text>Change a few things up and try submitting again.</Text>
    </Alert>
    <Alert {...args} type="danger">
      {" "}
      <Text boldness="semibold">Important Note!</Text>{" "}
      <Text>Change a few things up and try submitting again.</Text>
    </Alert>
    <Alert {...args} type="warning">
      {" "}
      <Text boldness="semibold">Important Note!</Text>{" "}
      <Text>Change a few things up and try submitting again.</Text>
    </Alert>
    <Alert {...args} type="info">
      {" "}
      <Text boldness="semibold">Important Note!</Text>{" "}
      <Text>Change a few things up and try submitting again.</Text>
    </Alert>
    <Alert {...args} type="neutral">
      {" "}
      <Text boldness="semibold">Important Note!</Text>{" "}
      <Text>Change a few things up and try submitting again.</Text>
    </Alert>
  </div>
);

export const Variations = Variations_Template.bind({});

const Example_Template: Story<AlertProps> = (args) => (
  <div className="space-y-6">
    <Alert {...args}>
      <Text boldness="semibold">Important Note!</Text>{" "}
      <Text>Change a few things up and try submitting again.</Text>
    </Alert>
    <Alert {...args}>
      <div className="flex items-center">
        <XCircleIcon className="h-4 w-4  mr-3" />
        <Text boldness="semibold">Important Note!</Text>{" "}
        <Text>Change a few things up and try submitting again.</Text>
      </div>
    </Alert>
    <Alert
      {...args}
      onClose={() => {
        console.log("close clicked");
      }}
    >
      <div className="flex items-center mb-1.5">
        <XCircleIcon className="h-4 w-4 mr-3" />
        <Text boldness="semibold">Oh snap !</Text>{" "}
      </div>
      <Text>
        Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </Text>
    </Alert>
  </div>
);

export const examples = Example_Template.bind({});

Example_Template.args = {
  type: "info",
};
