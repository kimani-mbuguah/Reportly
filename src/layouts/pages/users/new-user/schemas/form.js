const form = {
  formId: "new-user-form",
  formField: {
    department: {
      name: "department",
      label: "Department",
      type: "text",
      errorMsg: "Department is required.",
    },
    objective: {
      name: "objective",
      label: "Objective",
      type: "text",
      errorMsg: "Objective is required.",
    },
    pillar: {
      name: "pillar",
      label: "Pillar",
      type: "text",
      errorMsg: "Pillar is required.",
    },
    activities: {
      name: "activities",
      label: "Activities Planned",
      type: "text",
      errorMsg: "This field is required"
    },
    activitystatus: {
      name: "activitystatus",
      label: "Status",
      type: "text",
      errorMsg: "Status is required.",
    },
    kpi: {
      name: "kpi",
      label: "Key Performance Indicator",
      type: "text",
      errorMsg: "KPI is required.",
    },
    budget: {
      name: "budget",
      label: "Budget",
      type: "text",
      errorMsg: "Budget is required.",
    },
    company: {
      name: "company",
      label: "Company",
      type: "text",
    },
    achievements: {
      name: "achievements",
      label: "Achievements",
      type: "text",
      errorMsg: "This field is required.",
    },
    challenges: {
      name: "challenges",
      label: "Challenges",
      type: "text",
    },
    comments: {
      name: "comments",
      label: "Comments/Best Practises",
      type: "text",
      errorMsg: "This field is required.",
    },
  },
};

export default form;
