// STEP 9: OPEN EACH COMAPNY PROFILE LSITED ON THE JSON AND CLICK ON THE CURRENT WORKING PEOPLE'S SECTION
// STEP 10: RUN THE BELOW SCRIPT ON ALL PAGES OD THE PEOPLE LIST (NOTE: GO SLOW, BEWARE OF USAGE LIMITS)

let people_list = document.querySelectorAll('.reusable-search__result-container');
if (typeof staffDetails === 'undefined') {staffDetails = [];}

people_list.forEach(people_card => {
    if (people_card.querySelector('.entity-result__title-text .entity-result__badge svg')) {
        let staff_name = people_card.querySelector('.entity-result__title-text .app-aware-link span span').innerText;
        let staff_profile = people_card.querySelector('.entity-result__title-text .app-aware-link').href.split('?')[0];

        staffDetails.push({
            name: staff_name,
            profile: staff_profile
        });
    }
});

console.log(JSON.stringify(staffDetails, null, 2));

// STEP 11: COPY THE FINAL RESULT WITH ALL PEOPLE INTO THE PEOPLE PART OF THE FIRST ARRAY
// STEP 12: OPEN 'https://crowstacks.com/projects/autojob' AND WORK ON EACH COMPANY/JOB AND MESSAGE EACH PEOPLE LISTED USING THE GENERATED MESSAGE TEMPLATE
