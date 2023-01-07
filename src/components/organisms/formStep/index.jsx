import { useContext } from "react";

import "./style.css";

import FormTitle from "../../atoms/FormTitle";
import FormDescribe from "../../atoms/FormDescribe";
import FormInputGroup from "../../molecules/FormInputGroup";

import formContext from "../../../contexts/form-context";

const FormStep = () => {
  const { step, pages, handleChange } = useContext(formContext);

  return (
    <div className="content-form_step">
      {pages[step] ? (
        <form action="">
          <FormTitle title={pages[step].title} />
          <FormDescribe description={pages[step].description} />
          {pages[step].inputs.map((input) => {
            const { id, label, textExample, value } = input;
            return (
              <FormInputGroup
                inputId={id}
                value={value}
                inputLabel={label}
                key={id}
                onChange={handleChange}
                textExample={textExample}
              />
            );
          })}
        </form>
      ) : (
        <div>
          <FormTitle title="404" />
          <FormDescribe description="Page Not Found!" />
        </div>
      )}
    </div>
  );
};

export default FormStep;
