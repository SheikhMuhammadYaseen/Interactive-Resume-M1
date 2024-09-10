
const toggleSkillsButton = document.getElementById("toggleAll") as HTMLButtonElement;
const sections = ["education", "skills", "work-experience"];

toggleSkillsButton.addEventListener("click", () => {
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId) as HTMLElement;
        
        if (section) {
            if (section.style.display === "none" || section.style.display === "") {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        }
    });
});
