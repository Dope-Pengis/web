const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    theme: {
        extend: {
            fontFamily: {
                'Inter': ['Inter', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                skyblue: '#4cc9f0',
                eyellow: '#fdec87',
                egray: '#d4edee',
                egfont: '#414042',
                efont: '#fff',
                ebtn: '#ebdd6e',
            },
            boxShadow: {
                //'neumorphic-circle': '41px 41px 82px #d9d9d9, -41px -41px 82px #ffffff',
                'neumorphic-circle': '28px 28px 50px rgba(13, 39, 80, 0.16), -23px -23px 45px rgba(255, 255, 255, 1)',
            }
        }
    }
}