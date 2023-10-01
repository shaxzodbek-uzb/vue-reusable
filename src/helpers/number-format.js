import numeral from 'numeral'

export default function (app){
    if (!numeral.locales.uz)
        numeral.register('locale', 'uz', {
            delimiters: {
                thousands: ' ',
                decimal: ','
            },
            abbreviations: {
                thousand: 'K',
                million: 'Mln',
                billion: 'Mlrd',
                trillion: 'Trln'
            },
            ordinal(number) {
                return number === 1 ? 'er' : 'ème';
            },
            currency: {
                symbol: 'so\'m'
            }
        });
    numeral.locale('uz')

    app.config.globalProperties.$numberFormat = {
        money(value) {
            return numeral(value).format()
        },
        dollar(value) {
            return numeral(value).format('0,0.00')
        }
    }
}