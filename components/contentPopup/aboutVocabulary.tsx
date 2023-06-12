import React from "react";
import { Form, Formik, FastField } from "formik";
import { TextField } from '@/components/common/Form/input-field';

const AboutVocabulary = () => {
  return (
    <div>
      <Formik initialValues={{ vocabularyNumber: "" }} onSubmit={() => {}}>
        {(formik) => {
          return <div className="">
            <div className="">ban muon hoc bao nhieu tu</div>
            <FastField
            component={TextField}
            placeholder="ban muon hoc bn tu"
            {...formik.getFieldProps("vocabularyNumber")}
            required
            multiline
          />
          <div className="">
            <button>ok</button>
          </div>
          </div>;
        }}
      </Formik>
    </div>
  );
};

export default AboutVocabulary;
