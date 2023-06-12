"use client";

import { TextField } from "@/components/common/Form/input-field";
import { store } from "@/redux";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@mui/styles";
import { FastField, Form, Formik } from "formik";
import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

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
  };
});

const Practive = () => {
  const dataVocablery = store.getState().learnVocabulery.dataVocabuleryCustom;
  const vocabuleryNumber = store.getState().learnVocabulery.vocabuleryNumber;

  const [changeDirection, setChangeDirection] = React.useState("vn");
  const [dataVocabulary, setDataVocabulary] = React.useState(dataVocablery);
  const [showAnswer, setShowAnswer] = React.useState<number | null>(null);

  const classes = useStyles();

  const genInitialValue = () => {
    let inputVocabulary = {
      mean: "",
    };

    let answers = [];
    for (let i = 0; i < vocabuleryNumber; i++) {
      answers.push(inputVocabulary);
    }
    return { answers };
  };

  const hanldeShowAnswer = (index:number) => {
    showAnswer === index ? setShowAnswer(null) : setShowAnswer(index)
  };

  //   function shuffleArray(array:any) {

  //     for (var i = array.length - 1; i > 0; i--) {
  //         // Generate random number
  //         var j = Math.floor(Math.random() * (i + 1));

  //         var temp = array[i];
  //         console.log(temp,"temp");

  //         array[i] = array[j];
  //         array[j] = temp;
  //     }

  //     return array;
  //  }

  return (
    <Formik initialValues={genInitialValue().answers} onSubmit={() => {}}>
      {(formik) => {
        const hanldeChangeDirection = () => {
          // console.log(dadaTest,dataVocabulary,"1231232");

          const newArrVocabulary = [...dataVocabulary].sort(
            () => Math.random() - 0.5
          );

          setDataVocabulary(newArrVocabulary);
          changeDirection === "vn"
            ? setChangeDirection("en")
            : setChangeDirection("vn");
          formik.handleReset();
        };

        const checkValue = (index: number) => {
          if (changeDirection === "vn") {
            return dataVocabulary[index]?.vocabulary ===
              formik.values[index]?.mean
              ? true
              : false;
          } else {
            return dataVocabulary[index]?.mean === formik.values[index]?.mean
              ? true
              : false;
          }
        };

        return (
          <Form>
            <div className="" style={{ padding: "20px" }}>
              <div>
                {Array(vocabuleryNumber)
                  .fill(0)
                  .map((item, index) => {
                    return (
                      <div
                        key={index}
                        className=""
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <div className="" style={{ marginRight: "30px" }}>
                          {changeDirection === "vn"
                            ? dataVocabulary[index]?.mean
                            : dataVocabulary[index]?.vocabulary}
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FastField
                            component={TextField}
                            placeholder=""
                            label=""
                            {...formik.getFieldProps(`[${index}].mean`)}
                          />
                          <div className="" style={{ marginLeft: "20px" }}>
                            {checkValue(index) ? (
                              <CheckIcon sx={{ color: "green" }} />
                            ) : (
                              <CloseIcon sx={{ color: "red" }} />
                            )}
                            <div
                              className=""
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <div className="" style={{ marginRight: "5px" }} onClick={() => hanldeShowAnswer(index)}>
                                
                              {showAnswer===index ? <VisibilityOffIcon/> : <VisibilityIcon/>}
                                
                              </div>
                              {showAnswer===index && (
                                <div className="">
                                  {changeDirection === "vn"
                                    ? dataVocabulary[index].vocabulary
                                    : dataVocabulary[index].mean}
                                </div>
                              )}
                            </div>
                          </div>
                          {/* {checkValue(index) && (
                            <audio autoPlay src="/assets/audio/ok.mp3"></audio>
                          )} */}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className={classes.btn} onClick={hanldeChangeDirection}>
              doi chieu
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Practive;
