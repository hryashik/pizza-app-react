import { useMemo } from 'react';

// Типы price и rating - числа. Для сортировки чисел используется иной алгоритм a + b или a - b.
// Сортировка строк идет через localeCompare, поэтому здесь использую свитч, чтобы определить правильный алгоритм

export const useSort = (array, sortType) =>
	useMemo(() => {
		switch (sortType) {
			case 'price':
				return [...array].sort((a, b) => a[sortType] - b[sortType]);
			case 'rating':
				return [...array].sort((a, b) => a[sortType] - b[sortType]);
			case 'title':
				return [...array].sort((a, b) =>
					a[sortType].localeCompare(b[sortType])
				);
			default:
				return array;
		}
	}, [sortType, array]);
