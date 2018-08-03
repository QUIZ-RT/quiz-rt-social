import {getHorizontalScrollableContainerTemplate} from "./horizontalscrollablecontainer.view"

export const createHorizontalScrollableTemplate = (dataList, idKey) => {
  const hsTemplate = getHorizontalScrollableContainerTemplate(dataList, idKey)
  return hsTemplate
}

