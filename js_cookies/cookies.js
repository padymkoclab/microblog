/**
 * Does not working on Chrome as local page, use Firefox for it
 */


class Cookies {

    constructor() {
        this.$div_list_cookies = document.getElementById('list_cookies');
        this.$div_errors = document.getElementById('errors');
    }

    addCookie(name, value) {
        this.$div_errors.innerHTML = '';

        const valueEscaped = escape(value);

        const errors = this.validateNewCookie(name, valueEscaped);

        const totalCountErrors = errors.name.length + errors.value.length;

        if (totalCountErrors > 0) {
            this.displayErrors(errors);
            return false;
        }

        document.cookie = `${name}=${valueEscaped};`;
        return true;
    }

    updateDisplayCookies() {
        this.$div_list_cookies.innerHTML = '';

        const cookies = document.cookie
            .split(';')
            .map(el => el.split('='));

        for (let i = cookies.length - 1; i >= 0; i -= 1) {
            const el = document.createElement('p');
            const cookie = cookies[i].join('=');
            el.innerHTML = cookie;
            this.$div_list_cookies.appendChild(el);
        }
    }

    clearCookies() {
        document.cookie
            .split(';')
            .forEach((el) => {
                let name;
                let value;
                [name, value] = el.split('=');
                const expiresDate = new Date(0).toString();
                value = `${value};expires=${expiresDate};`;
                document.cookie = `${name}=${value}`;
            });

        this.updateDisplayCookies();
    }

    validateNewCookie(name, value) {
        const errors = {
            name: [],
            value: [],
        };

        if (name === '') {
            errors.name.push('Name can not be blank');
        }

        if (value === '') {
            errors.value.push('Value can not be blank');
        }

        return errors;
    }

    displayErrors(errors) {
        for (let i = 0; i < errors.name.length; i += 1) {
            const el = document.createElement('p');
            el.innerHTML = errors.name[i];
            this.$div_errors.appendChild(el);
        }

        for (let i = 0; i < errors.value.length; i += 1) {
            const el = document.createElement('p');
            el.innerHTML = errors.value[i];
            this.$div_errors.appendChild(el);
        }
    }

}


const cookies = new Cookies();

const $formAddCookie = document.getElementById('form_add_cookie');
const $newCookieName = document.getElementById('input_cookie_name');
const $newCookieValue = document.getElementById('input_cookie_value');

$formAddCookie.addEventListener('submit', (event) => {
    event.preventDefault();

    const status = cookies.addCookie($newCookieName.value, $newCookieValue.value);

    if (status === true) {
        $formAddCookie.reset();
        cookies.updateDisplayCookies();
    }
});

const btnClearCookies = document.getElementById('btn_clear_cookies');
btnClearCookies.addEventListener('click', (event) => {
    cookies.clearCookies();
});

cookies.updateDisplayCookies();
