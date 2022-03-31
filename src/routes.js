// Material Dashboard 2 PRO React layouts
import Dashboard from "layouts/dashboard";
import DepartmentDetail from "layouts/data/report-detail";
import ReportEntry from "layouts/data/reports";
import ReportList from "layouts/data/report-list";
import SignIn from "layouts/authentication/sign-in";



// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Home",
    key: "home",
    icon: <Icon fontSize="medium">apps</Icon>,
    route: "/home",
    component: <Dashboard />,
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
    type: "collapse",
    name: "Reports",
    key: "reports",
    icon: <Icon fontSize="medium">apps</Icon>,
    collapse: [
      {
        name: "One Department",
        key: "one-department",
        route: "/reports/one-department", 
        component: <DepartmentDetail />,
      },
      {
        name: "All Departments",
        key: "all departments",
        route: "/repports/all-departments",
        component: <ReportList />,
      },
    ],
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
