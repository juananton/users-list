import { SORT_OPTIONS } from '../constants/sortOptions';
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
  slot,
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
          <option value={SORT_OPTIONS.DEFAULT}>Por defecto</option>
          <option value={SORT_OPTIONS.NAME}>Por nombre</option>
          <option value={SORT_OPTIONS.ROLE}>Por rol</option>
          {!onlyActive && (
            <option value={SORT_OPTIONS.ACTIVE}>Por activos</option>
          )}
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
        {slot}
      </div>
    </form>
  );
};

export default UsersListFilters;
