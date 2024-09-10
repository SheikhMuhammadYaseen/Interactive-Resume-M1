var toggleSkillsButton = document.getElementById("toggleAll");
var sections = ["education", "skills", "work-experience"];
toggleSkillsButton.addEventListener("click", function () {
    sections.forEach(function (sectionId) {
        var section = document.getElementById(sectionId);
        if (section) {
            if (section.style.display === "none" || section.style.display === "") {
                section.style.display = "block";
            }
            else {
                section.style.display = "none";
            }
        }
    });
});
