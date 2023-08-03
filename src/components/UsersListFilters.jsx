import style from './UsersListFilters.module.css';
import InputCheckBox from './forms/InputCheckBox';
import InputSearch from './forms/InputSearch';
import Select from './forms/Select';

const UsersListFilters = ({
  search,
  setSearch,
  onlyActive,
  setOnlyActive,
  sortBy,
  setSortBy,
}) => {
  return (
    <form className={style.form}>
      <div className={style.row}>
        <InputSearch
          placeholder='Buscar...'
          value={search}
          onChange={ev => setSearch(ev.target.value)}
        />
        <Select
          value={sortBy}
          onChange={ev => setSortBy(Number(ev.target.value))}
          className={style.select}
        >
          <option value={0}>Por defecto</option>
          <option value={1}>Por nombre</option>
          <option value={2}>Por rol</option>
          {!onlyActive && <option value={3}>Por activos</option>}
        </Select>
      </div>
      <div className={style.row}>
        <div className={style.active}>
          <InputCheckBox
            checked={onlyActive}
            onChange={ev => setOnlyActive(ev.target.checked)}
            className={style.checkbox}
          />
          <span>Mostrar sólo activos</span>
        </div>
      </div>
    </form>
  );
};

export default UsersListFilters;
