// import { Source } from "@storybook/addon-docs";
// import { entries, keys } from "lodash";
// import { useState } from "react";
// import dedent from "ts-dedent";
// import { Input as TextField, Typography, Col, Row } from "../../../../";

// import TEXT_TYPES from "./TextType";

// const { Smalltext } = Typography;
// const TextFinder = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   return (
//     <div>
//       <Row style={{ marginBottom: 16, marginTop: 24 }} />
//       <Row gutter={16} align="bottom">
//         <Col>
//           <TextField
//             style={{ width: 322 }}
//             type="search-box"
//             labelText="Find text component"
//             placeholder="Name, font-size/weight, line height"
//             onChange={({ target }) => setSearchTerm(target.value)}
//           />
//         </Col>
//       </Row>
//       <Row className="mt-7">
//         <Col span={24}>
//           <Row className="text-grid" gutter={[16, 16]}>
//             {TEXT_TYPES.filter(
//               (type) =>
//                 ~`${type.name.toLowerCase()}|${type.fontSize}|${
//                   type.lineHeight
//                 }|${type.fontWeight}`.indexOf(searchTerm.toLowerCase())
//             ).map((type) => (
//               <Col key={type.name} span={12} className="mb-4">
//                 <div
//                   style={{ height: "100%" }}
//                   className="p-6 bg-white shadow "
//                 >
//                   <Row justify="space-between">
//                     <div>
//                       <Smalltext>Font Size: {type.fontSize}</Smalltext>
//                     </div>
//                     <div>
//                       <Smalltext>Font Weight: {type.fontWeight}</Smalltext>
//                     </div>
//                     <div>
//                       <Smalltext>Line Height: {type.lineHeight}</Smalltext>
//                     </div>
//                   </Row>
//                   {/*// @ts-ignore */}
//                   <type.component {...type.props}>
//                     This is a {type.name}
//                   </type.component>
//                   <Source
//                     code={dedent`
//                 <${type.component.displayName} ${
//                       keys(type.props).length
//                         ? transformPropsToReadableFormat(type.props)
//                         : ""
//                     }>
//                     This is a ${type.name}
//                 </${type.component.displayName}>`.trim()}
//                     language="jsx"
//                   />
//                 </div>
//               </Col>
//             ))}
//           </Row>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default TextFinder;

// const transformPropsToReadableFormat = (props: { [key: string]: any }) => {
//   if (!props) return ``;
//   let string = "";
//   entries(props).forEach(([key, value]) => {
//     string += `${key}=${typeof value === "string" ? `'${value}'` : value}`;
//   });
//   return string;
// };
