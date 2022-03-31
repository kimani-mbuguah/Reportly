import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { doc, setDoc } from "firebase/firestore"; 


// @material-ui core components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";

//  components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";



// Settings page components
import FormField from "layouts/data/components/FormField";

// Data
import selectData from "layouts/data/reports/components/Report-entry/data/selectData";

import db, {makeID} from "firebaseMain"

function BasicInfo() {
  const navigate = useNavigate();

  const departments = ["Pastor", "Church Clerk", "Deaconny", "AMO", "AWO", "Youth", "Children", " Family Life", "Camp Meeting", "Development", "Sabbath School", "Stewardship", "Treasury", "Health" ];
  const pillars = ["Worship", "Evangelism", "Family", "Mentorship", "Sustainability"]
  const objectives = ["Reach Out To God", "Reach In With God", "Reach Out With God", "Equip For Reaching", "Strengthening Family", "Euiped For Leadership", "Enhance Sustainable Development"]
  const activityStatuses = ["Done", "Not Done", "Rescheduled", "Canceled"]
  const [department, setDepartment] = useState(departments[0]);
  const [pillar, setPillar] = useState(pillars[0])
  const [objective, setObjective] = useState(objectives[0])
  const [startDateDay, setStartDateDay] = useState("1");
  const [startDateMonth, setStartDateMonth] = useState("January");
  const [startDateYear, setStartDateYear] = useState("2022");
  const [endDateDay, setEndDateDay] = useState("1");
  const [endDateMonth, setEndDateMonth] = useState("January");
  const [endDateYear, setEndDateYear] = useState("2022");
  const [activities, setActivities] = useState("");
  const [activityStatus, setActivityStatus] = useState("Done");
  const [kpi, setKpi] = useState("");
  const [budget, setBubget] = useState("");
  const [plannedBudget, setPlannedBudget] = useState("");
  const [utilizedBudget, setUtilizedBudget] = useState("");
  const [achievements, setAchievements] = useState("");
  const [challenges, setChallenges] = useState("");
  const [comments, setComments] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    const values = {
      department : department,
      objective : objective,
      pillar : pillar,
      start_date:  startDateMonth + ", " + startDateDay + ", " + startDateYear,
      end_date:  endDateMonth + ", " + endDateDay + ", " + endDateYear,
      activities : activities,
      activity_status : activityStatus,
      kpi : kpi,
      budget : budget,
      plannedBudget : plannedBudget,
      utilizedBudget: utilizedBudget,
      achievements: achievements,
      challenges: challenges,
      comments: comments
    }

    
    if(
      challenges.length == 0 || achievements.length == 0 || 
      utilizedBudget.length == 0 || plannedBudget.length == 0 || 
      budget.length == 0 || kpi.length == 0 || activityStatus.length == 0
      || activities.length == 0 || startDateDay.length == 0 || endDateDay.length == 0
      || pillar.length == 0 || objective.length == 0 || department.length == 0){
      alert("One or more field is empty!")
    }else{
      setDoc(doc(db, "reports", makeID(9)), values).then(success=>{
        navigate("/home")
      }).catch(error=>{
        console.error(error)
      })
    }

  };
  return (
    <Card id="report-info" sx={{ overflow: "visible" }}>
      <MDBox p={3}>
        <MDTypography variant="h5">Report Entry</MDTypography>
      </MDBox>
      <MDBox pb={3} px={3} component="form" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Autocomplete
                options={departments}
                value={department}
                onChange={(event, newValue) => {
                  setDepartment(newValue);
                }}
        
                renderInput={(params) => <MDInput 
                  {...params} 
                  variant="standard" 
                  type="text"
                  label="Department"
                  name="department"
                  placeholder={department}
                />}
              />
          </Grid>
          <Grid item xs={12} sm={4}>
          <Autocomplete
              options={objectives}
              value={objective}
              onChange={(event, newValue) => {
                setObjective(newValue);
              }}
              renderInput={(params) => <MDInput 
                {...params} 
                variant="standard" 
                type="text"
                label="Objective"
                name="objective"
                placeholder={objective}
              
              />}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
          <Autocomplete
              options={pillars}
              value={pillar}
              onChange={(event, newValue) => {
                setPillar(newValue);
              }}
              renderInput={(params) => <MDInput 
                {...params} 
                variant="standard" 
                type="text"
                label="Pillar"
                name="pillar"
                placeholder={pillar}                
              />}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={5}>
                    <Autocomplete
                      defaultValue="January"
                      options={selectData.birthDate}
                      value={startDateMonth}
                      onChange={(event, newValue) => {
                        setStartDateMonth(newValue);
                      }}
                      renderInput={(params) => (
                        <FormField
                          {...params}
                          label="Start Date"
                          InputLabelProps={{ shrink: true }}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Autocomplete
                      defaultValue="1"
                      options={selectData.days}
                      value={startDateDay}
                      onChange={(event, newValue) => {
                        setStartDateDay(newValue);
                      }}
                      renderInput={(params) => (
                        <FormField {...params} InputLabelProps={{ shrink: true }} />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Autocomplete
                      defaultValue={new Date().getFullYear().toString()}
                      options={selectData.years}
                      value={startDateYear}
                      onChange={(event, newValue) => {
                        setStartDateYear(newValue);
                      }}
                      renderInput={(params) => (
                        <FormField {...params} InputLabelProps={{ shrink: true }} />
                      )}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={5}>
                    <Autocomplete
                      defaultValue="January"
                      options={selectData.birthDate}
                      value={endDateMonth}
                      onChange={(event, newValue) => {
                        setEndDateMonth(newValue);
                      }}
                      renderInput={(params) => (
                        <FormField
                          {...params}
                          label="End Date"
                          InputLabelProps={{ shrink: true }}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Autocomplete
                      defaultValue="1"
                      options={selectData.days}
                      value={endDateDay}
                      onChange={(event, newValue) => {
                        setEndDateDay(newValue);
                      }}
                      renderInput={(params) => (
                        <FormField {...params} InputLabelProps={{ shrink: true }} />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Autocomplete
                      defaultValue={new Date().getFullYear().toString()}
                      options={selectData.years}
                      value={endDateYear}
                      onChange={(event, newValue) => {
                        setEndDateYear(newValue);
                      }}
                      renderInput={(params) => (
                        <FormField {...params} InputLabelProps={{ shrink: true }} />
                      )}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <FormField 
                label="Actities Planned"
                placeholder="Activities planned" 
                multiline
                onChange={(event)=> {
                  setActivities(event.target.value)
                }}
                name="activities"
                value = {activities}
                rows={2} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Autocomplete
                  defaultValue="Done"
                  options={activityStatuses}
                  value={activityStatus}
                  onChange={(event, value) => {
                    setActivityStatus(value);
                  }}
                  renderInput={(params) => (
                    <FormField {...params} InputLabelProps={{ shrink: true }} label="Status" />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormField
                  label="Key Performance Indicator"
                  placeholder="KPI" 
                  onChange={(event)=> {
                    setKpi(event.target.value)
                  }}
                  value = {kpi}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <FormField 
                label="Budget"
                placeholder="Budget" 
                type="number"
                onChange={(event)=> {
                  setBubget(event.target.value)
                }}
                name="budget"
                value = {budget} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormField 
                label="Planned Budget"
                placeholder="Planned Budget" 
                type="number"
                onChange={(event)=> {
                  setPlannedBudget(event.target.value)
                }}
                name="plannedbudget"
                value = {plannedBudget} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormField
                  label="Utilized Budget"
                  placeholder="Utlized Budget" 
                  onChange={(event)=> {
                    setUtilizedBudget(event.target.value)
                  }}
                  type="number"
                  value = {utilizedBudget}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <FormField 
                label="Achievements"
                placeholder="Achievements" 
                multiline
                onChange={(event)=> {
                  setAchievements(event.target.value)
                }}
                name="achievements"
                value = {achievements}
                rows={3} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormField 
                label="Challenges"
                placeholder="Challenges" 
                multiline
                onChange={(event)=> {
                  setChallenges(event.target.value)
                }}
                name="challenges"
                value = {challenges}
                rows={3} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormField
                  label="Comments/Best Practises"
                  placeholder="Comments" 
                  multiline
                  onChange={(event) => {
                  setComments(event.target.value);
                }}
                  name= "comments"
                  value = {comments}
                  rows={3}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
          <MDButton
            disabled={false}
            type="submit"
            variant="gradient"
            color="dark"
          >
            Submit
          </MDButton>
          </Grid>
        </Grid>
      </MDBox>
    </Card>
  );
}

export default BasicInfo;
