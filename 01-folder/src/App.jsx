// import React from 'react'
// import Card from './components/Card'

// const App = () => {
//   return (
//     <div className='parent'>
//       <Card user = "Sachin" age = {23} img = "https://plus.unsplash.com/premium_photo-1764546983103-d6f87cab1555?q=80&w=430&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
//       <Card user = "Jaat " age = {22} img = "https://images.unsplash.com/photo-1766422646101-55375a9b66ba?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
//     </div>
//   )
// }

// export default App

// Props drilling project

import Card from './components/Card'

const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://img.freepik.com/premium-vector/google-app-icon_1273375-1571.jpg?semt=ais_hybrid&w=740&q=80",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 45, // dollars per hour
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz3mIf7riOXklE3zlfN3oCgFQJTZEBIel7Jw&s",
      companyName: "Apple",
      datePosted: "2 weeks ago",
      post: "iOS Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 65,
      location: "Bengaluru, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpS3uqWpI1Zn_nbqUxrNOGfpdNo8wk1a9Lag&s",
      companyName: "Amazon",
      datePosted: "10 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 40,
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRROeoe3zy64AWMZtpRCvjpzky7Hd0l_EyETA&s",
      companyName: "Meta (Facebook)",
      datePosted: "1 week ago",
      post: "React Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: 35,
      location: "Remote, India"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/017/396/804/non_2x/netflix-mobile-application-logo-free-png.png",
      companyName: "Netflix",
      datePosted: "3 weeks ago",
      post: "UI Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 70,
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://diplo-media.s3.eu-central-1.amazonaws.com/Microsoft-Logo-HD.jpg",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 50,
      location: "Noida, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBv77i5s6d4UitrTV00BR7QM6uMYoqvRb5TA&s",
      companyName: "Tesla",
      datePosted: "6 weeks ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 60,
      location: "Pune, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUtNIzRpzgCP-LG0xpfuDwA_alyeCv4mUPuw&s",
      companyName: "IBM",
      datePosted: "8 days ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 42,
      location: "Kolkata, India"
    },
    {
      brandLogo: "https://www.vhv.rs/dpng/d/453-4533338_oracle-logo-for-website-new-oracle-logo-png.png",
      companyName: "Oracle",
      datePosted: "9 weeks ago",
      post: "Java Developer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: 55,
      location: "Chennai, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMrjBBRmrvqjh7A-eSJEJ-mqfJunrbxzDqNw&s",
      companyName: "Adobe",
      datePosted: "12 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 48,
      location: "Bengaluru, India"
    }
  ];

  return (
    <div className='parent'>
      {jobOpenings.map(function (elem,index) {
        return <Card key = {index} company={elem.companyName} logo={elem.brandLogo} date={elem.datePosted} post={elem.post} tagone={elem.tag1} tagtwo={elem.tag2} paid={elem.pay} locations={elem.location} />
      })}
    </div>
  )
}

export default App

