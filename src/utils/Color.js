
var colors = [
    '#7CA57E','#ACC2B5','#BECED9','#86968D','#CBE4D5', '#aaa', '#DDD',
];


var get_color = (value, sum=undefined, price=0) => {
    if (!sum) return colors[value%7];
    else {
        if (price != 0) {
            const set = ((sum / price).toFixed(1) * 150).toString();
            if (price == -1) {
                return '#EEE';
            }
            return 'rgb(255,' + set + ',' + set + ')';
        }
    }
}
export default get_color;