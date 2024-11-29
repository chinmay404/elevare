import { convert } from "html-to-text";

export function textFromHtml(htmlString) {
  const textContent = convert(htmlString, {
    wordwrap: 130,
  });
  // console.log("Html converted to text", textContent);
  return textContent;
}
