import TextInput from './form/TextInput';
import TextArea from './form/TextArea';
import Select from './form/Select';
import DatePicker from './form/DatePicker';
import Checkbox from './form/Checkbox';

export default function JobApplicationForm() {
  const experienceOptions = [
    {
      value: 'associate',
      text: 'Associate',
    },
    {
      value: 'junior',
      text: 'Junior',
    },
    {
      value: 'experienced',
      text: 'Experienced',
    },
    {
      value: 'senior',
      text: 'Senior',
    },
    {
      value: 'lead',
      text: 'Lead',
    },
  ];
  return (
    <form>
      <TextInput identifier="job-title">Job Title</TextInput>
      <TextArea identifier="description" cols="30" rows="10">
        Job Description
      </TextArea>
      <TextInput identifier="country">Country</TextInput>
      <TextInput identifier="city">City</TextInput>
      <TextInput identifier="company-name">Company</TextInput>
      <TextInput identifier="company-size">Company Size</TextInput>
      <TextInput identifier="company-url">Company URL</TextInput>
      <Select identifier="experience-level" options={experienceOptions}>
        Experience Level
      </Select>
      <TextArea identifier="requirements" cols="30" rows="10">
        Requirements
      </TextArea>
      <DatePicker identifier="submitted-date">Date Submitted</DatePicker>
      <TextInput identifier="submitted-at">Submitted At</TextInput>
      <TextInput identifier="posting-url">Job Posting URL</TextInput>
      <Checkbox identifier="is-remote">Is Remote?</Checkbox>
    </form>
  );
}
