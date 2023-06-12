"use client";

import { TextField } from "@/components/common/Form/input-field";
import { store } from "@/redux";
import { setName } from "@/redux/slice/infoUser";
import { setDataVocabuleryCustom } from "@/redux/slice/vocabulery";
import { makeStyles } from "@mui/styles";
import { FastField, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import React from "react";

const useStyles = makeStyles((theme) => {
  return {
    test: {
      color: theme.custom?.text.pinkSubTitle,
    },
    input: {
      width: "48%",
    },
    textTitle: {
      marginRight: "30px",
    },
    btn: {
      padding: "10px 50px",
      background: "red",
      margin: "0 auto",
      marginTop: "30px",
      width: "fit-content",
      borderRadius: "16px",
      color: "#fff",
    },
    contianerCoupleInput: {
      padding: "20px",
    },
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


const VocabularyCustomClient = () => {
  
  const router = useRouter();
  const vocabuleryNumber = store.getState().learnVocabulery.vocabuleryNumber  
  const genInitialValue = () =>  {

    let inputVocabulary = {
      vocabulary: "",
      mean: "",
    };

    let answers = [];
    for (let i = 0; i < vocabuleryNumber; i++) {
      answers.push(inputVocabulary);
    }
    return { answers };
  };
  
  const classes = useStyles();

  

  return (
    <div>
      <Formik initialValues={genInitialValue()} onSubmit={() => {}}>
        {(formik) => {

          console.log(formik.values,"6456456");

          const nextPractive = () => {
            router.push(`/vocabulery/practive`);
            store.dispatch(setDataVocabuleryCustom(formik.values?.answers))
          };

          return (
            <Form>
              <div className="">
                  <div className="">
                    <div className={classes.contianerCoupleInput}>
                      {Array(vocabuleryNumber)
                        .fill(0)
                        .map((item, index) => {
                          return (
                            <div
                              key={index}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                              }}
                            >
                              <div className={classes.input}>
                                <div
                                  className=""
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <div className={classes.textTitle}>
                                    từ vựng
                                  </div>
                                  <div style={{ width: "80%" }}>
                                    <FastField
                                      component={TextField}
                                      placeholder="dien vao day"
                                      {...formik.getFieldProps(
                                        `answers[${index}].vocabulary`
                                      )}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className={classes.input}>
                                <div
                                  className=""
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <div className={classes.textTitle}>nghĩa</div>
                                  <div style={{ width: "80%" }}>
                                    <FastField
                                      component={TextField}
                                      placeholder="dien vao day"
                                      {...formik.getFieldProps(
                                        `answers[${index}].mean`
                                      )}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                    <div className={classes.btn} onClick={nextPractive}>
                      submit
                    </div>
                  </div>
              
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default VocabularyCustomClient;
