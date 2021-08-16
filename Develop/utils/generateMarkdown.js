// creates license badge if license is chosen
const addLicenseBadge = license => {
  if (license) {
      return `![${license} License](https://img.shields.io/badge/license-${license.split(' ').join('%20')}-blue)
`;
  } else {
      return '';
  }
};
// creates description section
const createDescription = (title, description, link) => {
  if (link) {
      return `${description}
          
View the deployed page at [${title}](${link}).`;
  } else {
      return `${description}`;
  }
};
// creates table of contents
const createTableOfContents = contentsArr => {
  // creates contents list items based on user selection
  let contentsList = '';
  contentsArr.forEach((item) => {

      // indents 'Screenshots' list item
      if (item.content && item.header === 'Screenshots') {
      contentsList += `   * [${item.header}](#${(item.header).toLowerCase()})
`;
      } else if (item.content) {
          contentsList += `* [${item.header}](#${(item.header).toLowerCase().split(' ').join('-')})
`;
      }
  });
  return contentsList;
};