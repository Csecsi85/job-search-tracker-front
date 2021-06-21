import general from './form.module.css';

export default function Checkbox({ identifier, children }) {
  return (
    <div className={general['form-element-container']}>
      <label htmlFor={identifier}>{children}</label>
      <input type="checkbox" id={identifier} />
    </div>
  );
}
