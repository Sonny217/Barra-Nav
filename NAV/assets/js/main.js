///SHOW MENU///
const showMenu =(toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);
    toggle.addEventListener('click',() =>{
        //Add show-menu class to nav menu//
        nav.classList.toggle('show-menu')
        /// Add show-icon to show and hide the menu icon///
        toggle.classList.toggle('show-icon')
    })
}
 showMenu('nav-toggle','nav-menu')

/// SHOW DROPDOWN MENU ///
const dropdownItem = document.querySelectorAll('.dropdown__item')

// 1-Select each dropdown item
dropdownItem.forEach((item) => {
    const dropdownButton = item.querySelector('.dropdown__button')
    
    // 2-Select each button click
    dropdownButton.addEventListener('click', () => {
       
        // 7-Select the current show-dropdown class
        const showDropdown = document.querySelector('.show-dropdown')

        // 5-Call teh toggleItem function
        toggleItem(item)

        // 8-Remove the show-dropdown class from the items
        if(showDropdown && showDropdown!= item){
            toggleItem(showDropdown)
        }
    })
})
// 3- Create a function to display teh dropdown
const toggleItem = (item) => {

    // 3.1- Select each dropdown content
    const dropdownContainer = item.querySelector('.dropdown__container')
    
    // 6-If the same contains the show-dropdown class, remove
    if(item.classList.contains('show-dropdown')){
        dropdownContainer.removeAttribute('style')
        item.classList.remove('show-dropdown')
    } else {

      // 4. Add the maximun height to the dropdown content and add the show-dropdown class
       dropdownContainer.style.height =dropdownContainer.scrollHeight + 'px'
       item.classList.add('show-dropdown')
    }
}
/// ==== DELETE DROPDOWN STYLES ==== ///
const mediaQuery = matchMedia('(min-width: 1120px)'),
    dropdownContainer = document.querySelectorAll('.dropdown-container')

/// ==== Funtion to remove dropdown styles in mobile mode when brower resizes ==== ///
const removeStyle = () => {
    //validate if the query reaches 1120px
    if(mediaQuery.matches){
        // Remove the dropdown container height styles
        dropdownContainer.forEach((e) => {
            e.removeAttribute('style');
        })
        // Remove the show-dropdown class from dropdown item
        dropdownItem.forEach((e) => {
            e.classList.remove('show-dropdown')
        })
    }
}

addEventListener('resize', removeStyle)