function generateReadme() {
    const name = document.getElementById('name').value;
    const bio = document.getElementById('bio').value;
    const location = document.getElementById('location').value;
    const contact = document.getElementById('contact').value;
    const skills = Array.from(document.getElementById('skills').selectedOptions).map(option => option.text);
    const github = document.getElementById('github').value;
    const linkedin = document.getElementById('linkedin').value;
    const twitter = document.getElementById('twitter').value;

    let socialLinks = '';
    if (github) socialLinks += `[![GitHub](assets/icons/github.svg)](${github}) `;
    if (linkedin) socialLinks += `[![LinkedIn](assets/icons/linkedin.svg)](${linkedin}) `;
    if (twitter) socialLinks += `[![Twitter](assets/icons/twitter.svg)](${twitter}) `;

    const readmeContent = `
# ${name}

## Bio
${bio}

## Location
${location}

## Contact
[${contact}](mailto:${contact})

## Skills
${skills.join(', ')}

## Social Links
${socialLinks}
`;

    document.getElementById('readme-output').textContent = readmeContent;
}
