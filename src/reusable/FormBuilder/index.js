import $ from "jquery";
import React, {createRef, useEffect} from 'react';

window.jQuery = $;
window.$ = $;

require("jquery-ui-sortable");
require("formBuilder");

const config = {
  disabledAttrs: [
    'access',
    'className',
    'description',
    'inline',
    'max',
    'maxlength',
    'min',
    'other',
    'rows',
    'step',
    'style',
    'subtype',
    'toggle',
  ],
  formData: [],
  fields: [
  ],
  replaceFields: [
    {
      type: "text",
      label: "Input field",
    },
    {
      type: "checkbox-group",
      label: "Checkbox",
    },
    {
      type: "radio-group",
      label: "Radio buttons",
    },
    {
      type: "file",
      label: "Attachment",
    },
    {
      type: "header",
      label: "Text Label",
    },

  ],
  controlOrder: [
    'header',
    'text',
    'checkbox-group',
    'radio-group',
  ],
  disabledFieldButtons: {
  },
};

const FormBuilder = (props) => {
  const {hideHeader, setTaskElementFormBuilder, isEdit, activityTasks, formBuilderList} = props;
  const fb = createRef();
  var formBuilder = {};
  const templates = {
  };
  config.templates = templates;
  useEffect(() => {
    let formData = formBuilderList?.actions?.getData ? formBuilderList.actions.getData('json', true) : [];
    if (activityTasks) formData = JSON.stringify(activityTasks);

    config.formData = formData;
    formBuilder = $(fb.current).formBuilder(config);
    if (activityTasks)
      formBuilder.promise.then(function (result) {
        result.formId = result.actions.getCurrentFieldId().split("-").splice(0, 3).join("-");
        console.log(result.formId);
        const x = JSON.parse(formData);
        const isTemplate = x.map(i => i?.isTemplate);
        if (formBuilder.actions.getCurrentFieldId) {
          result.actions.setData('[]');
          const id = formBuilder.actions.getCurrentFieldId().split("-").splice(0, 3).join("-");
          // console.log(formBuilder);
          const currentId = parseInt(formBuilder.actions.getCurrentFieldId().split("-").splice(3, 4)[0]);
          result.actions.setData(JSON.stringify(x));
          x.forEach((xx, index) => {
            if (isTemplate[index]) {
              // console.log("Form" + i, `${id}-${index + 1 + currentId}`);
              document.getElementById(`${id}-${index + 1 + currentId}`).classList.add("isTemplate");
            }
          });
        }
        setTaskElementFormBuilder(result)
      })
    else
      setTaskElementFormBuilder(formBuilder);
  }, []);
  return (
    <div className="work-location template">
      <div className="d-flex">
        <div className="work-header ">
          {!hideHeader && <>
            <div className="fs-16 fw-bold">Additional Details</div>
            <div className="gray-divider mt-10"/>
          </>}
        </div>
        <div className="work-header2">
          <div className="fs-16 fw-bold">Building Blocks</div>
          <div className="gray-divider mt-10"/>
        </div>
      </div>
      <div className="template-form" ref={fb}/>
    </div>
  )
};

export default FormBuilder;

