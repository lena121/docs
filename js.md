
# Javascript functions

Определение функций:
* через объявление функций
* через функциональные выражения

С объявлением функция создается и подготавливается *до обработки остального кода*. С функциональным выражением функция создается при выполнении кода, *на стадии выполнения*.


#### Функции как первоклассные значения

Независимо от способа определения функции, в итоге получается ссылка на эту фукнцию, которую 
* можно присваивать другой переменной 
* можно передавать как аргумент в другую фукнцию
* может быть возвращаемым значением из фукнции.

### Аномимные функции

Анонимными называются функции, которые определяются без имени, напр. как в функция в setTimeout-e или как функция-обработчик на какое-то событие.

Так как в результате обработки фукнционального выражения получается ссылка на функцию, ямогу подставить функциональное выражение в любом месте, где должна находится ссылка.
Если ваш код ожидает получить ссылку на функцию, вы всегда можете разместить на этом месте функциональное выражение - потому что в результате его вычисления получится ссылка на функцию. Если фукнция должна передаваться в аргументе - то передайте фукнциональное выражение, если фугкция должна возвращаться из функции, ситуация та же - просто верните функциональное выражение.


### Лексическая область действия
Этот термин означает, что для определения области действия переменной достаточно прочитать структуру кода (то есть для ее определения не нужно дожидаться выполнения программы).

### Замыкания
**Замыкание** - это функция вместе с сопупствующим окружением.
В коде тела функции обычно присутствуют локальные переменные (включая все параметры функции), а также могут присутствовать переменные, не определяемые локально, — такие переменные называются свободными.
Замыкание о себе: "Если переменная в теле моей функции не определяется локально и не является глобальной, значит, она получена из функции, в которую вложена моя функция, и доступна в моем окружении."
когда функция определяется внутри другой функции, то при возвращении функции возвращается не только сама функция, но и присоединенное к ней окружение.

Возвращение функции из функции — не единственный способ создания замыканий. Они создаются везде, где появляется ссылка на функцию со свободными переменными, и эта функция выполняется вне контекста, в котором она была создана.








