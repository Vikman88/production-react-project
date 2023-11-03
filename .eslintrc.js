module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            },
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "semi": "off",
        "@typescript-eslint/semi": "off",
        "no-unused-vars": "warn",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "react/no-deprecated" : "off",
        "no-return-await": "off",
        "@typescript-eslint/return-await": "error",
        "@typescript-eslint/explicit-function-return-type": "off",
        "no-return-await": "off",
        "@typescript-eslint/return-await": "off",
        "@typescript-eslint/promise-function-async": "off",
        "@typescript-eslint/naming-convention": "off"
    }
}
