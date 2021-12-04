const getAllURLs = () => {
    const result = [];
    document.querySelectorAll('a').forEach(a => {
        a.href && result.push(a.href);
    })
    document.querySelectorAll('link').forEach(link => {
        link.href && result.push(link.href);
    })
    return result
}

const createPromise = (url) => {
    return new Promise((resolve) => {
        fetch(url).then(res => {
            if (res.status === 200) {
                resolve({success: true, url: url});
            } else {
                resolve({success: false, url: url, error: new Error(`${res.status} ${res.statusText}`)})
            }
        }).catch(error => {
            resolve({success: false, url: url, error: new Error(error.message)})
        })
    })
}
const main = async () => {
    try {
        const urls = getAllURLs();
        const results = await Promise.all(urls.map(url => createPromise(url)));
        return results.filter(result => result.success).map(result => result.url)
    } catch (error) {
        console.log(error);
    }
}
