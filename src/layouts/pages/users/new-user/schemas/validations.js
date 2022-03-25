import * as Yup from "yup";
import checkout from "layouts/pages/users/new-user/schemas/form";

const {
  formField: { department, objective, pillar, activities, kpi },
} = checkout;

const validations = [
  Yup.object().shape({
    [department.name]: Yup.string().required(department.errorMsg),
    [objective.name]: Yup.string().required(objective.errorMsg),
    [pillar.name]: Yup.string().required(pillar.errorMsg),
  }),
  Yup.object().shape({
    [activities.name]: Yup.string().required(activities.errorMsg),
  }),
  Yup.object().shape({
    [kpi.name]: Yup.string().required(kpi.errorMsg),
  }),
];

export default validations;
