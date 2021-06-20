export default function AddApplication() {
  return (
    <>
      <h1>Add Application</h1>
      <div>
        <form>
          <label htmlFor="job-title">Job Title</label>
          <input id="job-title" type="text" />
          <label htmlFor="description">Job Description</label>
          <textarea name="description" id="description" cols="30" rows="10" />
          <label htmlFor="country">Country</label>
          <input id="country" type="text" />
          <label htmlFor="city">City</label>
          <input id="city" type="text" />
          <label htmlFor="company-name">Company</label>
          <input id="company-name" type="text" />
          <label htmlFor="company-size">Company Size</label>
          <input id="company-size" type="text" />
          <label htmlFor="company-url">Company URL</label>
          <input id="company-url" type="text" />
          <label htmlFor="experience-level">Experience Level</label>
          <select name="experience-level" id="experience-level">
            <option value="associate">Associate</option>
            <option value="junior">Junior</option>
            <option value="experienced">Experienced</option>
            <option value="senior">Senior</option>
            <option value="lead">Lead</option>
          </select>
          <label htmlFor="requirements">Requirements</label>
          <textarea name="requirements" id="requirements" cols="30" rows="10" />
          <label htmlFor="submitted-date">Date Submitted</label>
          <input id="submitted-date" type="date" />
          <label htmlFor="submitted-at">Submitted At</label>
          <input id="submitted-at" type="text" />
          <label htmlFor="posting-url">Job Posting URL</label>
          <input id="posting-url" type="text" />
          <label htmlFor="is-remote">Is Remote?</label>
          <input type="checkbox" id="is-remote" />
        </form>
      </div>
    </>
  );
}
