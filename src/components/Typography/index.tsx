import { Text as InternalText, TEXT_COLORS } from "../atoms";
import type { TextProps } from "../atoms";
import Heading from "./Heading";
import Subtitle from "./Subtitle";
import LargeText from "./LargeText";
import Smalltext from "./Smalltext";
import Text from "./Text";

export interface TypographyInterface extends React.FC<TextProps> {
  Heading: typeof Heading;
  Subtitle: typeof Subtitle;
  LargeText: typeof LargeText;
  Text: typeof Text;
  Smalltext: typeof Smalltext;
}

const Typography = InternalText as unknown as TypographyInterface;

Typography.Heading = Heading;
Typography.Subtitle = Subtitle;
Typography.LargeText = LargeText;
Typography.Text = Text;
Typography.Smalltext = Smalltext;

export default Typography;

export { TEXT_COLORS };
