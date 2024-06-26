import { CreateThemeOptions } from "@rneui/themed";
import { Entry } from "contentful";

/**
 * Safely get the theme object from CMS
 */
export function getThemeSafe(response: {
  items: Entry[];
}): CreateThemeOptions | undefined {
  const firstItem = response.items[0];
  if (!firstItem) {
    return undefined;
  }

  const fields = firstItem.fields;
  if (!fields) {
    return undefined;
  }

  const themeObject = fields.themeObject;
  if (!themeObject) {
    return undefined;
  }

  if ((themeObject as any).theme) {
    return (themeObject as any).theme;
  }

  return undefined;
}
