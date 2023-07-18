/*
В JavaScript, `sort()` - это метод, применяемый к массивам, 
который сортирует элементы массива в лексикографическом порядке (по умолчанию) или в соответствии с заданной функцией сравнения.

Пример использования метода `sort()`:

```javascript
const myArray = [5, 2, 9, 1, 3];
myArray.sort();
console.log(myArray);
```

Вывод:
```
[1, 2, 3, 5, 9]
```

Метод `sort()` изменяет сам массив, переупорядочивая его элементы.
Если вы хотите создать отсортированную копию массива, не изменяя исходный массив, можно использовать функцию `slice()` для создания копии, 
а затем применить `sort()`:

```javascript
const myArray = [5, 2, 9, 1, 3];
const sortedArray = myArray.slice().sort();
console.log(sortedArray);
```

Вывод:
```
[1, 2, 3, 5, 9]
```

Обратите внимание, что по умолчанию `sort()` сортирует элементы массива как строки. 
Если вам нужна более сложная логика сортировки, вы можете передать функцию сравнения в `sort()`. 
Эта функция принимает два аргумента и должна вернуть отрицательное число, если первый аргумент должен быть перед вторым, 
положительное число, если второй аргумент должен быть перед первым, или ноль, если порядок не важен.

```javascript
const myArray = [5, 2, 9, 1, 3];
myArray.sort((a, b) => a - b);
console.log(myArray);
```

Вывод:
```
[1, 2, 3, 5, 9]
```

В этом примере функция сравнения `(a, b) => a - b` сортирует числа в порядке возрастания.
*/