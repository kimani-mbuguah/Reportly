// Material Dashboard 2 PRO React layouts
import Dashboard from "layouts/dashboard";
import DepartmentDetail from "layouts/data/report-detail";
import ReportEntry from "layouts/data/reports";
import ReportList from "layouts/data/report-list";
import SignIn from "layouts/authentication/sign-in";
import Department from "layouts/data/report-list/department"



// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "One Departments Report",
    key: "report",
    icon: <Icon fontSize="medium">apps</Icon>,
    route: "/home",
    component: <Department />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "All Departments Report",
    key: "reports",
    icon: <Icon fontSize="medium">apps</Icon>,
    route: "/departments/all",
    component: <ReportList />,
    noCollapse: true,
  },

  {
    type: "collapse",
    name: "Submit Report",
    key: "entry",
    icon: <Icon fontSize="medium">apps</Icon>,
    route: "/report/submit",
    component: <ReportEntry />,
    noCollapse: true,
  },
  {
    type: "",
    name: "Authentication",
    key: "authentication",
    icon: <Icon fontSize="medium">content_paste</Icon>,
    noCollapse: true,
    collapse: [
      {
        name: "Sign In",
        key: "sign-in",
        collapse: [
          {
            name: "Basic",
            key: "basic",
            route: "/auth/sign-in",
            component: <SignIn />,
          }
        ],
      },
    
    ],
  },
];

export default routes;
