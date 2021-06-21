import general from './form.module.css';

export default function Select({ identifier, options, children }) {
  const returnedOptions = options.map((experience) => (
    <option key={experience.value} value={experience.value}>
      {experience.text}
    </option>
  ));
  return (
    <div className={general['form-element-container']}>
      <label htmlFor={identifier}>{children}</label>
      <select name={identifier} id={identifier}>
        {returnedOptions}
      </select>
    </div>
  );
}
