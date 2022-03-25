/** 
  All of the routes are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 PRO React layouts
import Analytics from "layouts/dashboards/analytics";
import Charts from "layouts/pages/charts";
import Wizard from "layouts/applications/wizard";
import NewUser from "layouts/pages/users/new-user";
import OrderList from "layouts/ecommerce/orders/order-list";
import SignInBasic from "layouts/authentication/sign-in/basic";



// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Home",
    key: "home",
    icon: <Icon fontSize="medium">apps</Icon>,
    route: "/home",
    component: <Analytics />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Data Entry",
    key: "entry",
    icon: <Icon fontSize="medium">apps</Icon>,
    route: "/data/entry",
    component: <NewUser />,
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
        component: <Charts />,
      },
      {
        name: "All Departments",
        key: "all departments",
        route: "/repports/all-departments",
        component: <OrderList />,
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
            component: <SignInBasic />,
          }
        ],
      },
    
    ],
  },
];

export default routes;
