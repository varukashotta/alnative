
const objectChecker = (param: any) => {
    return typeof param === 'object' && param !== null;
};

const truncate = (text: string, length: number = 20) => {
    return text.substring(0, length) + '...';
};

const urlChecker = (str: string) => {
    const pattern = new RegExp(
        '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
        'i',
    ); // fragment locator
    return !!pattern.test(str);
};

export {
    objectChecker,
    truncate,
    urlChecker,
};
