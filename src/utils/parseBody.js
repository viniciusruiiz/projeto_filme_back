export default (body) => {
    try {
        return typeof body === 'string' ? JSON.parse(body) : body;
    } catch {
        return body;
    }
}