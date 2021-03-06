import { useEffect, useState } from "react";

import { CSVLink, CSVDownload } from "react-csv";
import { Audio } from  'react-loader-spinner'


// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";

// Material Dashboard 2 PRO React examples
import DashboardLayout from "layout-components/LayoutContainers/DashboardLayout";
import DashboardNavbar from "layout-components/Navbars/DashboardNavbar";
import Footer from "layout-components/Footer";
import DataTable from "layout-components/Tables/DataTable";

import DefaultCell from "layouts/data/report-list/components/DefaultCell";



import { collection, query, where, getDocs } from "firebase/firestore";
import db from "firebaseMain"


function OrderList() {
  const [documents, setDocuments] = useState([])  
  useEffect(()=>{
    getDocs(collection(db, "reports")).then(querySnapshot=>{
      querySnapshot.forEach((doc) => {
        setDocuments(documents => [...documents, doc.data()])
      });
    })
  },[])
  
  const dataTableData = {  
    columns: [
//{ Header: "Department", accessor: "department", Cell: ({ value }) => <IdCell id={value} /> },
      {
        Header: "Department",
        accessor: "department",
        Cell: ({ value }) => <DefaultCell value={value} />,
      },
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
      // {
      //   Header: "Pillar",
      //   accessor: "status",
      //   Cell: ({ value }) => {
      //     let status;
  
      //     if (value === "Paid") {
      //       status = <StatusCell icon="done" color="success" status="Paid" />;
      //     } else if (value === "refunded") {
      //       status = <StatusCell icon="replay" color="dark" status="Refunded" />;
      //     } else {
      //       status = <StatusCell icon="close" color="error" status="Canceled" />;
      //     }
  
      //     return status;
      //   },
      // },
      // {
      //   Header: "Start Date",
      //   accessor: "customer",
      //   Cell: ({ value: [name, data] }) => (
      //     <CustomerCell image={data.image} color={data.color || "dark"} name={name} />
      //   ),
      // },
      
      // {
      //   Header: "Planned Activities",
      //   accessor: "product",
      //   Cell: ({ value }) => {
      //     const [name, data] = value;
  
      //     return (
      //       <DefaultCell
      //         value={typeof value === "string" ? value : name}
      //         suffix={data.suffix || false}
      //       />
      //     );
      //   },
      // },
      // { Header: "Status", accessor: "revenue", Cell: ({ value }) => <DefaultCell value={value} /> },
    ],
  
    rows: [
      ...documents
    ],
  };

  return documents.length > 0 ? (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox my={3}>
        <MDBox display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
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
        <Card>
          <DataTable table={dataTableData} entriesPerPage={false} canSearch />
        </Card>
      </MDBox>
      <Footer />
    </DashboardLayout>
  ) : (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox my={3} display="flex" justifyContent="space-between">
      <MDBox display="flex">
        <div style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)'
         }}>
        <Audio
            height="100"
            width="100"
            color='grey'
            ariaLabel='loading'
          />
        </div>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default OrderList;
