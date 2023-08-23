import { useState } from 'react';
import { USER_FORMS } from '../constants/userForms';
import { useFilters } from '../lib/hooks/useFilters';
import { useUsers } from '../lib/hooks/useUsers';
import style from './UsersList.module.css';
import UsersListFilters from './UsersListFilters';
import UsersListPagination from './UsersListPagination';
import UsersListRows from './UsersListRows';
import Button from './buttons/Button';
import UserCreateForm from './user-forms/userCreateForm';

const UsersList = () => {
  const { currentForm, setFiltersForm, setCreateForm } = useForm();

  const {
    filters,
    setSearch,
    setOnlyActive,
    setSortBy,
    setPage,
    setItemsPerPage,
  } = useFilters();

  const { users, totalPages, error, loading } = useUsers(filters);
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Listado de usuarios</h1>

      {currentForm === USER_FORMS.FILTERS ? (
        <UsersListFilters
          search={filters.search}
          onlyActive={filters.onlyActive}
          sortBy={filters.sortBy}
          setSearch={setSearch}
          setOnlyActive={setOnlyActive}
          setSortBy={setSortBy}
          slot={<Button onClick={setCreateForm}>Añadir usuario</Button>}
        />
      ) : (
        <UserCreateForm onClose={setFiltersForm} />
      )}
      <UsersListRows users={users} error={error} loading={loading} />
      <UsersListPagination
        page={filters.page}
        itemsPerPage={filters.itemsPerPage}
        setPage={setPage}
        setItemsPerPage={setItemsPerPage}
        totalPages={totalPages}
      />
    </div>
  );
};

function useForm() {
  const [currentForm, setCurrentForm] = useState(USER_FORMS.FILTERS);

  function setFiltersForm() {
    setCurrentForm(USER_FORMS.FILTERS);
  }
  function setCreateForm() {
    setCurrentForm(USER_FORMS.CREATE);
  }
  function setEditForm() {
    setCurrentForm(USER_FORMS.EDIT);
  }
  function setDeleteForm() {
    setCurrentForm(USER_FORMS.DELETE);
  }

  return {
    currentForm,
    setFiltersForm,
    setCreateForm,
    setEditForm,
    setDeleteForm,
  };
}

export default UsersList;
