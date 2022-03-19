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
                darkpengiblue: '#2570FF'
            },
            boxShadow: {
                //'neumorphic-circle': '41px 41px 82px #d9d9d9, -41px -41px 82px #ffffff',
                'neumorphic-circle': '28px 28px 50px rgba(13, 39, 80, 0.16), -23px -23px 45px rgba(255, 255, 255, 1)',
                'neumorphic-circle-inset': 'inset -31px -31px 43px rgba(255,255,255,0.64), inset 26px 26px 48px rgba(13, 39, 80,0.16)',
                'water-fog': '0px 0px 32px 15px rgba(0, 91, 255, 1)'
            },
            keyframes: {
                floating: {
                    '0%, 100%': {
                        transform: 'translate(0px)'
                    },

                    '30%': {
                        transform: 'translate(0, -10px)'
                    },
                    '50%': {
                        transform: 'translate(0, 4px)'
                    },
                    '70%': {
                        transform: 'translate(0, -15px)'
                    },
                }
            },
            animation: {
                float: 'floating 16s infinite ease reverse'
            }
        }
    }
}