import general from './form.module.css';
import classes from './TextArea.module.css';

export default function TextArea({ identifier, cols, rows, children }) {
  return (
    <div className={general['form-element-container']}>
      <label htmlFor={identifier}>{children}</label>
      <textarea name={identifier} id={identifier} cols={cols} rows={rows} />
    </div>
  );
}
