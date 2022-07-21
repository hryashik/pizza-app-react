import { useMemo } from 'react';

// Типы price и rating - числа. Для сортировки чисел используется иной алгоритм a + b или a - b.
// Сортировка строк идет через localeCompare, поэтому здесь использую свитч, чтобы определить правильный алгоритм

const useSort = (array, selectedSort) =>
	useMemo(() => {
		switch (selectedSort.name) {
			case 'Цене (Возрастание)':
				return [...array].sort(
					(a, b) => a[selectedSort.value] - b[selectedSort.value]
				);
			case 'Цене (Убывание)':
				return [...array].sort(
					(a, b) => b[selectedSort.value] - a[selectedSort.value]
				);
			case 'Популярности':
				return [...array].sort(
					(a, b) => a[selectedSort.value] - b[selectedSort.value]
				);
			case 'По названию (А-Я)':
				return [...array].sort((a, b) =>
					a[selectedSort.value].localeCompare(b[selectedSort.value])
				);
			default:
				return array;
		}
	}, [selectedSort, array]);

export { useSort };
