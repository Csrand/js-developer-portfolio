
async function fetchProfileData() {
    const url = 'https://github.com/Csrand/js-developer-portfolio/blob/main/assets/img/me.jpeg?raw=true'
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
