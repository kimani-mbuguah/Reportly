import checkout from "layouts/pages/users/new-user/schemas/form";

const {
  formField: {
    department,
    objective,
    pillar,
    activities,
    activitystatus,
    kpi,
    achievements,
    challenges,
    comments,
  },
} = checkout;

const initialValues = {
  [department.name]: "",
  [objective.name]: "",
  [pillar.name]: "",
  [activities.name]: "",
  [activitystatus.name]: "",
  [kpi.name]: "",
  [achievements.name]: "",
  [challenges.name]: "",
  [comments.name]: "",
};

export default initialValues;
