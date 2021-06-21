import general from './form.module.css';

export default function DatePicker({ identifier, children }) {
  return (
    <div className={general['form-element-container']}>
      <label htmlFor={identifier}>{children}</label>
      <input id={identifier} type="date" />
    </div>
  );
}
