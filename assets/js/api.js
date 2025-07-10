
async function fetchProfileData() {
    const url = 'https://avatars.githubusercontent.com/u/113949760?s=400&u=c7ae15aacb16397dac6b124713fe838cb0aac40d&v=4;'
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
