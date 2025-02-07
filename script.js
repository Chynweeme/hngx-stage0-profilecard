function updateTime() {
    document.getElementById('utc-time').innerText = `UTC Time: ${new Date().toUTCString()}`;
}
updateTime();