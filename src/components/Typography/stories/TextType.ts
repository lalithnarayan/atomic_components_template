import Typography from "..";

const { Heading, LargeText, Subtitle, Text, Smalltext } = Typography;
export const TEXT_TYPES = [
  {
    name: "Regular Text",
    fontSize: "14px",
    lineHeight: "21px",
    fontWeight: 400,
    component: Text,
  },
  {
    name: "Regular Text semibold",
    fontSize: "14px",
    lineHeight: "21px",
    fontWeight: 600,
    component: Text,
    props: { fontWeight: "semibold" },
  },

  {
    name: "Small Text/Caption",
    fontSize: "12px",
    lineHeight: "18px",
    fontWeight: 400,
    component: Smalltext,
  },

  {
    name: "XL Text",
    fontSize: "18px",
    lineHeight: "27px",
    fontWeight: 400,
    component: LargeText,
    props: { xl: true },
  },
  {
    name: "Large Text Regular",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 400,
    component: LargeText,
    props: { fontWeight: "regular" },
  },
  {
    name: "Large Text Medium",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 500,
    component: LargeText,
    props: { fontWeight: "medium" },
  },
  {
    name: "Large Text Bold",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 600,
    component: LargeText,
    props: { fontWeight: "bold" },
  },

  {
    name: "Subtitle",
    fontSize: "24px",
    lineHeight: "36px",
    fontWeight: 700,
    component: Subtitle,
  },

  {
    name: "Heading",
    fontSize: "64px",
    lineHeight: "96px",
    fontWeight: 700,
    component: Heading,
    props: { variant: "h1" },
  },
  {
    name: "Heading-2",
    fontSize: "40px",
    lineHeight: "60px",
    fontWeight: 700,
    component: Heading,
    props: { variant: "h2" },
  },
  {
    name: "Heading-3",
    fontSize: "24px",
    lineHeight: "36px",
    fontWeight: 700,
    component: Heading,
    props: { variant: "h2" },
  },
];

export default TEXT_TYPES;
