module.exports = {
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "env": {
        "node": true,
        "browser": true,
        "es6": true
    },
    "rules": {
        "comma-dangle": "off",
        "linebreak-style": "off",
        "indent": "off",
        "no-unused-vars": ["error", {
            "vars": "local",
            "args": "none"
        }],
        "no-console": "off"
    }

};