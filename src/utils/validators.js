export const dateValidator = (value) => {
    const now = new Date(Date.now());

    const data = value.split('.');
    const day = parseInt(data[0]);
    const mounth = parseInt(data[1]);
    const year = parseInt(data[2]);

    if (data.join('').length < 8) return false;

    if (year > now.getFullYear() || mounth > 12 || day > 31) {
        return false;
    }
    return true;
};

export const alphaValidator = (value) => {
    if (/[^a-zA-Zа-яА-Я\s-]/.test(value)) {
        return false;
    }
    return true;
};

export const phoneCodeValidator = (value) => {
    if (value[0] !== '7') {
        return false;
    }
    return true;
};
