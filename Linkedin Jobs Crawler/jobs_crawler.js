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
