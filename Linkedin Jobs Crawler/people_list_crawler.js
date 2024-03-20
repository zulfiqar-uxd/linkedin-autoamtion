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
