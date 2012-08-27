function isJSON(value) {
    try {
        JSON.parse(value);
        return true;
    } catch (ex) {
        return false;
    }
}