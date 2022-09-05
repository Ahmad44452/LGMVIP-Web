import React from "react";
import { useFormik } from "formik";

const UserForm = ({ setStudents }) => {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      website: '',
      image: '',
      gender: '',
      skills: []
    },
    onSubmit: (values) => {
      setStudents(prev => [...prev, { ...values }]);
    }
  })

  return (
    <div className="form">
      <form onSubmit={formik.handleSubmit}>
        <div className="form__group">
          <input autoComplete="off" type="text" className="form__input" placeholder="Name" id="name" {...formik.getFieldProps('name')} />
          <label htmlFor="name" className="form__label">Name</label>
        </div>

        <div className="form__group">
          <input autoComplete="off" type="text" className="form__input" placeholder="Email" id="email" {...formik.getFieldProps('email')} />
          <label htmlFor="email" className="form__label">Email</label>
        </div>

        <div className="form__group">
          <input autoComplete="off" type="text" className="form__input" placeholder="Website" id="website" {...formik.getFieldProps('website')} />
          <label htmlFor="website" className="form__label">Website</label>
        </div>

        <div className="form__group">
          <input autoComplete="off" type="text" className="form__input" placeholder="Image Link" id="image" {...formik.getFieldProps('image')} />
          <label htmlFor="image" className="form__label">Image Link</label>
        </div>

        <div className="form__group form__gender">
          <h3 className="form__group--heading">Gender</h3>

          <div className="form__radio">
            <div className="form__radio--group">
              <input type="radio" id="male" name="gender" value="Male" onChange={formik.handleChange} />
              <label htmlFor="male">Male</label>
            </div>

            <div className="form__radio--group">
              <input type="radio" id="female" name="gender" value="Female" onChange={formik.handleChange} />
              <label htmlFor="female">Female</label>
            </div>
          </div>
        </div>

        <div className="form__group form__skills">
          <h3 className="form__group--heading">Skills</h3>

          <div className="form__checkbox">
            <div className="form__checkbox--group">
              <label>
                <input name="skills" type="checkbox" value="Java" onChange={formik.handleChange} />
                Java
              </label>
            </div>

            <div className="form__checkbox--group">
              <label>
                <input name="skills" type="checkbox" value="HTML" onChange={formik.handleChange} />
                HTML
              </label>
            </div>

            <div className="form__checkbox--group">
              <label>
                <input name="skills" type="checkbox" value="CSS" onChange={formik.handleChange} />
                CSS
              </label>
            </div>
          </div>
        </div>

        <div className="form__group">
          <input type="submit" value="Enroll Student" className="form__button form__button--enroll" />
          <input type="button" value="Clear" className="form__button form__button--clear" />
        </div>
      </form>
    </div>
  )
}

export default UserForm;