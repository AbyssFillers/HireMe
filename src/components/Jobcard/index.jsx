import React from 'react';

function JobListings() {
  const jobListings = [
    { title: 'Frontend Developer', company: 'Amazon', via: 'LinkedIn', time: '1 hour ago', location: 'Remote', skills: ['Javascript', 'React', 'Nodejs'] },
    { title: 'iOS Developer', company: 'Microsoft', via: 'Unstop', time: '1 hour ago', location: 'Remote', skills: ['Javascript', 'React', 'Nodejs'] },
    { title: 'Backend Developer', company: 'TCS', via: 'Naukri.com', time: '1 hour ago', location: 'Remote', skills: ['Javascript', 'React', 'Nodejs'] },
    { title: 'Android Developer', company: 'Accenture', via: 'LinkedIn' ,time: '1 hour ago', location: 'Remote', skills: ['Javascript', 'React', 'Nodejs'] },
    { title: 'Backend Developer', company: 'Uber', via: 'LinkedIn',time: '1 hour ago', location: 'Remote', skills: ['Javascript', 'React', 'Nodejs'] },
    { title: 'Developer Advocate', company: 'Zomato', via: 'LinkedIn', time: '1 hour ago', location: 'Remote', skills: ['Javascript', 'React', 'Nodejs'] },
  ];

  return (
    <div className='bg-gray-100 px-10 '>
      {jobListings.map((job, index) => (
        <div key={index} className='px-6 py-4 bg-white border border-gray-300 rounded-lg mb-4'>
          <div className='flex justify-between items-center'>
            <h5 className='text-xl font-semibold'>{job.title}</h5>
            <h6 className='text-gray-500'>{job.time}</h6>
          </div>
          <p className='text-gray-700'>{job.company} | {job.via}</p>
          <div className='flex justify-between items-center mt-4'>
            <p className='text-gray-600'>{job.location}</p>
            <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded-full'>Apply</button>
          </div>
          <div className='flex flex-wrap mt-2'>
            {job.skills.map(skill => (
              <span key={skill} className='bg-blue-100 text-blue-800 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded-full'>
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default JobListings;
// import * as React from 'react';
// import Card from '@mui/material/Card';
// import Box from '@mui/material/Box';
// import Chip from '@mui/material/Chip';
// import Stack from '@mui/material/Stack';
// import Divider from '@mui/material/Divider';
// import Typography from '@mui/material/Typography';
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

// export default function IntroDivider() {
//   return (
//     <div className='px-10 bg-gray-100 pb-20'>
//         <Card variant="outlined" sx={{ }}>
//             <Divider/><Divider/><Divider/>
//             <Box sx={{ p: 2 }}>
//                 <Stack
//                 direction="row"
//                 sx={{ justifyContent: 'space-between', alignItems: 'center' }}
//                 >
//                 <Typography gutterBottom variant="h5" component="div">
//                 Frontend Developer
//                 </Typography>
//                 <Typography gutterBottom variant="h6" component="div">
//                     1 hour ago
//                 </Typography>
//                 </Stack>
//                 <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//                 Amazon | LinkedIn
//                 </Typography>
//             </Box>
//             <Divider />
//             <Box sx={{ p: 2 }}>
//                 <Stack
//                     direction="row"
//                     sx={{ justifyContent: 'space-between', alignItems: 'center' }}
//                 >
//                 <Typography gutterBottom variant="body3">
//                 Remote
//                 </Typography>
//                 <button className='w-28 bg-blue-500 text-lg text-white font-bold py-3 rounded-full'>Apply</button>
//                 </Stack>
//                 <Stack direction="row" spacing={1}>
//                 <Chip label="Javascript" size="small" />
//                 <Chip label="React" size="small" />
//                 <Chip label="Nodejs" size="small" />
//                 </Stack>
//             </Box>
//             <Divider/><Divider/><Divider/>
//         </Card>
//         <Card variant="outlined" sx={{ }}>
//             <Divider/><Divider/><Divider/>
//             <Box sx={{ p: 2 }}>
//                 <Stack
//                 direction="row"
//                 sx={{ justifyContent: 'space-between', alignItems: 'center' }}
//                 >
//                 <Typography gutterBottom variant="h5" component="div">
//                 iOS Developer
//                 </Typography>
//                 <Typography gutterBottom variant="h6" component="div">
//                     1 hour ago
//                 </Typography>
//                 </Stack>
//                 <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//                 Microsoft | Unstop
//                 </Typography>
//             </Box>
//             <Divider />
//             <Box sx={{ p: 2 }}>
//                 <Stack
//                         direction="row"
//                         sx={{ justifyContent: 'space-between', alignItems: 'center' }}
//                 >
//                 <Typography gutterBottom variant="body3">
//                 Remote
//                 </Typography>
//                 <button className='w-28 bg-blue-500 text-lg text-white font-bold py-3 rounded-full'>Apply</button>
//                 </Stack>
//                 <Stack direction="row" spacing={1}>
//                 <Chip label="Javascript" size="small" />
//                 <Chip label="React" size="small" />
//                 <Chip label="Nodejs" size="small" />
//                 </Stack>
//             </Box>
//             <Divider/><Divider/><Divider/>
//         </Card>
//         <Card variant="outlined" sx={{ }}>
//             <Divider/><Divider/><Divider/>
//             <Box sx={{ p: 2 }}>
//                 <Stack
//                 direction="row"
//                 sx={{ justifyContent: 'space-between', alignItems: 'center' }}
//                 >
//                 <Typography gutterBottom variant="h5" component="div">
//                 Backend Developer
//                 </Typography>
//                 <Typography gutterBottom variant="h6" component="div">
//                     1 hour ago
//                 </Typography>
//                 </Stack>
//                 <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//                 TCS | Naukri.com
//                 </Typography>
//             </Box>
//             <Divider />
//             <Box sx={{ p: 2 }}>
//                 <Stack
//                         direction="row"
//                         sx={{ justifyContent: 'space-between', alignItems: 'center' }}
//                 >
//                 <Typography gutterBottom variant="body3">
//                 Remote
//                 </Typography>
//                 <button className='w-28 bg-blue-500 text-lg text-white font-bold py-3 rounded-full'>Apply</button>
//                 </Stack>
//                 <Stack direction="row" spacing={1}>
//                 <Chip label="Javascript" size="small" />
//                 <Chip label="React" size="small" />
//                 <Chip label="Nodejs" size="small" />
//                 </Stack>
//             </Box>
//             <Divider/><Divider/><Divider/>
//         </Card>
//         <Card variant="outlined" sx={{ }}>
//             <Divider/><Divider/><Divider/>
//             <Box sx={{ p: 2 }}>
//                 <Stack
//                 direction="row"
//                 sx={{ justifyContent: 'space-between', alignItems: 'center' }}
//                 >
//                 <Typography gutterBottom variant="h5" component="div">
//                 Android Developer
//                 </Typography>
//                 <Typography gutterBottom variant="h6" component="div">
//                     1 hour ago
//                 </Typography>
//                 </Stack>
//                 <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//                 Accenture | LinkedIn
//                 </Typography>
//             </Box>
//             <Divider />
//             <Box sx={{ p: 2 }}>
//                 <Stack
//                         direction="row"
//                         sx={{ justifyContent: 'space-between', alignItems: 'center' }}
//                 >
//                 <Typography gutterBottom variant="body3">
//                 Remote
//                 </Typography>
//                 <button className='w-28 bg-blue-500 text-lg text-white font-bold py-3 rounded-full'>Apply</button>
//                 </Stack>
//                 <Stack direction="row" spacing={1}>
//                 <Chip label="Javascript" size="small" />
//                 <Chip label="React" size="small" />
//                 <Chip label="Nodejs" size="small" />
//                 </Stack>
//             </Box>
//             <Divider/><Divider/><Divider/>
//         </Card>
//         <Card variant="outlined" sx={{ }}>
//             <Divider/><Divider/><Divider/>
//             <Box sx={{ p: 2 }}>
//                 <Stack
//                 direction="row"
//                 sx={{ justifyContent: 'space-between', alignItems: 'center' }}
//                 >
//                 <Typography gutterBottom variant="h5" component="div">
//                 Backend Developer
//                 </Typography>
//                 <Typography gutterBottom variant="h6" component="div">
//                     1 hour ago
//                 </Typography>
//                 </Stack>
//                 <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//                 Uber | LinkedIn
//                 </Typography>
//             </Box>
//             <Divider />
//             <Box sx={{ p: 2 }}>
//                 <Stack
//                         direction="row"
//                         sx={{ justifyContent: 'space-between', alignItems: 'center' }}
//                 >
//                 <Typography gutterBottom variant="body3">
//                 Remote
//                 </Typography>
//                 <button className='w-28 bg-blue-500 text-lg text-white font-bold py-3 rounded-full'>Apply</button>
//                 </Stack>
//                 <Stack direction="row" spacing={1}>
//                 <Chip label="Javascript" size="small" />
//                 <Chip label="React" size="small" />
//                 <Chip label="Nodejs" size="small" />
//                 </Stack>
//             </Box>
//             <Divider/><Divider/><Divider/>
//         </Card>
//         <Card variant="outlined" sx={{ }}>
//             <Divider/><Divider/><Divider/>
//             <Box sx={{ p: 2 }}>
//                 <Stack
//                 direction="row"
//                 sx={{ justifyContent: 'space-between', alignItems: 'center' }}
//                 >
//                 <Typography gutterBottom variant="h5" component="div">
//                 Developer Advocate
//                 </Typography>
//                 <Typography gutterBottom variant="h6" component="div">
//                     1 hour ago
//                 </Typography>
//                 </Stack>
//                 <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//                 Zomato | LinkedIn
//                 </Typography>
//             </Box>
//             <Divider />
//             <Box sx={{ p: 2 }}>
//                 <Stack
//                         direction="row"
//                         sx={{ justifyContent: 'space-between', alignItems: 'center' }}
//                 >
//                 <Typography gutterBottom variant="body3">
//                 Remote
//                 </Typography>
//                 <button className='w-28 bg-blue-500 text-lg text-white font-bold py-3 rounded-full'>Apply</button>
//                 </Stack>
//                 <Stack direction="row" spacing={1}>
//                 <Chip label="Javascript" size="small" />
//                 <Chip label="React" size="small" />
//                 <Chip label="Nodejs" size="small" />
//                 </Stack>
//             </Box>
//             <Divider/><Divider/><Divider/>
//         </Card>
//     </div>
//   );
// }
