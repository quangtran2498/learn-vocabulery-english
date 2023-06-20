"use client";

import { TextField } from "@/components/common/Form/input-field";
import { store } from "@/redux";
import { setDataVocabuleryCustom } from "@/redux/slice/vocabulery";
import { makeStyles } from "@mui/styles";
import { FastField, Form, Formik, FieldArray, Field } from "formik";
import { useRouter } from "next/navigation";
import React from "react";
import AddIcon from "@mui/icons-material/Add";

const useStyles = makeStyles((theme) => {
  return {
    rootPage: {
      marginTop: "30px",
      padding: "0 24px",
    },
    input: {
      // width: "48%",
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
    contianerCoupleInput: {},
    rootItemVocabulary: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    rootInput: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    rootNumber: {
      width: "30px",
      height: "30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      border: "1px solid",
    },
    rootAdd: {
      display: "flex",
      justifyContent: "flex-end",
      marginBottom: "24px",
    },
    contentAdd: {
      width: "48px",
      height: "48px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      border: "1px solid",
    },
    removeItem: {
      width: "30px",
      height: "30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "4px",
      border: "1px solid",
    },
    rootHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    widthIndex: {
      width: "10%",
    },
    widthInput: {
      width: "35%",
    },
    widthRemove: {
      width: "10%",
    },
  };
});

const VocabularyCustomClient = () => {
  const router = useRouter();
  const vocabuleryNumber = store.getState().learnVocabulery.vocabuleryNumber;
  const genInitialValue = () => {
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
    <div className={classes.rootPage}>
      <Formik initialValues={genInitialValue()} onSubmit={() => {}}>
        {(formik) => {
          console.log(formik.values, "34543543");
          const nextPractive = () => {
            router.push(`/vocabulery/practive`);
            //@ts-ignore
            store.dispatch(setDataVocabuleryCustom(formik.values?.answers));
          };

          return (
            <Form>
              <FieldArray
                name="answers"
                render={({ push, remove }) => (
                  <div className="">
                    <div
                      className={classes.rootAdd}
                      onClick={() => push({ vocabulary: "", mean: "" })}
                    >
                      <div className={classes.contentAdd}>
                        <AddIcon sx={{ fontSize: "30px" }} />
                      </div>
                    </div>
                    <div className={classes.rootHeader}>
                      <div className={`${classes.widthIndex}`}>stt</div>
                      <div className={`${classes.widthInput}`}>tu vung</div>
                      <div className={`${classes.widthInput}`}>nghia</div>
                      <div className={`${classes.widthRemove}`}>xoa</div>
                    </div>
                    <div className={classes.contianerCoupleInput}>
                      {Array(formik.values.answers.length)
                        .fill(0)
                        .map((item, index) => {
                          return (
                            <div
                              key={index}
                              className={classes.rootItemVocabulary}
                            >
                             
                              <div className={classes.widthIndex}>
                              <div
                                className={`${classes.rootNumber}`}
                              >
                                {index}
                              </div>
                              </div>
                              <div
                                className={`${classes.input} ${classes.widthInput}`}
                              >
                                <div>
                                  <FastField
                                    component={TextField}
                                    placeholder="dien vao day"
                                    {...formik.getFieldProps(
                                      `answers[${index}].vocabulary`
                                    )}
                                  />
                                </div>
                              </div>
                              <div
                                className={`${classes.input} ${classes.widthInput}`}
                              >
                                <div>
                                  <FastField
                                    component={TextField}
                                    placeholder="dien vao day"
                                    {...formik.getFieldProps(
                                      `answers[${index}].mean`
                                    )}
                                  />
                                </div>
                              </div>
                              <div className={classes.widthRemove}>
                              <div
                                className={classes.removeItem}
                                onClick={() => remove(index)}
                              >
                                x
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
                )}
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default VocabularyCustomClient;
