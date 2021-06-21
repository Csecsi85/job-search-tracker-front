import general from './form.module.css';
import classes from './TextInput.module.css';

export default function TextInput({ identifier, children }) {
  return (
    <div className={general['form-element-container']}>
      <label htmlFor={identifier}>{children}</label>
      <input id={identifier} type="text" />
    </div>
  );
}
