import { useState } from "react";

import { CSVLink } from "react-csv";


// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";



// Material Dashboard 2 PRO React examples
import DashboardLayout from "layout-components/LayoutContainers/DashboardLayout";
import DashboardNavbar from "layout-components/Navbars/DashboardNavbar";
import Footer from "layout-components/Footer";
import DataTable from "layout-components/Tables/DataTable";

import DefaultCell from "layouts/data/report-list/components/DefaultCell";



import { collection, query, where, getDocs } from "firebase/firestore";
import db from "firebaseMain"


function OrderList() {
  const departments = ["","Pastor", "Church Clerk", "Deaconny", "AMO", "AWO", "Youth", "Children", " Family Life", "Camp Meeting", "Development", "Sabbath School", "Stewardship", "Treasury", "Health" ];
  const [department, setDepartment] = useState(departments[0]);

  const [documents, setDocuments] = useState([])  
  
  const dataTableData = {  
    columns: [

      {
        Header: "Objectives",
        accessor: "objective",
        Cell: ({ value }) => <DefaultCell value={value} />,
      },
      {
        Header: "Pillar",
        accessor: "pillar",
        Cell: ({ value }) => <DefaultCell value={value} />,
      },
      {
        Header: "StartDate",
        accessor: "start_date",
        Cell: ({ value }) => <DefaultCell value={value} />,
      },
      {
        Header: "End Date",
        accessor: "end_date",
        Cell: ({ value }) => <DefaultCell value={value} />,
      },
      {
        Header: "Planned Activities",
        accessor: "activities",
        Cell: ({ value }) => <DefaultCell value={value} />,
      },
      {
        Header: "Status",
        accessor: "activity_status",
        Cell: ({ value }) => <DefaultCell value={value} />,
      },
      {
        Header: "KPI",
        accessor: "kpi",
        Cell: ({ value }) => <DefaultCell value={value} />,
      },
      {
        Header: "Budget",
        accessor: "budget",
        Cell: ({ value }) => <DefaultCell value={value} />,
      },
      {
        Header: "Planned Budget",
        accessor: "plannedBudget",
        Cell: ({ value }) => <DefaultCell value={value} />,
      },
      {
        Header: "Utilized Budget",
        accessor: "utilizedBudget",
        Cell: ({ value }) => <DefaultCell value={value} />,
      },
      {
        Header: "Achievements",
        accessor: "achievements",
        Cell: ({ value }) => <DefaultCell value={value} />,
      },
      {
        Header: "Challenges",
        accessor: "challenges",
        Cell: ({ value }) => <DefaultCell value={value} />,
      },
      {
        Header: "Comments",
        accessor: "comments",
        Cell: ({ value }) => <DefaultCell value={value} />,
      },
    ],
  
    rows: [
      ...documents
    ],
  };


  const handleSubmit=(dep)=>{
    setDocuments([])
    const q = query(collection(db, "reports"), where("department", "==", dep) );
    getDocs(q).then(querySnapshot=>{
      querySnapshot.forEach((doc) => {
        setDocuments(documents => [...documents, doc.data()])
      })
    }).catch(error=>{
      console.error(error)
    })
  }

  return documents.length > 0 ? (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox my={3}>
      
      
        <MDBox display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
              <Autocomplete
                  options={departments}
                  value={department}
                  onChange={(event, newValue) => {
                   setDepartment(newValue);
                    handleSubmit(newValue);
                  }}
          
                  renderInput={(params) => <MDInput 
                    {...params} 
                    variant="standard" 
                    type="text"
                    label="Department"
                    name="department"
                  />}
                />
            </Grid>
          </Grid>

          <MDBox display="flex">
            <MDBox ml={1} >
              <CSVLink data={documents}>
                <MDButton variant="outlined" color="dark" >
                  <Icon>description</Icon>
                  &nbsp;export to excel
                </MDButton>
              </CSVLink>
            </MDBox>
          </MDBox>
        </MDBox>

        <MDBox p={1}>
          <MDTypography variant="h3">{department}</MDTypography>
        </MDBox>

        <Card>
          <DataTable table={dataTableData} entriesPerPage={false} canSearch />
        </Card>
      </MDBox>
      <Footer />
    </DashboardLayout>
  ) : (
    <DashboardLayout>
    <DashboardNavbar />
    <MDBox my={3}>
    
      <MDBox display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={8}>
            <Autocomplete
                options={departments}
                value={department}
                onChange={(event, newValue) => {
                 setDepartment(newValue);
                  handleSubmit(newValue);
                }}
        
                renderInput={(params) => <MDInput 
                  {...params} 
                  variant="standard" 
                  type="text"
                  label="Department"
                  name="department"
                />}
              />
          </Grid>
        </Grid>
      </MDBox>
      <MDBox p={1}>
        <MDTypography variant="h3">{department}</MDTypography>
      </MDBox>
      <MDBox p={1}>
        <MDTypography variant="p">Select a department to show data</MDTypography>
      </MDBox>
    </MDBox>
  </DashboardLayout>
  );
}

export default OrderList;
