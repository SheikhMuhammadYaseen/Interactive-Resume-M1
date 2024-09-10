const toggleAllButton = document.getElementById("toggleAll") as HTMLButtonElement;
const sectionsToToggle = ["skills", "education", "work-experience"];

toggleAllButton.addEventListener("click", () => {
    let areSectionsHidden = false;

    sectionsToToggle.forEach(sectionId => {
        const section = document.getElementById(sectionId) as HTMLElement;
        if (section && (section.style.display === "none" || section.style.display === "")) {
            areSectionsHidden = true;
        }
    });

    sectionsToToggle.forEach(sectionId => {
        const section = document.getElementById(sectionId) as HTMLElement;
        if (section) {
            section.style.display = areSectionsHidden ? "block" : "none";
        }
    });

    toggleAllButton.textContent = areSectionsHidden ? "Hide All Sections" : "Show All Sections";
});
