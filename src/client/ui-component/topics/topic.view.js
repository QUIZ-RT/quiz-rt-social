export const htmlToTemplate = (htmlstr) => {
    const template = document.createElement("template")
    template.innerHTML = htmlstr
    return template.content
  }

export const topicView = (topicObj, topicId) => {
  let userNum =  '';
  if(topicObj.users!==undefined){
      userNum = topicObj.users.length;
  } 
  return `<li class="mdc-grid-tile pointer" id="grid_${topicId}">
    <div class="mdc-grid-tile__primary">
        <img class="mdc-grid-tile__primary-content mdc-image-list__image" src="${topicObj.topicImage}" />
        
    </div>
    <span class="mdc-grid-tile__secondary">
        <span class="mdc-grid-tile__title">${topicObj.topicText} &nbsp;&nbsp;${userNum} </span>
    </span>
</li>`
}

