// Map с лимитами: ключ - символ, значение - максимальное количество
// Map с лимитами: весь английский алфавит (A-Z: 3, a-z: 5)
const limits = new Map([
    // Заглавные (максимум 3)
    ['A', 3], ['B', 3], ['C', 3], ['D', 3], ['E', 3],
    ['F', 3], ['G', 3], ['H', 3], ['I', 3], ['J', 3],
    ['K', 3], ['L', 3], ['M', 3], ['N', 3], ['O', 3],
    ['P', 3], ['Q', 3], ['R', 3], ['S', 3], ['T', 3],
    ['U', 3], ['V', 3], ['W', 3], ['X', 3], ['Y', 3], ['Z', 3],
    // Строчные (максимум 5)
    ['a', 6], ['b', 5], ['c', 5], ['d', 5], ['e', 6],
    ['f', 5], ['g', 5], ['h', 5], ['i', 6], ['j', 5],
    ['k', 5], ['l', 5], ['m', 5], ['n', 5], ['o', 6],
    ['p', 5], ['q', 5], ['r', 5], ['s', 5], ['t', 5],
    ['u', 6], ['v', 5], ['w', 5], ['x', 5], ['y', 5], ['z', 5],

    [',', 5], ['.',6], [':',1],[';',1],['_',1],[' ', 6]
]);


const inputField = document.getElementById('inputField');
const output = document.getElementById('output');

inputField.addEventListener('input', function() {
    const text = this.value.trim();
    const totalLength = text.length;

    if (totalLength === 0) {
        output.innerHTML = 'Введите текст для проверки.';
        return;
    }

    // Подсчет частоты каждого символа
    const charCount = {};
    for (let char of text) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Проверка ВСЕХ символов из введенной строки
    let errors = [];

    for (let [char, count] of Object.entries(charCount)) {
        if (!limits.has(char)) {
            errors.push(`${char}: неизвестный символ`);
        } else {
            const maxCount = limits.get(char);
            if (count > maxCount) {
                errors.push(`${char}: ${count} > ${maxCount}`);
            }
        }
    }

    // Формирование вывода
    let resultHtml = `<strong>Общее количество символов:</strong> ${totalLength}<br><br>`;

    if (errors.length > 0) {
        resultHtml += '<span class="error">Ошибки:</span><br>';
        resultHtml += errors.map(e => `• ${e}`).join('<br>');
    } else {
        resultHtml += '<span class="ok">Все символы известны и в пределах лимитов!</span>';
    }

    output.innerHTML = resultHtml;
});


// Функция для вывода всех лимитов ИЗ MAP
function showLimits() {
    let limitsHtml = '<div class="limits"><strong>Все лимиты из Map:</strong><br>';

    // Итерируем по ВСЕМ записям в Map limits
    for (let [char, maxCount] of limits) {
        limitsHtml += `${char}: ${maxCount} | `;
    }

    // Убираем последний " | " и закрываем div
    limitsHtml = limitsHtml.slice(0, -3) + '</div>';

    output.innerHTML = limitsHtml;
}
