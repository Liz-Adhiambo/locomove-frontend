const BASE_URL = 'http://localhost:8000';

async function fetchApi(url: string) {
    url = BASE_URL + url;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function fetchApiPost(url: string, data: any, headers: any) {
    url = BASE_URL + url;

    // check if content-type is in headers
    // if not, add it
    if (!headers['Content-Type']) {
        headers['Content-Type'] = 'application/json';
        data = JSON.stringify(data);
    }
    const response = await fetch(url, {
        method: 'POST',
        body: data,
        headers: headers
    });
    const dataResponse = await response.json();
    return dataResponse;
}


export { fetchApi, fetchApiPost };
