"use client";
import { makeStyles } from "@mui/styles";
import { useRouter } from "next/navigation";

const useStyles = makeStyles((theme) => {
  return {
    popupRoot: {
      background: "rgba(0, 0, 0, 0.6)",
      position: "fixed",
      width: "100%",
      height: "100vh",
      ...theme.custom?.flexBox.flexCenterCenter,
      zIndex: 99999999,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    popupContent: {
      background: theme.custom?.background.white,
      borderRadius: "16px",
      padding: "16px 16px",
      width: "100%",
      margin: "0 16px",
      maxWidth: "400px",
    },
  };
});

import React from "react";
import { FastField, Form, Formik } from "formik";
import { TextField } from "@/components/common/Form/input-field";
import { setVocabuleryNumber } from "@/redux/slice/vocabulery";
import { store } from "@/redux";

const VocabularyNumber = () => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <div>
      <div className={classes.popupRoot}>
        <div className={classes.popupContent}>
          <Formik initialValues={{ number: 0 }} onSubmit={(value) => {store.dispatch(setVocabuleryNumber(value.number));router.push(`/vocabulery`);}}>
            {(formik) => {
              return (
                <Form>
                  <div className="">ban muon hoc bao nhieu tu</div>
                  <FastField
                    component={TextField}
                    placeholder="ban muon hoc bn tu"
                    {...formik.getFieldProps("number")}
                    type={"number"}
                  />
                  <div className="">
                    <button onClick={() => formik.handleSubmit()}>ok</button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default VocabularyNumber;
