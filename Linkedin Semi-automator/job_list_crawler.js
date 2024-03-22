/* The below script requires frequent selector checkups, as linkedin keeps updating their layouts */

// STEP 1: SEARCH YOUR DESIRED JOB ON LINKEDIN
// STEP 2: SCROLL UNTIL THE LAST JOB ON THE LIST, SO THAT ALL JOBS GET RENDERED ON THE BROWSER
// STEP 3: COPY AND RUN THE BELOW SCRIPT IN YOUR BROWSER CONSOLE

let jobs_lists_selector = document.querySelectorAll('.scaffold-layout__list-container > li');
let jobData = [];

function processJobs(i) {
    if (i < jobs_lists_selector.length) {
        console.log(`${i} out of ${jobs_lists_selector.length}`);

        jobs_lists_selector[i].querySelector('div > div').click();

        let job_company_name = document.querySelector('.jobs-unified-top-card .app-aware-link').innerText;
        let job_company_link = document.querySelector('.jobs-unified-top-card .app-aware-link').href;

        let job_title = document.querySelector('.job-details-jobs-unified-top-card__job-title').innerText;
        let job_link = document.querySelector('.job-details-jobs-unified-top-card__job-title > a').href.split('?')[0];
        
        jobData.push({
            company: job_company_name,
            profile: job_company_link,
            title: job_title,
            link: job_link
        });

        i++;
        setTimeout(() => processJobs(i), 1000);
    } else {
        console.log(`Completed processing ${jobs_lists_selector.length} jobs.`);
        console.log(JSON.stringify(jobData, null, 2));
    }
}

processJobs(0);

// STEP 4: COPY THE JSON OBJECT FROM THE CONSOLE AND PASTE IT ON ANY EDITOR
// STEP 5: REPEAT THE SAME FOR ALL THE PAGES OF THE JOB (Note: remove the ending [] brackets of adjacent json objects)
// STEP 6: COPY THE JSON ARRAY AND PROCEED TO "job_list_modifier.js" SCRIPT
