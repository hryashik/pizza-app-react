// Проверка на наличие такого элемента в массиве

type randomArr = [
	title: string,
	size: number,
	type: string
]

type arrType = {
	title: string
	size: number
	type: string
	count: number
}[]

export function useFindCopy(arr: arrType, [title, size, type]: randomArr) {
	return arr.find(obj => obj.title === title && obj.size === size && obj.type === type)
}