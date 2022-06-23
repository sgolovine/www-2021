"use strict";
function normalizeData(data) {
  const normalizedData = data.reduce((acc, item) => {
    const subsetKeys = Object.keys(item);
    const result = subsetKeys.reduce((acc2, subsetItem) => {
      const currentItem = item[subsetItem];
      if (currentItem) {
        return {
          ...acc2,
          [subsetItem]: currentItem
        };
      }
      return acc2;
    }, {});
    return {
      ...acc,
      ...result
    };
  }, {});
  return normalizedData;
}
const useData = () => {
  const query = {
    allSiteDataJson: {
      nodes: [{
        bio: "",
        dev_to: "",
        email: "",
        github: "",
        instagram: "",
        linkedin: "",
        phone_number: "",
        phone_number_alt: "",
        twitter: "",
        website: "",
        work_data: [{
          name: "",
          description: "",
          project_type: "side_project",
          show_in_recent_projects: false,
          url: ""
        }]
      }]
    }
  };
  const siteData = normalizeData(query.allSiteDataJson.nodes);
  return {
    siteData
  };
};
exports.useData = useData;
