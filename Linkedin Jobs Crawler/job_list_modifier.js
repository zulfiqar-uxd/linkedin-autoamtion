// STEP 8: PASTE THE ARRAY BELOW AND RUN THE SCRIPT ('node job_list_modifier.js')
let jobListings = [/* Paste the job list array here */];

let groupedJobs = jobListings.reduce((acc, job) => {
    if (!acc[job.company]) {
        acc[job.company] = {
            company: job.company,
            profile: job.profile,
            jobs: [],
            people: []
        };
    }

    let isDuplicate = acc[job.company].jobs.some(existingJob => existingJob.link === job.link);
    if (!isDuplicate) {
        acc[job.company].jobs.push({
            title: job.title,
            link: job.link
        });
    }

    return acc;
}, {});

let groupedJobsArray = Object.values(groupedJobs);

console.log(JSON.stringify(groupedJobsArray, null, 2));

// STEP 9: COPY THE RESULT ARRAY INTO AN EDITOR AND PROCEED TO "ABC.JS"
