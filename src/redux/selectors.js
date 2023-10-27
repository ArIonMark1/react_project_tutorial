// файл оголошення функцій-селекторів
const getTasks = state => state.tasks;
const getStatusFilter = state => state.filters.status;

export { getTasks, getStatusFilter };
