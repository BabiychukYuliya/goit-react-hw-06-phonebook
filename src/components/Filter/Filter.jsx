import PropTypes from 'prop-types';
import { Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { onChangeFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  return (
    <label>
      Find contacts by name
      <Input
        value={filter}
        onChange={evt => dispatch(onChangeFilter(evt.target.value))}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func,
};
