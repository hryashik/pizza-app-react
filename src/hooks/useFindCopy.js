// Проверка на наличие такого элемента в массиве
export function useFindCopy(arr, [title, size, type]) {
	return arr.find(obj => obj.title === title && obj.size === size && obj.type === type)
}