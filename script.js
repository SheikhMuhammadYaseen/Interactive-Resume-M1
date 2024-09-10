var toggleAllButton = document.getElementById("toggleAll");
var sectionsToToggle = ["skills", "education", "work-experience"];
toggleAllButton.addEventListener("click", function () {
    var areSectionsHidden = false;
    sectionsToToggle.forEach(function (sectionId) {
        var section = document.getElementById(sectionId);
        if (section && (section.style.display === "none" || section.style.display === "")) {
            areSectionsHidden = true;
        }
    });
    sectionsToToggle.forEach(function (sectionId) {
        var section = document.getElementById(sectionId);
        if (section) {
            section.style.display = areSectionsHidden ? "block" : "none";
        }
    });
    toggleAllButton.textContent = areSectionsHidden ? "Hide All Sections" : "Show All Sections";
});
