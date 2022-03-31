export default {
  base: "align-bottom inline-flex items-center justify-center cursor-pointer transition-colors duration-150 font-medium focus:outline-none",
  size: {
    large: "px-5 py-3 text-base",
    regular: "px-5 py-2.5 text-sm",
    small: "px-3 py-2 text-sm",
    icon: {
      large: "p-3.5 rounded-full",
      regular: "p-3 rounded-full",
      small: "p-2 rounded-full",
    },
  },
  // styles applied to the SVG icon
  icon: {
    larger: "h-4 w-4",
    large: "h-4 w-4",
    regular: "h-4 w-4",
    small: "h-3 w-3",
    left: "mr-2 -ml-1",
    right: "ml-2 -mr-1",
  },
  primary: {
    base: "text-white border border-transparent",
    active:
      "active:bg-primary-color-dark hover:bg-primary-color-dark focus:ring-0",
    disabled: "cursor-not-allowed text-gray-4 bg-gray-8 ",
    loading: "opacity-80 pointer-events-none cursor-progress",
  },
  outline: {
    base: "border focus:outline-none",
    active:
      "active:bg-transparent hover:border-primary-color-dark focus:border-primary-color-dark hover:text-primary-color-dark focus:text-primary-color-dark active:text-primary-color-dark focus:ring focus:ring-0",
    disabled: "bg-gray-8 cursor-not-allowed text-gray-4 border-transparent",
  },
};
