import { jsonPlaceHolderEnum } from "./json-place-holder.type";

export class IJsonPlaceHolder {
  userId = 0;
  id = 0;
  title = '';
  body = '';
  itemType = jsonPlaceHolderEnum.Title;
  displayValue = '';
}
