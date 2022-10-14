import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { FormHelperText } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import config from '../../config';
import InputLabel from '@mui/material/InputLabel';
import {s_a,state_arr} from '../../india';
import React, { useState } from "react";
import {Link} from 'react-router-dom'
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import AuthHoc from "../../AuthHoc";
const formSchema = yup.object({
    sname: yup
    .string("Enter the Company name")
    .required("Company name is required")
    .min(3, "Company Name should contain atleast 3 characters"),
    website: yup
    .string("Enter the website")
    .required("website is required")
    .min(3, "website should contain atleast 3 characters"),
    businessCategory: yup.string("Select the Bussiness Category").required("Category is required"),
    facility: yup.string("Select the Facility Management").required("Facility Management is required"),
    email:yup.string("Enter the Email").required("Email is required"),
    mob: yup
    .string("Enter numbers only")
    .max(10, "Mobile no should contain only 10 digits")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Mobile no should contain minimum 10 digits")
    .required("Mobile no  is required"),
  state:yup.string("Select the State").required("State is required"),
  city:yup.string("Select the City").required("City is required"),
  zipcode: yup
    .string("enter numbers only")
    .max(6, "zip/postal code should contain only 6 numbers")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(6, "zip/postal code should contain only 6 numbers")
    .required("zip/postal code is required"),
  gst: yup
    .string("Enter numbers only")
    .matches(/^[0-9]+$/, "Must be only digits")
    .required("GST NO is required"),
});
const AddClient = () => {
let navigate = useNavigate();
const [city,setCity]=useState([]);
 const handleClick=(index)=>{
     console.log(s_a[index+1].split("|"));
     setCity(s_a[index+1].split("|"));
 };
  const formformik = useFormik({
    initialValues: {
      sname:"",
      website:"",
      businessCategory:"",
      facility:"",
      email:"",
      mob:"",
      state:"",
      city:"",
      zipcode:"",
      gst:"",
      fax:""
    },
    validationSchema: formSchema,
    onSubmit(values) {
       console.log('hit');
      console.log("hit");
       console.log(values);
      axios.post(`${config.apiURL}/register`,{
        companyName:values.sname,
        website:values.website,
        businessCategory:values.businessCategory,
        facilityManagement:values.facility,
        email:values.email,
        mob:values.mob,
        state:values.state,
        city:values.city,
        pincode:values.zipcode,
        gstNo:values.gst,
        faxNo:values.fax
      },{
         headers: {
        'Authorization': localStorage.getItem('token')
      }
    }).then((res)=>{
        console.log(res.data)
        navigate('/clients');
      })
      .catch((err)=>console.log(err.response))

    },
  });
  return (
    <Card style={{ maxWidth: 750, margin: "0 auto", padding: "20px 5px" }} className='mt-3'>
      <CardContent>
        <Typography gutterBottom mb={5} variant="h3">
          Add Client
        </Typography>
        <Typography textAlign="left" variant="h5" gutterBottom>
          Fill Client Details
        </Typography>
        <form onSubmit={formformik.handleSubmit}>
          <Grid container justify="space-between" spacing={1}>
            <Grid xs={12} sm={6} item>
              <TextField
                label="Company Name*"
                name="sname"
                placeholder="enter the company name"
                value={formformik.values.sname}
                helperText={formformik.touched.sname && formformik.errors.sname}
                onBlur={formformik.handleBlur}
                onChange={formformik.handleChange}
                error={
                  formformik.touched.sname && Boolean(formformik.errors.sname)
                }
                variant="outlined"
                fullWidth
              ></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                label="Website*"
                name="website"
                placeholder="enter the website"
                value={formformik.values.website}
                helperText={formformik.touched.website && formformik.errors.website}
                onBlur={formformik.handleBlur}
                onChange={formformik.handleChange}
                error={
                  formformik.touched.website && Boolean(formformik.errors.website)
                }
                variant="outlined"
                fullWidth
              ></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
               <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Select Business Category*</InputLabel>
                    <Select
                    name="businessCategory"
                    value={formformik.values.businessCategory}
                    label="Select Business Category"
                    onBlur={formformik.handleBlur}
                    onChange={formformik.handleChange}
                    error={
                  formformik.touched.businessCategory &&
                  Boolean(formformik.errors.businessCategory)
                }
                    fullWidth
                    >
                    <MenuItem value="Consultant">Consultant</MenuItem>
                    <MenuItem value="Advertising/Marketing/Branding/PR">Advertising/Marketing/Branding/PR</MenuItem>
                    <MenuItem value="Government Agency">Government Agency</MenuItem>
                    <MenuItem value="Publisher">Publisher</MenuItem>
                    <MenuItem value="Packaging/Design">Packaging/Design</MenuItem>
                    <MenuItem value="Association">Association</MenuItem>
                    <MenuItem value="Financial Institution/Investment Bank.">Financial Institution/Investment Bank.</MenuItem>
                    </Select>
                    <FormHelperText className="text-danger">{formformik.touched.businessCategory &&
                  formformik.errors.businessCategory}</FormHelperText>
                </FormControl>
            </Box>
            </Grid>
             <Grid xs={12} sm={6} item>
               <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Select Facility Management</InputLabel>
                    <Select
                    name="facility"
                    value={formformik.values.facility}
                    label="Course"
                    onBlur={formformik.handleBlur}
                    onChange={formformik.handleChange}
                    error={
                  formformik.touched.facility &&
                  Boolean(formformik.errors.facility)
                }
                    fullWidth
                    >
                    <MenuItem value="Commercial and Institutional Sector.">Commercial and Institutional Sector.</MenuItem>
                    <MenuItem value="Office Buildings">Office Buildings</MenuItem>
                    <MenuItem value="Hospitals">Hospitals</MenuItem>
                    <MenuItem value="Laboratories">Laboratories</MenuItem>
                    <MenuItem value="Hotels">Hotels</MenuItem>
                    <MenuItem value="Industrial">Industrial</MenuItem>
                    </Select>
                    <FormHelperText className="text-danger">{formformik.touched.facility &&
                  formformik.errors.facility}</FormHelperText>
                </FormControl>
            </Box>
            </Grid>
             <Grid xs={12} sm={6} item>
              <TextField
                label="Company Email Address*"
                name="email"
                value={formformik.values.email}
                helperText={formformik.touched.email && formformik.errors.email}
                onChange={formformik.handleChange}
                onBlur={formformik.handleBlur}
                error={
                  formformik.touched.email && Boolean(formformik.errors.email)
                }
                placeholder="enter the email"
                variant="outlined"
                fullWidth
              ></TextField>
            </Grid>
             <Grid xs={12} sm={6} item>
              <TextField
                label="Mobile No*"
                name="mob"
                value={formformik.values.mob}
                onBlur={formformik.handleBlur}
                helperText={formformik.touched.mob && formformik.errors.mob}
                onChange={formformik.handleChange}
                error={ formformik.touched.mob && Boolean(formformik.errors.mob)}
                placeholder="enter the mobile no"
                variant="outlined"
                fullWidth
              ></TextField>
            </Grid>
            <Grid xs={12} sm={4} item>
               <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">State</InputLabel>
                    <Select
                    name="state"
                    value={formformik.values?.state || ''}
                    label="State"
                    onBlur={formformik.handleBlur}
                    onChange={formformik.handleChange}
                    error={
                  formformik.touched.state &&
                  Boolean(formformik.errors.state)
                }
                    fullWidth
                    >
                    {
                       state_arr.map((item,index)=>
                         <MenuItem key={index} value={item} onClick={()=>handleClick(index)}>{item}</MenuItem>
                          
                       )
                    }
                    {/* <MenuItem value="Mathematics">Mathematics</MenuItem>
                    <MenuItem value="Science">Science</MenuItem>
                    <MenuItem value="React Js">React Js</MenuItem> */}
                    </Select>
                    <FormHelperText className="text-danger">{formformik.touched.state &&
                  formformik.errors.state}</FormHelperText>
                </FormControl>
            </Box>
            </Grid>
                 <Grid xs={12} sm={4} item>
               <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">City</InputLabel>
                    <Select
                    name="city"
                    value={formformik.values.city || ''}
                    label="City"
                    onBlur={formformik.handleBlur}
                    onChange={formformik.handleChange}
                    error={
                  formformik.touched.city &&
                  Boolean(formformik.errors.city)
                }
                    fullWidth
                    >
                    {
                      city.map((item,index)=>
                        <MenuItem key={index} value={item}>{item}</MenuItem>
                      )
                    }
                    {/* <MenuItem value="Mathematics">Mathematics</MenuItem>
                    <MenuItem value="Science">Science</MenuItem>
                    <MenuItem value="React Js">React Js</MenuItem> */}
                    </Select>
                    <FormHelperText className="text-danger">{formformik.touched.city &&
                  formformik.errors.city}</FormHelperText>
                </FormControl>
            </Box>
            </Grid>
            <Grid xs={12} sm={4} item>
              <TextField
                label="Pin Code*"
                name="zipcode"
                value={formformik.values.zipcode}
                onBlur={formformik.handleBlur}
                helperText={
                  formformik.touched.zipcode && formformik.errors.zipcode
                }
                onChange={formformik.handleChange}
                error={
                  formformik.touched.zipcode &&
                  Boolean(formformik.errors.zipcode)
                }
                placeholder="enter the pin code"
                variant="outlined"
                fullWidth
              ></TextField>
            </Grid>  
             <Grid xs={12} sm={6}  item>
              <TextField
                label="GST Number*"
                name="gst"
                value={formformik.values.gst}
                onBlur={formformik.handleBlur}
                helperText={formformik.touched.gst && formformik.errors.gst}
                onChange={formformik.handleChange}
                error={ formformik.touched.gst && Boolean(formformik.errors.gst)}
                placeholder="enter the gst"
                variant="outlined"
                fullWidth
              ></TextField>
            </Grid>
               <Grid xs={12} sm={6} item>
              <TextField
                label="Fax Number*"
                name="fax"
                placeholder="enter the Fax numbwe"
                value={formformik.values.fax}
                onChange={formformik.handleChange}
                variant="outlined"
                fullWidth
              ></TextField>
            </Grid>

       </Grid>
       <div className="mt-4">
         <Button component={Link} className="float-start" to="/clients" sx={{backgroundColor:"#CD9CFF"}}>Back</Button>
         <Button variant="contained" type="submit" className="float-end" sx={{backgroundColor:"#CD9CFF"}}>Save Client</Button>
         
           </div>
        </form>
      </CardContent>
    </Card>
  );
};
export default AuthHoc(AddClient);